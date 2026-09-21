#!/usr/bin/env python3
#  ==========================================================================
#  RESTORE-EOL — undo the line-ending damage without touching the content
#  ==========================================================================
#  @reason: tools/add-uc-banner.py read and wrote with Python text mode. On the
#    four RO log pages that HEAD stores with mixed CRLF/CR/LF terminators, the
#    read silently translated every terminator to LF, so the banner insertion
#    landed as a ~1100-line diff in which EVERY line was rewritten. The banner
#    is ten lines; the diff should be ten lines.
#
#  @concept: This is not a content fix — the visible bytes are already correct.
#    It restores the TERMINATORS. For every line that still exists unchanged in
#    HEAD, HEAD's own terminator is put back verbatim. Only genuinely new lines
#    (my banner, plus a sibling card's uncommitted edits that live in the same
#    files) get a terminator, and they inherit it from the line above them,
#    which is the closest thing to what a byte-level patch would have produced.
#
#  @warning: These four files contain uncommitted work from ANOTHER card as
#    well as mine. That is exactly why the file is rebuilt line-by-line from a
#    diff rather than restored from HEAD and re-patched: a checkout would
#    destroy a sibling's work. The verification below proves the LF-normalised
#    content is byte-identical before and after, so nobody's edits can be lost.
#
#  Usage:
#      python3 tools/restore-eol.py            # report only
#      python3 tools/restore-eol.py --apply
#  ==========================================================================

import difflib
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

TARGETS = [
    "ro/data-bridge/json-log.html",
    "ro/delivery/github-log.html",
    "ro/ux/accessibility-log.html",
    "ro/ux/ux-foundations-log.html",
]


def split_keep(data: bytes):
    """Split bytes into (content, terminator) pairs, preserving CRLF / CR / LF."""
    out, i, start = [], 0, 0
    while i < len(data):
        if data[i : i + 2] == b"\r\n":
            out.append((data[start:i], b"\r\n"))
            i += 2
            start = i
        elif data[i : i + 1] in (b"\r", b"\n"):
            out.append((data[start:i], data[i : i + 1]))
            i += 1
            start = i
        else:
            i += 1
    if start < len(data):
        out.append((data[start:], b""))
    return out


def rebuild(rel):
    path = ROOT / rel
    head = subprocess.run(
        ["git", "show", f"HEAD:{rel}"], cwd=ROOT, capture_output=True
    ).stdout
    now = path.read_bytes()

    head_pairs = split_keep(head)
    now_pairs = split_keep(now)

    head_text = [c for c, _ in head_pairs]
    now_text = [c for c, _ in now_pairs]

    matcher = difflib.SequenceMatcher(None, head_text, now_text, autojunk=False)

    out = bytearray()
    #  @structure: last_term carries the terminator of the most recent line
    #    emitted, so an inserted line adopts its neighbour's convention rather
    #    than a hardcoded guess.
    last_term = b"\r\n"

    for tag, i1, i2, j1, j2 in matcher.get_opcodes():
        if tag == "equal":
            #  Unchanged line: restore HEAD's own terminator byte-for-byte.
            for k in range(i1, i2):
                content, term = head_pairs[k]
                out += content + term
                if term:
                    last_term = term
        else:
            #  New or changed line: content from the working tree, terminator
            #  inherited from the preceding line.
            for k in range(j1, j2):
                content, term = now_pairs[k]
                out += content + (last_term if term else b"")

    return bytes(out), now


def counts(data: bytes):
    crlf = data.count(b"\r\n")
    return {"crlf": crlf, "cr": data.count(b"\r") - crlf, "lf": data.count(b"\n") - crlf}


def norm(data: bytes):
    return data.replace(b"\r\n", b"\n").replace(b"\r", b"\n")


def main():
    apply = "--apply" in sys.argv
    failures = 0

    for rel in TARGETS:
        path = ROOT / rel
        rebuilt, current = rebuild(rel)
        head = subprocess.run(
            ["git", "show", f"HEAD:{rel}"], cwd=ROOT, capture_output=True
        ).stdout

        #  @reason: THE safety assertion. If the LF-normalised content changed
        #    at all, the rebuild moved something it had no business moving —
        #    someone's edit would be silently altered. Refuse in that case.
        safe = norm(rebuilt) == norm(current)

        print(f"  {rel}")
        print(f"      HEAD      {counts(head)}")
        print(f"      current   {counts(current)}")
        print(f"      rebuilt   {counts(rebuilt)}")
        print(f"      content identical after rebuild: {safe}")

        if not safe:
            failures += 1
            print("      REFUSED — rebuild would alter content, file left untouched")
            continue

        if apply:
            path.write_bytes(rebuilt)
            print("      written")

    print()
    if failures:
        print(f"FAIL — {failures} file(s) refused")
        return 1
    print("OK — every rebuild preserves content exactly")
    return 0


if __name__ == "__main__":
    sys.exit(main())
