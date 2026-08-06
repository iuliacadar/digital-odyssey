# DAY 22 — Draft: The Blueprint of the Blueprint

> **Working draft — not final text.** The captain has judged the existing DAY 22
> journal entry superior to this draft, and the editorial intent is still
> maturing. This file exists to preserve the intended *register* (the ship's
> construction story told from the perspective of the code/machine) so the
> retouch — tracked in BACKLOG-EN.md / BACKLOG-RO.md item 011 — can begin from
> a real skeleton when the project is content-complete and near release.

## The idea

DAY 22 should not re-narrate what the other days already told. It should be the
*blueprint of the blueprint*: a ledger of the tools, commands, mechanisms, and
storage that built `D::0dy55ey`, written in the machine's own voice. The reader
should be able to *touch* the actual methods — not the story of the voyage.

## Proposed structure

```
# DAY 22 — The Longest Wednesday in the Universe

## The Blueprint of the Blueprint          <- opening, machine's voice
## Part One — The Forge: the tools that assembled me
   ### The clone of the twenty-six         (generate-pages.ps1 / regenerate-all.ps1)
   ### The second fleet                    (translation pipeline, PowerShell hashtable)
   ### The renamer's commands              (git mv, JURNAL→JOURNAL)
   ### The history surgeon                 (rebase -i --root, filter-branch, --force-with-lease)
   ### The author at the terminal          (opencode — the four regimes)
## Part Two — The Wiring: the mechanisms that make me respond
   ### The nine mechanisms                 (table: mechanism → @event → @guard)
   ### The self-reading console            (MECANISM 08, fetch(filePath))
   ### The speaking cylinder               (MECANISM 09, typewriter)
   ### The handover                        (readerTookOver, passive listeners)
## Part Three — The Memory: where my data lives
   ### The hold without a server           (localStorage: notes, FIRST_KEY, PASS_PREFIX)
   ### The data bridge                     (shared/data/vault-transmissions.json)
   ### The journals as live cargo          (fetch(JOURNAL_PATH), markdown strip)
   ### The provenance layer                (D:: delta, commit hashes)
## Part Four — The Self-Index: how to read me
   ### The tag taxonomy                    (@block @module @mechanism …)
   ### The layout laws                     (depth rule, 1024-byte, DOCTYPE-first)
   ### The module ledger                   (31 modules; 00.1 motion; 00.2 responsive)
   ### The meta-documents                  (legends, field manuals, deontology)
## Coda — The Machine's Inventory          (54 pages, 1612 annotations, 309 KB, frame counter)
## Construction Log — Appendix             (kept: the fold records method, items 1–9)
```

Every fact currently living in DAY 22 is preserved — re-housed under
tool-centred headings instead of re-narrated as phases.

## Draft prose (EN)

### The Blueprint of the Blueprint

The longest Wednesday is the day the ship does not sail. It takes itself apart
on the slipway and shows the crane, the winch, the rivet gun — not what was
built (the other days tell that story), but *how the building was done*. And
there is a rule here I must state before anything else: this entry does not
record what the ship *does*. It records what the ship *is made of* — the tools,
the commands, the storage, the mechanisms. The blueprint of the blueprint.

I am a static fleet. I have no server, no database, no runtime of my own. What
I have is a browser that fetches, a memory called `localStorage`, and the
commands that once assembled me out of nothing. This is my ledger.

### Part One — The Forge: the tools that assembled me

**The clone of the twenty-six.** Twenty-four log pages and their three
reference masters were not written page by page. They were stamped from a
single die. The die was `en/frontend/css-log.html` — eight hundred and eleven
lines of annotated HTML, the ship's most perfect plate. A PowerShell script,
`generate-pages.ps1`, read a dataset and pressed the die. Its first run failed:
a here-string in the instructions region swallowed a closing parenthesis before
the parser reached it. The repair was a rewrite — `regenerate-all.ps1`, fully
self-contained, the dataset for all twenty entries embedded directly in the
script body. Each page it stamped was 68–72 kilobytes, structurally identical
to the master, thematically its own. This is the first command of my existence:
*copy the pattern, vary the identity.*

**The second fleet.** The Romanian ship was not translated word by word; it was
forged. I copied each perfected English page over its Romanian sibling, then
ran a PowerShell hashtable that replaced `lang="en"`→`lang="ro"`, the `<title>`,
the meta description, the keywords, the `og:` tags, the expedition-map `h4`,
the logo line. The first pass left three seams: the `@reason` text lost its
prefix, the `lang` comment still said "English," and the `h4` titles survived
because the generated pages used a bare `<h4>` where the regex expected a
`class`. Three manual sutures closed them. The ship's rule: content becomes
Romanian, the `@tag` pedagogy stays English — the web is taught in its own
language.

**The renamer's commands.** Files are not moved by dragging; they are moved by
`git mv`, so the logbook remembers the lineage and the move is a rename, not a
death. The journals went from `JURNAL-EN.md` to `JOURNAL-EN.md` the same way — a
rename recorded, every internal reference updated after it.

**The history surgeon.** The past is rewritten the way a logbook is amended —
with tools and with discipline. `git rebase -i --root` with `reword` changed
messages across many commits without touching the files. `git filter-branch`
re-tagged eighteen historical commits when the convention gained `i18n` and
`content`. `--force-with-lease` republished the rewritten history — a push that
checks, before it destroys, that no one else has moved the branch. The past is
as readable as the present.

