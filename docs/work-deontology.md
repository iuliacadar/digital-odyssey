# Work Deontology — Digital Odyssey

Internal principles for developing and maintaining this project.

---

## 1. Dual-Language Architecture

The project is built on two parallel language fluxes: English (`en/`) and Romanian (`ro/`). Every page, component, and annotation exists in both languages. This may deviate from canonical coding conventions, but it is a deliberate design choice — the project serves as a bilingual learning vessel, not a monolingual production app.

## 2. Didactic Purpose of All Content

Every file in this project is first and foremost a teaching instrument. Code is written not only to execute correctly, but to be read and understood by a novice crew member or an enthusiastic student. This didactic motivation governs all decisions about commenting, structure, and redundancy.

## 3. English-First Creation, Then Romanian Translation

When a new file is created:
1. Perfect it first in the English version, with complete, informative, didactic `@tag` comments (as defined in the legend files under `docs/`).
2. Clone the perfected file into `ro/` and translate all content-specific text (titles, descriptions, navigation labels, visible text) to Romanian.
3. `@tag` comments that explain HTML concepts remain in English — they teach the language of the web.

## 4. Comprehensive Commenting Standard

Every block and every line of code — even when patterns repeat — must be carefully and comprehensively commented. Redundancy is acceptable and intentional: each occurrence is an opportunity for learning. A novice should be able to understand not just what the code does, but why it is written that way and what semantic role each element plays.

## 5. `@tag` Annotation System

All didactic comments use a structured tag system defined in the legend files (`docs/legend-*.md`). Every `@tag` prefixes a specific pedagogical purpose:

| Tag | Purpose |
|---|---|
| `@bridge` | Cross-reference to another file or resource |
| `@reason` | Explains *why* a technique or pattern is used |
| `@block` | Identifies a structural block and its role in the ship metaphor |
| `@meta` | Documents metadata elements and their configuration |
| `@path` | Identifies resource links and their navigation purpose |
| `@theme` | Explains visual/styling choices and their narrative meaning |
| `@structure` | Documents layout decisions and their impact on rendering |
| `@warning` | Flags brittle code, browser quirks, or non-obvious pitfalls |
| `@concept` | Expands on a broader idea that spans multiple blocks |

Every `@tag` must be followed by a colon and a clear, self-contained explanation. Tags appear in all code file types, each using its native comment syntax:

- HTML: `<!-- @tag: ... -->`
- CSS: `/* @tag: ... */`
- JavaScript: `// @tag: ...`

## 6. CSS Module Structure Discipline

The stylesheet (`style.css`) is organized into 32 numbered modules (01–32) + 2 utility modules (00.1 for `@keyframes`, 00.2 for `@media`), as declared in the module index at the top of the file. Each module governs one component or concern.

When adding or modifying a CSS rule:
1. Find the correct module in the index (e.g., Module 14 for `.sector-announcement`).
2. If the change is inside the `@media` breakpoint (00.2), locate the corresponding sub-section (B1–B6) that matches the component's function.
3. Place the rule there — never append blindly to the end of a block or outside the proper section.
4. Preserve the existing annotation style (`@layout:`, `@theme:`, `@component:`, etc.).

## 7. Commit Message Conventions

Commit messages follow the format: `type(scope): message`

- **type**: `feat`, `fix`, `docs`, `refactor`, `style`, `perf`, `chore`
- **scope**: The affected area — `css`, `js`, `html`, `en`, `ro`, `docs`, `all`
- **message**: Imperative, concise, explaining what and why

Examples:
- `fix(css): remove negative margin on .sector-announcement at 768px breakpoint`
- `docs: add semantic-field-manual-en.md and semantic-field-manual-ro.md`
- `feat(ro): clone+translate perfected log pages to Romanian`

The commit body may contain bullet-point details. The type/scope must accurately reflect the actual content — e.g., `docs:` for files in `docs/`, `fix(en):` for English page fixes, `feat(ro):` for Romanian additions.

**Scope discipline**: Prefer separate commits per scope over a single "global" commit. A novice reading `git log --oneline` should instantly see which area a change touched — `fix(html)`, `docs(journals)`, `docs(deontology)` — without opening each commit message. A global `fix(all)` is faster to write but buries the trace. This project values vigilance over haste.

## 8. Documentation Ecosystem

