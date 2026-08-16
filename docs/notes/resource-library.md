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

## Choosing the next course

| Resource | Author / Channel | Kind | Where | Access | Status | Notes sheet |
|---|---|---|---|---|---|---|
| roadmap.sh | roadmap.sh community | Docs/Roadmaps | https://roadmap.sh/ | free | queued | — |
| MDN Curriculum | MDN Web Docs | Docs | https://developer.mozilla.org/en-US/curriculum/ | free | queued | — |
| The Odin Project | The Odin Project | Course | https://www.theodinproject.com/ | free | queued | — |
| Teach Yourself Programming in Ten Years | Peter Norvig | Essay | https://norvig.com/21-days.html | free | queued | — |

---

*One ledger, one row per source, added the day it appears. Order before flood.*
