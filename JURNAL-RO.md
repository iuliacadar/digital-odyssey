# DAY 00 — Bază de inspirație

Această secțiune fixează punctul de plecare al proiectului `D::0dy55ey`, prin raportare la `Manual_project`, conceptul-mamă care a inspirat direcția actuală. Scopul nu este doar să consemnez o sursă de inspirație, ci să clarific felul în care ideea inițială a fost transformată într-o versiune mai coerentă, mai clară și mai pregătită pentru prezentare publică.

`D::0dy55ey` păstrează nucleul atmosferic al sursei, dar îl reorganizează într-o arhitectură mai riguroasă. În această transformare, am urmărit să îmbin stabilitatea semantică, disciplina tehnică și expresia vizuală într-un singur sistem. Proiectul rezultă astfel ca o platformă bilingvă de învățare, documentare și portofoliu, construită pe o identitate SF retro-futuristă și pe ideea de auto-documentare a codului.

Comparativ cu proiectul-mamă, noul proiect extinde arhitectura în mai multe volume și într-o ierarhie internă mai stratificată. Pe lângă volumele de `Frontend Landscape` și `Database Void` prezente în proiectul inițial, `D::0dy55ey` adaugă volume noi dedicate punții de date JSON, backend-ului, UX-ului și deployment-ului. Această extindere nu schimbă doar cantitatea de conținut, ci și modul în care este organizat traseul de învățare.

Volumele noi sunt gândite astfel încât să continue logica didactică a proiectului și să o ducă mai departe în zone care erau doar sugerate înainte. Volumul `JSON Data Bridge` funcționează ca o punte între front-end și sisteme de date, volumul `Backend Core` introduce logica server-side, volumul `UX Lab` consolidează experiența utilizatorului, iar volumul `Deployment` tratează livrarea și publicarea proiectului ca parte integrantă a arhitecturii.

Această structură mai amplă face proiectul nou mai aproape de o platformă completă decât de o simplă rescriere a proiectului-mamă. În loc să rămână doar la zonele de front-end și bază de date, arhitectura nouă urmărește să acopere întregul ciclu, de la prezentare și structură până la interacțiune, integrare și lansare.

Sursa de inspirație nu se reduce la un singur reper vizual, ci pornește dintr-un câmp mai larg de idei: filosofia explorării, astronomie, astrofizică, literatură, artă, fotografie, muzică, design și cinematografie. `Solaris` rămâne un reper important, dar doar unul dintre multiplele puncte de orientare care dau proiectului tonul său contemplativ, tehnic și poetic.

Această rețea de influențe explică de ce proiectul are atât o dimensiune conceptuală, cât și una atmosferică. El nu urmărește doar să organizeze conținut, ci să construiască o experiență de lectură și navigare în care ideile științifice, estetice și culturale se întâlnesc într-o singură arhitectură.

Ce reprezintă sursa de inspirație:

- Un punct de plecare stilistic și narativ.
- O bază tehnică asupra căreia se construiește noua versiune.
- Un reper didactic pentru modul în care cunoașterea este organizată și transmisă.

Ce aduce `D::0dy55ey`:

- O arhitectură mai clară și mai scalabilă.
- O prezentare bilingvă coerentă.
- O relație mai riguroasă între atmosferă, conținut și structură.
- O formă mai profesională, mai curată și mai potrivită pentru publicare.
- Mai multe volume tematice, cu roluri distincte în traseul de învățare.

### Moștenirea tehnică din Manual_project

Proiectul-mamă conținea deja realizări tehnice semnificative pe care le-am preluat și rafinat. Cea mai vizibilă dintre acestea este **rețeaua de reactor poliedric 3D** — un icosaedru construit din 20 de fețe triunghiulare folosind CSS `clip-path` pur, poziționate pe coordonate sferice 3D. În Manual_project, acest sistem suferea de un blocaj GPU critic: 20 de triunghiuri vectoriale suprapuse, combinate cu proprietăți grele de `filter: drop-shadow()`, provocau o inundare masivă de repaint care îngheța instanțele browserului și declanșa throttling termic pe CPU. Soluția inginerească a fost înlocuirea filtrelor grele de blur cu metrici stricte de `inset` și `box-shadow` și injectarea de提示 `will-change: transform, opacity`, forțând browserul să izoleze ochiurile 3D pe straturi GPU dedicate de compozitare. Aceasta a redus overhead-ul la aproape zero și a stabilizat animația la un profil fluid de 60 FPS.

Proiectul-mamă a pionierat și layout-ul **Dual-Isolate-Scroll** pentru desktop: un CSS Grid rigid în care navigația laterală și zona de conținut aveau fiecare propriul flux independent de scroll, în timp ce pe mobil se folosea o consolă tactilă orizontală. **Intersection Observer API** a fost configurat cu margini de rădăcină precise (`-20% 0px -70% 0px`) pentru a detecta vizibilitatea articolelor și a sincroniza starea activă în sidebar. Șase mecanisme JavaScript coordonate guvernau cockpitul: ascunderea/afișarea navbar-ului pe direcția de scroll, urmărirea secțiunilor active, re-declanșarea animației de typing, tracking-ul radar pe desktop, interceptarea anti-deplasare a ancorelor și auto-scroll-ul HUD pe mobil.

Strategia bilingvă era deja prezentă în Manual_project prin fișierele separate `style-en.css` și `style-ro.css`, care asigurau suprascrieri CSS localizate fără a sparge layout-ul. Conceptul de pagină recursivă — `recursive-blueprint.html` — a fost gândit ca un terminal split-screen care preia și afișează dinamic propriul cod sursă al proiectului, transformând baza de cod într-un instrument didactic auto-documentat. Aici se vede cel mai clar ideea de „proiect în proiect".

Stadiul curent al proiectului este acela al unei platforme interactive de jurnal tehnic și documentare, cu intenție clară de extindere către o formă publică. Din materiale reiese că proiectul nu urmărește doar afișarea rezultatului final, ci și expunerea procesului, a iterațiilor și a deciziilor structurale. Aceasta îi dă atât valoare pedagogică, cât și valoare de portofoliu.

Numele `D::0dy55ey` trimite la navigație cosmică, comandă de bord, telemetrie și explorare digitală. Atmosfera vizuală este construită în jurul unor referințe precum `Solaris`, ecrane CRT, HUD-uri translucide și accente neon, integrate într-un limbaj narativ tehnic. Aici, interfața nu este doar un strat de prezentare, ci și un instrument de orientare și sens.

Structura documentată indică o arhitectură modulară cu pagină principală și pagini satelit, incluzând `index.html`, `recursive-blueprint.html`, `bibliography.html`, fișiere CSS globale și localizate, plus `script.js` pentru logica interactivă. Existența variantelor `style-ro.css` și `style-en.css` confirmă intenția unei localizări controlate, nu a unei traduceri superficiale.

