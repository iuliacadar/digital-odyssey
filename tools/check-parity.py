#!/usr/bin/env python3
#  ==========================================================================
#  CHECK-PARITY — the twin inspector
#  ==========================================================================
#  @reason: The ship flies as two twin volumes, en/ and ro/. Their prose and
#    comments may differ (that is the point of a bilingual journal), but
#    their CODE must not: one language must never behave differently from
#    the other. Three rules broke in practice, and this script checks each:
#
#    1. CODE PARITY. script.js, style.css and bibliography.js must be
#       identical in both volumes once comments are removed. When the EN
#       sidebar generator was committed and its RO twin was not, 14 RO log
#       pages went live with an empty map (audit 2026-11-04, F1).
#    2. LANGUAGE TOGGLES. Every EN/RO switch must lead to the SAME page in
#       the other volume, and highlight the page's own language. A copied
#       template once sent 40 log pages to the CSS log (F2).
#    3. MECHANISM REFERENCES. Every "MECANISM NN" a comment points to must
#       exist in that volume's script.js. All 23 RO log pages once named a
#       generator "MECANISMUL 04.5" that never existed.
#
#  @concept: The existing gates guard rules that already hold. This one
#    guards the rules that actually broke: it is the regression net woven
#    from the audit's own findings.
#
#  Usage:
#      python3 tools/check-parity.py              # 0 = twins agree, 1 = problems
#      python3 tools/check-parity.py --self-test  # prove the checker still bites
#  ==========================================================================

import difflib
import html.parser
import pathlib
import posixpath
import re
import sys

#  @structure: Locate the repo root relative to this file, so the script runs
#    from any working directory.
ROOT = pathlib.Path(__file__).resolve().parent.parent
FIXTURES = ROOT / "tools" / "fixtures" / "parity"
TWIN_FILES = ("script.js", "style.css", "bibliography.js")
VOLUMES = ("en", "ro")


#  --------------------------------------------------------------------------
#  RULE 1 — CODE PARITY
#  --------------------------------------------------------------------------
#  @warning: Removing comments is harder than deleting everything after "//".
#    "https://example.com" contains "//" and is CODE. So the stripper walks
#    the file character by character and knows when it is inside a string,
#    a template literal (including `${...}` with nested strings) or a regex
#    literal. A naive stripper would hide a changed URL, and the fixture
#    plants exactly that case.
#  @reason: Comments are replaced by spaces and newlines are kept, so every
#    line keeps its number and a problem can be reported at the right line.

#  Characters after which a "/" starts a regex literal rather than a division.
REGEX_AFTER = set("(,=:[!&|?{};+-*%<>~^") | {""}


def strip_js(src):
    out = []
    i, n = 0, len(src)
    stack = []  # open template literals; each entry counts "{" depth inside ${...}
    last = ""  # last significant code character, to tell regex from division

    def blank(text):
        return "".join("\n" if c == "\n" else " " for c in text)

    while i < n:
        c = src[i]
        nxt = src[i + 1] if i + 1 < n else ""
        if stack and stack[-1] == -1:  # inside template text
            if c == "\\":
                out.append(src[i:i + 2]); i += 2; continue
            if c == "`":
                stack.pop(); out.append(c); i += 1; last = "`"; continue
            if c == "$" and nxt == "{":
                stack[-1] = 0; out.append("${"); i += 2; last = "{"; continue
            out.append(c); i += 1; continue
        if c == "/" and nxt == "/":
            end = src.find("\n", i)
            end = n if end == -1 else end
            out.append(blank(src[i:end])); i = end; continue
        if c == "/" and nxt == "*":
            end = src.find("*/", i + 2)
            end = n if end == -1 else end + 2
            out.append(blank(src[i:end])); i = end; continue
        if c in "\"'":
            j = i + 1
            while j < n and src[j] != c and src[j] != "\n":
                j += 2 if src[j] == "\\" else 1
            out.append(src[i:j + 1]); i = j + 1; last = c; continue
        if c == "`":
            stack.append(-1); out.append(c); i += 1; continue
        if c == "/" and (last in REGEX_AFTER or re.search(r"\b(return|typeof|case)\s*$", "".join(out[-12:]))):
            j, in_class = i + 1, False
            while j < n and src[j] != "\n":
                if src[j] == "\\": j += 2; continue
                if src[j] == "[": in_class = True
                elif src[j] == "]": in_class = False
                elif src[j] == "/" and not in_class: break
                j += 1
            out.append(src[i:j + 1]); i = j + 1; last = "/"; continue
        if stack and c == "{":
            stack[-1] += 1
        elif stack and c == "}":
            if stack[-1] == 0:
                stack[-1] = -1; out.append(c); i += 1; continue  # back to template text
            stack[-1] -= 1
        out.append(c)
        if not c.isspace():
            last = c
        i += 1
    return "".join(out)


