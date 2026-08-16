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
- Coloana `Gratis?` spune adevărul prețului: **D** = gratuit și legal online
  (site-ul autorului, documentații, cursuri gratuite); **N** = în spatele unui
  abonament (Scribd / Everand / O'Reilly). Scribd și Everand sunt un singur
  catalog — Everand este brațul de lectură al aceluiași serviciu — așa că
  cărțile găsite acolo sunt înregistrate cu reperul `N` și titlul lor; intră în
  coadă în momentul în care abonamentul bibliotecii e activ.
- Când o sursă este studiată efectiv, fișa ei de note se deschide în folderul
  capitolului (vezi `README.md` din această cameră) și se leagă în rând.
- Cărți, cursuri, video și documentații împart aceleași tabele; `Felul` spune care.
- Recolta terminată hrănește în final `shared/data/bibliography-links.json`,
  bibliografia structurată de dedesubt.

---

## Frontend — HTML

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Intro to HTML/CSS | Khan Academy | Curs | https://www.khanacademy.org/computing/computer-programming/html-css | D | în curs | `html/khan-academy-intro-html-css.md` |
| HTML & CSS: Design and Build Websites | Jon Duckett | Carte | Scribd / Everand | N | coadă | — |
| HTML5 for Web Designers | Jeremy Keith | Carte | https://html5forwebdesigners.com/ | D | coadă | — |
| Learn HTML — Structuring content | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content | D | coadă | — |
| Responsive Web Design Certification | freeCodeCamp | Curs | https://www.freecodecamp.org/learn/ | D | coadă | — |
| Foundations (HTML/CSS/JS) | The Odin Project | Curs | https://www.theodinproject.com/ | D | coadă | — |
| HTML Tutorial | W3Schools | Documentație | https://www.w3schools.com/html/ | D | coadă | — |
| HTML + CSS reference | DevDocs.io | Documentație | https://devdocs.io/ | D | coadă | — |

## Frontend — CSS

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Learn CSS | web.dev (Google) | Curs | https://web.dev/learn/css | D | coadă | — |
| CSS: The Definitive Guide | Eric A. Meyer & Estelle Weyl | Carte | Scribd / Everand / O'Reilly | N | coadă | — |
| CSS Secrets | Lea Verou | Carte | Scribd / Everand / O'Reilly | N | coadă | — |
| CSS in Depth (ed. a II-a) | Keith J. Grant | Carte | Scribd / Everand / Manning | N | coadă | — |
| Styling text — core web development | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics | D | coadă | — |
| CSS Flexbox & Grid (certificare) | freeCodeCamp | Curs | https://www.freecodecamp.org/learn/ | D | coadă | — |
| Kevin Powell — canal CSS | Kevin Powell | Video | https://www.youtube.com/@kevinpowell | D | coadă | — |
| CSS Diner (joc de selectori) | Luke Pacholski | Joc | https://cssdiner.com/ | D | coadă | — |
| Flexbox Froggy (joc) | Flexbox Froggy | Joc | https://flexboxfroggy.com/ | D | coadă | — |

## Frontend — JavaScript

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Eloquent JavaScript (ed. a IV-a, 2024) | Marijn Haverbeke | Carte | https://eloquentjavascript.net/ | D | coadă | — |
| You Don't Know JS Yet | Kyle Simpson | Carte | https://github.com/getify/You-Dont-Know-JS | D | coadă | — |
| The Modern JavaScript Tutorial | Ilya Kantor | Documentație/Curs | https://javascript.info/ | D | coadă | — |
| JavaScript reference + Guide | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Web/JavaScript | D | coadă | — |
| JavaScript: The Definitive Guide (ed. a VII-a) | David Flanagan | Carte | Scribd / Everand / O'Reilly | N | coadă | — |
| JavaScript Algorithms & Data Structures (certificare) | freeCodeCamp | Curs | https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/ | D | coadă | — |
| Learn JavaScript — Full Course for Beginners | freeCodeCamp (Beau Carnes) | Video | YouTube — freeCodeCamp.org | D | coadă | — |
| Full Stack JavaScript path | The Odin Project | Curs | https://www.theodinproject.com/paths/full-stack-javascript | D | coadă | — |

## Frontend — React

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Learn React — tutoriale oficiale | react.dev (Meta) | Documentație | https://react.dev/learn | D | coadă | — |
| The Road to React | Robin Wieruch | Carte | https://www.roadtoreact.com/ | D | coadă | — |
| Learn React (Bob Ziroll) | Scrimba | Curs | https://scrimba.com/learn/learnreact | D | coadă | — |
| React Course — curs complet (16 h) | freeCodeCamp (Bob Ziroll) | Video | YouTube — freeCodeCamp.org | D | coadă | — |
| Front End Libraries (React/Redux) cert | freeCodeCamp | Curs | https://www.freecodecamp.org/learn/ | D | coadă | — |
| Full Stack Open (React + Node) | University of Helsinki | Curs | https://fullstackopen.com/en/ | D | coadă | — |

## Frontend — Angular

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Angular documentation & Learn | Angular Team | Documentație | https://angular.dev/docs | D | coadă | — |
| Tour of Heroes — tutorial oficial | Angular Team | Curs | https://angular.dev/tutorial | D | coadă | — |
| Angular for Beginners | freeCodeCamp | Video | YouTube — freeCodeCamp.org | D | coadă | — |
| Angular — full course for beginners | Traversy Media | Video | YouTube | D | coadă | — |
| ng-book: The Complete Book on Angular | Murray, Coury, Lerner, Taborda | Carte | Scribd / Everand / Newline | N | coadă | — |

---

## UX — fundații

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Don't Make Me Think, Revisited | Steve Krug | Carte | Scribd / Everand | N | coadă | — |
| The Design of Everyday Things | Don Norman | Carte | Scribd / Everand | N | coadă | — |
| 10 Usability Heuristics | Nielsen Norman Group | Documentație | https://www.nngroup.com/articles/ten-usability-heuristics/ | D | coadă | — |
| Foundations of UX Design (Google UX Cert) | Coursera | Curs | https://www.coursera.org/professional-certificates/google-ux-design | D | coadă | — |
| Laws of UX | Jon Yablonski | Documentație | https://lawsofux.com/ | D | coadă | — |
| UX Basics — carte electronică gratuită | Interaction Design Foundation | Carte | https://www.interaction-design.org/literature | D | coadă | — |

## UX — accesibilitate

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Learn Accessibility | web.dev (Google) | Curs | https://web.dev/learn/accessibility | D | coadă | — |
| Accessibility module | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility | D | coadă | — |
| Introduction to Web Accessibility | W3C WAI / edX | Curs | https://www.edx.org/course/web-accessibility-introduction | D | coadă | — |
| WebAIM — articole + instrumentul WAVE | WebAIM (Utah State) | Documentație | https://webaim.org/ | D | coadă | — |
| The A11y Project — liste de control | Comunitate a11y | Documentație | https://www.a11yproject.com/ | D | coadă | — |
| A11ycasts | Rob Dodson (Chrome Developers) | Video | YouTube | D | coadă | — |
| Inclusive Components | Heydon Pickering | Carte (blog) | https://inclusive-components.design/ | D | coadă | — |
| WCAG 2.2 — Quick Reference | W3C WAI | Documentație | https://www.w3.org/WAI/WCAG22/quickref/ | D | coadă | — |

---

## Backend — nucleu

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Node.js documentation + Learn | OpenJS Foundation | Documentație | https://nodejs.org/en/learn | D | coadă | — |
| The Node.js Handbook | Flavio Copes | Carte | https://flaviocopes.com/ebooks/ | D | coadă | — |
| How to Code in Node.js | David Landup / DigitalOcean | Carte | https://www.digitalocean.com/community/tutorials | D | coadă | — |
| Full Stack Open — Partea 3 & 4 (Node/Express/REST) | University of Helsinki | Curs | https://fullstackopen.com/ | D | coadă | — |
| Back End Development & APIs cert | freeCodeCamp | Curs | https://www.freecodecamp.org/learn/back-end-development-and-apis/ | D | coadă | — |
| Learn Node.js & Express — curs de 8 h | John Smilga / freeCodeCamp | Video | YouTube — freeCodeCamp.org | D | coadă | — |

## Backend — limbaj

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Eloquent JavaScript (ed. a IV-a) | Marijn Haverbeke | Carte | https://eloquentjavascript.net/ | D | coadă | — |
| The Modern JavaScript Tutorial | Ilya Kantor | Documentație/Curs | https://javascript.info/ | D | coadă | — |
| JavaScript Guide | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide | D | coadă | — |
| You Don't Know JS Yet | Kyle Simpson | Carte | https://github.com/getify/You-Dont-Know-JS | D | coadă | — |
| CS50 — Introduction to Computer Science | Harvard / edX | Curs | https://cs50.harvard.edu/ | D | coadă | — |

## Backend — arhitectură

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| The Twelve-Factor App | Adam Wiggins | Ghid | https://12factor.net/ | D | coadă | — |
| System Design Primer | Donne Martin | Documentație | https://github.com/donnemartin/system-design-primer | D | coadă | — |
| Backend Developer Roadmap | roadmap.sh | Documentație | https://roadmap.sh/backend | D | coadă | — |
| Scrieri despre arhitectura software | Martin Fowler | Documentație | https://martinfowler.com/ | D | coadă | — |
| Designing Data-Intensive Applications | Martin Kleppmann | Carte | Scribd / Everand / O'Reilly | N | coadă | — |
| Fundamentals of Software Architecture | Mark Richards & Neal Ford | Carte | Scribd / Everand / O'Reilly | N | coadă | — |

## Backend — API (REST / HTTP)

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| HTTP documentation | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Web/HTTP | D | coadă | — |
| OpenAPI Specification | OpenAPI Initiative | Documentație | https://spec.openapis.org/ | D | coadă | — |
| Microsoft REST API Guidelines | Microsoft | Documentație | https://github.com/microsoft/api-guidelines | D | coadă | — |
| RESTful API Guidelines | Zalando | Documentație | https://opensource.zalando.com/restful-api-guidelines | D | coadă | — |
| REST CookBook | comunitate REST CookBook | Documentație | https://restcookbook.com/ | D | coadă | — |
| Designing RESTful APIs | Udacity | Curs | https://www.udacity.com/course/designing-restful-apis--ud388 | D | coadă | — |

## Backend — securitate & autentificare

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| OWASP Top 10 | OWASP Foundation | Documentație | https://owasp.org/www-project-top-ten/ | D | coadă | — |
| OWASP Cheat Sheet Series | OWASP | Documentație | https://cheatsheetseries.owasp.org/ | D | coadă | — |
| PortSwigger Web Security Academy | PortSwigger | Curs + laboratoare | https://portswigger.net/web-security | D | coadă | — |
| OWASP Juice Shop (aplicație vulnerabilă de exersat) | OWASP | Curs/aplicație | https://owasp.org/www-project-juice-shop/ | D | coadă | — |
| OWASP Academy — curs web AppSec | OWASP Foundation | Curs | https://owasp-academy.teachable.com/ | D | coadă | — |

## Backend — middleware

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Express — Using Middleware | Express | Documentație | https://expressjs.com/en/guide/using-middleware.html | D | coadă | — |
| Express — Writing Middleware | Express | Documentație | https://expressjs.com/en/guide/writing-middleware.html | D | coadă | — |
| Tutorial Express/Node | MDN Web Docs | Curs | https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs | D | coadă | — |
| Express middleware — ghid complet | LogRocket | Blog | https://blog.logrocket.com/express-middleware-a-complete-guide/ | D | coadă | — |

## Backend — performanță

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| High Performance Browser Networking | Ilya Grigorik | Carte | https://hpbn.co/ | D | coadă | — |
| Learn Performance | web.dev (Google) | Curs | https://web.dev/learn/performance | D | coadă | — |
| Web Performance | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Web/Performance | D | coadă | — |
| The Book of Speed | Stoyan Stefanov | Carte | https://www.bookofspeed.com/ | D | coadă | — |
| Designing for Performance | Lara Hogan | Carte | https://designingforperformance.com/ | D | coadă | — |

## Backend — testare

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| JavaScript & Node.js Testing Best Practices | Yoni Goldberg | Carte | https://github.com/goldbergyoni/javascript-testing-best-practices | D | coadă | — |
| Jest documentation | Jest / OpenJS | Documentație | https://jestjs.io/ | D | coadă | — |
| Vitest documentation | echipa Vitest | Documentație | https://vitest.dev/ | D | coadă | — |
| Learn Testing | web.dev (Google) | Curs | https://web.dev/learn/testing | D | coadă | — |
| The Practical Test Pyramid | Martin Fowler | Documentație | https://martinfowler.com/articles/practical-test-pyramid.html | D | coadă | — |

## Backend — documentație

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Write the Docs — comunitate | Write the Docs | Comunitate | https://www.writethedocs.org/ | D | coadă | — |
| Diataxis — un cadru pentru documentație | Daniele Procida | Ghid | https://diataxis.fr/ | D | coadă | — |
| Documenting APIs — I'd Rather Be Writing | Tom Johnson | Curs/blog | https://idratherbewriting.com/ | D | coadă | — |

---

## Database — SQL (relațional)

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| PostgreSQL documentation | PostgreSQL Global Dev Group | Documentație | https://www.postgresql.org/docs/ | D | coadă | — |
| MySQL Reference Manual | Oracle | Documentație | https://dev.mysql.com/doc/ | D | coadă | — |
| CS50 SQL — Introduction to Databases with SQL | Harvard | Curs | https://cs50.harvard.edu/sql/ | D | coadă | — |
| Intro to SQL | Khan Academy | Curs | https://www.khanacademy.org/computing/computer-programming/sql | D | coadă | — |
| SQLZoo | SQLZoo | Curs | https://sqlzoo.net/ | D | coadă | — |
| PGExercises | pgexercises.com | Curs | https://pgexercises.com/ | D | coadă | — |
| Relational Database Certification | freeCodeCamp | Curs | https://www.freecodecamp.org/learn/relational-database/ | D | coadă | — |
| 30 Days of SQL — from Basic to Advanced | GeeksforGeeks | Curs | https://www.geeksforgeeks.org/sql/30-days-of-sql-from-basic-to-advanced-level/ | D | coadă | — |
| SQL Full Course for Beginners — 30 Hours | Data with Baraa | Curs | https://www.youtube.com/playlist?list=PLNcg_FV9n7qZY_2eAtUzEUulNjTJREhQe | D | coadă | — |
| SQL QuickStart Guide | Walter Shields / ClydeBank Media | Carte | https://www.quickstartguides.com/products/sql-quickstart-guide | N | coadă | — |
| Practical SQL, Ediția 2 | Anthony DeBarros / No Starch | Carte | https://nostarch.com/practical-sql-2nd-edition | N | coadă | — |
| SQL in 10 Minutes a Day, Ediția 5 | Ben Forta / Sams | Carte | https://www.informit.com/store/sql-in-10-minutes-a-day-sams-teach-yourself-9780135182796 | N | coadă | — |
| Big Data: A Very Short Introduction | Dawn Holmes / OUP | Carte | https://global.oup.com/academic/product/big-data-9780198779575 | N | coadă | — |
| Seven Databases in Seven Weeks, Ediția 2 | Perkins, Wilson, Redmond / PragProg | Carte | https://pragprog.com/titles/pwrdata/seven-databases-in-seven-weeks-second-edition/ | N | coadă | — |
| An Introduction to Database Systems | C. J. Date | Carte | https://archive.org/details/date2004 | N (împrumut gratuit) | coadă | — |
| Let's Build a Simple Database | cstack | Ghid | https://cstack.github.io/db_tutorial/ | D | coadă | — |

## Database — NoSQL

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| MongoDB University — Basics | MongoDB | Curs | https://learn.mongodb.com/ | D | coadă | — |
| MongoDB Manual | MongoDB | Documentație | https://www.mongodb.com/docs/manual/ | D | coadă | — |
| MongoDB for SQL Pros | MongoDB University | Curs | https://learn.mongodb.com/ | D | coadă | — |
| Redis University — Get Started with Redis | Redis | Curs | https://university.redis.io/ | D | coadă | — |
| Redis documentation | Redis | Documentație | https://redis.io/docs/latest/ | D | coadă | — |

---

## Data bridge — JSON

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| JSON — introducere oficială | json.org (Douglas Crockford) | Documentație | https://www.json.org/ | D | coadă | — |
| Working with JSON | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON | D | coadă | — |
| RFC 8259 — The JSON Data Interchange Format | IETF | Documentație | https://www.rfc-editor.org/rfc/rfc8259 | D | coadă | — |
| JSON Schema | json-schema.org | Documentație | https://json-schema.org/ | D | coadă | — |
| JSON:API Specification | json:api | Documentație | https://jsonapi.org/ | D | coadă | — |

---

## Delivery — Git

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| Pro Git (ed. a II-a) | Scott Chacon & Ben Straub | Carte | https://git-scm.com/book/en/v2 | D | coadă | — |
| Git Pocket Guide | Richard E. Silverman (O'Reilly, 2013) | Carte | O'Reilly / Everand | N | coadă | — |
| Learn Git Branching | pcottle | Curs (interactiv) | https://learngitbranching.js.org/ | D | coadă | — |
| Git and GitHub for Beginners — Crash Course | freeCodeCamp (Beau Carnes) | Video | https://www.youtube.com/watch?v=RGOj5yH7evk | D | coadă | — |
| Learn Git — Full Course for Beginners | freeCodeCamp | Video | https://www.youtube.com/watch?v=zTjRZNkhiEU | D | coadă | — |
| Git Basics | The Odin Project | Curs | https://www.theodinproject.com/paths/foundations/courses/foundations | D | coadă | — |
| Atlassian Git Tutorials | Atlassian | Documentație | https://www.atlassian.com/git/tutorials | D | coadă | — |

## Delivery — GitHub

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| GitHub Skills | GitHub | Curs | https://skills.github.com/ | D | coadă | — |
| Introduction to GitHub | GitHub Skills | Curs | https://github.com/skills/introduction-to-github | D | coadă | — |
| GitHub Pages | GitHub Skills | Curs | https://github.com/skills/github-pages | D | coadă | — |
| Getting started with GitHub | GitHub Docs | Documentație | https://docs.github.com/en/get-started | D | coadă | — |
| GitHub for Beginners (serie) | GitHub Blog | Documentație | https://github.blog/developer-skills/github/ | D | coadă | — |
| Git and GitHub — Full Course | Boot.dev | Video | https://www.youtube.com/watch?v=rH3zE7VlIMs | D | coadă | — |

## Delivery — deployment & CI/CD

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| GitHub Actions Quickstart | GitHub Docs | Documentație | https://docs.github.com/en/actions/quickstart | D | coadă | — |
| Hello GitHub Actions | GitHub Skills | Curs | https://github.com/skills/hello-github-actions | D | coadă | — |
| GitHub Actions Certification — Full Course | freeCodeCamp / Andrew Brown | Video | https://youtu.be/Tz7FsunBbfQ | D | coadă | — |
| Complete GitHub Actions Course | DevOps Directive | Video | https://www.youtube.com/watch?v=Xwpi0ITkL3U | D | coadă | — |
| Vercel Academy | Vercel | Curs | https://vercel.com/academy | D | coadă | — |
| Deploying to Vercel | Vercel Docs | Documentație | https://vercel.com/docs/deployments | D | coadă | — |
| Deploy a Website with Netlify | Scrimba / Coursera | Curs | https://www.coursera.org/learn/how-to-deploy-with-netlify | D | coadă | — |
| GitLab CI/CD learning path | GitLab University | Curs | https://university.gitlab.com/pages/ci-cd-content | D | coadă | — |

---

## Alegerea următorului curs

| Resursa | Autor / Canal | Felul | Unde | Gratis? | Stare | Fișă de note |
|---|---|---|---|---|---|---|
| roadmap.sh | comunitate roadmap.sh | Documentație/Hărți | https://roadmap.sh/ | D | coadă | — |
| MDN Curriculum | MDN Web Docs | Documentație | https://developer.mozilla.org/en-US/curriculum/ | D | coadă | — |
| The Odin Project | The Odin Project | Curs | https://www.theodinproject.com/ | D | coadă | — |
| Teach Yourself Programming in Ten Years | Peter Norvig | Eseu | https://norvig.com/21-days.html | D | coadă | — |

---

*O singură condică, un rând pe sursă, adăugat în ziua în care apare. Ordine înainte de potop.*
