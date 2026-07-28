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

### 009 — Șablon pagini de jurnal: clonează structura Manual_project în toate paginile de jurnal

**Titlu:** Clonează structura de jurnal Manual_project în toate paginile de jurnal goale

**Descriere:** Populează toate cele 18 pagini de jurnal goale per limbă cu structura de sector/zi deja desenată în html-log, css-log și sql-log din Manual_project. Fiecare pagină de jurnal primește navigarea laterală (desktop) / consola HUD glisantă (mobil), layout de articole pe zile sau sectoare, blocuri mission-status și logo personalizat (deja implementat). Volumele care au nevoie de un format diferit (laborator, seminar, practic) vor fi personalizate la cerere când conținutul o impune.

**Status:** Propus
**Prioritate:** High
**Fază:** După popularea scheletelor structurale

**De ce acum:** 18 din 22 de pagini de jurnal per limbă sunt shell-uri goale (doar navigare + footer). Importul din Manual_project a demonstrat că structura de sector/zi este reutilizabilă în toate volumele. Completarea șablonului acum oferă fiecărei pagini de jurnal un schelet consistent, gata pentru conținut.

**Decizie de design (ZIUA 17):** Nu toate volumele vor folosi aceeași structură — arhitectura backend, deployment și UX pot necesita layout-uri bazate pe subiecte în loc de zile secvențiale. Abordarea este: clonează șablonul de zi/sector ca implicit, apoi personalizează per volum când conținutul cere un format diferit. Aceasta evită atât (a) crearea manuală a 36 de pagini goale de la zero, cât și (b) impunerea unui șablon universal pe volume care îl depășesc.

**Fișiere afectate:** Toate cele 18 pagini de jurnal goale per limbă (EN + RO = 36 de fișiere), plus cele 4 pagini cu Lorem Ipsum (html-log, css-log, javascript-log, sql-log) care vor adopta aceeași structură de șablon.

**Pași:**
- extrage shell-ul partajat din paginile de jurnal Manual_project (sidebar + model secțiuni-zi);
- clonează în toate paginile de jurnal goale din ambele limbi;
- verifică navigarea laterală, HUD-ul mobil și blocurile mission-status;
- menține comentariile în limba corectă (EN → en/, RO → ro/).

**Condiții de finalizare:**
- toate paginile de jurnal au un schelet structural vizibil (sidebar, secțiuni-zi, mission-status, logo);
- nicio pagină nu arată un corp gol;
- linkurile din sidebar navighează corect la ancorele secțiunilor;
- consola HUD mobilă glisantă funcționează (MECANISM 06).

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

**Fișiere afectate:** `en/index.html`, `ro/index.html`, `en/style.css`, `ro/style.css`, `JOURNAL-EN.md`, `JOURNAL-RO.md`, `BACKLOG-EN.md`, `BACKLOG-RO.md`, `README.md`, `README-EN.md`, `README-RO.md`.