def strip_css(src):
    out, i, n = [], 0, len(src)
    while i < n:
        c = src[i]
        if c == "/" and src[i + 1:i + 2] == "*":
            end = src.find("*/", i + 2)
            end = n if end == -1 else end + 2
            out.append("".join("\n" if ch == "\n" else " " for ch in src[i:end])); i = end; continue
        if c in "\"'":
            j = i + 1
            while j < n and src[j] != c and src[j] != "\n":
                j += 2 if src[j] == "\\" else 1
            out.append(src[i:j + 1]); i = j + 1; continue
        out.append(c); i += 1
    return "".join(out)


def code_lines(path):
    """(line number, code with whitespace trimmed) for every line that holds code."""
    src = path.read_text(encoding="utf-8")
    stripped = strip_css(src) if path.suffix == ".css" else strip_js(src)
    #  @reason: indentation alone is not a difference in behaviour, so each
    #    line is trimmed; blank lines (often left by removed comments) vanish.
    return [(no, line.strip()) for no, line in enumerate(stripped.splitlines(), 1) if line.strip()]


def code_differences(en_file, ro_file):
    """List of (en line, ro line, en code, ro code) where the twins disagree."""
    en, ro = code_lines(en_file), code_lines(ro_file)
    matcher = difflib.SequenceMatcher(None, [t for _, t in en], [t for _, t in ro], autojunk=False)
    diffs = []
    for op, a1, a2, b1, b2 in matcher.get_opcodes():
        if op == "equal":
            continue
        for k in range(max(a2 - a1, b2 - b1)):
            e = en[a1 + k] if a1 + k < a2 else (None, "")
            r = ro[b1 + k] if b1 + k < b2 else (None, "")
            diffs.append((e[0], r[0], e[1], r[1]))
    return diffs


#  --------------------------------------------------------------------------
#  RULE 2 — LANGUAGE TOGGLES
#  --------------------------------------------------------------------------
#  @reason: The toggle links are found with Python's own HTML parser, not a
#    pattern. The formatter sometimes wraps an anchor over three lines
#    (">RO</a" then ">" alone), and a parser does not care.

