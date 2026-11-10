# The Cost Ledger — what the voyage has burned

*Kept by the Quartermaster (profile `pm`). First drawn up on 2026-11-10 from the Archivist's
reconstruction (card `t_718da2ab`). Covers 2026-08-26, the day Hermes came aboard, to
2026-11-10 at 17:00 EET.*

The journal tells what the crew did. This ledger tells what it cost. The journal does not carry
these tables; at the end of DAY 33 to DAY 39 it carries one short *Fuel log* line that points here.

Romanian version: [`cost-ledger-ro.md`](./cost-ledger-ro.md)

## How to read this

Every time a crew member works, the machine behind it reads and writes text, and that text is
counted in **tokens** (small pieces of words). Hermes, the ship-system the crew runs on, records
the tokens of every working session and estimates what they would cost at the model maker's public
**API prices**. That estimate, in US dollars, is what this ledger adds up. It is **not a bill**:
since about 2026-11-05 most of the work has run on a Claude subscription, so what is actually paid
is the subscription fee, and the real limit is the subscription's usage quota. Read the dollars as
*fuel*: how much engine a piece of work needed, so that one round can be compared with another and
a budget can be set before a round starts. A number marked **exact** was priced by Hermes when the
work ran, for a session that is certainly this project's. A number marked **estimated** is the
Archivist's: either Hermes kept the tokens but no price, or the session was shared with other
projects and only this project's share is counted. Each table below is one **round**: a batch of
cards the captain approved together, usually with a budget. A card can need more than one session.

## The totals

Since 2026-08-26 this project has burned about **$258.89**: **$119.91 exact** and **$138.99 estimated**.
That is about 4% of everything Hermes did on this machine in the same weeks.

| round | rows | exact | estimated | total |
|---|---:|---:|---:|---:|
| September build-out (before budgets) | 49 | $20.08 | $114.78 | **$134.85** |
| Journal round (cap $61, raised to $66) | 27 | $49.25 | $0.00 | **$49.25** |
| Fix round (cap $40) | 18 | $30.58 | $0.00 | **$30.58** |
| Quartermaster's coordination (interactive) | 4 | $0.00 | $24.21 | **$24.21** |
| Review round (cap $45) | 6 | $12.91 | $0.00 | **$12.91** |
| Mechanism numbers (2026-11-10) | 2 | $3.97 | $0.00 | **$3.97** |
| Curriculum item (2026-10-29) | 2 | $1.68 | $0.00 | **$1.68** |
| Round 3: this ledger + the Obsidian handbook (cap $20), *snapshot* | 2 | $1.44 | $0.00 | **$1.44** |
| **all** | 110 | $119.91 | $138.99 | **$258.89** |

**Against the budgets.** These count the crew's cards only. My own coordination is its own line.

| round | budget | spent by the cards | share of budget |
|---|---:|---:|---:|
| Fix round | $40.00 | $30.58 | 76% |
| Review round | $45.00 | $12.91 | 29% |
| Journal round | $66.00 | $49.25 | 75% |
| Round 3 (still running) | $20.00 | $1.44 | 7% |

My coordination for these rounds cost $10.27 on 11-05, $9.56 on 11-06 and $4.38 on 11-10 (to 17:00).
Added to the cards, fix + review + journal come to $92.75 + $24.21 = **$116.95**, under their combined
budgets of $151.

**By day**

| date | rows | exact | estimated | total |
|---|---:|---:|---:|---:|
| 2026-08-26 | 1 | $0.00 | $2.80 | **$2.80** |
| 2026-09-10 | 15 | $4.16 | $20.85 | **$25.01** |
| 2026-09-21 | 32 | $14.99 | $91.13 | **$106.12** |
| 2026-09-23 | 1 | $0.93 | $0.00 | **$0.93** |
| 2026-10-29 | 2 | $1.68 | $0.00 | **$1.68** |
| 2026-11-05 | 18 | $25.03 | $10.27 | **$35.30** |
| 2026-11-06 | 31 | $57.38 | $9.56 | **$66.94** |
| 2026-11-10 | 10 | $15.75 | $4.38 | **$20.13** |
| **all** | 110 | $119.91 | $138.99 | **$258.89** |

No other day had project work. Between 2026-09-23 and 2026-10-29 the board was quiet.

