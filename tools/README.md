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
