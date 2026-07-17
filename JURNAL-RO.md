# DAY 00 — Bază de inspirație

Această secțiune fixează punctul de plecare al proiectului `Digital Odyssey`, prin raportare la `Manual_project`, conceptul-mamă care a inspirat direcția actuală. Scopul nu este doar să consemnez o sursă de inspirație, ci să clarific felul în care ideea inițială a fost transformată într-o versiune mai coerentă, mai clară și mai pregătită pentru prezentare publică.

`Digital Odyssey` păstrează nucleul atmosferic al sursei, dar îl reorganizează într-o arhitectură mai riguroasă. În această transformare, am urmărit să îmbin stabilitatea semantică, disciplina tehnică și expresia vizuală într-un singur sistem. Proiectul rezultă astfel ca o platformă bilingvă de învățare, documentare și portofoliu, construită pe o identitate SF retro-futuristă și pe ideea de auto-documentare a codului.

Comparativ cu proiectul-mamă, noul proiect extinde arhitectura în mai multe volume și într-o ierarhie internă mai stratificată. Pe lângă volumele de `Frontend Landscape` și `Database Void` prezente în proiectul inițial, `Digital Odyssey` adaugă volume noi dedicate punții de date JSON, backend-ului, UX-ului și deployment-ului. Această extindere nu schimbă doar cantitatea de conținut, ci și modul în care este organizat traseul de învățare.

Volumele noi sunt gândite astfel încât să continue logica didactică a proiectului și să o ducă mai departe în zone care erau doar sugerate înainte. Volumul `JSON Data Bridge` funcționează ca o punte între front-end și sisteme de date, volumul `Backend Core` introduce logica server-side, volumul `UX Lab` consolidează experiența utilizatorului, iar volumul `Deployment` tratează livrarea și publicarea proiectului ca parte integrantă a arhitecturii.

Această structură mai amplă face proiectul nou mai aproape de o platformă completă decât de o simplă rescriere a proiectului-mamă. În loc să rămână doar la zonele de front-end și bază de date, arhitectura nouă urmărește să acopere întregul ciclu, de la prezentare și structură până la interacțiune, integrare și lansare.

Sursa de inspirație nu se reduce la un singur reper vizual, ci pornește dintr-un câmp mai larg de idei: filosofia explorării, astronomie, astrofizică, literatură, artă, fotografie, muzică, design și cinematografie. `Solaris` rămâne un reper important, dar doar unul dintre multiplele puncte de orientare care dau proiectului tonul său contemplativ, tehnic și poetic.

Această rețea de influențe explică de ce proiectul are atât o dimensiune conceptuală, cât și una atmosferică. El nu urmărește doar să organizeze conținut, ci să construiască o experiență de lectură și navigare în care ideile științifice, estetice și culturale se întâlnesc într-o singură arhitectură.

Ce reprezintă sursa de inspirație:

- Un punct de plecare stilistic și narativ.
- O bază tehnică asupra căreia se construiește noua versiune.
- Un reper didactic pentru modul în care cunoașterea este organizată și transmisă.

Ce aduce `Digital Odyssey`:

- O arhitectură mai clară și mai scalabilă.
- O prezentare bilingvă coerentă.
- O relație mai riguroasă între atmosferă, conținut și structură.
- O formă mai profesională, mai curată și mai potrivită pentru publicare.
- Mai multe volume tematice, cu roluri distincte în traseul de învățare.

Stadiul curent al proiectului este acela al unei platforme interactive de jurnal tehnic și documentare, cu intenție clară de extindere către o formă publică. Din materiale reiese că proiectul nu urmărește doar afișarea rezultatului final, ci și expunerea procesului, a iterațiilor și a deciziilor structurale. Aceasta îi dă atât valoare pedagogică, cât și valoare de portofoliu.

Numele `Digital Odyssey` trimite la navigație cosmică, comandă de bord, telemetrie și explorare digitală. Atmosfera vizuală este construită în jurul unor referințe precum `Solaris`, ecrane CRT, HUD-uri translucide și accente neon, integrate într-un limbaj narativ tehnic. Aici, interfața nu este doar un strat de prezentare, ci și un instrument de orientare și sens.

