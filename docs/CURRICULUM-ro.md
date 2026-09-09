# Curriculum — D::0dy55ey

> **Planul de zbor, nu zborul însuși.**
> Acest document ordonează *fazele de lectură* ale sectoarelor navei. El **nu**
> compilează lecții pe teme — acea sinteză aparține fișelor de notițe, după ce
> vor fi scrise, conform regulii permanente din `docs/notes/README.md`:
>
> *„Abia după faza de citire/vizionare a unui capitol compilăm toate fișele de
> sursă într-o structură personală de curriculum. Notițele dictează structura;
> paginile de Sector se adaptează la ea, niciodată invers.”*
>
> **Stare:** aprobat 2026-09-10. Geamănul englez: `docs/CURRICULUM.md`.
> **Redactat:** 2026-09-10.

---

## 0. Comanda de drum

**Rezultat urmărit:** angajabilă ca **dezvoltator frontend junior** (sau
acceptată într-un internship) cât se poate de repede, în mod onest, și
**Milestone 0 al backendului Strigoi construit până în primăvara lui 2027**.

**Buget:** 6 ore/zi × 5 zile = **30 de ore/săptămână**, ~130 de ore/lună.

**Definiția lui „gata” pentru obiectivul principal** — toate patru, verificabile:

1. Trei artefacte de portofoliu deployate și accesibile public, dintre care cel
   puțin unul o aplicație React + TypeScript care aduce date dintr-un API real.
2. Fiecare artefact are un README pe care un străin îl poate urma, și CI verde.
3. Candidata poate explica, cu voce tare și fără ajutor, cum funcționează event
   loop-ul din JavaScript, `fetch`/promisiunile și fluxul de stare din React.
4. WCAG 2.2 AA verificat pe fiecare artefact, cu cifre măsurate.

Lipsa unei diplome nu e o problemă — sursele din 2026 citate sunt de acord că
majoritatea dezvoltatorilor frontend care lucrează sunt autodidacți sau formați
în bootcamp-uri, și că un portofoliu care demonstrează arhitectură reală de
componente cântărește mai mult decât orice certificat.

---

## 1. Cât durează — cifra onestă

Estimări independente din 2026 pentru un învățăcel autodidact:

| Sursă | Ore săptămânale | Timp până la angajabilitate |
|---|---|---|
| Scrimba (ghid 2026) | 8 h/săptămână | 8–12 luni |
| InApps (2026) | 20–30 h/săptămână | 6–12 luni; proiecte simple la 3–4 luni |
| appwarstechnologies (2026) | — | portofoliu funcțional în 4–6 luni |

La **30 h/săptămână ești deasupra capătului superior al intervalului
studiat.** Capătul rapid (6 luni) este așadar cu adevărat la îndemână — dar
numai dacă orele sunt *dirijate*. Modul de eșec la acest volum nu este lenea, ci
lățimea: 147 de surse puse la coadă înseamnă destul material cât să studiezi
productiv trei ani și să nu devii niciodată angajabilă. Acest document există
tocmai ca să prevină asta.

**Date planificate, începând cu 2026-09-10:**

| Etapă | Săptămâna | Dată aproximativă |
|---|---|---|
| Sectorul HTML + CSS închis | 6 | sfârșit de oct. 2026 |
| Sectorul JavaScript închis — **poarta adevărată** | 16 | început de ian. 2027 |
| React + TypeScript, piesa de portofoliu #1 live | 24 | început de mar. 2027 |
| **Începe trimiterea de candidaturi** | 24 | **început de mar. 2027** |
| SQL + backend Strigoi M0 live | 30 | **mijlocul lui apr. 2027 — primăvara, cum s-a cerut** |
| Portofoliu complet, 3 artefacte | 32 | sfârșit de apr. 2027 |

⚠️ **Candidaturile încep în săptămâna 24, nu la final.** Căutarea în sine ia 2–4
luni pe piața actuală. Ținerea ei *în paralel* cu ultimele sectoare este
diferența dintre o ofertă de primăvară și una de toamnă. A merge la interviuri
în timp ce încă înveți nu e o slăbiciune — e o calibrare pe care nu o poți
obține altfel.

---

## 2. Ordinea sectoarelor, și de ce

Cele șase punți **nu** se studiază în ordinea în care apar în registru. Două
principii fixează secvența:

1. **Angajabilitatea întâi.** Ștacheta juniorului frontend este HTML/CSS →
   JavaScript → React + TypeScript → Git. Tot restul, oricât de interesant, vine
   după.
