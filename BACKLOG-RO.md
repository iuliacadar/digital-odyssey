# D::0dy55ey — BACKLOG-RO.md

Acest document centralizează ideile, funcționalitățile amânate, refactorizările și datoria tehnică a proiectului. Comentariile inline din cod rămân utile pentru context local, dar backlog-ul funcționează ca registru principal al lucrurilor planificate pentru implementare ulterioară.

## Cum se folosește

- Adaugă o intrare nouă imediat ce apare o idee importantă.
- Păstrează fiecare item clar și scurt.
- Marchează statusul, prioritatea, faza și fișierele afectate.
- Când ideea este implementată, mut-o în secțiunea "Implementat" sau marcheaz-o ca "Done".

## Legendă status

- `Propus` — idee notată, încă neplanificată concret.
- `Amânat` — idee acceptată, dar amânată intenționat.
- `Planificat` — intră într-o etapă viitoare clară.
- `În lucru` — se lucrează activ la ea.
- `Done` — implementată.
- `Abandonat` — abandonată justificat.

## Legendă prioritate

- `High` — afectează arhitectura, navigația sau consistența globală.
- `Medium` — îmbunătățește semnificativ proiectul, dar nu blochează progresul.
- `Low` — rafinament, polish sau extensie opțională.

## Backlog activ

### 001 — Sistem tematic: Zi Stelară / Noapte Profundă

**Titlu:** Sistem de temă: Zi Stelară / Noapte Profundă

**Descriere:** Implementarea unui toggle light/dark pentru întregul proiect, pe baza unei matrici duale de variabile cromatice și de contrast.

**Status:** Amânat
**Prioritate:** Medium
**Fază:** După transferul nucleului CSS

**De ce mai târziu:** Tema actuală este dark-first, iar implementarea imediată ar dubla munca înainte de migrarea și curățarea modulelor de bază.

**Fișiere afectate:** `ro/style.css`, `en/style.css`, `ro/index.html`, `en/index.html`

**Condiții de implementare:**
- variabilele de bază sunt transferate curat;
- modulele structurale principale sunt stabilizate;
- contrastul este verificat pentru ambele teme;
- `theme-color` poate deveni dual în `<head>`.

---

### 003 — Articol/sector dedicat validării în frontend

**Titlu:** Validare la finalul capitolelor frontend

**Descriere:** Adăugarea unui sector sau daylog de validare la finalul capitolelor din volumul frontend, pentru HTML, CSS și, unde este relevant, JavaScript. Secțiunea va consemna verificările de structură, sintaxă, compatibilitate și bune practici, împreună cu instrumentele folosite, inclusiv `.hintrc`.

**Status:** Planificat

**Prioritate:** Medium

**Fază:** După stabilizarea capitolelor principale din volumul frontend

**De ce există această idee:** Validarea funcționează ca etapă de închidere a studiului și completează documentarea tehnică a capitolului, fără să devină volum separat.

**Fișiere afectate:** `html-log.html`, `css-log.html`, `javascript-log.html`, `.hintrc`

**Pași:**
- adăugarea unui sector de validare la finalul capitolului HTML;
- adăugarea unui sector de validare la finalul capitolului CSS;
- adăugarea validării JS doar unde există logică proprie de verificat;
- consemnarea instrumentelor de validare și a observațiilor principale;
- menționarea fișierului `.hintrc` ca parte a setării de verificare.

**Condiții de finalizare:**
- validarea este integrată coerent în structura fiecărui capitol;
- secțiunea rămâne scurtă, clară și aliniată cu stilul backlog-ului;
- `.hintrc` este documentat sau exclus în mod justificat.

---

### 004 — Verificare text-size-adjust pe dispozitive mobile la lansare

**Titlu:** Verificare text-size-adjust pe dispozitive mobile la lansare

