# tools/ — the ship's instruments

Small, dependency-free scripts that check the fleet. Each is plain
Python 3 from the standard library: no `npm install`, no build step,
nothing to keep up to date. Run them from anywhere — every script
locates the repository relative to its own file.

---

## `check-noopener.py` — the customs officer

Guards one rule: **every link that opens a new tab must carry
`rel="noopener noreferrer"`.**

### Why the rule exists

`target="_blank"` hands the page you open a live `window.opener`
reference pointing back at *your* tab. The opened page can then do
`window.opener.location = "…"` and quietly replace the page the visitor
came from with a lookalike — the attack known as **tab-nabbing**. The
visitor switches back, sees a familiar-looking screen, and types a
password into someone else's form.

`noopener` severs that handle. `noreferrer` additionally withholds this
page's URL from the destination's `Referer` header. Both tokens, every
time.

### Running it

```
python3 tools/check-noopener.py            # scan the site
echo $?                                    # 0 = clean, 1 = violations
```

It scans every `.html` and `.js` under `en/` and `ro/`, and exits
non-zero if even one new-tab link is missing either token — so it drops
straight into a pre-commit hook or a CI step.

Markdown files (`JOURNAL-*.md`, `BACKLOG-*.md`, `docs/`) are deliberately
**not** scanned: they quote older markup as a historical record, and
rewriting prose that documents the past would falsify the log.

### What it catches

Two different shapes of anchor, because this project writes both:

1. **Markup anchors** — `<a … target="_blank">` in the HTML. Matched
   across line breaks, since the formatter sometimes wraps a tag onto a
   second line where a naive line-by-line grep would miss the attributes.
2. **Anchors built in JavaScript** — `bibliography.js` and `script.js`
   create elements with `document.createElement("a")` and set
   `.target` / `.rel` as properties. Those never appear inside a `<a …>`
   tag, so they get their own check: the script pairs each
   `x.target = "_blank"` with that same variable's `x.rel` assignment.

The JS check is a deliberately simple same-file heuristic. It does not
follow a variable across function boundaries. This codebase builds each
anchor in a single block, so that is enough — and a heuristic that
reports honestly beats a parser that pretends to a certainty it does not
have.

### Proving the guard still bites

```
python3 tools/check-noopener.py --self-test
```

`tools/fixtures/` holds markup with **known** violations — a plain one,
one wrapped across lines, one half-fixed with `rel="noopener"` only, one
using single quotes, plus both JavaScript shapes — alongside two links
that are correct and must *not* be reported.

The self-test asserts all six planted faults are caught and neither
correct link is flagged. A checker nobody has ever seen fail is not a
checker, it is a decoration; this is how you confirm it still works
after someone edits a pattern.

The fixtures live under `tools/` precisely so the normal scan never
walks into them — the ordinary run is confined to `en/` and `ro/`.

---

## `check-uc-banner.py` — the honesty gate

Guards one rule, taken verbatim from `BACKLOG-EN.md` #008: **no log page
shows an empty body or placeholder text without an "Under Construction"
banner.**

### Why the rule exists

The ship carries 46 log decks whose entries are still `Lorem ipsum`.
That is fine — a vessel under construction is allowed to be under
construction. What is not fine is a deck that *looks* finished: the
layout is complete, the typography is confident, the paragraphs are the
right length. An unwarned visitor reads it and concludes the crew writes
nonsense. Placeholder text that is not labelled as placeholder text is a
silent lie told by the page.

The banner converts that silent failure into a declared state.

### Running it

```
python3 tools/check-uc-banner.py           # 0 = clean, 1 = violations
python3 tools/check-uc-banner.py -v        # every page and its verdict
```

Three verdicts per log page:

| Verdict    | Meaning                                              |
|------------|------------------------------------------------------|
| `CONTENT`  | real prose throughout — no banner needed             |
| `DECLARED` | filler and/or empty entries, and a banner says so    |
| `NAKED`    | filler and/or empty entries with **no** banner ← fail |

### What "empty" means

Two failure shapes are checked, not one. A script that only grepped for
`lorem` would sign off on a deck that renders genuinely blank:

- **filler** — an entry containing placeholder prose;
- **empty** — an entry whose *visible* text is under 120 characters,
  i.e. a heading and a note-terminal with nothing said between them;
- **hollow** — a page with no `<article class="log-entry">` at all.

HTML comments are stripped before judging. This codebase's didactic
comments are essays that legitimately discuss placeholder text and empty
states; only what the visitor actually sees can decide the verdict.

---

## `add-uc-banner.py` — the companion that writes them in

`check-uc-banner.py` judges; this one fixes. It finds every log deck
with filler and inserts the banner immediately after the deck's
`<header class="category-header">`, before the first sector gate.

```
python3 tools/add-uc-banner.py --check     # report what is missing
python3 tools/add-uc-banner.py --apply     # write the banners in
```

It is **idempotent** — a page that already carries the banner is left
alone — so it can be re-run after a new batch of log pages is generated.

Two wordings are emitted, chosen per page by counting entries:

- **full** — every entry on the deck is filler ("Nothing here is real
  content");
- **partial** — the deck is partly written, so the banner says *some*
  entries are placeholder rather than claiming the whole deck is empty.

Telling a reader "nothing here is real" on a deck that is 90% written
would be its own small dishonesty.

### The newline trap

Four RO log pages are stored with **mixed CRLF / CR / LF** terminators.
Python's text mode silently translates every terminator to `\n` on read,
and writing that back rewrites *every line in the file* — turning a
ten-line banner insertion into an eleven-hundred-line diff that buries
the real change in review and in `git log -p`.

Both this script's file I/O (`read_source` / `write_source`) uses
`newline=""`, and the inserted block inherits the terminator its
surrounding file uses. If you write another tool that edits these pages,
do the same.

`restore-eol.py` exists to repair the damage if it ever happens again:
it rebuilds a file line-by-line, restoring HEAD's own terminator for
every line that HEAD still contains, and refuses to write if the
LF-normalised content would change by even one byte.