Structura documentată indică o arhitectură modulară cu pagină principală și pagini satelit, incluzând `index.html`, `recursive-blueprint.html`, `bibliography.html`, fișiere CSS globale și localizate, plus `script.js` pentru logica interactivă. Existența variantelor `style-ro.css` și `style-en.css` confirmă intenția unei localizări controlate, nu a unei traduceri superficiale.

Proiectul folosește o ierarhie semantică strictă, cu un singur `h1`, apoi `h2` pentru volume, `h3` pentru capitole și niveluri mai adânci pentru anexe și submodule. O decizie importantă este tratarea lui React și Angular ca extensii ale capitolului JavaScript, nu ca discipline separate; astfel, structura rămâne didactică, logică și ușor de urmărit.

În forma documentată până acum, proiectul este organizat în arii mari precum `Frontend Landscape` și `Database Void`, iar traseele educaționale acoperă HTML, CSS, JavaScript și SQL. Apar și intenții de extindere către module dedicate pentru frameworks, arhive bibliografice și pagini recursive care explică sistemul din interior.

Sistemul vizual actual folosește o paletă proprie cu tonuri precum `space-dark`, `void-black`, `solar-mint`, `nebula-pink`, `nebula-purple`, `amber-glow` și `starlight-blue`. Scanlines-urile CRT, glassmorphism-ul consolelor și separatoarele cu aspect de tăietură laser nu sunt ornament, ci elemente care definesc lectura, ritmul și orientarea în conținut.

Interfața a fost gândită ca un command deck cu navigație sticky, smooth scroll și separare clară între pagina principală și logurile dedicate. Pe desktop există o logică de tip dual-isolate-scroll, iar pe mobil o consolă tactilă reconfigurată pentru swipe orizontal și spațiere calibrată sub HUD. Această organizare urmărește să păstreze proiectul ușor de parcurs, fără să îl facă static.

Logica interactivă include ascunderea și reapariția navbar-ului în funcție de direcția scroll-ului, urmărirea secțiunilor active, re-trigger pentru animații și sincronizare automată în sidebar. În `script.js` apar mai multe mecanisme coordonate, inclusiv tracking prin `Intersection Observer`, control al ancorelor pe desktop și auto-scroll pentru HUD pe mobil.

Una dintre componentele definitorii este `recursive-blueprint.html`, descrisă ca un terminal recursiv auto-documentat care citește și afișează dinamic fișiere de cod precum `script.js`, `style.css`, `index.html` și `html-log.html`. Aici se vede cel mai clar ideea de proiect în proiect: pagina nu doar afișează sistemul, ci se și raportează la el din interior.

Materialele existente descriu și etape de experimentare cu structuri 3D, de la inele sferice animate până la un reactor geodezic sau icosaedric integrat în hero și în modulul recursiv. A urmat și o fază de optimizare a randării, cu reducerea încărcării GPU și stabilizarea animațiilor pentru un profil fluid de aproximativ 60 FPS.

Proiectul este deja conceput ca sistem bilingv, cu intenția clară de a oferi conținut și organizare atât în română, cât și în engleză. Existența fișierelor localizate și a jurnalelor paralele arată că bilingvismul este structural, nu decorativ.

Până în acest punct, proiectul are deja o componentă puternică de documentare internă, incluzând rezumate de implementare, glosar tehnic, bibliografie și intrări de jurnal care consemnează decizii, bugfix-uri, optimizări și pași viitori. Toate aceste materiale arată că `Digital Odyssey` nu este doar o interfață, ci și o arhivă de proces și un instrument pedagogic.

Pe baza stadiului actual, pașii firești sunt:

- consolidarea structurii finale a repo-ului.
- separarea clară între pagini nucleu, documentație și jurnale.
- refacerea sau rafinarea `index.html` ca hartă principală.
- organizarea manifestului și a jurnalelor bilingve într-o schemă predictibilă.
- migrarea controlată a atmosferei și stilului din proiectul anterior către noua arhitectură.

---

# DAY 01 — Prolegomena