Proiectul folosește o ierarhie semantică strictă, cu un singur `h1`, apoi `h2` pentru volume, `h3` pentru capitole și niveluri mai adânci pentru anexe și submodule. O decizie importantă este tratarea lui React și Angular ca extensii ale capitolului JavaScript, nu ca discipline separate; astfel, structura rămâne didactică, logică și ușor de urmărit.

În forma documentată până acum, proiectul este organizat în arii mari precum `Frontend Landscape` și `Database Void`, iar traseele educaționale acoperă HTML, CSS, JavaScript și SQL. Apar și intenții de extindere către module dedicate pentru frameworks, arhive bibliografice și pagini recursive care explică sistemul din interior.

Sistemul vizual actual folosește o paletă proprie cu tonuri precum `space-dark`, `void-black`, `solar-mint`, `nebula-pink`, `nebula-purple`, `amber-glow` și `starlight-blue`. Scanlines-urile CRT, glassmorphism-ul consolelor și separatoarele cu aspect de tăietură laser nu sunt ornament, ci elemente care definesc lectura, ritmul și orientarea în conținut.

Interfața a fost gândită ca un command deck cu navigație sticky, smooth scroll și separare clară între pagina principală și logurile dedicate. Pe desktop există o logică de tip dual-isolate-scroll, iar pe mobil o consolă tactilă reconfigurată pentru swipe orizontal și spațiere calibrată sub HUD. Această organizare urmărește să păstreze proiectul ușor de parcurs, fără să îl facă static.

Logica interactivă include ascunderea și reapariția navbar-ului în funcție de direcția scroll-ului, urmărirea secțiunilor active, re-trigger pentru animații și sincronizare automată în sidebar. În `script.js` apar mai multe mecanisme coordonate, inclusiv tracking prin `Intersection Observer`, control al ancorelor pe desktop și auto-scroll pentru HUD pe mobil.

Una dintre componentele definitorii este `recursive-blueprint.html`, descrisă ca un terminal recursiv auto-documentat care citește și afișează dinamic fișiere de cod precum `script.js`, `style.css`, `index.html` și `html-log.html`. Aici se vede cel mai clar ideea de proiect în proiect: pagina nu doar afișează sistemul, ci se și raportează la el din interior.

Materialele existente descriu și etape de experimentare cu structuri 3D, de la inele sferice animate până la un reactor geodezic sau icosaedric integrat în hero și în modulul recursiv. A urmat și o fază de optimizare a randării, cu reducerea încărcării GPU și stabilizarea animațiilor pentru un profil fluid de aproximativ 60 FPS.

Proiectul este deja conceput ca sistem bilingv, cu intenția clară de a oferi conținut și organizare atât în română, cât și în engleză. Existența fișierelor localizate și a jurnalelor paralele arată că bilingvismul este structural, nu decorativ.

Până în acest punct, proiectul are deja o componentă puternică de documentare internă, incluzând rezumate de implementare, glosar tehnic, bibliografie și intrări de jurnal care consemnează decizii, bugfix-uri, optimizări și pași viitori. Toate aceste materiale arată că `D::0dy55ey` nu este doar o interfață, ci și o arhivă de proces și un instrument pedagogic.

Pe baza stadiului actual, pașii firești sunt:

- consolidarea structurii finale a repo-ului.
- separarea clară între pagini nucleu, documentație și jurnale.
- refacerea sau rafinarea `index.html` ca hartă principală.
- organizarea manifestului și a jurnalelor bilingve într-o schemă predictibilă.
- migrarea controlată a atmosferei și stilului din proiectul anterior către noua arhitectură.

---

# DAY 01 — Prolegomena

Această intrare fixează cadrul conceptual al proiectului `D::0dy55ey` și marchează tranziția de la `Manual_project` către versiunea rafinată, bilingvă și orientată spre portofoliu. Nu este doar o notă de început, ci o declarație de intenție: proiectul trebuie să funcționeze simultan ca sistem tehnic, obiect didactic și formă de prezentare cu identitate proprie.

Proiectul se sprijină pe trei piloni principali, care reflectă atât formația mea academică, cât și obiectivele mele de învățare. Primul este **pilonul tehnic**, construit pe informatică, logică, matematică, arhitectură web și disciplină de implementare — meșteșugul de a scrie cod care funcționează, care este curat și care respectă standardele. Al doilea este **pilon didactic**, orientat spre pedagogie, teoria învățării și transmiterea clară a cunoașterii — meșteșugul de a face codul explicabil din interior, astfel încât oricine citește fișierele sursă să poată învăța din ele. Al treilea este **pilon narativ**, ancorat în cultură umanistă, atmosferă literară, imaginație artistică și atenție pentru formă și sens — meșteșugul de a transforma o interfață tehnică într-un spațiu care spune o poveste.

Formația mea în filosofie și masteratul în literatură americană — cu accent pe weird tales și filosofia spațiului narativ — nu sunt separate de acest proiect. Ele sunt direct încorporate în arhitectura lui. Ideea că o bază de cod poate fi citită ca un text, că o interfață poate funcționa ca un spațiu narativ și că învățarea programării este o formă de explorare și descoperire provin tocmai din această formație. Metafora navigației cosmice, interfața de comandă, limbajul de telemetrie și auto-documentarea recursivă nu sunt ornamente decorative: ele sunt expresia practică a convingerii că tehnologia și umanioarele aparțin aceleiași conversații.

În arhitectura proiectului, `index.html` rămâne pagina centrală, echivalentul command deck-ului. Restul paginilor — loguri, blueprint, bibliografie și manifest — sunt organizate modular, fără să rupă claritatea ansamblului. Manifestul este separat de README, iar jurnalul bilingv funcționează ca arhivă vie a procesului, nu ca simplă listă de commit-uri.

Identitatea narativă a proiectului se sprijină pe metafore de navigație cosmică, cameră de comandă, telemetrie și auto-documentare. `D::0dy55ey` păstrează atmosfera cinematografică și referințele culturale ale proiectului-mamă, dar le integrează într-o structură mai coerentă, mai curată și mai scalabilă. În centrul acestei identități stă ideea că interfața poate fi și instrument de învățare, și spațiu de evocare culturală.

Am inițiat proiectul prin separarea clară a conținutului român și englez în folderele `ro/` și `en/`. Această alegere nu ține de comoditate, ci de disciplină structurală: fiecare limbă are propriile pagini, propriul stil și propriul favicon, astfel încât experiența să rămână coerentă în interiorul fiecărei versiuni. În locul unei soluții universale, am preferat o separare curată și predictibilă.

