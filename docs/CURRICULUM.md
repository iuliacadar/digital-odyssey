# Curriculum — D::0dy55ey

> **The flight plan, not the flight.**
> This document orders the *reading phases* of the vessel's sectors. It does
> **not** compile per-topic lessons — that synthesis belongs to the note sheets,
> after they are written, per the standing rule in `docs/notes/README.md`:
>
> *"Only after the reading/watching phase of a chapter do we compile all the
> source sheets into a personal curriculum structure. The notes drive the
> structure; the Sector pages adapt to it, never the reverse."*
>
> **Status:** approved 2026-09-10. Romanian twin: `docs/CURRICULUM-ro.md`.
> **Drafted:** 2026-09-10.

---

## 0. The brief

**Outcome:** employable as a **junior frontend developer** (or accepted into an
internship) as fast as is honestly possible, and **Strigoi's backend Milestone 0
built by spring 2027**.

**Budget:** 6 hours/day × 5 days = **30 hours/week**, ~130 hours/month.

**Definition of done for the primary goal** — all four, testable:

1. Three portfolio artifacts deployed and publicly reachable, at least one of
   them a React + TypeScript application that fetches from a real API.
2. Every artifact has a README a stranger can follow, and green CI.
3. The candidate can explain, out loud and unaided, how the JavaScript event
   loop, `fetch`/promises, and React state flow work.
4. WCAG 2.2 AA verified on every artifact, with measured numbers.

Credential-free is fine — the cited 2026 sources agree that the majority of
working frontend developers are self-taught or bootcamp-trained, and that a
portfolio demonstrating real component architecture outweighs any certificate.

---

## 1. How long — the honest number

Independent 2026 estimates for a self-taught learner:

| Source | Weekly hours | Time to job-ready |
|---|---|---|
| Scrimba (2026 guide) | 8 h/week | 8–12 months |
| InApps (2026) | 20–30 h/week | 6–12 months; simple projects at 3–4 months |
| appwarstechnologies (2026) | — | working portfolio in 4–6 months |

At **30 h/week you are above the top of the surveyed band.** The fast end
(6 months) is therefore genuinely reachable — but only if the hours are
*directed*. The failure mode at this volume is not laziness, it is breadth:
147 queued sources is enough material to study productively for three years and
never become employable. This document exists to prevent that.

**Planned dates, from 2026-09-10:**

| Milestone | Week | Approx. date |
|---|---|---|
| HTML + CSS sector closed | 6 | late Oct 2026 |
| JavaScript sector closed — **the real gate** | 16 | early Jan 2027 |
| React + TypeScript, portfolio piece #1 live | 24 | early Mar 2027 |
| **Start applying** | 24 | **early Mar 2027** |
| SQL + Strigoi backend M0 live | 30 | **mid-Apr 2027 — spring, as asked** |
| Portfolio complete, 3 artifacts | 32 | late Apr 2027 |

⚠️ **Applying starts at week 24, not at the end.** The search itself takes 2–4
months in the current market. Running it *in parallel* with the last sectors is
the difference between a spring offer and an autumn one. Interviewing while
still learning is not a weakness — it is calibration you cannot get any other way.

---

## 2. Sector order, and why

The six decks are **not** studied in the order they appear in the ledger. Two
principles set the sequence:

1. **Employability first.** The frontend junior bar is HTML/CSS → JavaScript →
   React + TypeScript → Git. Everything else, however interesting, is after.
2. **Zero security stakes before authentication** — the sequencing decision
   already made in @session:pm/20260828_132309_427b57: a read-only API endpoint
   teaches HTTP, SQL and deployment where nobody is hurt by a bug in a product
   list. Auth is then the *only* new thing when it arrives.

| # | Phase | Weeks | Hours | Sector |
|---|---|---|---|---|
| 1 | Foundations | 1–6 | 180 | Frontend — HTML, CSS |
| 2 | The language | 7–16 | 300 | Frontend — JavaScript (+ Data Bridge folded in) |
| 3 | The framework | 17–24 | 240 | Frontend — React **+ TypeScript** |
| 4 | The other half | 25–30 | 180 | Database — SQL, then Backend M0 |
| 5 | Continuous | 1–30 | ~60 | Delivery — Git/GitHub, from week 1 |
| 6 | Woven | 1–30 | ~40 | UX Lab — never a block, always a lens |

