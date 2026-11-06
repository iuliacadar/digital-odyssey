#!/usr/bin/env python3
"""Prove that `make rollback` undoes the tip of `main`, merge or not, and
refuses to run from a state where it would undo the wrong thing.

@reason: `make rollback` is the emergency button: it reverts the newest commit
  on `main` and pushes, and the push redeploys the public site. Since PRs
  #5-#8 were merged with GitHub's "Create a merge commit", the newest commit on
  `main` is usually a MERGE commit, and the first version ran a plain
  `git revert HEAD`, which git refuses on a merge ("is a merge but no -m option
  was given"). The button failed exactly when it was needed, and still exited
  0. It also never checked where it was run from (audit 2026-11-04, F10).

@concept: this test never touches GitHub or the real repository. Each
  scenario builds a throwaway git world in a temporary folder: a BARE
  repository that plays `origin` (what GitHub is for the real repo) and a
  working clone of it. The Makefile under test is committed into that clone
  and `make rollback` runs there, so "push to origin main" lands in the
  throwaway bare repo. A stand-in `gh` goes first on PATH, so the
  `deploy-status` hand-over at the end is answered locally too.

@warning: before every run the test checks that the clone's `origin` really
  is the temporary bare repo, and refuses to go on otherwise. A rollback test
  that could push to the live site would be the incident it is meant to
  prevent.

@pedagogy: each scenario says what a correct target MUST do, then checks the
  facts that prove it, not just the exit code: what `origin`'s `main` points
  at afterwards, whether the files now match the commit before the undone
  one, and which commit `deploy-status` was asked to watch. The exit code
  alone is not enough: the old target exits 0 after its revert has failed.

Usage:
    python3 tools/test-rollback.py                    # the repo's Makefile
    python3 tools/test-rollback.py --makefile OTHER   # e.g. an old copy

Exit code 0 = every scenario behaved, 1 = at least one did not.
"""
# @line: json reads the stand-in gh's call log, one JSON list per call.
import json
# @line: os gives the environment and the process-group kill.
import os
# @line: pathlib for every path; no string-glued paths.
import pathlib
# @line: shutil copies the Makefile under test into the throwaway clone.
import shutil
# @line: signal.SIGKILL ends a run that hangs (e.g. waiting for input).
import signal
# @line: subprocess runs git and make.
import subprocess
# @line: sys for argv, the interpreter path and the exit code.
import sys
# @line: tempfile gives each scenario its own folder, deleted afterwards.
import tempfile
# @line: textwrap.dedent lets the stub's source sit indented below.
import textwrap

# @line: the repository this file lives in; only used to find its Makefile
#   and to prove the throwaway origin is NOT inside it.
REPO = pathlib.Path(__file__).resolve().parent.parent

# @block: the stand-in `gh`. `make rollback` hands over to
#   `make deploy-status DEPLOY_SHA=<the revert commit>`, which asks
#   `gh run list --commit <sha>` for the run and then `gh run watch`es it.
#   The stub logs every call (so the test can see WHICH commit was asked
#   about), answers those two, and refuses anything else, so nothing real
#   can be triggered. With GH_STUB_FAIL=1 in its environment, the watched
#   run "fails", to test what rollback says when the redeploy goes wrong.
STUB = textwrap.dedent(
    """\
    #!{python}
    # @line: a stand-in for GitHub's `gh` CLI, written by tools/test-rollback.py.
    import json, os, sys
    # @line: where every call is appended, one JSON list of arguments per line.
    LOG = {log!r}
    # @line: the arguments make passed, without the program name.
    args = sys.argv[1:]
    # @line: record the call before answering, so even refused calls show up.
    with open(LOG, "a") as f:
        f.write(json.dumps(args) + "\\n")
    # @line: "which run belongs to this commit?" -> always run 4242.
    if args[:2] == ["run", "list"]:
        print(4242)
        sys.exit(0)
    # @line: "watch run 4242" -> success, unless the scenario asked for a failure.
    if args[:2] == ["run", "watch"]:
        failed = os.environ.get("GH_STUB_FAIL") == "1"
        print("stub gh: run 4242 finished: " + ("failure" if failed else "success"))
        sys.exit(1 if failed else 0)
    # @line: anything else is not part of the script; refuse loudly.
    print("stub gh: refusing unscripted command: gh " + " ".join(args), file=sys.stderr)
    sys.exit(2)
    """
)

