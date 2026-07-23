# Digital Odyssey — BACKLOG-RO.md

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

### 002 — Pagini recursive cu metadate complete

**Titlu:** Metadate complete pentru paginile recursive

**Descriere:** Completarea tuturor paginilor HTML cu titlu, meta-descriere, theme-color și favicon propriu, păstrând consistența între versiunile RO și EN.

**Status:** În lucru
**Prioritate:** High
**Fază:** Implementare head-uri pentru toate paginile existente

**De ce acum:** Este baza de identitate tehnică a proiectului și trebuie stabilită înainte de alte optimizări de conținut sau structură.

**Fișiere afectate:** `ro/*.html`, `en/*.html`

**Pași:**
- unificarea structurii `<head>`;
- completarea titlului specific fiecărei pagini;
- scrierea meta-descrierii pe fiecare pagină;
- setarea `theme-color` în acord cu paleta proiectului;
- adăugarea favicon-ului corect pentru fiecare subproiect;
- verificarea path-urilor relative pentru versiunile RO și EN.

**Condiții de finalizare:**
- toate paginile HTML existente au `<head>` complet;
- versiunile RO și EN sunt coerente între ele;
- `theme-color` este aplicat corect;
- favicon-ul este încărcat fără erori;
- structura este identică conceptual în ambele subproiecte.
**Titlu:** Metadate complete pentru paginile recursive

**Descriere:** Completarea tuturor paginilor HTML cu titlu, meta-descriere, theme-color și favicon propriu, păstrând consistența între versiunile RO și EN.

**Status:** Planificat
**Prioritate:** High
**Fază:** În paralel cu transferul paginilor HTML

**De ce există această idee:** Fiecare pagină trebuie să fie autonomă, lizibilă și coerentă în contextul proiectului bilingv.

**Fișiere afectate:** `ro/*.html`, `en/*.html`

**Pași:**
- unificarea structurii `<head>`;
- adaptarea path-urilor relative;
- verificarea favicon-ului;
- verificarea diferențelor de limbă.

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

## Implementat

Mută aici itemii finalizați, păstrând data și o scurtă notă despre ce s-a schimbat.

### Exemplu

**ID:** 000
**Titlu:** Exemplu item finalizat
**Data:** YYYY-MM-DD
**Notă:** Scurt rezumat al implementării.