În rădăcina proiectului am păstrat fișierele de orientare și documentare generală: `README.md`, `README-RO.md`, `README-EN.md`, `JURNAL-RO.md` și `JURNAL-EN.md`. Acestea sunt primele puncte de contact ale arhivei și funcționează ca hartă, ghid metodologic și istoric de lucru. Am creat și folderul `docs/`, unde am mutat documentația de referință, inclusiv legenda etichetelor de comentarii, pentru a păstra codul curat și documentația ușor de consultat.

În interiorul fiecărui folder lingvistic păstrez câte un `index.html`, `style.css`, `script.js` și `favicon.svg`. Această structură păstrează codul apropiat de pagina pe care o servește și permite diferențe locale fără amestecarea logicii de prezentare într-un singur fișier comun. Resursele partajate rămân separate de cele locale, ceea ce ajută la scalabilitate și la lizibilitate.

Primele commit-uri au urmărit să fixeze chiar această structură inițială. Am preferat commit-uri mici și clare, fiecare reflectând o etapă logică: inițierea repository-ului, adăugarea documentației bilingve, definirea arhitecturii jurnalelor și stabilizarea primei forme a proiectului. Istoricul Git trebuie să rămână lizibil, nu doar acumulativ.

Am ales forma `D::0dy55ey` ca logo și nume vizual deoarece funcționează ca semnătură, nu doar ca titlu. Am vrut o formă care să trimită imediat la `D::0dy55ey`, dar să aibă și un aer tehnic, compact și memorabil. `D::0dy55ey` servește ca marcă, logo și etichetă vizuală, fiind ușor de transformat în antet, favicon sau element de branding.

Această alegere ajută și la separarea dintre numele conceptual și identitatea vizuală a proiectului. Totuși, un nume public trebuie verificat atent înainte de folosire largă, pentru a evita coliziuni, confuzii de brand sau probleme de lizibilitate. Deocamdată, `D::0dy55ey` rămâne o alegere artistică și tehnică, dar una care trebuie tratată cu grijă la publicare.

Pe scurt, această zi fixează cadrul în care proiectul poate crește: identitate, direcție, structură, bilingvism și metodă. Ea nu descrie doar începutul lucrului, ci și forma în care acel început trebuie citit ulterior.

Pe baza acestei zile, următorii pași firești sunt:

- stabilizarea structurii repo-ului.
- organizarea documentației în rădăcină și în `docs/`.
- continuarea modelului bilingv cu consistență editorială.
- păstrarea identității vizuale în raport cu structura tehnică.

---

# DAY 02 — Primele implementări

În această etapă am trecut de la cadrul conceptual la lucrul efectiv asupra proiectului `D::0dy55ey`. După definirea bazei de inspirație și a prolegomenelor, ziua a fost dedicată primelor implementări care dau formă practică arhitecturii, navigației și logicii interne a proiectului.

Unul dintre cele mai importante lucruri clarificate aici a fost ierarhia de autonomie a paginilor. `index.html` rămâne centrul de comandă al navei-mamă, punctul din care se pilotează ansamblul proiectului. De aici coordonez paginile de log, bibliografie, manifest, documentație și celelalte anexe. Ele sunt module independente ca funcție, dar rămân conectate la centrul principal al flotei, pentru că fac parte din aceeași arhitectură editorială și tehnică.

În schimb, `recursive-blueprint.html` are un statut distinct. Am gândit această pagină ca pe o navă mai mică, auto-pilotată, un explorer din interiorul flotei. Ea are mai multă libertate de mișcare decât celelalte module, fiind nu doar o anexă, ci un sistem care se poate orienta singur, își poate afișa propriile date și poate funcționa ca proiect în proiect. Tocmai de aceea, pagina recursivă are și un `h1` propriu, la fel ca în `Manual_project`, pentru a fi percepută ca instanță autonomă.

Am continuat și rafinarea ierarhiei semantice. Proiectul păstrează o structură logică strictă, cu un singur `h1` în `index.html` (pentru corpurile dependente de nava-mamă), apoi `h2` pentru volume, `h3` pentru capitole și sectoare și niveluri mai adânci (`h4` și `h5`) pentru anexe și submodule. Decizia de a trata React și Angular ca extensii ale capitolului JavaScript, nu ca discipline separate, rămâne esențială: ea păstrează coerența didactică și reflectă felul în care cunoașterea trebuie transmisă ordonat.

Pe partea vizuală, am fixat identitatea retro-futuristă a proiectului. Limbajul cromatic, scanlines-urile CRT, efectele de glassmorphism, umbrele interioare și atmosfera inspirată de filosofia explorării, astronomie, astrofizică, literatură, artă, fotografie, muzică, design și cinematografie conturează nu doar un stil, ci un spațiu de lectură și navigare cu personalitate proprie. `Solaris` rămâne un reper important, dar doar unul dintre reperele care dau proiectului tonul său contemplativ și tehnic.

În același timp, am început consolidarea mecanicilor de navigație și interactivitate. Modelul de command deck, meniul sticky, scroll-ul lin, urmărirea secțiunilor active și sincronizarea stării în sidebar construiesc o interfață care nu obligă utilizatorul să se piardă în conținut, ci îl ghidează controlat prin el. Această alegere susține atât partea tehnică, cât și cea didactică a proiectului.

Stratul JavaScript este construit pe șase mecanisme coordonate, moștenite și rafinate din Manual_project:

1. **Scutul de Vizibilitate al Cockpit-ului** — monitorizează direcția de scroll și ascunde navbar-ul la scroll în jos (mod imersiune), readucându-l la o scurtă mișcare de scroll în sus.
2. **Cuplarea Accesibilității Log-urilor** — gestionează stările de click pe linkurile de navigație, asigurând comutarea corectă a clasei `.active` între module.
3. **Motorul de Re-declanșare a Terminalului** — un Intersection Observer care urmărește caseta de status; când un articol intră în vizibilitate (peste 30%), resetează și reia animația de mașină de scris de la început.
4. **Tracking-ul Radar pe Desktop** — Intersection Observer-ul principal pentru sidebar. Pe măsură ce utilizatorul parcurge jurnalul, detectează ce articol este pe ecran și mută automat clasa `.active` pe butonul corespunzător din sidebar.
5. **Motorul Anti-Deplasare pe Desktop** — interceptează click-urile pe ancore pe desktop, previne saltul nativ al browserului care ar trage sidebar-ul în sus și execută un `scrollTo` controlat strict în interiorul containerului de text, cu o pernă de aer de 100px sub HUD.
6. **Auto-Scroll-ul HUD pe Mobil** — la citirea pe mobil, detectează momentul în care o zi devine activă și glisează automat banda HUD pe orizontală, aducând capsula curentă în centrul ecranului.

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
- `snapshot`: un punct de control sau o copie de siguranță, folosit înaintea unei restructurări majore.