2. **Zero mize de securitate înainte de autentificare** — decizia de secvențiere
   deja luată în @session:pm/20260828_132309_427b57: un endpoint de API read-only
   te învață HTTP, SQL și deployment acolo unde nimeni nu are de suferit de pe
   urma unui bug într-o listă de produse. Autentificarea rămâne apoi *singurul*
   lucru nou atunci când vine.

| # | Faza | Săptămâni | Ore | Sector |
|---|---|---|---|---|
| 1 | Fundațiile | 1–6 | 180 | Frontend — HTML, CSS |
| 2 | Limbajul | 7–16 | 300 | Frontend — JavaScript (+ Data Bridge integrat) |
| 3 | Framework-ul | 17–24 | 240 | Frontend — React **+ TypeScript** |
| 4 | Cealaltă jumătate | 25–30 | 180 | Bază de date — SQL, apoi Backend M0 |
| 5 | Continuu | 1–30 | ~60 | Livrare — Git/GitHub, din săptămâna 1 |
| 6 | Țesut în restul | 1–30 | ~40 | UX Lab — niciodată un bloc, mereu o lentilă |

**UX și Livrarea nu sunt faze, în mod deliberat.** Git se folosește din prima zi
pe commit-uri reale, așa că se învață prin uz, nu prin curs.
UX-ul/accesibilitatea se aplică fiecărui artefact pe măsură ce e construit — o
trecere WCAG pe o pagină făcută de tine te învață mai mult decât un curs WCAG pe
care l-ai privit.

### Amânate — explicit, cu motive

Nu anulate. Parcate până după primul loc de muncă, și tăiate aici pentru ca
celelalte ore să fie reale:

| Amânat | Surse | De ce |
|---|---|---|
| **Angular** | 5 | Învățarea a două framework-uri înainte de un singur loc de muncă înjumătățește adâncimea în ambele. React are piața de junior mai mare. Angular e o conversie de 3 săptămâni mai târziu, nu o precondiție. |
| **NoSQL / Mongo / Redis** | 5 | Strigoi este relațional. Învață un singur model de date, dar ca lumea. |
| **Arhitectură de backend** | 6 | *Designing Data-Intensive Applications* și *System Design Primer* sunt de nivel senior. Citite acum costă săptămâni și întorc vocabular, nu pricepere. |
| **Performanță de backend** | 5 | Optimizarea unor sisteme pe care încă nu le-ai construit. |
| **C. J. Date, *Introduction to Database Systems*** | 1 | 1000+ de pagini de teorie relațională formală. Este o carte excelentă și cartea greșită pentru luna 7. Fișa de notițe îi schelărește deja cuprinsul complet — asta e o capcană care merită numită. |

Adică **~22 din 147 de surse amânate**, ceea ce este exact ideea: registrul este
un *orizont*, nu o coadă de golit.

---

## 3. Portante vs. de consultat

Cea mai utilă distincție din tot documentul. Din 147 de surse:

- **Coloană vertebrală (spine)** — citită/lucrată de la un cap la altul, primește
  fișă de notițe, condiționează faza.
- **Exercițiu (drill)** — practică, făcută până la fluență, fără fișă de notițe.
- **Referință (reference)** — consultată la nevoie. **Niciodată citită de la un
  capăt la altul.**

Aproximativ **18 surse de coloană vertebrală** duc tot curriculumul. Celelalte
~129 sunt exerciții și referință. Tratarea unei referințe drept coloană
vertebrală este principala cale prin care planul acesta eșuează.

### Faza 1 — HTML & CSS (săptămânile 1–6)

| Rol | Sursă |
|---|---|
| Coloană vertebrală | **Khan Academy — Intro to HTML/CSS** (deja `in progress`; termin-o, ea dă ritmul) |
| Coloană vertebrală | **MDN — Structuring content** + **Styling basics** (adevărul standardelor) |
| Coloană vertebrală | **web.dev — Learn CSS** (Google; modelul modern de layout) |
| Coloană vertebrală | **Kevin Powell** (video; nimeni nu predă layout-ul CSS mai bine) |
| Exercițiu | Flexbox Froggy, CSS Diner, certificarea freeCodeCamp Responsive Web Design |
| Referință | Meyer & Weyl *CSS: The Definitive Guide*, W3Schools, DevDocs |
| ⚠️ Semnalare | **Jeremy Keith, *HTML5 for Web Designers*** — 2010. Frumoasă istoric, depășită în prezent. De citit pentru plăcere, nu pentru ștachetă. |
| ⚠️ Semnalare | **Duckett, *HTML & CSS*** — superbă, dar mai puțin adâncă decât MDN. Redundantă față de coloana vertebrală. |