# @line: a private git identity and no global/system config, so the user's
#   own settings (signing, hooks, aliases, default branch) cannot change
#   what the test sees. GIT_TERMINAL_PROMPT=0: never stop to ask for a login.
ENV = dict(
    os.environ,
    GIT_CONFIG_GLOBAL=os.devnull,
    GIT_CONFIG_NOSYSTEM="1",
    GIT_AUTHOR_NAME="Rollback Test",
    GIT_AUTHOR_EMAIL="rollback-test@example.invalid",
    GIT_COMMITTER_NAME="Rollback Test",
    GIT_COMMITTER_EMAIL="rollback-test@example.invalid",
    GIT_TERMINAL_PROMPT="0",
)


def git(cwd, *args, check=True):
    """Run one git command in `cwd` and return its stdout, stripped."""
    # @line: capture output; the test reads it rather than printing it.
    r = subprocess.run(["git", *args], cwd=cwd, capture_output=True, text=True, env=ENV)
    # @line: a failed setup step is a broken test, not a failed scenario.
    if check and r.returncode != 0:
        raise RuntimeError(f"git {' '.join(args)} failed in {cwd}:\n{r.stderr}")
    # @line: callers compare SHAs, so drop the trailing newline.
    return r.stdout.strip()


def commit_file(work, name, text, message):
    """Write one file and commit it, like a tiny PR commit."""
    # @line: the file's content is all that matters; the commit records it.
    (work / name).write_text(text)
    # @line: stage by explicit path, as the house rules require.
    git(work, "add", "--", name)
    # @line: commit with a pathspec, again by the house rules.
    git(work, "commit", "--quiet", "-m", message, "--", name)
    # @line: hand back the new commit's SHA.
    return git(work, "rev-parse", "HEAD")


def merge_pr(work, branch, files):
    """Make a PR branch with one commit per file, then merge it into main
    with a real merge commit, the way GitHub's "Create a merge commit" does."""
    # @line: the PR branch starts from the current main.
    git(work, "checkout", "--quiet", "-b", branch)
    # @line: one commit per file, so the "brought in" list has several lines.
    for name in files:
        commit_file(work, name, f"{name} from {branch}\n", f"feat: add {name}")
    # @line: back to main, where the merge lands.
    git(work, "checkout", "--quiet", "main")
    # @line: --no-ff forces a merge commit with two parents, as GitHub makes.
    git(work, "merge", "--quiet", "--no-ff", "-m", f"Merge pull request from {branch}", branch)
    # @line: GitHub deletes the merged branch; so does the test.
    git(work, "branch", "--quiet", "-D", branch)
    # @line: the merge commit is the new tip.
    return git(work, "rev-parse", "HEAD")


def build_world(tmp, makefile):
    """A bare `origin`, a clone `work` on main with the Makefile committed."""
    # @line: everything lives inside this scenario's temporary folder.
    tmp = pathlib.Path(tmp)
    # @line: the stand-in for GitHub, and the stand-in for her laptop clone.
    origin, work = tmp / "origin.git", tmp / "work"
    # @line: a bare repo has no working files, exactly like a server copy.
    git(tmp, "init", "--quiet", "--bare", "--initial-branch=main", str(origin))
    # @line: clone it; the clone's `origin` remote now points at the bare repo.
    git(tmp, "clone", "--quiet", str(origin), str(work))
    # @line: an empty clone has no branch yet; start main explicitly.
    git(work, "checkout", "--quiet", "-B", "main")
    # @line: the Makefile under test, committed, so the tree is clean and
    #   `make deploy-status` (called by name from inside rollback) finds it.
    shutil.copyfile(makefile, work / "Makefile")
    # @line: stage it by path.
    git(work, "add", "--", "Makefile")
    # @line: commit it as the first commit.
    git(work, "commit", "--quiet", "-m", "chore: the Makefile under test", "--", "Makefile")
    # @line: a "page", so there is site content to roll back.
    commit_file(work, "index.html", "<p>first version</p>\n", "feat: first page")
    # @line: publish to the stand-in origin; local main == origin's main.
    git(work, "push", "--quiet", "-u", "origin", "main")
    # @line: hand both back to the scenario setup.
    return origin, work


