# Decisions — D::0dy55ey

This file records the decisions that shape the ship: what was decided, why, and where it is written down. Version 1 (2026-11-19) was recovered from the JOURNAL, the BACKLOG, the docs, `git log`, the merged PRs and the board. Version 1.1 (2026-11-20) adds her answers of 2026-11-19 to the ⚠ and ↻ markers, and the earliest decisions, from the first ship (`digital-odyssey-v1`, 28.04 → 21.09.2026), found by the researcher (card `t_01d0fe2c`). Romanian twin: [`DECISIONS-RO.md`](DECISIONS-RO.md).

**To add an entry:** give it the next number, put it at the end, add a row to the index, and write the same entry in both files. Name a source (commit, PR, JOURNAL DAY, BACKLOG item, doc section or board card) and quote Iulia's words only when a source holds them.

**Numbering (v1.1).** Numbers are never reused or shifted. Entries 1–42 run oldest first. Entries 43–66 are an appended block of decisions from the first ship, older than entry 1; they were appended rather than renumbered, so every existing reference to an entry number stays valid. Entry 67 and every later entry continue in date order from there.

**Markers:** ⚠ **reconstructed: please confirm** = no clear written source for the whole entry (or for its date); ◐ **open** = decided, but one part is still to choose; ↻ **check** = a later practice or text may have changed it.

## Index

| # | Date | Decision | Area |
|---|---|---|---|
| 1 | 2026-07-17 | Six volumes in one hull, in a fixed learning order; the Data Bridge is an annex | site structure |
| 2 | 2026-07-17 | Commit messages as `type(scope): message`, one scope per commit | workflow & git |
| 3 | 2026-07-17 | Teaching comments follow the `@tag` legend | comments & code |
| 4 | 2026-07-23 | The name `D::0dy55ey`; the repo stays `digital-odyssey` | content |
| 5 | 2026-07-23 | Two navigation models: the hub and the satellites | site structure |
| 6 | 2026-07-23 | An AI agent joins as an amplifier, not a replacement | crew & budget |
| 7 | 2026-07-24 | The ship reads itself: the recursive blueprint | site structure |
| 8 | 2026-07-25 | The language toggle leads to the same page in the other language | language & translation |
| 9 | 2026-07-29 | `en/` and `ro/` are deliberate parallel copies | language & translation |
| 10 | 2026-07-29 | English first, then clone and translate; RO comment text in Romanian, `@tag` names in English | language & translation |
| 11 | 2026-07-29 | Every block and line commented; repetition on purpose; never strip | comments & code |
| 12 | 2026-07-30 | DAY 22 is the never-ending day for major events; each working day has its own DAY | workflow & git |
| 13 | 2026-08-05 | The journal becomes a novel, co-written | vault & novel |
| 14 | 2026-08-05 | The Seldon Vault: the novel aboard the site, in capsules | vault & novel |
| 15 | 2026-08-06 | DAY 22 retouch deferred (BACKLOG 011); `docs/drafts/` kept until then | vault & novel |
| 16 | 2026-08-26 | Season V: the crew comes aboard and every DAY names its narrator | crew & budget |
| 17 | 2026-09-21 | Root URL: option 3, a `404.html` stub; `en/` is canonical | site structure |
| 18 | 2026-09-21 | Deploy through GitHub Actions; checkers guard every PR (four from 2026-11-04) | workflow & git |
| 19 | 2026-11-06 | Only Iulia merges, by merge commit; agents never merge | workflow & git |
| 20 | 2026-11-10 | Every piece of crew work runs behind a gate with her OK of a cap | crew & budget |
| 21 | 2026-11-10 | The cost ledger records what the voyage has burned | crew & budget |
| 22 | 2026-11-10 | Prof. Ada Itaca comes aboard as the teacher | crew & budget |
| 23 | 2026-11-10 | Content starts from her own study notes | content |
| 24 | 2026-11-10 | The Arkhold Records: crew-written study material, public only when "fit" | content |
| 25 | 2026-11-10 | The translation rule | language & translation |
| 26 | 2026-11-10 | No anime named inside the story; it lives in CULTURE | content |
| 27 | 2026-11-10 | Every command is explained, every time | workflow & git |
| 28 | 2026-11-10 | Journal entries may become semi-automatic later, never fully | vault & novel |
| 29 | 2026-11-17 | The crew's limited autonomy is her choice as a learner | crew & budget |
| 30 | 2026-11-17 | Arkhold naming rule | content |
| 31 | 2026-11-18 | Every new code line explained in full, even if repeated | comments & code |
| 32 | 2026-11-18 | Every piece of work is recorded in the JOURNAL | workflow & git |
| 33 | 2026-11-18 | The three methods: what I learned, how it is built, what it was like | site structure |
| 34 | 2026-11-19 | An invitation to discovery: the doors stay hidden | site structure |
| 35 | 2026-11-19 | The novel is co-written; she is author and supervisor; never a task log | vault & novel |
| 36 | 2026-11-19 | The Seldon Vault keeps six fixed capsules, one per volume | vault & novel |
| 37 | 2026-11-19 | The inspiration: Arcade Explorers, walked in the opposite direction | content |
| 38 | 2026-11-19 | The full-journal link is removed from opened capsules | vault & novel |
| 39 | 2026-11-19 | The backend is parked, not rejected | site structure |
| 40 | 2026-11-19 | Content first; the nine ideas go to the backlog and run in waves | crew & budget |
| 41 | 2026-11-19 | A DECISIONS record; the docs review comes after it | workflow & git |
| 42 | 2026-11-19 | One voice per method; the JOURNAL's narrators and its rule | vault & novel |
| 43 | 2026-04-28 | v1: a book in Volumes, with a heading ladder from `h1` to `h5` | site structure |
| 44 | 2026-04-28 | v1: React and Angular sit inside JavaScript, as an annex | site structure |
| 45 | 2026-04-28 | v1: the look is retro-futurist, after *Solaris* | content |
| 46 | 2026-04-28 | v1: the colours carry meaning (mint, amber, pink) | content |
| 47 | 2026-04-30 | v1: dense content moves to its own log pages | site structure |
| 48 | 2026-04-30 | v1: one lesson, one day, one article | site structure |
| 49 | 2026-05-05 | v1: Captain's Observations, half Manual, half Journal | vault & novel |
| 50 | 2026-05-05 | v1: hybrid day titles with protocol separators | vault & novel |
| 51 | 2026-05-07 | v1: the note terminal, saved in the browser | site structure |
| 52 | 2026-05-11 | v1: a 45-day HTML syllabus, grouped in weeks | content |
| 53 | 2026-05-18 | v1: animations run three cycles, then rest | comments & code |
| 54 | 2026-05-18 | v1: the recursive page was her idea, the last module to unlock | site structure |
| 55 | 2026-05-20 | v1: the stylesheet becomes a manual, in numbered modules | comments & code |
| 56 | 2026-05-20 | v1: at most two active colours on screen | content |
| 57 | 2026-05-27 | v1: the 3D reactor, from astrolabe to icosahedron | site structure |
| 58 | 2026-06-02 | v1: the blueprint reads the live source | site structure |
| 59 | 2026-06-24 | v1: plain CSS, no Sass | comments & code |
| 60 | 2026-06-02 | v1: desktop and mobile kept apart, two hemispheres | comments & code |
| 61 | 2026-06-06 | v1: one `h1` per independent page; the site as a fleet | site structure |
| 62 | 2026-06-03 | v1: the stylesheet refactored into a teaching Codex; calibrated values untouched | comments & code |
| 63 | 2026-06-25 | v1: a mobile fix closes only on a real phone | workflow & git |
| 64 | 2026-06-24 | v1: git, and a portfolio | workflow & git |
| 65 | 2026-06-30 | v1: poetry and the clarity of the code, in balance | vault & novel |
| 66 | 2026-09-21 | v1 is retired, with a redirect | site structure |
| 67 | 2026-11-20 | Nothing illegal on the bibliography page | content |

