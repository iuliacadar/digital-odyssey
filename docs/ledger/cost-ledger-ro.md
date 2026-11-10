# Registrul costurilor — cât combustibil a ars călătoria

*Ținut de Intendent (profilul `pm`). Întocmit prima oară pe 2026-11-10, după reconstituirea
Arhivarului (cardul `t_718da2ab`). Acoperă intervalul de pe 2026-08-26, ziua în care Hermes a urcat
la bord, până pe 2026-11-10, ora 17:00 EET.*

Jurnalul spune ce a făcut echipajul. Registrul acesta spune cât a costat. Jurnalul nu poartă
tabelele de aici; la sfârșitul zilelor ZIUA 33–ZIUA 39 are câte un rând scurt, *Jurnalul
combustibilului*, care trimite aici.

Versiunea engleză: [`cost-ledger.md`](./cost-ledger.md)

## Cum se citește

De fiecare dată când un membru al echipajului lucrează, mașina din spatele lui citește și scrie
text, iar textul acesta se numără în **tokeni** (bucăți mici de cuvinte). Hermes, sistemul navei pe
care rulează echipajul, consemnează tokenii fiecărei sesiuni de lucru și estimează cât ar costa la
**prețurile publice ale API-ului** producătorului modelului. Estimarea aceasta, în dolari americani,
este ceea ce adună registrul. **Nu este o factură**: de pe la 2026-11-05 cea mai mare parte a muncii
rulează pe un abonament Claude, așa că ce se plătește de fapt e abonamentul, iar limita reală e cota
de utilizare a abonamentului. Citiți dolarii ca pe un *combustibil*: cât motor a cerut o bucată de
muncă, ca o rundă să poată fi comparată cu alta și ca un buget să poată fi stabilit înainte să
înceapă runda. Un număr marcat **exact** a fost prețuit de Hermes chiar când a rulat munca, pentru o
sesiune care sigur e a acestui proiect. Un număr marcat **estimat** e al Arhivarului: fie Hermes a
păstrat tokenii, dar nu și prețul, fie sesiunea a fost împărțită cu alte proiecte și se numără doar
partea acestui proiect. Fiecare tabel de mai jos e o **rundă**: un set de carduri pe care căpitanul
le-a aprobat împreună, de obicei cu un buget. Un card poate avea nevoie de mai multe sesiuni.

## Totalurile

*Sumele din registrul acesta sunt scrise cu punct zecimal și cu semnul `$` în față, ca în datele din
care vin, ca să poată fi comparate rând cu rând cu versiunea engleză.*

De pe 2026-08-26 proiectul acesta a ars cam **$258.89**: **$119.91 exact** și **$138.99 estimat**.
Asta înseamnă cam 4% din tot ce a făcut Hermes pe mașina aceasta în aceleași săptămâni.

| rundă | rânduri | exact | estimat | total |
|---|---:|---:|---:|---:|
| Construcția din septembrie (înainte de bugete) | 49 | $20.08 | $114.78 | **$134.85** |
| Runda jurnalului (plafon $61, ridicat la $66) | 27 | $49.25 | $0.00 | **$49.25** |
| Runda reparațiilor (plafon $40) | 18 | $30.58 | $0.00 | **$30.58** |
| Coordonarea Intendentului (interactivă) | 4 | $0.00 | $24.21 | **$24.21** |
| Runda de recenzie (plafon $45) | 6 | $12.91 | $0.00 | **$12.91** |
| Numerele mecanismelor (2026-11-10) | 2 | $3.97 | $0.00 | **$3.97** |
| Lecția din curriculum (2026-10-29) | 2 | $1.68 | $0.00 | **$1.68** |
| Runda 3: registrul acesta + manualul Obsidian (plafon $20), *instantaneu* | 2 | $1.44 | $0.00 | **$1.44** |
| **total** | 110 | $119.91 | $138.99 | **$258.89** |

**Față de bugete.** Aici se numără doar cardurile echipajului. Coordonarea mea are rândul ei.

| rundă | buget | cheltuit de carduri | parte din buget |
|---|---:|---:|---:|
| Runda reparațiilor | $40.00 | $30.58 | 76% |
| Runda de recenzie | $45.00 | $12.91 | 29% |
| Runda jurnalului | $66.00 | $49.25 | 75% |
| Runda 3 (încă în desfășurare) | $20.00 | $1.44 | 7% |