Această intrare fixează cadrul conceptual al proiectului `Digital Odyssey` și marchează tranziția de la `Manual_project` către versiunea rafinată, bilingvă și orientată spre portofoliu. Nu este doar o notă de început, ci o declarație de intenție: proiectul trebuie să funcționeze simultan ca sistem tehnic, obiect didactic și formă de prezentare cu identitate proprie.

Proiectul se sprijină pe trei piloni principali. Primul este pilonul stilistic, ancorat în cultură umanistă, atmosferă literară, imaginație artistică și atenție pentru formă și sens. Al doilea este pilonul tehnic, construit pe informatică, logică, matematică, arhitectură web și disciplină de implementare. Al treilea este pilonul didactic, orientat spre pedagogie, teoria învățării și transmiterea clară a cunoașterii.

În arhitectura proiectului, `index.html` rămâne pagina centrală, echivalentul command deck-ului. Restul paginilor — loguri, blueprint, bibliografie și manifest — sunt organizate modular, fără să rupă claritatea ansamblului. Manifestul este separat de README, iar jurnalul bilingv funcționează ca arhivă vie a procesului, nu ca simplă listă de commit-uri.

Identitatea narativă a proiectului se sprijină pe metafore de navigație cosmică, cameră de comandă, telemetrie și auto-documentare. `Digital Odyssey` păstrează atmosfera cinematografică și referințele culturale ale proiectului-mamă, dar le integrează într-o structură mai coerentă, mai curată și mai scalabilă. În centrul acestei identități stă ideea că interfața poate fi și instrument de învățare, și spațiu de evocare culturală.

Am inițiat proiectul prin separarea clară a conținutului român și englez în folderele `ro/` și `en/`. Această alegere nu ține de comoditate, ci de disciplină structurală: fiecare limbă are propriile pagini, propriul stil și propriul favicon, astfel încât experiența să rămână coerentă în interiorul fiecărei versiuni. În locul unei soluții universale, am preferat o separare curată și predictibilă.

În rădăcina proiectului am păstrat fișierele de orientare și documentare generală: `README.md`, `README-RO.md`, `README-EN.md`, `JURNAL-RO.md` și `JURNAL-EN.md`. Acestea sunt primele puncte de contact ale arhivei și funcționează ca hartă, ghid metodologic și istoric de lucru. Am creat și folderul `docs/`, unde am mutat documentația de referință, inclusiv legenda etichetelor de comentarii, pentru a păstra codul curat și documentația ușor de consultat.

În interiorul fiecărui folder lingvistic păstrez câte un `index.html`, `style.css`, `script.js` și `favicon.svg`. Această structură păstrează codul apropiat de pagina pe care o servește și permite diferențe locale fără amestecarea logicii de prezentare într-un singur fișier comun. Resursele partajate rămân separate de cele locale, ceea ce ajută la scalabilitate și la lizibilitate.

Primele commit-uri au urmărit să fixeze chiar această structură inițială. Am preferat commit-uri mici și clare, fiecare reflectând o etapă logică: inițierea repository-ului, adăugarea documentației bilingve, definirea arhitecturii jurnalelor și stabilizarea primei forme a proiectului. Istoricul Git trebuie să rămână lizibil, nu doar acumulativ.

Am ales forma `D::0dy55ey` ca logo și nume vizual deoarece funcționează ca semnătură, nu doar ca titlu. Am vrut o formă care să trimită imediat la `Digital Odyssey`, dar să aibă și un aer tehnic, compact și memorabil. `D::0dy55ey` servește ca marcă, logo și etichetă vizuală, fiind ușor de transformat în antet, favicon sau element de branding.

Această alegere ajută și la separarea dintre numele conceptual și identitatea vizuală a proiectului. Totuși, un nume public trebuie verificat atent înainte de folosire largă, pentru a evita coliziuni, confuzii de brand sau probleme de lizibilitate. Deocamdată, `D::0dy55ey` rămâne o alegere artistică și tehnică, dar una care trebuie tratată cu grijă la publicare.

Pe scurt, această zi fixează cadrul în care proiectul poate crește: identitate, direcție, structură, bilingvism și metodă. Ea nu descrie doar începutul lucrului, ci și forma în care acel început trebuie citit ulterior.

