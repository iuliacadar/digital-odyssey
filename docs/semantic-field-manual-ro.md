# Manual de Câmp Semantic

Un index tehnic al fiecărui element HTML folosit în proiectul Digital Odyssey, cu rolul său semantic și semnificația narativă în metafora navei spațiale.

---

## `a` — Ancoră / Hyperlink

- **Rol HTML:** Creează un hyperlink către o altă pagină, secțiune sau resursă.
- **În navă:** Un punct de navigație. Fiecare `a` este o comandă care teleportează echipajul într-un alt sector (intrare de zi, resursă externă sau link din footer).
- **Unde se folosește:** Linkuri laterale pentru zile, lista de linkuri din footer, linkuri din bara de navigație, citări bibliografice.

## `article` — Intrare de Jurnal

- **Rol HTML:** Reprezintă o compoziție autonomă — un post pe forum, un articol de revistă sau o intrare zilnică de jurnal.
- **În navă:** Fiecare `<article>` este o intrare de jurnal a căpitanului pentru o zi — un container sigilat care păstrează narațiunea zilei, telemetria și notele.
- **Unde se folosește:** Fiecare intrare de zi (Ziua 00 până la Ziua 28), intrări de transmisie.

## `aside` — Bară Laterală / Consolă Secundară

- **Rol HTML:** Reprezintă conținut legat tangențial de conținutul principal.
- **În navă:** Consola auxiliară a navigatorului — un panou secundar în stânga punții principale, care conține harta expediției și indexul sectoarelor.
- **Unde se folosește:** Bara laterală a jurnalului (`<aside class="log-sidebar">`).

## `body` — Puntea Vizibilă

- **Rol HTML:** Containerul rădăcină pentru tot conținutul redat.
- **În navă:** Întreaga punte vizibilă a navei. Tot ce vede călătorul — bara de navigație, bara laterală, intrările de jurnal, footerul — se află aici.
- **Unde se folosește:** Fiecare pagină. Exact unul per document.

## `button` — Comutator de Control

- **Rol HTML:** Un control interactiv care declanșează o acțiune (de obicei prin JavaScript).
- **În navă:** Un comutator sau buton fizic pe panoul de control. Apăsarea lui trimite un semnal (salvează o notă, activează o consolă).
- **Unde se folosește:** În interiorul note-terminal, elemente interactive pe pagina index.

## `code` — Semnal Inline / Technobabble

- **Rol HTML:** Reprezintă un fragment de cod computerizat.
- **În navă:** Un semnal brut sau o incantație tehnică — afișează fragmente de cod, nume de fișiere sau comenzi de terminal în monospace.
- **Unde se folosește:** În pagina recursive-blueprint pentru referințe de cod inline.

## `dd` — Detaliu de Descriere / Manifest de Cargo

- **Rol HTML:** Partea de descriere sau valoare a unei perechi nume-valoare într-o listă de descrieri.
- **În navă:** Conținutul unui compartiment de marfă sau citirea detaliată pentru o intrare de semnal în arhive.
- **Unde se folosește:** Liste de descrieri în pagina de bibliografie.

## `div` — Container Generic / Compartiment

- **Rol HTML:** Un container la nivel de bloc fără semnificație semantică proprie.
- **În navă:** Un compartiment structural, un perete etanș sau o placă de punte. Folosit pentru a grupa comenzi și afișaje conexe atunci când un element semantic ar fi înșelător.
- **Unde se folosește:** Container logo, grila log-layout, caseta misiune-status, wrapper note-terminal, coloane footer.

## `dl` — Listă de Descrieri / Registru de Arhivă

- **Rol HTML:** O listă de grupuri nume-valoare (termeni și descrieri).
- **În navă:** Un registru sau glosar al navei — asociază un nume de semnal cu semnificația sa.
- **Unde se folosește:** Secțiunea de legendă a semnalelor din pagina de bibliografie.

## `dt` — Termen de Descriere / Nume de Semnal