Coordonarea mea pentru rundele acestea a costat $10.27 pe 11-05, $9.56 pe 11-06 și $4.38 pe 11-10
(până la 17:00). Adunată la carduri, reparațiile + recenzia + jurnalul fac $92.75 + $24.21 =
**$116.95**, sub bugetele lor însumate, de $151.

**Pe zile**

| data | rânduri | exact | estimat | total |
|---|---:|---:|---:|---:|
| 2026-08-26 | 1 | $0.00 | $2.80 | **$2.80** |
| 2026-09-10 | 15 | $4.16 | $20.85 | **$25.01** |
| 2026-09-21 | 32 | $14.99 | $91.13 | **$106.12** |
| 2026-09-23 | 1 | $0.93 | $0.00 | **$0.93** |
| 2026-10-29 | 2 | $1.68 | $0.00 | **$1.68** |
| 2026-11-05 | 18 | $25.03 | $10.27 | **$35.30** |
| 2026-11-06 | 31 | $57.38 | $9.56 | **$66.94** |
| 2026-11-10 | 10 | $15.75 | $4.38 | **$20.13** |
| **total** | 110 | $119.91 | $138.99 | **$258.89** |

În nicio altă zi nu s-a lucrat la proiect. Între 2026-09-23 și 2026-10-29 tabla a stat liniștită.

**Pe cabine**

| cabina | profilul | total |
|---|---|---:|
| Gabierul | `frontend` | $95.76 |
| Scribul | `writer` | $60.15 |
| Intendentul | `pm` | $46.93 |
| Încercătorul | `qa` | $37.51 |
| Inginerul | `devops` | $8.09 |
| Arhivarul | `researcher` | $7.66 |
| Cartograful | `uiux` | $1.87 |
| profilul default | `default` | $0.93 |

**Pe feluri de muncă:** construcție $105.73 · scris $60.15 · coordonare $47.86 · QA $37.51 · cercetare $7.66.

## Cât costă un REVISE

Un REVISE costă cardul de reparație plus re-verificarea Încercătorului. Recenzia care a *găsit*
problema e muncă planificată și nu se numără aici.

| REVISE | cardul de reparație | cardul de re-verificare | cost |
|---|---|---|---:|
| 1. PR #6, reparația #8, 2 puncte (11-05) | `t_395f0c44` $1.48 | `t_c3043989` $1.25 | **$2.74** |
| 2. PR #12, Sezonul V, 5 puncte (11-06) | `t_fc537220` $0.78 | `t_6be39a89` $1.65 | **$2.44** |
| 3. PR #13, ghidul Git/PR, `git branch -d` (11-06) | `t_3f438aea` $0.68 | `t_fd510b32` $1.11 | **$1.79** |
| 4. PR #12, ZIUA 36, `git branch -d` (11-06) | `t_05b59ef1` $0.45 | `t_d1c32bd8` $0.93 | **$1.38** |
| **cele patru REVISE din 11-05/06** | | | **$8.34** |
| 5. PR #12, anii Ghost in the Shell + „one cabin at a time” (11-10) | `t_fc4344fb` $0.47 | `t_24db5f7e` $0.56 | $1.03 |

Refacerea a fost ieftină: cele patru REVISE au costat împreună cam 9% din cardurile celor trei runde
cu buget. Reparația *nota* → *notița* (`t_4a093bbd` + `t_6b01b313`, $1.73) a fost corectura
căpitanului însuși, nu un REVISE al Încercătorului, așa că nu apare în tabelul acesta.

## Rundele, card cu card

Un rând pentru fiecare card. Titlurile cardurilor sunt copiate de pe tablă, în engleză, așa cum
sunt scrise acolo, și scurtate unde erau lungi. „Sesiuni” înseamnă de câte sesiuni de lucru a avut
nevoie cardul. Id-urile sesiunilor sunt lăsate deoparte intenționat.

### 1. Construcția din septembrie, înainte de orice buget (2026-08-26 – 2026-09-23)

Tabla a fost pregătită pe 08-26. Marea zi de construcție a fost 09-21, dimineața lansării. Cele mai
multe prețuri din septembrie sunt ale Arhivarului: Hermes a păstrat tokenii, dar nu și prețul, iar
Arhivarul i-a prețuit cu tabelul lui Hermes însuși.

