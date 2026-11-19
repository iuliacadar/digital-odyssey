# Decizii — D::0dy55ey

Acest fișier păstrează deciziile care dau forma navei: ce s-a hotărât, de ce și unde scrie. Versiunea 1 (2026-11-19) a fost recuperată din JOURNAL, BACKLOG, documentele din `docs/`, `git log`, PR-urile îmbinate și panoul Kanban. Geamănul englezesc: [`DECISIONS-EN.md`](DECISIONS-EN.md).

**Cum adaugi o intrare:** dă-i numărul următor, pune-o la final (intrările merg de la cea mai veche), adaugă un rând în index și scrie aceeași intrare în ambele fișiere. Numește o sursă (commit, PR, ZIUA din JOURNAL, punct din BACKLOG, secțiune de document sau card de pe panou) și citează cuvintele Iuliei doar când o sursă le păstrează; citatele rămân în limba în care au fost spuse.

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
| 10 | 2026-07-29 | Întâi engleza, apoi clonarea și traducerea în română | limbă & traducere |
| 11 | 2026-07-29 | Fiecare bloc și fiecare linie comentate; repetiția e voită; nu se șterge nimic | comentarii & cod |
| 12 | 2026-07-30 | ZIUA 22 e jurnalul permanent de construcție | flux de lucru & git |
| 13 | 2026-08-05 | Jurnalul devine roman, scris împreună | seif & roman |
| 14 | 2026-08-05 | Seiful lui Seldon: romanul la bordul site-ului, în capsule | seif & roman |
| 15 | 2026-08-06 | Revizuirea ZILEI 22 amânată (BACKLOG 011); `docs/drafts/` păstrat până atunci | seif & roman |
| 16 | 2026-08-26 | Sezonul V: echipajul urcă la bord și fiecare ZI își numește naratorul | echipaj & buget |
| 17 | 2026-09-21 | URL-ul rădăcină: opțiunea 3, un `404.html`; `en/` e canonic | structura site-ului |
| 18 | 2026-09-21 | Publicare prin GitHub Actions; cele patru verificatoare păzesc fiecare PR | flux de lucru & git |
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
| 38 | 2026-11-19 | Capsulele deschise nu ar trebui să dea tot jurnalul | seif & roman |
| 39 | 2026-11-19 | Backend-ul e pus deoparte, nu respins | structura site-ului |
| 40 | 2026-11-19 | Întâi conținutul; cele nouă idei intră în backlog și rulează în valuri | echipaj & buget |
| 41 | 2026-11-19 | Un registru DECISIONS; revizuirea documentelor vine după el | flux de lucru & git |

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

### 10 · 2026-07-29 · Întâi engleza, apoi româna ↻ de verificat
- **Decizia.** Un fișier nou e desăvârșit întâi în engleză, apoi clonat în `ro/` și tradus.
- **De ce.** Un singur model terminat, apoi un geamăn fidel.
- **↻ de verificat.** §3 mai spune că comentariile `@tag` rămân în engleză, dar pe 2026-08-09 și 2026-08-16 comentariile RO au fost traduse în română (`e597d8c`, `3536495`), iar PR #20 a refăcut comentarii `@reason` în română. Care regulă e valabilă acum: te rog confirmă.
- **Sursa.** `docs/work-deontology.md` §3.

### 11 · 2026-07-29 · Fiecare bloc și fiecare linie comentate; nu se șterge nimic
- **Decizia.** Fiecare bloc și fiecare linie au comentariul lor, chiar și când tiparele se repetă; comentariile didactice lungi nu se șterg, nu se scurtează, nu se „aerisesc”. Cele greșite, învechite sau care doar repetă linia se semnalează și se corectează.
- **De ce.** Redundanța e acceptată și voită: fiecare repetare e încă o ocazie de învățare. Comentariile sunt metoda de învățare a proiectului.
- **Sursa.** `docs/work-deontology.md` §4; `CLAUDE.md`, „Deliberate decisions” 1 (`df4325d`, 2026-11-04); PR #14 (numere de module greșite, corectate).

### 12 · 2026-07-30 · ZIUA 22 e jurnalul permanent de construcție ↻ de verificat
- **Decizia.** Lucrările de structură, auditurile și reparațiile se adaugă la ZIUA 22, „cea mai lungă miercuri”; doar o nouă etapă narativă sau de învățare deschide o ZI nouă.
- **De ce.** Ca jurnalul să nu se umfle cu zile de reparații.
- **↻ de verificat.** De la ZIUA 33, echipajul își povestește munca în ZILE noi (ZIUA 41 și 42 consemnează PR-uri), iar intrarea 32 cere ca orice lucrare să intre în JOURNAL. Dacă §9 mai e valabil: te rog confirmă.
- **Sursa.** `docs/work-deontology.md` §9 (`61464c2`).

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
- **Sursa.** JOURNAL ZIUA 33 „A Word Before the Entry” (data navei 2026-08-26 → 2026-09-10); PR #12.

