#!/usr/bin/env python3
"""Prove that `make deploy-status` watches the run for the commit just pushed.

@reason: `make deploy` pushes `main` and then hands over to `make deploy-status`
  to report whether the publish worked. The first version of that target asked
  GitHub for "the latest deploy run" (`gh run list --limit 1`). Right after a
  push the new run is often not registered yet, so "the latest" is the
  PREVIOUS deploy — and if that one was green, the target reports success for
  a deploy it never looked at (audit 2026-11-04, F10). A green tick that
  belongs to somebody else's commit is worse than no tick at all.

@concept: this test never talks to GitHub. It puts a stand-in `gh` first on
  PATH: a small script that plays back a scripted list of runs, makes the new
  run "appear" only after a few polls (the race, reproduced on demand), and
  writes down which run id it was asked to watch. Any `gh` command it does not
  recognise is refused, so the test cannot trigger a real deploy by accident.

@pedagogy: each scenario states what the target MUST do, then checks two
  facts — the exit code and the run id it actually watched. The exit code
  alone is not enough: the old target exits 0 in the race scenario, which is
  exactly the lie being tested for.

Usage:
    python3 tools/test-deploy-status.py                    # the repo's Makefile
    python3 tools/test-deploy-status.py --makefile OTHER   # e.g. an old copy

Exit code 0 = every scenario behaved, 1 = at least one did not.
"""
import json
import os
import pathlib
import signal
import subprocess
import sys
import tempfile
import textwrap

REPO = pathlib.Path(__file__).resolve().parent.parent

# @line: two fake commits. OLD is the one already deployed; NEW is the one
#   `make deploy` has just pushed. Full 40-character SHAs, like git prints.
OLD = "1" * 40
NEW = "2" * 40

# @line: the short-SHA scenario needs a commit this clone really knows, because
#   the target expands a short SHA with `git rev-parse`. HEAD will do; its run
#   is scripted below like any other. None outside a git checkout.
_head = subprocess.run(["git", "rev-parse", "--verify", "--quiet", "HEAD^{commit}"],
                       cwd=REPO, capture_output=True, text=True)
LOCAL = _head.stdout.strip() if _head.returncode == 0 else None

# @block: the stand-in `gh`. It reads its script (the runs, when each one
#   becomes visible) from a JSON state file and appends every call to it.
STUB = textwrap.dedent(
    """\
    #!{python}
    import json, sys
    STATE = {state!r}
    with open(STATE) as f:
        s = json.load(f)
    args = sys.argv[1:]

    def opt(name):
        # @line: accept both spellings gh accepts: `--limit 1` and `--limit=1`.
        for i, a in enumerate(args):
            if a == name and i + 1 < len(args):
                return args[i + 1]
            if a.startswith(name + "="):
                return a.split("=", 1)[1]
        return None

    def save():
        with open(STATE, "w") as f:
            json.dump(s, f)

    if args[:2] == ["run", "list"]:
        s["list_calls"] += 1
        save()
        if s.get("list_fails"):
            print("stub gh: HTTP 401: Bad credentials", file=sys.stderr)
            sys.exit(1)
        if opt("--workflow") != "deploy.yml":
            print("stub gh: expected --workflow=deploy.yml", file=sys.stderr)
            sys.exit(2)
        runs = [r for r in s["runs"] if r["visible_from_call"] <= s["list_calls"]]
        if opt("--commit"):
            runs = [r for r in runs if r["headSha"] == opt("--commit")]
        runs.sort(key=lambda r: r["databaseId"], reverse=True)
        if opt("--limit"):
            runs = runs[: int(opt("--limit"))]
        jq = opt("--jq")
        if jq not in (".[0].databaseId", ".[0].databaseId // empty"):
            print("stub gh: unsupported --jq %r" % jq, file=sys.stderr)
            sys.exit(2)
        # @line: real gh prints nothing at all for an empty list (checked
        #   against gh 2.46), so the stub does the same.
        if runs:
            print(runs[0]["databaseId"])
        sys.exit(0)

    if args[:2] == ["run", "watch"]:
        ids = [a for a in args[2:] if not a.startswith("-")]
        if not ids:
            print("stub gh: run watch needs a run id", file=sys.stderr)
            sys.exit(2)
        s["watched"].append(int(ids[0]))
        save()
        run = next((r for r in s["runs"] if r["databaseId"] == int(ids[0])), None)
        if run is None:
            print("stub gh: no run %s" % ids[0], file=sys.stderr)
            sys.exit(1)
        print("stub gh: run %d for %s... finished: %s"
              % (run["databaseId"], run["headSha"][:7], run["conclusion"]))
        ok = run["conclusion"] == "success"
        sys.exit(0 if ok or "--exit-status" not in args else 1)

    print("stub gh: refusing unscripted command: gh " + " ".join(args), file=sys.stderr)
    sys.exit(2)
    """
)