**Descriere:** Testare pe dispozitive reale (iOS Safari, Chrome Android, Firefox Android) pentru a confirma că eliminarea declarațiilor `-webkit-text-size-adjust`, `-moz-text-size-adjust` și `text-size-adjust` nu afectează redarea textului. Dacă apar probleme de scalare sau inflație a textului, se restaurează declarațiile.

**Status:** Propus
**Prioritate:** Low
**Fază:** La lansare / prima sesiune de testare mobilă

**De ce mai târziu:** Declarațiile au fost eliminate pentru a suprima avertismentele linter-ului VS Code. Meta tag-ul viewport ar trebui să gestioneze inflația textului, dar testarea reală pe mobil este necesară pentru confirmare. Prioritate scăzută deoarece impactul este cosmetic și nu afectează utilizatorii de desktop.

**Fișiere afectate:** `en/style.css`, `ro/style.css`

**Condiții de implementare:**
- testare pe iOS Safari (iPhone/iPad) — verificare dimensiune text după rotația ecranului;
- testare pe Chrome Android — verificare dimensiune text la zoom;
- testare pe Firefox Android — verificare dimensiune text la zoom;
- dacă apar probleme, se restaurează `-webkit-text-size-adjust: 100%` (Safari), `-moz-text-size-adjust: 100%` (Firefox) și `text-size-adjust: 100%` (Chrome/Edge/Samsung).

---

### 008 — Pregătire lansare: securitate, conținut gol al jurnalelor, configurare deploy

**Titlu:** Pregătire lansare — noopener, pagini de jurnal goale, configurare deploy

**Descriere:** Rezolvarea blocajelor identificate în evaluarea stării de lansare înainte de publicare. (GitHub Pages va servi `en/` ca rădăcină; nu e nevoie de un `index.html` rădăcină.)

**Status:** Propus
**Prioritate:** High
**Fază:** Pre-lansare

**De ce acum:** Paginile principale (index, bibliografie, transmisiune, blueprinte recursiv) sunt gata de producție, dar peste 40 de pagini de jurnal goale/cu Lorem Ipsum și lipsa `rel="noopener noreferrer"` pe unele linkuri `target="_blank"` împiedică lansarea publică.

**Opțiuni pentru rădăcina URL (fără `index.html` rădăcină):**

Proiectul nu are un `index.html` rădăcină — Pages servește `en/` și `ro/` ca subdirectoare surori. Trei abordări pentru rădăcina dezbrăcată:

| # | Abordare | Vizitatorul la `https://.../digital-odyssey/` vede | Compromis |
|---|---|---|---|
| 1 | Sursa Pages setată la `/en` în Settings repo | Indexul EN servit la URL-ul rădăcină | RO devine `.../digital-odyssey/ro/`; URL-urile canonice se schimbă |
| 2 | Un `404.html` rădăcină care redirecționează către `/en/index.html` | Redirecționat automat la indexul EN | Folosește mecanismul 404 ca redirect — pragmatic, dar nu „curat" |
| 3 | Acceptarea rădăcinii goale ca 404, documentarea `en/` ca adresă canonică | 404 la rădăcină — vizitatorii folosesc `.../digital-odyssey/en/` direct | Cel mai curat pentru codul existent; utilizatorii trebuie să știe calea `/en/` |

La momentul redactării, URL-urile canonice din `og:url` și `link[rel=canonical]` indică `.../digital-odyssey/en/index.html`. Opțiunea 3 este cea mai simplă și potrivită pentru arhitectura actuală, dar alegerea este amânată până la lansare.

**Fișiere afectate:** `en/*.html`, `ro/*.html`, `en/style.css`, `ro/style.css`, `.github/workflows/deploy.yml`, `shared/data/*.json`, `404.html` (doar pentru opțiunea 2)