- **Rol HTML:** Partea de termen sau nume a unei perechi nume-valoare într-o listă de descrieri.
- **În navă:** Numele unui semnal, frecvență sau intrare în registru.
- **Unde se folosește:** Liste de descrieri în pagina de bibliografie.

## `footer` — Stația Pupă

- **Rol HTML:** Reprezintă subsolul unei secțiuni sau pagini, conținând de obicei metadate, linkuri sau drepturi de autor.
- **În navă:** Stația de la pupă — secțiunea din spate a navei care găzduiește linkuri auxiliare de navigație, citiri de telemetrie a sistemului și semnătura căpitanului.
- **Unde se folosește:** Partea de jos a fiecărei pagini.

## `h1` — Titlu de Pagină / Numele Navei

- **Rol HTML:** Cel mai înalt nivel de titlu — definește subiectul principal al documentului.
- **În navă:** Denumirea principală a navei afișată pe ecranul principal. Denumește întreaga expediție.
- **Unde se folosește:** Titlul hero al paginii index, titlul recursive-blueprint.

## `h2` — Titlu de Secțiune / Nume de Sector

- **Rol HTML:** Titlu de nivel 2 — definește o secțiune majoră în cadrul documentului.
- **În navă:** Eticheta principală pentru un sector de cunoaștere. Scris cu majuscule monospace, se citește ca o anunțare subspațială.
- **Unde se folosește:** Antet de categorie, titluri de anunțare a sectorului, titluri de secțiuni în bibliografie.

## `h3` — Titlu de Zi / Antet de Intrare în Jurnal

- **Rol HTML:** Titlu de nivel 3 — definește o subsecțiune în cadrul unei secțiuni.
- **În navă:** Antetul intrării de jurnal pentru o singură zi. Conține numărul zilei și subtitlul tematic.
- **Unde se folosește:** În interiorul fiecărui `<article>` (intrare de zi), subsecțiuni blueprint.

## `h4` — Titlu Hartă Laterală