# @block: the scenarios. `visible_from_call` = the number of the `gh run list`
#   call from which a run shows up; 1 means "already there on the first look".
#   Each `expect` is what a correct target must do.
SCENARIOS = [
    {
        "name": "race: new run registers late, previous run was green",
        "runs": [
            {"databaseId": 100, "headSha": OLD, "conclusion": "success", "visible_from_call": 1},
            {"databaseId": 200, "headSha": NEW, "conclusion": "failure", "visible_from_call": 3},
        ],
        "wait": 30,
        "expect_watched": [200],
        "expect_ok": False,
    },
    {
        "name": "never appears: only the previous run exists",
        "runs": [
            {"databaseId": 100, "headSha": OLD, "conclusion": "success", "visible_from_call": 1},
        ],
        "wait": 2,
        "expect_watched": [],
        "expect_ok": False,
        "expect_text": NEW,
    },
    {
        "name": "happy path: new run already registered and green",
        "runs": [
            {"databaseId": 100, "headSha": OLD, "conclusion": "success", "visible_from_call": 1},
            {"databaseId": 200, "headSha": NEW, "conclusion": "success", "visible_from_call": 1},
        ],
        "wait": 30,
        "expect_watched": [200],
        "expect_ok": True,
    },
    {
        "name": "gh itself fails (e.g. not logged in): stop, don't wait",
        "runs": [],
        "list_fails": True,
        "wait": 30,
        "expect_watched": [],
        "expect_ok": False,
        "expect_max_list_calls": 1,
    },
    # @reason: the four scenarios below come from the QA of audit fix #8.
    #   `gh run list --commit` matches the FULL SHA only, so a short one found
    #   nothing and the target reported "no run" for a run that existed.
    {
        "name": "short SHA this clone knows: expand it, watch its run",
        "needs_local": True,
        "sha": "LOCAL_SHORT",
        "runs": [
            {"databaseId": 200, "headSha": "LOCAL", "conclusion": "success", "visible_from_call": 1},
            {"databaseId": 300, "headSha": OLD, "conclusion": "success", "visible_from_call": 1},
        ],
        "wait": 2,
        "expect_watched": [200],
        "expect_ok": True,
    },
    {
        "name": "short SHA this clone cannot expand: refuse at once, ask for the full SHA",
        "sha": NEW[:7],
        "runs": [
            {"databaseId": 100, "headSha": OLD, "conclusion": "success", "visible_from_call": 1},
        ],
        "wait": 30,
        "expect_watched": [],
        "expect_ok": False,
        "expect_text": "full 40-character SHA",
        "expect_max_list_calls": 0,
    },
    # @warning: `DEPLOY_POLL=00` used to slip past a check for the literal `0`
    #   and poll in a tight loop forever, so these two scenarios run under a
    #   short timeout that kills the whole process group, loop included.
    {
        "name": "DEPLOY_POLL=00 (zero in disguise): refuse, never poll",
        "poll": "00",
        "runs": [
            {"databaseId": 100, "headSha": OLD, "conclusion": "success", "visible_from_call": 1},
        ],
        "wait": 30,
        "timeout": 10,
        "expect_watched": [],
        "expect_ok": False,
        "expect_text": "DEPLOY_POLL",
        "expect_max_list_calls": 0,
    },
    {
        "name": "DEPLOY_POLL=08 (not a number to shell arithmetic): refuse with our message",
        "poll": "08",
        "runs": [
            {"databaseId": 100, "headSha": OLD, "conclusion": "success", "visible_from_call": 1},
        ],
        "wait": 30,
        "timeout": 20,
        "expect_watched": [],
        "expect_ok": False,
        "expect_text": "DEPLOY_POLL",
        "expect_max_list_calls": 0,
    },
]


def resolve(value):
    """Swap the LOCAL placeholders for the real commit (see LOCAL above)."""
    if value == "LOCAL":
        return LOCAL
    if value == "LOCAL_SHORT":
        return LOCAL[:7]
    return value