### 17 · 2026-09-21 · URL-ul rădăcină: opțiunea 3
- **Decizia.** Nu există `index.html` în rădăcină; rădăcina goală servește un `404.html` cu legături către `en/` și `ro/`; `en/index.html` rămâne canonic.
- **De ce.** E potrivirea cea mai simplă cu arhitectura existentă: nicio setare Pages, niciun flux de redirecționare.
- **Sursa.** BACKLOG 008, „Decision (implemented)”; JOURNAL ZIUA 17; commit `19822a3`.

### 18 · 2026-09-21 · Publicare prin GitHub Actions; patru verificatoare
- **Decizia.** Un push în `main` publică site-ul prin GitHub Actions. Fluxul Lint rulează cele patru verificatoare (`check-noopener.py`, `check-uc-banner.py`, `check-log-prose.py`, `check-parity.py`) la fiecare push și PR; ele se rulează și înaintea fiecărui commit.
- **De ce.** Fiecare paznic a fost scris pentru o regulă care chiar se încălcase.
- **Sursa.** Commit-urile `e5f4ce0`, `224fb0e`; PR #3; `CLAUDE.md`, „Working rules”; `DEPLOY.md`.

### 19 · 2026-11-06 · Doar Iulia îmbină
- **Decizia.** Nimic nu ajunge în `main` decât printr-un pull request. Doar Iulia îmbină, cu *Create a merge commit*; agenții nu îmbină și nu fac push în `main`, niciodată. Curățenia ei locală vine doar după semnalul PM-ului, pentru că echipajul lucrează într-o singură copie locală.
- **De ce.** O îmbinare înseamnă o publicare; și ea îmbină ca să învețe (intrarea 29).
- **Sursa.** `docs/git-workflow-ro.md` (PR #13, `c750b3a`); `DEPLOY.md`; predarea PM-ului, „Standing rules”.

### 20 · 2026-11-10 · Orice lucrare a echipajului trece printr-o poartă
- **Decizia.** Niciun card nu rulează până când Iulia nu aprobă un plafon pentru el; cuvintele ei se notează pe un card-poartă marcat `[HER-OK …]`; depășirea plafonului cere un nou acord.
- *"1st wave: I agree with the budget."* (2026-11-19)
- **De ce.** Ea hotărăște cât valorează o lucrare înainte ca banii să fie cheltuiți.
- **Sursa.** Predarea PM-ului, „Budget record” și actualizările 2026-11-10 → 11-19; cardurile-poartă `t_86d635f8`, `t_ccd7da9e`, `t_63f7e170`; comentariul de pe acest card.

### 21 · 2026-11-10 · Registrul costurilor
- **Decizia.** Ce cheltuiește călătoria se notează în `docs/ledger/cost-ledger-ro.md` (și în geamănul EN), cu un rând de Combustibil adăugat în ZILELE 33–39.
- **De ce.** Ca prețul fiecărei runde să se poată citi și compara cu estimarea.
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
- **◐ deschis.** Forma (o pagină pe acest site sau un site separat) e încă de hotărât.
- **Sursa.** Predarea PM-ului, „OPEN DECISION: The Arkhold Records” și actualizarea din 2026-11-10, 19:00; poarta `t_67a95c5f`; poarta de construcție `t_4bd9e35c`.

### 25 · 2026-11-10 · Regula traducerii ⚠ reconstruit: te rog confirmă
- **Decizia.** EN și RO nu trebuie să fie identice: frumos și limpede tehnic e mai bine decât cuvânt cu cuvânt, dar faptele trebuie să fie aceleași. Româna folosește ș și ț cu virgulă dedesubt. Căpitanul e neutru (niciodată „căpitana”); studenta e la feminin.
- **⚠** Scrisă ca regulă permanentă până la 2026-11-10; ziua în care a stabilit-o nu e consemnată.
- **Sursa.** Predarea PM-ului, „Standing rules”.

### 26 · 2026-11-10 · Niciun anime numit în poveste ⚠ reconstruit: te rog confirmă
- **Decizia.** În roman nu se numește niciun anime; locul lor e în CULTURE (raftul anime & manga).
- **⚠** Regulă permanentă până la 2026-11-10; ziua în care a fost stabilită nu e consemnată.
- **Sursa.** Predarea PM-ului, „Standing rules”; CULTURE-RO, raftul anime & manga (`20635d8`).

### 27 · 2026-11-10 · Fiecare comandă e explicată, de fiecare dată
- **Decizia.** Orice comenzi primește Iulia, variate și noi, bine-venite, vin cu câte un rând simplu: ce face fiecare și de ce acum, chiar dacă se repetă.
- **De ce.** Repetiția e felul ei de a memora; vrea să învețe cât mai multe comenzi. Regula a înlocuit ideea mai veche a unor „patru comenzi fixe”.
- **Sursa.** Predarea PM-ului, actualizarea din 2026-11-10, 23:10, „COMMANDS RULE”.

### 28 · 2026-11-10 · Intrări de jurnal semi-automate, mai târziu ⚠ reconstruit: te rog confirmă
- **Decizia.** Când va exista destul material, intrările de jurnal pot fi schițate semi-automat, niciodată complet automat.
- **⚠** Punct pus deoparte până la 2026-11-10; ziua acordului ei nu e consemnată.
- **Sursa.** Predarea PM-ului, „Other parked items” („her OK: semi-auto, not full”).

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
- **Sursa.** Predarea PM-ului, actualizarea din 2026-11-18 („Iulia added 2 rules”); QA `t_3aab23a9` a verificat-o pe PR #19 („552 added code lines all explained”).

### 32 · 2026-11-18 · Orice lucrare e consemnată în JOURNAL
- **Decizia.** Orice lucrare a echipajului e consemnată în JOURNAL, povestită ca o zi din călătorie (intrarea 35). Ce n-a fost încă povestit intră în următoarea intrare (PR #20 și verificarea ciornelor, 2026-11-19).
- **De ce.** JOURNAL e mărturia, metoda 3.
- **Sursa.** Predarea PM-ului, actualizările din 2026-11-18 și 2026-11-19, 15:00; JOURNAL ZIUA 41 (recuperare, cardul `t_4e0674d2`).

### 33 · 2026-11-18 · Cele trei metode
- **Decizia.** Nava predă în trei feluri: (1) **ce am învățat**, paginile canonice de jurnal, din notițele ei despre cărți și cursuri; (2) **cum e construită**, cu mâinile pe cod, planul recursiv; (3) **cum a fost**, frământările personale din căutarea cunoașterii: JOURNAL și The Arkhold Records.
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

### 36 · 2026-11-19 · Șase capsule fixe ◐ deschis
- **Decizia.** Seiful lui Seldon păstrează șase capsule fixe, câte una pentru fiecare volum de pe pagina principală. Capsulele Database, UX și Delivery așteaptă până se termină jurnalul; apoi intrările rămase se împart între ele.
- **De ce.** Se potrivesc cu cele șase volume ale metodei 1.
- **◐ deschis.** Ce se întâmplă cu ZILELE 43 și următoarele; nota învechită „When the captain writes DAY 27…” (`daysWritten` 27) e încă de corectat.
- **Sursa.** Cardul `t_499b6977`, comentariul `[HER DECISION 2026-11-19]`.

### 37 · 2026-11-19 · Inspirația: Arcade Explorers
- **Decizia.** Inspirația navei e consemnată: *Arcade Explorers* (Dell/Laurel-Leaf, 1985, Seth McEvoy și Laure Smith), cărți-joc SF în care cititorul tastează programe în BASIC. Doar legături, nicio citare mai lungă de un rând.
- *"The pathway in these books is in the opposite direction than our path. We go from canonical to gamish and they go the other way around."*
- **Sursa.** Cardul `t_5cc95f00`, comentariul `[HER 2026-11-19]`.

### 38 · 2026-11-19 · Capsulele deschise nu ar trebui să dea tot jurnalul ◐ deschis
- **Decizia.** Legătura dintr-o capsulă deschisă către întregul JOURNAL de pe GitHub n-a fost alegerea ei; în cuvintele ei, *"defeats the purpose"*.
- **◐ deschis.** Scoaterea legăturii sau trimiterea ei doar la capitolul capsulei: alegerea ei e încă în așteptare.
- **Sursa.** Predarea PM-ului, actualizarea din 2026-11-19, 16:15; cardul `t_985cb67b`.

### 39 · 2026-11-19 · Backend-ul e pus deoparte, nu respins
- **Decizia.** Păstrarea progresului cititorului (cheile seifului) și a notițelor din terminalul de note dincolo de un singur browser cere un backend; acesta e pus deoparte, nu respins.
- *"we don't have a backend to this project yet... We have to work on these two tasks too"* · *"something that we should discuss at large. Parked for now, but not rejected."*
- **Sursa.** Cardul `t_984c84c3` (corpul și comentariul `[HER 2026-11-19]`).

### 40 · 2026-11-19 · Întâi conținutul; ideile rulează în valuri
- **Decizia.** Prioritatea ei e conținutul (notițe de studiu → pagini de jurnal HTML/CSS); revizuirea site-ului așteaptă. Cele nouă idei din revizuirile structurii sunt primite în backlog și fiecare rulează doar într-un val, cu plafonul ei.
- *"OK to the 9 ideas"* · *"1st wave: I agree with the budget."*
- **Sursa.** Poarta `t_d6f19c12` (comentariul); predarea PM-ului, actualizările 2026-11-19, 16:15 → 17:00; comentariul de pe acest card.

### 41 · 2026-11-19 · Un registru DECISIONS, apoi revizuirea documentelor
- **Decizia.** Nava ține acest registru DECISIONS (EN + RO), așa cum face și Strigoi. Revizuirea documentelor care rămân vine mai târziu, după această recoltă, ca nicio sursă să nu fie ștearsă înainte ca deciziile din ea să fie consemnate.
- *"I didn't create for digital-odyssey a separate DECISIONS document as we did for strigoi, and I regret that."*
- **Sursa.** Cardul `t_7e6d4581` (corpul); predarea PM-ului, actualizarea din 2026-11-19, 17:00.
