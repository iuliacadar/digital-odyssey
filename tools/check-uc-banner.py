#!/usr/bin/env python3
#  ==========================================================================
#  CHECK-UC-BANNER — the ship's acceptance gate for BACKLOG #008, condition 3
#  ==========================================================================
#  @reason: The backlog condition is not "most log pages carry a banner". It is
#    "no log page shows an empty body or placeholder text without an Under
#    Construction banner". Those are two distinct failure shapes — filler prose
#    and genuine emptiness — and a check that only looks for "lorem" would sign
#    off on a page that renders a blank deck.
#
#  @concept: This is the gate, not the fixer. tools/add-uc-banner.py writes the
#    banners; this script refuses to agree that the work is done until every
#    deck either has real content or admits that it does not.
#
#  Three verdicts per log page:
#      CONTENT  — real prose, no filler, no banner needed
#      DECLARED — filler and/or emptiness, and a banner says so
#      NAKED    — filler and/or emptiness with NO banner   <- the failure
#
#  Usage:
#      python3 tools/check-uc-banner.py        # exit 0 = clean, 1 = violations
#      python3 tools/check-uc-banner.py -v     # list every page and verdict
#  ==========================================================================

import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
GLOBS = ("en/**/*-log.html", "ro/**/*-log.html")

#  @warning: Comments are stripped first. This codebase's didactic comments are
#    essays that legitimately discuss the word "lorem" and describe empty
#    states. Only what the VISITOR sees can decide the verdict.
COMMENT = re.compile(r"<!--.*?-->", re.S)
SCRIPT_STYLE = re.compile(r"<(script|style)\b.*?</\1>", re.S | re.I)
TAG = re.compile(r"<[^>]+>")

LOREM = re.compile(r"lorem", re.I)
ARTICLE = re.compile(r'<article[^>]*class="[^"]*\blog-entry\b[^"]*"[^>]*>(.*?)</article>', re.S)
BANNER = re.compile(r'class="[^"]*\bunder-construction\b[^"]*"')

#  @reason: A log entry whose visible text is shorter than this is a shell —
#    a heading and a note-terminal with nothing said between them. 120 chars is
#    roughly two short sentences; below that there is no log, only furniture.
MIN_ENTRY_CHARS = 120


def visible(html):
    """Reduce markup to the text a reader actually sees."""
    text = COMMENT.sub("", html)
    text = SCRIPT_STYLE.sub("", text)
    text = TAG.sub(" ", text)
    return re.sub(r"\s+", " ", text).strip()


def audit(path):
    raw = path.read_text(encoding="utf-8")
    shown = COMMENT.sub("", raw)

    has_banner = bool(BANNER.search(shown))
    bodies = ARTICLE.findall(shown)

    filler = sum(1 for b in bodies if LOREM.search(b))

    #  @concept: "Empty" is judged on the TEXT a visitor reads, with the note
    #    terminal's placeholder and button label excluded by the tag strip —
    #    a textarea placeholder is not content, it is an invitation.
    empty = sum(1 for b in bodies if len(visible(b)) < MIN_ENTRY_CHARS)

    #  A deck with no entries at all is the most empty page of all.
    hollow = len(bodies) == 0

    unlabelled = (filler or empty or hollow) and not has_banner

    if unlabelled:
        verdict = "NAKED"
    elif filler or empty or hollow:
        verdict = "DECLARED"
    else:
        verdict = "CONTENT"

    return verdict, {
        "entries": len(bodies),
        "filler": filler,
        "empty": empty,
        "hollow": hollow,
        "banner": has_banner,
    }


def main():
    verbose = "-v" in sys.argv
    naked, tally = [], {"CONTENT": 0, "DECLARED": 0, "NAKED": 0}

    for glob in GLOBS:
        for path in sorted(ROOT.glob(glob)):
            rel = path.relative_to(ROOT)
            verdict, facts = audit(path)
            tally[verdict] += 1
            if verdict == "NAKED":
                naked.append((rel, facts))
            if verbose:
                print(
                    f"  {verdict:8s} {str(rel):48s} "
                    f"entries={facts['entries']:<3} filler={facts['filler']:<3} "
                    f"empty={facts['empty']:<3} banner={facts['banner']}"
                )

    if naked:
        print()
        for rel, facts in naked:
            print(f"  NAKED  {rel}  {facts}")

    print()
    print(f"CONTENT  (real prose, no banner needed): {tally['CONTENT']}")
    print(f"DECLARED (filler/empty, banner present): {tally['DECLARED']}")
    print(f"NAKED    (filler/empty, NO banner):      {tally['NAKED']}")
    print()

    if naked:
        print(f"FAIL — {len(naked)} log page(s) show empty or placeholder content")
        print("       with no Under Construction banner (BACKLOG-EN.md #008).")
        return 1

    total = tally["CONTENT"] + tally["DECLARED"]
    print(f"OK — all {total} log page(s) either carry real content or declare")
    print("     themselves under construction. BACKLOG-EN.md #008 condition 3 met.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
