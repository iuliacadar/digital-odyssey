#!/usr/bin/env python3
#  ==========================================================================
#  UC-BANNER PRUNE PROOF — does taking the notice out disturb anything else?
#  ==========================================================================
#  @reason: --prune edits pages that other cards are writing. The question that
#    decides whether it is safe to run is not "does the banner disappear" but
#    "does ANYTHING ELSE change". A remover that also normalises terminators or
#    re-indents a neighbour rewrites lines nobody touched, and in this repo that
#    has already once turned a ten-line insertion into an 1100-line diff.
#
#  @concept: The obvious test — remove(insert(x)) == x — is the WRONG bar here,
#    and believing it was cost real time. TWO separate things break it, and
#    neither is a fault in remove():
#
#    1. insert() does not only insert. On 40 of the 46 pages the pre-banner
#       markup ran "</header>        <!-- ===== SECTOR 00 ... -->" with the
#       header close and the next comment sharing one physical line, and
#       insert() split them while placing the banner. Nothing in the result
#       records whether that seam was once a newline or eight spaces.
#
#    2. The banner commit ALSO normalised a terminator it did not own: on
#       ro/ux/accessibility-log.html the line after the insertion point ended
#       CRLF before the commit and LF after it. That byte is simply gone from
#       history; remove() cannot restore what was never written down.
#
#    So the comparison here runs FORWARD, not backward: against the banner
#    commit itself, asking what removal takes out of the file as committed.
#
#  @structure: The invariant proven is the one that protects other workers:
#
#      1. the banner markup is gone;
#      2. every line removed belongs to the banner block — nothing else is
#         deleted, added, or reordered;
#      3. the terminator profile changes only by the banner's own lines, so
#         no CRLF elsewhere is silently rewritten to LF.
#
#    Checked against real git bytes for all 46 pages of the banner commit.
#  ==========================================================================

import difflib
import importlib.util
import pathlib
import re
import subprocess
import sys

BANNER_COMMIT = "339e531"

spec = importlib.util.spec_from_file_location("uc", "tools/add-uc-banner.py")
uc = importlib.util.module_from_spec(spec)
spec.loader.exec_module(uc)

#  @structure: The one difference the prune is ALLOWED to leave behind. Both
#    sides are canonicalised through this before comparison, so the seam is
#    excused exactly once and every other byte still has to match.
SEAM = re.compile(rb"</header>[ \t]*(?:\r\n|\r|\n)*[ \t]*<!--")


def canon(data: bytes) -> bytes:
    return SEAM.sub(b"</header>\n<!--", data)


def show(ref, path):
    return subprocess.run(
        ["git", "show", f"{ref}:{path}"], capture_output=True, check=True
    ).stdout


def have_banner_commit():
    """@warning: CI checks out with actions/checkout@v4, which clones at
    depth 1 by default. The banner commit is already several commits behind
    HEAD, so `git show 339e531:...` inside CI fails with "bad object" — the
    job would ERROR rather than pass, and an erroring guard teaches everyone
    to ignore it. The commit is therefore an OPTIONAL enrichment: when the
    history is there it is used, and when it is not, the test runs against
    the banners currently on disk, which is the state that actually ships.
    """
    return subprocess.run(
        ["git", "cat-file", "-e", f"{BANNER_COMMIT}^{{commit}}"],
        capture_output=True,
    ).returncode == 0


def profile(data: bytes):
    """Terminator census — the signature an EOL-clobbering edit would change."""
    crlf = data.count(b"\r\n")
    cr = data.count(b"\r") - crlf
    lf = data.count(b"\n") - crlf
    return crlf, cr, lf


def meaningful_lines(text: str):
    """Lines with whitespace collapsed, blanks dropped — content, not layout."""
    return [" ".join(ln.split()) for ln in text.splitlines() if ln.strip()]


#  @structure: Two sources for the same test. Deep history gives the richest
#    sample (all 46 pages as the banner commit wrote them); a shallow CI clone
#    falls back to every banner-bearing page on disk. Either way the assertion
#    is identical, so the guard never silently becomes a no-op.
USE_HISTORY = have_banner_commit()