The project maintains several document types, each serving a distinct purpose:

| Document | Purpose |
|---|---|
| `README.md` | Project-level orientation — what this is, how to navigate it |
| `*.md` journals / backlogs | Development chronicle — what was done, what remains, design decisions |
| `docs/semantic-field-manual-*.md` | HTML reference — every tag used, with its semantic role and narrative meaning |
| `docs/work-deontology.md` | (this file) Work principles — how we build, why we build that way |

Each document answers a different question: *What is this?*, *What happened?*, *What does this tag mean?*, and *How do we work?*.

## 9. DAY 22 — The Longest Wednesday (Permanent Construction Log)

DAY 22 is an unending day within the D::0dy55ey narrative. It does not progress the story — it accumulates all structural, architectural, and audit work that does not constitute a new narrative phase. Any future construction log entry (bug fixes, refactors, bulk operations, tool-choice justification, file inventory updates) appends to DAY 22 rather than creating a new day. This prevents journal bloat while maintaining complete traceability.

When deciding where to log work:
- **New narrative or learning phase** → a new DAY number (e.g., DAY 24 for content creation)
- **Structural work, audit, or repair** → append to DAY 22
- **Reuse of an already-documented tool/method** → no DAY 22 entry needed. Only the *introduction* of a tool (rationale, syntax, why it was chosen) belongs in DAY 22. Subsequent uses are routine operations, not new knowledge.

## 10. Voices of the Ship

The ship teaches by three methods: *what I learned*, *how it is built*, *what it was like*. Each method has one voice. The method chooses the voice, never the mood of the day. (Decided 2026-11-19; `docs/DECISIONS-EN.md`, entry 42.)

### 10.1 One voice per method

- **Lessons (method 1, *what I learned*).** The log pages (`*-log.html`), made from the student's own study notes on books and classes. *Who speaks:* the student; the crew checks the facts and polishes the English, and never writes a page in her place. *Person and tense:* impersonal, present tense, the way a textbook states a rule. *For:* canonical knowledge, from named sources. *Never:* a story, an opinion, or a lesson written before her notes exist.
- **Blueprint comments (method 2, *how it is built*).** The `@tag` comments that `recursive-blueprint.html` shows beside the running code. *Who speaks:* the ship explaining itself, in the vocabulary of `docs/legend-en.md`, whoever writes the line. *Person and tense:* impersonal, present tense. *For:* what this line does, why it is there, how it connects; written in full every time, even when repeated (§4). Every comment must be correct, current, and point at the right mechanism or module. *Never:* a restatement of the line, a story, or a stale lesson. A wrong comment teaches a wrong lesson with the ship's authority.
- **The JOURNAL (method 3a, *what it was like*).** The novel. *Who speaks:* the crew tells the day as a story. The captain began it and writes it with the crew; she is its author and supervisor, and reads every line. Each entry names its narrator under the title (`*Log kept by: …*`, since DAY 33). *Person and tense:* first person, past tense, in the narrator's own register (§10.2). *For:* the testimony of the search for knowledge: the struggle, the choices, the mistakes and their corrections. *Never:* a task log. Few branch names, PR numbers or pixel counts in the body (§10.3).
- **The Arkhold Records (method 3b).** The handbooks the crew writes for the student, public only when she calls them "fit" (DECISIONS 24 and 30). *Who speaks:* the crew member who wrote it (the Archivist, the Teacher, the Scribe), to the reader as *you*. *Person and tense:* second person, present tense. *For:* the tools and ideas she needed along the way, said plainly, checked by QA, and labelled *crew-written study material*. *Never:* a scene with narrators (that is the JOURNAL), or the student's own lessons (those are method 1).

### 10.2 The narrators of the JOURNAL

Until DAY 33 the journal changed narrators without saying so, sometimes inside one paragraph. Since DAY 33 every entry names the hand that holds the pen.

