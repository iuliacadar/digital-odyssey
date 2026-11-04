#!/usr/bin/env python3
#  ==========================================================================
#  INJECT-LOG-CONTENT — the typesetter that replaces filler with real prose
#  ==========================================================================
#  @block: Replaces each Lorem-ipsum paragraph inside <div class="log-text">
#    with the next entry from a content file, in document order. Used once
#    (commit 96740c9) to write the DAY 00+ narrative for 12 log topics.
#
#  @warning: The first version of this script caused two defects, and both
#    are worth remembering:
#    1. It pasted text into HTML WITHOUT ESCAPING IT. A sentence such as
#       "use <button> instead of a <div>" became a real button and a real
#       div on the accessibility log (audit 2026-11-04, F3). Text now goes
#       through html.escape before it touches the page.
#    2. It read and wrote in text mode, which silently rewrites line endings
#       (the newline trap described in tools/README.md). Files are now read
#       and written with newline="", and new lines use the file's own
#       line-ending style.
#
#  @bridge: tools/check-log-prose.py is the guard that catches defect 1 on
#    the live pages, whichever tool or hand produced it.
#
#  Content file format (JSON), one or more files:
#      { "<topic>": { "en": ["paragraph", ...], "ro": ["paragraf", ...] } }
#    Topics are the keys of TARGETS below.
#
#  Usage:
#      python3 tools/inject_log_content.py content1.json [content2.json ...]
#      python3 tools/inject_log_content.py --self-test
#  ==========================================================================

import html
import json
import pathlib
import re
import sys
import tempfile

#  @structure: Paths are relative to the repository, located from this file,
#    so the script runs on any machine and from any working directory. The
#    first version hard-coded one person's home directory.
ROOT = pathlib.Path(__file__).resolve().parent.parent

#  @reason: topic key -> page path inside each volume (en/ and ro/).
TARGETS = {
    "middlware": "backend/middlware-log.html",
    "testing": "backend/testing-log.html",
    "documentation": "backend/documentation-log.html",
    "performance": "backend/performance-log.html",
    "deployment": "backend/deployment-log.html",
    "sql": "database/sql-log.html",
    "nosql": "database/nosql-log.html",
    "uxfoundations": "ux/ux-foundations-log.html",
    "accessibility": "ux/accessibility-log.html",
    "git": "delivery/git-log.html",
    "github": "delivery/github-log.html",
    "deploymentpipeline": "delivery/deployment-pipeline-log.html",
}

#  @reason: Matches a log-text div holding a single Lorem-ipsum paragraph.
#    [^<] keeps the match inside that one paragraph: it cannot run past a tag.
LOG_TEXT_RE = re.compile(
    r'(<div class="log-text">\s*<p>\s*)(Lorem ipsum[^<]*?)(\s*</p>\s*</div>)',
    re.DOTALL,
)

INDENT = "              "


def wrap_paragraph(text, newline):
    """Word-wrap to about 78 columns after the indent, using the file's newline."""
    lines, cur, cur_len = [], [], 0
    for word in text.split():
        if cur and cur_len + len(word) + 1 > 78:
            lines.append(" ".join(cur))
            cur, cur_len = [word], len(word)
        else:
            cur.append(word)
            cur_len += len(word) + 1
    if cur:
        lines.append(" ".join(cur))
    return (newline + INDENT).join(lines)


def inject(path, entries):
    """Replace Lorem paragraphs in order. Returns (found, replaced)."""
    #  @warning: newline="" turns off Python's newline translation in BOTH
    #    directions, so "\r\n" is read as "\r\n" and written back unchanged.
    with open(path, encoding="utf-8", newline="") as f:
        page = f.read()
    newline = "\r\n" if "\r\n" in page else "\n"
    count = [0]

    def repl(m):
        idx = count[0]
        count[0] += 1
        if idx >= len(entries):
            return m.group(0)  # no entry left: keep the filler as it is
        #  @pedagogy: html.escape turns < > & into &lt; &gt; &amp;, so the
        #    browser shows them as characters instead of reading them as
        #    markup. quote=False leaves quotation marks alone: they are only
        #    special inside attribute values, and this is paragraph text.
        text = wrap_paragraph(html.escape(entries[idx], quote=False), newline)
        return f"{m.group(1)}{text}{newline}            {m.group(3).lstrip()}"

    new_page = LOG_TEXT_RE.sub(repl, page)
    if new_page != page:
        with open(path, "w", encoding="utf-8", newline="") as f:
            f.write(new_page)
    return count[0], min(count[0], len(entries))


def self_test():
    #  @reason: A guard nobody has seen fail is decoration. Both original
    #    defects get a planted case: a CRLF page with a Lorem block receives
    #    a sentence full of markup characters, and the test demands escaped
    #    output, CRLF everywhere, and an untouched remainder of the file.
    #    The 2026-11-04 audit ran the FIRST version against this fixture:
    #    it injected a raw <button> and lost the CRLF line endings.
    head = '<!doctype html>\r\n<html lang="en">\r\n<body>\r\n'
    block = ('<div class="log-text">\r\n  <p>\r\n    Lorem ipsum dolor sit amet.\r\n'
             '  </p>\r\n</div>\r\n')
    tail = '<p>Use <code>&lt;nav&gt;</code> here.</p>\r\n</body>\r\n</html>\r\n'
    with tempfile.TemporaryDirectory() as tmp:
        page = pathlib.Path(tmp) / "page.html"
        page.write_bytes((head + block + tail).encode("utf-8"))
        inject(page, ["Use <button> instead of a styled <div> & keep it semantic."])
        out = page.read_bytes().decode("utf-8")
    body = out.replace('<div class="log-text">', "")
    checks = {
        "markup is escaped": "&lt;button&gt;" in out and "&lt;div&gt;" in out and "&amp;" in out,
        "no raw tag was injected": "<button>" not in body and "<div>" not in body,
        "every line ending is still CRLF": "\n" not in out.replace("\r\n", ""),
        "text outside the block is untouched": out.startswith(head) and out.endswith(tail),
        "the filler is gone": "Lorem" not in out,
    }
    failed = [name for name, ok in checks.items() if not ok]
    if failed:
        print("SELF-TEST FAILED: " + "; ".join(failed))
        return 1
    print(f"SELF-TEST OK: {len(checks)} checks passed (escaping, line endings, surgical edit).")
    return 0


def main(argv):
    if "--self-test" in argv:
        return self_test()
    if not argv:
        print("usage: python3 tools/inject_log_content.py content.json [...]")
        print("       python3 tools/inject_log_content.py --self-test")
        print("No content files given. See the header of this script for the JSON format.")
        return 2
    content = {}
    for name in argv:
        with open(name, encoding="utf-8") as f:
            content.update(json.load(f))
    for topic, rel in TARGETS.items():
        if topic not in content:
            print(f"{topic}: no content, skipped")
            continue
        for lang in ("en", "ro"):
            entries = content[topic].get(lang, [])
            found, replaced = inject(ROOT / lang / rel, entries)
            print(f"{topic} {lang.upper()}: found={found} replaced={replaced}/{len(entries)}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