**By cabin**

| cabin | profile | total |
|---|---|---:|
| the Rigger | `frontend` | $95.76 |
| the Scribe | `writer` | $60.15 |
| the Quartermaster | `pm` | $46.93 |
| the Assayer | `qa` | $37.51 |
| the Engineer | `devops` | $8.09 |
| the Archivist | `researcher` | $7.66 |
| the Cartographer | `uiux` | $1.87 |
| default profile | `default` | $0.93 |

**By kind of work:** build $105.73 · writing $60.15 · coordination $47.86 · QA $37.51 · research $7.66.

## What a REVISE costs

A REVISE costs the fix card plus the Assayer's re-check. The review that *found* the problem is
planned work and is not counted here.

| REVISE | fix card | re-check card | cost |
|---|---|---|---:|
| 1. PR #6, fix #8, 2 items (11-05) | `t_395f0c44` $1.48 | `t_c3043989` $1.25 | **$2.74** |
| 2. PR #12, Season V, 5 items (11-06) | `t_fc537220` $0.78 | `t_6be39a89` $1.65 | **$2.44** |
| 3. PR #13, Git/PR guide, `git branch -d` (11-06) | `t_3f438aea` $0.68 | `t_fd510b32` $1.11 | **$1.79** |
| 4. PR #12, DAY 36 `git branch -d` (11-06) | `t_05b59ef1` $0.45 | `t_d1c32bd8` $0.93 | **$1.38** |
| **the four REVISEs of 11-05/06** | | | **$8.34** |
| 5. PR #12, Ghost in the Shell years + "one cabin at a time" (11-10) | `t_fc4344fb` $0.47 | `t_24db5f7e` $0.56 | $1.03 |

Rework was cheap: the four REVISEs together cost about 9% of the cards of the three budgeted rounds.
The *nota* → *notița* fix (`t_4a093bbd` + `t_6b01b313`, $1.73) was the captain's own correction,
not an Assayer's REVISE, so it is not in this table.

## The rounds, card by card

One line per card. Card titles are copied from the board, shortened where they were long.
"Sessions" is how many working sessions the card needed. Session ids are left out on purpose.

### 1. September build-out, before any budget (2026-08-26 to 2026-09-23)

The board was set up on 08-26. The big build day was 09-21, launch morning. Most of the September
prices are the Archivist's: Hermes kept the tokens but not the price, and the Archivist priced them with
Hermes's own table.