# @block: one setup function per scenario. Each starts from build_world and
#   leaves the clone in the state the scenario is about. The returned dict
#   carries the commit the rollback should undo (`tip`), if any.
def setup_merge_tip(origin, work):
    # @line: a PR with two commits, merged with a merge commit, pushed.
    merge = merge_pr(work, "pr-9", ["a.txt", "b.txt"])
    # @line: origin now ends in the merge, like main after PRs #5-#8.
    git(work, "push", "--quiet", "origin", "main")
    # @line: the merge is what rollback must undo.
    return {"tip": merge}


def setup_normal_tip(origin, work):
    # @line: one ordinary commit on top, pushed.
    tip = commit_file(work, "index.html", "<p>second version</p>\n", "fix: second page")
    # @line: publish it.
    git(work, "push", "--quiet", "origin", "main")
    # @line: that commit is what rollback must undo.
    return {"tip": tip}


def setup_normal_after_merge(origin, work):
    # @line: the PM's message-logic case: a plain commit on top of a merge.
    #   Only the plain commit must be undone; the merge stays.
    merge_pr(work, "pr-9", ["a.txt", "b.txt"])
    # @line: the plain commit on top.
    tip = commit_file(work, "index.html", "<p>hotfix</p>\n", "fix: hotfix on top of the merge")
    # @line: publish both.
    git(work, "push", "--quiet", "origin", "main")
    # @line: only the plain commit is the target.
    return {"tip": tip}


def setup_dirty_modified(origin, work):
    # @line: a merge tip, as in the main case...
    setup_merge_tip(origin, work)
    # @line: ...plus an edited, uncommitted tracked file.
    (work / "index.html").write_text("<p>half-finished edit, not committed</p>\n")
    # @line: nothing should be undone.
    return {}


def setup_dirty_staged(origin, work):
    # @line: a merge tip...
    setup_merge_tip(origin, work)
    # @line: ...plus a new file that is staged but not committed.
    (work / "c.txt").write_text("staged, not committed\n")
    # @line: staged: in the index, not in a commit.
    git(work, "add", "--", "c.txt")
    # @line: nothing should be undone.
    return {}


def setup_not_on_main(origin, work):
    # @line: a merge tip on main...
    setup_merge_tip(origin, work)
    # @line: ...but she is on another branch.
    git(work, "checkout", "--quiet", "-b", "some-feature")
    # @line: nothing should be undone.
    return {}


def setup_detached(origin, work):
    # @line: a merge tip on main...
    setup_merge_tip(origin, work)
    # @line: ...but HEAD is a bare commit with no branch ("detached").
    git(work, "checkout", "--quiet", "--detach", "HEAD")
    # @line: nothing should be undone.
    return {}


def setup_behind(origin, work):
    # @line: someone else pushes from another clone; this clone has not
    #   pulled, so its idea of "the tip" is out of date.
    setup_merge_tip(origin, work)
    # @line: a second clone, the "other machine".
    other = work.parent / "other"
    # @line: clone the same stand-in origin.
    git(work.parent, "clone", "--quiet", str(origin), str(other))
    # @line: a new commit there...
    commit_file(other, "d.txt", "pushed from elsewhere\n", "feat: pushed from another machine")
    # @line: ...pushed; origin is now one ahead of this clone.
    git(other, "push", "--quiet", "origin", "main")
    # @line: nothing should be undone.
    return {}


def setup_ahead(origin, work):
    # @line: a local commit never pushed. A rollback push would publish it.
    setup_merge_tip(origin, work)
    # @line: committed here only.
    commit_file(work, "e.txt", "local only\n", "wip: never pushed")
    # @line: nothing should be undone.
    return {}


def setup_push_refused(origin, work):
    # @line: a merge tip, and an origin that rejects every push, the way
    #   GitHub does when someone pushed a second earlier or access is gone.
    info = setup_merge_tip(origin, work)
    # @line: a server-side hook that says no.
    hook = origin / "hooks" / "pre-receive"
    # @line: print a reason and refuse.
    hook.write_text("#!/bin/sh\necho 'stand-in origin: push refused for the test' >&2\nexit 1\n")
    # @line: hooks must be executable to run.
    hook.chmod(0o755)
    # @line: the tip is still the merge; it just cannot be published.
    return info