## Observații de stil

`chore`, `docs` și `style` sunt cele mai frecvente pentru jurnale și repo-uri de prezentare. Pentru proiecte formale, este bine să păstrez același model de mesaj în tot istoricul. Consistența mesajelor ajută la citirea evoluției proiectului și la separarea clară între modificările de conținut și cele de structură.

## Rescrierea mesajelor existente

În ziua a patra am lucrat la clarificarea modului în care denumesc commit-urile și la pașii necesari pentru rescrierea mesajului din commit-ul imediat anterior, atunci când formularea inițială nu era suficient de exactă. Am reținut că mesajul de commit trebuie să fie scurt, tehnic și consecvent cu tipul modificării, mai ales în cazul documentelor de proiect și al fișierelor de documentație bilingvă.

Pentru commit-ul imediat anterior, procedura este simplă: mai întâi modific local mesajul cu `git commit --amend`, apoi salvez noul mesaj în editorul deschis de Git. După aceea, dacă commit-ul fusese deja împins pe repository-ul remote, trebuie să actualizez și istoricul de pe GitHub printr-un push forțat, preferabil cu `git push --force-with-lease`, ca să evit suprascrierea accidentală a muncii altcuiva.

Am notat și că această operațiune se aplică doar cu atenție pe branch-uri deja publice. Dacă lucrez singură pe branch-ul respectiv, metoda este sigură și eficientă; dacă branch-ul este partajat, trebuie verificat foarte bine înainte de rescriere. În proiectul meu, acest lucru ajută mai ales când finalizez documente importante și vreau ca istoria commit-urilor să rămână curată, precisă și ușor de urmărit.

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

În `D::0dy55ey`, tratez `<head>` ca pe un strat de control și identitate. Aici definesc limba, titlul, descrierea, fișierele locale și resursele comune, astfel încât fiecare pagină să pornească dintr-o bază clară și previzibilă. Pentru paginile bilingve, schimb mai ales titlul și meta description-ul, iar restul structurii rămâne stabil.

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

În `D::0dy55ey`, tratez `<head>` ca pe un strat de control și identitate. Aici definesc limba, titlul, descrierea, fișierele locale și resursele comune, astfel încât fiecare pagină să pornească dintr-o bază clară și previzibilă. Pentru paginile bilingve, schimb mai ales titlul și meta description-ul, iar restul structurii rămâne stabil.


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

---

# DAY 08 — Arhitectura finală a volumelor

Am verificat întreaga structură a volumelor și, în forma ei actuală, ea este coerentă din punct de vedere didactic. Împărțirea pe capitole nu urmărește aceeași logică în toate volumele, dar tocmai această diferență este justificată: fiecare domeniu are o structură proprie de învățare, iar arhitectura proiectului trebuie să o reflecte, nu să o uniformizeze artificial.

În `D::0dy55ey`, volumul de frontend este organizat pe limbaje fundamentale, deoarece acolo traseul de învățare este linear și ușor de înțeles: mai întâi structura, apoi stilul, apoi comportamentul. Volumul de database este împărțit între `sql` și `nosql` deoarece diferența dintre cele două paradigme este una conceptuală și metodologică, nu doar tehnică. Volumul de backend, în schimb, are o logică diferită și trebuie citit prin componente, fluxuri și responsabilități ale sistemului, nu printr-o simplă listă de limbaje.

## Frontend

Volumul `frontend` este gândit ca o bază de intrare în dezvoltarea web, unde fiecare limbaj are un rol distinct și ușor de separat. HTML construiește structura, CSS reglează forma vizuală, JavaScript introduce logica și interactivitatea, iar framework-urile sunt tratate ca extensii naturale ale acestui nucleu.

### Capitolele finale ale volumului frontend

- `html-log`
- `css-log`
- `javascript-log`
- `react-log`
- `angular-log`

### De ce această împărțire

Această structură este potrivită pentru învățare fiindcă urmează ordinea firească a construirii unei interfețe. Încep cu ce este cel mai stabil și mai ușor de înțeles, apoi adaug stilul, apoi comportamentul, iar la final extind spre framework-uri. React și Angular nu sunt puse separat de JavaScript ca și cum ar aparține unei alte lumi, ci apar ca ramuri ale aceleiași logici, ceea ce păstrează coerența didactică și reduce fragmentarea inutilă.

## Database

Volumul `database` este organizat pe cele două mari familii conceptuale ale gestionării datelor: relațional și non-relațional. Această împărțire este mai bună decât una pe un singur instrument, fiindcă te ajută să înțelegi modelul de gândire din spatele fiecărui tip de bază de date, nu doar sintaxa.

### Capitolele finale ale volumului database

- `sql-log`
- `nosql-log`

### De ce această împărțire

Aici logica este binară și foarte clară: SQL înseamnă structură, relații, interogări și consistență, iar NoSQL înseamnă flexibilitate, modele alternative și alt mod de a gândi persistarea. Pentru învățare, această separare este foarte eficientă deoarece pune în contrast două paradigme fundamentale, nu doar două tehnologii. Astfel, volumul nu devine o listă de sintaxe, ci o lecție despre moduri diferite de organizare a datelor.

## Backend

Volumul `backend` nu trebuie împărțit ca frontend-ul, fiindcă backend-ul nu se învață în primul rând ca o succesiune de limbaje, ci ca un sistem de componente care lucrează împreună. De aceea, structura pe care o ai acum este potrivită: ea urmărește funcțiile esențiale ale unui backend, de la nucleu la API, autentificare, arhitectură, documentare, testare și deployment.

### Capitolele finale ale volumului backend

- `backend-core-log`
- `api-log`
- `auth-security-log`
- `backend-architecture-log`
- `backend-language-log`
- `middleware-log`
- `testing-log`
- `documentation-log`
- `performance-log`
- `deployment-log`

### De ce această împărțire

Backend-ul are o logică de tip sistemic, nu una de tip „lanț de limbaje”. În practică, un backend bun se înțelege prin întrebări precum: cum intră cererea, cine o validează, cum este procesată, unde se conectează la date, cum este documentată, cum este testată și cum este livrată. Din acest motiv, capitolele backend trebuie să reflecte traseul request-ului și organizarea internă a serverului, nu doar instrumentele folosite.

`backend-core-log` fixează baza de lucru și nucleul sistemului. `api-log` tratează modul de expunere a funcționalităților. `auth-security-log` acoperă securitatea și controlul accesului. `backend-architecture-log` explică organizarea internă și relațiile dintre componente. `backend-language-log` are sens ca zonă de sprijin, dar nu ca principiu central de organizare. `middleware-log` și `testing-log` arată cum circulă cererile și cum se verifică comportamentul sistemului. `documentation-log` păstrează explicabilitatea proiectului, `performance-log` acoperă optimizarea, iar `deployment-log` închide traseul prin publicare și livrare.

