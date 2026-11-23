# Decizii — D::0dy55ey

Acest fișier păstrează deciziile care dau forma navei: ce s-a hotărât, de ce și unde scrie. Versiunea 1 (2026-11-19) a fost recuperată din JOURNAL, BACKLOG, documentele din `docs/`, `git log`, PR-urile îmbinate și panoul Kanban. Versiunea 1.1 (2026-11-20) adaugă răspunsurile ei din 2026-11-19 la semnele ⚠ și ↻, precum și cele mai vechi decizii, de pe prima navă (`digital-odyssey-v1`, 28.04 → 21.09.2026), găsite de cercetător (cardul `t_01d0fe2c`). Geamănul englezesc: [`DECISIONS-EN.md`](DECISIONS-EN.md).

**Cum adaugi o intrare:** dă-i numărul următor, pune-o la final, adaugă un rând în index și scrie aceeași intrare în ambele fișiere. Numește o sursă (commit, PR, ZIUA din JOURNAL, punct din BACKLOG, secțiune de document sau card de pe panou) și citează cuvintele Iuliei doar când o sursă le păstrează; citatele rămân în limba în care au fost spuse.

**Numerotarea (v1.1).** Numerele nu se refolosesc și nu se mută. Intrările 1–42 merg de la cea mai veche. Intrările 43–66 sunt un bloc adăugat la final cu decizii de pe prima navă, mai vechi decât intrarea 1; au fost adăugate, nu renumerotate, ca orice trimitere existentă la un număr de intrare să rămână valabilă. Intrarea 67 și toate cele de după ea continuă de acolo, în ordinea datelor.

**Semne:** ⚠ **reconstruit: te rog confirmă** = intrarea (sau data ei) nu are o sursă scrisă clară; ◐ **deschis** = hotărât, dar o parte e încă de ales; ↻ **de verificat** = o practică sau un text de mai târziu poate să o fi schimbat.

## Index

| # | Data | Decizia | Domeniul |
|---|---|---|---|
| 1 | 2026-07-17 | Șase volume într-o singură carenă, într-o ordine fixă a învățării; Puntea de Date e o anexă | structura site-ului |
| 2 | 2026-07-17 | Mesaje de commit `type(scope): message`, un singur domeniu pe commit | flux de lucru & git |
| 3 | 2026-07-17 | Comentariile didactice urmează legenda `@tag` | comentarii & cod |
| 4 | 2026-07-23 | Numele `D::0dy55ey`; depozitul rămâne `digital-odyssey` | conținut |
| 5 | 2026-07-23 | Două modele de navigare: centrul și sateliții | structura site-ului |
| 6 | 2026-07-23 | Un agent AI urcă la bord ca amplificator, nu ca înlocuitor | echipaj & buget |
| 7 | 2026-07-24 | Nava se citește pe sine: planul recursiv | structura site-ului |
| 8 | 2026-07-25 | Comutatorul de limbă duce la aceeași pagină în cealaltă limbă | limbă & traducere |
| 9 | 2026-07-29 | `en/` și `ro/` sunt copii paralele, intenționat | limbă & traducere |
| 10 | 2026-07-29 | Întâi engleza, apoi clonarea și traducerea; textul comentariilor RO în română, numele `@tag` în engleză | limbă & traducere |
| 11 | 2026-07-29 | Fiecare bloc și fiecare linie comentate; repetiția e voită; nu se șterge nimic | comentarii & cod |
| 12 | 2026-07-30 | ZIUA 22 e ziua care nu se termină, pentru marile evenimente; fiecare zi de lucru are ZIUA ei | flux de lucru & git |
| 13 | 2026-08-05 | Jurnalul devine roman, scris împreună | seif & roman |
| 14 | 2026-08-05 | Seiful lui Seldon: romanul la bordul site-ului, în capsule | seif & roman |
| 15 | 2026-08-06 | Revizuirea ZILEI 22 amânată (BACKLOG 011); `docs/drafts/` păstrat până atunci | seif & roman |
| 16 | 2026-08-26 | Sezonul V: echipajul urcă la bord și fiecare ZI își numește naratorul | echipaj & buget |
| 17 | 2026-09-21 | URL-ul rădăcină: opțiunea 3, un `404.html`; `en/` e canonic | structura site-ului |
| 18 | 2026-09-21 | Publicare prin GitHub Actions; verificatoarele păzesc fiecare PR (patru din 2026-11-04) | flux de lucru & git |
| 19 | 2026-11-06 | Doar Iulia îmbină, prin merge commit; agenții nu îmbină niciodată | flux de lucru & git |
| 20 | 2026-11-10 | Orice lucrare a echipajului trece printr-o poartă, cu acordul ei pentru un plafon | echipaj & buget |
| 21 | 2026-11-10 | Registrul costurilor ține socoteala combustibilului ars | echipaj & buget |
| 22 | 2026-11-10 | Prof. Ada Itaca urcă la bord ca profesoară | echipaj & buget |
| 23 | 2026-11-10 | Conținutul pornește de la notițele ei de studiu | conținut |
| 24 | 2026-11-10 | The Arkhold Records: material de studiu scris de echipaj, public doar când e „fit” | conținut |
| 25 | 2026-11-10 | Regula traducerii | limbă & traducere |
| 26 | 2026-11-10 | Niciun anime numit în poveste; locul lor e în CULTURE | conținut |
| 27 | 2026-11-10 | Fiecare comandă e explicată, de fiecare dată | flux de lucru & git |
| 28 | 2026-11-10 | Intrări de jurnal semi-automate mai târziu, niciodată complet automate | seif & roman |
| 29 | 2026-11-17 | Autonomia limitată a echipajului e alegerea ei de ucenică | echipaj & buget |
| 30 | 2026-11-17 | Regula de denumire Arkhold | conținut |
| 31 | 2026-11-18 | Fiecare linie nouă de cod explicată complet, chiar dacă se repetă | comentarii & cod |
| 32 | 2026-11-18 | Orice lucrare e consemnată în JOURNAL | flux de lucru & git |
| 33 | 2026-11-18 | Cele trei metode: ce am învățat, cum e construită, cum a fost | structura site-ului |
| 34 | 2026-11-19 | O invitație la descoperire: ușile rămân ascunse | structura site-ului |
| 35 | 2026-11-19 | Romanul e scris împreună; ea e autoarea și supervizoarea; niciodată un jurnal de sarcini | seif & roman |
| 36 | 2026-11-19 | Seiful lui Seldon păstrează șase capsule fixe, câte una pe volum | seif & roman |
| 37 | 2026-11-19 | Inspirația: Arcade Explorers, parcursă în sens invers | conținut |
| 38 | 2026-11-19 | Legătura către tot jurnalul se scoate din capsulele deschise | seif & roman |
| 39 | 2026-11-19 | Backend-ul e pus deoparte, nu respins | structura site-ului |
| 40 | 2026-11-19 | Întâi conținutul; cele nouă idei intră în backlog și rulează în valuri | echipaj & buget |
| 41 | 2026-11-19 | Un registru DECISIONS; revizuirea documentelor vine după el | flux de lucru & git |
| 42 | 2026-11-19 | O voce pentru fiecare metodă; naratorii JURNALULUI și regula lui | seif & roman |
| 43 | 2026-04-28 | v1: o carte în Volume, cu o scară de titluri de la `h1` la `h5` | structura site-ului |
| 44 | 2026-04-28 | v1: React și Angular stau în JavaScript, ca anexă | structura site-ului |
| 45 | 2026-04-28 | v1: înfățișarea e retro-futuristă, după *Solaris* | conținut |
| 46 | 2026-04-28 | v1: culorile au înțeles (mentă, ambră, roz) | conținut |
| 47 | 2026-04-30 | v1: conținutul dens se mută în pagini de jurnal proprii | structura site-ului |
| 48 | 2026-04-30 | v1: o lecție, o zi, un articol | structura site-ului |
| 49 | 2026-05-05 | v1: Observațiile Căpitanului, jumătate Manual, jumătate Jurnal | seif & roman |
| 50 | 2026-05-05 | v1: titluri hibride, cu separatori de protocol | seif & roman |
| 51 | 2026-05-07 | v1: terminalul de notițe, salvat în browser | structura site-ului |
| 52 | 2026-05-11 | v1: o programă HTML de 45 de zile, grupată pe săptămâni | conținut |
| 53 | 2026-05-18 | v1: animațiile merg trei cicluri, apoi se odihnesc | comentarii & cod |
| 54 | 2026-05-18 | v1: pagina recursivă a fost ideea ei, ultimul modul de deblocat | structura site-ului |
| 55 | 2026-05-20 | v1: foaia de stil devine manual, în module numerotate | comentarii & cod |
| 56 | 2026-05-20 | v1: cel mult două culori active pe ecran | conținut |
| 57 | 2026-05-27 | v1: reactorul 3D, de la astrolab la icosaedru | structura site-ului |
| 58 | 2026-06-02 | v1: planul citește sursa vie | structura site-ului |
| 59 | 2026-06-24 | v1: CSS simplu, fără Sass | comentarii & cod |
| 60 | 2026-06-02 | v1: desktop și mobil despărțite, două emisfere | comentarii & cod |
| 61 | 2026-06-06 | v1: un singur `h1` pe pagină independentă; site-ul ca flotă | structura site-ului |
| 62 | 2026-06-03 | v1: foaia de stil refăcută ca un Codex didactic; valorile calibrate rămân neatinse | comentarii & cod |
| 63 | 2026-06-25 | v1: o reparație pe mobil se închide doar pe un telefon adevărat | flux de lucru & git |
| 64 | 2026-06-24 | v1: git și un portofoliu | flux de lucru & git |
| 65 | 2026-06-30 | v1: poezia și claritatea codului, în echilibru | seif & roman |
| 66 | 2026-09-21 | v1 e retrasă, cu redirecționare | structura site-ului |
| 67 | 2026-11-20 | Nimic ilegal pe pagina de bibliografie | conținut |
| 68 | 2026-11-21 | Niciun calendar real în JURNAL de la ZIUA 33; datele stau în concordanță | seif & roman |