# @block: the scenarios. `answer` is what is typed at the [y/N] prompt.
#   expect_rolled_back=True means: a new commit on origin's main whose parent
#   is the old tip and whose files equal the tip's FIRST parent (the commit
#   before it on main), and deploy-status asked about exactly that commit.
#   False means: nothing changed, neither on origin nor locally (except
#   where `local_revert_ok` says a local, unpushed revert is the expected
#   leftover). `shell` runs make with another /bin/sh (macOS's is bash).
SCENARIOS = [
    {"name": "merge tip, answer y: revert with -m 1, push, watch the redeploy",
     "setup": setup_merge_tip, "answer": "y\n", "expect_ok": True,
     "expect_rolled_back": True, "expect_text": ["feat: add a.txt", "feat: add b.txt"]},
    {"name": "merge tip under bash (macOS's /bin/sh): same result",
     "setup": setup_merge_tip, "answer": "y\n", "expect_ok": True, "shell": "/bin/bash",
     "expect_rolled_back": True, "expect_text": ["feat: add a.txt", "feat: add b.txt"]},
    {"name": "normal tip, answer Y: plain revert, push, watch the redeploy",
     "setup": setup_normal_tip, "answer": "Y\n", "expect_ok": True,
     "expect_rolled_back": True, "expect_text": ["fix: second page"]},
    {"name": "normal tip on top of a merge: undo only that commit, keep the merge",
     "setup": setup_normal_after_merge, "answer": "y\n", "expect_ok": True,
     "expect_rolled_back": True, "expect_text": ["fix: hotfix on top of the merge"]},
    {"name": "answer N: nothing changes",
     "setup": setup_merge_tip, "answer": "n\n", "expect_ok": True,
     "expect_rolled_back": False, "expect_text": ["aborted"]},
    {"name": "just Enter (the default is No): nothing changes",
     "setup": setup_merge_tip, "answer": "\n", "expect_ok": True,
     "expect_rolled_back": False, "expect_text": ["aborted"]},
    {"name": "dirty tree (edited file): refuse before asking",
     "setup": setup_dirty_modified, "answer": "y\n", "expect_ok": False,
     "expect_rolled_back": False, "expect_text": ["uncommitted"], "expect_no_prompt": True},
    {"name": "dirty index (staged file): refuse before asking",
     "setup": setup_dirty_staged, "answer": "y\n", "expect_ok": False,
     "expect_rolled_back": False, "expect_text": ["uncommitted"], "expect_no_prompt": True},
    {"name": "not on main: refuse before asking",
     "setup": setup_not_on_main, "answer": "y\n", "expect_ok": False,
     "expect_rolled_back": False, "expect_text": ["some-feature"], "expect_no_prompt": True},
    {"name": "detached HEAD (no branch at all): refuse before asking",
     "setup": setup_detached, "answer": "y\n", "expect_ok": False,
     "expect_rolled_back": False, "expect_text": ["detached"], "expect_no_prompt": True},
    {"name": "behind origin (not pulled): refuse before asking",
     "setup": setup_behind, "answer": "y\n", "expect_ok": False,
     "expect_rolled_back": False, "expect_text": ["only on GitHub"], "expect_no_prompt": True},
    {"name": "ahead of origin (unpushed commit): refuse before asking",
     "setup": setup_ahead, "answer": "y\n", "expect_ok": False,
     "expect_rolled_back": False, "expect_text": ["not pushed"], "expect_no_prompt": True},
    {"name": "make -n rollback (dry run), answer y: nothing changes",
     "setup": setup_merge_tip, "answer": "y\n", "expect_ok": True, "dry_run": True,
     "expect_rolled_back": False, "expect_text": []},
    {"name": "origin refuses the push: fail loudly, site unchanged, no deploy watch",
     "setup": setup_push_refused, "answer": "y\n", "expect_ok": False,
     "expect_rolled_back": False, "local_revert_ok": True,
     "expect_text": ["push was refused", "site is unchanged"]},
    {"name": "redeploy fails after the push: fail loudly, say the revert IS pushed",
     "setup": setup_merge_tip, "answer": "y\n", "expect_ok": False, "gh_fail": True,
     "expect_rolled_back": True, "expect_text": ["revert IS pushed"]},
]

# @line: the prompt's marker; seeing it means rollback got as far as asking.
PROMPT = "[y/N]"


def snapshot(origin, work):
    """Everything a rollback could change: origin's main, the local branch
    and commit, and the working tree status."""
    # @line: four facts, read the same way before and after the run.
    return {
        "origin_main": git(origin, "rev-parse", "refs/heads/main"),
        "head": git(work, "rev-parse", "HEAD"),
        "branch": git(work, "symbolic-ref", "--quiet", "--short", "HEAD", check=False),
        "status": git(work, "status", "--porcelain"),
    }