Pe baza acestei zile, următorii pași firești sunt:

- stabilizarea structurii repo-ului.
- organizarea documentației în rădăcină și în `docs/`.
- continuarea modelului bilingv cu consistență editorială.
- păstrarea identității vizuale în raport cu structura tehnică.

---

# DAY 02 — Primele implementări

În această etapă am trecut de la cadrul conceptual la lucrul efectiv asupra proiectului `Digital Odyssey`. După definirea bazei de inspirație și a prolegomenelor, ziua a fost dedicată primelor implementări care dau formă practică arhitecturii, navigației și logicii interne a proiectului.

Unul dintre cele mai importante lucruri clarificate aici a fost ierarhia de autonomie a paginilor. `index.html` rămâne centrul de comandă al navei-mamă, punctul din care se pilotează ansamblul proiectului. De aici coordonez paginile de log, bibliografie, manifest, documentație și celelalte anexe. Ele sunt module independente ca funcție, dar rămân conectate la centrul principal al flotei, pentru că fac parte din aceeași arhitectură editorială și tehnică.

În schimb, `recursive-blueprint.html` are un statut distinct. Am gândit această pagină ca pe o navă mai mică, auto-pilotată, un explorer din interiorul flotei. Ea are mai multă libertate de mișcare decât celelalte module, fiind nu doar o anexă, ci un sistem care se poate orienta singur, își poate afișa propriile date și poate funcționa ca proiect în proiect. Tocmai de aceea, pagina recursivă are și un `h1` propriu, la fel ca în `Manual_project`, pentru a fi percepută ca instanță autonomă.

Am continuat și rafinarea ierarhiei semantice. Proiectul păstrează o structură logică strictă, cu un singur `h1` în `index.html` (pentru corpurile dependente de nava-mamă), apoi `h2` pentru volume, `h3` pentru capitole și sectoare și niveluri mai adânci (`h4` și `h5`) pentru anexe și submodule. Decizia de a trata React și Angular ca extensii ale capitolului JavaScript, nu ca discipline separate, rămâne esențială: ea păstrează coerența didactică și reflectă felul în care cunoașterea trebuie transmisă ordonat.

Pe partea vizuală, am fixat identitatea retro-futuristă a proiectului. Limbajul cromatic, scanlines-urile CRT, efectele de glassmorphism, umbrele interioare și atmosfera inspirată de filosofia explorării, astronomie, astrofizică, literatură, artă, fotografie, muzică, design și cinematografie conturează nu doar un stil, ci un spațiu de lectură și navigare cu personalitate proprie. `Solaris` rămâne un reper important, dar doar unul dintre reperele care dau proiectului tonul său contemplativ și tehnic.

În același timp, am început consolidarea mecanicilor de navigație și interactivitate. Modelul de command deck, meniul sticky, scroll-ul lin, urmărirea secțiunilor active și sincronizarea stării în sidebar construiesc o interfață care nu obligă utilizatorul să se piardă în conținut, ci îl ghidează controlat prin el. Această alegere susține atât partea tehnică, cât și cea didactică a proiectului.

Un alt element important a fost așezarea proiectului în registrul său de documentare. Jurnalele, bibliografia și pagina `recursive-blueprint.html` nu sunt simple anexe, ci instrumente prin care proiectul devine explicabil din interior. În cazul paginii recursive, instrumentul devine parte a conținutului explicat, pentru că pagina se auto-referă și își inspectează propriile componente.

În acest punct, direcția este clară: proiectul avansează ca un ecosistem coerent de învățare, documentare și prezentare, în care `index.html` conduce nava-mamă, modulele satelit își îndeplinesc rolurile precise, iar `recursive-blueprint.html` funcționează ca un explorator cu autonomie mai mare. Următoarele etape firești sunt rafinarea structurii finale, stabilizarea jurnalelor, completarea implementărilor tehnice și păstrarea unei relații echilibrate între atmosferă, rigoare și lizibilitate.

Pe baza acestei zile, următorii pași firești sunt:

- consolidarea structurii finale a paginilor.
- menținerea separării clare dintre module și centrul de comandă.
- păstrarea autonomiei speciale a paginii recursive.
- continuarea armonizării dintre semantică, design și interactivitate.

---

# DAY 03 — GitHub: Pathway pentru publicarea proiectului

Această zi este dedicată traseului de publicare a proiectului pe GitHub. Nu este doar un set de comenzi, ci o secvență de lucru care păstrează istoricul lizibil, starea repository-ului controlată și trecerea de la dezvoltare locală la arhivă publică făcută metodic.

## 1. Pregătirea repository-ului local

Mai întâi verific structura proiectului și mă asigur că fișierele finale sunt așezate corect în folderele lor: `ro/`, `en/`, `docs/`, plus fișierele de rădăcină precum `README.md` și jurnalele bilingve.

## 2. Inițializarea Git, dacă este nevoie

Dacă repository-ul nu a fost deja inițializat, rulez:

```bash
git init
```

Acest pas creează istoricul Git local al proiectului.

## 3. Verificarea stării curente

```bash
git status
```

Aici mă asigur că știu exact ce fișiere sunt noi, modificate sau pregătite pentru commit.

## 4. Adăugarea fișierelor în staging

```bash
git add .
```

Dacă vreau să adaug doar anumite fișiere, le pot selecta explicit, dar pentru un commit de etapă folosesc de obicei tot ce este relevant.

## 5. Crearea commit-ului

```bash
git commit -m "docs: add initial bilingual project structure"
```

Mesajul commit-ului trebuie să fie scurt, clar și consecvent cu stilul proiectului.

## 6. Conectarea cu GitHub

```bash
git remote add origin <URL_REPOSITORY>
```

Dacă remote-ul există deja, verific mai întâi configurația curentă.

## 7. Publicarea proiectului

```bash
git push -u origin main
```

Dacă ramura principală are alt nume, înlocuiesc `main` cu numele corect.

## 8. Verificarea rezultatului

După push, verific pe GitHub dacă structura, commit-ul și fișierele au apărut corect.

## 9. Continuarea incrementală

Pe măsură ce lucrez, repet ciclul:
`modificare → status → add → commit → push`.

Așa păstrez istoricul curat și ușor de urmărit.

---

# DAY 04 — Etichete de commit și rescrierea mesajelor

Această zi fixează convențiile de scriere a mesajelor de commit și apoi traseul tehnic pentru rescrierea mesajelor deja existente. Scopul este să păstrez istoricul proiectului coerent, lizibil și util pentru oricine îi urmărește evoluția.

## Etichete recomandate

- `feat`: funcționalitate nouă.
- `fix`: corectarea unei erori.
- `docs`: modificări doar în documentație.
- `style`: schimbări de formatare sau stil, fără impact pe logică.
- `refactor`: reorganizare internă a codului, fără funcționalitate nouă.
- `perf`: îmbunătățiri de performanță.
- `test`: adăugare sau modificare de teste.
- `build`: schimbări legate de build, dependențe sau configurare de compilare.
- `ci`: modificări pentru integrare continuă sau pipeline-uri.
- `chore`: întreținere generală, fără impact direct asupra produsului.
- `revert`: anularea unui commit anterior.
- `improve`: îmbunătățire generală, folosită când nu se potrivește altă etichetă.
- `wip`: lucru în desfășurare, folosit temporar.

## Observații de stil

`chore`, `docs` și `style` sunt cele mai frecvente pentru jurnale și repo-uri de prezentare. Pentru proiecte formale, este bine să păstrez același model de mesaj în tot istoricul. Consistența mesajelor ajută la citirea evoluției proiectului și la separarea clară între modificările de conținut și cele de structură.

## Rescrierea mesajelor existente

Rescrierea mesajelor de commit deja făcute se face fără a schimba conținutul fișierelor, folosind `git rebase -i --root` și acțiunea `reword`.

## Pași urmați