## Intrări

### 1 · 2026-07-17 · Șase volume într-o singură carenă, într-o ordine fixă
- **Decizia.** Site-ul e o singură navă cu șase volume: Frontend, Data Bridge, Backend, Database, UX, Delivery. Data Bridge (JSON) e o anexă așezată a doua, un coridor între suprafață și logica de dedesubt.
- **De ce.** Ordinea urmează firul firesc al construcției: de la ce poți atinge la ce nu poți atinge (ZIUA 11).
- **Sursa.** JOURNAL ZIUA 08 „The Ship Takes Shape: Six Compartments, One Hull” (commit `7a1fd8e`, „finalize volume architecture and learning rationale”); ZIUA 11, „Six volumes, one progression” și „The Data Bridge as an annex”.

### 2 · 2026-07-17 · Mesaje de commit `type(scope): message`
- **Decizia.** Commit-urile au forma `type(scope): message`; commit-uri separate pe domenii, nu unul global.
- **De ce.** Un începător care citește `git log --oneline` trebuie să vadă imediat ce zonă s-a schimbat. Proiectul prețuiește vigilența mai mult decât graba.
- **Sursa.** JOURNAL ZIUA 04 „Recommended tags” (commit `0799c19`, 2026-07-17); `docs/work-deontology.md` §7; disciplina domeniilor adăugată în `8f8b846` (2026-07-30).

### 3 · 2026-07-17 · Comentariile didactice urmează legenda `@tag`
- **Decizia.** Comentariile didactice poartă o etichetă (`@reason`, `@block`, `@warning`, …) urmată de o explicație de sine stătătoare, în sintaxa de comentariu a fiecărui limbaj.
- **De ce.** Un vocabular comun face ca toate comentariile să se citească precum un curs.
- **Sursa.** JOURNAL ZIUA 06 „Comment legend” (commit `0799c19`); `docs/legend-en.md`; `docs/work-deontology.md` §5.

### 4 · 2026-07-23 · Numele `D::0dy55ey`
- **Decizia.** Titlul de lucru „Digital Odyssey” a devenit `D::0dy55ey` peste tot unde se vede; depozitul GitHub rămâne `digital-odyssey`.
- **De ce.** O semnătură în locul unui substituent: compactă, ca un indicativ de navă pe un ecran HUD. Despărțirea dintre numele depozitului și numele din poveste e voită.
- **Sursa.** JOURNAL ZIUA 10 „Rebranding: from 'Digital Odyssey' to `D::0dy55ey`”; commit `0c07bc1`.

### 5 · 2026-07-23 · Două modele de navigare
- **Decizia.** Puntea de Comandă (`index.html`) e un centru ale cărui legături duc la propriile secțiuni; orice altă pagină e un satelit, făcut pentru „concentrare și întoarcere”.
- **De ce.** Pe punte alegi un volum; pe o pagină de jurnal citești un singur lucru și te întorci.
- **Sursa.** JOURNAL ZIUA 10 „Two navigation models”.

### 6 · 2026-07-23 · Un agent AI urcă la bord ca amplificator
- **Decizia.** Un agent AI de programare (atunci, opencode) lucrează la terminal; a intrat nu ca înlocuitor al judecății căpitanului, ci ca amplificare a ei.
- **De ce.** Căpitanul păstrează deciziile; agentul grăbește munca.
- **Sursa.** JOURNAL ZIUA 10 (începutul); ZIUA 22, paragraful „On DAY 10, the ship gained a second voice”.

### 7 · 2026-07-24 · Nava se citește pe sine: planul recursiv
- **Decizia.** `recursive-blueprint.html` („Motorul Autognostic”) aduce chiar fișierele-sursă ale site-ului și le arată ca text brut, cu tot cu comentarii.
- **De ce.** Comentariile fac parte din ce predă site-ul: pe pagina aceasta vizitatorul citește cum e construită nava.
- **Sursa.** JOURNAL ZIUA 12 „The Autognostic Engine”; commit-urile `335e0af`, `35378a8`; `CLAUDE.md`, „Deliberate decisions” 1.

### 8 · 2026-07-25 · Comutatorul de limbă e omolog
- **Decizia.** Comutatorul de limbă al fiecărei pagini EN duce la pagina-pereche din RO (și înapoi), nu la index.
- **De ce.** Cine schimbă limba trebuie să rămână pe aceeași pagină.
- **Sursa.** Commit `459a277`; JOURNAL ZIUA 14 „The Final Signal: Links Unified, Toggles Homologous”.

