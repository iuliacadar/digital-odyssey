#!/usr/bin/env python3
"""Negative control: does the prune proof actually FAIL when removal misbehaves?

@reason: A safety check that has only ever printed "SAFE" has not been shown to
  be a check at all. Three plausible ways remove() could go wrong are injected
  here, and the proof must reject every one of them. If any injection still
  passes, the proof is decoration and the prune must not be trusted.
"""
import importlib.util
import pathlib
import subprocess
import sys

spec = importlib.util.spec_from_file_location("uc", "tools/add-uc-banner.py")
uc = importlib.util.module_from_spec(spec)
spec.loader.exec_module(uc)

#  @warning: Prefer git history, but never REQUIRE it. CI clones at depth 1,
#    where `git show 339e531:...` fails outright — a guard that errors in CI
#    gets muted, and a muted guard is worse than none. Falls back to a
#    banner-bearing page on disk, which is the state that actually ships.
REL = "ro/ux/accessibility-log.html"   # mixed CRLF page — the hardest case

have_history = subprocess.run(
    ["git", "cat-file", "-e", "339e531^{commit}"], capture_output=True
).returncode == 0

if have_history:
    post = subprocess.run(
        ["git", "show", f"339e531:{REL}"], capture_output=True, check=True
    ).stdout.decode("utf-8")
    source = f"{REL} @ 339e531"
else:
    candidates = [
        p for glob in uc.GLOBS for p in sorted(pathlib.Path(".").glob(glob))
        if uc.MARKER in uc.read_source(p)
    ]
    if not candidates:
        print("NOTHING TO CHECK — no banner-bearing page to inject faults into.")
        sys.exit(1)
    #  @reason: Prefer a mixed-terminator page; it is the one where a sloppy
    #    remover does its damage. Fall back to any banner page.
    chosen = next(
        (p for p in candidates if "\r\n" in uc.read_source(p)), candidates[0]
    )
    post = uc.read_source(chosen)
    source = f"{chosen} (working tree)"

print(f"sample: {source}\n")

good = uc.remove(post)
real_remove = uc.remove

INJECTIONS = {
    "normalises all newlines to LF (the 1100-line-diff bug)":
        lambda raw: real_remove(raw).replace("\r\n", "\n"),
    "eats one extra neighbouring line":
        lambda raw: "\n".join(real_remove(raw).split("\n")[:-2]),
    "leaves the aside behind, strips only the comment":
        lambda raw: raw[: raw.find("<!-- @block:")] + raw[raw.find("<aside class=\"under-construction\""):],
}

print("Negative control — each injected fault must be REJECTED:\n")
all_caught = True


def meaningful(text):
    return [" ".join(l.split()) for l in text.splitlines() if l.strip()]


def profile(data: bytes):
    crlf = data.count(b"\r\n")
    return crlf, data.count(b"\r") - crlf, data.count(b"\n") - crlf


span = (uc.BANNER_BLOCK.search(post) or uc.BANNER_ASIDE.search(post)).group(0)
entitled = set(meaningful(span))
before_lines = meaningful(post)
owned = profile(span.encode())
p_before = profile(post.encode())

import difflib

for name, broken in INJECTIONS.items():
    out = broken(post)
    after_lines = meaningful(out)
    removed, added = [], []
    for tag, i1, i2, j1, j2 in difflib.SequenceMatcher(None, before_lines, after_lines).get_opcodes():
        if tag in ("delete", "replace"):
            removed.extend(before_lines[i1:i2])
        if tag in ("insert", "replace"):
            added.extend(after_lines[j1:j2])

    problems = []
    if "under-construction" in out:
        problems.append("banner survived")
    if added:
        problems.append(f"added {len(added)} line(s)")
    strays = [l for l in removed if l not in entitled]
    if strays:
        problems.append(f"removed {len(strays)} unowned line(s)")
    p_after = profile(out.encode())
    for idx, lbl in ((0, "CRLF"), (1, "CR")):
        drop = p_before[idx] - p_after[idx]
        if drop < 0 or drop > owned[idx] + 2:
            problems.append(f"{lbl} churn ({p_before[idx]} -> {p_after[idx]})")

    verdict = "REJECTED" if problems else "*** SLIPPED THROUGH ***"
    if not problems:
        all_caught = False
    print(f"  {verdict:24s} {name}")
    for p in problems:
        print(f"        caught: {p}")

print()
print("Control passed — the proof rejects every injected fault."
      if all_caught else
      "CONTROL FAILED — the proof cannot detect real damage.")
sys.exit(0 if all_caught else 1)
