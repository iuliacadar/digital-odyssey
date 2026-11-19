# Decisions — D::0dy55ey

This file records the decisions that shape the ship: what was decided, why, and where it is written down. Version 1 (2026-11-19) was recovered from the JOURNAL, the BACKLOG, the docs, `git log`, the merged PRs and the board. Romanian twin: [`DECISIONS-RO.md`](DECISIONS-RO.md).

**To add an entry:** give it the next number, put it at the end (entries run oldest first), add a row to the index, and write the same entry in both files. Name a source (commit, PR, JOURNAL DAY, BACKLOG item, doc section or board card) and quote Iulia's words only when a source holds them.

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
| 10 | 2026-07-29 | English first, then clone and translate into Romanian | language & translation |
| 11 | 2026-07-29 | Every block and line commented; repetition on purpose; never strip | comments & code |
| 12 | 2026-07-30 | DAY 22 is the permanent construction log | workflow & git |
| 13 | 2026-08-05 | The journal becomes a novel, co-written | vault & novel |
| 14 | 2026-08-05 | The Seldon Vault: the novel aboard the site, in capsules | vault & novel |
| 15 | 2026-08-06 | DAY 22 retouch deferred (BACKLOG 011); `docs/drafts/` kept until then | vault & novel |
| 16 | 2026-08-26 | Season V: the crew comes aboard and every DAY names its narrator | crew & budget |
| 17 | 2026-09-21 | Root URL: option 3, a `404.html` stub; `en/` is canonical | site structure |
| 18 | 2026-09-21 | Deploy through GitHub Actions; the four checkers guard every PR | workflow & git |
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
| 38 | 2026-11-19 | The opened capsules should not hand out the whole journal | vault & novel |
| 39 | 2026-11-19 | The backend is parked, not rejected | site structure |
| 40 | 2026-11-19 | Content first; the nine ideas go to the backlog and run in waves | crew & budget |
| 41 | 2026-11-19 | A DECISIONS record; the docs review comes after it | workflow & git |

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

### 10 · 2026-07-29 · English first, then Romanian ↻ check
- **Decision.** A new file is perfected in English first, then cloned into `ro/` and translated.
- **Why.** One finished model, then a faithful twin.
- **↻ check.** §3 also says the `@tag` comments stay in English, but on 2026-08-09 and 2026-08-16 the RO comments were translated into Romanian (`e597d8c`, `3536495`), and PR #20 restored Romanian `@reason` comments. Which rule holds now: please confirm.
- **Source.** `docs/work-deontology.md` §3.

### 11 · 2026-07-29 · Every block and line commented; never strip
- **Decision.** Every block and every line is commented, even when patterns repeat; the long teaching comments are never stripped, shortened or "decluttered". Wrong, stale or merely restating comments are flagged and fixed.
- **Why.** "Redundancy is acceptable and intentional: each occurrence is an opportunity for learning." The comments are the project's learning method.
- **Source.** `docs/work-deontology.md` §4; `CLAUDE.md`, "Deliberate decisions" 1 (`df4325d`, 2026-11-04); PR #14 (wrong module numbers fixed).

### 12 · 2026-07-30 · DAY 22 is the permanent construction log ↻ check
- **Decision.** Structural work, audits and repairs append to DAY 22, "the Longest Wednesday"; only a new narrative or learning phase opens a new DAY.
- **Why.** To keep the journal from bloating with repair days.
- **↻ check.** Since DAY 33 the crew tells its work as new DAYs (DAY 41 and 42 record PRs), and entry 32 asks for every piece of work in the JOURNAL. Whether §9 still holds: please confirm.
- **Source.** `docs/work-deontology.md` §9 (`61464c2`).

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

### 18 · 2026-09-21 · Deploy through GitHub Actions; four checkers guard every PR
- **Decision.** A push to `main` deploys through GitHub Actions. The Lint workflow runs the four checkers (`check-noopener.py`, `check-uc-banner.py`, `check-log-prose.py`, `check-parity.py`) on every push and PR; they are also run before each commit.
- **Why.** Each guard was written for a rule that had actually broken.
- **Source.** Commits `e5f4ce0`, `224fb0e`; PR #3; `CLAUDE.md`, "Working rules"; `DEPLOY.md`.