def run_scenario(makefile, sc, tmp):
    """Build the world, run `make rollback` with the scripted answer, and
    return (exit code, output, list of problems)."""
    # @line: a fresh origin + clone for this scenario only.
    origin, work = build_world(tmp, makefile)
    # @line: put the clone into the state the scenario is about.
    info = sc["setup"](origin, work)

    # @warning: the guard described at the top. Refuse unless `origin` is the
    #   throwaway bare repo inside this scenario's temporary folder.
    url = pathlib.Path(git(work, "remote", "get-url", "origin")).resolve()
    # @line: it must be exactly our bare repo, and nowhere inside the real repo.
    if url != origin.resolve() or url == REPO or REPO in url.parents:
        raise SystemExit(f"SAFETY STOP: test clone's origin is {url}, not the throwaway repo")

    # @line: a private bin/ folder that goes first on PATH, for the stub gh.
    bindir = pathlib.Path(tmp) / "bin"
    # @line: create it.
    bindir.mkdir()
    # @line: the stub's call log starts empty.
    log = pathlib.Path(tmp) / "gh-calls.jsonl"
    # @line: create it, so "no calls" reads as an empty file.
    log.touch()
    # @line: write the stub as an executable named `gh`.
    gh = bindir / "gh"
    # @line: fill in this interpreter and this log path.
    gh.write_text(STUB.format(python=sys.executable, log=str(log)))
    # @line: executable, or the shell would not run it.
    gh.chmod(0o755)
    # @line: same environment as git above, with the stub first on PATH.
    env = dict(ENV, PATH=f"{bindir}{os.pathsep}{ENV['PATH']}")
    # @line: make imports the environment, so clear the knobs a developer
    #   might have exported; the scenario must not depend on them.
    for k in ("DEPLOY_SHA", "DEPLOY_WAIT", "DEPLOY_POLL", "MAKEFLAGS", "MAKELEVEL"):
        env.pop(k, None)
    # @line: ask the stub to report a failed deploy run, if the scenario wants it.
    if sc.get("gh_fail"):
        env["GH_STUB_FAIL"] = "1"

    # @line: the state before, to compare with the state after.
    before = snapshot(origin, work)
    # @line: the command, as she would type it (plus -n or SHELL= if asked).
    cmd = ["make", "--no-print-directory"]
    # @line: a dry run must change nothing even after a "y".
    if sc.get("dry_run"):
        cmd.append("-n")
    # @line: another /bin/sh, e.g. bash as on macOS.
    if sc.get("shell"):
        cmd.append(f"SHELL={sc['shell']}")
    # @line: the target under test.
    cmd.append("rollback")
    # @line: a new session puts make and its children in one process group,
    #   so a hang (e.g. waiting for input) can be killed as a whole.
    proc = subprocess.Popen(cmd, cwd=work, env=env, stdin=subprocess.PIPE,
                            stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True,
                            start_new_session=True)
    # @line: type the answer, then wait at most a minute.
    try:
        out, _ = proc.communicate(sc["answer"], timeout=60)
    # @line: a hang is a failure, not a test that never ends.
    except subprocess.TimeoutExpired:
        os.killpg(proc.pid, signal.SIGKILL)
        out, _ = proc.communicate()
        out += "\n<killed after 60s>"
    # @line: the state after.
    after = snapshot(origin, work)
    # @line: every gh call the stub saw, oldest first.
    gh_calls = [json.loads(line) for line in log.read_text().splitlines()]

    # @block: compare what happened with what the scenario expects.
    problems = []
    # @line: exit code first: 0 for success and for a plain "No".
    ok = proc.returncode == 0
    # @line: a wrong exit code in either direction is a problem.
    if ok != sc["expect_ok"]:
        problems.append(f"exit {proc.returncode}, expected {'0' if sc['expect_ok'] else 'non-zero'}")
    # @line: the plain-English facts the output must contain.
    for text in sc["expect_text"]:
        if text not in out:
            problems.append(f"output does not mention {text!r}")
    # @line: a refusal must come BEFORE the question, never after a "y".
    if sc.get("expect_no_prompt") and PROMPT in out:
        problems.append("asked [y/N] although it should have refused first")

    # @block: the rollback happened: check it undid exactly the tip.
    if sc["expect_rolled_back"]:
        # @line: the commit that was supposed to be undone.
        tip = info["tip"]
        # @line: what origin's main points at now.
        new = after["origin_main"]
        # @line: it must have moved, or nothing was published.
        if new == before["origin_main"]:
            problems.append("origin's main did not move: nothing was pushed")
        # @line: it moved; now check it is the right undo.
        else:
            # @line: the new commit sits directly on the old tip.
            if git(origin, "rev-parse", f"{new}^1") != tip:
                problems.append("the pushed commit is not on top of the old tip")
            # @line: a revert has one parent; a second one means a merge slipped in.
            if git(origin, "rev-parse", "--verify", "--quiet", f"{new}^2", check=False):
                problems.append("the pushed commit is itself a merge, expected a revert")
            # @line: the files must be exactly those of the tip's FIRST parent:
            #   main before the merge, or the commit before the plain one.
            want_tree = git(origin, "rev-parse", f"{tip}^1^{{tree}}")
            # @line: the files as they are now on origin.
            got_tree = git(origin, "rev-parse", f"{new}^{{tree}}")
            # @line: any difference means the wrong thing was undone.
            if want_tree != got_tree:
                problems.append("files after the rollback do not match the commit before the tip")
        # @line: her clone must end up equal to what is live.
        if after["head"] != new:
            problems.append("local main does not match origin's main after the push")
        # @line: and with no leftovers in the working tree.
        if after["status"]:
            problems.append(f"working tree not clean afterwards: {after['status']!r}")
        # @line: the deploy watch must be about the revert commit, nothing older.
        listed = [c for c in gh_calls if c[:2] == ["run", "list"]]
        # @line: deploy-status passes the SHA to `gh run list --commit`.
        if not any(new in c for c in listed):
            problems.append(f"deploy-status was not asked about the revert commit {new[:7]}")
    # @block: no rollback expected: nothing may have changed.
    else:
        # @line: the facts that must be untouched.
        keys = ["origin_main", "branch", "status"]
        # @line: a refused push leaves the revert on this computer, and says so.
        if not sc.get("local_revert_ok"):
            keys.append("head")
        # @line: compare each one.
        for key in keys:
            if before[key] != after[key]:
                problems.append(f"{key} changed: {before[key]!r} -> {after[key]!r}")
        # @line: no push, so no deploy to watch.
        if gh_calls:
            problems.append(f"gh was called although nothing was pushed: {gh_calls}")

    # @line: hand everything back for the report.
    return proc.returncode, out, problems


