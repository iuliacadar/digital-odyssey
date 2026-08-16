# Biblioteca de Resurse — D::0dy55ey

Condica căpitanului cu fiecare carte, curs și video consultat — sau pus în
coadă — pe drumul de învățare. Un rând pe sursă. Regula condicii:
**o resursă primește rândul ei în clipa în care e pomenită**, înainte ca mormanul să înceapă.

Grupată pe punțile jurnalelor de pagină ale corăbiei — `frontend`, `ux`,
`backend`, `database`, `data-bridge`, `delivery` — ca fiecare pagină Sector să-și
citească propriul raft.

---

## Cum se ține această condică

- Adaugă un rând de îndată ce o resursă intră pe orizont — așteptată, nu uitată.
- Starea curge: `în coadă` → `în curs` → `gata`.
- Coloana `Acces` spune cum se ajunge la o sursă: **gratuit** = gratuit și legal
  online (site-ul autorului, documentații, cursuri gratuite); **abonament** = în
  spatele unei platforme plătite (Scribd / Everand / O'Reilly). Scribd și Everand
  sunt un singur catalog — Everand este brațul de lectură al aceluiași serviciu —
  așa că cărțile găsite acolo sunt înregistrate cu reperul `abonament` și titlul
  lor; intră în coadă în momentul în care abonamentul bibliotecii e activ.
  **cumpărare** = un preț fix pe carte (No Starch, PragProg, OUP, InformIT,
  quickstartguides). **împrumut** = împrumut temporar al Archive.org (împrumuturi
  de 1 oră sau 14 zile, fără descărcare).
- Când o sursă este studiată efectiv, fișa ei de note se deschide în folderul
  capitolului (vezi `README.md` din această cameră) și se leagă în rând.
- Cărți, cursuri, video și documentații împart aceleași tabele; `Felul` spune care.
- Recolta terminată hrănește în final `shared/data/bibliography-links.json`,
  bibliografia structurată de dedesubt.

---

## Frontend — HTML

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Intro to HTML/CSS | Khan Academy | Curs | https://www.khanacademy.org/computing/computer-programming/html-css | gratuit | în curs | `html/khan-academy-intro-html-css.md` |
| HTML & CSS: Design and Build Websites | Jon Duckett | Carte | Scribd / Everand | abonament | coadă | — |
| HTML5 for Web Designers | Jeremy Keith | Carte | https://html5forwebdesigners.com/ | gratuit | coadă | — |
| Learn HTML — Structuring content | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content | gratuit | coadă | — |
| Responsive Web Design Certification | freeCodeCamp | Curs | https://www.freecodecamp.org/learn/ | gratuit | coadă | — |
| Foundations (HTML/CSS/JS) | The Odin Project | Curs | https://www.theodinproject.com/ | gratuit | coadă | — |
| HTML Tutorial | W3Schools | Documentație | https://www.w3schools.com/html/ | gratuit | coadă | — |
| HTML + CSS reference | DevDocs.io | Documentație | https://devdocs.io/ | gratuit | coadă | — |

## Frontend — CSS

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Learn CSS | web.dev (Google) | Curs | https://web.dev/learn/css | gratuit | coadă | — |
| CSS: The Definitive Guide | Eric A. Meyer & Estelle Weyl | Carte | Scribd / Everand / O'Reilly | abonament | coadă | — |
| CSS Secrets | Lea Verou | Carte | Scribd / Everand / O'Reilly | abonament | coadă | — |
| CSS in Depth (ed. a II-a) | Keith J. Grant | Carte | Scribd / Everand / Manning | abonament | coadă | — |
| Styling text — core web development | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics | gratuit | coadă | — |
| CSS Flexbox & Grid (certificare) | freeCodeCamp | Curs | https://www.freecodecamp.org/learn/ | gratuit | coadă | — |
| Kevin Powell — canal CSS | Kevin Powell | Video | https://www.youtube.com/@kevinpowell | gratuit | coadă | — |
| CSS Diner (joc de selectori) | Luke Pacholski | Joc | https://cssdiner.com/ | gratuit | coadă | — |
| Flexbox Froggy (joc) | Flexbox Froggy | Joc | https://flexboxfroggy.com/ | gratuit | coadă | — |

## Frontend — JavaScript

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Eloquent JavaScript (ed. a IV-a, 2024) | Marijn Haverbeke | Carte | https://eloquentjavascript.net/ | gratuit | coadă | — |
| You Don't Know JS Yet | Kyle Simpson | Carte | https://github.com/getify/You-Dont-Know-JS | gratuit | coadă | — |
| The Modern JavaScript Tutorial | Ilya Kantor | Documentație/Curs | https://javascript.info/ | gratuit | coadă | — |
| JavaScript reference + Guide | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Web/JavaScript | gratuit | coadă | — |
| JavaScript: The Definitive Guide (ed. a VII-a) | David Flanagan | Carte | Scribd / Everand / O'Reilly | abonament | coadă | — |
| JavaScript Algorithms & Data Structures (certificare) | freeCodeCamp | Curs | https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/ | gratuit | coadă | — |
| Learn JavaScript — Full Course for Beginners | freeCodeCamp (Beau Carnes) | Video | YouTube — freeCodeCamp.org | gratuit | coadă | — |
| Full Stack JavaScript path | The Odin Project | Curs | https://www.theodinproject.com/paths/full-stack-javascript | gratuit | coadă | — |

## Frontend — React

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Learn React — tutoriale oficiale | react.dev (Meta) | Documentație | https://react.dev/learn | gratuit | coadă | — |
| The Road to React | Robin Wieruch | Carte | https://www.roadtoreact.com/ | gratuit | coadă | — |
| Learn React (Bob Ziroll) | Scrimba | Curs | https://scrimba.com/learn/learnreact | gratuit | coadă | — |
| React Course — curs complet (16 h) | freeCodeCamp (Bob Ziroll) | Video | YouTube — freeCodeCamp.org | gratuit | coadă | — |
| Front End Libraries (React/Redux) cert | freeCodeCamp | Curs | https://www.freecodecamp.org/learn/ | gratuit | coadă | — |
| Full Stack Open (React + Node) | University of Helsinki | Curs | https://fullstackopen.com/en/ | gratuit | coadă | — |

## Frontend — Angular

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Angular documentation & Learn | Angular Team | Documentație | https://angular.dev/docs | gratuit | coadă | — |
| Tour of Heroes — tutorial oficial | Angular Team | Curs | https://angular.dev/tutorial | gratuit | coadă | — |
| Angular for Beginners | freeCodeCamp | Video | YouTube — freeCodeCamp.org | gratuit | coadă | — |
| Angular — full course for beginners | Traversy Media | Video | YouTube | gratuit | coadă | — |
| ng-book: The Complete Book on Angular | Murray, Coury, Lerner, Taborda | Carte | Scribd / Everand / Newline | abonament | coadă | — |

---

## UX — fundații

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Don't Make Me Think, Revisited | Steve Krug | Carte | Scribd / Everand | abonament | coadă | — |
| The Design of Everyday Things | Don Norman | Carte | Scribd / Everand | abonament | coadă | — |
| 10 Usability Heuristics | Nielsen Norman Group | Documentație | https://www.nngroup.com/articles/ten-usability-heuristics/ | gratuit | coadă | — |
| Foundations of UX Design (Google UX Cert) | Coursera | Curs | https://www.coursera.org/professional-certificates/google-ux-design | gratuit | coadă | — |
| Laws of UX | Jon Yablonski | Documentație | https://lawsofux.com/ | gratuit | coadă | — |
| UX Basics — carte electronică gratuită | Interaction Design Foundation | Carte | https://www.interaction-design.org/literature | gratuit | coadă | — |

## UX — accesibilitate

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Learn Accessibility | web.dev (Google) | Curs | https://web.dev/learn/accessibility | gratuit | coadă | — |
| Accessibility module | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility | gratuit | coadă | — |
| Introduction to Web Accessibility | W3C WAI / edX | Curs | https://www.edx.org/course/web-accessibility-introduction | gratuit | coadă | — |
| WebAIM — articole + instrumentul WAVE | WebAIM (Utah State) | Documentație | https://webaim.org/ | gratuit | coadă | — |
| The A11y Project — liste de control | Comunitate a11y | Documentație | https://www.a11yproject.com/ | gratuit | coadă | — |
| A11ycasts | Rob Dodson (Chrome Developers) | Video | YouTube | gratuit | coadă | — |
| Inclusive Components | Heydon Pickering | Carte (blog) | https://inclusive-components.design/ | gratuit | coadă | — |
| WCAG 2.2 — Quick Reference | W3C WAI | Documentație | https://www.w3.org/WAI/WCAG22/quickref/ | gratuit | coadă | — |

---

## Backend — nucleu

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Node.js documentation + Learn | OpenJS Foundation | Documentație | https://nodejs.org/en/learn | gratuit | coadă | — |
| The Node.js Handbook | Flavio Copes | Carte | https://flaviocopes.com/ebooks/ | gratuit | coadă | — |
| How to Code in Node.js | David Landup / DigitalOcean | Carte | https://www.digitalocean.com/community/tutorials | gratuit | coadă | — |
| Full Stack Open — Partea 3 & 4 (Node/Express/REST) | University of Helsinki | Curs | https://fullstackopen.com/ | gratuit | coadă | — |
| Back End Development & APIs cert | freeCodeCamp | Curs | https://www.freecodecamp.org/learn/back-end-development-and-apis/ | gratuit | coadă | — |
| Learn Node.js & Express — curs de 8 h | John Smilga / freeCodeCamp | Video | YouTube — freeCodeCamp.org | gratuit | coadă | — |

## Backend — limbaj

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Eloquent JavaScript (ed. a IV-a) | Marijn Haverbeke | Carte | https://eloquentjavascript.net/ | gratuit | coadă | — |
| The Modern JavaScript Tutorial | Ilya Kantor | Documentație/Curs | https://javascript.info/ | gratuit | coadă | — |
| JavaScript Guide | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide | gratuit | coadă | — |
| You Don't Know JS Yet | Kyle Simpson | Carte | https://github.com/getify/You-Dont-Know-JS | gratuit | coadă | — |
| CS50 — Introduction to Computer Science | Harvard / edX | Curs | https://cs50.harvard.edu/ | gratuit | coadă | — |

## Backend — arhitectură

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| The Twelve-Factor App | Adam Wiggins | Ghid | https://12factor.net/ | gratuit | coadă | — |
| System Design Primer | Donne Martin | Documentație | https://github.com/donnemartin/system-design-primer | gratuit | coadă | — |
| Backend Developer Roadmap | roadmap.sh | Documentație | https://roadmap.sh/backend | gratuit | coadă | — |
| Scrieri despre arhitectura software | Martin Fowler | Documentație | https://martinfowler.com/ | gratuit | coadă | — |
| Designing Data-Intensive Applications | Martin Kleppmann | Carte | Scribd / Everand / O'Reilly | abonament | coadă | — |
| Fundamentals of Software Architecture | Mark Richards & Neal Ford | Carte | Scribd / Everand / O'Reilly | abonament | coadă | — |

## Backend — API (REST / HTTP)

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| HTTP documentation | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Web/HTTP | gratuit | coadă | — |
| OpenAPI Specification | OpenAPI Initiative | Documentație | https://spec.openapis.org/ | gratuit | coadă | — |
| Microsoft REST API Guidelines | Microsoft | Documentație | https://github.com/microsoft/api-guidelines | gratuit | coadă | — |
| RESTful API Guidelines | Zalando | Documentație | https://opensource.zalando.com/restful-api-guidelines | gratuit | coadă | — |
| REST CookBook | comunitate REST CookBook | Documentație | https://restcookbook.com/ | gratuit | coadă | — |
| Designing RESTful APIs | Udacity | Curs | https://www.udacity.com/course/designing-restful-apis--ud388 | gratuit | coadă | — |

## Backend — securitate & autentificare

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| OWASP Top 10 | OWASP Foundation | Documentație | https://owasp.org/www-project-top-ten/ | gratuit | coadă | — |
| OWASP Cheat Sheet Series | OWASP | Documentație | https://cheatsheetseries.owasp.org/ | gratuit | coadă | — |
| PortSwigger Web Security Academy | PortSwigger | Curs + laboratoare | https://portswigger.net/web-security | gratuit | coadă | — |
| OWASP Juice Shop (aplicație vulnerabilă de exersat) | OWASP | Curs/aplicație | https://owasp.org/www-project-juice-shop/ | gratuit | coadă | — |
| OWASP Academy — curs web AppSec | OWASP Foundation | Curs | https://owasp-academy.teachable.com/ | gratuit | coadă | — |

## Backend — middleware

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Express — Using Middleware | Express | Documentație | https://expressjs.com/en/guide/using-middleware.html | gratuit | coadă | — |
| Express — Writing Middleware | Express | Documentație | https://expressjs.com/en/guide/writing-middleware.html | gratuit | coadă | — |
| Tutorial Express/Node | MDN Web Docs | Curs | https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs | gratuit | coadă | — |
| Express middleware — ghid complet | LogRocket | Blog | https://blog.logrocket.com/express-middleware-a-complete-guide/ | gratuit | coadă | — |

## Backend — performanță

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| High Performance Browser Networking | Ilya Grigorik | Carte | https://hpbn.co/ | gratuit | coadă | — |
| Learn Performance | web.dev (Google) | Curs | https://web.dev/learn/performance | gratuit | coadă | — |
| Web Performance | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Web/Performance | gratuit | coadă | — |
| The Book of Speed | Stoyan Stefanov | Carte | https://www.bookofspeed.com/ | gratuit | coadă | — |
| Designing for Performance | Lara Hogan | Carte | https://designingforperformance.com/ | gratuit | coadă | — |

## Backend — testare

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| JavaScript & Node.js Testing Best Practices | Yoni Goldberg | Carte | https://github.com/goldbergyoni/javascript-testing-best-practices | gratuit | coadă | — |
| Jest documentation | Jest / OpenJS | Documentație | https://jestjs.io/ | gratuit | coadă | — |
| Vitest documentation | echipa Vitest | Documentație | https://vitest.dev/ | gratuit | coadă | — |
| Learn Testing | web.dev (Google) | Curs | https://web.dev/learn/testing | gratuit | coadă | — |
| The Practical Test Pyramid | Martin Fowler | Documentație | https://martinfowler.com/articles/practical-test-pyramid.html | gratuit | coadă | — |

## Backend — documentație

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Write the Docs — comunitate | Write the Docs | Comunitate | https://www.writethedocs.org/ | gratuit | coadă | — |
| Diataxis — un cadru pentru documentație | Daniele Procida | Ghid | https://diataxis.fr/ | gratuit | coadă | — |
| Documenting APIs — I'd Rather Be Writing | Tom Johnson | Curs/blog | https://idratherbewriting.com/ | gratuit | coadă | — |

---

## Database — SQL (relațional)

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| PostgreSQL documentation | PostgreSQL Global Dev Group | Documentație | https://www.postgresql.org/docs/ | gratuit | coadă | — |
| MySQL Reference Manual | Oracle | Documentație | https://dev.mysql.com/doc/ | gratuit | coadă | — |
| CS50 SQL — Introduction to Databases with SQL | Harvard | Curs | https://cs50.harvard.edu/sql/ | gratuit | coadă | — |
| Intro to SQL | Khan Academy | Curs | https://www.khanacademy.org/computing/computer-programming/sql | gratuit | coadă | — |
| SQLZoo | SQLZoo | Curs | https://sqlzoo.net/ | gratuit | coadă | — |
| PGExercises | pgexercises.com | Curs | https://pgexercises.com/ | gratuit | coadă | — |
| Relational Database Certification | freeCodeCamp | Curs | https://www.freecodecamp.org/learn/relational-database/ | gratuit | coadă | — |
| 30 Days of SQL — from Basic to Advanced | GeeksforGeeks | Curs | https://www.geeksforgeeks.org/sql/30-days-of-sql-from-basic-to-advanced-level/ | gratuit | coadă | — |
| SQL Full Course for Beginners — 30 Hours | Data with Baraa | Curs | https://www.youtube.com/playlist?list=PLNcg_FV9n7qZY_2eAtUzEUulNjTJREhQe | gratuit | coadă | — |
| SQL QuickStart Guide | Walter Shields / ClydeBank Media | Carte | https://www.quickstartguides.com/products/sql-quickstart-guide | cumpărare | coadă | — |
| Practical SQL, Ediția 2 | Anthony DeBarros / No Starch | Carte | https://nostarch.com/practical-sql-2nd-edition | cumpărare | coadă | — |
| SQL in 10 Minutes a Day, Ediția 5 | Ben Forta / Sams | Carte | https://www.informit.com/store/sql-in-10-minutes-a-day-sams-teach-yourself-9780135182796 | cumpărare | coadă | — |
| Big Data: A Very Short Introduction | Dawn Holmes / OUP | Carte | https://global.oup.com/academic/product/big-data-9780198779575 | cumpărare | coadă | — |
| Seven Databases in Seven Weeks, Ediția 2 | Perkins, Wilson, Redmond / PragProg | Carte | https://pragprog.com/titles/pwrdata/seven-databases-in-seven-weeks-second-edition/ | cumpărare | coadă | — |
| An Introduction to Database Systems | C. J. Date | Carte | https://archive.org/details/date2004 | împrumut | coadă | — |
| Let's Build a Simple Database | cstack | Ghid | https://cstack.github.io/db_tutorial/ | gratuit | coadă | — |

## Database — NoSQL

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| MongoDB University — Basics | MongoDB | Curs | https://learn.mongodb.com/ | gratuit | coadă | — |
| MongoDB Manual | MongoDB | Documentație | https://www.mongodb.com/docs/manual/ | gratuit | coadă | — |
| MongoDB for SQL Pros | MongoDB University | Curs | https://learn.mongodb.com/ | gratuit | coadă | — |
| Redis University — Get Started with Redis | Redis | Curs | https://university.redis.io/ | gratuit | coadă | — |
| Redis documentation | Redis | Documentație | https://redis.io/docs/latest/ | gratuit | coadă | — |

---

## Data bridge — JSON

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| JSON — introducere oficială | json.org (Douglas Crockford) | Documentație | https://www.json.org/ | gratuit | coadă | — |
| Working with JSON | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON | gratuit | coadă | — |
| RFC 8259 — The JSON Data Interchange Format | IETF | Documentație | https://www.rfc-editor.org/rfc/rfc8259 | gratuit | coadă | — |
| JSON Schema | json-schema.org | Documentație | https://json-schema.org/ | gratuit | coadă | — |
| JSON:API Specification | json:api | Documentație | https://jsonapi.org/ | gratuit | coadă | — |

---

## Delivery — Git

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Pro Git (ed. a II-a) | Scott Chacon & Ben Straub | Carte | https://git-scm.com/book/en/v2 | gratuit | coadă | — |
| Git Pocket Guide | Richard E. Silverman (O'Reilly, 2013) | Carte | O'Reilly / Everand | abonament | coadă | — |
| Learn Git Branching | pcottle | Curs (interactiv) | https://learngitbranching.js.org/ | gratuit | coadă | — |
| Git and GitHub for Beginners — Crash Course | freeCodeCamp (Beau Carnes) | Video | https://www.youtube.com/watch?v=RGOj5yH7evk | gratuit | coadă | — |
| Learn Git — Full Course for Beginners | freeCodeCamp | Video | https://www.youtube.com/watch?v=zTjRZNkhiEU | gratuit | coadă | — |
| Git Basics | The Odin Project | Curs | https://www.theodinproject.com/paths/foundations/courses/foundations | gratuit | coadă | — |
| Atlassian Git Tutorials | Atlassian | Documentație | https://www.atlassian.com/git/tutorials | gratuit | coadă | — |

## Delivery — GitHub

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| GitHub Skills | GitHub | Curs | https://skills.github.com/ | gratuit | coadă | — |
| Introduction to GitHub | GitHub Skills | Curs | https://github.com/skills/introduction-to-github | gratuit | coadă | — |
| GitHub Pages | GitHub Skills | Curs | https://github.com/skills/github-pages | gratuit | coadă | — |
| Getting started with GitHub | GitHub Docs | Documentație | https://docs.github.com/en/get-started | gratuit | coadă | — |
| GitHub for Beginners (serie) | GitHub Blog | Documentație | https://github.blog/developer-skills/github/ | gratuit | coadă | — |
| Git and GitHub — Full Course | Boot.dev | Video | https://www.youtube.com/watch?v=rH3zE7VlIMs | gratuit | coadă | — |

## Delivery — deployment & CI/CD

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| GitHub Actions Quickstart | GitHub Docs | Documentație | https://docs.github.com/en/actions/quickstart | gratuit | coadă | — |
| Hello GitHub Actions | GitHub Skills | Curs | https://github.com/skills/hello-github-actions | gratuit | coadă | — |
| GitHub Actions Certification — Full Course | freeCodeCamp / Andrew Brown | Video | https://youtu.be/Tz7FsunBbfQ | gratuit | coadă | — |
| Complete GitHub Actions Course | DevOps Directive | Video | https://www.youtube.com/watch?v=Xwpi0ITkL3U | gratuit | coadă | — |
| Vercel Academy | Vercel | Curs | https://vercel.com/academy | gratuit | coadă | — |
| Deploying to Vercel | Vercel Docs | Documentație | https://vercel.com/docs/deployments | gratuit | coadă | — |
| Deploy a Website with Netlify | Scrimba / Coursera | Curs | https://www.coursera.org/learn/how-to-deploy-with-netlify | gratuit | coadă | — |
| GitLab CI/CD learning path | GitLab University | Curs | https://university.gitlab.com/pages/ci-cd-content | gratuit | coadă | — |

---

## Alegerea următorului curs

| Resursa | Autor / Canal | Felul | Unde | Acces | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| roadmap.sh | comunitate roadmap.sh | Documentație/Hărți | https://roadmap.sh/ | gratuit | coadă | — |
| MDN Curriculum | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/curriculum/ | gratuit | coadă | — |
| The Odin Project | The Odin Project | Curs | https://www.theodinproject.com/ | gratuit | coadă | — |
| Teach Yourself Programming in Ten Years | Peter Norvig | Eseu | https://norvig.com/21-days.html | gratuit | coadă | — |

---

*O singură condică, un rând pe sursă, adăugat în ziua în care apare. Ordine înainte de potop.*