### 19 · 2026-11-06 · Only Iulia merges
- **Decision.** Nothing reaches `main` except through a pull request. Only Iulia merges, with *Create a merge commit*; agents never merge and never push to `main`. Her local clean-up comes only after the PM's all-clear, because the crew shares one checkout.
- **Why.** A merge is a deploy; and she merges to learn (entry 29).
- **Source.** `docs/git-workflow-en.md` (PR #13, `c750b3a`); `DEPLOY.md`; PM handoff, "Standing rules".

### 20 · 2026-11-10 · Every piece of crew work runs behind a gate
- **Decision.** No card runs until Iulia has OK'd a cap for it; her words are recorded on a gate card marked `[HER-OK …]`; going over the cap needs a new OK.
- *"1st wave: I agree with the budget."* (2026-11-19)
- **Why.** She decides what the work is worth before it is spent.
- **Source.** PM handoff, "Budget record" and the updates of 2026-11-10 → 11-19; gate cards `t_86d635f8`, `t_ccd7da9e`, `t_63f7e170`; this card's comment.

### 21 · 2026-11-10 · The cost ledger
- **Decision.** What the voyage spends is recorded in `docs/ledger/cost-ledger.md` (EN + RO), with a Fuel line added to DAYs 33–39.
- **Why.** So the cost of each round can be read, and compared with its estimate.
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
- **◐ open.** The format (a page on this site or a separate site) is still to decide.
- **Source.** PM handoff, "OPEN DECISION: The Arkhold Records" and update 2026-11-10 19:00; gate `t_67a95c5f`; build gate `t_4bd9e35c`.

### 25 · 2026-11-10 · The translation rule ⚠ reconstructed: please confirm
- **Decision.** EN and RO need not be identical: beautiful and technically clear beats word for word, but the facts must match. Romanian uses comma-below ș ț. The captain is neutral (never "căpitana"); the student is feminine.
- **⚠** Written down as a standing rule by 2026-11-10; the day she first set it is not recorded.
- **Source.** PM handoff, "Standing rules".

### 26 · 2026-11-10 · No anime named inside the story ⚠ reconstructed: please confirm
- **Decision.** No anime is named inside the novel; anime belongs in CULTURE (the anime & manga shelf).
- **⚠** Standing rule by 2026-11-10; the day it was set is not recorded.
- **Source.** PM handoff, "Standing rules"; CULTURE-EN "Anime & manga — the transformation shelf" (`20635d8`).

### 27 · 2026-11-10 · Every command is explained, every time
- **Decision.** Any commands sent to Iulia, varied and new ones welcome, come with one plain line each: what it does and why now, even when repeated.
- **Why.** Repetition is her way of memorizing; she wants to learn more commands. It replaced the earlier idea of a "fixed four".
- **Source.** PM handoff, update 2026-11-10 23:10, "COMMANDS RULE".

### 28 · 2026-11-10 · Semi-automatic journal entries, later ⚠ reconstructed: please confirm
- **Decision.** When enough material exists, journal entries may be drafted semi-automatically, never fully automatically.
- **⚠** Parked item by 2026-11-10; the day of her OK is not recorded.
- **Source.** PM handoff, "Other parked items" ("her OK: semi-auto, not full").

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
- **Source.** PM handoff, update 2026-11-18 ("Iulia added 2 rules"); QA `t_3aab23a9` checked it on PR #19 ("552 added code lines all explained").

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

### 36 · 2026-11-19 · Six fixed capsules ◐ open
- **Decision.** The Seldon Vault keeps six fixed capsules, one per home-page volume. The Database, UX and Delivery capsules wait until the journal is finished; then the remaining entries are split among them.
- **Why.** They match the six volumes of method 1.
- **◐ open.** What happens to DAYs 43 and later; the stale note "When the captain writes DAY 27…" (`daysWritten` 27) is still to fix.
- **Source.** Card `t_499b6977`, comment `[HER DECISION 2026-11-19]`.

### 37 · 2026-11-19 · The inspiration: Arcade Explorers
- **Decision.** The ship's inspiration is recorded: *Arcade Explorers* (Dell/Laurel-Leaf, 1985, Seth McEvoy & Laure Smith), sci-fi gamebooks in which the reader types BASIC listings. Links only, no quotes beyond a line.
- *"The pathway in these books is in the opposite direction than our path. We go from canonical to gamish and they go the other way around."*
- **Source.** Card `t_5cc95f00`, comment `[HER 2026-11-19]`.

### 38 · 2026-11-19 · The opened capsules should not hand out the whole journal ◐ open
- **Decision.** The link from an opened capsule to the full JOURNAL on GitHub was not her choice; in her words it *"defeats the purpose"*.
- **◐ open.** Remove the link, or point it to the capsule's own chapter: her choice is pending.
- **Source.** PM handoff, update 2026-11-19 16:15; card `t_985cb67b`.

### 39 · 2026-11-19 · The backend is parked, not rejected
- **Decision.** Saving reader progress (vault keys) and the note-terminal notes beyond one browser needs a backend; that is parked, not rejected.
- *"we don't have a backend to this project yet... We have to work on these two tasks too"* · *"something that we should discuss at large. Parked for now, but not rejected."*
- **Source.** Card `t_984c84c3` (body and comment `[HER 2026-11-19]`).

### 40 · 2026-11-19 · Content first; the ideas run in waves
- **Decision.** Her priority is content (study notes → HTML/CSS log pages); the site review is on hold. The nine ideas from the structure reviews are accepted into the backlog, and each runs only in a wave with its own cap.
- *"OK to the 9 ideas"* · *"1st wave: I agree with the budget."*
- **Source.** Gate `t_d6f19c12` (comment); PM handoff, updates 2026-11-19 16:15 → 17:00; this card's comment.

### 41 · 2026-11-19 · A DECISIONS record, then the docs review
- **Decision.** The ship keeps this DECISIONS record (EN + RO), as Strigoi does. The review of which docs to keep comes later, after this harvest, so no source is deleted before its decisions are recorded.
- *"I didn't create for digital-odyssey a separate DECISIONS document as we did for strigoi, and I regret that."*
- **Source.** Card `t_7e6d4581` (body); PM handoff, update 2026-11-19 17:00.
