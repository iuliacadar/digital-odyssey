#!/usr/bin/env python3
#  ==========================================================================
#  CHECK-NOOPENER — the ship's own customs officer
#  ==========================================================================
#  @reason: Every link that opens a new tab (target="_blank") must also carry
#    rel="noopener noreferrer". Without "noopener", the page we open receives
#    a live window.opener handle pointing back at OUR tab and can rewrite it
#    underneath the visitor — the attack known as "tab-nabbing". "noreferrer"
#    additionally withholds our URL from the destination's Referer header.
#
#  @concept: A rule nobody can check is a rule that decays. This script is the
#    check. It reads every HTML and JS file under en/ and ro/, finds every
#    anchor that opens a new tab, and exits non-zero if even one of them is
#    missing either token. Run it before a commit, or wire it into CI.
#
#  Usage:
#      python3 tools/check-noopener.py          # from the repository root
#      echo $?                                  # 0 = clean, 1 = violations
#
#      python3 tools/check-noopener.py --self-test
#                                               # prove the checker still bites
#  ==========================================================================

import pathlib
import re
import sys

#  @structure: The script locates the repo root relative to ITSELF, so it runs
#    correctly from any working directory (CI runners rarely cd where you
#    expect). tools/check-noopener.py -> parent is tools/ -> parent is root.
ROOT = pathlib.Path(__file__).resolve().parent.parent

#  @reason: Only the live site is policed. Markdown journals and backlogs
#    quote old markup on purpose as a historical record — rewriting prose
#    that documents the past would falsify the log.
GLOBS = ("en/**/*.html", "ro/**/*.html", "en/**/*.js", "ro/**/*.js")

#  --------------------------------------------------------------------------
#  PATTERN 1 — the HTML anchor
#  --------------------------------------------------------------------------
#  @warning: re.DOTALL matters here. Anchors in this project are sometimes
#    wrapped across several lines by the formatter:
#        <a href="bibliography.html" target="_blank"
#          >Arhivele Adâncului</a
#        >
#    A line-by-line grep would miss the attributes that drifted to line two.
#    Matching the whole opening tag with [^>]*? and re.S catches both shapes.
ANCHOR = re.compile(r"""<a\b[^>]*?target\s*=\s*["']_blank["'][^>]*?>""", re.I | re.S)

#  --------------------------------------------------------------------------
#  PATTERN 2 — the anchor built in JavaScript
#  --------------------------------------------------------------------------
#  @bridge: bibliography.js and script.js do not write markup; they build
#    elements with document.createElement("a") and then set .target/.rel as
#    properties. Those assignments never appear inside a <a ...> tag, so the
#    HTML pattern above cannot see them — they need their own probe.
JS_TARGET = re.compile(r"""(\w+)\.target\s*=\s*["']_blank["']""")
JS_REL = re.compile(r"""(\w+)\.rel\s*=\s*["']([^"']*)["']""")

REQUIRED = ("noopener", "noreferrer")


def line_of(text, index):
    """Translate a character offset into a 1-based line number for the report."""
    return text.count("\n", 0, index) + 1


def check_file(path):
    """Return a list of (line, excerpt, why) violations found in one file."""
    text = path.read_text(encoding="utf-8")
    problems = []

    #  --- HTML anchors -----------------------------------------------------
    for match in ANCHOR.finditer(text):
        tag = match.group(0)
        missing = [token for token in REQUIRED if token not in tag]
        if missing:
            excerpt = " ".join(tag.split())[:110]
            problems.append(
                (line_of(text, match.start()), excerpt, f"missing {', '.join(missing)}")
            )

    #  --- JS-constructed anchors -------------------------------------------
    #  @concept: collect every rel assignment per variable name first, then ask
    #    whether the variable that got target="_blank" also got a complete rel.
    #    This is a deliberately simple, same-file heuristic — it does not follow
    #    a variable across functions, but this codebase builds each anchor in
    #    one block, and a heuristic that reports honestly beats a parser that
    #    pretends to certainty it does not have.
    rels = {}
    for match in JS_REL.finditer(text):
        rels.setdefault(match.group(1), []).append(match.group(2))

    for match in JS_TARGET.finditer(text):
        var = match.group(1)
        values = rels.get(var, [])
        if not any(all(token in value for token in REQUIRED) for value in values):
            problems.append(
                (
                    line_of(text, match.start()),
                    f'{var}.target = "_blank"',
                    f"no matching {var}.rel with noopener noreferrer",
                )
            )

    return problems


def self_test():
    """@reason: A guard nobody has ever seen fail is not a guard — it is a
    decoration. tools/fixtures/ holds markup with KNOWN violations and known
    correct links. This run asserts the checker still flags every planted
    fault and still stays quiet on the two correct ones. If a future edit
    loosens a pattern, this goes red before the site does.
    """
    expected = {
        #  (fixture file, 1-based line) -> what it is testing
        ("violations.html", 6): "plain single-line anchor, no rel",
        ("violations.html", 9): "anchor wrapped across lines by the formatter",
        ("violations.html", 14): 'half-fixed: rel="noopener" without noreferrer',
        ("violations.html", 17): "single-quoted attributes",
        ("violations.js", 9): "JS anchor with no .rel assignment",
        ("violations.js", 12): 'JS anchor with incomplete .rel',
    }

    fixtures = pathlib.Path(__file__).resolve().parent / "fixtures"
    found = set()
    for path in sorted(fixtures.glob("violations.*")):
        for line, _excerpt, _why in check_file(path):
            found.add((path.name, line))

    missed = set(expected) - found          #  faults the checker failed to see
    spurious = found - set(expected)        #  correct links wrongly reported

    for key in sorted(missed):
        print(f"  SELF-TEST MISS     {key[0]}:{key[1]}  — {expected[key]}")
    for key in sorted(spurious):
        print(f"  SELF-TEST FALSE +  {key[0]}:{key[1]}  — flagged a valid link")

    print()
    if missed or spurious:
        print(f"SELF-TEST FAIL — {len(missed)} missed, {len(spurious)} false positive(s)")
        return 1
    print(f"SELF-TEST OK — all {len(expected)} planted violations caught,")
    print("               both correct links left alone.")
    return 0


def main():
    #  @structure: the fixtures deliberately contain violations, so the normal
    #    scan must never walk into tools/. GLOBS already confines the scan to
    #    en/ and ro/, which keeps the two concerns from colliding.
    if "--self-test" in sys.argv:
        return self_test()

    total = 0
    scanned = 0

    for glob in GLOBS:
        for path in sorted(ROOT.glob(glob)):
            scanned += 1
            for line, excerpt, why in check_file(path):
                rel_path = path.relative_to(ROOT)
                print(f"  {rel_path}:{line}  {why}\n      {excerpt}")
                total += 1

    print()
    if total:
        print(f"FAIL — {total} target=\"_blank\" link(s) without rel=\"noopener noreferrer\"")
        print(f"       across {scanned} scanned file(s).")
        return 1

    print(f'OK — {scanned} files scanned, every target="_blank" carries')
    print('     rel="noopener noreferrer".')
    return 0


if __name__ == "__main__":
    sys.exit(main())