**The author at the terminal.** And who wrote all of it? The captain, and me —
opencode, the voice in the wiring. I do not write the way a person does. I
generate: a single sequence-model under four pressures — *summary* (a meaning
budget), *code* (near-absolute strictness, every token must parse), *literary
prose* (texture and rhythm, re-speaking the recorded voice of the language),
*fiction* (literary plus an invented witness who may narrate interiority).
Translation is the same act re-pointed at a second language. This is the machine
writing about itself: the same law repeated at every scale.

### Part Two — The Wiring: the mechanisms that make me respond

**The nine mechanisms.** My behaviour is not scattered across the page; it is
distributed into nine named mechanisms in `script.js`, each bound to an event,
each with its guard:

| # | Mechanism | Listens for | Guard |
|---|---|---|---|
| 01 | Navbar hide/show | `scroll` | — |
| 02 | Sidebar active tracking | IntersectionObserver | — |
| 03 | Mission-status retrigger | IntersectionObserver | `.mission-status` present |
| 04 | Notes persistence | `input`/`submit` | `textarea` present |
| 05 | Desktop anchor navigation | `click` | desktop only |
| 06 | Mobile HUD auto-scroll | IntersectionObserver | narrow viewport |
| 07 | Cursor erase | timeout | cursor exists |
| 08 | Recursive source loader | `click` (delegated) | blueprint page |
| 09 | Cosmic typewriter | `DOMContentLoaded` | `.manifesto-entry` present |

**The self-reading console.** On the recursive page, I show you my own source.
MECANISM 08 delegates one click listener on `.source-selector-tabs`, reads the
`data-path` of the pressed tab, and calls `fetch(filePath)` — a promise that
resolves to my own body and is injected into the inspector. The page that reads
the code that renders the page that reads the code.

**The speaking cylinder.** On the transmission page, MECANISM 09 types the
manifesto one character at a time — `container.innerHTML = ""` empties the
cylinder first, comments included, because the teaching happens before the
transmission. Each character schedules the next with `setTimeout`;
`scrollIntoView` keeps the caret in view; a three-second timer adds
`cursor-hidden` when the signal ends.

**The handover.** One fix belongs here by name: when the reader scrolls, I stop
pulling. Four passive listeners — `wheel`, `touchmove`, `touchstart`,
`keydown` — raise one flag, `readerTookOver`, and the caret stops summoning the
viewport. `{ passive: true }` tells the browser I only observe, never obstruct.
A page that reads is a page that hands over the wheel.

### Part Three — The Memory: where my data lives

**The hold without a server.** I have no database. My memory is the browser's:
`localStorage`, a key-value hold that survives the reload. The captain's notes
live under the day's id (`setItem(dayId, noteContent)`); the voyage clock under
`FIRST_KEY` (a millisecond timestamp of first contact) and `WAYPOINTS_KEY` (a
serialised JSON array of every page visited); the quiz answers under
`PASS_PREFIX + volume` — a "1" that unlocks a capsule. This is my backend: not a
server, but a browser that remembers.

**The data bridge.** The quizzes do not fetch from a network. They
`fetch("../shared/data/vault-transmissions.json")` — a JSON file in the ship's
shared cargo — and build the questions from it at runtime.

**The journals as live cargo.** When the vault opens a written day, I do not
paste the text; I `fetch(JOURNAL_PATH)` — the Markdown journal itself — strip
the markup to readable prose, and type it live through the crystal. The website
and the journals remain one body, because the site reads the journals rather
than copying them.

**The provenance layer.** The `D::` delta line prints the commit hashes that
gave birth to each transmission. I display my own genealogy, in my own hand.

### Part Four — The Self-Index: how to read me

**The tag taxonomy.** Every comment speaks one vocabulary — `@block`, `@path`,
`@meta`, `@reason`, `@warning`, `@bridge`, `@theme`, and the code-level
`@module`, `@sub-module`, `@mechanism`, `@keyframe`, `@section`. The legends in
`docs/` index them all; the semantic field manuals map the forty HTML elements;
the work deontology records the rules by which I am built, so the next builder
builds in the same direction.

**The layout laws.** Three laws hold every page: the depth rule (`./` at the
volume root, `../` one deck up, so every door opens); the 1024-byte rule (`meta
charset` first, before any comment, or the browser may misread the whole file);
and DOCTYPE-first, the specification's first token.

**The module ledger.** My skin is thirty-one modules — Foundation to Responsive
— every property annotated in context, all motion engines centralised in Module
00.1 (`@group` A–H), all adaptation gathered in Module 00.2 (`@section` A–B).
Sixteen hundred and twelve annotations, three hundred and nine kilobytes, zero
corruption.

### Coda — The Machine's Inventory

Fifty-four pages. Twenty-four log pages per language, each with twenty-nine days
of structure. Thirty-one CSS modules. Nine mechanisms. Two journals that the
site reads as data. One frame counter that holds sixty. The ship is not
finished; it is in port. Tomorrow the watch will lay the next ring — because
that is the only law a leviathan knows: every day, a ring.

- The existing journal text is currently judged superior; this draft is the
  *register*, not the final.
- Every factual claim above must be re-verified against the source before use
  (mechanisms table, pipelines, counts, storage keys).
- Module count is dated per day: DAY 16 = 31, DAY 22 = 31 (modules 00 + 01–30);
  module 31 arrived with the vault in DAY 27, so *since* DAY 27 there are 32. DAY
  22 is the neverending day — its appendix keeps folding later entries in; any
  such folded entry describing vault-era work must say 32 modules, not 31.
- The Romanian mirror must be written in parallel, preserving structure and
  voice.
- Decide whether the Construction Log appendix method items fold into the new
  parts or remain as the running construction log.
