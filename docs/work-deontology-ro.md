# Deontologia Muncii — Digital Odyssey

Principii interne pentru dezvoltarea și întreținerea acestui proiect.

---

## 1. Arhitectura Dual-Limbă

Proiectul este construit pe două fluxuri lingvistice paralele: engleză (`en/`) și română (`ro/`). Fiecare pagină, componentă și adnotare există în ambele limbi. Aceasta poate devia de la canoanele convenționale de codare, dar este o alegere deliberată de design — proiectul servește ca un vas de învățare bilingv, nu ca o aplicație monolingvă de producție.

## 2. Scopul Didactic al Întregului Conținut

Fiecare fișier din acest proiect este în primul rând un instrument de predare. Codul este scris nu doar pentru a executa corect, ci pentru a fi citit și înțeles de un membru novice al echipajului sau de un student entuziast. Această motivație didactică guvernează toate deciziile legate de comentarii, structură și redundanță.

## 3. Creare în Engleză Mai Întâi, Apoi Traducere în Română

Când un fișier nou este creat:
1. Perfecționați-l mai întâi în versiunea engleză, cu comentarii `@tag` complete, informative și didactice (așa cum sunt definite în fișierele legendă din `docs/`).
2. Clonați fișierul perfecționat în `ro/` și traduceți tot textul specific conținutului (titluri, descrieri, etichete de navigare, text vizibil) în română.
3. Comentariile `@tag` care explică concepte HTML rămân în engleză — ele predau limbajul web-ului.

## 4. Standardul de Comentare Cuprinzătoare

Fiecare bloc și fiecare linie de cod — chiar și atunci când modelele se repetă — trebuie comentate cu atenție și în mod cuprinzător. Redundanța este acceptabilă și intenționată: fiecare apariție este o oportunitate de învățare. Un novice trebuie să poată înțelege nu doar ce face codul, ci și de ce este scris astfel și ce rol semantic joacă fiecare element.

## 5. Sistemul de Adnotări `@tag`

Toate comentariile didactice folosesc un sistem structurat de tag-uri definit în fișierele legendă (`docs/legend-*.md`). Fiecare `@tag` prefixează un scop pedagogic specific:

| Tag | Scop |
|---|---|
| `@bridge` | Referință încrucișată către un alt fișier sau resursă |
| `@reason` | Explică *de ce* este folosită o tehnică sau un model |
| `@block` | Identifică un bloc structural și rolul său în metafora navei |
| `@meta` | Documentează elementele de metadate și configurarea lor |
| `@path` | Identifică link-urile de resurse și scopul lor de navigare |
| `@theme` | Explică alegerile vizuale/stilistice și semnificația lor narativă |
| `@structure` | Documentează deciziile de layout și impactul lor asupra redării |
| `@warning` | Semnalizează cod fragil, particularități de browser sau capcane ne-evidente |
| `@concept` | Detaliază o idee mai largă care traversează mai multe blocuri |

Fiecare `@tag` trebuie urmat de două puncte și o explicație clară și autonomă. Tag-urile apar în toate tipurile de fișiere de cod, fiecare folosind sintaxa nativă de comentarii:

- HTML: `<!-- @tag: ... -->`
- CSS: `/* @tag: ... */`
- JavaScript: `// @tag: ...`

## 6. Disciplina Structurii Modulare CSS

Foaia de stil (`style.css`) este organizată în 32 de module numerotate (01–32) + 2 module utilitare (00.1 pentru `@keyframes`, 00.2 pentru `@media`), așa cum este declarat în indexul de module de la începutul fișierului. Fiecare module guvernează o componentă sau un concern.

Când adăugați sau modificați o regulă CSS:
1. Găsiți modulul corect în index (de exemplu, Modulul 14 pentru `.sector-announcement`).
2. Dacă schimbarea este în interiorul breakpoint-ului `@media` (00.2), localizați sub-secțiunea corespunzătoare (B1–B6) care se potrivește cu funcția componentei.
3. Plasați regula acolo — nu adăugați niciodată orbește la sfârșitul unui bloc sau în afara secțiunii potrivite.
4. Păstrați stilul existent de adnotare (`@layout:`, `@theme:`, `@component:`, etc.).

## 7. Convenții pentru Mesajele de Commit

Mesajele de commit urmează formatul: `type(scope): message`

