# Notes Archive — D::0dy55ey

The captain's working notes. The raw material out of which the Sector pages
(the `*-log.html` journals) are eventually compiled.

---

## How this works — per-source note sheets

Each consulted resource gets **its own note sheet**, one Markdown file per
source, kept in the folder of its chapter:

```
docs/notes/
├── README.md          <- this file, the room's signpost
├── _template-source-notes.md
├── html/              <- HTML chapter
│   ├── khan-academy-intro-html-css.md
│   └── ... (one file per source, as they are consulted)
├── css/               <- CSS chapter
├── javascript/        <- JavaScript chapter
├── react/             <- React chapter
├── angular/           <- Angular chapter
├── backend/           <- Backend chapter
├── sql/               <- SQL (relational) chapter
├── nosql/             <- NoSQL chapter
├── json/              <- JSON / data-bridge chapter
├── ux/                <- UX chapter
└── delivery/          <- Deployment / Git / GitHub chapter
```

The table below is the chapter index; the folders hold only note sheets.

Rules of the sheet:

1. A sheet follows **the source's own organization** (its chapters, its order),
   not any imposed curriculum.
2. Notes are written **in the captain's own words**, like class notes — what was
   *understood*, not just what was *seen*.
3. Code snippets copied while rehearsing, and open questions, are recorded as
   they appear. Questions marked `❓`.
4. New sheets are copies of `_template-source-notes.md` renamed to the source.

## When the synthesis happens

Only **after the reading/watching phase** of a chapter do we compile all the
source sheets into a *personal curriculum structure* — the ordering and topic
organization we consider best. The notes drive the structure; the Sector pages
(`html-log.html`, etc.) adapt to it, never the reverse.

The existing day-articles in those pages are **styling tests** (the `<pre><code>`
CRT blocks, the `.semantic-module` cards), not a fixed curriculum. They change
whenever a better arrangement emerges.

---

## Chapter folders

| Folder | Chapter | Source sheets | Status |
|---|---|---|---|
| `html/` | HTML | Khan Academy (starting) | notes in progress |
| `css/` | CSS | — | not begun |
| `javascript/` | JavaScript | — | not begun |
| `react/` | React | — | not begun |
| `angular/` | Angular | — | not begun |
| `backend/` | Backend | — | not begun |
| `sql/` | SQL (relational) | — | not begun |
| `nosql/` | NoSQL | — | not begun |
| `json/` | JSON / data bridge | — | not begun |
| `ux/` | UX | — | not begun |
| `delivery/` | Delivery (Git, GitHub, pipeline) | — | not begun |

---

*Take notes freely. Messy is fine — they will be refined. The only discipline is:
note what you understood, not just what you saw.*