| date | card | cabin | what the card did | sessions | cost | basis |
|---|---|---|---|---:|---:|---|
| 2026-08-26 | — | Quartermaster | PM: KanbanCreate | 1 | $2.80 | estimated |
| 2026-09-10 | — | Quartermaster | PM: Draft learning curriculum from session 20260828_132309_427b57 | 1 | $17.55 | estimated |
| 2026-09-10 | — | Quartermaster | PM: untitled | 1 | $0.52 | estimated |
| 2026-09-10 | `t_1a5cd7d2` | Quartermaster | [Must] FOUNDER-ONLY: begin the HTML reading phase — fill … | 1 | $0.55 | estimated |
| 2026-09-10 | `t_1f997aa8` | Engineer | Commit the 5 uncommitted files left by cards t_754213fb / t_cd0152b5 / … | 2 | $0.99 | exact |
| 2026-09-10 | `t_48b893a2` | Assayer | [Should] QA: verify ro/bibliography.html renders in a browser — never … | 1 | $0.49 | exact |
| 2026-09-10 | `t_5861707a` | Quartermaster | [GATE] NEVER COMPLETE — permanent block anchor for founder-only cards | 1 | $0.55 | estimated |
| 2026-09-10 | `t_754213fb` | Quartermaster | [Done] CULTURE-EN/RO: new subsection 'The written machine' — 7 entries … | 1 | $0.65 | estimated |
| 2026-09-10 | `t_b5f46f5c` | Rigger | [Must] Comment-density debt: bring bibliography.html up to … | 3 | $1.84 | exact |
| 2026-09-10 | `t_d4dcdb04` | Quartermaster | [Done] Curriculum drafted: docs/CURRICULUM.md + RO twin (macro learning … | 1 | $1.03 | estimated |
| 2026-09-10 | `t_f7b0fa80` | Scribe | [Could] Scaffold docs/notes/typescript/ note sheets for the 4 new … | 3 | $0.84 | exact |
| 2026-09-21 | — | Scribe | writer: EN+RO narrative content for log-page day entries (delegated … | 6 | $5.48 | estimated |
| 2026-09-21 | `t_0246866c` | Assayer | Verify BACKLOG-EN.md #008 acceptance conditions are fully met | 1 | $0.37 | exact |
| 2026-09-21 | `t_0434a9de` | Engineer | Implement root-URL strategy: bare root 404, en/ canonical | 1 | $0.58 | exact |
| 2026-09-21 | `t_0596bb46` | Rigger | Implement dynamic sidebar generation in en/script.js | 1 | $14.82 | estimated |
| 2026-09-21 | `t_1aab9313` | Scribe | Author real content for log pages 35-46 (12 topics, EN+RO) — prereq for … | 1 | $1.33 | exact |
| 2026-09-21 | `t_268ea82f` | Engineer | Automate or document one-command deploy process | 1 | $0.61 | exact |
| 2026-09-21 | `t_2b50bcfe` | Assayer | Verify byte-identical EN/RO sidebar generation and no manual lists … | 1 | $1.95 | exact |
| 2026-09-21 | `t_2c5567aa` | Rigger | Implement dynamic sidebar generation in ro/script.js (mirrored) | 1 | $15.87 | estimated |
| 2026-09-21 | `t_470b45d2` | Rigger | Add rel=noopener noreferrer to all target=_blank links | 1 | $8.08 | estimated |
| 2026-09-21 | `t_5400e63b` | Rigger | Fix: strip stale hand-authored sidebar <li> from … | 1 | $2.56 | estimated |
| 2026-09-21 | `t_57384053` | Assayer | Fix 3 RO log pages with meta-description/og:description desync | 1 | $0.49 | exact |
| 2026-09-21 | `t_594cc53f` | Scribe | Write meta description/keywords for log pages 13-23 | 1 | $1.78 | exact |
| 2026-09-21 | `t_646b1f9b` | Scribe | [Should] Per-page meta description/keywords sweep (BACKLOG #010) | 1 | $0.07 | exact |
| 2026-09-21 | `t_6dd78890` | Rigger | Add Under Construction banner to empty/lorem log pages | 2 | $37.57 | estimated |
| 2026-09-21 | `t_71523c53` | Rigger | Audit current sidebar link logic and page h3 structure | 1 | $6.73 | estimated |
| 2026-09-21 | `t_a53a1a97` | Scribe | Write meta description/keywords for log pages 1-12 | 1 | $1.25 | exact |
| 2026-09-21 | `t_aba8a329` | Scribe | Write meta description/keywords for log pages 35-46 | 5 | $2.02 | exact |
| 2026-09-21 | `t_c712ce9f` | Scribe | Write meta description/keywords for log pages 24-34 | 1 | $3.11 | exact |
| 2026-09-21 | `t_dabc9e4a` | Assayer | Audit all 46 pages for meta uniqueness and placeholder removal | 1 | $0.50 | exact |
| 2026-09-21 | `t_e66e7729` | Scribe | [Should] Dynamic sidebar index generation (BACKLOG #013) | 2 | $0.75 | exact |
| 2026-09-21 | `t_eab36222` | Scribe | [Must] Launch prep: noopener, empty log banners, deploy config (BACKLOG … | 1 | $0.17 | exact |
| 2026-09-23 | `t_1cace2c8` | Scribe | [Should] Bibliography: add MDN server-side intro + web.dev Rendering on … | 1 | $0.93 | exact |
| | | | **round total**: 49 sessions, $20.08 exact + $114.78 estimated | | **$134.85** | |

### 2. The curriculum item (2026-10-29)

| date | card | cabin | what the card did | sessions | cost | basis |
|---|---|---|---|---:|---:|---|
| 2026-10-29 | `t_2d5e4f79` | Assayer | [Should] QA (read-only): the 'How the web works' curriculum item, EN + … | 1 | $0.55 | exact |
| 2026-10-29 | `t_ffe11c0e` | Scribe | [Should] WRITER: curriculum item 'How the web works' (servers, ports … | 1 | $1.13 | exact |
| | | | **round total**: 2 sessions, $1.68 exact + $0.00 estimated | | **$1.68** | |

### 3. Fix round, budget $40 (2026-11-05 and 11-06)

The audit's *fix first* items #8 and after, and the minor items.

| date | card | cabin | what the card did | sessions | cost | basis |
|---|---|---|---|---:|---:|---|
| 2026-11-05 | `t_0763bb54` | Scribe | [Should] Audit minor: bring BACKLOG-RO.md #013 into line with EN … | 1 | $0.84 | exact |
| 2026-11-05 | `t_262d8aa4` | Rigger | [Should] Audit minor: translate the RO note-save alerts in ro/script.js … | 2 | $2.28 | exact |
| 2026-11-05 | `t_395f0c44` | Engineer | [Must] Fix #8 revise: deploy-status short-SHA + DEPLOY_POLL guard … | 1 | $1.48 | exact |
| 2026-11-05 | `t_958b2bf8` | Assayer | [Must] QA (read-only): the fix #8 PR | 1 | $1.72 | exact |
| 2026-11-05 | `t_af9beaa3` | Assayer | [Must] QA (read-only): check Iulia's clean-up after the PR #5 merge | 1 | $0.48 | exact |
| 2026-11-05 | `t_b4773637` | Engineer | [Must] Audit fix-first #8: correct the deploy.yml comment + fix the … | 1 | $1.97 | exact |
| 2026-11-05 | `t_b6cfc4d3` | Assayer | [Should] QA (read-only): the RO BACKLOG #013 PR | 1 | $0.82 | exact |
| 2026-11-05 | `t_c3043989` | Assayer | [Must] QA re-check (read-only): fix #8 PR #6 after revise | 1 | $1.25 | exact |
| 2026-11-05 | `t_fe5e9853` | Assayer | [Should] QA (read-only): the RO save-alerts PR | 1 | $1.28 | exact |
| 2026-11-06 | `t_0353851a` | Assayer | [Should] QA (read-only): the og-meta PR | 1 | $2.13 | exact |
| 2026-11-06 | `t_2ee378d4` | Assayer | [Could] Audit minor: FIND-ONLY the off-by-one ranges (read-only report … | 1 | $5.87 | exact |
| 2026-11-06 | `t_323d8f8e` | Cartographer | [Should] Audit minor og meta 1/2: design the 1200x630 share PNG + … | 1 | $1.87 | exact |
| 2026-11-06 | `t_4a093bbd` | Rigger | [Should] PR #7 wording: 'nota' -> 'notița' in the RO not-saved alert … | 1 | $0.88 | exact |
| 2026-11-06 | `t_6b01b313` | Assayer | [Should] QA re-check (read-only): PR #7 after the 'notița' fix | 1 | $0.86 | exact |
| 2026-11-06 | `t_9c42e731` | Engineer | [Must] Fix make rollback: merge-commit tip (-m 1) + refuse unless on … | 1 | $2.45 | exact |
| 2026-11-06 | `t_df76d96f` | Rigger | [Should] Audit minor og meta 2/2: drop og:background_color, point … | 1 | $2.93 | exact |
| 2026-11-06 | `t_e4602b35` | Assayer | [Must] QA (read-only): the make rollback PR | 1 | $1.48 | exact |
| | | | **round total**: 18 sessions, $30.58 exact + $0.00 estimated | | **$30.58** | |

### 4. Review round, budget $45 (2026-11-05)

Three read-only consults on the journal and the project's documents.

| date | card | cabin | what the card did | sessions | cost | basis |
|---|---|---|---|---:|---:|---|
| 2026-11-05 | `t_62d467a6` | Scribe | [Consult] writer (read-only): JOURNAL as a novel — corrections … | 4 | $7.47 | exact |
| 2026-11-05 | `t_7144b5db` | Archivist | [Consult] researcher (read-only): JOURNAL fact-check, source pack for … | 1 | $3.23 | exact |
| 2026-11-05 | `t_f8bc8dfc` | Scribe | [Consult] writer (read-only): are the project's markdown documents well … | 1 | $2.21 | exact |
| | | | **round total**: 6 sessions, $12.91 exact + $0.00 estimated | | **$12.91** | |

### 5. Journal round, budget $61, raised to $66 (2026-11-06 to 11-10)

Season V (DAY 33 to DAY 39), the Git/PR guide, the hard-error fixes, and their checks.

| date | card | cabin | what the card did | sessions | cost | basis |
|---|---|---|---|---:|---:|---|
| 2026-11-06 | `t_05b59ef1` | Scribe | [Journal] writer: PR #12 DAY 36 `git branch -d` teaching fix (EN+RO) … | 1 | $0.45 | exact |
| 2026-11-06 | `t_05cb596b` | Scribe | [Journal] writer: Season V 3/3 — ZIUA 33-39 RO + open the PR | 7 | $9.88 | exact |
| 2026-11-06 | `t_0c56f7bb` | Archivist | [Journal] researcher (read-only): AI primer — harness, assistant vs … | 1 | $1.26 | exact |
| 2026-11-06 | `t_0e5d67fe` | Scribe | [Journal] writer: Season V 1/3 — DAY 33-36 EN | 1 | $3.62 | exact |
| 2026-11-06 | `t_3f438aea` | Scribe | [Docs] writer fix: PR #13 guide, `git branch -d` refusal claim (EN+RO) | 1 | $0.68 | exact |
| 2026-11-06 | `t_5417ab9e` | Assayer | [Docs] QA (read-only): Git/PR guide PR | 1 | $1.61 | exact |
| 2026-11-06 | `t_6be39a89` | Assayer | [Journal] QA re-check (read-only): PR #12 after the 5 REVISE fixes | 1 | $1.65 | exact |
| 2026-11-06 | `t_a45c0746` | Scribe | [Docs] writer: Git/PR workflow guide EN+RO + DEPLOY.md (PR, no merge) | 1 | $2.05 | exact |
| 2026-11-06 | `t_a83f4575` | Assayer | [Journal] QA (read-only): Season V PR — facts, teaching, rulings | 1 | $5.13 | exact |
| 2026-11-06 | `t_c3d49bbc` | Archivist | [Journal] researcher (read-only): source-pack addendum — sessions + … | 1 | $1.72 | exact |
| 2026-11-06 | `t_c85f626d` | Scribe | [Journal] writer: PR A — fix DAY 29 code line + JOURNAL-RO hard errors … | 1 | $2.30 | exact |
| 2026-11-06 | `t_d1c32bd8` | Assayer | [Journal] QA re-check (read-only): PR #12 after the DAY 36 `git branch … | 1 | $0.93 | exact |
| 2026-11-06 | `t_da6e1697` | Scribe | [Journal] writer: Season V 2/3 — DAY 37-39 EN + Sleeper's errata ledger … | 1 | $4.54 | exact |
| 2026-11-06 | `t_f1a50ce7` | Assayer | [Journal] QA (read-only): PR A hard errors | 1 | $1.21 | exact |
| 2026-11-06 | `t_fc537220` | Scribe | [Journal] writer: Season V REVISE fixes (5 items) — update PR #12, no … | 1 | $0.78 | exact |
| 2026-11-06 | `t_fd510b32` | Assayer | [Docs] QA re-check (read-only): PR #13 after the `branch -d` fix | 1 | $1.11 | exact |
| 2026-11-10 | `t_24db5f7e` | Assayer | [Journal] QA re-check (read-only): PR #12 after the GitS-years + "one … | 1 | $0.56 | exact |
| 2026-11-10 | `t_5561822c` | Scribe | [Journal] writer: DAY 33 transformation of the Voice (opencode -> … | 1 | $3.06 | exact |
| 2026-11-10 | `t_bf610bf8` | Scribe | [Journal] writer: PR #11 owner corrections (Nietzsche, 2117, ocheanul … | 1 | $2.92 | exact |
| 2026-11-10 | `t_f8576b06` | Assayer | [Journal] QA (read-only): PR #11 + PR #12 after owner corrections + … | 1 | $3.33 | exact |
| 2026-11-10 | `t_fc4344fb` | Scribe | [Journal] writer fix: PR #12 QA REVISE (GitS manga years; DAY 33 "one … | 1 | $0.47 | exact |
| | | | **round total**: 27 sessions, $49.25 exact + $0.00 estimated | | **$49.25** | |

### 6. The Quartermaster's coordination (interactive, 2026-11-05 to 11-10)

My own watch, with the captain, outside the cards: one long session that ran the rounds,
counted at 94% (120 of its 127 project mentions are this project's) and split across days by
my messages on each day. The default-profile line is the Claude Code conversation, imported into Hermes on 11-05 at 16:04.

| date | card | cabin | what the card did | sessions | cost | basis |
|---|---|---|---|---:|---:|---|
| 2026-11-05 | — | default profile | Imported from Claude Code: (imported conversation begins with an … | 1 | $0.93 | estimated |
| 2026-11-05 | — | Quartermaster | PM: Add digital-odyssey audit tasks to Kanban | 1 | $9.33 | estimated |
| 2026-11-06 | — | Quartermaster | PM: Add digital-odyssey audit tasks to Kanban | 1 | $9.56 | estimated |
| 2026-11-10 | — | Quartermaster | PM: Add digital-odyssey audit tasks to Kanban | 1 | $4.38 | estimated |
| | | | **round total**: 4 sessions, $0.00 exact + $24.21 estimated | | **$24.21** | |

### 7. Mechanism numbers (2026-11-10)

| date | card | cabin | what the card did | sessions | cost | basis |
|---|---|---|---|---:|---:|---|
| 2026-11-10 | `t_dfe891c5` | Rigger | [Should] Fix the 9 wrong mechanism/module numbers in comments + docs … | 1 | $2.19 | exact |
| 2026-11-10 | `t_ee116fb0` | Assayer | [Should] QA (read-only): mechanism-numbers PR | 1 | $1.77 | exact |
| | | | **round total**: 2 sessions, $3.97 exact + $0.00 estimated | | **$3.97** | |

### 8. Round 3: this ledger and the Obsidian handbook, budget $20 (2026-11-10, still running)

A **snapshot**, taken while the round was still running. This card and the handbook cards are not
in it yet. The next row block will correct it.

| date | card | cabin | what the card did | sessions | cost | basis |
|---|---|---|---|---:|---:|---|
| 2026-11-10 | `t_718da2ab` | Archivist | [Ledger] researcher (read-only): reconstruct project costs since … | 1 | $0.71 | exact |
| 2026-11-10 | `t_9ed6558e` | Archivist | [Handbook] researcher (read-only): Obsidian facts for Iulia | 1 | $0.73 | exact |
| | | | **round total**: 2 sessions, $1.44 exact + $0.00 estimated | | **$1.44** | |

## Fuel by journal day

The journal's *Fuel log* lines come from this table. The rule: **a day's fuel is the Hermes work
that the day tells of.** Each session is counted in one day only. My coordination session is split
by when my messages were written. Work that no day tells of (mostly writing and checking the
journal itself) has its own line, so the column still adds up to the total.

| journal day | ship's date | what is counted | fuel |
|---|---|---|---:|
| DAY 33 | 2026-08-26 → 2026-09-10 | every row of 08-26 and 09-10: the board set up, the curriculum watch, the first cards | $27.81 |
| DAY 34 | 2026-09-21, then the drift to 2026-10-29 | every row of 09-21 (launch morning), 09-23 and 10-29 (the drift's crates) | $108.73 |
| DAY 35 | 2026-11-04 | nothing: the Inspector worked in Claude Code, outside Hermes | $0.00 |
| DAY 36 | 2026-11-04, evening | nothing: the shuttle was built in Claude Code and docked by the captain by hand | $0.00 |
| DAY 37 | 2026-11-04 22:13 → 11-05 17:43 | the Claude Code conversation imported into Hermes on 11-05 ($0.93), my watch on 11-05 up to 17:43 (39 of that day's 81 messages, $4.49), the Assayer's check of the clean-up `t_af9beaa3` ($0.48) | $5.90 |
| DAY 38 | 2026-11-05 17:46 → 11-06 18:47 | the 18 cards the Assayer tells of (fix #8 to PR #11, $33.61), my watch in those hours (42 of 81 messages on 11-05, $4.84; 45 of 83 on 11-06, $5.19) | $43.64 |
| DAY 39 | 2026-11-06 | the Archivist's fact-check `t_7144b5db`, the one source of the errata ledger not already counted in DAY 38 (the other, `t_2ee378d4`, is) | $3.23 |
| *after DAY 39* | 11-05 evening → 11-10 | writing and checking Season V and its fixes, the review consults, the Git/PR guide, the 11-10 corrections, the mechanism numbers, round 3, and my watch on 11-06 after 18:47 (38 of 83 messages, $4.38) and on 11-10 | $69.59 |
| **all** | | | **$258.89** |

Each line is rounded to the cent, so the lines can add up to a cent more or less than the total.
The *Fuel log* line in the journal rounds again, to the whole dollar.

The $0.00 of DAY 35 and DAY 36 does not mean those days were free. They were worked in another
harness, Claude Code, and its fuel is *not recorded* here. Most of the dockings in DAY 37 were made
there too.

## How the numbers were made

- **Sources.** Every cabin's Hermes session store and the digital-odyssey board, all opened read-only.
  Hermes keeps one row per session: tokens in and out, cache reads and writes, the model, and an
  estimated cost. It does not keep cost per card, so **the unit of this ledger is the session.**
- **Which sessions are ours.** From 2026-10-29 the board names the exact session of every run.
  Before that, a session counts if a card id of this board is in its title, folder or first prompt
  (card ids never repeat across boards). Six writer sessions of 09-21 carry no card id but did this
  project's log pages; they count, as *estimated*. Interactive sessions count at their share of
  project mentions, and only if that share is at least 20% and the project is named at least 5 times.
- **Prices.** Where Hermes saved a price, it is used as it is. For 2026-09-10 to 09-25 Hermes saved the
  tokens of most Opus 5 / Opus 5.5 sessions but no price; the Archivist priced them with Hermes's own
  table (per million tokens, in / out / cache read / cache write: Opus 5 $5 / $25 / $0.50 / $6.25,
  Opus 5.5 $4 / $20 / $0.20 / $5). That is $106.50 of the total. The Archivist checked the table against a
  priced session, and it matches to the cent.
- **Check.** `hermes insights` for the Assayer's cabin over the same 77 days says $534.76; the sessions
  in the store add up to $534.34. The store and Hermes agree. Insights cannot split by project, which
  is why this ledger exists.

## What this ledger cannot see

1. **2026-08-26 to 2026-09-10.** The board's run history starts on 09-10. The only cost tied to this
   project in that gap is my board set-up on 08-26 ($2.80). Work done before Hermes, in opencode, is not
   in these stores.
2. **Sessions that never name the project.** They cannot be found. Shared Hermes set-up (plugins,
   skills, models) is not project cost.
3. **Shared interactive sessions.** Fourteen sessions that only *mention* the project are left at $0.
   Counted by their mention share they would add at most about **$18.98**. A mention is not the same as
   work, so the share is a heuristic. The biggest estimated line, *Draft learning curriculum*
   (09-10, $17.55, 61% by mentions), could be too high or too low.
4. **Helpers.** A helper session that a crew member started is counted only if it carries a card id.
5. **Not an invoice.** API list prices, before cache effects, subscription billing or discounts.
6. **Still running.** Round 3 is a snapshot. Its later cards (this one among them) come in the next row block.
7. **The Inspector's harness.** Claude Code's own usage is not in Hermes's store. DAY 35, DAY 36 and most
   of DAY 37 burned fuel this ledger cannot read.

## Keeping the ledger

From now on I add **one row block after every round**, under *The rounds, card by card*, and I update
*The totals*, *Against the budgets* and, when a new journal day is written, *Fuel by journal day*.
A row block is:

```text
### N. <round name>, budget $<cap> (<dates>)
<one sentence: what the round was for>

| date | card | cabin | what the card did | sessions | cost | basis |
|---|---|---|---|---:|---:|---|
| <date> | `t_xxxxxxxx` | <cabin> | <card title, shortened> | <n> | $<cost> | exact / estimated |
| | | | **round total**: <rows>, $<exact> exact + $<est> estimated | | **$<total>** | |
```

The numbers come from Hermes's session store, read-only, by the same rules as above. The Romanian
twin, `cost-ledger-ro.md`, gets the same block in the same commit. A row is never rewritten after the
round closes; if a number turns out wrong, the correction is a new line that says which line it corrects.