## Entries

### 1 · 2026-07-17 · Six volumes in one hull, in a fixed learning order
- **Decision.** The site is one ship with six volumes: Frontend, Data Bridge, Backend, Database, UX, Delivery. The Data Bridge (JSON) is an annex placed second, "a corridor between the surface and the logic beneath".
- **Why.** The order follows the natural build sequence: "From what you can touch to what you cannot." (DAY 11)
- **Source.** JOURNAL DAY 08 "The Ship Takes Shape: Six Compartments, One Hull" (commit `7a1fd8e`, "finalize volume architecture and learning rationale"); DAY 11 "Six volumes, one progression" and "The Data Bridge as an annex".

### 2 · 2026-07-17 · Commit messages as `type(scope): message`
- **Decision.** Commits use `type(scope): message`; separate commits per scope rather than one global commit.
- **Why.** A novice reading `git log --oneline` should see at once which area changed. "This project values vigilance over haste."
- **Source.** JOURNAL DAY 04 "Recommended tags" (committed `0799c19`, 2026-07-17); `docs/work-deontology.md` §7; scope discipline added in `8f8b846` (2026-07-30).

### 3 · 2026-07-17 · Teaching comments follow the `@tag` legend
- **Decision.** Didactic comments carry a tag (`@reason`, `@block`, `@warning`, …) followed by a self-contained explanation, in each language's native comment syntax.
- **Why.** One shared vocabulary makes the comments readable as a course.
- **Source.** JOURNAL DAY 06 "Comment legend" (committed `0799c19`); `docs/legend-en.md`; `docs/work-deontology.md` §5.

### 4 · 2026-07-23 · The name `D::0dy55ey`
- **Decision.** The working title "Digital Odyssey" became `D::0dy55ey` everywhere visible; the GitHub repository stays `digital-odyssey`.
- **Why.** A signature instead of a placeholder: compact, a ship's call sign on a HUD. The split between repo name and narrative name is deliberate.
- **Source.** JOURNAL DAY 10 "Rebranding: from 'Digital Odyssey' to `D::0dy55ey`"; commit `0c07bc1`.

### 5 · 2026-07-23 · Two navigation models
- **Decision.** The Command Deck (`index.html`) is a hub whose links point to its own sections; every other page is a satellite built for "focus and return".
- **Why.** The deck is for choosing a volume; a log page is for reading one thing and going back.
- **Source.** JOURNAL DAY 10 "Two navigation models".

### 6 · 2026-07-23 · An AI agent joins as an amplifier
- **Decision.** An AI coding agent (opencode at the time) works at the terminal; it "entered not as a replacement for the captain's judgment but as an amplification of it".
- **Why.** The captain keeps the decisions; the agent speeds up the work.
- **Source.** JOURNAL DAY 10 (opening); DAY 22, the paragraph "On DAY 10, the ship gained a second voice".

### 7 · 2026-07-24 · The ship reads itself: the recursive blueprint
- **Decision.** `recursive-blueprint.html` ("The Autognostic Engine") fetches the site's own source files and shows them, comments included, as raw text.
- **Why.** The comments are part of what the site teaches: this page is how a visitor reads how the ship is built.
- **Source.** JOURNAL DAY 12 "The Autognostic Engine"; commits `335e0af`, `35378a8`; `CLAUDE.md`, "Deliberate decisions" 1.

### 8 · 2026-07-25 · The language toggle is homologous
- **Decision.** Each EN page's language toggle leads to its own RO counterpart (and back), not to the index.
- **Why.** A reader who switches language should stay on the same page.
- **Source.** Commit `459a277`; JOURNAL DAY 14 "The Final Signal: Links Unified, Toggles Homologous".