## Deployment

Volumul `delivery` este separat de `backend` și acest lucru este foarte bun. Aici accentul nu mai este pe construcția logicii server-side, ci pe procesul de livrare, de publicare și de verificare a istoricului proiectului.

### Capitolele finale ale volumului delivery

- `deployment-pipeline-log`
- `git-log`
- `github-log`

### De ce această împărțire

Acest volum trebuie să arate cum ajunge proiectul din stadiul de lucru în stadiul de publicare. Git documentează controlul versiunilor, GitHub documentează repository-ul public și sincronizarea finală, iar pipeline-ul de deployment arată traseul complet al livrării. Separarea aceasta este didactică fiindcă explică nu doar ce s-a întâmplat, ci și ordinea în care s-a întâmplat.

## UX

Volumul `ux` este corect separat de frontend, pentru că UX nu înseamnă doar „cum arată pagina”, ci cum este ea folosită, parcursă și înțeleasă. Aici învățarea trebuie să pună accent pe accesibilitate, flux, claritate și experiență.

### Capitolele finale ale volumului ux

- `accessibility-log`
- `ux-foundations-log`

### De ce această împărțire

Această structură este potrivită fiindcă pornește de la principiile de bază ale experienței utilizatorului și apoi coboară spre accesibilitate ca cerință concretă și etică. UX nu trebuie tratat ca o anexă decorativă a frontend-ului, ci ca o zonă cu logică proprie, în care contează percepția, navigarea și confortul cognitiv al utilizatorului.

## Data bridge

Volumul `data-bridge` rămâne o zonă de legătură între interfețe și sisteme de date. El este util tocmai pentru că nu dublează frontend-ul și nu copiază database-ul, ci explică puntea dintre ele.

### Capitolele finale ale volumului data-bridge

- `json-log`

### De ce această împărțire

JSON este un format de interschimb de date și are sens să fie păstrat ca volum-punte, nu ca subcapitol dispersat în alte zone. Aici se vede clar relația dintre date, structură și transfer, ceea ce îl face un volum mic, dar conceptual important.

## Concluzie arhitecturală

În forma actuală, structura volumelor este nu doar acceptabilă, ci bună didactic. Frontend-ul este organizat pe limbaje și trepte de construcție, database-ul pe paradigme de persistare, backend-ul pe componente și responsabilități, delivery-ul pe procesul de publicare, iar UX-ul pe experiență și accesibilitate. Această diferențiere este corectă fiindcă fiecare domeniu are propriul său mod de a fi învățat și explicat.

Ordinea finală a volumelor în `index.html` ar trebui să păstreze această progresie conceptuală: mai întâi bazele de interfață, apoi datele, apoi logica de server, apoi experiența, apoi livrarea. În felul acesta, cititorul trece natural de la construcție vizibilă la infrastructură, de la infrastructură la proces, și de la proces la publicare.

---

# DAY 09 — Backlog, arhitectura `<head>` și validarea documentelor

Această zi reunește deciziile structurale pe care le-am luat după ce am centralizat ideile care nu sunt încă pregătite pentru implementare și după ce am completat fundația tehnică a tuturor documentelor HTML din proiect. Ziua este împărțită în note clar separate, fiecare acoperind câte un aspect esențial al acestei etape de lucru.

## 1. Documente de backlog pentru idei viitoare

Am creat o separare clară între arhitectura deja stabilizată a proiectului și ideile care își așteaptă momentul de implementare. În loc să las intențiile viitoare să se acumuleze în structura curentă și să risc confuzie, le-am compilat într-un registru de backlog — practic o listă de TODO-uri care păstrează fiecare propunere la locul ei. Fiecare intrare așteaptă un ciclu dedicat de implementare, fără să tulbure munca deja existentă.

Această abordare menține două lucruri în echilibru: arhitectura curentă rămâne curată și previzibilă, iar direcția de dezvoltare rămâne vizibilă și organizată. Un document de backlog nu este o simplă listă de dorințe, ci un instrument de lucru prin care pot planifica, prioritiza și urmări ce urmează, fără să pierd din vedere ce este deja în loc.

## 2. Completarea containerului `<head>` pentru toate documentele HTML

Am completat containerul `<head>` pentru fiecare document HTML din proiectul `digital-odyssey`. Scopul a fost ca fiecare pagină — indiferent dacă este o pagină de nivel superior, un jurnal de capitol sau o pagină de suport — să pornească de la aceeași bază semantică și tehnică. Template-ul pe care l-am definit în `en/index.html` a devenit modelul de lucru pentru toate cele 52 de pagini HTML rămase.

Fiecare `<head>` conține acum setul complet de elemente esențiale: codarea caracterelor, configurarea viewport-ului, titlu, meta descriere, cuvinte cheie, autor, culoarea temei, metadate Open Graph (titlu, descriere, tip, URL, localizare, numele site-ului, culoare de fundal, imagine), tipul de card Twitter, link canonic, directiva robots, favicon, preconectări pentru fonturi și legătura către foaia de stil locală. Diferențele între pagini apar doar acolo unde fiecare document își definește propria identitate — titlul, descrierea, cuvintele cheie și căile specifice către fișiere.

Această uniformitate înseamnă că întregul proiect împarte acum un punct de plecare previzibil. Indiferent ce pagină deschid, blocul head urmează aceeași arhitectură, cu comentarii adnotate conform etichetelor din legendă (`@block`, `@meta`, `@path`, `@reason`, `@warning`, `@theme`).

## 3. Regula de adâncime pentru căile din folder

Am fixat o regulă clară pentru căile relative folosite în fiecare fișier HTML. Într-un proiect cu multe foldere imbricate — cum sunt `en/frontend/html-log.html` sau `ro/backend/api-log.html` — menținerea corectă a căilor este esențială pentru ca pagina să își găsească resursele.

Regula este simplă, dar importantă:
- Paginile plasate direct în folderul de limbă (`en/` sau `ro/`) — cum sunt `bibliography.html`, `recursive-blueprint.html` și `transmission.html` — folosesc `./` pentru a face referire la `style.css`, `favicon.svg` și `script.js`, deoarece resursele se află în același folder.
- Paginile plasate la un nivel mai adânc, într-un folder de capitol precum `frontend/`, `backend/`, `database/`, `data-bridge/`, `ux/` sau `delivery/` — folosesc `../` pentru a urca un nivel și a ajunge la folderul de limbă unde se află resursele.

