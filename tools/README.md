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

## `check-log-prose.py` — the proofreader

Log entries often talk *about* HTML. Written raw, a sentence like
"use <button> instead of a styled <div>" is not shown as words: the
browser builds a real `<button>` and a real `<div>` mid-sentence, and the
tag names disappear from the text. The browser never reports this, so the
page looks fine in the source and wrong only on screen.

This script reads every `<p>` inside a `<div class="log-text">` on every
log page and fails if it finds a tag that does not belong in a sentence.
Only inline, non-interactive tags (`code`, `strong`, `em`, `span`, …) and
links are allowed. A tag name meant as words is written in the house style:

```html
<code class="tag-name">&lt;button&gt;</code>
```

### Running it

```bash
python3 tools/check-log-prose.py              # scan the log pages
python3 tools/check-log-prose.py --self-test  # prove the guard still bites
```

The self-test reads `tools/fixtures/log-prose-violations.html`, which plants
four violations (one of them wrapped across lines) and two lookalikes that
must stay quiet: an escaped tag name, and markup inside a comment.

### Where the defect came from

`inject_log_content.py` pasted text into the pages without escaping it,
which is how the accessibility log ended up with a real, focusable button
wrapped around half a paragraph (audit 2026-11-04, F3).

---

## `inject_log_content.py` — the typesetter

Replaces each Lorem-ipsum paragraph inside `<div class="log-text">` with the
next entry from one or more JSON content files, in document order, on both
volumes. It was used once (commit `96740c9`) to write the DAY 00+ narrative
for 12 log topics; its original content files were not kept.

```bash
python3 tools/inject_log_content.py content.json [more.json ...]
python3 tools/inject_log_content.py --self-test
```

Content format: `{ "<topic>": { "en": ["…"], "ro": ["…"] } }`, with topics
listed in the script's `TARGETS`.

The first version had two defects, both fixed and both covered by the
self-test: it did not HTML-escape the text (see `check-log-prose.py` above),
and it fell into the newline trap described below.

---

## `check-parity.py` — the twin inspector

`en/` and `ro/` are deliberate twins: prose and comments differ, code does
not. This script checks the three ways the twins drifted apart in practice
(audit 2026-11-04):

1. **Code parity.** `script.js`, `style.css` and `bibliography.js` must be
   identical in both volumes once comments are removed. Indentation and
   blank lines are ignored; `//` inside a string, a template literal or a
   regex is recognised as code, not as a comment.
2. **Language toggles.** Every EN/RO link must lead to the same page in the
   other volume, the target must exist, and only the page's own language
   carries `lang-toggle-active`.
3. **Mechanism references.** Every `MECANISM NN` / `MECANISMUL NN` named
   anywhere in a volume must have its banner in that volume's `script.js`
   (`//     MECANISM NN: TITLE`). `MECANISM 10-A` is valid when 10 exists.

```bash
python3 tools/check-parity.py              # scan both volumes
python3 tools/check-parity.py --self-test  # prove the guard still bites
```

The self-test reads `tools/fixtures/parity/`, which plants one mistake per
rule and several lookalikes that must stay quiet. Run against the site as
it was before the audit (`c2b0d17`), the checker reports 206 problems: the
missing RO generator, 40 misrouted toggle pages, and 42 references to a
"MECANISMUL 04.5" that never existed.

---

## `test-deploy-status.py` — the flight recorder check

`make deploy` pushes `main`, then `make deploy-status` reports whether the
publish worked. That report is only worth something if it is about the
right run. The first version watched "the newest deploy run", and right
after a push the newest run GitHub lists is often still the *previous*
one, so a green old deploy could be reported as this deploy's success
(audit 2026-11-04, F10).

```bash
python3 tools/test-deploy-status.py                    # the repo's Makefile
python3 tools/test-deploy-status.py --makefile OLD     # e.g. git show main:Makefile > OLD
```

It never talks to GitHub. A stand-in `gh` goes first on `PATH`: it plays
back a scripted list of runs, lets the new run "appear" only after a few
polls, records which run id it was asked to watch, and refuses any command
it does not know, so the test cannot deploy anything by accident. Eight
scenarios: the late-registering run (the race), a run that never appears,
the happy path, a `gh` that is not logged in, a short SHA the clone can
expand, a short SHA it cannot, and `DEPLOY_POLL=00` / `08` (zero in
disguise, and a number shell arithmetic reads as broken octal). Each one
checks the exit code **and** the run actually watched, because the old
target's exit code in the race was a cheerful 0. A target stuck in an
endless poll loop is killed after a short timeout, whole process group
included, and reported as a failure.

Run against the old target it fails the race and the never-appears
scenarios with `FALSE SUCCESS`; that is the guard proving it bites. Run
against the first fix (7ee7ef2) it fails the four newer scenarios: the
short SHA waits out the timeout and reports no run, and `DEPLOY_POLL=00`
calls `gh` hundreds of times in ten seconds.

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

Four verdicts per log page:

| Verdict    | Meaning                                              |
|------------|------------------------------------------------------|
| `CONTENT`  | real prose throughout — no banner needed             |
| `DECLARED` | filler and/or empty entries, and a banner says so    |
| `NAKED`    | filler and/or empty entries with **no** banner ← fail |
| `STALE`    | real prose throughout, but a banner still claims filler ← fail |

`STALE` is the mirror of `NAKED`, and it is the verdict this gate learned
late. Decks are written continuously by other work; the moment one is
finished, the banner still sitting on it stops being a courtesy and
becomes a false claim that real writing is placeholder. A gate that only
hunted for missing banners would call that page perfect. Fix it with
`add-uc-banner.py --prune`.

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

## `add-uc-banner.py` — the companion that writes them in and takes them out

`check-uc-banner.py` judges; this one fixes. It finds every log deck
with filler and inserts the banner immediately after the deck's
`<header class="category-header">`, before the first sector gate.

```
python3 tools/add-uc-banner.py --check     # report what is missing or stale
python3 tools/add-uc-banner.py --apply     # write the banners in
python3 tools/add-uc-banner.py --prune     # take them out once a deck is written
```

It is **idempotent** — a page that already carries the banner is left
alone — so it can be re-run after a new batch of log pages is generated.

### `--prune` is not optional

A banner is a claim: *some of the prose below is placeholder*. That claim
is only honest while the filler is still there. These decks get written
by other work, and the moment one is finished the banner on it starts
deceiving the reader in the opposite direction — telling them that real,
finished writing is filler, which sends them away from a completed page.
That is the original failure with its sign flipped, and it is the more
expensive of the two: an unlabelled draft merely looks odd, while a
finished deck labelled unfinished never gets read at all.

So the gate fails on a **STALE** banner exactly as hard as on a missing
one, and `--prune` is the half of the tool that answers it.

### Why removal has two tests of its own

`--prune` edits pages other cards are actively writing, so "the banner is
gone" is not a sufficient claim — it must take **nothing else** with it.

- `test-uc-prune-safety.py` — for every banner-bearing page, removes the
  banner and asserts that every deleted line belongs to the banner block,
  that nothing is added or reordered, and that no CRLF anywhere else is
  rewritten to LF.
- `test-uc-prune-selftest.py` — injects three real faults into the remover
  (newline normalisation, eating one extra neighbouring line, leaving the
  `<aside>` behind) and requires the safety proof to reject all three. A
  safety check that has never rejected anything is decoration.

Both run in `.github/workflows/lint.yml`. Both prefer git history for the
richest sample but fall back to the working tree, because CI clones at
depth 1 and a guard that errors in CI is a guard everyone learns to mute.

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