**UX and Delivery are deliberately not phases.** Git is used from day one on
real commits, so it is learned by use, not by course. UX/accessibility is
applied to every artifact as it is built — a WCAG pass on a page you made
teaches more than a WCAG course you watched.

### Deferred — explicitly, with reasons

Not cancelled. Parked until after the first job, and cut here so the other
hours are real:

| Deferred | Sources | Why |
|---|---|---|
| **Angular** | 5 | Learning two frameworks before one job halves the depth in both. React has the larger junior market. Angular is a 3-week conversion later, not a prerequisite. |
| **NoSQL / Mongo / Redis** | 5 | Strigoi is relational. Learn one data model properly. |
| **Backend architecture** | 6 | *Designing Data-Intensive Applications* and *System Design Primer* are senior-level. Reading them now costs weeks and returns vocabulary, not skill. |
| **Backend performance** | 5 | Optimising systems you have not yet built. |
| **C. J. Date, *Introduction to Database Systems*** | 1 | 1000+ pages of formal relational theory. It is an excellent book and the wrong book for month 7. The note sheet already scaffolds its full TOC — that is a trap worth naming. |

That is **~22 of 147 sources deferred**, which is the point: the ledger is a
*horizon*, not a queue to be drained.

---

## 3. Load-bearing vs. reference

The single most useful distinction in this document. Of 147 sources:

- **Spine** — read/worked start to finish, gets a note sheet, gates the phase.
- **Drill** — practice, done until fluent, no note sheet needed.
- **Reference** — looked up when needed. **Never read cover to cover.**

Roughly **18 spine sources** carry the whole curriculum. The other ~129 are
drills and reference. Treating a reference as a spine is the main way this plan
fails.

### Phase 1 — HTML & CSS (weeks 1–6)

| Role | Source |
|---|---|
| Spine | **Khan Academy — Intro to HTML/CSS** (already `in progress`; finish it, it is the pace-setter) |
| Spine | **MDN — Structuring content** + **Styling basics** (the standards-truth) |
| Spine | **web.dev — Learn CSS** (Google; the modern layout model) |
| Spine | **Kevin Powell** (video; nobody teaches CSS layout better) |
| Drill | Flexbox Froggy, CSS Diner, freeCodeCamp Responsive Web Design cert |
| Reference | Meyer & Weyl *CSS: The Definitive Guide*, W3Schools, DevDocs |
| ⚠️ Flag | **Jeremy Keith, *HTML5 for Web Designers*** — 2010. Historically lovely, currently dated. Read for pleasure, not for the bar. |
| ⚠️ Flag | **Duckett, *HTML & CSS*** — beautiful, but shallower than MDN. Redundant with the spine. |

**Exit gate:** build one static, responsive, semantic page from a design you did
not write — no framework, no copy-paste — that passes WCAG 2.2 AA with measured
contrast numbers. If it is built by trial and error rather than by knowing what
the properties do, the gate is not passed.

### Phase 2 — JavaScript (weeks 7–16) — **the real gate**

Ten weeks and 300 hours is not generous, it is the correct weight. Every
downstream sector rests here. This is where most self-taught paths quietly fail
by rushing to React.

| Role | Source |
|---|---|
| Spine | **javascript.info** — *The Modern JavaScript Tutorial* (the best single text) |
| Spine | **Eloquent JavaScript, 4th ed.** — second pass, for depth |
| Spine | **MDN — JavaScript Guide** |
| Drill | freeCodeCamp — JavaScript Algorithms & Data Structures cert |
| Reference | **You Don't Know JS Yet** — deep dives, per-topic only. Not a read-through. |
| Reference | Flanagan, *The Definitive Guide* |
| Folded in | **Data Bridge sector** — JSON, `fetch`, RFC 8259, JSON Schema. ~1 week. JSON is not a subject, it is the thing `fetch` returns. |

**Exit gate:** an app that fetches live data from a public API, handles the
loading and the error state, renders to the DOM, and persists something — with
zero framework. Plus: explain the event loop out loud, unaided.

### Phase 3 — React + TypeScript (weeks 17–24)

| Role | Source |
|---|---|
| Spine | **react.dev — Learn** (official; the modern hooks-first path) |
| Spine | **Full Stack Open, parts 1–2** (University of Helsinki; rigorous, free) |
| Spine | **TypeScript Handbook** + **Beginner's TypeScript** (Total TypeScript) — both free, added to the ledger 2026-09-10 |
| Drill | Scrimba — Learn React (Bob Ziroll) |
| Reference | Wieruch, *The Road to React* |