Această regulă de adâncime menține proiectul organizat și evită referințe rupte. Ea urmează și metafora de carte pe care am adoptat-o pentru arhitectură: fiecare folder de limbă este un volum, fiecare subfolder este un capitol, iar fiecare pagină de jurnal este o secțiune în interiorul acelui capitol. Resursele sunt stocate la nivel de volum și sunt întotdeauna accesibile printr-o cale relativă previzibilă.

## 4. Template-ul `<head>` și diferența dintre `meta name` și `meta property`

Am consolidat template-ul `<head>` într-o singură structură reutilizabilă. Fiecare pagină din proiect folosește acum acest template, doar limba, titlul, descrierea, cuvintele cheie și căile fiind schimbate per fișier.

### `meta name="..."` vs `meta property="og:..."`

Diferența dintre cele două modele de atribut este conceptuală și funcțională:

- **`<meta name="...">`** este modul standard HTML de a descrie o pagină pentru contextul web obișnuit. Îi spune browserului și motoarelor de căutare informații de bază despre document: `description`, `keywords`, `author`, `viewport`, `theme-color` și `robots`. Acestea sunt citite în fluxul normal de navigare.

- **`<meta property="og:...">`** aparține protocolului Open Graph. Descrie modul în care pagina ar trebui să apară atunci când este distribuită în alte spații digitale — rețele sociale, platforme de mesagerie, site-uri de portofoliu sau previzualizări de linkuri. Proprietăți precum `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale` și `og:site_name` controlează cardul care apare atunci când cineva distribuie linkul în afara contextului normal de navigare.

Pe scurt, `name` este pentru pagina însăși; `property` este pentru cum este reprezentată pagina în altă parte. Ambele sunt necesare într-un proiect serios, pregătit pentru publicare.

### Tagurile void și notația `/>`

Am clarificat și notația tagurilor void (autoinchise) precum `<meta>`, `<link>`, `<br>` și `<img>`. În HTML5, tagurile void nu au nevoie de slash de închidere. Scrierea `<meta charset="UTF-8">` este perfect validă. Forma `/>` — ca în `<meta charset="UTF-8" />` — este moștenită din sintaxa XHTML și XML, unde fiecare tag, inclusiv cele void, trebuie să fie închis explicit.

În proiectul meu, folosesc în mod constant forma `/>` pentru elementele void. Aceasta este o alegere stilistică ce menține notația uniformă și face codul recognoscibil atât în contexte HTML, cât și XML. Important este să fiu consecventă: amestecarea `>` cu `/>` în același document face codul mai greu de citit și de întreținut.

## 5. Regula celor 1024 de biți și poziția lui `meta charset`

Elementul `meta charset` definește codarea caracterelor documentului. În practică, UTF-8 este alegerea universală și cea mai sigură, suportând diacritice, simboluri speciale și caractere internaționale fără probleme.

Regula pe care am notat-o — și pe care am aplicat-o — este ca `meta charset` să fie primul element din `<head>`, ideal în primii 1024 de biți ai documentului. Acest prag este o măsură de siguranță și compatibilitate moștenită din specificația de parsare HTML: unele browsere determină codarea caracterelor scanând doar primii 1024 de biți ai fișierului. Dacă `meta charset` apare mai târziu sau după comentarii lungi, browserul poate interpreta greșit conținutul înainte să ajungă la declarația de codare.

Din acest motiv, în template-ul `<head>` al proiectului, `meta charset` este plasat imediat după tagul de deschidere al `<head>`-ului, fără niciun comentariu înaintea lui. Explicația urmează după element, nu înaintea lui. Astfel, respect cerința de codare, păstrând în același timp comentariile didactice care fac codul explicabil din interior.

## 6. Validarea în frontend

Am adăugat o notă despre validarea în frontend ca parte a disciplinei de construcție a proiectului. Validarea nu este o verificare birocratică, ci un pas tehnic prin care verific consistența structurii HTML, sintaxa CSS, atributele de accesibilitate și elementele tehnice care țin de compatibilitate și bune practici.

În stadiul actual, validarea mă ajută să urmăresc:
- dacă fiecare pagină HTML respectă același template semantic;
- dacă elementele din `<head>` sunt ordonate corect și complete;
- dacă căile relative indică resurse existente;
- dacă paginile bilingve se oglindesc între ele ca structură.

Mai târziu, această zonă poate deveni un sector sau un daylog separat, dedicat validării automate, linting-ului și verificărilor de calitate. Deocamdată, rămâne o notă manuală — dar una care menține proiectul aliniat la propria sa rigoare.

---

# DAY 10 — Dezvoltare asistată, migrare de conținut și rafinări structurale

Această zi reunește mai multe fire de lucru distincte care au modelat proiectul în cea mai activă fază de transformare: trecerea de la lucrul individual la colaborarea cu un agent AI specializat, migrarea conținutului din proiectul-mamă, rezolvarea sistematică a avertismentelor CSS și HTML, rebranduirea globală a identității proiectului și stabilirea a două modele distincte de navigare pentru paginile index față de paginile secundare.

## 1. Lucrul cu un agent AI

În această etapă, am început să dezvolt proiectul `D::0dy55ey` cu asistența unui agent AI specializat pentru codare, numit **opencode**, configurat ca asistent interactiv în terminal. Acest agent nu înlocuiește propriile mele decizii, ci extinde capacitatea de a le implementa: citește fișiere, propune modificări de cod, aplică schimbări în multiple fișiere simultan și explică deciziile tehnice prin același sistem de comentarii cu etichete (`@block`, `@reason`, `@warning`, `@theme`) definit în legenda de documentație a proiectului.

Agentul funcționează ca un instrument de colaborare. Eu emit instrucțiuni în limbaj natural — referitoare la migrarea fișierelor, corectarea stilurilor, înlocuiri în masă și decizii structurale — iar agentul le execută într-un mod verificabil și transparent. Nu lucrează autonom, ci în limitele pe care i le stabilesc, reflectând întotdeauna controlul meu editorial și arhitectural. Principalele avantaje ale agentului sunt viteza în operațiuni în masă (de exemplu, editarea aceluiași model în peste 50 de fișiere), consistența în aplicarea aceleiași reguli în toate paginile și capacitatea de a revizui întreaga bază de cod simultan pentru a detecta inconsistențe.

Acest mod de lucru mi-a permis să mă concentrez pe deciziile arhitecturale și pe calitatea conținutului, în timp ce agentul s-a ocupat de repetiția mecanică, sincronizarea fișierelor și verificarea sistematică. Modelul de interacțiune este similar cu pair programming, dar cu o distribuție asimetrică a responsabilităților: eu decid ce și de ce; agentul implementează cum și semnalează atunci când ceva nu se potrivește cu modelul așteptat.

## 2. Generarea template-ului `<footer>`