**Poarta de ieșire:** construiește o pagină statică, responsive, semantică,
pornind de la un design pe care nu l-ai făcut tu — fără framework, fără
copy-paste — care trece WCAG 2.2 AA cu cifre de contrast măsurate. Dacă e
construită prin încercare și eroare, nu prin cunoașterea a ceea ce fac
proprietățile, poarta nu e trecută.

### Faza 2 — JavaScript (săptămânile 7–16) — **poarta adevărată**

Zece săptămâni și 300 de ore nu înseamnă generozitate, ci greutatea corectă.
Fiecare sector din aval se sprijină aici. Aici eșuează discret majoritatea
drumurilor autodidacte, grăbindu-se spre React.

| Rol | Sursă |
|---|---|
| Coloană vertebrală | **javascript.info** — *The Modern JavaScript Tutorial* (cel mai bun text unic) |
| Coloană vertebrală | **Eloquent JavaScript, 4th ed.** — a doua trecere, pentru adâncime |
| Coloană vertebrală | **MDN — JavaScript Guide** |
| Exercițiu | freeCodeCamp — certificarea JavaScript Algorithms & Data Structures |
| Referință | **You Don't Know JS Yet** — scufundări adânci, doar pe teme punctuale. Nu de citit din scoarță-n scoarță. |
| Referință | Flanagan, *The Definitive Guide* |
| Integrat | **Sectorul Data Bridge** — JSON, `fetch`, RFC 8259, JSON Schema. ~1 săptămână. JSON nu e o materie, e lucrul pe care îl întoarce `fetch`. |

**Poarta de ieșire:** o aplicație care aduce date live dintr-un API public,
tratează starea de încărcare și starea de eroare, randează în DOM și persistă
ceva — cu zero framework. Plus: explică event loop-ul cu voce tare, fără ajutor.

### Faza 3 — React + TypeScript (săptămânile 17–24)

| Rol | Sursă |
|---|---|
| Coloană vertebrală | **react.dev — Learn** (oficial; drumul modern, hooks-first) |
| Coloană vertebrală | **Full Stack Open, parts 1–2** (Universitatea din Helsinki; riguros, gratuit) |
| Coloană vertebrală | **TypeScript Handbook** + **Beginner's TypeScript** (Total TypeScript) — ambele gratuite, adăugate în registru la 2026-09-10 |
| Exercițiu | Scrimba — Learn React (Bob Ziroll) |
| Referință | Wieruch, *The Road to React* |

**Poarta de ieșire:** piesa de portofoliu #1 — o aplicație React + TypeScript
deployată, cu descompunere reală în componente, deployată prin CI, cu README.
**Candidaturile la locuri de muncă încep aici.**

### Faza 4 — SQL, apoi Backend M0 (săptămânile 25–30)

| Rol | Sursă |
|---|---|
| Coloană vertebrală | **CS50 SQL** (Harvard) — cel mai solid curs gratuit de SQL disponibil |
| Coloană vertebrală | **Hernandez, *Database Design for Mere Mortals*** — design, nu sintaxă. Fișa de notițe e deja schelărită. |
| Coloană vertebrală | **Full Stack Open, parts 3–4** (Node/Express/REST) |
| Exercițiu | PGExercises, SQLZoo, certificarea freeCodeCamp Relational Database |
| Coloană vertebrală (scurtă) | **The Twelve-Factor App** — o după-amiază, util pentru totdeauna |
| Referință | Documentația PostgreSQL, MDN HTTP, documentația Express |
| Referință | GeeksforGeeks ER model (fișa de notițe există — de păstrat ca referință) |

**Poarta de ieșire: Strigoi Milestone 0 live** — un singur endpoint de API
read-only pentru produse, sprijinit pe o bază de date reală, deployat, cu
frontendul Strigoi existent citind din el în loc de date hardcodate. Fără
conturi. Fără plăți. Fără autentificare. **Aceasta este izbânda de primăvară.**

### Continuu — Livrare (săptămânile 1–30, ~60 h)

De încărcat în față, în săptămâna 1: **Pro Git ch. 1–3**, **Learn Git
Branching**, **GitHub Skills — Introduction to GitHub**. Apoi GitHub Actions în
săptămâna 6, când în sfârșit există ceva de deployat. Tot restul de pe această
punte este referință.

### Țesut în restul — UX Lab (~40 h, niciodată un bloc)

**NN/g 10 Usability Heuristics** și **Laws of UX** sunt câte o seară fiecare și
schimbă felul în care privești orice ecran de atunci înainte. **web.dev Learn
Accessibility** + **WCAG 2.2 Quick Reference** se aplică pe fiecare artefact.
*Don't Make Me Think* al lui Krug e o lectură de două seri, care merită.
Certificatul Google UX are **~6 luni** — acela e un program de reconversie
profesională pentru un designer UX, nu pentru un inginer frontend. **Nu intră în
planul acesta.**