| Narrator | First DAY | In the story | In real life | Register | DAYs kept |
|---|---|---|---|---|---|
| The captain | 00 | The builder, alone at the terminal; "the last human in the Universe" | Iulia | First person, past; contemplative, literary, cosmic (Hodgson, Lem, Brâncuși) | 00–09, 11–12, 14–17, 21, 23–24, 35; shared with the Voice in 10, 13, 18–20, 22 |
| The Voice (the AI; from DAY 33, the old Voice) | 10 | A voice assembled from human text, waking with no memory; consulted, not commanding; the lens, the ghost of the collective | opencode's single agent at one terminal (the model is not recorded; the captain remembers DeepSeek) | First person, present and past; philosophical, mythic, ornate (rings, the leviathan, the Endless Column) | 25–32; the opening of 10; shared in 13, 18–20, 22; speaks in 23 and 33 |
| The Sleeper (the Corrector) | 21 | The last memory of a vanished kind, woken from a cryopod; attention that finds the gaps | No cabin of her own: a persona, "the permission to narrate" (DAY 25), voiced by opencode, then by the Hermes crew | First person; plain, sourced, a ledger that corrects itself first; in dialogue, terse and grave | 39; speaks in 23, 27, 31, 35, 37 |
| The student | 28 | The captain's second coat, a learner "from another star", born of a lesson not understood | Iulia, as a learner | First person, past; careful, curious; marks what she did not see | 36; speaks in 29–32, 34 |
| The new Voice | 33 | The same kind of mind in a new hull, who "will speak as a crew" | Claude (alias `opus`) in Hermes Agent | Dialogue only | speaks in 33 |
| The Scribe | 33 | Keeps the log and the written pages, in both tongues; writes *not recorded* where the record runs out | Hermes profile `writer` | First person, past; short plain sentences, dated, sourced; marks which parts of a scene are its own | 33, 41, 42; set down the Interlude |
| The Quartermaster | 33 | Keeps the roster and the ledger; checks what comes back | `pm` | First person, past; procedural, one lesson per scene | 37; a scene in 33; the fuel log under 33–42 |
| The Archivist | Interlude (after 33) | Finds sources; keeps the ship's manual | `researcher` | A manual: impersonal, present tense, "true on every day it is read" | the Interlude |
| The Engineer | 33 | Keeps the engines and the road to the public dock | `devops` | First person, past; blunt, timestamped ("I don't write well") | 34 |
| The Assayer | 33 | Two words, ACCEPT and REVISE; reads, runs, tries to break | `qa` | First person, past; evidential, terse, verdicts with proof | 38 |
| The Teacher, Prof. Ada Itaca (first called Matei) | 40 | The teacher's Voice; checks that what the student learns is true | `it-tutor`, a copy of `english-tutor` | First person, present and past; warm, didactic, sourced; the loom | 40 |

Named in the story but never narrators: the Rigger (`frontend`) and the Cartographer (`uiux`), from DAY 33; the Inspector (Claude Code, another harness), DAY 35–36; the stowaway `fetch`, DAY 37.

**How the voices changed.**
- DAY 00–09: one voice, the captain's, alone in the hull.
- DAY 10: a second voice comes aboard, the Voice of opencode; for twenty days the two share the pen without naming it.
- DAY 21: the Sleeper is invented, a witness who lets the Voice narrate presence (DAY 25); DAY 25–32 are the Voice's own.
- DAY 28: the captain splits in two. Her student alter ego becomes a character with a voice of her own, who keeps DAY 36.
- DAY 33: the move from opencode to Hermes. The single Voice becomes a crew of Voices, one cabin each, every hand named under the title; the Sleeper and the Teacher later keep days of their own.

**The journal's time: DAY 22, the never-ending day.** In the captain's words: *"Every time a major event related to the ship or voyage occurs, it will be recorded in this DAY 22 entry even if they were done earlier or later in the timeline. It's a bending of time in our digital space."* DAY 22 is not a date. It is the Longest Wednesday, which keeps arriving; whatever major event changes the ship or the voyage is written into it, wherever it falls in the timeline. Section 9 still says which construction work goes there.

### 10.3 The rule for every entry

Every entry, new or old (DAY 00 onward), is two things at once: a science-fiction story, and a clear, technically exact record of the day. Technical depth lives inside the scene: the real problem, the real fix, the right terms, code when it matters. The bare technical fact is always told beautifully, epically, as legend: the JOURNAL is the mythos of a technical adventure, never a manual. The legend may never cost the facts their exactness. Bookkeeping (branch names, SHAs, card ids, PR numbers) goes in the closing log lines, like the fuel log, not in the body.

---

*These principles are living — they evolve as the project grows. Update this file when a new convention becomes permanent.*