Am generat un template unificat de `<footer>` pentru întregul proiect `digital-odyssey`. Footerul funcționează ca un flux de date de telemetrie și apare în partea de jos a fiecărei pagini. Structura sa este aceeași în toate documentele, singurul element care se schimbă este numele sectorului (SYS_ORBIT), care reflectă capitolul sau modulul curent.

Footerul conține trei linii de telemetrie:

- **SYS_ORBIT**: identifică sectorul sau capitolul curent pe care îl navighează cititorul (de exemplu, `COMMAND_DECK` pentru index, `FRONTEND_EXPEDITION` pentru jurnalele frontend, `BACKEND_SECTOR` pentru paginile backend etc.).
- **COORDINATES**: coordonatele geografice ale originii fizice a proiectului (Cluj-Napoca, România) și timestamp-ul curent al sistemului.
- **Linia de copyright**: numele proiectului `D::0dy55ey` și semnătura căpitanului, `Iulia-Alexandra Cadar`.

Pe anumite pagini — cum ar fi bibliografia — footerul include și un link de comunicații externe (stilizat cu un beacon `.pulse-dot`) care deschide bibliografia într-un tab nou.

Fiecare element al footerului este adnotat cu comentarii didactice folosind sistemul de etichete din `docs/legend-ro.md`, explicând rolul indicatorului de status, clasa `.telemetry-active`, semnătura `.vessel-sig` și coordonatele geografice.

## 3. Importarea blocurilor de cod din proiectul-mamă și adăugarea comentariilor didactice

Am importat conținutul din `Manual_project` (proiectul-mamă) în paginile `digital-odyssey` care existau deja în structura originală. Paginile importate includ:

- `index.html` — puntea de comandă și hub-ul principal de navigare.
- `bibliography.html` — arhiva curatedă de referințe, structurată ca intrări `<table class="data-grid">`.
- `recursive-blueprint.html` — terminalul auto-referențial cu layout split-screen.
- Toate paginile de jurnal de capitol: `html-log`, `css-log`, `javascript-log`, `react-log`, `angular-log`, `sql-log`, `nosql-log`, `json-log`, `backend-core-log`, `api-log`, `auth-security-log`, `backend-architecture-log`, `backend-language-log`, `middleware-log`, `testing-log`, `documentation-log`, `performance-log`, `deployment-log`, `git-log`, `github-log`, `deployment-pipeline-log`, `ux-foundations-log` și `accessibility-log`.

Fiecare bloc importat a fost imediat adnotat cu comentarii HTML didactice folosind sistemul de etichete din `docs/legend-en.md`. Fiecare `<section>`, `<article>`, `<p>`, `<ul>`, `<table>` și element structural a primit o etichetă adecvată — `@block` pentru zone logice, `@reason` pentru motivație, `@structure` pentru arhitectura documentului, `@concept` pentru sens narativ și `@theme` pentru alegeri atmosferice.

Pentru folderul `ro/`, am notat că toate comentariile explicative din fișierele HTML trebuie traduse din engleză în română. În această etapă, comentariile în engleză oglindesc structura paginilor englezești, dar folderul românesc necesită un pas complet de traducere pentru ca sistemul de comentarii să rămână coerent didactic în ambele limbi. Același lucru se aplică pentru `script.js` și `style.css`: ambele fișiere au fost importate din proiectul-mamă și acum necesită rafinare, traducerea comentariilor în limba română pentru versiunile din `ro/` și adnotarea completă conform etichetelor din `docs/`.

## 4. Rezolvarea erorilor și avertismentelor CSS și HTML

Folosind panoul PROBLEMS din VS Code, am identificat și corectat 13 avertismente de compatibilitate și validitate în `en/style.css`. Fiecare corectură a fost aplicată cu înțelegerea a de ce a apărut avertismentul și care este soluția conform standardelor.

### 4.1 `backdrop-filter` — 8 apariții

**Problemă**: Proprietatea CSS `backdrop-filter` este un efect de sticlă mată care aplică un filtru grafic zonei din spatele unui element. Deși este suportată în browserele moderne, necesită prefixul vendor `-webkit-backdrop-filter` pentru Safari și browsere WebKit mai vechi. VS Code semnalează versiunea neprefixată ca fiind potențial nesuportată pe unele platforme.

**Soluție**: Am adăugat `-webkit-backdrop-filter` imediat înaintea fiecărei declarații `backdrop-filter`. Versiunea prefixată îi spune Safari să aplice filtrul, în timp ce versiunea neprefixată acoperă Chrome, Firefox și Edge. Aceasta este o tehnică standard de CSS defensiv.

### 4.2 `text-size-adjust` — 1 apariție

**Problemă**: Proprietatea `text-size-adjust` controlează modul în care browserul inflaționează textul pe ecranele mobile. Proprietatea necesită prefixe vendor pentru suport larg în browsere (`-webkit-text-size-adjust`, `-ms-text-size-adjust`, `-moz-text-size-adjust`). Folosirea doar a declarației neprefixate declanșează un avertisment de compatibilitate.

**Soluție**: Am eliminat declarația simplă `text-size-adjust` și am re-adăugat-o ca cod comentat, cu o explicație completă a tuturor celor trei prefixe vendor, a rolurilor lor și a faptului că meta-tagul `<meta name="viewport">` acoperă deja majoritatea scenariilor de inflație pe mobil. Astfel, codul rămâne ca referință didactică fără a lăsa un avertisment activ.

### 4.3 `text-justify` — 1 apariție

**Problemă**: Proprietatea `text-justify` definește modul în care este gestionată alinierea textului justifies. Deși este suportată în browserele moderne, VS Code o semnalează ca problemă de compatibilitate în anumite contexte de randare.

**Soluție**: Am înlocuit declarația activă cu un comentariu care explică proprietatea și păstrează intenția vizibilă în cod, fără a declanșa un avertisment.

### 4.4 `-webkit-overflow-scrolling` — 1 apariție

**Problemă**: Proprietatea `-webkit-overflow-scrolling` este o proprietate non-standard, moștenită din iOS, care controla scroll-ul cu inerție în containerele overflow. Apple a depreciat-o în iOS 13 în favoarea comportamentului standard `-webkit-overflow-scrolling: auto`. Păstrarea ei în cod declanșează atât un avertisment de depreciere, cât și unul de compatibilitate.

**Soluție**: Am eliminat declarația complet. Dispozitivele iOS moderne gestionează scroll-ul cu inerție nativ, fără această proprietate.

### 4.5 `scrollbar-width` — 2 apariții

**Problemă**: Proprietatea `scrollbar-width` (parte a specificației CSS Scrollbars) permite controlul grosimii barelor de scroll. Deși este suportată în Firefox, nu este încă suportată în Chrome sau Safari. VS Code o semnalează ca problemă de compatibilitate.

