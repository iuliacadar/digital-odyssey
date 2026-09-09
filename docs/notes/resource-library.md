# Resource Library — D::0dy55ey

The captain's ledger of every book, course, and video consulted — or queued to
be consulted — on the learning path. One row per source. The rule of the ledger:
**a resource gets its row the moment it is heard of**, before the pile begins.

Grouped by the log-page decks of the vessel — `frontend`, `ux`, `backend`,
`database`, `data-bridge`, `delivery` — so that each Sector page can read its
own shelf.

---

## How to keep this ledger

- Add a row as soon as a resource enters the horizon — queued, not forgotten.
- Status flows: `queued` → `in progress` → `done`.
- The `Access` column tells how a source is reached: **free** = free and legal
  online (author's site, docs, free courses); **subscription** = behind a paid
  platform (Scribd / Everand / O'Reilly). Scribd and Everand are one catalogue —
  Everand is the reading arm of the same service — so books found there are
  logged with the `subscription` marker and their title; they enter the queue
  the moment the library subscription is active. **purchase** = a fixed price
  per book (No Starch, PragProg, OUP, InformIT, quickstartguides).
  **borrow** = Archive.org temporary lending (1-hour or 14-day loans, no
  download).
- When a source is actually studied, its note sheet is opened in its chapter
  folder (see `README.md` in this room) and linked in the row.
- Books, courses, videos, and docs share the same tables; `Kind` says which.
- The finished harvest eventually feeds `shared/data/bibliography-links.json`,
  the structured bibliography below deck.

---

## Frontend — HTML

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Intro to HTML/CSS | Khan Academy | Course | https://www.khanacademy.org/computing/computer-programming/html-css | free | in progress | `html/khan-academy-intro-html-css.md` |
| HTML & CSS: Design and Build Websites | Jon Duckett | Book | Scribd / Everand | subscription | queued | — |
| HTML5 for Web Designers | Jeremy Keith | Book | https://html5forwebdesigners.com/ | free | queued | — |
| Learn HTML — Structuring content | MDN Web Docs | Docs | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content | free | queued | — |
| Responsive Web Design Certification | freeCodeCamp | Course | https://www.freecodecamp.org/learn/ | free | queued | — |
| Foundations (HTML/CSS/JS) | The Odin Project | Course | https://www.theodinproject.com/ | free | queued | — |
| HTML Tutorial | W3Schools | Docs | https://www.w3schools.com/html/ | free | queued | — |
| HTML + CSS reference | DevDocs.io | Docs | https://devdocs.io/ | free | queued | — |

## Frontend — CSS

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Learn CSS | web.dev (Google) | Course | https://web.dev/learn/css | free | queued | — |
| CSS: The Definitive Guide | Eric A. Meyer & Estelle Weyl | Book | Scribd / Everand / O'Reilly | subscription | queued | — |
| CSS Secrets | Lea Verou | Book | Scribd / Everand / O'Reilly | subscription | queued | — |
| CSS in Depth (2nd ed.) | Keith J. Grant | Book | Scribd / Everand / Manning | subscription | queued | — |
| Styling text — Core Web Development | MDN Web Docs | Docs | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics | free | queued | — |
| CSS Flexbox & Grid (Responsive Web Design cert) | freeCodeCamp | Course | https://www.freecodecamp.org/learn/ | free | queued | — |
| Kevin Powell — CSS channel | Kevin Powell | Video | https://www.youtube.com/@kevinpowell | free | queued | — |
| CSS Diner (selectors game) | Luke Pacholski | Game | https://cssdiner.com/ | free | queued | — |
| Flexbox Froggy (game) | Flexbox Froggy | Game | https://flexboxfroggy.com/ | free | queued | — |

## Frontend — JavaScript

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Eloquent JavaScript (4th ed., 2024) | Marijn Haverbeke | Book | https://eloquentjavascript.net/ | free | queued | — |
| You Don't Know JS Yet | Kyle Simpson | Book | https://github.com/getify/You-Dont-Know-JS | free | queued | — |
| The Modern JavaScript Tutorial | Ilya Kantor | Docs/Course | https://javascript.info/ | free | queued | — |
| JavaScript reference + Guide | MDN Web Docs | Docs | https://developer.mozilla.org/en-US/docs/Web/JavaScript | free | queued | — |
| JavaScript: The Definitive Guide (7th ed.) | David Flanagan | Book | Scribd / Everand / O'Reilly | subscription | queued | — |
| JavaScript Algorithms & Data Structures (cert) | freeCodeCamp | Course | https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/ | free | queued | — |
| Learn JavaScript — Full Course for Beginners | freeCodeCamp (Beau Carnes) | Video | YouTube — freeCodeCamp.org | free | queued | — |
| Full Stack JavaScript path | The Odin Project | Course | https://www.theodinproject.com/paths/full-stack-javascript | free | queued | — |

## Frontend — TypeScript

Added 2026-09-10. Named explicitly in current junior frontend postings, and the
largest gap found when the ledger was audited against the 2026 hiring bar.
Studied in Phase 3 alongside React — *after* the JavaScript phase, never before.

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| The TypeScript Handbook | Microsoft / TS team | Docs | https://www.typescriptlang.org/docs/handbook/intro.html | free | queued | — |
| Beginner's TypeScript (tutorial) | Matt Pocock — Total TypeScript | Course | https://www.totaltypescript.com/tutorials/beginners-typescript | free | queued | — |
| TypeScript Deep Dive | Basarat Ali Syed | Book | https://basarat.gitbook.io/typescript | free | queued | — |
| Type Challenges (puzzles) | type-challenges community | Game | https://github.com/type-challenges/type-challenges | free | queued | — |

## Frontend — tooling (npm, bundlers)

Added 2026-09-10. A modern React project cannot be started without these.
No prior entry existed.

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Package management basics (npm) | MDN Web Docs | Docs | https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Package_management | free | queued | — |
| Vite — Getting Started | Vite team | Docs | https://vite.dev/guide/ | free | queued | — |

## Frontend — testing

Added 2026-09-10. The done-definition of the curriculum requires "green CI";
the only testing entries in the ledger sat under *backend*.

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Testing Library — docs & guiding principles | Kent C. Dodds et al. | Docs | https://testing-library.com/docs/ | free | queued | — |
| Playwright — Getting Started | Microsoft | Docs | https://playwright.dev/docs/intro | free | queued | — |

## Frontend — debugging & DevTools

Added 2026-09-10. The highest-leverage daily practical skill, and the one most
consistently never taught deliberately.

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| What are browser developer tools? | MDN Web Docs | Docs | https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools | free | queued | — |
| Chrome DevTools documentation | Google | Docs | https://developer.chrome.com/docs/devtools | free | queued | — |

## Frontend — React

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Learn React — official tutorials | react.dev (Meta) | Docs | https://react.dev/learn | free | queued | — |
| The Road to React | Robin Wieruch | Book | https://www.roadtoreact.com/ | free | queued | — |
| Learn React (Bob Ziroll) | Scrimba | Course | https://scrimba.com/learn/learnreact | free | queued | — |
| React Course — full 16 h | freeCodeCamp (Bob Ziroll) | Video | YouTube — freeCodeCamp.org | free | queued | — |
| Front End Libraries (React/Redux) cert | freeCodeCamp | Course | https://www.freecodecamp.org/learn/ | free | queued | — |
| Full Stack Open (React + Node) | University of Helsinki | Course | https://fullstackopen.com/en/ | free | queued | — |

## Frontend — Angular

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Angular documentation & Learn | Angular Team | Docs | https://angular.dev/docs | free | queued | — |
| Tour of Heroes — official tutorial | Angular Team | Course | https://angular.dev/tutorial | free | queued | — |
| Angular for Beginners | freeCodeCamp | Video | YouTube — freeCodeCamp.org | free | queued | — |
| Angular — full course for beginners | Traversy Media | Video | YouTube | free | queued | — |
| ng-book: The Complete Book on Angular | Murray, Coury, Lerner, Taborda | Book | Scribd / Everand / Newline | subscription | queued | — |

---

## UX — foundations

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Don't Make Me Think, Revisited | Steve Krug | Book | Scribd / Everand | subscription | queued | — |
| The Design of Everyday Things | Don Norman | Book | Scribd / Everand | subscription | queued | — |
| 10 Usability Heuristics | Nielsen Norman Group | Docs | https://www.nngroup.com/articles/ten-usability-heuristics/ | free | queued | — |
| Foundations of UX Design (Google UX Cert) | Coursera | Course | https://www.coursera.org/professional-certificates/google-ux-design | free | queued | — |
| Laws of UX | Jon Yablonski | Docs | https://lawsofux.com/ | free | queued | — |
| UX Basics — free eBook | Interaction Design Foundation | Book | https://www.interaction-design.org/literature | free | queued | — |

## UX — accessibility

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Learn Accessibility | web.dev (Google) | Course | https://web.dev/learn/accessibility | free | queued | — |
| Accessibility module | MDN Web Docs | Docs | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility | free | queued | — |
| Introduction to Web Accessibility | W3C WAI / edX | Course | https://www.edx.org/course/web-accessibility-introduction | free | queued | — |
| WebAIM — articles + WAVE tool | WebAIM (Utah State) | Docs | https://webaim.org/ | free | queued | — |
| The A11y Project — checklists & patterns | A11y community | Docs | https://www.a11yproject.com/ | free | queued | — |
| A11ycasts | Rob Dodson (Chrome Developers) | Video | YouTube | free | queued | — |
| Inclusive Components | Heydon Pickering | Book (blog) | https://inclusive-components.design/ | free | queued | — |
| WCAG 2.2 — Quick Reference | W3C WAI | Docs | https://www.w3.org/WAI/WCAG22/quickref/ | free | queued | — |

---

## Backend — core

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Node.js documentation + Learn | OpenJS Foundation | Docs | https://nodejs.org/en/learn | free | queued | — |
| The Node.js Handbook | Flavio Copes | Book | https://flaviocopes.com/ebooks/ | free | queued | — |
| How to Code in Node.js | David Landup / DigitalOcean | Book | https://www.digitalocean.com/community/tutorials | free | queued | — |
| Full Stack Open — Part 3 & 4 (Node/Express/REST) | University of Helsinki | Course | https://fullstackopen.com/ | free | queued | — |
| Back End Development & APIs cert | freeCodeCamp | Course | https://www.freecodecamp.org/learn/back-end-development-and-apis/ | free | queued | — |
| Learn Node.js & Express — 8 h course | John Smilga / freeCodeCamp | Video | YouTube — freeCodeCamp.org | free | queued | — |

## Backend — language

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Eloquent JavaScript (4th ed.) | Marijn Haverbeke | Book | https://eloquentjavascript.net/ | free | queued | — |
| The Modern JavaScript Tutorial | Ilya Kantor | Docs/Course | https://javascript.info/ | free | queued | — |
| JavaScript Guide | MDN Web Docs | Docs | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide | free | queued | — |
| You Don't Know JS Yet | Kyle Simpson | Book | https://github.com/getify/You-Dont-Know-JS | free | queued | — |
| CS50 — Introduction to Computer Science | Harvard / edX | Course | https://cs50.harvard.edu/ | free | queued | — |

## Backend — architecture

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| The Twelve-Factor App | Adam Wiggins | Guide | https://12factor.net/ | free | queued | — |
| System Design Primer | Donne Martin | Docs | https://github.com/donnemartin/system-design-primer | free | queued | — |
| Backend Developer Roadmap | roadmap.sh | Docs | https://roadmap.sh/backend | free | queued | — |
| Software architecture writings | Martin Fowler | Docs | https://martinfowler.com/ | free | queued | — |
| Designing Data-Intensive Applications | Martin Kleppmann | Book | Scribd / Everand / O'Reilly | subscription | queued | — |
| Fundamentals of Software Architecture | Mark Richards & Neal Ford | Book | Scribd / Everand / O'Reilly | subscription | queued | — |

## Backend — API (REST / HTTP)

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| HTTP documentation | MDN Web Docs | Docs | https://developer.mozilla.org/en-US/docs/Web/HTTP | free | queued | — |
| OpenAPI Specification | OpenAPI Initiative | Docs | https://spec.openapis.org/ | free | queued | — |
| Microsoft REST API Guidelines | Microsoft | Docs | https://github.com/microsoft/api-guidelines | free | queued | — |
| RESTful API Guidelines | Zalando | Docs | https://opensource.zalando.com/restful-api-guidelines | free | queued | — |
| REST CookBook | REST CookBook community | Docs | https://restcookbook.com/ | free | queued | — |
| Designing RESTful APIs | Udacity | Course | https://www.udacity.com/course/designing-restful-apis--ud388 | free | queued | — |

## Backend — security & authentication

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| OWASP Top 10 | OWASP Foundation | Docs | https://owasp.org/www-project-top-ten/ | free | queued | — |
| OWASP Cheat Sheet Series | OWASP | Docs | https://cheatsheetseries.owasp.org/ | free | queued | — |
| PortSwigger Web Security Academy | PortSwigger | Course + labs | https://portswigger.net/web-security | free | queued | — |
| OWASP Juice Shop (vulnerable app to practice) | OWASP | Course/app | https://owasp.org/www-project-juice-shop/ | free | queued | — |
| OWASP Academy — web AppSec course | OWASP Foundation | Course | https://owasp-academy.teachable.com/ | free | queued | — |

## Backend — middleware

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Express — Using Middleware | Express | Docs | https://expressjs.com/en/guide/using-middleware.html | free | queued | — |
| Express — Writing Middleware | Express | Docs | https://expressjs.com/en/guide/writing-middleware.html | free | queued | — |
| Express/Node tutorial | MDN Web Docs | Course | https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs | free | queued | — |
| Express middleware — complete guide | LogRocket | Blog | https://blog.logrocket.com/express-middleware-a-complete-guide/ | free | queued | — |

## Backend — performance

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| High Performance Browser Networking | Ilya Grigorik | Book | https://hpbn.co/ | free | queued | — |
| Learn Performance | web.dev (Google) | Course | https://web.dev/learn/performance | free | queued | — |
| Web Performance | MDN Web Docs | Docs | https://developer.mozilla.org/en-US/docs/Web/Performance | free | queued | — |
| The Book of Speed | Stoyan Stefanov | Book | https://www.bookofspeed.com/ | free | queued | — |
| Designing for Performance | Lara Hogan | Book | https://designingforperformance.com/ | free | queued | — |

## Backend — testing

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| JavaScript & Node.js Testing Best Practices | Yoni Goldberg | Book | https://github.com/goldbergyoni/javascript-testing-best-practices | free | queued | — |
| Jest documentation | Jest / OpenJS | Docs | https://jestjs.io/ | free | queued | — |
| Vitest documentation | Vitest team | Docs | https://vitest.dev/ | free | queued | — |
| Learn Testing | web.dev (Google) | Course | https://web.dev/learn/testing | free | queued | — |
| The Practical Test Pyramid | Martin Fowler | Docs | https://martinfowler.com/articles/practical-test-pyramid.html | free | queued | — |

## Backend — documentation

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Write the Docs — community | Write the Docs | Community | https://www.writethedocs.org/ | free | queued | — |
| Diataxis — a framework for documentation | Daniele Procida | Guide | https://diataxis.fr/ | free | queued | — |
| Documenting APIs — I'd Rather Be Writing | Tom Johnson | Course/blog | https://idratherbewriting.com/ | free | queued | — |

---

## Database — SQL (relational)

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| PostgreSQL documentation | PostgreSQL Global Dev Group | Docs | https://www.postgresql.org/docs/ | free | queued | — |
| MySQL Reference Manual | Oracle | Docs | https://dev.mysql.com/doc/ | free | queued | — |
| CS50 SQL — Introduction to Databases with SQL | Harvard | Course | https://cs50.harvard.edu/sql/ | free | queued | — |
| Intro to SQL | Khan Academy | Course | https://www.khanacademy.org/computing/computer-programming/sql | free | queued | — |
| SQLZoo | SQLZoo | Course | https://sqlzoo.net/ | free | queued | — |
| PGExercises | pgexercises.com | Course | https://pgexercises.com/ | free | queued | — |
| Relational Database Certification | freeCodeCamp | Course | https://www.freecodecamp.org/learn/relational-database/ | free | queued | — |
| 30 Days of SQL — from Basic to Advanced | GeeksforGeeks | Course | https://www.geeksforgeeks.org/sql/30-days-of-sql-from-basic-to-advanced-level/ | free | queued | — |
| SQL Full Course for Beginners — 30 Hours | Data with Baraa | Course | https://www.youtube.com/playlist?list=PLNcg_FV9n7qZY_2eAtUzEUulNjTJREhQe | free | queued | — |
| SQL QuickStart Guide | Walter Shields / ClydeBank Media | Book | https://www.quickstartguides.com/products/sql-quickstart-guide | purchase | queued | — |
| Practical SQL, 2nd Edition | Anthony DeBarros / No Starch | Book | https://nostarch.com/practical-sql-2nd-edition | purchase | queued | — |
| SQL in 10 Minutes a Day, 5th Edition | Ben Forta / Sams | Book | https://www.informit.com/store/sql-in-10-minutes-a-day-sams-teach-yourself-9780135182796 | purchase | queued | — |
| Big Data: A Very Short Introduction | Dawn Holmes / OUP | Book | https://global.oup.com/academic/product/big-data-9780198779575 | purchase | queued | — |
| Seven Databases in Seven Weeks, 2nd Ed. | Perkins, Wilson, Redmond / PragProg | Book | https://pragprog.com/titles/pwrdata/seven-databases-in-seven-weeks-second-edition/ | purchase | queued | — |
| An Introduction to Database Systems | C. J. Date | Book | https://archive.org/details/date2004 | borrow | queued | — |
| Database Design for Mere Mortals, 2nd Ed. | Michael J. Hernandez | Book | https://archive.org/details/databasedesignfo0000hern | borrow | queued | `database/database-design-for-mere-mortals.md` |
| Introduction of ER Model | GeeksforGeeks | Docs | https://www.geeksforgeeks.org/dbms/introduction-of-er-model/ | free | queued | `database/geeksforgeeks-introduction-er-model.md` |
| Let's Build a Simple Database | cstack | Guide | https://cstack.github.io/db_tutorial/ | free | queued | — |

## Database — NoSQL

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| MongoDB University — Basics | MongoDB | Course | https://learn.mongodb.com/ | free | queued | — |
| MongoDB Manual | MongoDB | Docs | https://www.mongodb.com/docs/manual/ | free | queued | — |
| MongoDB for SQL Pros | MongoDB University | Course | https://learn.mongodb.com/ | free | queued | — |
| Redis University — Get Started with Redis | Redis | Course | https://university.redis.io/ | free | queued | — |
| Redis documentation | Redis | Docs | https://redis.io/docs/latest/ | free | queued | — |

---

## Data bridge — JSON

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| JSON — official introduction | json.org (Douglas Crockford) | Docs | https://www.json.org/ | free | queued | — |
| Working with JSON | MDN Web Docs | Docs | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON | free | queued | — |
| RFC 8259 — The JSON Data Interchange Format | IETF | Docs | https://www.rfc-editor.org/rfc/rfc8259 | free | queued | — |
| JSON Schema | json-schema.org | Docs | https://json-schema.org/ | free | queued | — |
| JSON:API Specification | json:api | Docs | https://jsonapi.org/ | free | queued | — |

---

## Delivery — Git

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Pro Git (2nd ed.) | Scott Chacon & Ben Straub | Book | https://git-scm.com/book/en/v2 | free | queued | — |
| Git Pocket Guide | Richard E. Silverman (O'Reilly, 2013) | Book | O'Reilly / Everand | subscription | queued | — |
| Learn Git Branching | pcottle | Course (interactive) | https://learngitbranching.js.org/ | free | queued | — |
| Git and GitHub for Beginners — Crash Course | freeCodeCamp (Beau Carnes) | Video | https://www.youtube.com/watch?v=RGOj5yH7evk | free | queued | — |
| Learn Git — Full Course for Beginners | freeCodeCamp | Video | https://www.youtube.com/watch?v=zTjRZNkhiEU | free | queued | — |
| Git Basics | The Odin Project | Course | https://www.theodinproject.com/paths/foundations/courses/foundations | free | queued | — |
| Atlassian Git Tutorials | Atlassian | Docs | https://www.atlassian.com/git/tutorials | free | queued | — |

## Delivery — GitHub

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| GitHub Skills | GitHub | Course | https://skills.github.com/ | free | queued | — |
| Introduction to GitHub | GitHub Skills | Course | https://github.com/skills/introduction-to-github | free | queued | — |
| GitHub Pages | GitHub Skills | Course | https://github.com/skills/github-pages | free | queued | — |
| Getting started with GitHub | GitHub Docs | Docs | https://docs.github.com/en/get-started | free | queued | — |
| GitHub for Beginners (series) | GitHub Blog | Docs | https://github.blog/developer-skills/github/ | free | queued | — |
| Git and GitHub — Full Course | Boot.dev | Video | https://www.youtube.com/watch?v=rH3zE7VlIMs | free | queued | — |

## Delivery — deployment & CI/CD

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| GitHub Actions Quickstart | GitHub Docs | Docs | https://docs.github.com/en/actions/quickstart | free | queued | — |
| Hello GitHub Actions | GitHub Skills | Course | https://github.com/skills/hello-github-actions | free | queued | — |
| GitHub Actions Certification — Full Course | freeCodeCamp / Andrew Brown | Video | https://youtu.be/Tz7FsunBbfQ | free | queued | — |
| Complete GitHub Actions Course | DevOps Directive | Video | https://www.youtube.com/watch?v=Xwpi0ITkL3U | free | queued | — |
| Vercel Academy | Vercel | Course | https://vercel.com/academy | free | queued | — |
| Deploying to Vercel | Vercel Docs | Docs | https://vercel.com/docs/deployments | free | queued | — |
| Deploy a Website with Netlify | Scrimba / Coursera | Course | https://www.coursera.org/learn/how-to-deploy-with-netlify | free | queued | — |
| GitLab CI/CD learning path | GitLab University | Course | https://university.gitlab.com/pages/ci-cd-content | free | queued | — |

---

## The Humanities Deck — beletristic, historical, philosophical

Added 2026-09-10 at the captain's request. Her background is **philosophy and
philology**; a book with a voice digests better than a manual, at least
occasionally. This deck is **not on the critical path to employment** and no
entry here gates a phase. It exists because a curriculum a philologist cannot
bear to read is a curriculum that gets abandoned in month three, and because
several of these are genuinely the best explanations of their subject that exist
in any register.

Read one of these on the seventh day, when the six study days are done.

### Origins — the ancestors of the machine

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Sketch of the Analytical Engine — with **Ada Lovelace's Notes** | L. F. Menabrea, tr. & annotated by Ada Lovelace (1843) | Primary text | https://www.fourmilab.ch/babbage/sketch.html | free | queued | — |
| The Thrilling Adventures of Lovelace and Babbage | Sydney Padua | Graphic novel | https://sydneypadua.com/2dgoggles/comics/ | free (webcomic) / purchase (book) | queued | — |
| Computing Machinery and Intelligence (1950) | Alan Turing | Primary text | https://redirect.cs.umbc.edu/courses/471/papers/turing.pdf | free | queued | — |
| As We May Think (1945) | Vannevar Bush — *The Atlantic* | Essay | https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/ | free | queued | — |
| The Victorian Internet | Tom Standage | Book | https://archive.org/details/victorianinternetremarkablestoryoftelegraph19centuryonlinepioneerstomstandage_232_B | borrow | queued | — |
| Weaving the Web | Tim Berners-Lee | Book | https://archive.org/details/weavingweborigin00bern | borrow | queued | — |

### The craft as a human activity — the philosophy shelf

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| **Programming as Theory Building** (1985) | Peter Naur | Essay | https://pages.cs.wisc.edu/~remzi/Naur.pdf | free | queued | — |
| Literate Programming (1984) | Donald Knuth | Essay | http://www.literateprogramming.com/knuthweb.pdf | free | queued | — |
| The Humble Programmer (EWD340, 1972) | Edsger W. Dijkstra | Essay | https://www.cs.utexas.edu/~EWD/transcriptions/EWD03xx/EWD340.html | free | queued | — |
| The Rise of "Worse is Better" | Richard P. Gabriel | Essay | https://www.dreamsongs.com/RiseOfWorseIsBetter.html | free | queued | — |
| Teach Yourself Programming in Ten Years | Peter Norvig | Essay | https://norvig.com/21-days.html | free | queued | — |
| The Mythical Man-Month | Frederick P. Brooks Jr. | Book | https://archive.org/details/mythicalmanmonth0000broo | borrow | queued | — |
| Tools for Conviviality | Ivan Illich | Book | https://archive.org/details/toolsforconvivia0000illi | borrow | queued | — |
| Close to the Machine | Ellen Ullman | Book | https://archive.org/details/closetomachinete0000ullm | borrow | queued | — |
| Gödel, Escher, Bach: An Eternal Golden Braid | Douglas Hofstadter | Book | https://archive.org/details/godel-escher-bach-an-eternal-golden-braid-douglas-r.-hofstadter | borrow | queued | — |

### Narrative histories — the ones that read like novels

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| The Soul of a New Machine | Tracy Kidder | Book | https://archive.org/details/soulofnewmachine00kidd | borrow | queued | — |
| Hackers: Heroes of the Computer Revolution | Steven Levy | Book | https://archive.org/details/hackersheroesofc0000levy | borrow | queued | — |
| The Information: A History, a Theory, a Flood | James Gleick | Book | https://archive.org/details/informationhisto0000glei | borrow | queued | — |
| The Dream Machine | M. Mitchell Waldrop | Book | https://press.stripe.com/the-dream-machine | free (web) / purchase | queued | — |
| Broad Band: The Untold Story of the Women Who Made the Internet | Claire L. Evans | Book | https://archive.org/details/broadbanduntolds0000evan | borrow | queued | — |
| Coders at Work | Peter Seibel | Book | https://www.apress.com/gp/book/9781430219484 | subscription (Everand/O'Reilly) | queued | — |

### Bookish, but technically load-bearing

These are literary in register *and* teach the machine properly. The rare
overlap — worth prioritising over the pure-pleasure entries above.

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| **Code: The Hidden Language of Computer Hardware and Software** | Charles Petzold | Book | https://www.codehiddenlanguage.com/ (2nd ed. site) · https://archive.org/details/CharlesPetzoldCodeTheHiddenLanguageOfComputerHardwareAndSoftwareMicrosoftPress2000 | borrow / purchase | queued | — |
| The Pattern on the Stone | W. Daniel Hillis | Book | https://archive.org/details/patternonstonesi0000hill | borrow | queued | — |
| The Annotated Turing | Charles Petzold | Book | https://www.wiley.com/en-us/The+Annotated+Turing-p-9780470229057 | subscription (O'Reilly) / purchase | queued | — |
| Resilient Web Design | Jeremy Keith | Book | https://resilientwebdesign.com/ | free | queued | — |

### The long-form magazines — for a reading habit, not a syllabus

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| A List Apart | A List Apart | Magazine | https://alistapart.com/ | free | queued | — |
| Smashing Magazine | Smashing Media | Magazine | https://www.smashingmagazine.com/ | free | queued | — |
| CSS-Tricks | DigitalOcean | Magazine | https://css-tricks.com/ | free | queued | — |
| Josh W. Comeau — essays | Josh W. Comeau | Blog | https://www.joshwcomeau.com/ | free | queued | — |

---

## Interview & hiring preparation

Added 2026-09-10. The gate between a good portfolio and an actual offer.
Opened in **Phase 3, week 24**, when applications begin — not at the end.

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| Tech Interview Handbook | Yangshun Tay | Docs | https://www.techinterviewhandbook.org/ | free | queued | — |
| Front End Interview Handbook | Yangshun Tay | Docs | https://www.frontendinterviewhandbook.com/ | free | queued | — |
| GreatFrontEnd — practice questions | GreatFrontEnd | Course + labs | https://www.greatfrontend.com/ | free tier / subscription | queued | — |
| Exercism — JavaScript track (free mentoring) | Exercism | Course | https://exercism.org/tracks/javascript | free | queued | — |

---

## Subscriptions & platforms — the captain's ledger of cost

Added 2026-09-10 at the captain's request: what is worth paying for, what is
already paid for, and what is free and mistaken for paid.

| Platform | Cost (approx., verify at signup) | Verdict |
|---|---|---|
| **GitHub Student Developer Pack** | **free** with proof of student status | https://education.github.com/pack — check eligibility **first**. Bundles free tiers of many paid developer tools. If eligible, it changes the economics of everything below. |
| **Everand / Scribd** | already subscribed | Covers Duckett, Krug, Norman, Flanagan, Meyer, *Coders at Work*, and much of the narrative-history shelf. **Use what is already paid for before buying anything.** |
| **O'Reilly Learning** | ~$49/mo | The deepest technical catalogue that exists. Genuinely excellent, and the one most likely to be **redundant with Everand** for this curriculum's needs. Only worth it if a specific book is unavailable elsewhere. |
| **Frontend Masters** | ~$39/mo | The strongest paid frontend courses available. Its **Bootcamp is free**: https://frontendmasters.com/bootcamp/ — start there before paying anything. |
| **Total TypeScript (paid tiers)** | one-off | The free *Beginner's TypeScript* tutorial is listed above and is enough for Phase 3. Do not buy the paid tier before completing it. |
| **freeCodeCamp · The Odin Project · Full Stack Open · CS50** | **free** | The four strongest structured curricula in existence are all free. Nothing on this plan requires a paid course. |

**The ledger's honest position:** every spine source in `docs/CURRICULUM.md` is
free or already covered by the existing Everand subscription. No new
subscription is required to become employable on this plan. Check the GitHub
Student Pack first; then, if any single paid thing is added later, Frontend
Masters is the one with the clearest return — and only after its free Bootcamp
has been finished.

---

## Choosing the next course

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| roadmap.sh | roadmap.sh community | Docs/Roadmaps | https://roadmap.sh/ | free | queued | — |
| MDN Curriculum | MDN Web Docs | Docs | https://developer.mozilla.org/en-US/curriculum/ | free | queued | — |
| The Odin Project | The Odin Project | Course | https://www.theodinproject.com/ | free | queued | — |
| Teach Yourself Programming in Ten Years | Peter Norvig | Essay | https://norvig.com/21-days.html | free | queued | — |

---

*One ledger, one row per source, added the day it appears. Order before flood.*