class ToggleFinder(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.links, self._open = [], None

    def handle_starttag(self, tag, attrs):
        if tag == "a":
            a = dict(attrs)
            self._open = {"href": a.get("href", ""), "classes": (a.get("class") or "").split(),
                          "text": "", "line": self.getpos()[0]}

    def handle_data(self, data):
        if self._open is not None:
            self._open["text"] += data

    def handle_endtag(self, tag):
        if tag == "a" and self._open is not None:
            if self._open["text"].strip() in ("EN", "RO"):
                self.links.append(self._open)
            self._open = None


def toggle_problems(site_root, pages):
    """List of (page, line, message). pages are paths like 'en/frontend/css-log.html'."""
    problems = []
    for page in pages:
        volume, rest = page.split("/", 1)
        finder = ToggleFinder()
        finder.feed((site_root / page).read_text(encoding="utf-8"))
        langs = sorted(link["text"].strip().lower() for link in finder.links)
        if langs != ["en", "ro"]:
            problems.append((page, 0, f"expected one EN and one RO toggle link, found {langs or 'none'}"))
            continue
        for link in finder.links:
            lang = link["text"].strip().lower()
            target = posixpath.normpath(posixpath.join(posixpath.dirname(page), link["href"]))
            want = f"{lang}/{rest}"
            if target != want:
                problems.append((page, link["line"], f'{lang.upper()} toggle leads to "{target}", expected "{want}"'))
            elif not (site_root / target).is_file():
                problems.append((page, link["line"], f'{lang.upper()} toggle leads to "{target}", which does not exist'))
            active = "lang-toggle-active" in link["classes"]
            if active != (lang == volume):
                state = "is marked active" if active else "is not marked active"
                problems.append((page, link["line"], f"{lang.upper()} {state} on a {volume.upper()} page"))
    return problems


#  --------------------------------------------------------------------------
#  RULE 3 — MECHANISM REFERENCES
#  --------------------------------------------------------------------------
#  @reason: A mechanism is DEFINED by its banner in script.js, the line
#    "//     MECANISM 06.5: HUD TELEPORT CONSOLE TOGGLE". Everything else that
#    names a mechanism is a REFERENCE and must point at a defined one.
#    Sub-blocks such as "MECANISM 10-A" are valid when MECANISM 10 exists.
#    Both spellings count in both volumes ("MECANISM" and "MECANISMUL").

DEFINITION = re.compile(r"^//\s+MECANISM(?:UL)? (\d+(?:\.\d+)?):", re.M)
REFERENCE = re.compile(r"\bMECANISM(?:UL)? (\d+(?:\.\d+)?)(?:-[A-Z])?\b")


def mechanism_problems(volume_dir, files):
    """List of (file, number, line) for references to mechanisms that do not exist."""
    defined = set(DEFINITION.findall((volume_dir / "script.js").read_text(encoding="utf-8")))
    problems = []
    for path in files:
        text = path.read_text(encoding="utf-8")
        for m in REFERENCE.finditer(text):
            if m.group(1) not in defined:
                problems.append((path, m.group(1), text.count("\n", 0, m.start()) + 1))
    return problems


#  --------------------------------------------------------------------------
#  SELF-TEST — prove each rule can still fail
#  --------------------------------------------------------------------------
#  @reason: A guard nobody has seen fail is decoration. The fixtures under
#    tools/fixtures/parity/ plant one mistake per rule, plus lookalikes that
#    must stay quiet: comments that differ, indentation that differs, "//"
#    inside a string, a formatter-wrapped anchor, a valid sub-block name.

def self_test():
    problems = []
    diffs = code_differences(FIXTURES / "en" / "script.js", FIXTURES / "ro" / "script.js")
    if len(diffs) != 2:
        problems.append(f"script.js: expected 2 planted code differences, got {len(diffs)}")
    css = code_differences(FIXTURES / "en" / "style.css", FIXTURES / "ro" / "style.css")
    if css:
        problems.append(f"style.css: expected 0 differences (comments only), got {len(css)}")
    pages = sorted(p.relative_to(FIXTURES).as_posix() for p in FIXTURES.glob("*/*.html"))
    toggles = toggle_problems(FIXTURES, pages)
    flagged = sorted({t[0] for t in toggles})
    if flagged != ["en/page-bad.html", "ro/page-bad.html"]:
        problems.append(f"toggles: expected en/page-bad.html and ro/page-bad.html, got {flagged}")
    refs = mechanism_problems(FIXTURES / "en", sorted((FIXTURES / "en").glob("*.html")))
    if [r[1] for r in refs] != ["04.5"]:
        problems.append(f"mechanisms: expected only 04.5 reported, got {[r[1] for r in refs]}")
    if problems:
        print("SELF-TEST FAILED:\n  " + "\n  ".join(problems))
        return 1
    print("SELF-TEST OK: every planted mistake detected, every lookalike left alone.")
    return 0


def main(argv):
    if "--self-test" in argv:
        return self_test()
    count = 0

    for name in TWIN_FILES:
        for en_no, ro_no, en_code, ro_code in code_differences(ROOT / "en" / name, ROOT / "ro" / name):
            count += 1
            print(f"PARITY {name}: en:{en_no or '-'} {en_code!r}  vs  ro:{ro_no or '-'} {ro_code!r}")

    pages = sorted(p.relative_to(ROOT).as_posix() for v in VOLUMES for p in (ROOT / v).rglob("*.html"))
    for page, line, message in toggle_problems(ROOT, pages):
        count += 1
        print(f"TOGGLE {page}:{line}: {message}")

    for volume in VOLUMES:
        files = sorted(p for ext in ("*.html", "*.css", "*.js") for p in (ROOT / volume).rglob(ext))
        for path, number, line in mechanism_problems(ROOT / volume, files):
            count += 1
            print(f"MECHANISM {path.relative_to(ROOT)}:{line}: refers to MECANISM {number}, "
                  f"which is not defined in {volume}/script.js")

    if count:
        print(f"FAIL: {count} problem(s). The twin volumes disagree.")
        return 1
    print(f"OK: code identical in {len(TWIN_FILES)} twin files, {len(pages)} pages toggle "
          f"to their twin, every mechanism reference resolves.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