**Exit gate:** portfolio piece #1 — a deployed React + TypeScript application
with real component decomposition, deployed via CI, with a README. **Applications
to jobs begin here.**

### Phase 4 — SQL, then Backend M0 (weeks 25–30)

| Role | Source |
|---|---|
| Spine | **CS50 SQL** (Harvard) — the strongest free SQL course available |
| Spine | **Hernandez, *Database Design for Mere Mortals*** — design, not syntax. Note sheet already scaffolded. |
| Spine | **Full Stack Open, parts 3–4** (Node/Express/REST) |
| Drill | PGExercises, SQLZoo, freeCodeCamp Relational Database cert |
| Spine (short) | **The Twelve-Factor App** — one afternoon, permanently useful |
| Reference | PostgreSQL docs, MDN HTTP, Express docs |
| Reference | GeeksforGeeks ER model (note sheet exists — keep as reference) |

**Exit gate: Strigoi Milestone 0 live** — one read-only product API endpoint,
backed by a real database, deployed, with the existing Strigoi frontend reading
from it instead of hardcoded data. No accounts. No payments. No auth.
**This is the spring achievement.**

### Continuous — Delivery (weeks 1–30, ~60 h)

Front-load in week 1: **Pro Git ch. 1–3**, **Learn Git Branching**,
**GitHub Skills — Introduction to GitHub**. Then GitHub Actions in week 6, when
there is finally something to deploy. Everything else in this deck is reference.

### Woven — UX Lab (~40 h, never a block)

**NN/g 10 Usability Heuristics** and **Laws of UX** are one evening each and
change how you look at every screen afterwards. **web.dev Learn Accessibility**
+ **WCAG 2.2 Quick Reference** are applied per artifact. Krug's *Don't Make Me
Think* is a two-evening read, worth it. The Google UX Certificate is
**~6 months** — that is a career-change program for a UX designer, not a
frontend engineer. **Not on this plan.**

### The seventh day — the Humanities Deck

Added at the captain's request; her background is **philosophy and philology**.
This deck is **off the critical path** and gates nothing. It exists because a
curriculum a philologist cannot bear to read is one that gets abandoned in month
three — and because several of these are the best explanations of their subject
in any register whatsoever.

Read on the seventh day, when the five study days and the rest are done.

**If only one thing is read from this deck, read Naur.** *Programming as Theory
Building* (1985) is twelve pages arguing that a program is not a text but a
**theory** held in the minds of the people who built it — which is why
documentation decays and why a codebase whose team has left is effectively dead
even though every line survives. It is philosophy of mind applied to software,
and it will land harder on a philosopher than on most working engineers.

Then, in rough order of usefulness-to-this-curriculum:

| When | Read |
|---|---|
| Phase 1, for the machine underneath | **Petzold, *Code*** — builds a computer from a torch and a wire, one patient chapter at a time. The best bridge from humanities to hardware that exists. |
| Phase 1–2, for the craft | **Knuth, *Literate Programming*** (1984) — the direct ancestor of this project's own `@tag` doctrine. Reading it is reading your own method's origin. |
| Any time, for the lineage | **Lovelace's Notes** (1843) — her annotations are longer than the text she was translating. The first programmer was also the first commentator: a philologist's origin story. |
| Any time, for pleasure | **Kidder, *The Soul of a New Machine*** · **Gleick, *The Information*** · **Ullman, *Close to the Machine*** |
| When discouraged | **Dijkstra, *The Humble Programmer*** — aphoristic, superbly bad-tempered, and about the limits of the human mind rather than the machine's. |
| For the recursion | **Hofstadter, *Gödel, Escher, Bach*** — this project's own central metaphor, at 800 pages. A years-long companion, not a task. |

Full shelf — 28 entries across *Origins*, *The craft as a human activity*,
*Narrative histories*, *Bookish but load-bearing*, and *Magazines* — in
`docs/notes/resource-library.md`. Almost all free or Archive.org borrowable.

---

## 4. Where the exercises attach

Per the architecture confirmed in @session:pm/20260828_132309_427b57 —
digital-odyssey is the frame; the other repos are its practice.