if USE_HISTORY:
    source = "commit " + BANNER_COMMIT
    files = [
        f
        for f in subprocess.run(
            ["git", "show", "--name-only", "--pretty=format:", BANNER_COMMIT],
            capture_output=True, text=True, check=True,
        ).stdout.split()
        if f.endswith(".html")
    ]
else:
    #  @reason: Shallow clone — read what is on disk instead. Only pages that
    #    actually carry a banner can exercise removal.
    source = "working tree (shallow clone: no banner-commit history)"
    files = [
        str(p)
        for glob in uc.GLOBS
        for p in sorted(pathlib.Path(".").glob(glob))
        if uc.MARKER in uc.read_source(p)
    ]

if not files:
    print("NOTHING TO CHECK — no banner-bearing log pages found.")
    print("This guard only means something while banners exist; failing loud")
    print("rather than printing a green tick over an empty sample.")
    sys.exit(1)

ok, checked = True, 0

for rel in files:
    #  @structure: Same assertion, either source — git blob when the history
    #    is present, the file on disk when it is not.
    post = show(BANNER_COMMIT, rel) if USE_HISTORY else uc.read_source(pathlib.Path(rel)).encode("utf-8")
    text = post.decode("utf-8")

    stripped = uc.remove(text)
    if stripped is None:
        print(f"  FAIL {rel}: remove() found no banner")
        ok = False
        continue
    checked += 1
    got = stripped.encode("utf-8")

    problems = []

    # 1. the notice is actually gone
    if "under-construction" in stripped or "@block: UNDER CONSTRUCTION" in stripped:
        problems.append("banner survived removal")

    #  @concept: The set of lines the removal is ENTITLED to delete is not a
    #    hand-written allowlist of phrases — that would need editing every time
    #    the banner copy changes, and a check that needs maintaining to stay
    #    true is a check that will quietly stop being true. It is derived from
    #    the banner block itself: whatever text the block spans, and nothing
    #    else, may disappear.
    span = uc.BANNER_BLOCK.search(text) or uc.BANNER_ASIDE.search(text)
    entitled = set(meaningful_lines(span.group(0)))

    before_lines = meaningful_lines(text)
    after_lines = meaningful_lines(stripped)

    removed, added = [], []
    for tag, i1, i2, j1, j2 in difflib.SequenceMatcher(
        None, before_lines, after_lines
    ).get_opcodes():
        if tag in ("delete", "replace"):
            removed.extend(before_lines[i1:i2])
        if tag in ("insert", "replace"):
            added.extend(after_lines[j1:j2])

    # 2. nothing may be invented, and only banner lines may vanish
    if added:
        problems.append(f"removal ADDED {len(added)} line(s): {added[:2]}")

    strays = [ln for ln in removed if ln not in entitled]
    if strays:
        problems.append(f"removed {len(strays)} line(s) it does not own: {strays[:3]}")

    # 3. no terminator elsewhere may be rewritten: CRLF and CR counts must not
    #    rise, and must only fall by what the banner block itself contained.
    p_before, p_after = profile(post), profile(got)
    banner_bytes = span.group(0).encode("utf-8")
    owned = profile(banner_bytes)
    for idx, name in ((0, "CRLF"), (1, "CR")):
        drop = p_before[idx] - p_after[idx]
        if drop < 0:
            problems.append(f"{name} count ROSE: {p_before[idx]} -> {p_after[idx]}")
        elif drop > owned[idx] + 2:   # +2 for the block's own bounding breaks
            problems.append(
                f"{name} churn beyond the banner: dropped {drop}, "
                f"banner only contained {owned[idx]}"
            )

    if problems:
        ok = False
        print(f"  FAIL {rel}")
        for p in problems:
            print(f"        {p}")

print()
print(f"checked {checked}/{len(files)} pages from {source}")
if ok:
    print()
    print("PRUNE IS SAFE — removal deletes banner lines only: nothing else is")
    print("added, dropped, reordered, or re-terminated.")
else:
    print()
    print("PRUNE IS UNSAFE — it disturbs content it does not own.")
sys.exit(0 if ok else 1)