| data | card | cabina | ce a făcut cardul | sesiuni | cost | bază |
|---|---|---|---|---:|---:|---|
| 2026-08-26 | — | Intendentul | PM: KanbanCreate | 1 | $2.80 | estimat |
| 2026-09-10 | — | Intendentul | PM: Draft learning curriculum from session 20260828_132309_427b57 | 1 | $17.55 | estimat |
| 2026-09-10 | — | Intendentul | PM: untitled | 1 | $0.52 | estimat |
| 2026-09-10 | `t_1a5cd7d2` | Intendentul | [Must] FOUNDER-ONLY: begin the HTML reading phase — fill … | 1 | $0.55 | estimat |
| 2026-09-10 | `t_1f997aa8` | Inginerul | Commit the 5 uncommitted files left by cards t_754213fb / t_cd0152b5 / … | 2 | $0.99 | exact |
| 2026-09-10 | `t_48b893a2` | Încercătorul | [Should] QA: verify ro/bibliography.html renders in a browser — never … | 1 | $0.49 | exact |
| 2026-09-10 | `t_5861707a` | Intendentul | [GATE] NEVER COMPLETE — permanent block anchor for founder-only cards | 1 | $0.55 | estimat |
| 2026-09-10 | `t_754213fb` | Intendentul | [Done] CULTURE-EN/RO: new subsection 'The written machine' — 7 entries … | 1 | $0.65 | estimat |
| 2026-09-10 | `t_b5f46f5c` | Gabierul | [Must] Comment-density debt: bring bibliography.html up to … | 3 | $1.84 | exact |
| 2026-09-10 | `t_d4dcdb04` | Intendentul | [Done] Curriculum drafted: docs/CURRICULUM.md + RO twin (macro learning … | 1 | $1.03 | estimat |
| 2026-09-10 | `t_f7b0fa80` | Scribul | [Could] Scaffold docs/notes/typescript/ note sheets for the 4 new … | 3 | $0.84 | exact |
| 2026-09-21 | — | Scribul | writer: EN+RO narrative content for log-page day entries (delegated … | 6 | $5.48 | estimat |
| 2026-09-21 | `t_0246866c` | Încercătorul | Verify BACKLOG-EN.md #008 acceptance conditions are fully met | 1 | $0.37 | exact |
| 2026-09-21 | `t_0434a9de` | Inginerul | Implement root-URL strategy: bare root 404, en/ canonical | 1 | $0.58 | exact |
| 2026-09-21 | `t_0596bb46` | Gabierul | Implement dynamic sidebar generation in en/script.js | 1 | $14.82 | estimat |
| 2026-09-21 | `t_1aab9313` | Scribul | Author real content for log pages 35-46 (12 topics, EN+RO) — prereq for … | 1 | $1.33 | exact |
| 2026-09-21 | `t_268ea82f` | Inginerul | Automate or document one-command deploy process | 1 | $0.61 | exact |
| 2026-09-21 | `t_2b50bcfe` | Încercătorul | Verify byte-identical EN/RO sidebar generation and no manual lists … | 1 | $1.95 | exact |
| 2026-09-21 | `t_2c5567aa` | Gabierul | Implement dynamic sidebar generation in ro/script.js (mirrored) | 1 | $15.87 | estimat |
| 2026-09-21 | `t_470b45d2` | Gabierul | Add rel=noopener noreferrer to all target=_blank links | 1 | $8.08 | estimat |
| 2026-09-21 | `t_5400e63b` | Gabierul | Fix: strip stale hand-authored sidebar <li> from … | 1 | $2.56 | estimat |
| 2026-09-21 | `t_57384053` | Încercătorul | Fix 3 RO log pages with meta-description/og:description desync | 1 | $0.49 | exact |
| 2026-09-21 | `t_594cc53f` | Scribul | Write meta description/keywords for log pages 13-23 | 1 | $1.78 | exact |
| 2026-09-21 | `t_646b1f9b` | Scribul | [Should] Per-page meta description/keywords sweep (BACKLOG #010) | 1 | $0.07 | exact |
| 2026-09-21 | `t_6dd78890` | Gabierul | Add Under Construction banner to empty/lorem log pages | 2 | $37.57 | estimat |
| 2026-09-21 | `t_71523c53` | Gabierul | Audit current sidebar link logic and page h3 structure | 1 | $6.73 | estimat |
| 2026-09-21 | `t_a53a1a97` | Scribul | Write meta description/keywords for log pages 1-12 | 1 | $1.25 | exact |
| 2026-09-21 | `t_aba8a329` | Scribul | Write meta description/keywords for log pages 35-46 | 5 | $2.02 | exact |
| 2026-09-21 | `t_c712ce9f` | Scribul | Write meta description/keywords for log pages 24-34 | 1 | $3.11 | exact |
| 2026-09-21 | `t_dabc9e4a` | Încercătorul | Audit all 46 pages for meta uniqueness and placeholder removal | 1 | $0.50 | exact |
| 2026-09-21 | `t_e66e7729` | Scribul | [Should] Dynamic sidebar index generation (BACKLOG #013) | 2 | $0.75 | exact |
| 2026-09-21 | `t_eab36222` | Scribul | [Must] Launch prep: noopener, empty log banners, deploy config (BACKLOG … | 1 | $0.17 | exact |
| 2026-09-23 | `t_1cace2c8` | Scribul | [Should] Bibliography: add MDN server-side intro + web.dev Rendering on … | 1 | $0.93 | exact |
| | | | **total rundă**: 49 sesiuni, $20.08 exact + $114.78 estimat | | **$134.85** | |

### 2. Lecția din curriculum (2026-10-29)

| data | card | cabina | ce a făcut cardul | sesiuni | cost | bază |
|---|---|---|---|---:|---:|---|
| 2026-10-29 | `t_2d5e4f79` | Încercătorul | [Should] QA (read-only): the 'How the web works' curriculum item, EN + … | 1 | $0.55 | exact |
| 2026-10-29 | `t_ffe11c0e` | Scribul | [Should] WRITER: curriculum item 'How the web works' (servers, ports … | 1 | $1.13 | exact |
| | | | **total rundă**: 2 sesiuni, $1.68 exact + $0.00 estimat | | **$1.68** | |

### 3. Runda reparațiilor, buget $40 (2026-11-05 și 11-06)

Punctele #8 și următoarele din *de reparat întâi* ale auditului, și punctele minore.

| data | card | cabina | ce a făcut cardul | sesiuni | cost | bază |
|---|---|---|---|---:|---:|---|
| 2026-11-05 | `t_0763bb54` | Scribul | [Should] Audit minor: bring BACKLOG-RO.md #013 into line with EN … | 1 | $0.84 | exact |
| 2026-11-05 | `t_262d8aa4` | Gabierul | [Should] Audit minor: translate the RO note-save alerts in ro/script.js … | 2 | $2.28 | exact |
| 2026-11-05 | `t_395f0c44` | Inginerul | [Must] Fix #8 revise: deploy-status short-SHA + DEPLOY_POLL guard … | 1 | $1.48 | exact |
| 2026-11-05 | `t_958b2bf8` | Încercătorul | [Must] QA (read-only): the fix #8 PR | 1 | $1.72 | exact |
| 2026-11-05 | `t_af9beaa3` | Încercătorul | [Must] QA (read-only): check Iulia's clean-up after the PR #5 merge | 1 | $0.48 | exact |
| 2026-11-05 | `t_b4773637` | Inginerul | [Must] Audit fix-first #8: correct the deploy.yml comment + fix the … | 1 | $1.97 | exact |
| 2026-11-05 | `t_b6cfc4d3` | Încercătorul | [Should] QA (read-only): the RO BACKLOG #013 PR | 1 | $0.82 | exact |
| 2026-11-05 | `t_c3043989` | Încercătorul | [Must] QA re-check (read-only): fix #8 PR #6 after revise | 1 | $1.25 | exact |
| 2026-11-05 | `t_fe5e9853` | Încercătorul | [Should] QA (read-only): the RO save-alerts PR | 1 | $1.28 | exact |
| 2026-11-06 | `t_0353851a` | Încercătorul | [Should] QA (read-only): the og-meta PR | 1 | $2.13 | exact |
| 2026-11-06 | `t_2ee378d4` | Încercătorul | [Could] Audit minor: FIND-ONLY the off-by-one ranges (read-only report … | 1 | $5.87 | exact |
| 2026-11-06 | `t_323d8f8e` | Cartograful | [Should] Audit minor og meta 1/2: design the 1200x630 share PNG + … | 1 | $1.87 | exact |
| 2026-11-06 | `t_4a093bbd` | Gabierul | [Should] PR #7 wording: 'nota' -> 'notița' in the RO not-saved alert … | 1 | $0.88 | exact |
| 2026-11-06 | `t_6b01b313` | Încercătorul | [Should] QA re-check (read-only): PR #7 after the 'notița' fix | 1 | $0.86 | exact |
| 2026-11-06 | `t_9c42e731` | Inginerul | [Must] Fix make rollback: merge-commit tip (-m 1) + refuse unless on … | 1 | $2.45 | exact |
| 2026-11-06 | `t_df76d96f` | Gabierul | [Should] Audit minor og meta 2/2: drop og:background_color, point … | 1 | $2.93 | exact |
| 2026-11-06 | `t_e4602b35` | Încercătorul | [Must] QA (read-only): the make rollback PR | 1 | $1.48 | exact |
| | | | **total rundă**: 18 sesiuni, $30.58 exact + $0.00 estimat | | **$30.58** | |

### 4. Runda de recenzie, buget $45 (2026-11-05)

Trei consultări, doar în citire, despre jurnal și despre documentele proiectului.

| data | card | cabina | ce a făcut cardul | sesiuni | cost | bază |
|---|---|---|---|---:|---:|---|
| 2026-11-05 | `t_62d467a6` | Scribul | [Consult] writer (read-only): JOURNAL as a novel — corrections … | 4 | $7.47 | exact |
| 2026-11-05 | `t_7144b5db` | Arhivarul | [Consult] researcher (read-only): JOURNAL fact-check, source pack for … | 1 | $3.23 | exact |
| 2026-11-05 | `t_f8bc8dfc` | Scribul | [Consult] writer (read-only): are the project's markdown documents well … | 1 | $2.21 | exact |
| | | | **total rundă**: 6 sesiuni, $12.91 exact + $0.00 estimat | | **$12.91** | |

### 5. Runda jurnalului, buget $61, ridicat la $66 (2026-11-06 – 11-10)

Sezonul V (ZIUA 33–ZIUA 39), ghidul Git/PR, reparațiile erorilor grave și verificările lor.

| data | card | cabina | ce a făcut cardul | sesiuni | cost | bază |
|---|---|---|---|---:|---:|---|
| 2026-11-06 | `t_05b59ef1` | Scribul | [Journal] writer: PR #12 DAY 36 `git branch -d` teaching fix (EN+RO) … | 1 | $0.45 | exact |
| 2026-11-06 | `t_05cb596b` | Scribul | [Journal] writer: Season V 3/3 — ZIUA 33-39 RO + open the PR | 7 | $9.88 | exact |
| 2026-11-06 | `t_0c56f7bb` | Arhivarul | [Journal] researcher (read-only): AI primer — harness, assistant vs … | 1 | $1.26 | exact |
| 2026-11-06 | `t_0e5d67fe` | Scribul | [Journal] writer: Season V 1/3 — DAY 33-36 EN | 1 | $3.62 | exact |
| 2026-11-06 | `t_3f438aea` | Scribul | [Docs] writer fix: PR #13 guide, `git branch -d` refusal claim (EN+RO) | 1 | $0.68 | exact |
| 2026-11-06 | `t_5417ab9e` | Încercătorul | [Docs] QA (read-only): Git/PR guide PR | 1 | $1.61 | exact |
| 2026-11-06 | `t_6be39a89` | Încercătorul | [Journal] QA re-check (read-only): PR #12 after the 5 REVISE fixes | 1 | $1.65 | exact |
| 2026-11-06 | `t_a45c0746` | Scribul | [Docs] writer: Git/PR workflow guide EN+RO + DEPLOY.md (PR, no merge) | 1 | $2.05 | exact |
| 2026-11-06 | `t_a83f4575` | Încercătorul | [Journal] QA (read-only): Season V PR — facts, teaching, rulings | 1 | $5.13 | exact |
| 2026-11-06 | `t_c3d49bbc` | Arhivarul | [Journal] researcher (read-only): source-pack addendum — sessions + … | 1 | $1.72 | exact |
| 2026-11-06 | `t_c85f626d` | Scribul | [Journal] writer: PR A — fix DAY 29 code line + JOURNAL-RO hard errors … | 1 | $2.30 | exact |
| 2026-11-06 | `t_d1c32bd8` | Încercătorul | [Journal] QA re-check (read-only): PR #12 after the DAY 36 `git branch … | 1 | $0.93 | exact |
| 2026-11-06 | `t_da6e1697` | Scribul | [Journal] writer: Season V 2/3 — DAY 37-39 EN + Sleeper's errata ledger … | 1 | $4.54 | exact |
| 2026-11-06 | `t_f1a50ce7` | Încercătorul | [Journal] QA (read-only): PR A hard errors | 1 | $1.21 | exact |
| 2026-11-06 | `t_fc537220` | Scribul | [Journal] writer: Season V REVISE fixes (5 items) — update PR #12, no … | 1 | $0.78 | exact |
| 2026-11-06 | `t_fd510b32` | Încercătorul | [Docs] QA re-check (read-only): PR #13 after the `branch -d` fix | 1 | $1.11 | exact |
| 2026-11-10 | `t_24db5f7e` | Încercătorul | [Journal] QA re-check (read-only): PR #12 after the GitS-years + "one … | 1 | $0.56 | exact |
| 2026-11-10 | `t_5561822c` | Scribul | [Journal] writer: DAY 33 transformation of the Voice (opencode -> … | 1 | $3.06 | exact |
| 2026-11-10 | `t_bf610bf8` | Scribul | [Journal] writer: PR #11 owner corrections (Nietzsche, 2117, ocheanul … | 1 | $2.92 | exact |
| 2026-11-10 | `t_f8576b06` | Încercătorul | [Journal] QA (read-only): PR #11 + PR #12 after owner corrections + … | 1 | $3.33 | exact |
| 2026-11-10 | `t_fc4344fb` | Scribul | [Journal] writer fix: PR #12 QA REVISE (GitS manga years; DAY 33 "one … | 1 | $0.47 | exact |
| | | | **total rundă**: 27 sesiuni, $49.25 exact + $0.00 estimat | | **$49.25** | |

### 6. Coordonarea Intendentului (interactivă, 2026-11-05 – 11-10)

Cartul meu, cu căpitanul, în afara cardurilor: o singură sesiune lungă, cea care a condus rundele,
numărată la 94% (120 din cele 127 de mențiuni de proiecte din ea sunt ale acestui proiect) și
împărțită pe zile după mesajele mele din fiecare zi. Rândul profilului default e conversația din
Claude Code, importată în Hermes pe 11-05, la 16:04.

| data | card | cabina | ce a făcut cardul | sesiuni | cost | bază |
|---|---|---|---|---:|---:|---|
| 2026-11-05 | — | profilul default | Imported from Claude Code: (imported conversation begins with an … | 1 | $0.93 | estimat |
| 2026-11-05 | — | Intendentul | PM: Add digital-odyssey audit tasks to Kanban | 1 | $9.33 | estimat |
| 2026-11-06 | — | Intendentul | PM: Add digital-odyssey audit tasks to Kanban | 1 | $9.56 | estimat |
| 2026-11-10 | — | Intendentul | PM: Add digital-odyssey audit tasks to Kanban | 1 | $4.38 | estimat |
| | | | **total rundă**: 4 sesiuni, $0.00 exact + $24.21 estimat | | **$24.21** | |

### 7. Numerele mecanismelor (2026-11-10)

| data | card | cabina | ce a făcut cardul | sesiuni | cost | bază |
|---|---|---|---|---:|---:|---|
| 2026-11-10 | `t_dfe891c5` | Gabierul | [Should] Fix the 9 wrong mechanism/module numbers in comments + docs … | 1 | $2.19 | exact |
| 2026-11-10 | `t_ee116fb0` | Încercătorul | [Should] QA (read-only): mechanism-numbers PR | 1 | $1.77 | exact |
| | | | **total rundă**: 2 sesiuni, $3.97 exact + $0.00 estimat | | **$3.97** | |

### 8. Runda 3: registrul acesta și manualul Obsidian, buget $20 (2026-11-10, încă în desfășurare)

Un **instantaneu**, luat cât runda încă rula. Cardul acesta și cardurile manualului nu sunt încă
în el. Următorul bloc de rânduri îl va corecta.

| data | card | cabina | ce a făcut cardul | sesiuni | cost | bază |
|---|---|---|---|---:|---:|---|
| 2026-11-10 | `t_718da2ab` | Arhivarul | [Ledger] researcher (read-only): reconstruct project costs since … | 1 | $0.71 | exact |
| 2026-11-10 | `t_9ed6558e` | Arhivarul | [Handbook] researcher (read-only): Obsidian facts for Iulia | 1 | $0.73 | exact |
| | | | **total rundă**: 2 sesiuni, $1.44 exact + $0.00 estimat | | **$1.44** | |

## Combustibilul pe zilele jurnalului

Rândurile *Jurnalul combustibilului* din jurnal vin din tabelul acesta. Regula: **combustibilul unei
zile e munca din Hermes despre care povestește ziua.** Fiecare sesiune se numără într-o singură zi.
Sesiunea mea de coordonare e împărțită după momentul în care mi-am scris mesajele. Munca despre care
nu povestește nicio zi (mai ales scrierea și verificarea jurnalului însuși) are rândul ei, ca
coloana să dea totuși totalul.

| ziua din jurnal | data navei | ce se numără | combustibil |
|---|---|---|---:|
| ZIUA 33 | 2026-08-26 → 2026-09-10 | toate rândurile din 08-26 și 09-10: tabla pregătită, cartul curriculumului, primele carduri | $27.81 |
| ZIUA 34 | 2026-09-21, apoi deriva până la 2026-10-29 | toate rândurile din 09-21 (dimineața lansării), 09-23 și 10-29 (lăzile derivei) | $108.73 |
| ZIUA 35 | 2026-11-04 | nimic: Inspectorul a lucrat în Claude Code, în afara lui Hermes | $0.00 |
| ZIUA 36 | 2026-11-04, seara | nimic: naveta a fost construită în Claude Code și andocată de căpitan, de mână | $0.00 |
| ZIUA 37 | 2026-11-04 22:13 → 11-05 17:43 | conversația din Claude Code importată în Hermes pe 11-05 ($0.93), cartul meu din 11-05 până la 17:43 (39 din cele 81 de mesaje ale zilei, $4.49), verificarea curățeniei de către Încercător, `t_af9beaa3` ($0.48) | $5.90 |
| ZIUA 38 | 2026-11-05 17:46 → 11-06 18:47 | cele 18 carduri despre care povestește Încercătorul (de la reparația #8 la PR #11, $33.61), cartul meu în orele acelea (42 din 81 de mesaje pe 11-05, $4.84; 45 din 83 pe 11-06, $5.19) | $43.64 |
| ZIUA 39 | 2026-11-06 | verificarea faptelor de către Arhivar, `t_7144b5db`, singura sursă a registrului de erate care nu e deja numărată în ZIUA 38 (cealaltă, `t_2ee378d4`, este) | $3.23 |
| *după ZIUA 39* | 11-05 seara → 11-10 | scrierea și verificarea Sezonului V și a reparațiilor lui, consultările de recenzie, ghidul Git/PR, corecturile din 11-10, numerele mecanismelor, runda 3, și cartul meu din 11-06 după 18:47 (38 din 83 de mesaje, $4.38) și din 11-10 | $69.59 |
| **total** | | | **$258.89** |

Fiecare rând e rotunjit la cent, așa că rândurile pot da un cent mai mult sau mai puțin decât
totalul. Rândul *Jurnalul combustibilului* din jurnal rotunjește din nou, la dolar întreg.

Cei $0.00 ai zilelor ZIUA 35 și ZIUA 36 nu înseamnă că zilele acelea au fost gratuite. S-a lucrat în
ele în alt ham, Claude Code, iar combustibilul lui e *neconsemnat* aici. Cele mai multe andocări din
ZIUA 37 s-au făcut tot acolo.

## Cum s-au făcut numerele

- **Sursele.** Depozitul de sesiuni Hermes al fiecărei cabine și tabla digital-odyssey, toate deschise
  doar în citire. Hermes păstrează un rând pentru fiecare sesiune: tokenii intrați și ieșiți, citirile
  și scrierile din cache, modelul și un cost estimat. Nu păstrează costul pe card, așa că **unitatea
  registrului acestuia e sesiunea.**
- **Care sesiuni sunt ale noastre.** De pe 2026-10-29 tabla numește sesiunea exactă a fiecărei rulări.
  Înainte de asta, o sesiune se numără dacă are în titlu, în dosar sau în primul mesaj id-ul unui card
  de pe tabla aceasta (id-urile cardurilor nu se repetă de la o tablă la alta). Șase sesiuni ale
  Scribului din 09-21 nu au id de card, dar au lucrat la paginile de jurnal ale proiectului; se numără,
  ca *estimate*. Sesiunile interactive se numără după partea lor din mențiunile de proiecte, și doar
  dacă partea aceasta e de cel puțin 20% și proiectul e numit de cel puțin 5 ori.
- **Prețurile.** Unde Hermes a salvat un preț, se folosește așa cum e. Între 2026-09-10 și 09-25 Hermes a
  salvat tokenii majorității sesiunilor Opus 5 / Opus 5.5, dar nu și prețul; Arhivarul i-a prețuit cu
  tabelul lui Hermes însuși (pe milion de tokeni, intrare / ieșire / citire din cache / scriere în
  cache: Opus 5 $5 / $25 / $0.50 / $6.25, Opus 5.5 $4 / $20 / $0.20 / $5). Asta înseamnă $106.50 din
  total. Arhivarul a verificat tabelul pe o sesiune prețuită, și se potrivește la cent.
- **Verificarea.** `hermes insights` pentru cabina Încercătorului, pe aceleași 77 de zile, spune $534.76;
  sesiunile din depozit dau împreună $534.34. Depozitul și Hermes se potrivesc. Insights nu poate
  împărți pe proiecte, și de aceea există registrul acesta.

## Ce nu poate vedea registrul acesta

1. **2026-08-26 – 2026-09-10.** Istoria rulărilor de pe tablă începe pe 09-10. Singurul cost legat de
   proiect în golul acesta e pregătirea tablei de către mine, pe 08-26 ($2.80). Munca făcută înainte de
   Hermes, în opencode, nu e în depozitele acestea.
2. **Sesiunile care nu numesc niciodată proiectul.** Nu pot fi găsite. Pregătirea comună a lui Hermes
   (pluginuri, skilluri, modele) nu e cost al proiectului.
3. **Sesiunile interactive împărțite.** Paisprezece sesiuni care doar *menționează* proiectul sunt
   lăsate la $0. Numărate după partea lor din mențiuni, ar adăuga cel mult cam **$18.98**. O mențiune nu
   e același lucru cu munca, așa că partea e o euristică. Cel mai mare rând estimat, *Draft learning
   curriculum* (09-10, $17.55, 61% după mențiuni), ar putea fi prea mare sau prea mic.
4. **Ajutoarele.** O sesiune-ajutor pornită de un membru al echipajului se numără doar dacă poartă un id
   de card.
5. **Nu e o factură.** Prețuri de listă ale API-ului, înainte de efectele cache-ului, de facturarea prin
   abonament sau de reduceri.
6. **Încă în desfășurare.** Runda 3 e un instantaneu. Cardurile ei de mai târziu (printre ele și acesta)
   vin în următorul bloc de rânduri.
7. **Hamul Inspectorului.** Consumul lui Claude Code nu e în depozitul lui Hermes. ZIUA 35, ZIUA 36 și cea
   mai mare parte din ZIUA 37 au ars combustibil pe care registrul acesta nu-l poate citi.

## Ținerea registrului

De acum înainte adaug **un bloc de rânduri după fiecare rundă**, sub *Rundele, card cu card*, și
actualizez *Totalurile*, *Față de bugete* și, când se scrie o zi nouă în jurnal, *Combustibilul pe
zilele jurnalului*. Un bloc de rânduri arată așa:

```text
### N. <numele rundei>, buget $<plafon> (<date>)
<o propoziție: pentru ce a fost runda>

| data | card | cabina | ce a făcut cardul | sesiuni | cost | bază |
|---|---|---|---|---:|---:|---|
| <data> | `t_xxxxxxxx` | <cabina> | <titlul cardului, scurtat> | <n> | $<cost> | exact / estimat |
| | | | **total rundă**: <n> sesiuni, $<exact> exact + $<est> estimat | | **$<total>** | |
```

Numerele vin din depozitul de sesiuni al lui Hermes, doar în citire, după aceleași reguli ca mai sus.
Geamănul englez, `cost-ledger.md`, primește același bloc în același commit. Un rând nu se rescrie
niciodată după ce runda s-a închis; dacă un număr se dovedește greșit, corectura e un rând nou, care
spune ce rând corectează.
