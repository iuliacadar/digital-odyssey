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

Foaia de stil (`style.css`) este organizată în 30 de module numerotate + 2 module utilitare (00.1 pentru `@keyframes`, 00.2 pentru `@media`), așa cum este declarat în indexul de module de la începutul fișierului. Fiecare module guvernează o componentă sau un concern.

Când adăugați sau modificați o regulă CSS:
1. Găsiți modulul corect în index (de exemplu, Modulul 14 pentru `.sector-announcement`).
2. Dacă schimbarea este în interiorul breakpoint-ului `@media` (00.2), localizați sub-secțiunea corespunzătoare (B1–B4) care se potrivește cu funcția componentei.
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
- **Fază narativă sau de învățare nouă** → un număr nou de ZI (de exemplu, ZIUA 23 pentru crearea de conținut)
- **Lucrări structurale, audit sau reparații** → adăugați la ZIUA 22
- **Reutilizarea unui instrument/metodă deja documentat(ă)** → nu este necesară o intrare în ZIUA 22. Doar *introducerea* unui instrument (rațiune, sintaxă, de ce a fost ales) aparține ZIUA 22. Utilizările ulterioare sunt operațiuni de rutină, nu cunoștințe noi.

---

*Aceste principii sunt vii — ele evoluează pe măsură ce proiectul crește. Actualizați acest fișier atunci când o nouă convenție devine permanentă.*