- **Rol HTML:** Titlu de nivel 4 — un subtitlu în cadrul unei secțiuni.
- **În navă:** Eticheta de pe panoul hărții expediției din bara laterală (de exemplu, „Hartă Expediție CSS").
- **Unde se folosește:** În interiorul barei laterale, deasupra listei de linkuri sector/zi, subsecțiuni imbricate.

## `h5` — Sub-etichetă de Punte

- **Rol HTML:** Titlu de nivel 5 — un subtitlu mai fin în cadrul unei secțiuni.
- **În navă:** O etichetă minoră de punte — folosită pentru secțiuni profund imbricate unde ierarhia necesită cinci niveluri.
- **Unde se folosește:** Panouri de informații stratificate pe pagina index.

## `head` — Puntea de Comandă / Hub de Metadate

- **Rol HTML:** Container pentru metadatele documentului — nu este redat direct.
- **În navă:** Computerul central al punții de comandă — conține toate datele de configurare (codare de caractere, viewport, linkuri de stylesheet, titlu) de care nava are nevoie înainte de a putea reda puntea vizibilă.
- **Unde se folosește:** Fiecare pagină. Exact unul înainte de `<body>`.

## `header` — Cartelă Titlu / Banner

- **Rol HTML:** Reprezintă conținut introductiv sau un grup de ajutoare de navigație.
- **În navă:** Cartela cu titlul expediției din partea de sus a zonei de conținut. Stabilește tonul tematic pentru călătoria care urmează.
- **Unde se folosește:** În interiorul zonei log-content, secțiunea hero a paginii index, bannere de pagină.

## `hr` — Pauză Tematică / Linia Orizontului

- **Rol HTML:** Reprezintă o pauză tematică între secțiunile de conținut.
- **În navă:** O linie vizuală a orizontului — marchează o tranziție între secțiunile majore ale călătoriei.
- **Unde se folosește:** Separatoare de secțiuni pe pagina index.

## `html` — Șasiul Rădăcină

- **Rol HTML:** Elementul rădăcină al documentului.
- **În navă:** Coca exterioară a navei. Declară limba (`lang="en"` / `lang="ro"`) pentru ca instrumentele de accesibilitate și motoarele de căutare să poată identifica limba natală a navei.
- **Unde se folosește:** Fiecare pagină. Exact unul per document.

## `li` — Element de Listă / Punct de Navigație

- **Rol HTML:** Un singur element într-o listă ordonată sau neordonată.
- **În navă:** Un singur punct pe harta expediției sau o comandă în meniul navei.
- **Unde se folosește:** Lista de linkuri din bara laterală, lista de navigație din navbar, lista de linkuri din footer.

## `link` — Legătură de Resurse

- **Rol HTML:** Leagă documentul de o resursă externă (stylesheet, favicon, manifest).
- **În navă:** O legătură de date care conectează nava la sisteme externe — stylesheet-ul (style.css), emblema navei (favicon) și manifestul de navigație.
- **Unde se folosește:** În interiorul `<head>`.

## `main` — Puntea Principală

- **Rol HTML:** Zona de conținut dominantă a documentului. Ar trebui să fie doar una per pagină.
- **În navă:** Puntea principală a navei — locul de muncă principal unde sunt afișate intrările de jurnal și bara laterală.
- **Unde se folosește:** Înfășoară zona primară de conținut. Una per pagină.

## `meta` — Semnal de Configurare

- **Rol HTML:** Furnizează metadate despre document (set de caractere, viewport, descriere, culoare tematică).
- **În navă:** Un semnal de configurare transmis browserului înainte ca pagina să se încarce. Fiecare `<meta>` setează un parametru: codarea caracterelor, scara viewport-ului, tema de culoare.
- **Unde se folosește:** În interiorul `<head>`.

## `nav` — Stația de Navigație

- **Rol HTML:** Reprezintă o secțiune de linkuri de navigație.
- **În navă:** Stația de navigație — consola principală de navigare din partea de sus a punții. Conține sigla navei și linkurile principale de comandă.
- **Unde se folosește:** Bara de navigație superioară și navigația din bara laterală.

## `p` — Paragraf / Jurnal Narativ

- **Rol HTML:** Un paragraf de text.
- **În navă:** O pagină din jurnalul narativ al căpitanului — povestea a ceea ce s-a învățat în fiecare zi a călătoriei.
- **Unde se folosește:** Narațiuni în intrările de zi, citiri misiune-status, linii de telemetrie, notă de drepturi de autor, descrieri index.

## `pre` — Transmisie Preformatată

- **Rol HTML:** Reprezintă text preformatat — păstrează spațiile albe și întreruperile de linie.
- **În navă:** O ieșire brută de teleimprimator sau un semnal nefiltrat — afișează blocuri de cod, diagrame ASCII sau ieșire de terminal exact așa cum sunt.
- **Unde se folosește:** În pagina recursive-blueprint pentru blocuri de cod.

## `script` — Încărcător de Sisteme de Control

- **Rol HTML:** Înglobează sau referențiază JavaScript executabil.
- **În navă:** Încărcătorul care activează sistemele de control ale navei — animația de tastare, stocarea persistentă a notelor, filtrul de căutare, comutatorul consolei HUD. Plasat chiar înainte de `</body>` pentru ca puntea să se reda mai întâi, apoi sistemele să devină operaționale.
- **Unde se folosește:** La sfârșitul fiecărei pagini, chiar înainte de `</body>`.

## `section` — Zonă de Conținut / Sector al Punții

- **Rol HTML:** O secțiune generică de conținut, de obicei cu un titlu.
- **În navă:** Un sector major al punții. `<section>` din log-content este spațiul de lucru principal — toate intrările de zi, anunțările de sector și antetele se află în interiorul său.
- **Unde se folosește:** Wrapper-ul log-content, secțiuni ale paginii index, secțiuni ale bibliografiei.

## `span` — Marcaj Inline / Lumină de Semnal

- **Rol HTML:** Un container inline fără semnificație semantică — folosit pentru cârlige de stilizare sau scripting.
- **În navă:** O lumină de semnal sau un indicator de stare — înfășoară bucăți mici de text care necesită un tratament vizual special (valori de telemetrie, subtitluri meta-titlu, stare activă).
- **Unde se folosește:** Numerele zilelor în antetele articolelor, subtitluri meta-titlu, valori de stare telemetrie, decoratori în bara laterală.

## `strong` — Accentuare / Semnal Urgent

- **Rol HTML:** Indică importanță puternică, seriozitate sau urgență.
- **În navă:** O alertă prioritară — marchează instrucțiuni critice, avertismente sau date de înaltă importanță pe care echipajul nu trebuie să le ignore.
- **Unde se folosește:** Notificări importante în pagina blueprint, cuvinte cheie accentuate.

## `table` — Consolă de Date / Citire Senzor

- **Rol HTML:** Reprezintă date tabelare — rânduri și coloane de informații structurate.
- **În navă:** O consolă de date care afișează citiri de senzori, diagrame de alocare a resurselor sau jurnale de semnal în format de grilă.
- **Unde se folosește:** Secțiuni de tabel în pagina de bibliografie.

## `tbody` — Corpul Consolei de Date

- **Rol HTML:** Grupează rândurile de corp ale unui tabel.
- **În navă:** Fluxul principal de date al unui afișaj de consolă — toate citirile active sub rândul de antet.
- **Unde se folosește:** Tabele în pagina de bibliografie.

## `td` — Celulă de Date

- **Rol HTML:** O singură celulă de date într-un rând de tabel.
- **În navă:** O singură citire sau valoare pe consola de date — o informație într-o grilă structurată.
- **Unde se folosește:** Celule de tabel în pagina de bibliografie.

## `textarea` — Tampon de Adnotări al Căpitanului

- **Rol HTML:** Un câmp de introducere text pe mai multe linii.
- **În navă:** Tamponul personal de adnotări al căpitanului — un terminal persistent în care notele și observațiile sunt scrise și stocate local în memoria navei (localStorage).
- **Unde se folosește:** În interiorul note-terminal al fiecărei intrări de zi.

## `th` — Antet al Consolei de Date

- **Rol HTML:** O celulă de antet într-un tabel — definește o etichetă de coloană sau rând.
- **În navă:** Eticheta coloanei pe o consolă de date — spune echipajului ce fel de date conține fiecare coloană.
- **Unde se folosește:** Antete de tabel în pagina de bibliografie.

## `thead` — Grup de Antete al Consolei de Date

- **Rol HTML:** Grupează rândurile de antet ale unui tabel.
- **În navă:** Secțiunea fixă de antet a unei console de date — rămâne constantă în timp ce rândurile de date se derulează dedesubt.
- **Unde se folosește:** Tabele în pagina de bibliografie.

## `title` — Denumirea Navei

- **Rol HTML:** Definește titlul documentului afișat în fila browserului.
- **În navă:** Indicativul navei afișat pe ecranul principal al punții de comandă (de exemplu, „D::0dy55ey | Jurnal CSS").
- **Unde se folosește:** În interiorul `<head>` pe fiecare pagină.

## `tr` — Rând de Date

- **Rol HTML:** Un singur rând de celule într-un tabel.
- **În navă:** O bandă orizontală de citiri pe consola de date — o înregistrare completă pe toate coloanele.
- **Unde se folosește:** Rânduri de tabel în pagina de bibliografie.

## `ul` — Listă Neordonată / Cluster de Puncte de Navigație

- **Rol HTML:** O listă neordonată de elemente.
- **În navă:** Un grup de puncte de navigație pe harta expediției. Fiecare `<li>` este un sector sau o intrare de zi la care călătorul poate sări.
- **Unde se folosește:** Lista de linkuri din bara laterală, lista de comenzi din navbar, coloana de linkuri din footer, liste de caracteristici index.

---

*Generat din adnotările `@structure:`, `@block:`, `@concept:` și `@theme:` integrate în paginile HTML ale proiectului.*