1. Am verificat starea repository-ului cu `git status`.
2. Am confirmat că working tree-ul era curat.
3. Am pornit rebase-ul interactiv de la primul commit cu `git rebase -i --root`.
4. Am schimbat `pick` în `reword` pentru commiturile alese.
5. Am salvat fișierul de rebase și am continuat procesul.
6. Am introdus mesajele noi, unul câte unul, la prompturile deschise de Git.
7. Am finalizat rebase-ul.
8. Am verificat rezultatul cu `git status` și `git log --oneline --decorate --graph --all`.
9. Am publicat istoricul nou pe GitHub cu `git push --force-with-lease`.

## Mesajele finale folosite

- `chore: initialize project repository`
- `docs: add bilingual project README`
- `docs: add Romanian README`
- `docs: refine README documentation structure`
- `docs: add bilingual journal structure and project prolegomena`
- `docs: update journal before commit rewrite`

## Observații tehnice

În lista de rebase se modifică doar `pick` în `reword`. Mesajele noi nu se scriu în lista inițială, ci la prompturile separate ale lui Git. `--force-with-lease` este preferabil față de `--force` deoarece oferă o verificare suplimentară înainte de push.

Pe scurt, această zi fixează disciplina istoriei Git: mesajele trebuie să fie clare, iar rescrierea lor trebuie să păstreze aceeași rigoare ca restul proiectului.

---

# DAY 05 — Comentarii, documentație și `<head>`

Această zi adună mai multe decizii de arhitectură care țin de claritatea codului, ordinea documentației și structura semantică a paginilor HTML. Toate sunt legate de aceeași idee: proiectul trebuie să fie ușor de citit, ușor de întreținut și explicabil din interior.

## Decizii stilistice și tehnice

În discuțiile despre proiect am stabilit folosirea unei legende de comentarii cu etichete fixe, precum `@block`, `@path`, `@meta`, `@reason`, `@warning` și `@bridge`. Această legendă nu este decorativă; ea organizează explicațiile direct în fișierele sursă și face codul mai ușor de urmărit.

Am decis și păstrarea fișierelor `README-RO.md`, `README-EN.md`, `JURNAL-RO.md` și `JURNAL-EN.md` în rădăcina proiectului, în timp ce documentația de detaliu, cum este legenda comentariilor, stă în `docs/`. Această separare păstrează rădăcina ca punct de intrare și evită amestecarea documentației principale cu materialele de referință.

Fiecare limbă are propriile fișiere locale pentru HTML, CSS, JS și favicon. Nu este doar o împărțire tehnică, ci și una editorială: fiecare versiune are propria atmosferă, propriul text și propriul ritm. În același timp, conținutul de bază rămâne în oglindă, astfel încât proiectul să rămână ușor de întreținut.

Am clarificat și rolul lui `theme-color`. Acesta nu reprezintă culoarea conținutului din pagină, ci culoarea interfeței browserului sau a barelor din jurul paginii, mai ales pe mobil. În loc să o leg strict de limbă, am concluzionat că este mai util să o tratez pe familii de pagini, în funcție de rol: pagini principale, pagini de jurnal, pagini bibliografice sau pagini de suport.

În final, am stabilit că pentru `ro/index.html` și `en/index.html` meta description-ul trebuie adaptat la limba paginii, iar titlul principal trebuie să corespundă identității lingvistice și conceptuale. Pentru versiunea engleză, `Charting Digital Frontiers` rămâne o formulare potrivită, mai amplă și mai poetică.

## Containerul `<head>` și elementele sale

### Rolul lui `<head>`

Elementul `<head>` este zona din documentul HTML în care păstrez metadatele și resursele care ajută pagina să fie interpretată corect de browser, motoare de căutare și alte instrumente. Conținutul din `<head>` nu este, în mod normal, afișat direct în pagină, dar este esențial pentru funcționarea, afișarea și identificarea documentului.

Prin intermediul lui `<head>`, setez informațiile de bază ale paginii, leg fișiere externe și controlez aspecte tehnice precum codarea, compatibilitatea, comportamentul pe mobil și identitatea vizuală minimă a documentului. Fără acest container, pagina ar fi incompletă structural și mai greu de administrat.

### Elemente importante din `<head>`

#### `<title>`