**Pași:**
- deciderea abordării pentru rădăcina URL (opțiunea 1, 2 sau 3);
- implementarea abordării alese;
- adăugarea `rel="noopener noreferrer"` la toate linkurile `target="_blank"` din toate fișierele HTML;
- completarea sau eliminarea celor 18 pagini de jurnal goale per limbă (sau adăugarea unui banner „🚧 În construcție");
- înlocuirea textului Lorem Ipsum din `html-log.html`, `css-log.html`, `javascript-log.html`, `sql-log.html` cu conținut real;
- popularea sau eliminarea celor 3 fișiere JSON goale din `shared/data/`;
- adăugarea unui workflow GitHub Actions de deploy (sau activarea Pages prin Settings);
- opțional: adăugarea unui fișier `CNAME` pentru un domeniu personalizat.

**Condiții de finalizare:**
- `https://iuliacadar.github.io/digital-odyssey/en/` afișează indexul EN;
- niciun link `target="_blank"` nu este fără `rel="noopener noreferrer"`;
- nicio pagină de jurnal nu arată un corp gol sau text placeholder fără un banner „În construcție";
- deploy-ul este automatizat sau documentat cu o singură comandă.

---



### 010 — Personalizare meta-description și meta-keywords per pagină de jurnal

**Titlu:** Personalizare meta-description și meta-keywords per pagină de jurnal

**Descriere:** Toate paginile de jurnal generate au în prezent `meta description` și `meta keywords` cu tematică CSS, copiate din șablonul css-log (de exemplu, "A structured log documenting the exploration of CSS..."). Acestea trebuie rescrise pentru a reflecta cu acuratețe conținutul educațional real al fiecărei pagini. Se vor corecta în timpul scrierii conținutului — când ZIUA 01 a unei pagini de jurnal este completată, se actualizează simultan descrierea și cuvintele cheie.

**Status:** Planificat
**Prioritate:** Medium
**Fază:** Crearea conținutului (concomitent cu primul pasaj de conținut al fiecărei pagini de jurnal)

**De ce nu acum:** Descrierile și cuvintele cheie trebuie să se potrivească cu conținutul real al paginii. Scrierea unor descrieri corecte înainte ca conținutul să existe ar însemna rescrierea lor mai târziu. Eficient este să le facem pe amândouă împreună.

**Fișiere afectate:** Toate cele 23 de pagini de jurnal în ambele limbi (46 de fișiere) — paginile generate + cele 3 pagini manuale (css-log, html-log, sql-log) care au deja descrieri adecvate subiectului și sunt excluse.

**Pași:**
- La scrierea conținutului ZIUA 01 pentru o pagină de jurnal, actualizează `<meta name="description">` pentru a reflecta subiectul real al paginii
- Actualizează `<meta name="keywords">` cu termeni relevanți subiectului
- Asigură-te că `og:description` rămâne aliniat cu `meta description`
- Sincronizează modificările în pagina oglindă RO

**Condiții de finalizare:**
- Fiecare pagină de jurnal are o meta descriere și un set de cuvinte cheie unice și corecte
- Nicio pagină nu păstrează textul placeholder cu tematică CSS

---

### 011 — Retușarea ZILEI 22 ca plan al planului

**Titlu:** Retușarea ZILEI 22 ca plan al planului

**Descriere:** Rescrie intrarea ZIUA 22 (Cea Mai Lungă Miercuri) ca stratul meta al navei: povestea construcției spusă din perspectiva codului/mașinii — un registru al uneltelor, comenzilor, mecanismelor și stocării care au construit `D::0dy55ey`, nu o re-narrare a ceea ce a făcut fiecare zi. Cititorul ar trebui să poată „atinge" metodele reale: conductele de generare și traducere PowerShell, `git mv` și operația asupra istoriei, cele nouă mecanisme cu evenimentele și gardurile lor, `localStorage` ca backend fără server, puntea de date Fetch API, jurnalele citite ca date vii și taxonomia de comentarii/etichete. O ciornă păstrată a registrului și scheletului propus există la `docs/drafts/day22-draft-en.md`, cu oglinda românească la `docs/drafts/day22-draft-ro.md`.

**Status:** Amânat
**Prioritate:** Medie
**Fază:** După ce paginile de jurnal sunt umplute cu conținut, chiar înainte de lansare

**De ce nu acum:** Textul actual al ZILEI 22 este considerat superior oricărei ciorne, iar intenția editorială nu e încă pe deplin clară. Lăsând paginile de jurnal să câștige conținut, înțelegerea a ce ar trebui să fie ZIUA 22 se va maturiza. Între timp, anexa „Jurnal de Construcție" a ZILEI 22 continuă să înregistreze metoda tehnică pe măsură ce lucrarea avansează.

**Fișiere afectate:** `JOURNAL-EN.md`, `JOURNAL-RO.md`, `docs/drafts/day22-draft-en.md`, `docs/drafts/day22-draft-ro.md`

**Pași:**
- revizuiește ciorna păstrată și stabilește vocea finală;
- re-așază încărcătura factuală a ZILEI 22 sub titluri centrate pe unelte, comprimând în referințe încrucișate ceea ce celelalte zile narează deja;
- verifică fiecare afirmație tehnică în sursă (tabelul mecanismelor, conductele, cheile de stocare, numerele);
- scrie oglinda românească în paralel, aceeași structură și voce;
- decide dacă itemii anexei „Jurnal de Construcție" se îndoaie în noile părți sau rămân ca jurnal de construcție continuu.

**Condiții de finalizare:**
- ZIUA 22 se citește ca registrul de construcție al mașinii, nu ca o repetare a jurnalului;
- fiecare fapt păstrat rămâne corect;
- RO oglindește EN în structură și voce.

---

## Implementat

Mută aici itemii finalizați, păstrând data și o scurtă notă despre ce s-a schimbat.

### Exemplu

**ID:** 000
**Titlu:** Exemplu item finalizat
**Data:** YYYY-MM-DD
**Notă:** Scurt rezumat al implementării.

---

### 002 — Pagini recursive cu metadate complete

**Data:** 2026-07-27
**Notă:** Toate paginile HTML (principale + toate cele 22 de pagini de jurnal per limbă) au acum `<head>` complet — charset, viewport, titlu, meta descriere, theme-color, favicon — cu comentarii pedagogice adecvate limbii. Anotația `@meta:` documentează fiecare tag. RO oglindește EN structural. Cele două copii originale din backlog (una „În lucru", una „Planificat") au fost consolidate și mutate aici.

---

### 009 — Șablon pagini de jurnal: clonează structura Manual_project în toate paginile de jurnal

**Data:** 2026-07-30 (ZIUA 22)
**Notă:** Toate cele 54 de fișiere HTML (27 EN + 27 RO) au acum scheletul structural complet de 29 de zile (sidebar, secțiuni-zi, mission-status, footer) prin scripturi de generare a șabloanelor. Clonarea structurală este completă. Cele 3 pagini scrise manual (html-log, css-log, sql-log) au încă număr incomplet de zile și linkuri fantomă în sidebar — acestea vor fi completate în timpul creării conținutului începând cu ZIUA 24. Cele 18 shell-uri goale originale per limbă nu mai există; fiecare pagină are un cadru vizibil și navigabil.

---

### 005 — Consolă de navigație HUD Holografică pentru index + portal icosaedru

**Data:** 2026-07-27
**Notă:** Implementat complet în ambele limbi. Overlay HUD cu toate cele 6 volume și linkuri către sub-jurnale, CSS glassmorphism cu animații eșalonate de pornire, JS toggle cu închidere la click în afară și tasta Escape. Portalul icosaedru leagă index → recursive-blueprint.html; mini-reactorul leagă înapoi la index. Footerul include linkul transmission și comutatorul EN/RO. „Înapoi la puntea de comandă" a fost păstrat alături de HUD ca ajutor explicit de navigare (decizie de design, nu incompletitudine).

---

### 006 — Reparații CSS și Calibrări UI

**Data:** 2026-07-23

**Domeniu:** Rafinări vizuale la nivelul întregii flote.

**Modificări:**
- Reduse marginile `.armillary-reactor-core` de la 140px la 60px (sus/jos) pentru a menține fețele inferioare ale icosaedrului în viewport la încărcare.
- Redus margin-top `.blueprint-container` de la 100px la 40px și strânse spațierile `.terminal-split`, `.blueprint-demo-text` și `.recursive-reactor-wrapper` pentru mini-reactor.
- Eliminat `overflow: hidden` de pe `.hero` pentru a opri tăierea fețelor 3D.
- Adăugat `class="return-btn"` la toate cele 50 de linkuri „← Înapoi la puntea de comandă" pentru ca paginile din subdirectoare să primească același stil de bordură verde întreruptă.
- Restilizat `.footer-links a` să se potrivească cu `.archive-link` (bordură verde, strălucire verde la hover).
- Restilizat `.hud-toggle` să se potrivească cu stilul return-btn (bordură verde întreruptă, hover verde).
- Făcut `.hud-overlay` complet opac (`rgb(10, 11, 30)`) și pe tot ecranul (`calc(100vh - 60px)`).
- Adăugat `aria-label` la ambele portaluri reactor pentru accesibilitate.
- Actualizat și restilizat `.lang-toggle-active` cu fundal verde plin.
- Adăugată secțiunea Ziua 10 — Jurnal de Reparații în JOURNAL-RO.md și JOURNAL-EN.md.
- Sincronizate toate modificările CSS în `ro/style.css`.

**Fișiere afectate:** `en/style.css`, `ro/style.css`, `en/index.html`, `en/recursive-blueprint.html`, `ro/index.html`, `JOURNAL-EN.md`, `JOURNAL-RO.md`, `BACKLOG-EN.md`, `BACKLOG-RO.md`.

---

### 007 — Restructurare index, anexă Data Bridge, comentarii pedagogice și finalizare branding

**Data:** 2026-07-24

**Domeniu:** Restructurarea finală a paginilor index EN/RO, Data Bridge ca volum anexă, branding nou, redenumire jurnal.

**Modificări:**
- Extinse `en/index.html` și `ro/index.html` de la 2 la 6 volume în ordinea de construcție.
- Adăugată secțiune `bridge-volume` cu clasă CSS `.bridge-volume` (bordură întreruptă chihlimbarie, strălucire, animație bridge-shake).
- Adăugate comentarii pedagogice complete (`@block`, `@meta`, `@reason`, `@path`, `@warning`, `@bridge`, `@theme`) la fiecare bloc din ambele fișiere index.
- Actualizat branding: EN `"Signals from the Digital Deep" / "From the Digital Deep"`, RO `"Semnale din Adâncul Digital" / "Din Adâncul Digital"`.
- Rafinări UI mobil: subtitlu 9px, `.armillary-band-container` 100%, `.hud-toggle`, `.footer-links a`, `.return-btn`, `.footer p` mai strânse.
- Tradusă și clonată structura EN → RO cu comentarii în română.
- Redenumite `JURNAL-EN.md` → `JOURNAL-EN.md` și `JURNAL-RO.md` → `JOURNAL-RO.md`.
- Actualizate toate referințele din README și BACKLOG la noile nume de fișiere.
- Adăugate intrări DAY 11 în ambele jurnale și ambele backloaguri.

**Fișiere afectate:** `en/index.html`, `ro/index.html`, `en/style.css`, `ro/style.css`, `JOURNAL-EN.md`, `JOURNAL-RO.md`, `BACKLOG-EN.md`, `BACKLOG-RO.md`, `README.md`, `en/README.md`, `ro/README.md`.