**Soluție**: Am înfășurat fiecare declarație `scrollbar-width` într-un bloc `@supports (scrollbar-width: thin)`. Astfel, Firefox aplică bara subțire de scroll, iar Chrome și Safari ignoră regula fără eroare. Acesta este modelul standard de progressive enhancement.

### 4.6 `meta[name=theme-color]` — 2 falsuri pozitive

**Problemă**: VS Code afișa două avertismente pentru `theme-color` în secțiunea de metadate Open Graph. După investigare, acestea erau avertismente învechite: tagurile `<meta name="theme-color">` fuseseră deja eliminate din fișierele HTML. Avertismentele rămăseseră în panoul PROBLEMS doar pentru că VS Code nu își reîmprospătase starea de linting.

**Soluție**: Am verificat că niciun `<meta name="theme-color">` nu mai există în niciun fișier HTML. Proiectul folosește `manifest.json` pentru a declara `theme_color` pentru Firefox și `og:background_color` pentru previzualizările sociale. Avertismentele VS Code s-au stins după o comandă Reload Window.

## 5. Rebranduirea de la "Digital Odyssey" la `D::0dy55ey`

Am înlocuit numele și titlurile din întregul proiect, de la titlul de lucru original "Digital Odyssey" la varianta personalizată `D::0dy55ey`. Aceasta nu a fost o schimbare cosmetică, ci o decizie deliberată, susținută de mai multe argumente.

### De ce numele trebuia schimbat

Numele original "Digital Odyssey" era un placeholder descriptiv — descria cu acuratețe tema proiectului (o călătorie prin peisajul digital), dar îi lipsea caracterul distinctiv. Pentru un proiect care funcționează atât ca piesă de portofoliu, cât și ca arhivă personală, un identificator unic este important. `D::0dy55ey` transformă titlul descriptiv într-o marcă-semnătură.

### Alegerea leetspeak

Forma `D::0dy55ey` folosește substituții leetspeak (numit și "1337"): `0` pentru `o` și `5` pentru `s`, rezultând "0dy55ey" în loc de "Odyssey". Prefixul `D::` face ecou operatorului de rezoluție de scop din C++ (`::`), dând numelui o aromă de limbaj de programare. Dublul punct separă și vizual litera `D` (pentru "Digital") de restul, creând un simbol asemănător unui logo.

### Argumente pentru înlocuire

- **Identitate vizuală**: `D::0dy55ey` funcționează ca o semnătură tehnică și compactă. Este imediat recognoscibil, se potrivește într-un favicon, într-un antet sau într-o linie de copyright și este distinct de orice alt nume de proiect.
- **Separare de brand**: Numele repository-ului `digital-odyssey` descrie proiectul extern pe GitHub; `D::0dy55ey` este identitatea internă, narativă. Această separare între numele tehnic al repository-ului și numele conceptual al proiectului este deliberată și utilă.
- **Metafora navigației cosmice**: Numele `D::0dy55ey` se potrivește mai bine atmosferei retro-futuriste, orientate pe telemetrie a proiectului decât originalul descriptiv simplu. Arată ca un indicativ de navă spațială sau un identificator de sistem pe o consolă HUD.
- **Coeziune narativă**: Rebranduirea aliniază limbajul vizual cu cadrul conceptual. Proiectul folosește deja termeni precum "Command Deck", "Astrogation Charter", "HUD" și "telemetry"; numele `D::0dy55ey` este consistent cu acest lexic.
- **Memorabilitate**: Un nume distinctiv, ușor neobișnuit, este mai ușor de reținut și de căutat decât unul descriptiv generic.

Înlocuirea a fost aplicată în toate cele 63 de fișiere (HTML, CSS și Markdown), asigurând zero instanțe rămase ale vechiului titlu în textul vizibil. Numele repository-ului GitHub `digital-odyssey` a fost păstrat neschimbat ca strat tehnic de transport.

## 6. Două modele de navigare: Nav-ul index vs. Nav-ul paginilor secundare

Am stabilit două modele distincte de navigare pentru proiect, fiecare având un rol structural diferit.

### Modelul de navigare al paginii `index.html`

Pagina index este Command Deck — puntea principală a navei-mamă. Navigarea sa servește ca un hub care conectează toate volumele proiectului. Logo-ul este un hyperlink care trimite la pagina index însăși (o convenție standard pentru antetele de site), iar linkurile de navigare trimit la secțiuni ancora pe aceeași pagină (`#frontend-scape`, `#database-void` etc.). Acest model este gândit pentru **orientare și descoperire**: cititorul vede toate sectoarele disponibile și poate sări direct la oricare dintre ele.

Structura nav-ului index este:

- Un logo legat (`<a href="index.html">D::0dy55ey</a>`) care confirmă locația curentă.
- O listă de ancore de secțiune (`#frontend-scape`, `#database-void`, `#backend-sector`, `#ux-lab`, `#delivery-deck`, `#data-bridge`) care derulează pagina la fiecare volum.

### Modelul de navigare al paginilor secundare

Toate celelalte pagini — bibliografia, transmission, recursive-blueprint și fiecare jurnal de capitol — urmează un model diferit. Aceste pagini sunt module satelit, nu hub-ul principal. Navigarea lor este gândită pentru **focus și întoarcere**: cititorul trebuie să știe exact unde se află și cum să revină la puntea de comandă.

Structura nav-ului secundar este:

- Un logo static (`D::0dy55ey / Numele Secțiunii`) care nu este hyperlink. Acesta îi spune echipajului locația curentă fără a oferi posibilitatea de a naviga departe de secțiunea pe care o citesc. Numele secțiunii se schimbă per pagină: "Arhive" pentru bibliografie, "Jurnal HTML" pentru jurnalul HTML etc.
- Un singur link de navigare cu o săgeată stânga (`←`) și textul "Înapoi la puntea de comandă" (RO) sau "← Return to Command Deck" (EN), care trimite la `index.html` (sau `../index.html` pentru paginile din subdirectoare).

Abordarea cu două modele rezolvă o problemă specifică: dacă fiecare pagină ar avea aceeași listă completă de linkuri, cititorul ar fi tentat să sară între secțiuni fără să o termine pe cea curentă. Modelul secundar încurajează lectura lineară (termină capitolul curent, apoi întoarce-te la hub), oferind în același timp o cale rapidă de ieșire.

Toate cele 52 de pagini non-index au fost actualizate la acest model standardizat, cu varianta lingvistică adecvată (engleză pentru paginile din `en/`, română pentru paginile din `ro/`). Comentarii explicative cu etichete din legendă au fost adăugate pentru fiecare linie de cod din blocul nav, folosind limba corectă pentru fiecare folder.

---