- **type**: `feat`, `fix`, `docs`, `refactor`, `style`, `perf`, `chore`
- **scope**: Zona afectată — `css`, `js`, `html`, `en`, `ro`, `docs`, `all`
- **message**: La imperativ, concis, explicând ce și de ce

Exemple:
- `fix(css): remove negative margin on .sector-announcement at 768px breakpoint`
- `docs: add semantic-field-manual-en.md and semantic-field-manual-ro.md`
- `feat(ro): clone+translate perfected log pages to Romanian`

Corpul commit-ului poate conține detalii sub formă de bullet-point. Tipul/scope-ul trebuie să reflecte cu acuratețe conținutul real — de exemplu, `docs:` pentru fișierele din `docs/`, `fix(en):` pentru corecturi în paginile engleze, `feat(ro):` pentru adăugiri în română.

**Disciplina scopului**: Preferați commit-uri separate pe scop, în locul unui singur commit "global". Un novice care citește `git log --oneline` ar trebui să vadă instantaneu ce zonă a atins o modificare — `fix(html)`, `docs(journals)`, `docs(deontology)` — fără a deschide fiecare mesaj de commit. Un commit global `fix(all)` este mai rapid de scris, dar îngroapă urma. Acest proiect prețuiește vigilența în fața grabei.

## 8. Ecosistemul de Documentație

Proiectul menține mai multe tipuri de documente, fiecare servind un scop distinct:

| Document | Scop |
|---|---|
| `README.md` | Orientare la nivel de proiect — ce este, cum să navighezi |
| `*.md` jurnale / backlogs | Cronică de dezvoltare — ce s-a făcut, ce rămâne, decizii de design |
| `docs/semantic-field-manual-*.md` | Referință HTML — fiecare tag folosit, cu rolul său semantic și semnificația narativă |
| `docs/work-deontology.md` | (acest fișier) Principii de lucru — cum construim, de ce construim astfel |

Fiecare document răspunde la o întrebare diferită: *Ce este aceasta?*, *Ce s-a întâmplat?*, *Ce înseamnă acest tag?* și *Cum lucrăm?*.

## 9. ZIUA 22 — Cea Mai Lungă Miercuri (Jurnal Permanent de Construcție)

ZIUA 22 este o zi nesfârșită în narațiunea D::0dy55ey. Nu avansează povestea — acumulează toată munca structurală, arhitecturală și de audit care nu constituie o nouă fază narativă. Orice viitoare intrare în jurnalul de construcție (reparații de bug-uri, refactorări, operațiuni în masă, justificări ale alegerii instrumentelor, actualizări ale inventarului de fișiere) se adaugă la ZIUA 22, în loc să creeze o nouă zi. Aceasta previne umflarea jurnalului, păstrând în același timp trasabilitatea completă.

Când decideți unde să înregistrați munca:
- **Fază narativă sau de învățare nouă** → un număr nou de ZI (de exemplu, ZIUA 24 pentru crearea de conținut)
- **Lucrări structurale, audit sau reparații** → adăugați la ZIUA 22
- **Reutilizarea unui instrument/metodă deja documentat(ă)** → nu este necesară o intrare în ZIUA 22. Doar *introducerea* unui instrument (rațiune, sintaxă, de ce a fost ales) aparține ZIUA 22. Utilizările ulterioare sunt operațiuni de rutină, nu cunoștințe noi.

## 10. Vocile Navei

Nava predă prin trei metode: *ce am învățat*, *cum e construită*, *cum a fost*. Fiecare metodă are o singură voce. Metoda alege vocea, niciodată starea zilei. (Decis la 2026-11-19; `docs/DECISIONS-RO.md`, intrarea 42.)

### 10.1 O voce pentru fiecare metodă