### 9 · 2026-07-29 · `en/` și `ro/` sunt copii paralele, intenționat
- **Decizia.** Fiecare pagină există de două ori, în `en/` și în `ro/`; nu se contopesc niciodată într-un cod comun. O schimbare de cod într-una se oglindește în cealaltă, în același commit; fără comentarii, codul e identic.
- **De ce.** Nava e un vas de învățare bilingv, nu o aplicație de producție într-o singură limbă. Din 2026-11-04, `check-parity.py` păzește regula.
- **Sursa.** `docs/work-deontology.md` §1 (`61cd338`); `CLAUDE.md`, „Deliberate decisions” 2 (`df4325d`, 2026-11-04); PR #3.

### 10 · 2026-07-29 · Întâi engleza, apoi româna; regula comentariilor
- **Decizia.** Un fișier nou e desăvârșit întâi în engleză, apoi clonat în `ro/` și tradus. În fișierele românești, textul comentariilor e în română; numele `@tag` rămân peste tot în engleză.
- **De ce.** Un singur model terminat, apoi un geamăn fidel. Etichetele sunt un vocabular comun (intrarea 3); explicația vorbește limba cititorului.
- *"the comments in the Romanian files are in Romanian and the comments tags are in English everywhere."* (răspunsul ei pe PR #21, 2026-11-19)
- **Practica dinaintea regulii.** Pe v1, limba comentariilor urma deja foaia de stil: `c5daa10` (2026-06-26) a trecut în engleză comentariile reactorului din `style.css`, iar `style-ro.css` și-a păstrat comentariile românești. În acest depozit, comentariile RO au fost traduse pe 2026-08-09 și 2026-08-16 (`e597d8c`, `3536495`), iar PR #20 a refăcut comentarii `@reason` în română.
- **Sursa.** `docs/work-deontology.md` §3; răspunsul ei pe PR #21 (2026-11-19); memoriul cercetătorului, cardul `t_01d0fe2c`.

### 11 · 2026-07-29 · Fiecare bloc și fiecare linie comentate; nu se șterge nimic
- **Decizia.** Fiecare bloc și fiecare linie au comentariul lor, chiar și când tiparele se repetă; comentariile didactice lungi nu se șterg, nu se scurtează, nu se „aerisesc”. Cele greșite, învechite sau care doar repetă linia se semnalează și se corectează.
- **De ce.** Redundanța e acceptată și voită: fiecare repetare e încă o ocazie de învățare. Comentariile sunt metoda de învățare a proiectului.
- **Sursa.** `docs/work-deontology.md` §4; `CLAUDE.md`, „Deliberate decisions” 1 (`df4325d`, 2026-11-04); PR #14 (numere de module greșite, corectate).

### 12 · 2026-07-30 · ZIUA 22, ziua care nu se termină
- **Decizia.** ZIUA 22, „cea mai lungă miercuri”, e ziua care nu se termină, ziua cosmică. Orice eveniment major al navei sau al călătoriei (o schimbare mare de structură, o curățenie generală și altele asemenea) se consemnează în ea, oriunde ar fi căzut în cronologie. Nu are nevoie nici de dată, nici de oră. Fiecare zi de lucru primește ZIUA ei (intrările 32, 42).
- *"Yes, DAY 22 is a continuous or a never-ending day. Every time a major event related to the ship or voyage occurs, it will be recorded in this DAY 22 entry even if they were done earlier or later in the timeline. It's a bending of time in our digital space."* (2026-11-19)
- *"It never ends, that's crucial."* · *"before starting to work with Hermes, there were no real dates recorded in the JOURNAL. DAY 22 is a cosmic day, it doesn't need a dating, neither a timing."* (2026-11-20)
- **De ce.** Timpul se curbează în spațiul digital al navei: ZIUA 22 adună evenimentele care schimbă nava, iar fiecare zi de lucru e povestită într-o ZI a ei.
- **Sursa.** `docs/work-deontology.md` §9 (`61464c2`) și §10 (PR #23); răspunsul ei pe PR #21 (2026-11-19); cardul `t_2d86b8be`, comentariul `[HER 2026-11-20]`.

### 13 · 2026-08-05 · Jurnalul devine roman
- **Decizia.** JOURNAL e un roman scris împreună, cu titlul *D::0dy55ey — Delta writing, or how to write through differences*, cu un frontispiciu în ambele jurnale.
- **De ce.** În ZIUA 26, jurnalul devine un roman care se hrănește din propria recursivitate (mesajul commit-ului `4bc95a5`).
- **Sursa.** JOURNAL ZIUA 26 „The Dialogue in the Chart Room” (`4bc95a5`); commit `70fb8b5`.

### 14 · 2026-08-05 · Seiful lui Seldon
- **Decizia.** Romanul e proiectat la bordul site-ului prin Seiful lui Seldon: o pagină proprie (`vault.html`), în care intri printr-o poartă de la baza paginii `transmission.html`, cu intrările jurnalului împachetate în capsule, pe ZILE.
- **De ce.** Mărturia se găsește, nu se împarte (vezi intrarea 34).
- **Sursa.** Commit-urile `7ecd422`, `1bc49da`, `7ac83e3`, `f0638bc`, `ce71d24`.

### 15 · 2026-08-06 · Revizuirea ZILEI 22 amânată; ciornele păstrate
- **Decizia.** Rescrierea ZILEI 22 ca „planul planului” e BACKLOG 011, amânată până când paginile de jurnal au conținut. Ciornele ei rămân în `docs/drafts/` până la încheierea lui 011.
- **De ce.** Textul actual al ZILEI 22 e socotit deocamdată mai bun decât orice ciornă. Ciornele păstrează registrul vocii mașinii, pe care niciun alt document nu-l are (verificarea din 2026-11-19).
- **Sursa.** BACKLOG 011; commit-urile `a1b2956`, `691bd53`; cardul `t_ad5e95c8` (PĂSTRAT, 2026-11-19).

### 16 · 2026-08-26 · Sezonul V: echipajul urcă la bord, naratorul are nume
- **Decizia.** De la ZIUA 33, jurnalul e ținut de membri numiți ai echipajului, iar fiecare ZI începe cu *Jurnal ținut de*.
- **De ce.** Până atunci, naratorul se schimba fără să spună nimănui; cititorul merită să știe a cui mână ține condeiul (Scribul).
- **Sursa.** JOURNAL ZIUA 33 „A Word Before the Entry” (date reale 2026-08-26 → 2026-09-10); PR #12.

### 17 · 2026-09-21 · URL-ul rădăcină: opțiunea 3
- **Decizia.** Nu există `index.html` în rădăcină; rădăcina goală servește un `404.html` cu legături către `en/` și `ro/`; `en/index.html` rămâne canonic.
- **De ce.** E potrivirea cea mai simplă cu arhitectura existentă: nicio setare Pages, niciun flux de redirecționare.
- **Sursa.** BACKLOG 008, „Decision (implemented)”; JOURNAL ZIUA 17; commit `19822a3`.

### 18 · 2026-09-21 · Publicare prin GitHub Actions; verificatoare la fiecare PR
- **Decizia.** Un push în `main` publică site-ul prin GitHub Actions. Fluxul Lint rulează verificatoarele la fiecare push și PR; ele se rulează și înaintea fiecărui commit. Pe 2026-09-21 erau două: `check-noopener.py` (`db3a7c4`) și `check-uc-banner.py` (`fb2f392`). Pe 2026-11-04 au ajuns patru: `check-log-prose.py` (`a25fd68`) și `check-parity.py` (`6261f8c`, PR #3).
- **De ce.** Fiecare paznic a fost scris pentru o regulă care chiar se încălcase.
- **Sursa.** Commit-urile `e5f4ce0`, `224fb0e`, `db3a7c4`, `fb2f392`, `a25fd68`, `6261f8c`; PR #3; `CLAUDE.md`, „Working rules”; `DEPLOY.md`.

### 19 · 2026-11-06 · Doar Iulia îmbină
- **Decizia.** Nimic nu ajunge în `main` decât printr-un pull request. Doar Iulia îmbină, cu *Create a merge commit*; agenții nu îmbină și nu fac push în `main`, niciodată. Curățenia ei locală vine doar după semnalul PM-ului, pentru că echipajul lucrează într-o singură copie locală.
- **De ce.** O îmbinare înseamnă o publicare; și ea îmbină ca să învețe (intrarea 29).
- **Sursa.** `docs/git-workflow-ro.md` (PR #13, `c750b3a`); `DEPLOY.md`; predarea PM-ului, „Standing rules”.

### 20 · 2026-11-10 · Orice lucrare a echipajului trece printr-o poartă
- **Decizia.** Niciun card nu rulează până când Iulia nu aprobă un plafon pentru el; cuvintele ei se notează pe un card-poartă marcat `[HER-OK …]`; depășirea plafonului cere un nou acord.
- *"1st wave: I agree with the budget."* (2026-11-19)
- **De ce.** Ea hotărăște cât valorează o lucrare înainte ca banii să fie cheltuiți.
- **Sursa.** Predarea PM-ului, „Budget record” și actualizările 2026-11-10 → 11-19; cardurile-poartă `t_86d635f8`, `t_ccd7da9e`, `t_63f7e170`; cardul `t_7e6d4581`, comentariul `[HER-OK 2026-11-19]`.

### 21 · 2026-11-10 · Registrul costurilor
- **Decizia.** Ce cheltuiește călătoria se notează în `docs/ledger/cost-ledger-ro.md` (și în geamănul EN), cu un rând de Combustibil adăugat în ZILELE 33–39.
- **De ce.** Ca prețul fiecărei runde să se poată citi, iar o rundă să se poată compara cu alta.
- **Sursa.** PR #15 (`3dc6cc3`); `docs/ledger/cost-ledger.md`.

### 22 · 2026-11-10 · Profesoara urcă la bord
- **Decizia.** Prof. Ada Itaca (profilul it-tutor) intră în echipaj ca profesoară; din 2026-11-18 nu mai ia carduri Kanban și discută ciornele cu Iulia, în chat.
- **De ce.** Un membru al echipajului a cărui treabă e adevărul a ceea ce învață Iulia.
- **Sursa.** JOURNAL ZIUA 40 „The Teacher Comes Aboard” (PR #16); predarea PM-ului, „it-tutor” și actualizarea din 2026-11-18.

### 23 · 2026-11-10 · Conținutul pornește de la notițele ei
- **Decizia.** Iulia citește sau urmărește un curs și ia notițe structurate; ele sunt materia primă pentru paginile `*-log.html` și pentru `index.html`. It-tutor verifică adevărul, writer engleza și povestea, researcher face finisajul.
- **De ce.** Paginile canonice sunt învățătura ei, nu a echipajului.
- **Sursa.** Predarea PM-ului, „it-tutor = Prof. Ada Itaca”, „Iulia's content rule”.

### 24 · 2026-11-10 · The Arkhold Records ◐ deschis
- **Decizia.** Materialul de studiu scris de echipaj poate deveni public, ca un strat mai adânc: cum am învățat informatică cu ajutorul echipajului. Numele e al ei (*arkhold* = arcă + gospodărie). Textele altora apar doar ca legături în bibliografie; trecerea prin filtrul de confidențialitate e obligatorie; eticheta cinstită e „material de studiu scris de echipaj, verificat de QA”; devin publice doar documentele pe care ea le numește „fit”, fiecare cu verdictul lui.
- **◐ deschis.** Forma (o pagină pe acest site sau un site separat) e încă de hotărât. A confirmat pe 2026-11-19: *"(24) - yes, it's still open."*
- **Sursa.** Predarea PM-ului, „OPEN DECISION: The Arkhold Records” și actualizarea din 2026-11-10, 19:00; poarta `t_67a95c5f`; poarta de construcție `t_4bd9e35c`.

### 25 · 2026-11-10 · Regula traducerii
- **Decizia.** EN și RO nu trebuie traduse cuvânt cu cuvânt, dar traducerea trebuie să fie corectă din punct de vedere lingvistic și literar, iar faptele să fie aceleași; codul e identic. Româna folosește ș și ț cu virgulă dedesubt. Căpitanul e neutru (niciodată „căpitana”); studenta e la feminin.
- *"yes, the translation doesn't have to be word-by-word. The code is identical and that's important. Translation has to be correct from a linguistic and literary pov."* (confirmat pe PR #21, 2026-11-19)
- **Practica de pe v1.** Manifestele foilor de stil de pe v1 sunt traduse liber, nu literal, iar româna de pe v1 folosește doar litere cu virgulă dedesubt.
- **Sursa.** Predarea PM-ului, „Standing rules”; răspunsul ei pe PR #21 (2026-11-19); memoriul cercetătorului, cardul `t_01d0fe2c`.

### 26 · 2026-11-10 · Niciun anime numit în poveste
- **Decizia.** În roman nu se numește niciun anime; locul lor e în CULTURE (raftul anime & manga).
- Confirmat pe PR #21, 2026-11-19: *"(26) - OK."*
- **Sursa.** Predarea PM-ului, „Standing rules”; răspunsul ei pe PR #21; CULTURE-RO, raftul anime & manga (`20635d8`).

### 27 · 2026-11-10 · Fiecare comandă e explicată, de fiecare dată
- **Decizia.** Orice comenzi primește Iulia, variate și noi, bine-venite, vin cu câte un rând simplu: ce face fiecare și de ce acum, chiar dacă se repetă.
- **De ce.** Repetiția e felul ei de a memora; vrea să învețe cât mai multe comenzi. Regula a înlocuit ideea mai veche a unor „patru comenzi fixe”.
- **Sursa.** Predarea PM-ului, actualizarea din 2026-11-10, 23:10, „COMMANDS RULE”.

### 28 · 2026-11-10 · Intrări de jurnal semi-automate, mai târziu
- **Decizia.** Când va exista destul material, intrările de jurnal pot fi schițate semi-automat, niciodată complet automat.
- Confirmat pe PR #21, 2026-11-19: *"(28) - yes."*
- **Precedent.** Jurnalul de pe v1 era deja scris în parte de un chat AI, pornind de la sesiunile ei.
- **Sursa.** Predarea PM-ului, „Other parked items” („her OK: semi-auto, not full”); răspunsul ei pe PR #21; memoriul cercetătorului, cardul `t_01d0fe2c`.

### 29 · 2026-11-17 · Autonomia limitată e alegerea ei
- **Decizia.** Echipajul ar putea lucra complet autonom; nu o face, pentru că Iulia alege să rămână în buclă, ca ucenică.
- *"My role in the digital-odyssey project is more the role of a student than the role of an owner. I do the merges myself because I want to learn and not because the agents can't do it themselves even better and faster."*
- **Sursa.** JOURNAL ZIUA 41 „The Week the Shelf Grew” (ZIUA 41 „Săptămâna în care a crescut raftul”); predarea PM-ului, actualizarea din 2026-11-17, corectura (7).

### 30 · 2026-11-17 · Regula de denumire Arkhold
- **Decizia.** Candidații publici se numesc de la început `<NN>-<Titlu>-Arkhold-EN.md` / `-Arkhold-RO.md`, cu aceleași nume în depozit, în `docs/arkhold/`. Doar aceștia pot deveni publici, după „fit”-ul ei și un PR.
- **De ce.** Un singur nume de la ciornă la publicare; detaliile care se învechesc repede (numere, date) dispar din edițiile Arkhold.
- **Sursa.** Predarea PM-ului, actualizarea din 2026-11-17, „NAMING RULE (hers, 11-17)” și sugestia (1).

### 31 · 2026-11-18 · Fiecare linie nouă de cod, explicată complet
- **Decizia.** Fiecare linie nouă de cod primește explicația ei completă, chiar dacă aceeași explicație există în altă parte.
- **De ce.** Fiecare pagină trebuie să predea singură; repetiția e voită (intrările 11, 27).
- **Sursa.** Predarea PM-ului, actualizarea din 2026-11-18 („Iulia added 2 rules”); QA `t_3aab23a9` a verificat-o pe PR #19 (*„I checked 552 added code lines”*).

### 32 · 2026-11-18 · Orice lucrare e consemnată în JOURNAL
- **Decizia.** Orice lucrare a echipajului e consemnată în JOURNAL, povestită ca o zi din călătorie (intrarea 35). Ce n-a fost încă povestit intră în următoarea intrare (PR #20 și verificarea ciornelor, 2026-11-19).
- **De ce.** JOURNAL e mărturia, metoda 3.
- **Sursa.** Predarea PM-ului, actualizările din 2026-11-18 și 2026-11-19, 15:00; JOURNAL ZIUA 41 (recuperare, cardul `t_4e0674d2`).

### 33 · 2026-11-18 · Cele trei metode
- **Decizia.** Nava predă în trei feluri: (1) **ce am învățat**, paginile canonice de log, din notițele ei despre cărți și cursuri; (2) **cum e construită**, cu mâinile pe cod, planul recursiv; (3) **cum a fost**, frământările personale din căutarea cunoașterii: JOURNAL și The Arkhold Records.
- **De ce.** Trei feluri diferite de lectură, nu trei copii ale aceluiași text.
- **Sursa.** Spusă Prof. Ada pe 2026-11-18 (predarea PM-ului, actualizarea din 2026-11-19, 13:55); formularea adoptată pe 2026-11-19 (cardurile `t_c975e8cf`, `t_78672421`).

### 34 · 2026-11-19 · O invitație la descoperire
- **Decizia.** Ușile către metodele 2 și 3 rămân ascunse: icosaedrul-reactor deschide planul; figura Seifului lui Seldon de la baza paginii `transmission.html` deschide seiful, ale cărui chestionare și ceas al călătoriei desigilează capsulele. Niciun indicator pe pagina principală.
- *"I built this ship as an invitation to discovery, not as a straightforward manual."*
- **Sursa.** Cardurile `t_c975e8cf`, `t_791fd940` (corpul lor); predarea PM-ului, actualizarea din 2026-11-19, 15:00 (sugestiile de indicatoare, retrase).

### 35 · 2026-11-19 · Romanul e scris împreună; ea e autoarea și supervizoarea
- **Decizia.** Echipajul și Iulia scriu romanul împreună; ea e autoarea și supervizoarea lui și citește fiecare rând. Nu e niciodată un jurnal de sarcini.
- **De ce.** E mărturia a cum a fost învățarea, nu o listă de tichete.
- **Sursa.** Cardul `t_78672421` (corpul); cardul `t_5cc95f00` (corpul); predarea PM-ului, actualizarea din 2026-11-19, 16:15.

### 36 · 2026-11-19 · Șase capsule fixe
- **Decizia.** Seiful lui Seldon păstrează șase capsule FIXE, câte una pentru fiecare volum de pe pagina principală; nu se adaugă nicio capsulă pentru ZILELE de mai târziu (43 și următoarele). Capsulele Database, UX și Delivery așteaptă până se termină jurnalul; apoi intrările rămase se împart între ele.
- **De ce.** Se potrivesc cu cele șase volume ale metodei 1.
- **De făcut (nu e o alegere).** Corectarea notei învechite „When the captain writes DAY 27…” (`daysWritten` 27) și planificarea împărțirii, când îi vine vremea (cardul `t_499b6977`).
- **Sursa.** Cardul `t_499b6977`, comentariul `[HER DECISION 2026-11-19]`.

### 37 · 2026-11-19 · Inspirația: Arcade Explorers
- **Decizia.** Inspirația navei e consemnată: *Arcade Explorers* (Dell/Laurel-Leaf, 1985, Seth McEvoy și Laure Smith), cărți-joc SF în care cititorul tastează programe în BASIC. Doar legături, nicio citare mai lungă de un rând.
- *"The pathway in these books is in the opposite direction than our path. We go from canonical to gamish and they go the other way around."*
- **Sursa.** Cardul `t_5cc95f00`, comentariul `[HER 2026-11-19]`.

### 38 · 2026-11-19 · Legătura către tot jurnalul se scoate din capsulele deschise
- **Decizia.** Legătura dintr-o capsulă deschisă către întregul JOURNAL de pe GitHub se scoate. N-a fost alegerea ei; în cuvintele ei, *"defeats the purpose"*.
- **Sursa.** Predarea PM-ului, actualizările din 2026-11-19, 16:15 și 17:15; cardul `t_985cb67b` (sfatul PM-ului „remove it”, răspunsul ei „OK”; comentariul `[HER-OK 2026-11-19]`: „remove the GitHub link”).

### 39 · 2026-11-19 · Backend-ul e pus deoparte, nu respins
- **Decizia.** Păstrarea progresului cititorului (cheile seifului) și a notițelor din terminalul de note dincolo de un singur browser cere un backend; acesta e pus deoparte, nu respins.
- *"we don't have a backend to this project yet... We have to work on these two tasks too"* · *"something that we should discuss at large. Parked for now, but not rejected."*
- **Sursa.** Cardul `t_984c84c3` (corpul și comentariul `[HER 2026-11-19]`).

### 40 · 2026-11-19 · Întâi conținutul; ideile rulează în valuri
- **Decizia.** Prioritatea ei e conținutul (notițe de studiu → pagini de jurnal HTML/CSS); revizuirea site-ului așteaptă. Cele nouă idei din revizuirile structurii sunt primite în backlog și fiecare rulează doar într-un val, cu plafonul ei.
- *"OK to the 9 ideas"* · *"1st wave: I agree with the budget."*
- **Sursa.** Poarta `t_d6f19c12` (comentariul); predarea PM-ului, actualizările 2026-11-19, 16:15 → 17:00; cardul `t_7e6d4581`, comentariul `[HER-OK 2026-11-19]`.

### 41 · 2026-11-19 · Un registru DECISIONS, apoi revizuirea documentelor
- **Decizia.** Nava ține acest registru DECISIONS (EN + RO), așa cum face și Strigoi. Revizuirea documentelor care rămân vine mai târziu, după această recoltă, ca nicio sursă să nu fie ștearsă înainte ca deciziile din ea să fie consemnate.
- *"I didn't create for digital-odyssey a separate DECISIONS document as we did for strigoi, and I regret that."*
- **Sursa.** Cardul `t_7e6d4581` (corpul); predarea PM-ului, actualizarea din 2026-11-19, 17:00.

### 42 · 2026-11-19 · O voce pentru fiecare metodă a navei
- **Decizia.** Fiecare dintre cele trei metode păstrează o singură voce: lecțiile (metoda 1), comentariile planului recursiv (2), JURNALUL (3a) și manualele Arkhold (3b). Regula stă în `docs/work-deontology-ro.md`, §10, nu în CULTURE, care e un catalog de referințe culturale; fișierul acesta consemnează decizia. Aceeași secțiune îi numește pe naratorii JURNALULUI, așază ZIUA 22 ca zi care nu se termină și dă regula pentru fiecare intrare, veche sau nouă: o poveste științifico-fantastică și o consemnare exactă tehnic a zilei, cu faptele spuse ca legendă.
- *"sound good"* · *"OK"* · *"The JOURNAL is not just a technical manual, it is a story of a technical adventure."*
- **ZILELE de mit rămân.** ZILELE vechi care sunt numai mit, fără consemnare tehnică, se păstrează; ce nu se vrea e o ZI care e numai consemnare tehnică. *"the DAYs that are pure myth and no technical record are the most precious ones. Don't remove them. What we don't want are the DAYs that are pure technical record."* (2026-11-20)
- **Sursa.** Cardul `t_78672421` (corpul și adăugirile din 2026-11-19, 21:10 și 21:40); revizuirea structurii făcută de writer pe cardul `t_c975e8cf`, ideea 2; îmbinată prin PR #23 (`599b3a5`); cardul `t_2d86b8be`, comentariul `[HER 2026-11-20]`.

## De pe prima navă (v1), adăugate în v1.1

Intrările 43–66 vin de pe prima navă, `digital-odyssey-v1`, și sunt mai vechi decât intrarea 1. Urmează ordinea din memoriul cercetătorului (cardul `t_01d0fe2c`, rândurile V1–V24, deci intrarea 43 = V1 și intrarea 66 = V24), care e în mare ordinea datelor: intrările 59, 60, 62 și 64 o încalcă, iar data intrării 59 e doar cea a primului ei commit. Datele sunt cele scrise în intrările jurnalului de pe v1; textul acela e în git abia de la `faa2631` (2026-06-24), întâi sub numele `notite-manual.md`, notițele ei de studiu. Numerele de rând (L…) se referă la `JURNAL.md` de pe v1, la `60b3ba4`.

Părți din jurnalul de pe v1 au fost scrise de un chat AI, pornind de la sesiunile ei. Aici sunt citate drept cuvintele ei doar notițele la persoana întâi, în româna originală. Rândurile scrise cu vocea AI-ului sunt citate ca ce consemnează jurnalul, nu drept cuvintele ei. Acolo unde o decizie de pe v1 e sămânța unei intrări de mai sus, „Mai târziu” o numește.

### 43 · 2026-04-28 · O carte în Volume, cu o scară de titluri
- **Decizia.** Proiectul e o carte în Volume, cu o scară strictă de titluri, de la `h1` la `h5`. Începe cu două: *Volume I: The Frontend Landscape* și *Volume II: The Database Void*.
- **De ce.** Accesibilitate și claritate: scara de titluri se citește ca cuprinsul cărții.
- *„Am organizat proiectul în două mari arii de studiu folosind elementul `<section>`”*
- **Mai târziu.** Intrarea 1 (șase volume într-o singură carenă).
- **Sursa.** JURNAL v1, `### 28.04.2026`, L41–57 și L6090–6115; `faa2631`; memoriul, V1.

### 44 · 2026-04-28 · React și Angular stau în JavaScript
- **Decizia.** React și Angular sunt o anexă în interiorul JavaScript (`h4`/`h5`), nu capitole de sine stătătoare.
- **De ce.** Sunt extensii ale JavaScript, nu tehnologii independente.
- *„HTML-ul meu este o hartă a dependențelor tehnologice, nu doar o listă de elemente.”*
- **Sursa.** JURNAL v1, L58, L6117–6121; `faa2631`; memoriul, V2.

### 45 · 2026-04-28 · Înfățișarea: retro-futuristă, după *Solaris*
- **Decizia.** Paleta e Solar Mint, Amber, Nebula Pink și Space Dark, cu linii de scanare CRT și sticlă mată, după *Solaris* al lui Tarkovski și arta lui Oxyplegatz.
- **De ce.** A lăsat în urmă, intenționat, culorile obișnuite.
- *„Am abandonat culorile standard pentru o estetică retro-futuristă inspirată de Solaris (Tarkovsky) și arta Oxyplegatz”*
- **Sursa.** JURNAL v1, L62–74; `faa2631`; memoriul, V3.

### 46 · 2026-04-28 · Culorile au înțeles
- **Decizia.** Menta înseamnă explorat și stabil; ambra înseamnă viitor, în așteptare sau avertisment (`.future-log`); rozul înseamnă aici și acum (`.active`). Codul a fost fixat până la 06.05.2026, ca „Codificare Cromatică Finală”.
- **De ce.** Culoarea îi arată cititorului unde se află în călătorie.
- *„Bordură portocalie (Amber) cu opacitate scăzută pentru modulele viitoare”*
- **Sursa.** JURNAL v1, L76–79, L181–184, L214–217; memoriul, V4.

### 47 · 2026-04-30 · Conținutul dens se mută în pagini proprii
- **Decizia.** Conținutul dens merge în pagini dedicate (`html-log.html`, `sql-log.html`); Command Deck rămâne curat.
- **De ce.** Ca să nu apară „scroll-ul infinit”.
- *„Am decis separarea conținutului dens în pagini dedicate (html-log.html, sql-log.html) pentru a evita «scroll-ul infinit» și a păstra Command Deck-ul (pagina principală) curat.”*
- **Mai târziu.** Intrarea 5 (centrul și sateliții).
- **Sursa.** JURNAL v1, L149; `faa2631`; memoriul, V5.

### 48 · 2026-04-30 · O lecție, o zi, un articol
- **Decizia.** Fiecare lecție e o zi, iar fiecare zi e propriul ei `<article class="log-entry">`, încheiat cu un Mission Status. O bară laterală fixă îl lasă pe cititor să sară de la o zi la alta.
- **De ce.** Aer împotriva oboselii vizuale și senzația de progres, prin rapoarte de bord succesive.
- *„Această «aerisire» previne oboseala vizuală și oferă un sentiment de progresie”*
- **Sursa.** JURNAL v1, L161–163; memoriul, V6.

### 49 · 2026-05-05 · Observațiile Căpitanului: jumătate Manual, jumătate Jurnal
- **Decizia.** Din 05–06.05.2026, fiecare intrare amestecă date tehnice reci (Manualul) cu observații subiective despre explorare (Jurnalul).
- **De ce.** Arată gândire critică. Atunci, cititorii pe care și-i închipuia erau viitorii recrutori.
- *„Am decis ca fiecare intrare să fie un mix între date tehnice reci (Manual) și observații subiective de explorare (Journal). Această structură demonstrează gândire critică pentru viitorii recrutori.”*
- **Mai târziu.** Intrările 13 și 42; metodele 1 și 3 din intrarea 33.
- **Sursa.** JURNAL v1, L208–210 („Strategia de Conținut: Manual Hibrid”); memoriul, V7.

### 50 · 2026-05-05 · Titluri hibride
- **Decizia.** Titlurile zilelor îmbină cronologia cu metafora, prin separatori de protocol, `//` sau `::` (de pildă *Day 01: The Shield Matrix // …*).
- **De ce.** Întărește înfățișarea de jurnal tehnic.
- *„Am adoptat un sistem de titluri hibride care îmbină cronologia (Day XX) cu metaforele de explorare (The Steel Hull), folosind separatori de tip protocol (// sau ::)”*
- **Mai târziu.** Poate rădăcina lui `::` din `D::0dy55ey` (intrarea 4); legătura rămâne de confirmat de ea.
- **Sursa.** JURNAL v1, L212, exemplul la L625; memoriul, V8.

### 51 · 2026-05-07 · Terminalul de notițe
- **Decizia.** Din 07–11.05.2026, fiecare intrare din jurnal are propriul câmp de text, salvat în browser cu `localStorage`. ID-urile urmează un tipar strict, pe sectoare (`html-note-dayXX`, `sql-…`), și sunt ținute separat de ID-urile articolelor.
- **De ce.** Notițele rămân fără ca HTML-ul să fie modificat, iar prefixele împiedică datele din sectoare diferite să se ciocnească.
- *„Am «instruit» nava să folosească memoria internă a browserului”*
- **Mai târziu.** Intrarea 39 (backend-ul e pus deoparte, nu respins).
- **Sursa.** JURNAL v1, L254–259, L284–289, L302–306, L318–322; memoriul, V9.

### 52 · 2026-05-11 · O programă HTML de 45 de zile, pe săptămâni
- **Decizia.** Programa HTML ține 45 de zile, grupate pe săptămâni în bara laterală. Manualul e gândit să le fie de folos și altora.
- **De ce.** Un drum mai blând prin materie și un manual pe care îl pot urma și alții.
- *„Am adoptat o structură de grupare săptămânală a log-urilor pentru a îmbunătăți parcursul didactic.”* Jurnalul mai consemnează că programa a fost extinsă ca manualul să fie „util și altora”.
- **Sursa.** JURNAL v1, L331–391; memoriul, V10.

### 53 · 2026-05-18 · Animațiile merg trei cicluri, apoi se odihnesc
- **Decizia.** Din 18–20.05.2026, animațiile merg trei cicluri (cam 7,5 s), apoi se opresc. Nimic nu se repetă la nesfârșit.
- **De ce.** Jurnalul o consemnează: animațiile infinite au fost scoase ca să nu obosească ochii cititorului în sesiunile lungi de lectură.
- **Sursa.** JURNAL v1, L414; memoriul, V11.

### 54 · 2026-05-18 · Pagina recursivă a fost ideea ei
- **Decizia.** Din 18–20.05.2026: site-ul își arată propriul cod, explicat rând cu rând, într-o pagină a lui. Numele de lucru era `[ STAR_CHART_LOGIC ]`, iar pagina era plănuită ca ultimul modul pe care îl deblochează jurnalul.
- **De ce.** Edutainment: cititorul vede cum a fost construită nava cu care călătorește.
- Jurnalul, cu vocea AI-ului, îi atribuie ei ideea („Ideea ta de a transforma fișierul style.css… într-un instrument recursiv de studiu”) și plănuiește pagina ca „ultimul modul deblocat din jurnal”.
- **Mai târziu.** Intrările 7 și 34.
- **Sursa.** JURNAL v1, L417–425 („Self-Documentic Code Layout”); memoriul, V12.

### 55 · 2026-05-20 · Foaia de stil devine manual
- **Decizia.** Din 20–25.05.2026, `style.css` e împărțit în module numerotate (01–11, apoi 00.1 pentru keyframes și 00.2 pentru media), iar fiecare proprietate primește o traducere literară și funcțională.
- **De ce.** O așezare care se documentează singură, pe care pagina recursivă o poate citi cu voce tare.
- *„Fiecare proprietate tehnică… are acum o traducere literară și funcțională directă, transformând codul meu într-un manual live.”*
- **Mai târziu.** Intrările 3 și 11.
- **Sursa.** JURNAL v1, L431–462; memoriul, V13.

### 56 · 2026-05-20 · Cel mult două culori active pe ecran
- **Decizia.** Pe ecran nu stau mai mult de două culori active odată; ambra a fost scoasă din subsol.
- **De ce.** Disciplină vizuală: jurnalul o numește „regula de aur” a celor cel mult două culori active.
- **Sursa.** JURNAL v1, L501; memoriul, V14.

### 57 · 2026-05-27 · Reactorul 3D
- **Decizia.** Antetul plat a fost înlocuit de o sferă armilară (27–29.05.2026), apoi de un icosaedru cu 20 de fețe triunghiulare, construit în CSS (02.06.2026).
- **De ce.** O emblemă monumentală pentru pagina principală. Mai târziu a devenit ușa spre plan.
- *„Sfera din header — un veritabil mecanism armilar 3D astrolab, un motor holografic renascentist cyberpunk fluid”*
- **Mai târziu.** Intrarea 34 (reactorul deschide planul).
- **Sursa.** JURNAL v1, L584–604, geometria la L5834–5852; memoriul, V15.

### 58 · 2026-06-02 · Planul citește sursa vie
- **Decizia.** `recursive-blueprint.html` folosește `fetch` ca să aducă `style.css` și `script.js` brute și le arată pe un ecran împărțit, cu un mini-reactor la 55% lângă cod.
- **De ce.** Cum spune jurnalul, codul din spate „nu mai este ascuns în foldere inerte, ci devine chiar textul literar și didactic pe care studentul îl parcurge”.
- **Mai târziu.** Intrarea 7.
- **Sursa.** JURNAL v1, L720–742; fișierul e în `faa2631`; memoriul, V16.

### 59 · 2026-06-24 · CSS simplu, fără Sass ⚠ reconstruit: te rog confirmă
- **Decizia.** Nava e stilizată în CSS nativ (vanilla), fără Sass sau SCSS.
- **De ce.** Ce se studiază e exact ce rulează browserul; un preprocesor ar șterge comentariile pe care le citește pagina recursivă; CSS-ul modern are deja variabile și imbricare.
- *„am ales în mod deliberat să navigăm folosind CSS Nativ (Vanilla) în detrimentul hărților prefabricate de tip Sass/SCSS… codul pe care îl studiați în acest jurnal este EXACT materia primă pe care nava o execută în timp real.”* (manifestul foii de stil)
- **⚠** Manifestul nu are dată; 2026-06-24 e data primului commit care îl conține.
- **Sursa.** `style-ro.css` / `style-en.css` de pe v1, L1–30 (`@manifest`), `faa2631`; memoriul, V17.

### 60 · 2026-06-02 · Desktop și mobil despărțite
- **Decizia.** Stilurile pentru desktop stau în `min-width: 769px` (0.A), iar cele pentru mobil în `max-width: 768px` (0.B): două „emisfere”. Din 2026-06-26, amândouă sunt limitate la `@media screen`. Asta a răsturnat regula auditului din 02.06.2026 (întâi desktop, interogări doar pentru `max-width: 768px`), după o întrebare pusă în 03–11.06.
- **De ce.** Pe desktop, pagina e un ecran împărțit ca un IDE, iar pe mobil e un flux narativ; despărțite, niciuna nu trebuie să desfacă regulile `!important` ale celeilalte. Limitarea la `screen` ține 3D-ul și fundalurile întunecate departe de imprimantă.
- Întrebarea care a întors-o: *„Este izolarea stilului de desktop într-un Media Query dedicat (`min-width: 769px`) o decizie corectă sau o abatere necanonică de la regulile CSS?”*
- **Sursa.** JURNAL v1, L744–750 și L3971–3991; `c5daa10`; `docs/mobile-notes.md` de pe v1, §2; memoriul, V18.

### 61 · 2026-06-06 · Un singur `h1` pe pagină independentă; site-ul ca flotă
- **Decizia.** Fiecare pagină independentă are un singur `h1`: `index.html` în reactor, `recursive-blueprint.html` pentru că stă de sine stătător. Paginile de jurnal încep de la `h2`. Site-ul e descris ca o flotă: nava-mamă (*Nostromo*, `index`), navele de marfă (`*-log`) și nava de cercetare (planul).
- **De ce.** Semantică, SEO și o ierarhie pe care cititorii o pot învăța. Jurnalul îi atribuie ei imaginea navei de cercetare („nava mică, logico-dinamică, pe care ai intuit-o”).
- **Mai târziu.** Intrarea 5.
- **Sursa.** JURNAL v1, L5748–5823; memoriul, V19.

### 62 · 2026-06-03 · Un Codex didactic; valorile calibrate rămân neatinse
- **Decizia.** Din 03–15.06.2026, foaia de stil e reordonată ca un curs: subsolul vine înaintea modulelor 3D, ca un răgaz, așezarea stă separat de animație, iar modulul 11 e împărțit în 11.1–11.5. Nicio valoare calibrată nu e atinsă: culorile, umbrele și dimensiunile reglate de ea rămân. Elevii ei apar pentru prima oară drept cititori („Regula de Aur pentru Elevii Tăi”).
- **De ce.** Păstrează designul câștigat cu greu și face fișierul ușor de citit ca un curs.
- **Mai târziu.** Intrarea 11.
- **Sursa.** JURNAL v1, L763, L5338–5341, L5758, L5854–5863, L5877–5911; memoriul, V20.

### 63 · 2026-06-25 · O reparație pe mobil se închide doar pe un telefon adevărat
- **Decizia.** O reparație pe mobil se închide doar după un test pe un telefon adevărat; „merge în F12” nu contează. Reparațiile care au ținut: proprietatea independentă `scale:`, niciodată `transform: scale()`, pe orice e animat prin `transform`; `px`, nu `rem`, cu `text-size-adjust: 100%`; `nowrap` pentru rândul mașinii de scris, cu textul din hero scurtat ca să încapă.
- **De ce.** Emularea pe desktop nu reproduce felul în care telefoanele umflă textul sau desenează 3D-ul.
- *„…în ciuda unei randări absolut imaculate în interiorul simulatorului de desktop (`F12`)”* (TODO-ul ei; descris pe larg pe 2026-09-21, în `docs/mobile-notes.md`)
- **Sursa.** JURNAL v1, L5943–5951 (`842bb08`); `docs/mobile-notes.md` de pe v1, §3–§5 (`ea64993`); commit-urile `79f7622`, `96d28c3`, `5b47b0c`; memoriul, V21.

### 64 · 2026-06-24 · Git și un portofoliu
- **Decizia.** Proiectul a intrat în git ca `Manual_project`, cu un README de portofoliu. Pe 2026-06-25, notițele ei de studiu (`notite-manual.md`) au fost redenumite ca jurnal, „for portfolio architectural alignment” (mesajul commit-ului).
- **De ce.** Pe atunci era o piesă de portofoliu.
- **Mai târziu.** Intrarea 23: jurnalul a început ca notițele ei de studiu.
- **Sursa.** Commit-urile de pe v1 `faa2631`, `0b33c01` (README), `50069cd`; memoriul, V22.

### 65 · 2026-06-30 · Poezia și claritatea codului, în echilibru
- **Decizia.** Să găsească un echilibru între registrul literar și partea tehnică, care să le păstreze pe amândouă, și să plănuiască un jurnal în 5–6 secțiuni pentru ideile pe termen lung. E ultima intrare scrisă de mâna ei înainte de mutarea în noul depozit (commit pe 2026-07-20).
- *„TODO: definesc formula de echilibru între registrul literar și partea tehnică a proiectului, astfel încât să păstrez poezia, dar și claritatea codului.”*
- **Mai târziu.** Intrările 13 și 42.
- **Sursa.** JURNAL v1, L6006–6010; `884ddb0`; memoriul, V23.

### 66 · 2026-09-21 · Prima navă retrasă, cu redirecționare
- **Decizia.** v1 rămâne online, doar pentru citire, ca arhivă, cu redirecționare; toată munca merge în `digital-odyssey`. Două variante au fost respinse: o soră activă (efort dublu) și o copie înghețată fără etichetă (derutantă pentru cititori). Pe 2026-08-20, vechiul depozit fusese redenumit `digital-odyssey-v1`, ca numele să rămână liber.
- **De ce.** Succesoarea e o reimplementare completă a aceluiași proiect, cu structura EN/RO în oglindă, jurnale, un backlog și GitHub Actions.
- Registrul bilingv de decizii de pe v1 spune: *„Acest depozit… este oficial dezafectat, cu redirecționare”*
- **Sursa.** JURNAL v1, L6277–6324 (`60b3ba4`); redenumirea din README, `d44244f`; memoriul, V24.

## Intrări, în continuare

### 67 · 2026-11-20 · Nimic ilegal pe pagina de bibliografie
- **Decizia.** Bibliografia trece doar ce poate fi găsit pe căi legale.
- *"nothing that's illegal goes on that page."*
- **Sursa.** Cardul `t_2d86b8be`, comentariul `[HER 2026-11-20]`.

### 68 · 2026-11-21 · Niciun calendar real în JURNAL de la ZIUA 33; datele stau în concordanță
- **Decizia.** De la ZIUA 33 încoace, și în fiecare ZI nouă, JURNALUL nu mai poartă date reale din calendar. În antet scrie `socoteala navei:` (EN `ship's reckoning:`), nu o dată. Textul numără timpul pe ZILE și relativ (*a doua zi*, *la șase săptămâni după dimineața lansării*). Orele rămân, ca ceas al navei. Zilele săptămânii rămân doar acolo unde poartă un sens (miercurea, ziua lui Mercur, care este Hermes). Numele reale care conțin o dată (ramuri, căi de fișiere, mesaje de commit, titluri de PR) rămân, la fel și datele din istoria lumii (molia din 1947). Fiecare dată reală stă în [`journal-concordance.md`](journal-concordance.md), câte un rând pe ZI, cu legătură din registrul costurilor.
- *"the journal's form is the fiction (the space and time) and the content is real. So, real dates are pointless in this."* („Forma jurnalului e ficțiunea (spațiul și timpul), iar conținutul e real. Așa că datele reale n-au rost aici.”)
- Acordul ei, 2026-11-23: *"Real dates since DAY 33: follow @writer's advice."* („Datele reale de la ZIUA 33: urmați sfatul lui @writer.”)
- **Sursa.** Cardul `t_7f221902` (memoriul Scribului, `dates-memo.md`, recomandarea §c); cardul `t_9f964a15`, comentariul `[HER-OK 2026-11-23]`; `docs/work-deontology-ro.md` §10.3.