| Phase | Strigoi | Texxturalia | digital-odyssey |
|---|---|---|---|
| 1 — HTML/CSS | frontend already built; re-read it as your own worked example | ditto | Sector pages begin to carry real content (they are lorem ipsum today) |
| 2 — JavaScript | `script.js` mechanisms become readable, then editable | comment standard (what+how) applies | `bibliography.js` is your own code — reread it in month 3 |
| 3 — React/TS | *(frozen — do not rewrite Strigoi in React)* | — | portfolio piece #1 is **new**, not a rewrite |
| 4 — SQL/Backend | **Milestone 0 lands here** — the spring target | — | — |

⚠️ **A rule worth binding:** do not rewrite Strigoi or Texxturalia in React when
Phase 3 arrives. The urge will be strong. Rewriting a finished thing produces no
new portfolio evidence and burns the weeks that portfolio piece #1 needs.
The frontends are frozen at a high point. Build something new instead.

---

## 5. Gaps in the resource library — **closed 2026-09-10**

Checked against all 147 original entries. These were **absent** and are on the
2026 junior frontend bar. All have since been added to
`docs/notes/resource-library.md` and to `shared/data/bibliography-links.json`
(now **189 sources**, from 147).

| Gap | Was in ledger | Now |
|---|---|---|
| **TypeScript** | **0** | 4 sources — Handbook, Total TypeScript, Deep Dive, Type Challenges. All free. |
| **Tooling — npm, Vite** | 0 | 2 — MDN package management, Vite guide |
| **Frontend testing** | 0 | 2 — Testing Library, Playwright |
| **DevTools / debugging** | ~1 | 2 — MDN intro, Chrome DevTools docs |
| **Interview prep** | 0 | 4 — new `interview` deck |
| **Humanities reading** | 0 | 28 — new `humanities` deck, off the critical path |

Also added: a **Subscriptions & platforms** section recording what is worth
paying for. Its finding — *every spine source on this plan is free or already
covered by the existing Everand subscription.* No new subscription is required
to become employable on this curriculum.

⚠️ **One consequence still open.** The `interview` (4) and `humanities` (28)
decks are new *categories*. `en/bibliography.html` has `<tbody data-shelf>`
elements for only the original seven, so **32 sources currently render
nowhere** — they exist in the ledger and the JSON but have no shelf on the page.
Two new `<section>` blocks are needed in both `en/` and `ro/bibliography.html`.
Not done unasked, since it changes site content.


---

## 6. Assumptions — recorded, not hidden

Flagged permanently, including any that turn out fine.

1. **[load-bearing]** React over Angular for employability. If the Cluj/Romanian
   market you are targeting is unusually Angular-heavy, phases 3 and the deferral
   list invert. **Verify against real local job postings before week 17.**
2. **[load-bearing]** 30 h/week is sustainable for ~7 months without burnout.
   If it proves to be 20, every date shifts by ~50% and the deferral list grows.
   Re-plan rather than compress.
3. Spring = March–May 2027. Strigoi M0 is planned for mid-April, inside it.
4. Employability estimates are from 2026 general guidance, not from Romanian
   market data specifically. Local conditions may differ.
5. TypeScript is treated as mandatory, on the strength of 2026 role
   descriptions. If local postings disagree, it drops to Phase 5.
6. The existing 23 `*-log.html` Sector pages are **confirmed placeholder
   content** — the captain's own words, 2026-09-10: *"they are just
   samples/demos, not the actual content and schedule. Consider them as lorem
   ipsum."* Their purpose is to establish the *structure* of the learning path
   in the manner of a ship captain's journal. Real articles are written only
   once the note sheets for a source exist, at which point the crew guides the
   filling of chapters, days and sectors. **No plan may treat their current
   content as evidence of learning.**
7. **[recorded doctrine]** When TypeScript arrives in Phase 3, types do *not*
   replace `@tag` comments — both are written. *"The type for the machine, the
   tag for the student."* A tag explains *why* and can drift silently out of
   sync; a type guarantees *what* and cannot. They describe different things.

---

## 7. Stop conditions

Re-plan, do not push through, if:

- The JavaScript phase (2) overruns week 18. It is the gate; overrunning it
  means the foundation is not there, and React will not fix that.
- Two consecutive phases exceed their hour estimate by 2×.
- No portfolio artifact is deployed by week 24.
- Study hours drop below 15/week for three consecutive weeks — the plan needs
  rebuilding at the real number, not guilt about the planned one.

---

*The ledger is the horizon. The spine is the route. 18 sources carry this;
the other 129 are the sky you navigate by, not the ground you walk.*