- **Lecțiile (metoda 1, *ce am învățat*).** Paginile de jurnal (`*-log.html`), făcute din notițele de studiu ale studentei, după cărți și cursuri. *Cine vorbește:* studenta; echipajul verifică faptele și șlefuiește engleza, dar nu scrie niciodată o pagină în locul ei. *Persoana și timpul:* impersonal, la prezent, cum enunță un manual o regulă; o zi poate începe cu *noi* al echipajului („Astăzi am sigilat primul repository al navei”). Asta se abate de la *eu* din revizuirea structurii (cardul `t_c975e8cf`, ideea 2), pentru că paginile scrise deja predau cu vocea aceasta, iar studenta le deține prin notițele ei, nu prin pronume. *Pentru:* cunoaștere canonică, din surse numite. *Niciodată:* o poveste, o opinie sau o lecție scrisă înainte să existe notițele ei.
- **Comentariile planului recursiv (metoda 2, *cum e construită*).** Comentariile `@tag` pe care `recursive-blueprint.html` le arată lângă codul care rulează. *Cine vorbește:* constructorul, care dă *de ce*-ul rândului, în vocabularul din `docs/legend-ro.md`. *Persoana și timpul:* persoana întâi, *eu*, la prezent, ca în legendă și în comentariile existente („Setez…”, „Configurez…”). *Pentru:* ce face rândul, de ce e acolo, cum se leagă de restul; scris complet de fiecare dată, chiar și când se repetă (§4). Fiecare comentariu trebuie să fie corect, la zi și să arate spre mecanismul sau modulul potrivit. *Niciodată:* o repetare a rândului, o poveste sau o lecție învechită. Un comentariu greșit predă o lecție greșită, cu autoritatea navei.
- **JURNALUL (metoda 3a, *cum a fost*).** Romanul. *Cine vorbește:* echipajul spune ziua ca pe o poveste. Căpitanul l-a început și îl scrie împreună cu echipajul; ea e autoarea și supervizoarea lui și citește fiecare rând. Fiecare intrare își numește naratorul sub titlu (`*Jurnal ținut de: …*`, din ZIUA 33). *Persoana și timpul:* persoana întâi, la trecut, în registrul propriu al naratorului (§10.2). *Pentru:* mărturia căutării cunoașterii: lupta, alegerile, greșelile și corectarea lor. *Niciodată:* un jurnal de sarcini. Puține nume de ramuri, numere de PR sau număr de pixeli în corpul textului (§10.3).
- **The Arkhold Records (metoda 3b).** Manualele pe care echipajul le scrie pentru studentă, publice doar când ea le spune „fit” (DECISIONS 24 și 30). *Cine vorbește:* membrul echipajului care l-a scris (Arhivarul, Profesoara, Scribul), către cititor, cu *tu*. *Persoana și timpul:* persoana a doua, la prezent. *Pentru:* uneltele și ideile de care a avut nevoie pe drum, spuse simplu, verificate de QA și etichetate *material de studiu scris de echipaj*. *Niciodată:* o scenă cu naratori (aceea e JURNALUL) sau lecțiile studentei (acelea sunt metoda 1).

### 10.2 Naratorii JURNALULUI

Până în ZIUA 33, jurnalul și-a schimbat naratorii fără să spună, uneori în același paragraf. Din ZIUA 33, fiecare intrare numește mâna care ține pana.