Setează titlul paginii vizibil în tab-ul browserului. Este unul dintre cele mai importante elemente pentru identificarea paginii în marcaje, ferestre și rezultate de căutare.

#### `<meta>`

Specifică informații despre document. Aici pot defini setul de caractere, descrierea paginii, instrucțiunile pentru viewport pe mobil, culoarea temei browserului și alte metadate utile.

#### `<link>`

Conectează pagina cu fișiere externe, cum ar fi foile de stil CSS, favicon-ul, fonturile sau alte resurse necesare pentru randare și prezentare.

#### `<style>`

Permite adăugarea de cod CSS direct în pagină. Îl folosesc atunci când vreau stiluri locale rapide sau când o pagină are nevoie de reguli foarte specifice fără să apela imediat la un fișier extern.

#### `<script>`

Leagă sau conține cod JavaScript. Îl folosesc pentru logică interactivă, comportamente dinamice și funcționalități care apar după încărcarea paginii sau în timpul utilizării ei.

#### `<base>`

Stabilește URL-ul de bază pentru linkurile relative din document. Îl folosesc rar, dar poate fi util când vreau ca toate trimiterile relative să pornească dintr-un punct fix.

#### `<meta charset="UTF-8">`

Definește setul de caractere folosit de document. În practică, UTF-8 este alegerea standard și cea mai sigură pentru diacritice și caractere internaționale.

#### `<meta name="viewport">`

Controlează modul în care pagina se adaptează pe ecrane diferite, mai ales pe telefoane și tablete. Este esențial pentru designul responsive.

#### `<meta name="description">`

Oferă o descriere scurtă a paginii. Această descriere poate fi folosită de motoarele de căutare și ajută la prezentarea clară a conținutului.

#### `<meta name="theme-color">`

Setează o culoare sugerată pentru interfața browserului, mai ales pe mobil. Aceasta poate colora bara de sus sau alte elemente de browser, în funcție de suportul platformei.

### Cum folosesc `<head>` în proiect

În `Digital Odyssey`, tratez `<head>` ca pe un strat de control și identitate. Aici definesc limba, titlul, descrierea, fișierele locale și resursele comune, astfel încât fiecare pagină să pornească dintr-o bază clară și previzibilă. Pentru paginile bilingve, schimb mai ales titlul și meta description-ul, iar restul structurii rămâne stabil.

---

# DAY 06 — Implementarea comentariilor și a structurii de documentație

Această zi consolidează modul în care proiectul leagă codul de documentație printr-o structură clară de comentarii și prin separarea materialelor de referință de fișierele de lucru. Nu este o completare superficială, ci o decizie de arhitectură care ajută la mentenanță, la citirea codului și la învățarea din interiorul proiectului.

## Legenda comentariilor

Am stabilit folosirea unei legende de comentarii cu etichete fixe, precum `@block`, `@path`, `@meta`, `@reason`, `@warning` și `@bridge`. Fiecare etichetă are rolul de a face conținutul din cod mai ușor de parcurs și mai ușor de căutat. În loc de note ad-hoc, proiectul obține astfel o metodă consistentă de documentare la nivel de sursă.

`@block` marchează o zonă logică, `@path` indică un traseu sau o referință de fișier, `@meta` descrie contextul, `@reason` explică motivația, `@warning` semnalează o atenționare, iar `@bridge` leagă între ele două părți ale sistemului. Acest vocabular nu este decorativ, ci transformă comentariul într-un instrument didactic.

## Organizarea documentației

Am decis să păstrez fișierele `README-RO.md`, `README-EN.md`, `JURNAL-RO.md` și `JURNAL-EN.md` în rădăcina proiectului, iar documentația de detaliu, precum legenda comentariilor, să stea în `docs/`. Această separare păstrează rădăcina ca punct de intrare și evită amestecarea documentației principale cu materialele de referință.

În această schemă, rădăcina repo-ului rămâne curată și orientată spre navigare, iar `docs/` devine locul potrivit pentru materialele metodologice. Astfel, documentația nu se risipește în fișierele principale, dar rămâne suficient de aproape de cod încât să fie folosită în mod real.

## Separarea pe limbă

