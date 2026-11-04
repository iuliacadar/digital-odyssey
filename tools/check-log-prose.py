#!/usr/bin/env python3
#  ==========================================================================
#  CHECK-LOG-PROSE — the proofreader who reads what the browser reads
#  ==========================================================================
#  @reason: Log entries often TALK about HTML: "use <button> instead of a
#    styled <div>". Written raw like that, the browser does not show the
#    words. It builds a real <button> and a real <div> in the middle of the
#    sentence, and the tag names vanish from the text. On the accessibility
#    log this once created a focusable button wrapping half a paragraph.
#    A tag name meant as WORDS must be escaped: <code>&lt;button&gt;</code>.
#
#  @concept: The browser is not a proofreader; it never complains. It quietly
#    repairs whatever it is given, so broken prose looks "fine" in the source
#    and wrong only on screen. This script is the complaint the browser never
#    makes. It reads every <p> inside a <div class="log-text"> on every log
#    page and fails if it finds a tag that does not belong in a sentence.
#
#  @bridge: tools/inject_log_content.py was the original source of these
#    defects: it pasted text into the HTML without escaping it.
#
#  Usage:
#      python3 tools/check-log-prose.py              # 0 = clean, 1 = violations
#      python3 tools/check-log-prose.py --self-test  # prove the checker still bites
#  ==========================================================================

import pathlib
import re
import sys

#  @structure: Locate the repo root relative to this file, so the script runs
#    from any working directory.
ROOT = pathlib.Path(__file__).resolve().parent.parent
GLOBS = ("en/**/*-log.html", "ro/**/*-log.html")
FIXTURE = ROOT / "tools" / "fixtures" / "log-prose-violations.html"

#  @reason: Only inline, non-interactive tags belong inside a sentence.
#    Links (<a>) are the one interactive exception, because a link in prose
#    is the point. Anything else (<div>, <nav>, <button>, <label>, <fieldset>)
#    inside a <p> means a tag name was written as markup instead of as text.
#  @warning: Keep this list short. Adding a tag here because the checker
#    "complains" about it defeats the checker: first ask whether the tag was
#    meant as words.
ALLOWED = {
    "a", "abbr", "b", "br", "cite", "code", "em", "i", "kbd", "mark",
    "q", "s", "samp", "small", "span", "strong", "sub", "sup", "time",
    "u", "var",
}

LOG_TEXT = re.compile(r'<div class="log-text">(.*?)</div>', re.S)
PARAGRAPH = re.compile(r"<p\b[^>]*>(.*?)</p>", re.S)
TAG = re.compile(r"</?([a-zA-Z][a-zA-Z0-9-]*)\b[^>]*>")
COMMENT = re.compile(r"<!--.*?-->", re.S)


def scan(path):
    """Return a list of (line, tag) for every out-of-place tag in log prose."""
    text = path.read_text(encoding="utf-8")
    found = []
    for block in LOG_TEXT.finditer(text):
        for para in PARAGRAPH.finditer(block.group(1)):
            #  @warning: Strip comments first. The teaching comments discuss
            #    markup on purpose, and they are not rendered.
            body = COMMENT.sub(lambda m: " " * len(m.group(0)), para.group(1))
            for tag in TAG.finditer(body):
                name = tag.group(1).lower()
                if name not in ALLOWED:
                    offset = block.start(1) + para.start(1) + tag.start()
                    found.append((text.count("\n", 0, offset) + 1, f"<{name}>"))
    return found


def self_test():
    #  @reason: A guard nobody has seen fail is decoration. The fixture plants
    #    four violations and two lookalikes that must stay quiet.
    found = scan(FIXTURE)
    tags = sorted(t for _, t in found)
    expected = sorted(["<button>", "<div>", "<nav>", "<fieldset>"])
    if tags != expected:
        print(f"SELF-TEST FAILED: expected {expected}, got {tags}")
        return 1
    print(f"SELF-TEST OK: all {len(expected)} planted violations detected, no false alarms.")
    return 0


def main():
    if "--self-test" in sys.argv[1:]:
        return self_test()
    files = sorted({p for g in GLOBS for p in ROOT.glob(g)})
    problems = 0
    for path in files:
        for line, tag in scan(path):
            problems += 1
            print(f"{path.relative_to(ROOT)}:{line}: {tag} inside log prose. "
                  f"If it is meant as words, write <code>&lt;...&gt;</code>.")
    if problems:
        print(f"FAIL: {problems} tag(s) in log prose would be rendered as real elements.")
        return 1
    print(f"OK: {len(files)} log pages scanned, no stray markup in log prose.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