def run_scenario(makefile, scenario, tmp):
    state = pathlib.Path(tmp) / "state.json"
    runs = [dict(r, headSha=resolve(r["headSha"])) for r in scenario["runs"]]
    state.write_text(json.dumps({
        "runs": runs,
        "list_fails": scenario.get("list_fails", False),
        "list_calls": 0,
        "watched": [],
    }))
    bindir = pathlib.Path(tmp) / "bin"
    bindir.mkdir(exist_ok=True)
    gh = bindir / "gh"
    gh.write_text(STUB.format(python=sys.executable, state=str(state)))
    gh.chmod(0o755)

    env = dict(os.environ, PATH=f"{bindir}{os.pathsep}{os.environ['PATH']}")
    # @warning: the commit is always passed explicitly (DEPLOY_SHA), so the
    #   target never asks the real `origin` which commit is live. An older
    #   Makefile simply ignores the three variables, which is the point: it
    #   is judged on what it does, not on what it is told. DEPLOY_POLL=1
    #   keeps the waiting scenarios to a couple of seconds.
    sha = resolve(scenario.get("sha", NEW))
    poll = scenario.get("poll", "1")
    # @line: a new session puts make, its shell and any `sleep` in one process
    #   group, so a timeout can kill them all. Killing only make would leave
    #   an endless poll loop running behind the test's back.
    proc = subprocess.Popen(
        ["make", "-s", "--no-print-directory", "-f", str(makefile), "deploy-status",
         f"DEPLOY_SHA={sha}", f"DEPLOY_WAIT={scenario['wait']}", f"DEPLOY_POLL={poll}"],
        cwd=REPO, env=env, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True,
        start_new_session=True,
    )
    timed_out = False
    try:
        out, err = proc.communicate(timeout=scenario.get("timeout", 120))
    except subprocess.TimeoutExpired:
        timed_out = True
        os.killpg(proc.pid, signal.SIGKILL)
        out, err = proc.communicate()
    result = subprocess.CompletedProcess(proc.args, proc.returncode, out, err)
    final = json.loads(state.read_text())
    final["timed_out"] = timed_out
    return result, final


def main():
    makefile = REPO / "Makefile"
    if "--makefile" in sys.argv:
        makefile = pathlib.Path(sys.argv[sys.argv.index("--makefile") + 1]).resolve()
    print(f"Makefile under test: {makefile}")
    print(f"pushed commit (NEW): {NEW[:7]}   previous deploy (OLD): {OLD[:7]}")
    print()

    failures = 0
    for sc in SCENARIOS:
        if sc.get("needs_local") and LOCAL is None:
            # @line: say what was not checked, rather than pass it in silence.
            print(f"[SKIP] {sc['name']}")
            print("       not run from a git checkout, so there is no local commit to expand")
            print()
            continue
        with tempfile.TemporaryDirectory() as tmp:
            result, final = run_scenario(makefile, sc, tmp)
        ok = result.returncode == 0
        problems = []
        if final["timed_out"]:
            problems.append(f"still running after {sc['timeout']}s, killed (endless poll loop?)")
        if final["watched"] != sc["expect_watched"]:
            problems.append(f"watched run(s) {final['watched']}, expected {sc['expect_watched']}")
        if ok != sc["expect_ok"]:
            verdict = "FALSE SUCCESS" if ok else "unexpected failure"
            problems.append(f"exit {result.returncode} ({verdict})")
        if sc.get("expect_text") and sc["expect_text"] not in result.stdout + result.stderr:
            problems.append(f"output does not mention {sc['expect_text']!r}")
        if "expect_max_list_calls" in sc and final["list_calls"] > sc["expect_max_list_calls"]:
            problems.append(f"called gh run list {final['list_calls']}x, "
                            f"expected at most {sc['expect_max_list_calls']}")

        mark = "PASS" if not problems else "FAIL"
        failures += bool(problems)
        print(f"[{mark}] {sc['name']}")
        print(f"       exit {result.returncode}, gh run list called {final['list_calls']}x, "
              f"watched {final['watched'] or 'nothing'}")
        for line in (result.stdout + result.stderr).strip().splitlines():
            print(f"       | {line}")
        for p in problems:
            print(f"       !! {p}")
        print()

    print("ALL SCENARIOS PASSED — deploy-status watches the pushed commit or refuses."
          if not failures else
          f"{failures} SCENARIO(S) FAILED — deploy-status can report on the wrong run.")
    sys.exit(0 if not failures else 1)


if __name__ == "__main__":
    main()