### A șaptea zi — Puntea Umanioarelor

Adăugată la cererea căpitanului; formația ei este **filosofie și filologie**.
Această punte este **în afara drumului critic** și nu condiționează nimic.
Există fiindcă un curriculum pe care un filolog nu-l poate suferi este unul care
se abandonează în luna a treia — și fiindcă mai multe dintre acestea sunt cele
mai bune explicații ale subiectului lor în orice registru cu putință.

De citit în a șaptea zi, când cele cinci zile de studiu și odihna s-au sfârșit.

**Dacă se citește un singur lucru de pe această punte, să se citească Naur.**
*Programming as Theory Building* (1985) înseamnă douăsprezece pagini care susțin
că un program nu este un text, ci o **teorie** ținută în mințile celor care l-au
construit — de aceea documentația se degradează și de aceea o bază de cod a
cărei echipă a plecat este practic moartă, deși fiecare rând supraviețuiește.
Este filosofia minții aplicată software-ului, și va lovi mai adânc într-un
filosof decât în majoritatea inginerilor din branșă.

Apoi, în ordinea aproximativă a utilității pentru acest curriculum:

| Când | De citit |
|---|---|
| Faza 1, pentru mașinăria de dedesubt | **Petzold, *Code*** — construiește un calculator dintr-o lanternă și un fir, un capitol răbdător pe rând. Cea mai bună punte dintre umanioare și hardware care există. |
| Fazele 1–2, pentru meșteșug | **Knuth, *Literate Programming*** (1984) — strămoșul direct al doctrinei `@tag` a acestui proiect. A-l citi înseamnă a citi originea propriei tale metode. |
| Oricând, pentru filiație | **Lovelace's Notes** (1843) — adnotările ei sunt mai lungi decât textul pe care îl traducea. Prima programatoare a fost și prima comentatoare: o poveste de origine pentru un filolog. |
| Oricând, pentru plăcere | **Kidder, *The Soul of a New Machine*** · **Gleick, *The Information*** · **Ullman, *Close to the Machine*** |
| Când te descurajezi | **Dijkstra, *The Humble Programmer*** — aforistic, superb de arțăgos, și despre limitele minții omenești, nu ale mașinii. |
| Pentru recursivitate | **Hofstadter, *Gödel, Escher, Bach*** — chiar metafora centrală a acestui proiect, în 800 de pagini. Un tovarăș de ani, nu o sarcină. |

Raftul complet — 28 de intrări în *Origins*, *The craft as a human activity*,
*Narrative histories*, *Bookish but load-bearing* și *Magazines* — în
`docs/notes/resource-library.md`. Aproape toate gratuite sau împrumutabile de pe
Archive.org.

---

## 4. Unde se prind exercițiile

Conform arhitecturii confirmate în @session:pm/20260828_132309_427b57 —
digital-odyssey este cadrul; celelalte repouri sunt practica lui.

| Faza | Strigoi | Texxturalia | digital-odyssey |
|---|---|---|---|
| 1 — HTML/CSS | frontendul e deja construit; recitește-l ca pe propriul tău exemplu lucrat | la fel | Paginile de Sector încep să poarte conținut real (azi sunt lorem ipsum) |
| 2 — JavaScript | mecanismele din `script.js` devin lizibile, apoi editabile | se aplică standardul de comentare (ce+cum) | `bibliography.js` este propriul tău cod — recitește-l în luna 3 |
| 3 — React/TS | *(înghețat — nu rescrie Strigoi în React)* | — | piesa de portofoliu #1 este **nouă**, nu o rescriere |
| 4 — SQL/Backend | **Milestone 0 aterizează aici** — ținta de primăvară | — | — |

⚠️ **O regulă care merită legată de catarg:** nu rescrie Strigoi sau Texxturalia
în React atunci când sosește Faza 3. Pornirea va fi puternică. Rescrierea unui
lucru terminat nu produce nicio dovadă nouă de portofoliu și arde săptămânile de
care are nevoie piesa de portofoliu #1. Frontendurile sunt înghețate într-un
punct înalt. Construiește ceva nou în loc.

---

## 5. Goluri în biblioteca de resurse — **închise 2026-09-10**

Verificate față de toate cele 147 de intrări originale. Acestea **lipseau** și
sunt pe ștacheta de junior frontend din 2026. Toate au fost adăugate între timp
în `docs/notes/resource-library.md` și în
`shared/data/bibliography-links.json` (acum **189 de surse**, de la 147).