def main():
    """Run every scenario against one Makefile and print a report."""
    # @line: by default the Makefile of this checkout.
    makefile = REPO / "Makefile"
    # @line: or another one, e.g. the old version, to show it failing.
    if "--makefile" in sys.argv:
        makefile = pathlib.Path(sys.argv[sys.argv.index("--makefile") + 1]).resolve()
    # @line: say which file is being judged.
    print(f"Makefile under test: {makefile}")
    # @line: a blank line before the first scenario.
    print()

    # @line: how many scenarios misbehaved.
    failures = 0
    # @line: one throwaway world per scenario, deleted when it ends.
    for sc in SCENARIOS:
        with tempfile.TemporaryDirectory(prefix="rollback-test-") as tmp:
            code, out, problems = run_scenario(makefile, sc, tmp)
        # @line: count a scenario once, however many problems it had.
        failures += bool(problems)
        # @line: verdict and name.
        print(f"[{'PASS' if not problems else 'FAIL'}] {sc['name']}")
        # @line: the exit code make returned.
        print(f"       exit {code}")
        # @line: everything rollback printed, indented, so a reader sees what she would.
        for line in out.strip().splitlines():
            print(f"       | {line}")
        # @line: each problem found, marked so it stands out.
        for p in problems:
            print(f"       !! {p}")
        # @line: a blank line between scenarios.
        print()

    # @line: one summary line.
    print("ALL SCENARIOS PASSED — rollback undoes the right commit or refuses."
          if not failures else
          f"{failures} SCENARIO(S) FAILED — rollback can fail or undo the wrong thing.")
    # @line: 0 only when everything behaved, so CI or a hook can rely on it.
    sys.exit(0 if not failures else 1)


# @line: run main() only when executed, not when imported.
if __name__ == "__main__":
    main()