Fiecare limbă are propriile fișiere locale pentru HTML, CSS, JS și favicon. Această separare nu este doar tehnică, ci și editorială: fiecare versiune are propria atmosferă, propriul text și propriul ritm. În același timp, conținutul de bază rămâne oglindit, astfel încât proiectul să rămână ușor de întreținut.

Aceeași logică se aplică și la meta description și la titlu: fiecare pagină trebuie să-și reflecte identitatea lingvistică și conceptuală. Pentru versiunea engleză, `Charting Digital Frontiers` rămâne formularea cea mai potrivită pentru titlu.

## Cum folosesc `<head>`

În `Digital Odyssey`, tratez `<head>` ca pe un strat de control și identitate. Aici definesc limba, titlul, descrierea, fișierele locale și resursele comune, astfel încât fiecare pagină să pornească dintr-o bază clară și previzibilă. Pentru paginile bilingve, schimb mai ales titlul și meta description-ul, iar restul structurii rămâne stabil.

---

# DAY 07 - 

# Cum urc fișierele pe GitHub

Când lucrez la un proiect, fluxul corect nu este doar „upload”, ci mai precis: **adaug fișierele în repository, le fac commit și apoi le trimit pe GitHub cu push**.  
În Git, pașii standard sunt: modific fișierele local, le pun în staging cu `git add`, creez un commit cu mesaj și apoi folosesc `git push` pentru a publica schimbările pe GitHub.

## Termeni corecți

- **Repository / repo** = spațiul proiectului pe GitHub.
- **Stage / add** = pregătirea fișierelor pentru commit.
- **Commit** = salvarea unei versiuni locale, cu mesaj .
- **Push** = trimiterea commitului de pe calculatorul meu pe GitHub.
- **Upload** = termen general; în interfața GitHub apare ca „Upload files” când încarc direct din browser .

## Pașii pe care îi urmez

1. Creez sau modific fișierele pe calculator, de exemplu `.md`, `.html`, `.css` sau `.js`.
2. Verific ce s-a schimbat cu `git status`.
3. Adaug fișierele în staging cu `git add .` sau selectiv.
4. Fac commit cu un mesaj clar și scurt.
5. Trimit modificările pe GitHub cu `git push`.
6. Verific pe GitHub dacă fișierele au apărut corect.

## Exemplu de comenzi

```bash
git status
git add .
git commit -m "docs: update bilingual journal structure"
git push
```
---

# DAY 07 — GitHub: Urcarea fișierelor

Această zi documentează modul în care urc fișierele pe GitHub, folosind terminologia corectă din Git. În practică, nu spun doar că am făcut „upload”, ci mai exact că am **adăugat fișierele în repository, le-am comis și le-am trimis pe GitHub cu push**.

## Termeni corecți

- **Repository / repo** = spațiul proiectului pe GitHub.
- **Stage / add** = pregătirea fișierelor pentru commit.
- **Commit** = salvarea unei versiuni locale, cu mesaj .
- **Push** = trimiterea commitului de pe calculator pe GitHub.
- **Upload** = termen general; în interfața GitHub apare ca „Upload files” când încarc direct din browser .

## Pașii standard

1. Creez sau modific fișierele pe calculator, de exemplu `.md`, `.html`, `.css` sau `.js`.
2. Verific ce s-a schimbat cu `git status`.
3. Adaug fișierele în staging cu `git add .` sau selectiv.
4. Fac commit cu un mesaj clar și scurt.
5. Trimit modificările pe GitHub cu `git push`.
6. Verific pe GitHub dacă fișierele au apărut corect.

## Exemplu de comenzi

```bash
git status
git add .
git commit -m "docs: update bilingual journal structure"
git push
```

## Cum formulez în jurnal

Am modificat fișierele local, le-am adăugat în staging, am creat un commit cu mesaj descriptiv și am făcut push pe GitHub. În terminologia Git, acest flux înseamnă staging, commit și push, nu doar upload.

## De ce folosesc termenii aceștia

„Upload” este un termen general, dar în Git e mai precis să vorbesc despre staging, commit și push. Asta păstrează descrierea clară, tehnică și consecventă cu restul jurnalului.