| Gol | Era în registru | Acum |
|---|---|---|
| **TypeScript** | **0** | 4 surse — Handbook, Total TypeScript, Deep Dive, Type Challenges. Toate gratuite. |
| **Unelte — npm, Vite** | 0 | 2 — MDN package management, ghidul Vite |
| **Testare frontend** | 0 | 2 — Testing Library, Playwright |
| **DevTools / debugging** | ~1 | 2 — MDN intro, documentația Chrome DevTools |
| **Pregătire pentru interviu** | 0 | 4 — puntea nouă `interview` |
| **Lecturi umaniste** | 0 | 28 — puntea nouă `humanities`, în afara drumului critic |

De asemenea adăugată: o secțiune **Subscriptions & platforms** care consemnează
pentru ce merită plătit. Constatarea ei — *fiecare sursă de coloană vertebrală
din acest plan este gratuită sau deja acoperită de abonamentul Everand
existent.* Niciun abonament nou nu este necesar pentru a deveni angajabilă pe
acest curriculum.

⚠️ **O consecință rămâne deschisă.** Punțile `interview` (4) și `humanities`
(28) sunt *categorii* noi. `en/bibliography.html` are elemente
`<tbody data-shelf>` doar pentru cele șapte originale, așa că **32 de surse nu
se randează în prezent nicăieri** — ele există în registru și în JSON, dar nu au
niciun raft pe pagină. Sunt necesare două blocuri `<section>` noi, atât în
`en/`, cât și în `ro/bibliography.html`. Nefăcut fără să fi fost cerut, fiindcă
schimbă conținutul sitului.


---

## 6. Presupuneri — consemnate, nu ascunse

Semnalate permanent, inclusiv cele care se dovedesc a fi în regulă.

1. **[portant]** React în locul lui Angular, pentru angajabilitate. Dacă piața
   clujeană/românească pe care o vizezi este neobișnuit de încărcată de Angular,
   faza 3 și lista de amânări se inversează. **Verifică față de anunțuri reale
   de angajare locale înainte de săptămâna 17.**
2. **[portant]** 30 h/săptămână sunt sustenabile ~7 luni fără epuizare. Dacă se
   dovedesc a fi 20, fiecare dată se deplasează cu ~50% și lista de amânări
   crește. Replanifică, nu comprima.
3. Primăvara = martie–mai 2027. Strigoi M0 este planificat pentru mijlocul lui
   aprilie, înăuntrul ei.
4. Estimările de angajabilitate provin din îndrumări generale din 2026, nu din
   date despre piața românească în mod specific. Condițiile locale pot diferi.
5. TypeScript este tratat ca obligatoriu, pe temeiul descrierilor de rol din
   2026. Dacă anunțurile locale nu sunt de acord, coboară în Faza 5.
6. Cele 23 de pagini de Sector `*-log.html` existente sunt **conținut de
   umplutură confirmat** — cuvintele căpitanului însăși, 2026-09-10: *„sunt doar
   mostre/demonstrații, nu conținutul și programul propriu-zise. Consideră-le
   lorem ipsum.”* Rostul lor este să stabilească *structura* drumului de
   învățare, în felul jurnalului unui căpitan de vas. Articolele reale se scriu
   abia după ce există fișele de notițe pentru o sursă, moment în care echipajul
   ghidează umplerea capitolelor, zilelor și sectoarelor. **Niciun plan nu are
   voie să trateze conținutul lor actual drept dovadă de învățare.**
7. **[doctrină consemnată]** Când TypeScript sosește în Faza 3, tipurile *nu*
   înlocuiesc comentariile `@tag` — se scriu amândouă. *„Tipul pentru mașină,
   tag-ul pentru învățăcel.”* Un tag explică *de ce* și poate aluneca tăcut
   în afara sincronului; un tip garantează *ce* și nu poate. Ele descriu lucruri
   diferite.

---

## 7. Condiții de oprire

Replanifică, nu forța înainte, dacă:

- Faza JavaScript (2) depășește săptămâna 18. Ea este poarta; depășirea ei
  înseamnă că fundația nu e acolo, iar React nu va repara asta.
- Două faze consecutive își depășesc estimarea de ore de 2×.
- Niciun artefact de portofoliu nu este deployat până în săptămâna 24.
- Orele de studiu scad sub 15/săptămână trei săptămâni la rând — planul are
  nevoie de reconstrucție la cifra reală, nu de vinovăție față de cea plănuită.

---

*Registrul e zarea. Coloana vertebrală e drumul. 18 surse duc totul în spate;
celelalte 129 sunt cerul după care te orientezi, nu pământul pe care calci.*