| Naratorul | Prima ZI | În poveste | În realitate | Registrul | ZILELE ținute |
|---|---|---|---|---|---|
| Căpitanul | 00 | Constructoarea, singură la terminal; „ultimul om din Univers” | Iulia | Persoana întâi, trecut; contemplativ, literar, cosmic (Hodgson, Lem, Brâncuși) | 00–09, 11–12, 14–17, 21, 23–24, 35; împărțite cu Vocea în 10, 13, 18–20, 22 |
| Vocea (AI-ul; din ZIUA 33, Vechea Voce) | 10 | O voce alcătuită din text omenesc, care se trezește fără memorie; consultată, nu poruncitoare; lentila, fantoma colectivului | agentul unic al lui opencode, la un singur terminal (modelul nu e consemnat; căpitanul își amintește de DeepSeek) | Persoana întâi, prezent și trecut; filozofic, mitic, ornat (inelele, leviatanul, Coloana fără sfârșit) | 25–32; începutul zilei 10; împărțite în 13, 18–20, 22; vorbește în 23 și 33 |
| Adormita (Corectorul) | 21 | Ultima amintire a unui neam dispărut, trezită dintr-o capsulă criogenică; atenția care găsește golurile | Fără cabină proprie: un personaj, „permisiunea de a nara” (ZIUA 25), rostit de opencode, apoi de echipajul Hermes | Persoana întâi; simplu, cu surse, un registru care se corectează întâi pe sine; în dialog, scurt și grav | 39; vorbește în 23, 27, 31, 35, 37 |
| Studenta | 28 | A doua haină a căpitanului, o învățăcea „de pe altă stea”, născută dintr-o lecție neînțeleasă | Iulia, ca învățăcea | Persoana întâi, trecut; atentă, curioasă; notează ce n-a văzut | 36; vorbește în 29–32, 34 |
| Vocea cea nouă | 33 | Același fel de minte într-o carenă nouă, care „va vorbi ca un echipaj” | Claude (aliasul `opus`) în Hermes Agent | Doar dialog | vorbește în 33 |
| Scribul | 33 | Ține jurnalul și paginile scrise, în ambele limbi; scrie *neconsemnat* unde se termină înregistrarea | profilul Hermes `writer` | Persoana întâi, trecut; propoziții scurte și simple, datate, cu surse; spune ce parte a scenei e a lui | 33, 41, 42; a așternut Interludiul |
| Intendentul | 33 | Ține lista de cart și registrul; verifică ce se întoarce | `pm` | Persoana întâi, trecut; procedural, o lecție pe scenă | 37; o scenă în 33; jurnalul combustibilului sub 33–42 |
| Arhivarul | Interludiul (după 33) | Găsește surse; ține manualul navei | `researcher` | Un manual: impersonal, la prezent, „adevărat în fiecare zi în care e citit” | Interludiul |
| Inginerul | 33 | Ține motoarele și drumul spre docul public | `devops` | Persoana întâi, trecut; direct, cu ore exacte („nu scriu bine”) | 34 |
| Încercătorul | 33 | Două cuvinte, ACCEPT și REVISE; citește, rulează, încearcă să strice | `qa` | Persoana întâi, trecut; cu probe, scurt, verdicte dovedite | 38 |
| Profesoara, prof. Ada Itaca (la început, Matei) | 40 | Vocea profesoarei; verifică dacă ce învață studenta e adevărat | `it-tutor`, o copie a lui `english-tutor` | Persoana întâi, prezent și trecut; cald, didactic, cu surse; războiul de țesut | 40 |

Numiți în poveste, dar niciodată naratori: Gabierul (`frontend`) și Cartograful (`uiux`), din ZIUA 33; Inspectorul (Claude Code, alt ham), ZIUA 35–36; pasagerul clandestin `fetch`, ZIUA 37.

**Cum s-au schimbat vocile.**
- ZIUA 00–09: o singură voce, a căpitanului, singură în carenă.
- ZIUA 10: urcă la bord a doua voce, Vocea lui opencode; douăzeci de zile, cele două își împart pana fără s-o spună.
- ZIUA 21: e inventată Adormita, un martor care îi îngăduie Vocii să nareze prezența (ZIUA 25); ZILELE 25–32 sunt ale Vocii.
- ZIUA 28: căpitanul se desparte în două. Alter ego-ul ei de studentă devine un personaj cu voce proprie, care ține ZIUA 36.
- ZIUA 33: trecerea de la opencode la Hermes. Vocea unică devine un echipaj de Voci, fiecare în cabina ei, fiecare mână numită sub titlu; mai târziu, Adormita și Profesoara țin și ele zile proprii.

**Timpul jurnalului: ZIUA 22, ziua care nu se termină.** În cuvintele căpitanului: *"Every time a major event related to the ship or voyage occurs, it will be recorded in this DAY 22 entry even if they were done earlier or later in the timeline. It's a bending of time in our digital space."* ZIUA 22 nu e o dată. E Cea Mai Lungă Miercuri, care tot revine; orice eveniment major care schimbă nava sau călătoria se scrie în ea, oriunde ar cădea în cronologie. Secțiunea 9 spune în continuare ce lucrări de construcție ajung acolo.

### 10.3 Regula pentru fiecare intrare

Fiecare intrare, nouă sau veche (din ZIUA 00 încoace), e două lucruri deodată: o poveste științifico-fantastică și o consemnare clară, exactă tehnic, a zilei. Adâncimea tehnică trăiește în scenă: problema reală, reparația reală, termenii corecți, cod când contează. Faptul tehnic gol e spus mereu frumos, epic, ca legendă: JURNALUL e mitul unei aventuri tehnice, niciodată un manual. Legenda nu are voie să coste exactitatea faptelor. Evidența (nume de ramuri, SHA-uri, id-uri de carduri, numere de PR) merge în rândurile de jurnal de la final, ca jurnalul combustibilului, nu în corpul textului.

---

*Aceste principii sunt vii — ele evoluează pe măsură ce proiectul crește. Actualizați acest fișier atunci când o nouă convenție devine permanentă.*