### 9 · 2026-07-29 · `en/` and `ro/` are deliberate parallel copies
- **Decision.** Every page exists twice, in `en/` and `ro/`; they are never merged into shared code. A code change in one is mirrored in the other in the same commit; with comments removed, the code is identical.
- **Why.** "A bilingual learning vessel, not a monolingual production app." Since 2026-11-04, `check-parity.py` guards the rule.
- **Source.** `docs/work-deontology.md` §1 (`61cd338`); `CLAUDE.md`, "Deliberate decisions" 2 (`df4325d`, 2026-11-04); PR #3.

### 10 · 2026-07-29 · English first, then Romanian; the comment rule
- **Decision.** A new file is perfected in English first, then cloned into `ro/` and translated. In the Romanian files the comment text is in Romanian; the `@tag` names stay in English everywhere.
- **Why.** One finished model, then a faithful twin. The tags are one shared vocabulary (entry 3); the explanation speaks the reader's language.
- *"the comments in the Romanian files are in Romanian and the comments tags are in English everywhere."* (her answer on PR #21, 2026-11-19)
- **Practice before the rule.** In v1, comment language already followed the sheet: `c5daa10` (2026-06-26) put the reactor comments of `style.css` in English while `style-ro.css` kept Romanian ones. In this repo the RO comments were translated on 2026-08-09 and 2026-08-16 (`e597d8c`, `3536495`), and PR #20 restored Romanian `@reason` comments.
- **Source.** `docs/work-deontology.md` §3; her answer on PR #21 (2026-11-19); researcher memo, card `t_01d0fe2c`.

### 11 · 2026-07-29 · Every block and line commented; never strip
- **Decision.** Every block and every line is commented, even when patterns repeat; the long teaching comments are never stripped, shortened or "decluttered". Wrong, stale or merely restating comments are flagged and fixed.
- **Why.** "Redundancy is acceptable and intentional: each occurrence is an opportunity for learning." The comments are the project's learning method.
- **Source.** `docs/work-deontology.md` §4; `CLAUDE.md`, "Deliberate decisions" 1 (`df4325d`, 2026-11-04); PR #14 (wrong module numbers fixed).

### 12 · 2026-07-30 · DAY 22, the never-ending day
- **Decision.** DAY 22, "the Longest Wednesday", is the never-ending, cosmic day. Every major event of the ship or the voyage (a major change of structure, a general clean-up, and so on) is recorded in it, whenever it happened in the timeline. It needs no date and no time. Each working day gets its own DAY (entries 32, 42).
- *"Yes, DAY 22 is a continuous or a never-ending day. Every time a major event related to the ship or voyage occurs, it will be recorded in this DAY 22 entry even if they were done earlier or later in the timeline. It's a bending of time in our digital space."* (2026-11-19)
- *"It never ends, that's crucial."* · *"before starting to work with Hermes, there were no real dates recorded in the JOURNAL. DAY 22 is a cosmic day, it doesn't need a dating, neither a timing."* (2026-11-20)
- **Why.** Time bends in the ship's digital space: DAY 22 holds the events that change the ship, while each day of work is told in a DAY of its own.
- **Source.** `docs/work-deontology.md` §9 (`61464c2`) and §10 (PR #23); her answer on PR #21 (2026-11-19); card `t_2d86b8be`, comment `[HER 2026-11-20]`.

### 13 · 2026-08-05 · The journal becomes a novel
- **Decision.** The JOURNAL is a co-written novel, titled *D::0dy55ey — Delta writing, or how to write through differences*, with a frontispiece in both journals.
- **Why.** On DAY 26 "the log becomes a novel D::0dy55ey that feeds on its own recursion" (commit message of `4bc95a5`).
- **Source.** JOURNAL DAY 26 "The Dialogue in the Chart Room" (`4bc95a5`); commit `70fb8b5`.

### 14 · 2026-08-05 · The Seldon Vault
- **Decision.** The novel is projected aboard the site through the Seldon Vault: its own page (`vault.html`), entered by a gate at the foot of `transmission.html`, with the entries packed into capsules by DAY.
- **Why.** The testimony is found, not handed out (see entry 34).
- **Source.** Commits `7ecd422`, `1bc49da`, `7ac83e3`, `f0638bc`, `ce71d24`.

### 15 · 2026-08-06 · DAY 22 retouch deferred; drafts kept
- **Decision.** Rewriting DAY 22 as "the blueprint of the blueprint" is BACKLOG 011, Deferred, until the log pages have content. Its drafts stay in `docs/drafts/` until 011 is done.
- **Why.** "The existing DAY 22 text is currently judged superior to any draft." The drafts hold the machine-voice register that no other doc has (review of 2026-11-19).
- **Source.** BACKLOG 011; commits `a1b2956`, `691bd53`; board card `t_ad5e95c8` (KEEP, 2026-11-19).

### 16 · 2026-08-26 · Season V: the crew comes aboard, the narrator is named
- **Decision.** From DAY 33 the journal is kept by named crew members, and every DAY opens with *Log kept by*.
- **Why.** "Until now the journal changed narrators without telling anyone … A reader deserves to know whose hand holds the pen." (the Scribe)
- **Source.** JOURNAL DAY 33 "A Word Before the Entry" (ship's date 2026-08-26 → 2026-09-10); PR #12.

### 17 · 2026-09-21 · Root URL: option 3
- **Decision.** No root `index.html`; the bare root serves a `404.html` stub linking to `en/` and `ro/`; `en/index.html` stays canonical.
- **Why.** "The simplest match for the current architecture": no Pages setting and no redirect workflow needed.
- **Source.** BACKLOG 008 "Decision (implemented)"; JOURNAL DAY 17; commit `19822a3`.

### 18 · 2026-09-21 · Deploy through GitHub Actions; checkers guard every PR
- **Decision.** A push to `main` deploys through GitHub Actions. The Lint workflow runs the checkers on every push and PR; they are also run before each commit. On 2026-09-21 there were two: `check-noopener.py` (`db3a7c4`) and `check-uc-banner.py` (`fb2f392`). On 2026-11-04 they grew to four: `check-log-prose.py` (`a25fd68`) and `check-parity.py` (`6261f8c`, PR #3).
- **Why.** Each guard was written for a rule that had actually broken.
- **Source.** Commits `e5f4ce0`, `224fb0e`, `db3a7c4`, `fb2f392`, `a25fd68`, `6261f8c`; PR #3; `CLAUDE.md`, "Working rules"; `DEPLOY.md`.

### 19 · 2026-11-06 · Only Iulia merges
- **Decision.** Nothing reaches `main` except through a pull request. Only Iulia merges, with *Create a merge commit*; agents never merge and never push to `main`. Her local clean-up comes only after the PM's all-clear, because the crew shares one checkout.
- **Why.** A merge is a deploy; and she merges to learn (entry 29).
- **Source.** `docs/git-workflow-en.md` (PR #13, `c750b3a`); `DEPLOY.md`; PM handoff, "Standing rules".

### 20 · 2026-11-10 · Every piece of crew work runs behind a gate
- **Decision.** No card runs until Iulia has OK'd a cap for it; her words are recorded on a gate card marked `[HER-OK …]`; going over the cap needs a new OK.
- *"1st wave: I agree with the budget."* (2026-11-19)
- **Why.** She decides what the work is worth before it is spent.
- **Source.** PM handoff, "Budget record" and the updates of 2026-11-10 → 11-19; gate cards `t_86d635f8`, `t_ccd7da9e`, `t_63f7e170`; card `t_7e6d4581`, comment `[HER-OK 2026-11-19]`.

### 21 · 2026-11-10 · The cost ledger
- **Decision.** What the voyage spends is recorded in `docs/ledger/cost-ledger.md` (EN + RO), with a Fuel line added to DAYs 33–39.
- **Why.** So the cost of each round can be read, and one round compared with another.
- **Source.** PR #15 (`3dc6cc3`); `docs/ledger/cost-ledger.md`.

### 22 · 2026-11-10 · The teacher comes aboard
- **Decision.** Prof. Ada Itaca (the it-tutor profile) joins as the teacher; from 2026-11-18 she takes no Kanban cards and reviews drafts with Iulia in chat.
- **Why.** A crew member whose job is the truth of what Iulia learns.
- **Source.** JOURNAL DAY 40 "The Teacher Comes Aboard" (PR #16); PM handoff, "it-tutor" and update 2026-11-18.

### 23 · 2026-11-10 · Content starts from her own study notes
- **Decision.** Iulia reads or watches and takes structured notes; these are the raw material for the `*-log.html` pages and `index.html`. The it-tutor checks the truth, the writer the English and the story, the researcher polishes.
- **Why.** The canonical pages are her learning, not the crew's.
- **Source.** PM handoff, "it-tutor = Prof. Ada Itaca", "Iulia's content rule".

### 24 · 2026-11-10 · The Arkhold Records ◐ open
- **Decision.** Crew-written study material may go public as a deeper layer, "how I learned informatics with the crew's help". The name is hers (*arkhold* = ark + household). Others' texts are bibliography links only; a privacy pass is mandatory; the honest label is "crew-written study material, checked by QA"; only records she calls "fit" go public, each with its own verdict.
- **◐ open.** The format (a page on this site or a separate site) is still to decide. She confirmed it on 2026-11-19: *"(24) - yes, it's still open."*
- **Source.** PM handoff, "OPEN DECISION: The Arkhold Records" and update 2026-11-10 19:00; gate `t_67a95c5f`; build gate `t_4bd9e35c`.

### 25 · 2026-11-10 · The translation rule
- **Decision.** EN and RO need not be word for word, but the translation must be correct linguistically and as literature, and the facts must match; the code is identical. Romanian uses comma-below ș ț. The captain is neutral (never "căpitana"); the student is feminine.
- *"yes, the translation doesn't have to be word-by-word. The code is identical and that's important. Translation has to be correct from a linguistic and literary pov."* (confirmed on PR #21, 2026-11-19)
- **Practice since v1.** The v1 stylesheet manifests are translated freely, not literally, and the v1 Romanian uses comma-below letters only.
- **Source.** PM handoff, "Standing rules"; her answer on PR #21 (2026-11-19); researcher memo, card `t_01d0fe2c`.

### 26 · 2026-11-10 · No anime named inside the story
- **Decision.** No anime is named inside the novel; anime belongs in CULTURE (the anime & manga shelf).
- Confirmed on PR #21, 2026-11-19: *"(26) - OK."*
- **Source.** PM handoff, "Standing rules"; her answer on PR #21; CULTURE-EN "Anime & manga — the transformation shelf" (`20635d8`).

### 27 · 2026-11-10 · Every command is explained, every time
- **Decision.** Any commands sent to Iulia, varied and new ones welcome, come with one plain line each: what it does and why now, even when repeated.
- **Why.** Repetition is her way of memorizing; she wants to learn more commands. It replaced the earlier idea of a "fixed four".
- **Source.** PM handoff, update 2026-11-10 23:10, "COMMANDS RULE".

### 28 · 2026-11-10 · Semi-automatic journal entries, later
- **Decision.** When enough material exists, journal entries may be drafted semi-automatically, never fully automatically.
- Confirmed on PR #21, 2026-11-19: *"(28) - yes."*
- **Precedent.** The v1 journal was already partly drafted by an AI chat from her sessions.
- **Source.** PM handoff, "Other parked items" ("her OK: semi-auto, not full"); her answer on PR #21; researcher memo, card `t_01d0fe2c`.

### 29 · 2026-11-17 · Limited autonomy is her choice
- **Decision.** The crew could run fully autonomous; it doesn't, because Iulia chooses to stay in the loop as a learner.
- *"My role in the digital-odyssey project is more the role of a student than the role of an owner. I do the merges myself because I want to learn and not because the agents can't do it themselves even better and faster."*
- **Source.** JOURNAL DAY 41 "The Week the Shelf Grew"; PM handoff, update 2026-11-17, correction (7).

### 30 · 2026-11-17 · Arkhold naming rule
- **Decision.** Public candidates are named `<NN>-<Title>-Arkhold-EN.md` / `-Arkhold-RO.md` from the start, with the same names in the repo under `docs/arkhold/`. Only these may go public, after her "fit" and a PR.
- **Why.** One name from draft to publication; fast-ageing details (counts, dates) are dropped from the Arkhold editions.
- **Source.** PM handoff, update 2026-11-17, "NAMING RULE (hers, 11-17)" and suggestion (1).

### 31 · 2026-11-18 · Every new code line explained in full
- **Decision.** Every new line of code gets its full explanation, even if the same explanation exists elsewhere.
- **Why.** Each page must teach on its own; repetition is on purpose (entries 11, 27).
- **Source.** PM handoff, update 2026-11-18 ("Iulia added 2 rules"); QA `t_3aab23a9` checked it on PR #19 (*"I checked 552 added code lines"*).

### 32 · 2026-11-18 · Every piece of work is recorded in the JOURNAL
- **Decision.** Every piece of work the crew does is recorded in the JOURNAL, told as the story of a day (entry 35). Work not yet told goes into the next entry (PR #20 and the drafts review, 2026-11-19).
- **Why.** The JOURNAL is the testimony, method 3.
- **Source.** PM handoff, updates 2026-11-18 and 2026-11-19 15:00; JOURNAL DAY 41 (catch-up, card `t_4e0674d2`).

### 33 · 2026-11-18 · The three methods
- **Decision.** The ship teaches three ways: (1) **what I learned**, the canonical log pages, from her notes on books and classes; (2) **how it is built**, hands-on, the recursive blueprint; (3) **what it was like**, the personal struggles of the search for knowledge: the JOURNAL and the Arkhold Records.
- **Why.** Three different kinds of reading, not three copies of one text.
- **Source.** Said to Prof. Ada on 2026-11-18 (PM handoff, update 2026-11-19 13:55); phrasing adopted 2026-11-19 (cards `t_c975e8cf`, `t_78672421`).

### 34 · 2026-11-19 · An invitation to discovery
- **Decision.** The doors to methods 2 and 3 stay hidden: the reactor icosahedron opens the blueprint; the Seldon Vault figure at the foot of `transmission.html` opens the vault, whose quizzes and voyage clock unseal the capsules. No signposts on the home page.
- *"I built this ship as an invitation to discovery, not as a straightforward manual."*
- **Source.** Cards `t_c975e8cf`, `t_791fd940` (bodies); PM handoff, update 2026-11-19 15:00 (signpost suggestions retracted).

### 35 · 2026-11-19 · The novel is co-written; she is author and supervisor
- **Decision.** The crew and Iulia write the novel together; she is its author and supervisor and reads every line. It is never a task log.
- **Why.** It is the testimony of what learning was like, not a record of tickets.
- **Source.** Card `t_78672421` (body); card `t_5cc95f00` (body); PM handoff, update 2026-11-19 16:15.

### 36 · 2026-11-19 · Six fixed capsules
- **Decision.** The Seldon Vault keeps six FIXED capsules, one per home-page volume; no capsule is added for later DAYs (43 and on). The Database, UX and Delivery capsules wait until the journal is finished; then the remaining entries are split among them.
- **Why.** They match the six volumes of method 1.
- **Still to do (not a choice).** Fix the stale note "When the captain writes DAY 27…" (`daysWritten` 27), and plan the split when the time comes (card `t_499b6977`).
- **Source.** Card `t_499b6977`, comment `[HER DECISION 2026-11-19]`.

### 37 · 2026-11-19 · The inspiration: Arcade Explorers
- **Decision.** The ship's inspiration is recorded: *Arcade Explorers* (Dell/Laurel-Leaf, 1985, Seth McEvoy & Laure Smith), sci-fi gamebooks in which the reader types BASIC listings. Links only, no quotes beyond a line.
- *"The pathway in these books is in the opposite direction than our path. We go from canonical to gamish and they go the other way around."*
- **Source.** Card `t_5cc95f00`, comment `[HER 2026-11-19]`.

### 38 · 2026-11-19 · The full-journal link is removed from opened capsules
- **Decision.** The link from an opened capsule to the full JOURNAL on GitHub is removed. It was not her choice; in her words it *"defeats the purpose"*.
- **Source.** PM handoff, updates 2026-11-19 16:15 and 17:15; card `t_985cb67b` (PM advice "remove it", her answer "OK"; comment `[HER-OK 2026-11-19]`: "remove the GitHub link").

### 39 · 2026-11-19 · The backend is parked, not rejected
- **Decision.** Saving reader progress (vault keys) and the note-terminal notes beyond one browser needs a backend; that is parked, not rejected.
- *"we don't have a backend to this project yet... We have to work on these two tasks too"* · *"something that we should discuss at large. Parked for now, but not rejected."*
- **Source.** Card `t_984c84c3` (body and comment `[HER 2026-11-19]`).

### 40 · 2026-11-19 · Content first; the ideas run in waves
- **Decision.** Her priority is content (study notes → HTML/CSS log pages); the site review is on hold. The nine ideas from the structure reviews are accepted into the backlog, and each runs only in a wave with its own cap.
- *"OK to the 9 ideas"* · *"1st wave: I agree with the budget."*
- **Source.** Gate `t_d6f19c12` (comment); PM handoff, updates 2026-11-19 16:15 → 17:00; card `t_7e6d4581`, comment `[HER-OK 2026-11-19]`.

### 41 · 2026-11-19 · A DECISIONS record, then the docs review
- **Decision.** The ship keeps this DECISIONS record (EN + RO), as Strigoi does. The review of which docs to keep comes later, after this harvest, so no source is deleted before its decisions are recorded.
- *"I didn't create for digital-odyssey a separate DECISIONS document as we did for strigoi, and I regret that."*
- **Source.** Card `t_7e6d4581` (body); PM handoff, update 2026-11-19 17:00.

### 42 · 2026-11-19 · One voice per method of the ship
- **Decision.** Each of the three methods keeps one voice: the lessons (method 1), the blueprint comments (2), the JOURNAL (3a) and the Arkhold handbooks (3b). The rule lives in `docs/work-deontology.md`, §10, not in CULTURE, which is a catalogue of cultural references; this file records the decision. The same section lists the JOURNAL's narrators, states DAY 22 as the never-ending day, and sets the rule for every entry, old and new: a science-fiction story and a technically exact record of the day, its facts told as legend.
- *"sound good"* · *"OK"* · *"The JOURNAL is not just a technical manual, it is a story of a technical adventure."*
- **The myth DAYs stay.** Old DAYs that are pure myth, with no technical record, are kept; what is not wanted is a DAY that is pure technical record. *"the DAYs that are pure myth and no technical record are the most precious ones. Don't remove them. What we don't want are the DAYs that are pure technical record."* (2026-11-20)
- **Source.** Card `t_78672421` (body, and its additions of 2026-11-19, 21:10 and 21:40); the writer's structure review on card `t_c975e8cf`, idea 2; merged in PR #23 (`599b3a5`); card `t_2d86b8be`, comment `[HER 2026-11-20]`.

## From the first ship (v1), appended in v1.1

Entries 43–66 come from the first ship, `digital-odyssey-v1`, and are older than entry 1. They are in the order of the researcher's memo (card `t_01d0fe2c`, rows V1–V24, so entry 43 = V1 and entry 66 = V24), which is date order except for entry 59, whose date is only that of its first commit. The dates are those written in the v1 journal entries; that text has been in git only since `faa2631` (2026-06-24), first as `notite-manual.md`, her study notes. Line numbers (L…) are for the v1 `JURNAL.md` at `60b3ba4`.

Parts of the v1 journal were drafted by an AI chat from her sessions. Only first-person notes are quoted here as her words, in the original Romanian with an English gloss after →. Lines in the AI's voice are cited as what the journal records, not as her words. Where a v1 decision seeds an entry above, "Later" names it.

### 43 · 2026-04-28 · A book in Volumes, with a heading ladder
- **Decision.** The project is a book in Volumes with a strict `h1`→`h5` heading ladder. It starts with two: *Volume I: The Frontend Landscape* and *Volume II: The Database Void*.
- **Why.** Accessibility and clarity: the heading ladder reads as the book's table of contents.
- *„Am organizat proiectul în două mari arii de studiu folosind elementul `<section>`”* → "I organised the project into two great areas of study, using `<section>`."
- **Later.** Entry 1 (six volumes in one hull).
- **Source.** v1 JURNAL `### 28.04.2026`, L41–57 and L6090–6115; `faa2631`; memo V1.

### 44 · 2026-04-28 · React and Angular sit inside JavaScript
- **Decision.** React and Angular are an annex inside JavaScript (`h4`/`h5`), not chapters of their own.
- **Why.** They are extensions of JavaScript, not independent technologies.
- *„HTML-ul meu este o hartă a dependențelor tehnologice, nu doar o listă de elemente.”* → "My HTML is a map of technological dependencies, not just a list of elements."
- **Source.** v1 JURNAL L58, L6117–6121; `faa2631`; memo V2.

### 45 · 2026-04-28 · The look: retro-futurist, after *Solaris*
- **Decision.** The palette is Solar Mint, Amber, Nebula Pink and Space Dark, with CRT scanlines and frosted glass, after Tarkovsky's *Solaris* and the art of Oxyplegatz.
- **Why.** She left the standard colours behind on purpose.
- *„Am abandonat culorile standard pentru o estetică retro-futuristă inspirată de Solaris (Tarkovsky) și arta Oxyplegatz”* → "I abandoned standard colours for a retro-futurist aesthetic inspired by Solaris (Tarkovsky) and Oxyplegatz's art."
- **Source.** v1 JURNAL L62–74; `faa2631`; memo V3.

### 46 · 2026-04-28 · The colours carry meaning
- **Decision.** Mint means explored and stable; amber means future, pending or a warning (`.future-log`); pink means here and now (`.active`). The coding was fixed by 06.05.2026 as the *„Codificare Cromatică Finală”* ("final colour coding").
- **Why.** Colour shows the reader where they are in the voyage.
- *„Bordură portocalie (Amber) cu opacitate scăzută pentru modulele viitoare”* → "a low-opacity amber border for future modules".
- **Source.** v1 JURNAL L76–79, L181–184, L214–217; memo V4.

### 47 · 2026-04-30 · Dense content moves to its own log pages
- **Decision.** Dense content goes to dedicated pages (`html-log.html`, `sql-log.html`); the Command Deck stays clean.
- **Why.** To avoid "infinite scroll".
- *„Am decis separarea conținutului dens în pagini dedicate (html-log.html, sql-log.html) pentru a evita «scroll-ul infinit» și a păstra Command Deck-ul (pagina principală) curat.”* → "I decided to split dense content into dedicated pages… to avoid 'infinite scroll' and keep the Command Deck (the home page) clean."
- **Later.** Entry 5 (the hub and the satellites).
- **Source.** v1 JURNAL L149; `faa2631`; memo V5.

### 48 · 2026-04-30 · One lesson, one day, one article
- **Decision.** Each lesson is a day, and each day is its own `<article class="log-entry">`, closing with a Mission Status. A sticky sidebar lets the reader jump between days.
- **Why.** Room to breathe against visual fatigue, and a sense of progress through successive ship's reports.
- *„Această «aerisire» previne oboseala vizuală și oferă un sentiment de progresie”* → "This 'airing' prevents visual fatigue and gives a sense of progression."
- **Source.** v1 JURNAL L161–163; memo V6.

### 49 · 2026-05-05 · Captain's Observations: half Manual, half Journal
- **Decision.** From 05–06.05.2026 each entry mixes cold technical data (the Manual) with subjective observations of the exploration (the Journal).
- **Why.** It shows critical thinking. At that point the readers she imagined were future recruiters.
- *„Am decis ca fiecare intrare să fie un mix între date tehnice reci (Manual) și observații subiective de explorare (Journal). Această structură demonstrează gândire critică pentru viitorii recrutori.”* → "I decided each entry should mix cold technical data (Manual) with subjective observations of exploration (Journal). This structure shows critical thinking to future recruiters."
- **Later.** Entries 13 and 42; methods 1 and 3 of entry 33.
- **Source.** v1 JURNAL L208–210 („Strategia de Conținut: Manual Hibrid”); memo V7.

### 50 · 2026-05-05 · Hybrid day titles
- **Decision.** Day titles join chronology and metaphor with protocol separators, `//` or `::` (for example *Day 01: The Shield Matrix // …*).
- **Why.** It strengthens the look of a technical log.
- *„Am adoptat un sistem de titluri hibride care îmbină cronologia (Day XX) cu metaforele de explorare (The Steel Hull), folosind separatori de tip protocol (// sau ::)”* → "I adopted hybrid titles joining chronology (Day XX) with exploration metaphors (The Steel Hull), using protocol separators (// or ::)."
- **Later.** Possibly the root of the `::` in `D::0dy55ey` (entry 4); that link is for her to confirm.
- **Source.** v1 JURNAL L212, example at L625; memo V8.

### 51 · 2026-05-07 · The note terminal
- **Decision.** From 07–11.05.2026 every log entry has its own textarea, saved in the browser with `localStorage`. The IDs follow a strict pattern by sector (`html-note-dayXX`, `sql-…`) and are kept apart from the article IDs.
- **Why.** Notes persist without editing the HTML, and the prefixes stop data from different sectors from colliding.
- *„Am «instruit» nava să folosească memoria internă a browserului”* → "I 'trained' the ship to use the browser's own memory."
- **Later.** Entry 39 (the backend is parked, not rejected).
- **Source.** v1 JURNAL L254–259, L284–289, L302–306, L318–322; memo V9.

### 52 · 2026-05-11 · A 45-day HTML syllabus, in weeks
- **Decision.** The HTML syllabus runs for 45 days, grouped by week in the sidebar. The manual is meant to be useful to others too.
- **Why.** A gentler path through the material, and a manual others can follow.
- *„Am adoptat o structură de grupare săptămânală a log-urilor pentru a îmbunătăți parcursul didactic.”* → "I adopted weekly grouping of the logs to improve the teaching path." The journal also records that the syllabus was extended to make a manual "useful to others too".
- **Source.** v1 JURNAL L331–391; memo V10.

### 53 · 2026-05-18 · Animations run three cycles, then rest
- **Decision.** From 18–20.05.2026 animations run three cycles (about 7.5 s) and then stop. Nothing loops forever.
- **Why.** The journal records it: infinite animations were dropped so as not to tire the reader's eyes in long reading sessions.
- **Source.** v1 JURNAL L414; memo V11.

### 54 · 2026-05-18 · The recursive page was her idea
- **Decision.** From 18–20.05.2026: the site shows its own code, explained line by line, on a page of its own. The working name was `[ STAR_CHART_LOGIC ]`, and it was planned as the last module the journal unlocks.
- **Why.** Edutainment: the reader sees how the ship they are sailing was built.
- The journal, in the AI's voice, credits the idea to her ("your idea of turning style.css… into a recursive study tool") and plans the page as "the last module unlocked in the journal".
- **Later.** Entries 7 and 34.
- **Source.** v1 JURNAL L417–425 („Self-Documentic Code Layout”); memo V12.

### 55 · 2026-05-20 · The stylesheet becomes a manual
- **Decision.** From 20–25.05.2026 `style.css` is split into numbered modules (01–11, then 00.1 for keyframes and 00.2 for media), and every property gets a literary and functional translation.
- **Why.** A self-documenting layout that the recursive page can read aloud.
- *„Fiecare proprietate tehnică… are acum o traducere literară și funcțională directă, transformând codul meu într-un manual live.”* → "Every technical property now has a direct literary and functional translation, turning my code into a live manual."
- **Later.** Entries 3 and 11.
- **Source.** v1 JURNAL L431–462; memo V13.

### 56 · 2026-05-20 · At most two active colours on screen
- **Decision.** No more than two active colours are on screen at a time; amber was removed from the footer.
- **Why.** Visual discipline: the journal calls it the "golden rule" of at most two active colours.
- **Source.** v1 JURNAL L501; memo V14.

### 57 · 2026-05-27 · The 3D reactor
- **Decision.** The flat header was replaced by an armillary sphere (27–29.05.2026), then by an icosahedron of 20 triangular faces built in CSS (02.06.2026).
- **Why.** A monumental emblem for the home page. Later it became the door to the blueprint.
- *„Sfera din header — un veritabil mecanism armilar 3D astrolab, un motor holografic renascentist cyberpunk fluid”* → "The sphere in the header: a true 3D armillary astrolabe, a fluid Renaissance-cyberpunk holographic engine."
- **Later.** Entry 34 (the reactor opens the blueprint).
- **Source.** v1 JURNAL L584–604, geometry at L5834–5852; memo V15.

### 58 · 2026-06-02 · The blueprint reads the live source
- **Decision.** `recursive-blueprint.html` uses `fetch` to pull the raw `style.css` and `script.js` and shows them in a split screen, with a mini-reactor at 55% beside the code.
- **Why.** As the journal puts it, the code behind "is no longer hidden in inert folders: it becomes the literary and didactic text the student reads".
- **Later.** Entry 7.
- **Source.** v1 JURNAL L720–742; the file is in `faa2631`; memo V16.

### 59 · 2026-06-24 · Plain CSS, no Sass ⚠ reconstructed: please confirm
- **Decision.** The ship is styled in native (vanilla) CSS, with no Sass or SCSS.
- **Why.** What is studied is exactly what the browser runs; a preprocessor would strip the comments the recursive page reads; modern CSS already has variables and nesting.
- *„am ales în mod deliberat să navigăm folosind CSS Nativ (Vanilla) în detrimentul hărților prefabricate de tip Sass/SCSS… codul pe care îl studiați în acest jurnal este EXACT materia primă pe care nava o execută în timp real.”* → "we deliberately chose native (vanilla) CSS over Sass/SCSS… the code you study in this journal is EXACTLY the raw matter the ship runs in real time." (the stylesheet manifest)
- **⚠** The manifest carries no date; 2026-06-24 is the date of the first commit that holds it.
- **Source.** v1 `style-ro.css` / `style-en.css` L1–30 (`@manifest`), `faa2631`; memo V17.

### 60 · 2026-06-02 · Desktop and mobile kept apart
- **Decision.** Desktop styles live in `min-width: 769px` (0.A) and mobile in `max-width: 768px` (0.B): two "hemispheres". From 2026-06-26 both are limited to `@media screen`. This reversed the audit rule of 02.06.2026 (desktop first, queries only for `max-width: 768px`) after a question asked on 03–11.06.
- **Why.** The desktop page is an IDE-like split screen and mobile is a narrative flow; kept apart, neither has to undo the other's `!important` rules. Limiting to `screen` keeps the 3D and the dark backgrounds out of print.
- The question that turned it: *„Este izolarea stilului de desktop într-un Media Query dedicat (`min-width: 769px`) o decizie corectă sau o abatere necanonică de la regulile CSS?”* → "Is isolating the desktop style in its own media query a correct decision, or a non-canonical deviation from the CSS rules?"
- **Source.** v1 JURNAL L744–750 and L3971–3991; `c5daa10`; v1 `docs/mobile-notes.md` §2; memo V18.

### 61 · 2026-06-06 · One `h1` per independent page; the site as a fleet
- **Decision.** Each independent page has one `h1`: `index.html` inside the reactor, `recursive-blueprint.html` because it stands alone. Log pages start at `h2`. The site is described as a fleet: the mothership (*Nostromo*, `index`), the cargo ships (`*-log`) and the scout ship (the blueprint).
- **Why.** Semantics, SEO and a hierarchy readers can learn. The journal credits the scout ship to her image ("the small logico-dynamic ship you intuited").
- **Later.** Entry 5.
- **Source.** v1 JURNAL L5748–5823; memo V19.

### 62 · 2026-06-03 · A teaching Codex; calibrated values untouched
- **Decision.** From 03–15.06.2026 the stylesheet is reordered as a course: the footer comes before the 3D modules as a breather, layout is kept apart from animation, and module 11 is split into 11.1–11.5. No calibrated value is touched: her tuned colours, shadows and sizes stay. Her students appear as readers for the first time ("golden rule for your students").
- **Why.** It keeps the hard-won design and makes the file readable as a course.
- **Later.** Entry 11.
- **Source.** v1 JURNAL L763, L5338–5341, L5758, L5854–5863, L5877–5911; memo V20.

### 63 · 2026-06-25 · A mobile fix closes only on a real phone
- **Decision.** A mobile fix is closed only after a test on a real phone; "it works in F12" doesn't count. The fixes that held: the independent `scale:` property, never `transform: scale()`, on anything animated by `transform`; `px`, not `rem`, with `text-size-adjust: 100%`; `nowrap` for the typewriter line, with the hero copy shortened to fit.
- **Why.** Desktop emulation does not reproduce how phones inflate text or draw 3D.
- *„…în ciuda unei randări absolut imaculate în interiorul simulatorului de desktop (`F12`)”* → "…despite flawless rendering in the desktop simulator (F12)." (her TODO; written up on 2026-09-21 in `docs/mobile-notes.md`)
- **Source.** v1 JURNAL L5943–5951 (`842bb08`); v1 `docs/mobile-notes.md` §3–§5 (`ea64993`); commits `79f7622`, `96d28c3`, `5b47b0c`; memo V21.

### 64 · 2026-06-24 · Git, and a portfolio
- **Decision.** The project entered git as `Manual_project`, with a portfolio README. On 2026-06-25 her study notes (`notite-manual.md`) were renamed as the journal "for portfolio architectural alignment" (commit message).
- **Why.** At the time it was a portfolio piece.
- **Later.** Entry 23: the journal began as her study notes.
- **Source.** v1 commits `faa2631`, `0b33c01` (README), `50069cd`; memo V22.

### 65 · 2026-06-30 · Poetry and the clarity of the code, in balance
- **Decision.** Find a balance between the literary register and the technical side that keeps both, and plan a journal in 5–6 sections for long-term ideas. It is the last entry in her own hand before the move to the new repository (committed 2026-07-20).
- *„TODO: definesc formula de echilibru între registrul literar și partea tehnică a proiectului, astfel încât să păstrez poezia, dar și claritatea codului.”* → "TODO: I'll define the balance between the literary register and the technical side of the project, so as to keep the poetry and also the clarity of the code."
- **Later.** Entries 13 and 42.
- **Source.** v1 JURNAL L6006–6010; `884ddb0`; memo V23.

### 66 · 2026-09-21 · The first ship retired, with a redirect
- **Decision.** v1 stays online, read-only, as an archive, with a redirect; all work goes to `digital-odyssey`. Two options were rejected: an active sibling (double the effort) and a frozen copy without a label (confusing for readers). On 2026-08-20 the old repository had been renamed `digital-odyssey-v1`, freeing the name.
- **Why.** The successor is a complete reimplementation of the same project, with the mirrored EN/RO structure, journals, a backlog and GitHub Actions.
- The bilingual decision record in v1 reads: *„Acest depozit… este oficial dezafectat, cu redirecționare”* → "This repository is officially decommissioned, with redirect."
- **Source.** v1 JURNAL L6277–6324 (`60b3ba4`); README rename `d44244f`; memo V24.

## Entries, continued

### 67 · 2026-11-20 · Nothing illegal on the bibliography page
- **Decision.** The bibliography lists only what can be reached legally.
- *"nothing that's illegal goes on that page."*
- **Source.** Card `t_2d86b8be`, comment `[HER 2026-11-20]`.
