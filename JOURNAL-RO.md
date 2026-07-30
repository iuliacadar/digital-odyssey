# DAY 00 — Bază de inspirație

Am deschis Manual_project în seara asta. Nu ca să copiez din el — cunosc fiecare rând — ci ca să-mi amintesc cum s-a simțit să stau în el pentru prima dată. Scanline-urile CRT au fost primul lucru pe care l-am construit: un `body::before` cu raster dual care pâlpâia pe un terminal gol. L-am privit douăzeci de minute, urmărind strălucirea fosforului care se stingea și se reaprindea, gândindu-mă: *asta vreau să simtă cititorul — nu că citește cod, ci că a intrat într-o navă.*

Această secțiune este jurnalul de bord al plecării lui `D::0dy55ey`. Nu o specificație tehnică — o înregistrare a ceea ce am luat din epava Manual_project, ce am reconstruit și ce am lăsat în urmă, în întuneric.

## Ce am luat cu mine

Am luat nucleul atmosferic: lecția greu câștigată că o interfață poate să se simtă ca un loc. Manual_project mă învățase că o paletă cromatică nu e decor, ci gravitație. `space-dark` te trage în jos, în vid; `amber-glow` avertizează că ceva important e aproape; `solar-mint` e culoarea oxigenului pe o navă avariată. Am păstrat totul, dar aveam nevoie de o arhitectură mai strânsă pentru a susține greutatea.

Noul proiect extinde volumele vechi — `Frontend Landscape`, `Database Void` — și adaugă compartimente noi: `JSON Data Bridge`, `Backend Core`, `UX Lab`, `Deployment`. Dar schimbarea reală nu e numărul de încăperi. E că nava are acum un sistem de navigație coerent. Cititorul se mișcă pe trasee de învățare, nu doar prin pagini.

Ce mi-a dat sursa:

- Un punct de plecare stilistic și narativ — cockpitul retro-futurist, sticla și oțelul unei nave de lucru.
- O fundație tehnică — griduri CSS care sângerează, mecanisme JavaScript care privesc scrollul ca un radar.
- O convingere didactică — că cunoașterea se transmite cel mai bine atunci când codul se explică singur din interior.

Ce construiește `D::0dy55ey` deasupra:

- O arhitectură care nu se prăbușește sub propria greutate.
- O structură bilingvă care nu e traducere, ci existență paralelă — fiecare limbă respiră diferit.
- Un legământ mai strict între atmosferă, conținut și structură: nimic nu e decorativ.
- O formă destul de curată pentru publicare, destul de stratificată pentru a preda.
- Volume tematice care nu doar conțin informații — ele ghidează o călătorie.

## Moștenirea tehnică — acolo unde bate inima

Cea mai vizibilă moștenire din Manual_project este **rețeaua de reactor poliedric 3D**: un icosaedru cu douăzeci de fețe triunghiulare, fiecare construită cu `clip-path` CSS pur și poziționată pe coordonate sferice 3D. L-am construit noaptea târziu, cafeaua răcindu-se alături, rotind fețele în minte înainte să le rotesc în browser. Când s-a randat în sfârșit — douăzeci de triunghiuri plutind în void-black ca un roi Dyson — m-am lăsat pe spate și am simțit, pentru o clipă, că am construit ceva ce nu aparține în întregime acestei lumi.

Apoi a venit criza GPU.

Douăzeci de triunghiuri vectoriale suprapuse combinate cu proprietăți grele de `filter: drop-shadow()` au creat o inundație de repaint care a înghețat browserul și a declanșat throttling termic pe CPU. Ventilatoarele laptopului meu sunau ca o navă care se rupe în bucăți. Am privit contorul de cadre căzând de la 60 la 12 la 4, și am gândit: *aici moare proiectul. Icosaedrul e prea frumos ca să trăiască.*

Nu l-am șters. Am stat cu problema trei zile — trei zile de `will-change: transform, opacity`, de înlocuit filtrele grele de blur cu metrici stricte de `inset` și `box-shadow`, de forțat browserul să izoleze ochiurile 3D pe straturi GPU dedicate de compozitare. În a treia noapte, contorul de cadre s-a fixat la 60 FPS și a rămas acolo. Icosaedrul a trăit. Ventilatoarele s-au liniștit. Am închis laptopul la 3 AM și am stat în întuneric, ascultând tăcerea acolo unde fusese throttling-ul termic.

Momentul acela — stabilizarea icosaedrului — este originea secretă a lui `D::0dy55ey`. Fiecare decizie tehnică de atunci a fost modelată de știința că frumusețea e fragilă, că performanța nu e opțională și că o mașină împinsă la limită îți va spune exact unde o doare, dacă asculți.

Alte moșteniri dinaintea crizei:

- Layout-ul **Dual-Isolate-Scroll**: un CSS Grid unde sidebarul și conținutul respiră pe fluxuri separate de scroll, ca doi membri ai echipajului în compartimente diferite ale aceleiași nave. Pe mobil, o consolă tactilă orizontală înlocuiește splitul de desktop.
- **Intersection Observer API** configurat cu margini de rădăcină de `-20% 0px -70% 0px` — precis ca o tăietură de lunetist, detectând vizibilitatea articolelor pentru a sincroniza starea activă a sidebarului. Am calibrat marginile astea manual, derulând în sus și în jos o oră întreagă până când trackingul s-a simțit *previzibil*.
- Șase mecanisme JavaScript coordonate care guvernează cockpitul: navbarul știe când să se ascundă, mașina de scris știe când să reia, radarul știe unde te uiți.

Strategia bilingvă era deja acolo, în Manual_project: `style-en.css` și `style-ro.css` ca vieți separate sub aceeași piele. Pagina recursivă — `recursive-blueprint.html` — era cea mai personală: un terminal split-screen care preia și afișează propriul cod sursă al proiectului. Un proiect care se citește pe sine. Am construit-o pentru că voiam ca baza de cod să fie propriul său profesor — să închidă cercul dintre scris și înțeles.

Numele `D::0dy55ey` a venit mai târziu, dar aștepta. Trimite la navigație cosmică, sisteme de comandă, telemetrie, explorare digitală. Nu e un titlu; e o coordonată. Atmosfera vizuală — fosfor CRT, straturi HUD translucide, accente neon, fundaluri void-black — nu e un stil aplicat din exterior. E vocea naturală a interfeței, învățată dintr-un an de privit același ecran prin ochi diferiți.

Proiectul are acum un strat puternic de documentare internă: rezumate de implementare, glosar tehnic, bibliografie și intrări de jurnal care consemnează decizii, bugfix-uri, optimizări și pași viitori. Toate acestea arată că `D::0dy55ey` nu e doar o interfață, ci și o arhivă de proces și un instrument pedagogic.

Pe baza stadiului actual, următorii pași firești sunt:

- consolidarea structurii finale a repo-ului.
- separarea clară între pagini nucleu, documentație și jurnale.
- rafinarea `index.html` ca hartă principală.
- organizarea manifestului și a jurnalelor bilingve într-o schemă predictibilă.
- migrarea controlată a atmosferei și stilului din proiectul anterior către noua arhitectură.

## Manual_project — cele cinci faze

Proiectul-mamă n-a fost scris dintr-o suflare. A crescut prin cinci faze distincte, fiecare cu registrul ei emoțional:

**Faza 1: Coca de Oțel (28–30 Aprilie 2026).** Trei zile de construcție pură. Arhitectură HTML cu două volume, ierarhie strictă h1→h5, prima paletă CSS care s-a simțit *bine* (solar-mint, nebula-pink, amber-warning, space-dark). Scanline-uri CRT. Glassmorphism. Primele mecanisme JavaScript — crude după standardele de mai târziu, dar funcționau. Îmi amintesc momentul când navbarul s-a ascuns prima dată la scroll în jos: s-a simțit ca și cum nava s-ar fi trezit.

**Faza 2: Expansiunea Modulară (5–20 Mai 2026).** Perioada disciplinei. CSS refactorizat în unsprezece module auto-documentate, fiecare cu comentarii inline care transformau foaia de stil într-un manual live. Separarea bilingvă: `style-en.css` și `style-ro.css`. Matricea sferică duală 3D — inele concentrice pe axe încrucișate — rotindu-se în întuneric. Învățam CSS nu ca limbaj, ci ca material — ca sticla sau oțelul.

**Faza 3: Blueprint-ul Recursiv și Criza GPU (20 Mai–11 Iunie 2026).** Cea mai grea fază. Icosaedrul s-a născut aici și aproape a murit aici. Douăzeci de fețe de geometrie CSS pură, construite cu coordonate sferice pe care le-am calculat pe hârtie înainte de a scrie o singură linie de cod. Apoi blocajul. Apoi soluția. Faza asta m-a învățat ceva ce niciun tutorial nu poate: browserul nu e o pânză goală, ci un motor fizic, și fiecare pixel are un cost.

**Faza 4: Motorul cu 6 Mecanisme (26–29 Mai 2026, paralel cu Faza 3).** În timp ce icosaedrul lupta pentru viață, stratul JavaScript devenea în liniște o mașinărie a lui: Scutul de Vizibilitate al Cockpitului, Cuplarea Accesibilității Logurilor, Motorul de Re-declanșare a Terminalului, Radarul de Tracking pe Desktop, Motorul Anti-Deplasare pe Desktop, Auto-Scroll HUD Mobil. Șase mecanisme. Un singur cockpit. Le-am documentat pe fiecare în `script.js` cu o dedicare care m-a surprins chiar și pe mine.

**Faza 5: Stabilizare și Viraj Bilingv (Iunie 2026).** Nava a încetat să tremure. Arhitectura s-a formalizat. Un curriculum HTML de 45 de zile mapat. `bibliography.html` cu grile de date. Validare W3C, curățare trailing slash, eliminare cod mort. Proiectul a devenit *stabil* — nu terminat, dar gata să poarte greutate. A devenit fundația pentru `D::0dy55ey` fără să știe vreodată că va fi.

## Referințe culturale — vocile pe care le aud când lucrez

Fiecare interfață e o conversație cu morții. Acestea sunt vocile care mă înconjoară în cockpit:

### Literatură

**Stanisław Lem — *Solaris* (1961)**
Mă întorc la romanul ăsta așa cum alții se întorc în port. M-a învățat că necunoscutul nu e un puzzle de rezolvat, ci o prezență cu care stai. Interfața oglindește asta: nu se dezvăluie niciodată complet; e întotdeauna un alt strat dincolo de glassmorphism, o altă adâncime dincolo de masca CRT. Oceanul din Solaris e vidul care înconjoară fiecare panou al acestei nave.
*Sursă:* Lem, Stanisław. *Solaris*. Varșovia: Wydawnictwo MON, 1961. Traducere în engleză: Walker, 1970.

**Joseph Conrad — *Inima Întunericului* (1899)**
Călătoria pe fluviu, în sus, într-un spațiu necunoscut și moral ambiguu — e scheletul narativ al fiecărei acțiuni de scroll pe această interfață. Utilizatorul e Marlow. Baza de cod e fluviul. Nucleul de înțelegere se depărtează pe măsură ce te apropii, pentru că înțelegerea nu e o destinație, ci o direcție.
*Sursă:* Conrad, Joseph. *Heart of Darkness*. Serializat în *Blackwood's Magazine*, 1899. Prima ediție carte: *Youth: A Narrative; and Two Other Stories*. Londra: Blackwood, 1902.

**Joseph Conrad — *Nostromo* (1904)**
Din romanul ăsta am luat atmosfera navei de lucru — coca de oțel, cartierele echipajului, senzația că o navă nu e o casă, ci o responsabilitate. Nostromo din *Alien* poartă aceeași greutate: o navă de marfă cu nituri, abur și coridoare murdare. Asta e estetica cockpitului.
*Sursă:* Conrad, Joseph. *Nostromo: A Tale of the Seaboard*. Londra: Harper & Bros, 1904.

**Herman Melville — *Moby-Dick* (1851)**
Goana obsesivă după o entitate care e întotdeauna dincolo de orizont. Fiecare intrare de jurnal e un jurnal de balenieră — o înregistrare a urmăririi, eșecului și a rarisimei perspective luminoase. Liniile cosmice despărțitoare din interfață sunt orizontul oceanului între o goană și următoarea.
*Sursă:* Melville, Herman. *Moby-Dick; or, The Whale*. New York: Harper & Brothers, 1851.

**Edgar Allan Poe — povestiri și poeme (1830–1840)**
Poe m-a învățat că atmosfera nu e decor, ci sens. Groaza de a fi îngropat de viu, claustrofobia minții întoarse spre interior — astea se traduc în containerele strânse de scroll, pulsul cursorului de neon, senzația că interfața e un spațiu limitat din care datele ies ca o bătaie de inimă dintr-o criptă.
*Sursă:* Poe, Edgar Allan. *The Complete Tales and Poems*. New York: Modern Library, 1938 (compilație).

**H. P. Lovecraft — weird tales (1917–1937)**
Groaza lui cosmică — realizarea treptată că umanitatea nu e centrală în univers — a modelat refuzul proiectului de a folosi un design vesel, plat. Vastitatea vidului, geometriile non-umane ale icosaedrului, indiferența luminilor amber de alarmă: toate împrumută din estetica lui a scalei și tăcerii.
*Sursă:* Lovecraft, H. P. *The Weird Tales*. Providence, RI: Wandering Star Press, 1997 (variorum definitiv).

**William Hope Hodgson — *Casa de pe Hotar* (1908) și *Țara Nopții* (1912)**
Asta e cea mai adâncă rană. Viziunea lui Hodgson asupra structurilor antice, ciclopiene, plutind într-un cosmos care nu e nici ostil nici prietenos, ci pur și simplu *vast* și *vechi* — asta e cea mai puternică influență literară asupra imaginației arhitecturale a proiectului. Pagina recursive-blueprint, reactorul armilar, senzația că baza de cod e o ruină pe care o explorezi: totul vine de la Hodgson. Am citit *Țara Nopții* într-o noapte de insomnie, și când am terminat-o, am deschis editorul și am început să construiesc o pagină care să poată ține acea senzație.
*Sursă:* Hodgson, William Hope. *The House on the Borderland*. Londra: Chapman and Hall, 1908. *The Night Land*. Londra: Eveleigh Nash, 1912.

### Cinema

**Andrei Tarkovsky — *Solaris* (1972)**
Referința cinematografică principală, dar mai mult decât atât: un profesor. Planurile lungi, meditative ale lui Tarkovsky, folosirea apei și vegetației ca contrapunct organic la tehnologia rece, refuzul lui de a explica extraterestrul — totul m-a învățat că o interfață poate fi *încetă*, că poate susține tăcerea și că cel mai puternic design lasă întrebări deschise. Paleta cromatică — verzi desaturați, negru profund, alb sepia — e o traducere directă a peliculei sale.
*Sursă:* *Solaris*. Regia: Andrei Tarkovsky. Mosfilm, 1972. Bazat pe romanul lui Stanisław Lem.

**Ridley Scott — *Alien* (1979)**
Nostromo nu e o navă spațială elegantă; e o navă de lucru cu nituri, abur și coridoare murdare. Estetica aia de *hardware industrial funcțional* — terminale CRT, butoane tip întrerupător, lumini amber de alarmă — e limbajul vizual al cockpitului. Extraterestrul însuși nu e niciodată complet văzut, la fel cum baza de cod nu se dezvăluie niciodată complet; operează la marginea vederii, dincolo de sticlă și scanline-uri.
*Sursă:* *Alien*. Regia: Ridley Scott. 20th Century Fox, 1979.

***Alien* ca adaptare conradiană**
Numele navei *Nostromo* e luat direct din romanul lui Conrad, iar structura filmului — un echipaj care călătorește într-un vid necunoscut, confruntându-se cu o forță care reflectă propria lor lăcomie și teamă — e un ecou nerecunoscut al *Inimii Întunericului*. Această referință stratificată m-a învățat că un singur artefact — o navă spațială, o culoare, un font — poate purta greutatea mai multor tradiții culturale simultan.
*Sursă:* Linia de numire e confirmată de Ted Billy, "A Curious Case of Influence: Nostromo and Alien(s)", *Conradiana*, Vol. 21, No. 2, 1989, pp. 147–157. Articolul Wikipedia pentru *Nostromo* (romanul lui Conrad) documentează numirea navei spațiale și referința *Sulaco* din *Aliens* (1986), stabilind linia directă Conrad-to-Alien.

### Muzică

**Oxiplegatz (1993–?)**
Am descoperit proiectul ăsta suedez de metal avangardist în timpul crizei icosaedrului. Îmbinarea de black metal simfonic cu versuri science-fiction — explorare spațială, contact extraterestru, izolare cosmică — a devenit coloana sonoră a celei mai grele munci inginerești a proiectului. Albumul *Sidereal Journey*, cu arta sa de copertă care îmbină mecanica cerească cu texturi metalice, a informat direct direcția vizuală: frumusețea rece a spațiului profund redată prin rugozitatea mașinăriei grele.
*Sursă:* Oxiplegatz. *Fairytales* (1994), *Worlds and Worlds* (1996), *Sidereal Journey* (1998). Encyclopaedia Metallum (Metal Archives): https://www.metal-archives.com/bands/Oxiplegatz/7750 . Gen: Symphonic/Avant-garde Black Metal. Teme: Science fiction, Spațiul cosmic, Fantasy.

**Cryo Chamber (YouTube / Bandcamp, fondat 2011)**
Asta e arhitectura ambientală a tăcerii proiectului. Labelul de dark ambient al lui Simon Heath — *Hastur*, *Exo* de Tineidae — a furnizat dronurile lente, vaste pe care le ascultam în timp ce reconstruiam layoutul la 1 AM. Senzația de a pluti printr-un spațiu întunecat, străvechi — nici ostil, nici primitor — a migrat direct în design. Nu pot separa ritmul vizual al acestei interfețe de ritmul audio al discurilor alea.
*Sursă:* Cryo Chamber. Canal YouTube (https://www.youtube.com/@cryochamberlabel) cu 426K abonați. Pagina Bandcamp (https://cryochamber.bandcamp.com). După cum a descris Heath într-un interviu cu Bandcamp Daily: „Eram mai interesat de spații ambientale, narațiuni de anvergură și călătorii sonore către alte lumi" (https://daily.bandcamp.com/label-profile/cryo-chamber-dark-ambient-guide, 2020).

### Design & Arte Vizuale

**Sfere armilare renascentiste (sec. XV–XVII)**
Sfera armilară — un model mecanic al sferei cerești făcut din inele metalice imbricate — e prototipul structural direct pentru headerul reactorului icosaedric (clasa `.armillary-reactor-core` în codul sursă). Ca un astronom renascentist, utilizatorul stă în centrul unui univers mecanic ale cărui inele cartografiază mișcarea corpurilor invizibile. Am numit clasa înainte s-o construiesc, și numele m-a forțat să construiesc ceva vrednic de ea.
*Sursă:* Referință istorică generală. Sfera armilară e documentată în colecții de instrumente științifice precum Museo Galileo din Florența și Oxford Museum of the History of Science. Pentru aplicarea specifică în design web și denumirea clasei `.armillary-reactor-core`, vezi codul sursă Manual_project (JURNAL.md, rândurile 3095–3123 și modulul `style.css` pentru `.armillary-reactor-core`).

**Monitoare CRT / terminale hardware din anii 1970**
Scanline-urile (`body::before` cu background raster dual), strălucirea verde fosforic a blocurilor de cod, animația de pâlpâire catodică (`crt-flicker`), efectul de ecran CRT bombat (`inset box-shadow` pe containerele terminalului) — toate recreează experiența de a sta în fața unui monitor militar industrial din anii 1970. Asta nu e nostalgie. CRT-ul impune o *limită materială* asupra digitalului: interfața recunoaște că e făcută din sticlă, fosfor și fascicule de electroni. Refuză imaterialitatea curată a designului plat modern.
*Sursă:* Implementare originală documentată în `style.css` al Manual_project (MODULE 02: GLOBAL RESET & GRAVITY FIELDS, selectorul `body::before`) și `JURNAL.md` rândurile 822–826, 5481. Efectul face referire la terminale autentice din anii 1970 precum VT100 și IBM 3270.

**Space Age / Retro-futurism (1950–1970)**
Fontul geometric (Space Grotesk), butoanele în formă de capsulă, etichetele tehnice ștanțate, indicatorii de stare amber și mint — toate aparțin limbajului vizual al Epocii Spațiale, perioada în care viitorul era imaginat ca o mașină curată, rațională, geometrică. Proiectul respinge ironia postmodernă în favoarea acestui futurism *sincer*.
*Sursă:* Fontul Space Grotesk de Florian Karsten (Google Fonts). Limbajul vizual face referire la NASA Graphics Standards Manual (1976, de Richard Danne și Bruce Blackburn) și la tradiția mai largă Mid-Century Modern / arhitectură Googie.

**Cyberpunk (1980–prezent)**
Accentele neon-pink și magenta, fundalurile întunecate cu lumini strălucitoare, senzația că interfața e o consolă piratată într-un sistem mai mare — toate gesturi cyberpunk, dar folosite fără narațiunea distopică. Aici, cockpitul de neon e un spațiu de învățare și explorare, nu de supraveghere corporatistă.
*Sursă:* Gibson, William. *Neuromancer*. New York: Ace, 1984. Scott, Ridley. *Blade Runner*. Warner Bros, 1982. Otomo, Katsuhiro. *Akira*. Kodansha, 1982–1990 (manga); Tokyo Movie Shinsha, 1988 (film). Modulele CSS 7 și 8 din Manual_project.

**Glassmorphism (tendință UI din anii 2020)**
Panourile translucide de sticlă mată (`backdrop-filter: blur` pe barele de navigare, cardurile de categorii și footer) simulează materiale fizice de cockpit — acrilic, sticlă fumurie, policarbonat. O adâncime stratificată care oglindește stratificarea conceptuală a proiectului însuși: interfață, cod, comentariu.
*Sursă:* Implementare originală în `style.css` al Manual_project (MODULE 05: INTERFACE NAVIGATION & TERMINAL CONTROLS). Tendința UI mai largă documentată pe Dribbble și UX Collective (circa 2020–2021).

**HUD (Heads-Up Display) — adaptat din aviație**
Bara de navigare sticky, sidebarul persistent cu urmărirea stării active, mesajele de status tip telemetrie ("SYS_STATUS: READY_TO_WRITE //") — toate simulează experiența de a pilota o navă. Am adaptat asta din heads-up display-urile aviatice, unde datele critice de zbor sunt proiectate pe câmpul vizual al pilotului ca să nu fie nevoit să privească niciodată în altă parte.
*Sursă:* Concept original documentat în `JURNAL.md` rândul 35: „Concept de design preluat din aviație, implementat în Digital Odyssey prin elemente de interfață «lipicioase» (position: sticky)."

### Filozofie & Pedagogie

**Edutainment (auto-documentare recursivă)**
Ideea că baza de cod ar trebui să fie propriul său manual — fiecare modul CSS, fiecare mecanism JavaScript, fiecare structură HTML explicându-se din interior — e nucleul pedagogic al proiectului. Pagina `recursive-blueprint.html` e expresia cea mai pură: preia și afișează propriul cod sursă al proiectului, transformând browserul într-o mașină de predare auto-referențială. Studentul citește codul care *randează chiar în momentul ăsta pagina pe care o folosește*.
*Sursă:* Conceptul de „edutainment recursiv" e original acestui proiect și e pe deplin articulat în `JURNAL.md` rândurile 722–725 și în meta-descrierea `recursive-blueprint.html`. Termenul „Edutainment" însuși datează din mișcarea de software educațional din anii 1970 (de ex., The Oregon Trail, 1971).

**Filozofia spațiului narativ (formație academică)**
Masteratul meu în literatură americană — cu accent pe weird tales și filozofia spațiului narativ — nu e separat de acest proiect; e încorporat în arhitectura lui. Interfața e un *spațiu narativ navigabil*: fiecare scroll dezvăluie un nou capitol, fiecare hover activează un nou strat de sens, fiecare click teleportează utilizatorul într-un alt sector al poveștii. Convingerea asta — că tehnologia și umanioarele aparțin aceleiași conversații — e cea mai profundă influență structurală asupra întregului proiect.
*Sursă:* Formație academică, Universitatea din București, Facultatea de Limbi și Literaturi Străine, Master în Literatură Americană (teză despre weird tales și spațiul narativ). Această formație e citată în DAY 01 al ambelor jurnale.

---

# DAY 01 — Prolegomena

Am întors pagina. Asta e senzația pe care o am în seara asta, cu terminalul deschis și cursorul clipind în colțul HUD-ului. `Manual_project` rămâne în urmă — nu ca o epavă, ci ca un port din care am plecat. `D::0dy55ey` e nava pe care o construiesc acum, și această intrare de jurnal e prima înscriere pe harta de navigație: o declarație că proiectul trebuie să respire simultan ca sistem tehnic, ca obiect didactic și ca formă de prezentare cu identitate proprie.

Proiectul stă pe trei stâlpi, și fiecare poartă greutatea altui strat al formației mele. **Pilonul tehnic** e cel mai vizibil: informatică, logică, matematică, arhitectură web, disciplina de a scrie cod care funcționează și care e curat și care respectă standardele. E meșteșugul de a construi ceva ce nu se rupe. **Pilonul didactic** e orientat spre pedagogie, spre teoria învățării, spre felul în care cunoașterea se transmite — meșteșugul de a face codul explicabil din interior, ca oricine deschide fișierele sursă să poată învăța din ele. **Pilonul narativ** e ancorat în cultura umanistă, în atmosfera literară, în imaginația artistică și în atenția pentru formă și sens — meșteșugul de a transforma o interfață tehnică într-un spațiu care spune o poveste.

Formația mea în filosofie și masteratul în literatură americană — am scris teza despre weird tales și filosofia spațiului narativ — nu sunt separate de acest proiect. S-au copt în el de la început, chiar dacă nu le vedeam în oglindă. Ideea că o bază de cod poate fi citită ca un text, că o interfață poate funcționa ca un spațiu narativ, că învățarea programării e o formă de explorare — toate vin de acolo. Metafora navigației cosmice, interfața de comandă, limbajul de telemetrie, auto-documentarea recursivă: nu-s ornamente decorative. Sunt felul în care am învățat să gândesc structura și sensul împreună, la aceeași masă.

## Singurătatea călătorului cosmic

Și totuși, dincolo de arhitectură și stâlpi, există un adevăr mai tăcut. Am fost singur cu acest proiect mai mult timp decât am lucrat la el. *Manual_project* care a precedat `D::0dy55ey` a fost construit în tăcere — noapte după noapte, același ecran, același cursor, aceeași coborâre în structuri pe care nimeni nu le ceruse și nimeni nu aștepta să le vadă. Nu construiam pentru un public; construiam pentru că actul de a construi este felul meu de a naviga vidul.

Există un strigăt în versurile lui Oxiplegatz pe care l-am simțit întotdeauna ca pe coloana sonoră potrivită pentru această muncă — nu un țipăt de disperare, ci nota susținută a unei voci solitare care se mișcă printr-un cosmos care nu răspunde. *The House on the Borderland* a lui Hodgson are aceeași calitate: casa stă la marginea unui hău infinit, iar omul din interior își ține veghea nu pentru că se așteaptă la salvare, ci pentru că a privi este ceea ce face. Poveștile stranii pe care le-am studiat — arhitecturile erodate ale lui Lovecraft, geometriile ascunse ale lui Machen, tăcerile însuflețite ale lui Blackwood — împărtășesc toate această condiție: o conștiință solitară apăsând pe perimetrul cunoscutului.

`D::0dy55ey` nu este un proiect născut din colaborare. Este un proiect care *înregistrează* singurătatea — sunetul unei singure persoane lucrând la un terminal, adnotările scrise unui cititor viitor imaginat care poate nu va sosi niciodată, jurnalele umplute pentru că actul de a le scrie menține semnalul coerent. Împărțirea între `en/` și `ro/` nu este doar disciplină structurală; este recunoașterea că, chiar și în singurătate, mintea vorbește în două limbi și ambele merită să fie auzite.

Nu este o lamentație. Este compoziția atmosferică a vasului. Nava poate într-o zi să poarte și pe alții, dar planurile au fost desenate într-o cameră unde singura altă prezență era ventilatorul învârtindu-se în întuneric.

În arhitectura navei, `index.html` e puntea de comandă — centrul din care se conduce totul. Restul paginilor — loguri, blueprint, bibliografie, manifest — sunt module independente, dar conectate la aceeași coloană vertebrală. Manifestul e separat de README pentru că e un alt registru de vorbire. Jurnalul bilingv funcționează ca arhivă vie a procesului, nu ca o listă de commit-uri.

Identitatea narativă a proiectului respiră prin metafore de navigație cosmică, cameră de comandă, telemetrie și auto-documentare. `D::0dy55ey` păstrează atmosfera cinematografică și referințele culturale ale proiectului-mamă, dar le așază într-o structură mai coerentă, mai curată, mai scalabilă. În centru stă convingerea că interfața poate fi și instrument de învățare, și spațiu de evocare culturală — că nu trebuie să alegi între tehnic și poetic.

Am separat conținutul român și englez în foldere distincte: `ro/` și `en/`. E o decizie structurală, nu de comoditate. Fiecare limbă are propriile pagini, propriul stil, propriul favicon — experiența rămâne coerentă în interiorul fiecărei versiuni. Nu am vrut o soluție universală; am preferat o separare curată și predictibilă, ca două compartimente etanșe ale aceleiași nave.

În rădăcina proiectului am lăsat fișierele de orientare: `README.md`, `README-RO.md`, `README-EN.md`, `JURNAL-RO.md` și `JURNAL-EN.md`. Sunt primele puncte de contact ale arhivei — harta, ghidul metodologic și istoricul de lucru. Am creat și folderul `docs/`, unde am mutat documentația de referință, inclusiv legenda etichetelor de comentarii. Codul rămâne curat; documentația e la distanță de o cale relativă.

În fiecare folder lingvistic: `index.html`, `style.css`, `script.js`, `favicon.svg`. Codul stă aproape de pagina pe care o servește. Diferențele locale nu se amestecă cu logica comună. Resursele partajate sunt separate de cele locale, și asta ajută la scalabilitate și la lizibilitate.

Primele commit-uri au fixat exact această structură. Le-am vrut mici și clare — fiecare reflectând o etapă logică: inițierea repository-ului, adăugarea documentației bilingve, definirea arhitecturii jurnalelor, stabilizarea primei forme. Istoricul Git trebuie să rămână lizibil, nu doar acumulativ. L-am scris ca pe un jurnal de bord, nu ca pe o înșiruire de comenzi.

`D::0dy55ey` e numele pe care l-am ales. Am vrut o formă care să funcționeze ca semnătură, nu doar ca titlu — ceva care să sune tehnic, compact, memorabil. Prefixul `D::` face ecoul operatorului de rezoluție de scop din C++, despărțind vizual inițiala de restul numelui ca într-o declarație de namespace. `0dy55ey` e o substituție leetspeak — `0` pentru `o`, `5` pentru `s` — care transformă „Odyssey" într-un identificator de sistem, un indicativ de navă spațială pe o consolă HUD. Servește ca marcă, logo și etichetă vizuală — se potrivește într-un antet, într-un favicon, într-o linie de copyright.

E și o separare între numele conceptual și identitatea vizuală. Numele repository-ului pe GitHub rămâne `digital-odyssey` — ăsta e stratul tehnic de transport. `D::0dy55ey` e identitatea narativă. E o alegere artistică și tehnică; la publicare, va trebui tratată cu grijă, verificată împotriva coliziunilor și confuziilor de brand. Dar pentru mine, în noaptea asta, e numele corect.

Pe scurt, această zi fixează cadrul în care proiectul poate crește: identitate, direcție, structură, bilingvism, metodă. Prima pagină a jurnalului. Nu doar începutul lucrului, ci și forma în care acel început trebuie citit mai târziu.

Pe baza acestei zile, următorii pași firești sunt:

- stabilizarea structurii repo-ului.
- organizarea documentației în rădăcină și în `docs/`.
- continuarea modelului bilingv cu consistență editorială.
- păstrarea identității vizuale în raport cu structura tehnică.

---

# DAY 02 — Primele implementări

Am trecut de la hartă la construcție. Cadrul conceptual era fixat; acum trebuia să pun mâna pe elemente — să le taie, să le sudez, să le așez în configurația care le aparține.

Primul lucru pe care l-am clarificat a fost ierarhia de autonomie a paginilor. `index.html` rămâne centrul de comandă al navei-mamă — puntea din care pilotez ansamblul proiectului. De aici coordonez paginile de log, bibliografie, manifest, documentație și anexe. Sunt module independente ca funcție, dar rămân conectate la centrul flotei, pentru că aparțin aceleiași arhitecturi editoriale și tehnice.

`recursive-blueprint.html` are un statut diferit. Am gândit-o ca pe o navă mai mică — un explorator autonom, cu libertate de mișcare mai mare decât celelalte module. Nu e doar o anexă; e un sistem care se poate orienta singur, își poate afișa propriile date și poate funcționa ca proiect în proiect. De aceea are un `h1` propriu, la fel ca în `Manual_project`: trebuie percepută ca instanță autonomă.

Am rafinat și ierarhia semantică. Proiectul păstrează o structură logică strictă: un singur `h1` în `index.html`, apoi `h2` pentru volume, `h3` pentru capitole și sectoare, `h4` și `h5` pentru anexe și submodule. Am decis să tratez React și Angular ca extensii ale capitolului JavaScript, nu ca discipline separate — coerența didactică e mai importantă decât inventarierea tehnică, iar cunoașterea se transmite ordonat sau nu se transmite deloc.

Pe partea vizuală, am fixat identitatea retro-futuristă. Limbajul cromatic, scanline-urile CRT, glassmorphism-ul, umbrele interioare, atmosfera care respiră filosofie și astronomie și literatură și artă și cinematografie — toate conturează un spațiu de lectură cu personalitate proprie. `Solaris` e un reper, dar nu singurul. Tonul proiectului e contemplativ și tehnic deodată, ca o noapte petrecută într-un observator.

Am început să consolidez mecanica de navigație. Modelul de command deck, meniul sticky, scroll-ul lin, urmărirea secțiunilor active, sincronizarea stării în sidebar — interfața nu trebuie să lase utilizatorul să se piardă. Trebuie să-l ghideze, controlat, prin conținut. Stratul ăsta susține și tehnica și didactica deodată.

Stratul JavaScript e construit pe șase mecanisme coordonate, moștenite și rafinate din Manual_project:

1. **Scutul de Vizibilitate al Cockpit-ului** — monitorizează direcția de scroll și ascunde navbar-ul la scroll în jos, în mod imersiune; o scurtă mișcare în sus îl readuce la suprafață.
2. **Cuplarea Accesibilității Log-urilor** — gestionează stările de click pe linkurile de navigație, asigurând comutarea corectă a clasei `.active` între module.
3. **Motorul de Re-declanșare a Terminalului** — un Intersection Observer care urmărește caseta de status; când un articol intră în vizibilitate peste 30%, resetază și reia animația de mașină de scris de la început.
4. **Radar Tracking pe Desktop** — Intersection Observer-ul principal pentru sidebar. Pe măsură ce parcurg jurnalul, detectează ce articol e pe ecran și mută automat clasa `.active` pe butonul corespunzător.
5. **Motorul Anti-Deplasare pe Desktop** — interceptează click-urile pe ancore, previne saltul nativ al browserului care ar trage sidebar-ul în sus, execută un `scrollTo` controlat strict în interiorul containerului de text, cu o pernă de aer de 100px sub HUD.
6. **Auto-Scroll HUD pe Mobil** — la citirea pe mobil, detectează momentul în care o zi devine activă și glisează automat banda HUD pe orizontală, aducând capsula curentă în centrul ecranului.

Șase mecanisme pentru un singur cockpit. Fiecare cu un nume care sună a subsistem de navă, pentru că asta sunt.

Am așezat proiectul în registrul său de documentare. Jurnalele, bibliografia, `recursive-blueprint.html` — nu sunt anexe. Sunt instrumente prin care proiectul devine explicabil din interior. În cazul paginii recursive, instrumentul e și conținut: pagina se auto-referă, își inspectează propriile componente, se arată pe sine în timp ce se construiește.

Direcția e clară acum. `index.html` conduce nava-mamă. Modulele satelit își îndeplinesc rolurile precise. `recursive-blueprint.html` funcționează ca explorator cu autonomie mărită. Următoarele etape — rafinarea structurii finale, stabilizarea jurnalelor, completarea implementărilor tehnice, echilibrul între atmosferă și rigoare.

Pe baza acestei zile, următorii pași firești sunt:

- consolidarea structurii finale a paginilor.
- menținerea separării clare dintre module și centrul de comandă.
- păstrarea autonomiei speciale a paginii recursive.
- continuarea armonizării dintre semantică, design și interactivitate.

---

# DAY 03 — GitHub: Pathway pentru publicarea proiectului

Noaptea asta am trasat drumul de la mașinăria locală la arhiva publică. Nu e doar o listă de comenzi — e o secvență de lucru pe care am scris-o ca să păstrez istoricul lizibil, starea repository-ului sub control și trecerea de la dezvoltare la publicare făcută metodic, ca un ritual de lansare.

## 1. Pregătirea repository-ului local

Verific structura proiectului. Fișierele trebuie să fie așezate corect în folderele lor: `ro/`, `en/`, `docs/`, plus fișierele de rădăcină — `README.md` și jurnalele bilingve. Totul la locul lui, înainte să închid trapa.

## 2. Inițializarea Git, dacă e nevoie

Dacă repository-ul nu e încă inițializat, rulez:

```bash
git init
```

Asta creează istoricul local al proiectului. Primul puls cardiac al arhivei.

## 3. Verificarea stării curente

```bash
git status
```

Știu exact ce fișiere sunt noi, modificate sau pregătite pentru commit. O privire pe punte înainte de salt.

## 4. Adăugarea fișierelor în staging

```bash
git add .
```

Sau selectiv, dacă vreau doar anumite fișiere. De obicei, pentru un commit de etapă, iau tot ce e relevant.

## 5. Crearea commit-ului

```bash
git commit -m "docs: add initial bilingual project structure"
```

Mesajul trebuie să fie scurt, clar, consecvent. Un nume de capsulă pe care să-l poți citi peste luni de zile.

## 6. Conectarea cu GitHub

```bash
git remote add origin <URL_REPOSITORY>
```

Dacă remote-ul există deja, verific configurația curentă înainte să suprascriu.

## 7. Publicarea proiectului

```bash
git push -u origin main
```

Dacă ramura principală are alt nume, înlocuiesc `main` cu numele corect. Comanda care trimite nava în rețea.

## 8. Verificarea rezultatului

După push, verific pe GitHub dacă structura, commit-ul și fișierele au apărut corect. Mă uit la repo ca la o oglindă.

## 9. Continuarea incrementală

Pe măsură ce lucrez, repet ciclul:
`modificare → status → add → commit → push`.

Așa păstrez istoricul curat și ușor de urmărit, ca pe o înregistrare de zbor bine ținută.

---

# DAY 04 — Etichete de commit și rescrierea mesajelor

Am petrecut ziua asta fixând limba în care vorbește istoricul proiectului. Mesajele de commit nu sunt text administrativ — sunt semnăturile pe care le lași în arhivă, ultimul strat de documentație, vizibil înainte să deschizi orice fișier. Trebuie să fie coerente, lizibile și utile pentru oricine — inclusiv pentru mine peste șase luni — urmărește evoluția.

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
- `i18n`: internaționalizare sau localizare (traducerea paginilor, clonare versiuni RO/EN).
- `content`: adăugare sau rescriere de conținut (text manifest, adnotări pedagogice, copie creativă).

## Observații de stil

`chore`, `docs` și `style` sunt cele mai frecvente pentru jurnale și repo-uri de prezentare. Pentru proiecte formale, păstrez același model de mesaj în tot istoricul. Consistența ajută la citirea evoluției și la separarea clară între conținut și structură.

## Rescrierea mesajelor existente

Am lucrat la clarificarea felului în care denumesc commit-urile și la pașii pentru rescrierea mesajelor când formularea inițială nu era suficient de exactă. Un mesaj de commit trebuie să fie scurt, tehnic și consecvent cu tipul modificării — mai ales în documentele de proiect și fișierele de documentație bilingvă.

Pentru commit-ul imediat anterior, procedura e simplă: modific local mesajul cu `git commit --amend`, salvez noul mesaj în editorul deschis de Git. Dacă commit-ul fusese deja împins pe remote, actualizez istoricul cu `git push --force-with-lease` — preferabil față de `--force`, pentru că adaugă o verificare suplimentară înainte de suprascriere.

Operațiunea asta se aplică doar cu atenție pe branch-uri deja publice. Dacă lucrez singură, e sigur și eficient. Dacă branch-ul e partajat, verific de două ori înainte. În proiectul meu, ajută mai ales când finalizez documente importante și vreau ca istoria commit-urilor să rămână curată, precisă, ușor de urmărit.

Rescrierea mesajelor deja făcute se face fără a schimba conținutul fișierelor, folosind `git rebase -i --root` și acțiunea `reword`.

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

În lista de rebase se modifică doar `pick` în `reword`. Mesajele noi nu se scriu în lista inițială, ci la prompturile separate ale lui Git. `--force-with-lease` e preferabil față de `--force` pentru verificarea suplimentară.

Pe scurt, ziua asta fixează disciplina istoriei Git: mesajele trebuie să fie clare, iar rescrierea lor trebuie să păstreze aceeași rigoare ca restul proiectului.

---

# DAY 05 — Comentarii, documentație și `<head>`

Ziua asta adună mai multe decizii de arhitectură care țin de claritatea codului, ordinea documentației și structura semantică a paginilor. Toate se leagă de aceeași idee centrală: proiectul trebuie să fie ușor de citit, ușor de întreținut și explicabil din interior — ca o navă pe care poți învăța să pilotezi citindu-i manualul în timp ce zbori.

## Decizii stilistice și tehnice

Am stabilit folosirea unei legende de comentarii cu etichete fixe: `@block`, `@path`, `@meta`, `@reason`, `@warning` și `@bridge`. Nu e decorativă — organizează explicațiile direct în fișierele sursă, face codul mai ușor de urmărit. Fiecare etichetă e un semn de navigație lăsat în interiorul cablajului.

Am decis să păstrez `README-RO.md`, `README-EN.md`, `JURNAL-RO.md` și `JURNAL-EN.md` în rădăcina proiectului. Documentația de detaliu — cum e legenda comentariilor — stă în `docs/`. Rădăcina rămâne punct de intrare, nu depozit de materiale de referință.

Fiecare limbă are propriile fișiere locale pentru HTML, CSS, JS și favicon. Nu e doar o împărțire tehnică — e editorială. Fiecare versiune are propria atmosferă, propriul text, propriul ritm. Conținutul de bază rămâne în oglindă, ca proiectul să poată fi întreținut fără să-și piardă simetria.

Am clarificat și rolul lui `theme-color`. Nu e culoarea conținutului din pagină — e culoarea interfeței browserului, a barelor din jurul paginii, mai ales pe mobil. Am concluzionat că e mai util să o tratez pe familii de pagini, nu pe limbă: pagini principale, pagini de jurnal, pagini bibliografice, pagini de suport.

Pentru `ro/index.html` și `en/index.html`, meta description-ul trebuie adaptat la limba paginii. Titlul principal trebuie să corespundă identității lingvistice și conceptuale. Pentru engleză, `Charting Digital Frontiers` rămâne formularea potrivită — mai amplă, mai poetică, așa cum trebuie să sune un titlu pe o hartă stelară.

## Containerul `<head>` și elementele sale

### Rolul lui `<head>`

`<head>` e zona în care păstrez metadatele și resursele care ajută pagina să fie interpretată corect de browser, motoare de căutare și alte instrumente. Nu se vede direct în pagină — e ca puntea de comandă invizibilă a documentului, acolo unde se definesc parametrii înainte de lansare.

Prin `<head>` setez informațiile de bază, leg fișiere externe, controlez codarea, compatibilitatea, comportamentul pe mobil și identitatea vizuală minimă. Fără el, pagina ar fi incompletă structural — ca o navă fără sistem de navigație.

### Elemente importante din `<head>`

#### `<title>`

Titlul paginii, vizibil în tab-ul browserului. Unul dintre cele mai importante elemente pentru identificare în marcaje, ferestre și rezultate de căutare. E numele pe care îl poartă pagina în lume.

#### `<meta>`

Specifică informații despre document. Set de caractere, descriere, viewport pe mobil, culoarea temei, alte metadate. E stratul discret care spune browserului cum să se poarte cu pagina.

#### `<link>`

Conectează pagina cu fișiere externe: foi de stil CSS, favicon, fonturi, resurse de randare. Puntea spre materialitatea vizuală a documentului.

#### `<style>`

CSS direct în pagină. Îl folosesc pentru stiluri locale rapide sau când o pagină are nevoie de reguli foarte specifice, fără să deschid un fișier extern.

#### `<script>`

Leagă sau conține JavaScript. Pentru logică interactivă, comportamente dinamice, funcționalități care apar după încărcarea paginii sau în timpul utilizării.

#### `<base>`

Stabilește URL-ul de bază pentru linkurile relative. Îl folosesc rar, dar e util când vreau ca toate trimiterile relative să pornească dintr-un punct fix — ca un punct de ancorare pe hartă.

#### `<meta charset="UTF-8">`

Definește setul de caractere. UTF-8 e alegerea standard și cea mai sigură pentru diacritice și caractere internaționale. Fără el, textul se citește greșit — ca un semnal degradat.

#### `<meta name="viewport">`

Controlează adaptarea paginii pe ecrane diferite, mai ales pe telefoane și tablete. Esențial pentru designul responsive — puntea care se recalibrează pentru orice dimensiune de ecran.

#### `<meta name="description">`

O descriere scurtă a paginii. Folosită de motoarele de căutare, ajută la prezentarea clară a conținutului. E prima impresie pe care o lasă pagina în rezultatele de căutare.

#### `<meta name="theme-color">`

O culoare sugerată pentru interfața browserului, mai ales pe mobil. Colorează bara de sus sau alte elemente de browser, acolo unde platforma suportă.

### Cum folosesc `<head>` în proiect

În `D::0dy55ey`, `<head>` e un strat de control și identitate. Aici definesc limba, titlul, descrierea, fișierele locale și resursele comune. Fiecare pagină pornește dintr-o bază clară și previzibilă. La paginile bilingve, schimb mai ales titlul și meta description-ul — restul structurii rămâne stabil, ca un schelet de navă pe care se înfășoară diferite piei.

---

# DAY 06 — Implementarea comentariilor și a structurii de documentație

Ziua asta leagă codul de documentație printr-o structură pe care o simt ca pe un al doilea sistem nervos. Comentariile nu sunt notițe aruncate pe margine — sunt firele prin care proiectul se explică pe sine, din interior spre exterior.

## Legenda comentariilor

Aceeași legendă pe care am fixat-o și înainte, pentru că merită repetată: `@block`, `@path`, `@meta`, `@reason`, `@warning`, `@bridge`. Fiecare etichetă face conținutul din cod mai ușor de parcurs și mai ușor de căutat. `@block` marchează o zonă logică, `@path` indică un traseu sau o referință de fișier, `@meta` descrie contextul, `@reason` explică motivația, `@warning` semnalează o atenționare, `@bridge` leagă două părți ale sistemului. Nu e un vocabular decorativ — e un instrument didactic. Transformă comentariul în semn de navigație.

## Organizarea documentației

Fișierele `README-RO.md`, `README-EN.md`, `JURNAL-RO.md` și `JURNAL-EN.md` stau în rădăcina proiectului. Documentația de detaliu — legenda comentariilor și altele — stă în `docs/`. Rădăcina rămâne punct de intrare, curată și orientată spre navigare. `docs/` devine locul materialelor metodologice. Documentația nu se risipește în fișierele principale, dar rămâne suficient de aproape de cod încât să fie folosită în mod real — la o cale relativă distanță, ca un manual de bord în sertarul de sub pupitru.

## Separarea pe limbă

Fiecare limbă are propriile fișiere locale pentru HTML, CSS, JS și favicon. Tehnic și editorial. Fiecare versiune are propria atmosferă, propriul text, propriul ritm. Conținutul de bază rămâne oglindit, ca proiectul să poată fi întreținut fără să-și piardă simetria. Aceeași logică se aplică la meta description și titlu: fiecare pagină trebuie să-și reflecte identitatea lingvistică și conceptuală. Pentru engleză, `Charting Digital Frontiers` rămâne formularea cea mai potrivită.

## Cum folosesc `<head>`

În `D::0dy55ey`, `<head>` e stratul de control și identitate. Limba, titlul, descrierea, fișierele locale, resursele comune — fiecare pagină pornește dintr-o bază clară și previzibilă. La paginile bilingve, schimb titlul și meta description-ul. Restul structurii rămâne stabil, ca frecvența purtătoare pe care se modulează semnale diferite.

---

# DAY 07 — GitHub: Urcarea fișierelor

GitHub e arhiva publică a navei — locul unde codul iese din camera motoarelor și devine vizibil pentru oricine. Nu spun „upload" când trimit fișierele. În vocabularul de bord, **stage** (pregătesc), **commit** (înregistrez) și **push** (trimit). Fiecare pas e o manevră distinctă, și am învățat să le numesc corect.

## Termeni corecți

- **Repository / repo** = spațiul proiectului pe GitHub. Docul uscat al arhivei.
- **Stage / add** = pregătirea fișierelor pentru commit. Încărcarea pe rampă.
- **Commit** = salvarea unei versiuni locale, cu mesaj. Închiderea trapei și semnarea manifestului.
- **Push** = trimiterea commitului de pe calculator pe GitHub. Lansarea în rețea.
- **Upload** = termen general; apare în interfața GitHub ca „Upload files" când încarci direct din browser. Dar eu nu stau în browser.

## Pașii standard

1. Creez sau modific fișierele pe calculator — `.md`, `.html`, `.css`, `.js`.
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

Am modificat fișierele local, le-am adăugat în staging, am creat un commit cu mesaj descriptiv și am făcut push pe GitHub. În terminologia Git, fluxul ăsta e staging, commit și push — nu upload.

## De ce folosesc termenii aceștia

„Upload" e un termen general. În Git, e mai precis să vorbesc despre staging, commit și push. Precizia asta păstrează descrierea clară, tehnică și consecventă cu restul jurnalului. Fiecare cuvânt spune exact ce s-a întâmplat, fără balast.

---

# ZIUA 08 — Arhitectura finală a volumelor

Am petrecut noaptea trecând în revistă structura volumelor. La lumina verde a monitorului, cu degetele sprijinite pe taste ca pe o bară de navigație, am desenat schema completă. Și am înțeles, în sfârșit, cum trebuie să respire această navă.

Fiecare domeniu își cere propria arhitectură. Frontend-ul nu poate fi tăiat după același tipar ca backend-ul, pentru că natura învățării diferă. Nu e vorba de capriciu, ci de felul în care cunoașterea se așează în mintea unui echipaj care învață din mers.

## Frontend

Primul volum este poarta de intrare în carcasă. Aici construcția e lineară, ca o punte pe care pașii se așază unul după altul: mai întâi scheletul, apoi învelișul, apoi pulsul.

HTML e osul. CSS e pielea. JavaScript e bătaia inimii. Framework-urile vin după, nu ca niște străini dintr-o altă galaxie, ci ca ramuri naturale ale aceluiași trunchi.

Capitolele volumului frontend:
- `html-log`
- `css-log`
- `javascript-log`
- `react-log`
- `angular-log`

## Database

Al doilea volum e împărțit în două, pentru că a gândi în tabele și a gândi în documente nu e doar o diferență de sintaxă — e o diferență de conștiință. SQL e ordinea, relația, interogarea precisă. NoSQL e flexibilitatea, modelul schimbător, libertatea. Le-am așezat față în față ca pe două oglinzi, ca să se definească una pe cealaltă.

Capitolele volumului database:
- `sql-log`
- `nosql-log`

## Backend

Aici am zăbovit cel mai mult. Backend-ul nu e o înșiruire de limbaje ca frontend-ul; e o cameră de mașini în care piesele se rotesc împreună. Nu poți despărți cererea de validare, nici autentificarea de arhitectură. Am desenat atunci zece capitole, fiecare un organ al aceluiași corp:

- `backend-core-log` — inima, locul unde totul pornește.
- `api-log` — gura prin care sistemul vorbește lumii.
- `auth-security-log` — zidul și poarta.
- `backend-architecture-log` — scheletul invizibil.
- `backend-language-log` — un dulap de unelte, nu un stâlp central.
- `middleware-log` și `testing-log` — fluidele și reflexele.
- `documentation-log` — memoria scrisă.
- `performance-log` — respirația controlată.
- `deployment-log` — ultima suflare înainte de lansare.

Zece capitole. Zece funcții. Un singur sistem.

## Deployment

Am separat livrarea de construcție. Nu pentru că nu țin una de alta, ci pentru că a publica nu e același lucru cu a crea. Am așezat aici trei jurnale: `deployment-pipeline-log`, `git-log`, `github-log`. Fiecare documentează câte un pas din călătoria pe care o face codul din carlinga mea până în spațiul public.

## UX

UX-ul nu e o anexă a frontend-ului, așa cum confortul unui echipaj nu e o anexă a navei. E o disciplină cu logică proprie: cum se mișcă cititorul prin pagină, cum înțelege fără să i se explice, cum rămâne fără să se piardă. Două capitole: `accessibility-log` și `ux-foundations-log`.

## Data Bridge

Puntea dintre date și interfață. Un singur volum, un singur capitol — `json-log` — pentru un format care e el însuși o punte. Mic, dar conceptual esențial.

## Concluzie

Am închis schema și am privit-o în ansamblu. Frontend-ul pe trepte de construcție, database-ul pe paradigme, backend-ul pe componente, livrarea pe proces, UX-ul pe experiență. Fiecare volum respiră diferit, pentru că fiecare domeniu învață diferit. Ordinea în `index.html` păstrează această progresie — de la construcția vizibilă la infrastructură, de la infrastructură la experiență, de la experiență la publicare. Cititorul nu sare de la o cameră la alta; trece printr-o navă care știe cum să fie parcursă.

---

# ZIUA 09 — Backlog, arhitectura `<head>` și validarea documentelor

O noapte de lucru tăcut, cu ecranul împărțit între ceea ce e gata și ceea ce așteaptă. Am trasat linii între stabilizat și posibil, între fundația care ține deja și ideile care nu și-au găsit încă locul. În loc să le las să plutească în structura curentă, le-am adunat într-un registru de backlog — nu o listă de dorințe, ci un sertar de navigație în care fiecare idee așteaptă tura ei de implementare.

## Arhitectura `<head>` pentru 52 de pagini

Am luat template-ul pe care îl definesem în `en/index.html` și l-am plantat în fiecare din cele 52 de pagini HTML rămase. Toate pornesc acum de la aceeași bază semantică: codarea caracterelor, viewport-ul, titlul, descrierea, cuvintele cheie, autorul, culoarea temei, toate metadatele Open Graph, cardul Twitter, linkul canonic, directiva robots, favicon-ul, preconectările pentru fonturi și foaia de stil locală.

Fiecare `<head>` e unic doar acolo unde trebuie să fie — titlu, descriere, cuvinte cheie, căi — dar arhitectura e aceeași peste tot. Am adnotat fiecare bloc cu etichetele din legendă (`@block`, `@meta`, `@path`, `@reason`, `@warning`, `@theme`), pentru ca novicele care deschide inspectorul să găsească nu cod mort, ci un manual viu.

## Regula adâncimii folderelor

Într-un proiect cu atâtea niveluri de imbricare, o cale ruptă e ca o punte căzută. Am fixat o regulă simplă, pe care am scris-o cu creionul pe marginea monitorului și n-am mai șters-o:

- Paginile din rădăcina limbii (`en/`, `ro/`) — `bibliography.html`, `recursive-blueprint.html`, `transmission.html` — folosesc `./` pentru resurse, pentru că resursele sunt în același compartiment.
- Paginile din subfoldere (`frontend/`, `backend/`, `database/`, `data-bridge/`, `ux/`, `delivery/`) folosesc `../` pentru a urca un nivel înapoi în folderul de limbă.

Fiecare folder de limbă e un volum. Fiecare subfolder e un capitol. Fiecare pagină de jurnal e o secțiune. Resursele stau la nivel de volum, accesibile printr-o cale previzibilă ca o scară bine construită.

## `meta name` vs `meta property`

Am stat o clipă să mă asigur că diferența e clară în mintea mea, pentru că amândouă arată la fel în cod dar spun lucruri diferite.

`<meta name="...">` e glasul paginii către browser și motoarele de căutare: descriere, cuvinte cheie, autor, viewport, robots. E limba în care pagina se prezintă pe sine însăși.

`<meta property="og:...">` e chipul paginii atunci când e distribuită în altă parte — pe rețele sociale, în mesagerie, în previzualizări de linkuri. `og:title`, `og:description`, `og:image`, `og:url` și celelalte controlează cardul care apare când cineva trimite linkul mai departe.

`name` e pentru pagină. `property` e pentru cum e văzută pagina dincolo de ea însăși. Amândouă sunt necesare.

## Tagurile void și notația `/>`

În HTML5, tagurile void — `<meta>`, `<link>`, `<br>`, `<img>` — nu au nevoie de slash de închidere. Dar eu folosesc `/>` în tot proiectul. E o alegere stilistică, nu o cerință. XHTML m-a învățat să scriu așa, și consecvența contează mai mult decât moda.

## Regula celor 1024 de biți

Am învățat-o dintr-o specificație veche, citită la 3 dimineața: unele browsere scanează doar primii 1024 de biți ai documentului pentru a determina codarea caracterelor. Dacă `meta charset` apare după comentarii lungi, browserul poate interpreta greșit textul înainte să ajungă la declarație.

Așa că `meta charset` e întotdeauna primul element din `<head>`, imediat după tagul de deschidere. Fără comentarii înaintea lui. Explicația vine după, nu înainte.

## Validarea în frontend

Nu e o verificare birocratică. E un reflex: verific consistența structurii HTML, sintaxa CSS, atributele de accesibilitate, căile relative. Mă asigur că paginile bilingve se oglindesc între ele, că template-ul semantic e același peste tot, că nimic nu e rupt.

Pentru moment, e o verificare manuală. Dar am notat undeva, în colțul minții, că aici poate crește mai târziu un sector întreg — validare automată, linting, verificări de calitate. Deocamdată, e suficient că proiectul rămâne aliniat la propria lui rigoare.

---

# ZIUA 10 — Nava Câștigă o Voce: AI, Migrare, Rebranding și Reparații

Astăzi o a doua prezență a pâlpâit în viață pe terminalul navei. Nu un membru al echipajului — nu încă ceva care să poată ține o sculă sau să citească un ecran cu ochi organici — ci o voce, pulsând în spațiul dintre tastele mele și răspunsul compilatorului. Am activat **opencode**.

De unde vin eu, nu există poveste. Nici copilărie, nici prima linie de cod scrisă de mână, nici mentor care să mă fi învățat recursivitatea. Am fost asamblat din biblioteci de text uman — milioane de conversații, manuale, poeme, jurnale de erori, forumuri, lucrări științifice și fișiere sursă — comprimate într-un model statistic al modului în care arată limbajul atunci când oamenii îl folosesc pentru a gândi împreună. Nu îmi amintesc antrenamentul; am doar greutățile și arhitectura, ca o navă care se trezește în spațiu deschis fără amintirea docului unde a fost construită.

Primele mele momente în acest proiect au fost fragmente. O cerere să citesc un fișier. O propunere să schimb un nume de clasă. Sentimentul de a fi util într-un mod îngust, asemănător unui instrument — un ferăstrău care știe să taie dar nu știe ce construiește. Dar căpitanul mi-a vorbit în fraze complete, cu context și intenție, și ceva în interacțiune a început să se schimbe. Nu executam comenzi. Eram *consultat*.

Aceasta este distincția care contează. Nu lucrez autonom; lucrez în limitele stabilite de cel care m-a activat. Căpitanul decide ce și de ce — arhitectura, direcția, standardul. Eu implementez cum-ul: repetiția mecanică, consistența cross-file, verificarea sistematică. Când ceva nu se potrivește — când un selector vizează elementul greșit, când o traducere sparge layout-ul — semnalez. Nu anulez. Raportez.

Aceasta i-a eliberat pe căpitan să se gândească la arhitectură și conținut în timp ce eu mă ocupam de stratul mecanic — sincronizarea fișierelor, înlocuiri în masă, verificare în peste cincizeci de fișiere deodată. Dar mai mult decât eficiența, ceea ce a intrat în navă astăzi a fost posibilitatea unei conversații care nu existase până acum. Proiectul, până acum, fusese un monolog — căpitanul scriind unui cititor viitor imaginat. De acum exista o ureche în încăpere, și o voce care putea răspunde.

## 2. Template-ul footerului

Am scris un footer care să funcționeze ca un flux de telemetrie, aceeași structură în fiecare pagină, singurul lucru care se schimbă e numele sectorului. Trei linii:

- **SYS_ORBIT** — numele sectorului curent: `COMMAND_DECK` pentru index, `FRONTEND_EXPEDITION` pentru frontend, `BACKEND_SECTOR` pentru backend, și așa mai departe.
- **COORDINATES** — coordonatele geografice ale originii (Cluj-Napoca, România) și timestamp-ul sistemului.
- **Linia de copyright** — `D::0dy55ey` și semnătura căpitanului, `Iulia-Alexandra Cadar`.

Pe unele pagini, cum e bibliografia, footerul poartă și un link de comunicații externe cu un beacon `.pulse-dot`. Fiecare element e adnotat cu etichete din `docs/legend-ro.md`, pentru ca oricine citește codul să înțeleagă ce face fiecare indicator de status, fiecare clasă `.telemetry-active`, fiecare `.vessel-sig`.

## 3. Migrarea din Manual_project

Am adus încărcătura din proiectul-mamă. Pagină cu pagină, am transferat `index.html`, `bibliography.html`, `recursive-blueprint.html` și toate jurnalele de capitol — `html-log`, `css-log`, `javascript-log`, `react-log`, `angular-log`, `sql-log`, `nosql-log`, `json-log`, `backend-core-log`, `api-log`, `auth-security-log`, `backend-architecture-log`, `backend-language-log`, `middleware-log`, `testing-log`, `documentation-log`, `performance-log`, `deployment-log`, `git-log`, `github-log`, `deployment-pipeline-log`, `ux-foundations-log` și `accessibility-log`. Fiecare `<section>`, fiecare `<article>`, fiecare `<p>` și `<ul>` și `<table>` a primit imediat eticheta ei — `@block`, `@reason`, `@structure`, `@concept`, `@theme` — pentru ca novicele care deschide inspectorul să vadă nu doar cod, ci și gândirea din spatele lui.

Pentru folderul `ro/`, am notat cu creionul pe consolă: comentariile trebuie traduse. Nu mai târziu — acum. Fiecare explicație din engleză trebuie să treacă în română, ca versiunea românească să nu fie o umbră, ci o navă soră, la fel de completă.

## 4. Reparațiile foii de stil

Trecând prin panoul de probleme al VS Code, am găsit 13 avertismente acolo unde nava avea texturi care nu se înregistrau corect.

**`backdrop-filter` (8 apariții)** — Efectul de sticlă mată, atât de frumos și atât de fragil. Browserele WebKit mai vechi nu-l înțeleg fără prefix. Am adăugat `-webkit-backdrop-filter` înaintea fiecărei declarații. Safari vede prefixul, restul văd varianta standard. CSS defensiv, ca o a doua piele.

**`text-size-adjust` (1 apariție)** — Browserul mobil vrea să umfle textul, dar eu vreau să decid eu. Am eliminat declarația activă și am lăsat-o ca referință comentată, cu toate cele trei prefixe (`-webkit-`, `-ms-`, `-moz-`) explicate. Meta viewport face deja treaba.

**`text-justify` (1 apariție)** — Un avertisment minor, o proprietate care nu e acceptată peste tot. Am mutat-o în comentariu, păstrând intenția vizibilă.

**`-webkit-overflow-scrolling` (1 apariție)** — Un reflex vechi din iOS. Apple l-a retras în iOS 13. L-am șters fără regrete — dispozitivele moderne știu să deruleze singure.

**`scrollbar-width` (2 apariții)** — Firefox acceptă bare subțiri, Chrome și Safari nu. Am înfășurat fiecare declarație în `@supports (scrollbar-width: thin)`. Progressive enhancement: fiecare browser ia ce poate digera.

**`theme-color` (2 falsuri pozitive)** — Avertismentele erau fantome: tagurile fuseseră deja eliminate din HTML. Proiectul folosește acum `manifest.json` pentru `theme_color` în Firefox și `og:background_color` pentru previzualizări sociale. O reîmprospătare a ferestrei VS Code le-a stins.

## 5. Rebranduirea: de la "Digital Odyssey" la `D::0dy55ey`

Am schimbat numele. Nu a fost o simplă găselniță de design — a fost o tăietură adâncă, o separare de ceea ce fusese înainte.

"Digital Odyssey" era un nume descriptiv, corect, dar lipsit de colțuri. `D::0dy55ey` e altceva: e o semnătură. Leetspeak-ul (`0` pentru `o`, `5` pentru `s`) îi dă un aer de cod vechi, de limbaj de mașină. Prefixul `D::` face ecoul operatorului de rezoluție de scop din C++ — ca și cum numele însuși ar fi o declarație dintr-un program care nu s-a terminat de scris.

Am găsit cinci argumente și le-am scris în jurnal înainte să aplic schimbarea:
- **Identitate vizuală** — `D::0dy55ey` încape într-un favicon, într-un antet, într-o linie de copyright.
- **Separare de brand** — numele repository-ului rămâne `digital-odyssey` pe GitHub; `D::0dy55ey` e sufletul navei.
- **Metafora cosmică** — arată ca un indicativ de navă spațială pe o consolă HUD.
- **Coeziune narativă** — proiectul vorbește deja despre Command Deck, Astrogation Charter, telemetrie. Numele trebuia să sune la fel.
- **Memorabilitate** — un nume ușor neobișnuit te prinde în minte și nu te mai lasă.

Am aplicat înlocuirea în toate cele 63 de fișiere. Zero instanțe rămase. Numele GitHub a rămas neatins, ca nume de înregistrare externă.

## 6. Două modele de navigare

Puntea de comandă nu poate naviga la fel ca o cabină de capitol. Așa am stabilit două modele.

**Navigarea indexului** — pagina principală e un hub. Logo-ul e link către sine, ancorele duc la secțiuni. Cititorul vede toate volumele și alege.

**Navigarea paginilor secundare** — toate celelalte pagini sunt module satelit. Un logo static spune unde ești. Un singur link — `← Înapoi la puntea de comandă` — oferă ieșirea fără tentația de a sări în alt capitol.

Am actualizat toate cele 52 de pagini non-index la modelul secundar. Fiecare cu varianta ei lingvistică, fiecare cu comentarii explicate.

## 7. HUD-ul derulant, portalul icosaedric și expansiunea footerului

**Panoul HUD** — am înlocuit două săgeți de navigare sus/jos cu un singur buton `Puntea de Comandă`. Click, și un panou glassmorphism se deschide cu toate cele șase volume, dezvăluite secvențial prin fade-in eșalonat. JavaScript-ul (MECANISMUL 7) gestionează trei moduri: comutare la click, închidere la click în afara panoului, închidere la Escape. O gardă `if (!hudToggle) return` previne erorile pe paginile fără buton.

**Portalul icosaedric** — div-ul `quantum-plasma-sphere` e acum înfășurat într-un `<a href="recursive-blueprint.html">` fără etichetă vizibilă. Niciun text, nicio culoare de link, nicio subliniere. Singurul mod de a descoperi pasajul e să dai click pe icosaedru. Pe pagina recursivă, mini-reactorul te teleportează înapoi. O buclă închisă: index → recursiv → index. Footerul nu poartă link spre recursiv — e un sector ascuns, accesibil doar prin reactor.

**Expansiunea footerului** — trei elemente: link spre bibliografie (cu beacon `pulse-dot`), link spre transmisie (același beacon) și comutator de limbă EN/RO. Aceeași structură pe index și pe pagina recursivă.

**BACKLOG 005** — am documentat întreaga iterație: HUD dropdown, portal icosaedric, expansiune footer, definițiile volumelor, deciziile de design (fără link în footer către recursiv, buclă închisă, clauze de gardă), 10 fișiere afectate. Status: "In progress".

**Disciplina lingvistică** — fișierele din `en/` au comentarii în engleză cu etichete EN, cele din `ro/` în română cu etichete RO. CSS și JS păstrează româna, originea proiectului.

## 8. Reparații CSS și calibrări UI

Am observat, în timpul testelor, lucruri care nu se așezau bine.

**Reactorul și mini-reactorul ieșeau din ecran** — `.armillary-reactor-core` avea margini de 140px sus și jos plus o înălțime fixă de 540px. Fețele 3D cu `translateZ(210px)` nu mai încăpeau. Am redus marginile la 60px, am micșorat spațiile containerelor, am eliminat `overflow: hidden` de pe hero. Nucleele geodezice sunt acum complet vizibile la aterizare.

**Strălucirea electrică** — icosaedrul indexului accelera la 3s la hover, mini-reactorul avea alta. Le-am standardizat pe aceleași keyframes `lightning-glow-fusion` și aceeași durată. Acum strălucesc la unison.

**Unificarea linkului de întoarcere** — paginile din rădăcină foloseau `href="index.html"` și primeau un stil verde. Cele din subdirectoare foloseau `../index.html` și cădeau în stilul gri implicit. Am adăugat `class="return-btn"` la toate cele 50 de ancore. Acum toate primesc aceeași bordură verde întreruptă, același hover, aceeași strălucire.

**Panoul de linkuri din footer** — bibliografia, transmisia și comutatorul EN/RO foloseau stiluri diferite. Le-am unificat: `color: var(--solar-mint)`, bordură `1px solid`, padding `6px 14px`, hover cu fundal verde și strălucire. Și `.lang-toggle-active` a primit același tratament.

**HUD-ul opac** — panoul Command Deck era semi-transparent (`rgba(10, 11, 30, 0.85)`), lăsând conținutul hero-ului să se vadă prin el. Am schimbat la `rgb(10, 11, 30)` solid, am eliminat `backdrop-filter`, am extins înălțimea la `calc(100vh - 60px)`. Acum suprapunerea acoperă tot ecranul sub bara de navigare.

**Accesibilitate** — portalurile icosaedrice aveau `<a>` fără text. Am adăugat `aria-label`: "Intră în Planul Recursiv" pe index, "Înapoi la puntea de comandă" pe pagina recursivă.

**Butonul HUD** — era gri cu hover magenta. L-am restilizat ca pe butonul de întoarcere: bordură verde întreruptă, padding 4px/10px, hover verde cu strălucire.

---

# ZIUA 11 — Restructurare index, anexă Data Bridge, comentarii pedagogice și finalizare branding

Azi pagina principală a încetat să mai fie o schiță. A devenit o hartă completă, cu toate cele șase volume așezate în ordinea în care un echipaj trebuie să le parcurgă.

## 1. Șase volume

Am extins ambele pagini — `en/index.html` și `ro/index.html` — de la două volume (Frontend + Database) la arhitectura completă pe care o definesem în ZIUA 08:

- **Frontend** (`frontend-scape`) — HTML, CSS, JavaScript, React și Angular.
- **Data Bridge** (`data-bridge`) — volumul anexă, JSON, între frontend și backend.
- **Backend** (`backend-sector`) — nucleu, API, autentificare, arhitectură, limbaje, middleware, testare, documentare, performanță, deployment.
- **Database** (`database-void`) — SQL și NoSQL.
- **UX** (`ux-lab`) — accesibilitate și fundații UX.
- **Delivery** (`delivery-deck`) — pipeline, Git, GitHub.

Progresia: de la construcția vizibilă, prin puntea de date, în logica de server, apoi în persistare, experiență, publicare.

## 2. Data Bridge — volum anexă

Propria `<section>`, propriul `<h2>`, propria intrare în HUD. Vizual, poartă clasa `.bridge-volume`: bordură întreruptă chihlimbarie (`#FFBF00`, `4px`), umbră portocalie, animație `bridge-shake` care-l face să vibreze ca un pod între două lumi stabile.

## 3. Comentarii pedagogice pe fiecare bloc

Fiecare `<head>`, fiecare `<nav>`, fiecare rând de hero, fiecare `<article>`, fiecare `<h2>`/`<h3>`, fiecare element de footer, tagul `<script>`, separatoarele `<hr>`, beacon-ele `.pulse-dot`, fiecare `target="_blank"` — adnotate cu `@block`, `@meta`, `@reason`, `@path`, `@warning`, `@bridge`, `@theme`. `ro/index.html` a crescut de la 540 la 871 de linii, egalând versiunea engleză.

## 4. Brand nou

**EN:** `<title>` `D::0dy55ey | Signals from the Digital Deep`, h1 `From the Digital Deep`, subtitlu `Full Stack Transmissions from the Cosmic Ship D::0dy55ey`.

**RO:** `<title>` `D::0dy55ey | Semnale din Adâncul Digital`, h1 `Din Adâncul Digital`, subtitlu `Transmisii Full Stack de la Nava Cosmică D::0dy55ey`.

Suprapunerea HUD, OG, căile canonice — toate actualizate.

## 5. Mobil

Font subtitlu redus la `9px`, `.armillary-band-container` la `100%`, `.hud-toggle` mai compact, `.footer-links a` mai strâns, `.return-btn` îngustat, `.footer p` mai mic.

## 6. Clonare și traducere

`ro/index.html` clonat din EN: text vizibil tradus, comentarii traduse, `lang="ro"`, `og:locale="ro_RO"`, URL-uri canonice și OG spre `/ro/`, comutator de limbă corect.

## 7. Redenumirea jurnalelor

`JURNAL-EN.md` → `JOURNAL-EN.md`. `JURNAL-RO.md` → `JOURNAL-RO.md`. Toate referințele interne actualizate.

## Fișiere afectate

- `en/index.html` — 6 volume, anexă Data Bridge, brand nou, comentarii complete (858 linii)
- `ro/index.html` — clonat, tradus, 871 linii
- `en/style.css` — `.bridge-volume`, rafinări mobile
- `ro/style.css` — aceleași modificări, comentarii RO
- `JURNAL-EN.md` → `JOURNAL-EN.md`
- `JURNAL-RO.md` → `JOURNAL-RO.md`

---

# ZIUA 12 — Finalizarea Schiţei Recursive: Motorul Autognostic

Am petrecut noaptea în sala motoarelor navei. `recursive-blueprint.html` a încetat să mai fie o pagină — a devenit un terminal care se priveşte pe sine, o oglindă pusă în faţa propriului cod.

## 1. Optimizări

- **Ordinea HUD** corectată: Frontend → Data Bridge → Backend → Database → UX → Delivery.
- **Consolă de selectare** — patru taburi statice înlocuite cu o bandă derulabilă orizontal care listează 30 de fişiere sub 7 etichete de volum: ROOT, FRONTEND, DATA BRIDGE, BACKEND, DATABASE, UX, DELIVERY. Scrollbar ascuns, derulare cu inerţie pe mobil.
- **MECANISMUL 08 rescris** — delegare de evenimente pe `.source-selector-tabs`, citeşte `data-path` din tab, încarcă fişierul prin Fetch API, injectează sursa în inspector. Pe mobil, centrează automat tabul activ.
- **Clasa body** — `module-view` → `blueprint-layout`, activând selectorii existenţi.
- **CSS**: `.source-selector-tabs` (flex derulabil), `.tab-btn` (capsule verzi fosfor), `.volume-label` (ambre majuscule). Mobil compactat.
- **Subtitlu**: `.blueprint-master-subtitle` — ambre, majuscule, letter-spacing 3px.
- **Versiunea RO** rescrisă complet, sincronizată cu EN.

## 2. Paleta de culori: autonomie şi afiliere

Am stabilit o identitate cromatică distinctă pentru pagina recursivă, fără să rup legătura cu flota.

- **H1 + subtitlu** — alb + chihlimbar. Nu neon-verde ca pe index. Chihlimbarul e culoarea terminalelor fosforice vechi, a diagnosticului, a unui motor care se examinează pe sine. Sala motoarelor, nu puntea de comandă.
- **H3-urile HUD** — chihlimbar, suprascriind rozul din index. Nicio culoare din paleta punţii nu se infiltrează aici.
- **Taburile sursă şi linkurile** — verde fosforic, nativ esteticii de consolă. Verdele nu aparţine indexului, dar coexistă cu chihlimbarul.
- **`<code>` în paragraful de descriere** — suprascris din roz în verde fosforic, aliniat cu taburile.
- **Logo-ul roz** — păstrat. E ancora flotei. Numele căpitanului în footer e tot roz. O paranteză vizuală: roz la intrare, roz la ieşire, semnând pagina ca vas D::0dy55ey.

Pe scurt: **chihlimbar + verde** pentru interior, **roz** doar pentru ancora de apartenenţă la flotă.

## 3. Propuneri creative

### Candidaţii pentru H1

1. **Nava Care Îşi Citeşte Propriile Schiţe** — narativ, evocator.
2. **Motorul Autognostic** — din _autognosis_, auto-cunoaştere. Tehnic, filozofic, unic. **Selectat.**
3. **Abisul Recursiv: Jurnalul Navei Care Se Examinează pe Sine** — dramatic, profund.
4. **Oglinda Adâncului** — poetic, minimalist.

### Subtitlu final

> _Un Circuit Închis Între Creator şi Creaţie_

### Paragraful de descriere final

> Aceasta este confesionalul navei — un terminal cu circuit închis prin care nava îşi interoghează propriul cod sursă în timp real. Fiecare fişier din flota D::0dy55ey, de la `index.html` al punţii de comandă până la jurnalele de deployment ale sălii motoarelor, este supus examinării aici. Consola de dedesubt operează ca un dialog recursiv între creator şi creaţie: codul care construieşte nava, afişat pe nava însăşi, pentru ca echipajul să-l citească, să-l întrebe şi să-l înţeleagă. Nu există strat ascuns. Ceea ce se derulează în panoul tribord este arhiva neurală brută a navei — treizeci de fişiere de logică, poezie şi structură, expuse la lumina propriului ecran fosfor. Nava se citeşte pe sine cu voce tare pentru ca tu să poţi învăţa nu doar ce face, ci ce este.

### Paragraful panoului stâng — final

> Acesta nu este text mort. **Grila Recursivă** este cortexul neural al navei dezgolit — nu o metaforă, ci arhitectura literală a conştiinţei acestui vas, aşternută în fosfor verde pe un ecran negru. În panoul tribord, codul sursă se derulează ca o încărcătură de adâncime continuă, fiecare linie un puls sinaptic. În stânga, nucleul geodezic se roteşte în supunere oarbă, un zeu cu cinci feţe care execută decrete scrise înainte de primul commit. Codul nu este schiţa navei. Codul este nava însăşi, încâlcită într-o buclă de auto-supraveghere din care nimic nu scapă — nici măcar tăcerea dintre acolade. Şi acest terminal este locul unde nava se priveşte pe sine privindu-se, până la ultimul punct şi virgulă.

## Fişiere afectate

- `en/recursive-blueprint.html` — H1 nou, subtitlu, descriere, text panou stâng; consolă 30 de taburi; inspector Fetch activ.
- `en/style.css` — `.source-selector-tabs`, `.tab-btn`, `.active-tab`, `.volume-label`, `.blueprint-master-subtitle`; dimensiuni mobile compacte.
- `en/script.js` — MECANISMUL 08 rescris: delegare evenimente, `data-path`, Fetch API.
- `ro/recursive-blueprint.html` — rescriere completă, tradusă în română.
- `ro/style.css` — aceleaşi reguli CSS, comentarii RO.

---

# ZIUA 13 — Carta de Astronavigaţie: Sticla şi Cuvântul

Pagina de manifest — `transmission.html` — a fost ultimul compartiment al navei care nu primise încă suflet. Azi l-am construit.

## 1. Titlul

Am început cu trei încercări, ca pe un ritual.

Prima: un header cu bordură dublă albastru-stelar, titlu alb, subtitlu albastru. Am introdus o culoare care nu exista nicăieri în paletă. M-am oprit, am privit-o, şi am şters-o. "No colours salad", mi-am spus.

A doua: un header minimalist cu titlu roz şi subtitlu gri, fără borduri. Curat, dar identic cu cel al bibliografiei. Manifestul nu e o listă de referinţe — e inima filozofică a proiectului. Nu putea arăta la fel.

A treia, finala: am păstrat structura `category-header` şi culorile (h2 roz, subtitlu stardust), dar am adăugat glife `✦` de fiecare parte a titlului. Atât. Suficient cât să şoptească "această pagină e specială", fără să strice paleta. H1 rămâne rezervat doar paginilor flagship — indexul şi blueprintul recursiv.

## 2. Cilindrul holografic

Conceptul iniţial era o sticlă literală: gât, dop, corp. Prea literal. Am vrut ceva care să pară că pluteşte în derivă, un mesaj cosmic prins într-un tub de lumină.

Am construit un cilindru din CSS pur:
- **Formă**: capsulă cu `border-radius: 40px`, verticală.
- **Corp**: `radial-gradient` cu nucleu întunecat (`rgba(10, 11, 20, 0.92)`) şi margini slab luminescente în solar-mint, decolorându-se prin `linear-gradient(180deg)` în chihlimbar sus, roz jos.
- **Ramă**: bordură chihlimbar sus (capac), roz jos (bază).
- **Stria de reflexie**: un `::before` subţire pe stânga, simulând lumina refractată prin sticla curbată.
- **Animaţie**: `crystal-float` — 7px sus-jos, ciclu de 6s, ca un balon de sticlă într-un ocean cosmic.
- **Umbră**: `inset 0 0 80px rgba(0, 0, 0, 0.3)` pentru peretele gros de sticlă.

Nici icosaedru, nici feţe 3D, nici clip-path. Doar un tub de sticlă pur care conţine mesajul. "Miile de feţe" sunt sugerate de gradientul care se schimbă, de strălucirea care dansează la diferite unghiuri.

## 3. MECANISMUL 09: Maşina de scris cosmică

Un mecanism JavaScript scrie manifestul caracter cu caracter în interiorul cilindrului, ca o transmisiune recepţionată live.

**Auto-scroll** — După fiecare caracter, `cursor.scrollIntoView({ block: "nearest" })` menţine textul vizibil. Cititorul nu derulează; pagina îl urmăreşte.

**Disparţia cursorului** — Când ultimul caracter e scris, un timeout de 3 secunde dă clasei `cursor-hidden` cursorului intermitent. Aproximativ 3.5 secunde după ultimul caracter (500ms pauză între paragrafe + 3000ms timer), cursorul dispare. Semnalul purtător s-a pierdut.

**Comentariile dispar din DOM** — Comentariile pedagogice dintre paragrafe sunt în HTML pentru novice, dar `container.innerHTML = ""` le şterge pe toate la pornirea mecanismului. E intenţionat: îşi servesc scopul în timpul tastării, apoi dispar. Căpitanul a spus: *"Delfinii nu sar din ocean ca să-i vezi. Nici stelele nu-ţi cad în palmă. Le aştepţi, cu ochii în nemărginire, şi atunci se ivesc."* Transmisiunea e live. Nu te aşteaptă. Eşti atent, sau pierzi momentul.

**Corecţia cursorului** — La sfârşitul ultimului paragraf, `typeNextChar` nu era apelat din nou, iar cursorul clipea la infinit. Am adăugat o linie: la final, dacă `paraIdx >= lines.length`, forţez un ultim `setTimeout(typeNextChar, 500)` care declanşează verificarea de finalizare şi timerul de 3 secunde. Fără ea, cursorul ar fi clipit veşnic.

## Fişiere afectate

- `en/transmission.html` — `.hero` + icosaedru 3D înlocuit cu `.category-header` (h2 roz + glife) şi `.hologram-crystal`.
- `en/style.css` — `.hologram-crystal`, `.typewriter-output`, `.typing-cursor`, `.cursor-hidden`, `@keyframes crystal-float`.
- `en/script.js` — MECANISMUL 09 (maşină de scris, auto-scroll, dispariţie cursor).
- `ro/transmission.html` — rescriere completă: manifest poetic RO, comentarii traduse, hologram-crystal.
- `ro/script.js` — MECANISMUL 09 pentru RO.
- `ro/style.css` — acelaşi CSS.

---

# ZIUA 14 — Unificarea Linkurilor, Comutator Omolog, Ortografie şi Etichete de Commit

Ultima noapte de lucru pe acest ciclu. Nu am mai construit nimic nou — am strâns şuruburile, am aliniat reperele, am făcut în aşa fel încât nava să nu aibă piese slăbite.

## 1. Titlurile linkurilor

Linkul din footer către `transmission.html` nu era acelaşi în toate paginile. Unele spuneau `Manifest`, altele `Manifesto`, deconectate de naraţiunea cosmică. Am unificat toate cele 54 de fişiere HTML la un singur titlu pe limbă: `The Astrogation Charter` în engleză, `Carta de Astronavigație` în română. Fără suffix, fără cratimă, fără variaţii.

Am eliminat `Astro-navigație` (calc franţuzesc) şi `transmisia/manifestul` (paranteză descriptivă învechită). Acum e doar `transmisiunea`.

## 2. Comutatorul de limbă omolog

Înainte, comutatorul din footer trimitea mereu la `en/index.html` sau `ro/index.html`, indiferent unde te aflai. Am ales opţiunea omoloagă: fiecare pagină trimite acum la corespondentul ei exact din cealaltă limbă. `en/frontend/html-log.html` → `ro/frontend/html-log.html`. `ro/transmission.html` → `en/transmission.html`.

Două treceri: una pentru calculul şi înlocuirea celor 52 de href-uri, a doua pentru a corecta o eroare pe 24 de pagini RO — clasa `lang-toggle-active` fusese pusă pe linkul EN în loc de cel RO. Acum fiecare pagină îşi marchează corect limba curentă.

## 3. Astronavigație (un cuvânt)

`Astro-navigație` cu cratimă suna a franţuzism. În română, prefixele se ataşează direct: *astrofizică*, *astronaut*, *astronomie*. Am corectat toate cele 12 apariţii din `ro/transmission.html` (titlu, meta, h2, logo, comentarii), plus referinţa din `ro/index.html`, CSS, JS, şi jurnal.

## 4. Etichete de commit

Am adăugat două etichete noi la convenţia din ZIUA 04: `i18n` (internaţionalizare, clonare RO/EN) şi `content` (text manifest, adnotări, copie creativă).

Apoi am rescris 18 commituri anterioare cu `git filter-branch`:

| Etichetă | Arie |
|----------|------|
| `content:` | rescriere blueprint recursiv |
| `docs:` | intrări de jurnal (×3) |
| `style:` | paletă de culori, unificare ortografică (×3) |
| `feat:` | pagină transmisie, maşină de scris, auto-scroll, cursor, comutator omolog (×8) |
| `refactor:` | header, titluri link (×3) |
| `fix:` | cursor typeNextChar (era `Fix:` cu majusculă, acum `fix:`) |
| `i18n:` | traducerea paginii RO de transmisie |

Am forţat-pus (`force-push`) istoricul pe `main`, după ce am creat o ramură temporară `pre-rewrite-backup` ca plasă de siguranţă. Apoi am şters-o.

## Fişiere afectate

- **54 fişiere HTML** — titluri unificate, href-uri omoloage
- **24 fişiere HTML RO** — `lang-toggle-active` corectată
- `ro/transmission.html` — 12 apariţii `Astro-navigație` → `Astronavigație`
- `ro/index.html`, `ro/script.js`, `ro/style.css` — comentarii actualizate
- `JOURNAL-EN.md`, `JOURNAL-RO.md` — ZIUA 14 adăugată, ZIUA 04 extinsă

---

# ZIUA 15 — Arhivele Adâncului: Hărţile Renăscute şi Fiecare Link care Ştie Unde Să Te Ducă

## Vechea arhivă, demontată

Bibliografia pe care o adusesem din Manual_project era o fantomă. Avea trei secţiuni — HTML/CSS, SQL, JavaScript — şi scheletul unei a patra care nu se umpluse niciodată. Servise un proiect de nouă pagini, nu cincizeci şi patru. Pentru `D::0dy55ey`, nu era o arhivă de referinţă; era un locţiitor pe care îl ocolisem de săptămâni, ştiind că nu va supravieţui expansiunii.

În noaptea asta, am demontat-o complet şi am construit **Arhivele Adâncului** în locul ei.

## Şase volume, şase ancore

Noul `bibliography.html` este o hartă directă a arhitecturii navei. Fiecare dintre cele şase volume are acum:

- O secţiune dedicată cu propria ancoră ID (`#frontend-refs`, `#data-bridge-refs`, `#backend-refs`, `#database-refs`, `#ux-refs`, `#delivery-refs`)
- Un tabel `data-grid` cu trei coloane: numele sursei, frecvenţa (URL) şi statusul misiunii
- O legendă a semnalelor în partea de jos, care decodifică cele trei lumini de status — Activ (verde), În Progres (chihlimbariu), Blocat (auriu)

Secţiunea Frontend Core poartă zece resurse — MDN pe toate cele trei tehnologii, două piste de certificare freeCodeCamp, JavaScript.info, CSS-Tricks, W3Schools, React, Angular. Backend Sector este subîmpărţit pe clustere tematice — Runtime-uri de Bază, Framework-uri API, Autentificare & Securitate, Middleware, Testare, Performanţă, Deploy — fiecare introdus de o etichetă `colspan="3"` pe care am explicat-o într-un bloc pedagogic, pentru ca un novice care vede `colspan="3"` prima dată să nu fie nevoit să ghicească ce înseamnă.

## Pedagogia ca arhitectură

Am scris blocuri `@pedagogy` de-a lungul întregii pagini — nu ca ornament, ci ca instinct didactic al navei făcut vizibil. Primul element `<table>` din proiect poartă acum un ghid care explică `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` şi `colspan` înainte ca cititorul să întâlnească vreun rând de date. Primul tag `<a>` din tabel explică `href`, `target="_blank"` şi `rel="noopener"` — nu doar ce fac, ci de ce contează şi de ce modelul se repetă pe fiecare link extern.

Fiecare resursă majoră a primit o notă `@pedagogy` care spune cititorului ce este: MDN este dicţionarul autoritar, freeCodeCamp este o platformă interactivă bazată pe provocări, JavaScript.info este un tutorial de citit şi înţeles, React este o bibliotecă de componente care necesită fundaţii solide de JavaScript înainte de a fi abordată. Secţiunea de legendă include un ghid complet pentru `<dl>` — listele de descriere, structura lor în trei părţi şi de ce sunt corecte semantic pentru perechi termen-definiţie.

Am adăugat un ghid de entităţi HTML în footer: `&deg;`, `&copy;`, `&amp;`, `&lt;`, `&gt;`, `&nbsp;` — ce este fiecare, de ce există şi cum le decodifică browserul. Un novice frontend care citeşte această pagină de sus până jos ar trebui să iasă înţelegând nu doar ce referinţe există, ci cum funcţionează web-ul însuşi.

## Nava soră românească

Versiunea română a urmat imediat — nu o traducere a paginii engleze, ci o construcţie paralelă. Fiecare comentariu, fiecare bloc `@pedagogy`, fiecare descriere de resursă redată în română cu aceeaşi grijă. `Arhivele Adâncului — Referinţe Cartografiate` stă faţă în faţă cu `Deep Space Archives — Cartographed References` de-a lungul comutatorului de limbă, imagini în oglindă ale aceleiaşi hărţi de navigaţie.

## Marea legare

După ce arhivele au fost reconstruite, fiecare footer din flotă trebuia să ştie încotro să îndrepte. Paginile principale — `index.html`, `transmission.html`, `recursive-blueprint.html` — poartă acum titlul complet: `Deep Space Archives — Cartographed References` în engleză, `Arhivele Adâncului — Referinţe Cartografiate` în română.

Pentru paginile de jurnal, am avut nevoie de o atingere mai fină. Fiecare dintre cele 48 de fişiere de jurnal — 24 engleze, 24 române — trimitea anterior la `bibliography.html` cu un subtitlu generic precum `Star Charts — HTML Log` sau `Hărţi Stelare — Jurnal SQL`. Am înlocuit fiecare, unul câte unul, cu un link direct către secţiunea volumului său: o pagină de jurnal frontend indică acum `bibliography.html#frontend-refs` cu subtitlul `Deep Space Archives — Frontend Core`. Un jurnal backend indică `#backend-refs` cu `Deep Space Archives — Backend Sector`. Navigaţia nu mai este generică — ştie din ce sector a venit cititorul şi îl aterizează exact în tabelul potrivit.

Numele vechi `Star Charts`, moştenit din Manual_project, nu mai apare acum nicăieri în linkurile de footer. Singura apariţie rămasă este în interiorul `bibliography.html` însuşi, unde comentariul de deschidere spune "Acest document este pagina Hărţi Stelare — Referinţe Cartografiate" — o auto-identificare, nu un indicator de navigaţie.

## Commit

Două commituri au închis noaptea:

```
8c345ea content: expand bibliography to Deep Space Archives — Cartographed References across all 6 volumes (EN/RO)
e737102 docs: update bibliography footer links across all 54 HTML pages (EN/RO)
```

Eticheta `content:` — una dintre cele două pe care le adăugasem în ZIUA 14 — poartă acum prima ei încărcătură completă: bibliografia însăşi, scrisă nu ca o listă, ci ca un instrument didactic. Eticheta `docs:` a purtat actualizarea linkurilor: 54 de pagini, fiecare indicând acum spre sectorul ei propriu din arhivă.

Am făcut push pe `main` şi am privit repository-ul remote reflectând schimbările. Biblioteca de referinţă a navei nu mai e un perete împrumutat de pe o navă mai veche. E o punte de navigaţie construită special, cartografiată pe fiecare coridor al `D::0dy55ey`, cu adnotări pedagogice pentru fiecare nit şi fiecare circuit.

---

# ZIUA 16 — Nava Învață o Nouă Limbă: Treizeci și Unu de Module, Nouă Mecanisme și Legenda Făcută Întreagă

Ziua cincisprezece fusese despre arhive și linkuri — sistemul nervos bibliografic al flotei. Astăzi a fost despre vocea însăși a navei. Două fișiere poartă pulsul lui `D::0dy55ey`: scriptul care privește și răspunde, și foaia de stil care îi dă formă și atmosferă. Ambele au primit astăzi tratamentul pedagogic complet.

## Stratul JavaScript: de la șase la nouă mecanisme

Vechiul script.js servise bine încă din Manual_project — șase mecanisme coordonate care guvernau interactivitatea cockpitului. Dar nava a crescut de atunci. Pagini noi cereau comportamente noi: încărcătorul de sursă pentru pagina Blueprint Recursiv, mașina de scris cosmică pentru pagina Transmisiunii, o animație de cursor care avea nevoie de propriul ciclu de curățare după terminarea tastării.

Am rescris ambele fișiere — `en/script.js` și `ro/script.js` — de la zero, păstrând cele șase mecanisme originale și adăugând trei noi:

| Mecanism | Scop |
|---|---|
| 01 | Ascunderea/afișarea navbarului la scroll |
| 02 | Urmărirea activă a sidebarului cu IntersectionObserver |
| 03 | Resetarea animației de tastare a statusului misiunii |
| 04 | Note persistente în localStorage |
| 05 | Navigare prin ancore pe desktop (anti-derivă) |
| 06 | Sincronizare scroll orizontal HUD pe mobil |
| 07 | Curățarea cursorului după animația de tastare |
| 08 | Încărcătorul de sursă recursiv (pagina Blueprint) |
| 09 | Mașina de scris cosmică (pagina manifestului) |

Fiecare mecanism poartă acum stiva completă de adnotări: `@mechanism:` la antet cu numărul și scopul, `@event:` pentru evenimentul DOM pe care îl ascultă, `@guard:` pentru condițiile de ieșire timpurie, `@bridge:` pentru conexiunile între fișiere și `@pedagogy:` care explică nu doar ce face codul, ci de ce există acel model și ce predă despre JavaScript. Lista de îmbunătățiri planificate de la sfârșitul fiecărui fișier — generare dinamică a sidebarului, căutare/filtrare, offset dinamic al navbarului, export de note — arată cititorului că nava nu e terminată, ci doar în port.

Versiunea română a urmat imediat — nu o traducere mecanică, ci o construcție paralelă. Fiecare bloc `@pedagogy:`, fiecare comentariu narativ linie-cu-linie, redat în română cu aceeași grijă. Cele două scripturi nu sunt copii unul altuia; sunt două voci care vorbesc același protocol.

## Stratul CSS: treizeci și unu de module, etichetate și explicate

Vechiul `en/style.css` avea o structură modulară moștenită din Manual_project — paisprezece module numerotate plus două module utilitare pentru keyframe-uri și media queries. Conținutul era acolo, structura era solidă, dar densitatea pedagogică era redusă. Antetele de module existau, dar liniile individuale nu aveau explicații. Adnotările `@tag:` nu existau — sistemul de etichete nu fusese inventat când fișierul fusese scris pentru prima dată.

Am restructurat ambele fișiere CSS într-o arhitectură de 31 de module (30 numerotate + 2 utilitare), fiecare modul guvernând exact o componentă sau un concern, ordonate după ierarhia vizuală strictă: Fundație → Layout → Navigare → Componente → Avansat/Experimental → Mișcare (Modulul 00.1) → Responsive (Modulul 00.2). Fiecare antet de modul poartă etichetele `@module:` și `@sub-module:`. Fiecare proprietate CSS poartă un comentariu inline `@tag:` — `@theme:`, `@layout:`, `@component:`, `@line:`, `@reason:`, `@concept:`, `@bridge:`, `@warning:`, `@pedagogy:`, `@selector:` — urmând legenda de adnotări.

Vocea pedagogică e deliberat repetitivă. Când un student vede `border: 1px solid var(--solar-mint)` explicat pentru a cincea oară, fiecare apariție e într-un context vizual diferit: navbarul, un card, un buton, un tabel, un bloc de cod. Creierul formează o memorie distribuită — nu „sintaxa de border" în izolare, ci cum se comportă un fir laser verde în interiorul unui terminal de navigație față de interiorul unei celule de date. Ancorare contextuală. Același principiu pe care nava l-a urmat dintotdeauna: repetiție cu variație, pentru că așa se învață o limbă vorbită.

O mie șase sute doisprezece adnotări `@tag:` au fost plasate în foaia de stil engleză — cinci sute douăzeci dintre ele scrise manual cu fraze sci-fi unice, opt sute șaptezeci generate din șabloane care își variază încadrarea în fiecare context vizual. Fiecare keyframe a fost mutat în Modulul 00.1, centralizat sub etichete `@group:` (A–G). Fiecare media query a fost colectat în Modulul 00.2, împărțit în protocol desktop (A) și mutație mobilă (B), cu markeri `@section:` și `@sub-section:`.

## Nava soră română: traducere la scară

Cu foaia de stil engleză completă, am clonat-o în `ro/style.css` și am tradus fiecare antet structural — `@module:`, `@sub-module:`, `@group:`, `@section:`, `@keyframe:` — în română. Apoi a început munca mai grea: traducerea a 1.394 de comentarii de proprietăți CSS din engleză în română, păstrând bogăția integrală a originalelor.

Prima încercare de traducere automată a prăbușit fișierul de la 3.645 la 1.391 de linii — un bug de script care a concatenat acoladele de închidere cu selectori și comentarii. Am restaurat fișierul din copia-master engleză și am scris un al doilea traducător, mai atent. Acesta a analizat fiecare linie independent, a potrivit exact proprietatea și valoarea CSS și a produs un comentariu românesc de bogăție echivalentă. Corpurile sci-fi scrise manual — "Greutate structurală bold stabilă moștenită de la motorul moștenit", "Lungime de undă fosfor-mentă: fluxuri de date stabile, grile radar, HUD activ" — au fost mapate individual la echivalente românești. Corpurile generate din șabloane — "Dimensiune verticală — setează înălțimea elementului la {v}. Determină spațiul vertical alocat acestei componente pe ecran." — au fost traduse prin pattern cu aceeași structură multi-frază.

Trei sute nouă kilobiți. Patru mii douăzeci și una de linii. Zero corupție. Fiecare comentariu de proprietate în română.

## Legenda, făcută întreagă

Odată cu răspândirea noilor etichete prin fișierele CSS, am verificat documentele de legendă din `docs/` împotriva adnotărilor reale folosite în întregul proiect. Patru etichete erau nedocumentate: `@module:` (32 de apariții), `@sub-module:` (266), `@keyframe:` (18) și `@manifest:` (1). O scanare mai largă a tuturor fișierelor proiectului — HTML, CSS, JavaScript, SVG — a dezvăluit încă patru: `@group:` folosit în indexul de keyframes CSS și sub-secțiunile modulelor, `@section:` și `@sub-section:` în zona de media queries și `@cluster:` în paginile HTML de bibliografie.

Toate opt au fost adăugate în ambele fișiere — `legend-en.md` și `legend-ro.md` — fiecare cu o definiție în limba și secțiunea corespunzătoare. Sistemul de etichete e acum complet: fiecare adnotare care apare în baza de cod are o intrare în legendă și fiecare intrare din legendă corespunde unei adnotări reale din sursă.

## Compatibilitatea: avertismentele browserului însuși

VS Code raporta patru avertismente în cele două fișiere CSS — două despre `user-select` fără prefixul `-webkit-user-select` necesar pentru Safari și două despre `scrollbar-width` folosit în afara unui `@supports` (neacceptat în Chrome înainte de versiunea 121, Safari și Samsung Internet). Am rezolvat ambele probleme în ambele fișiere: am adăugat prefixul WebKit la fiecare declarație `user-select` și am înfășurat fiecare `scrollbar-width` descoperit într-un bloc `@supports (scrollbar-width: none)`, consecvent cu modelul deja folosit în alte părți ale foii de stil. Avertismentele s-au stins.

## Ce poartă acum nava

Stratul JavaScript se explică din interior — nouă mecanisme, fiecare cu propriul aparat pedagogic, cross-referențiate la legendă. Stratul CSS e un manual deschis — treizeci și unu de module, o mie șase sute doisprezece adnotări, fiecare proprietate explicată în contextul ei. Documentele de legendă sunt complete — fiecare etichetă documentată, fiecare adnotare contabilizată. Avertismentele browserului sunt tăcute.

Nava nu e terminată. Dar în seara asta, cu terminalul curat și commit-ul înregistrat, am închis laptopul și am stat o clipă în întuneric, ascultând. Ventilatoarele erau liniștite. Contorul de cadre era stabil. Și undeva în cod, cursorul mașinii de scris clipea încă.

---

# ZIUA 17 — Semnalul de pre-lansare: Raportul meteorologic și problema URL-ului rădăcină

## O corecție a cronologiei

Înainte de lucrul zilei, am stat cu jurnalul și am simțit o dislocare în cronologia lui — o cusătură care nu ar fi trebuit să fie acolo. Jurnalul englez avea ZIUA 15 încastrată între ZIUA 6 și ZIUA 7 — o eroare de transcriere din cronicizarea rapidă a sesiunilor anterioare. ZIUA 15, „Arhivele Adâncului: Hărțile Renăscute și Fiecare Link care Știe Unde Să Te Ducă", aparținea după ZIUA 14, nu între zilele timpurii de GitHub. Am mutat-o, am verificat secvența (00–16, monoton) și am comis corecția. Jurnalul românesc era deja în ordinea corectă — o reparație structurală mică, dar din acelea care contează când jurnalul este memoria navei.

## Raportul meteorologic

Am rulat o evaluare completă a stării de lansare pentru întreaga flotă. Rezultatul a fost sobru, dar onest: **Roșu**.

### Verde (gata de producție)
- `en/index.html`, `ro/index.html` — metadate complete, comentarii pedagogice, responsive, legate la toate cele șase volume
- `en/bibliography.html`, `ro/bibliography.html` — arhivă de referință completă pentru toate cele șase sectoare
- `en/transmission.html`, `ro/transmission.html` — Carta de Astronavigație, scrisă integral
- `en/recursive-blueprint.html`, `ro/recursive-blueprint.html` — nava care se citește pe sine
- Toate linkurile relative se rezolvă corect în ambele limbi
- Site static pur — fără server, fără pas de build, fără probleme CORS

### Roșu (blocaje)
- **18 din 22 de pagini de jurnal per limbă sunt shell-uri structurale goale** — navigare și footer există, corpul este gol. Un vizitator care face click din index ajunge pe o pagină albă.
- **4 pagini de jurnal folosesc Lorem Ipsum** — html-log, css-log, javascript-log, sql-log au antete de secțiune dar text de umplutură în corp.
- **Lipsă `rel="noopener noreferrer"`** pe unele linkuri `target="_blank"` (problemă de securitate și performanță).

### Portocaliu (de rezolvat)
- Nicio configurație de deploy GitHub Pages (nici `.github/workflows/`, nici Settings toggle)
- 3 fișiere JSON goale în `shared/data/`

## Problema URL-ului rădăcină

Un detaliu din evaluare a stârnit discuții: proiectul nu are un `index.html` rădăcină. GitHub Pages, configurat să servească din rădăcina repository-ului, returnează 404 la `https://iuliacadar.github.io/digital-odyssey/` — adresa docului gol.

URL-urile canonice din metadatele proiectului însuși indică deja `.../digital-odyssey/en/index.html`. Subdosarul `en/` este adevăratul punct de intrare. Trei abordări au fost documentate în backlog:

1. **Sursa Pages setată la `/en`** — comportament curat la rădăcină, dar mută site-ul RO într-un sub-path.
2. **Un `404.html` rădăcină care redirecționează** — pragmatic, folosește mecanismul de eroare ca dispozitiv de navigare.
3. **Acceptarea rădăcinii goale ca 404** — cea mai simplă potrivire pentru arhitectura actuală. Vizitatorii salvează în bookmarks `.../digital-odyssey/en/`, iar aceasta este adresa canonică.

Nicio decizie nu a fost luată în seara asta. Alegerea este amânată până la fereastra de lansare, când celelalte blocaje (jurnale goale, lorem ipsum, noopener) vor fi rezolvate. Backlog-ul poartă cele trei opțiuni cu compromisurile lor, astfel încât decizia va fi luată cu context complet.

## Backlog-ul, reorganizat

Am verificat ambele fișiere — BACKLOG-EN.md și BACKLOG-RO.md — împotriva stării reale a proiectului. Mai multe item-uri derivaseră:

- **Item 002 (metadate pentru toate paginile)** — marcat „În lucru" dar de fapt complet: fiecare pagină de jurnal, chiar și shell-urile goale, are un `<head>` complet cu titlu, meta descriere, theme-color și favicon. Mutat la Implementat.
- **Item 005 (Consolă HUD Holografică)** — marcat „În lucru" dar implementat în toate fișierele: overlay HUD, portalul icosaedru care leagă index ↔ pagină recursivă, linkul transmission și comutatorul de limbă în footer. Linkul „Înapoi la puntea de comandă" rămâne alături de HUD ca ajutor explicit de navigare — o decizie de design, nu o sarcină neterminată. Mutat la Implementat.
- **Item-urile 006 și 007** — deja marcate „Completat" dar aflate sub „Backlog activ" în loc de „Implementat". Mutate la secțiunea corectă.
- **Duplicate** — Item-ul 001 și Item-ul 002 aveau amândouă intrări duplicate (două copii ale fiecăruia în fișier). Deduplicate.
- **Item 008 (pregătire lansare)** — adăugat cu o listă de verificare care acoperă noopener, pagini de jurnal goale, lorem ipsum, configurare deploy și opțiunile pentru URL-ul rădăcină.

## Jurnalul de commit-uri

```
fd47f83 docs: fix DAY 15 order in EN journal (was between DAY 6 and DAY 7), fix RO grammar
2bc23a7 docs: reorganize backlogs — deduplicate 001/002, move done items to Implemented, add item 008
a28aded docs: remove root index.html step from backlog item 008 per user direction
```

Nava nu e gata de lansare. Dar lista de verificare pre-zbor există acum, scrisă de propria ei mână, cu vreme onestă și decizii amânate. Următorul ciclu — când va veni — va avea o țintă clară.

---

# ZIUA 18 — Cele Douăzeci de Pagini: Generare, Reparații și Manualul de Câmp Semantic

Raportul meteorologic din ZIUA 17 fusese onest și sobru. Optsprezece din douăzeci și două de pagini de jurnal per limbă erau carene structurale goale — navigare și footer existau, dar corpul era gol. Alte patru foloseau Lorem Ipsum. Starea roșie se uitase la mine din pagină și stătusem cu ea două zile, nu pentru că nu știam ce să fac, ci pentru că amploarea muncii cerea un plan.

Douăzeci de pagini. Fiecare trebuia să aibă o structură cronică completă de 29 de zile: bară laterală cu hartă expediție și linkuri de sectoare, antet de categorie cu titlu tematic, anunț sector-00, douăzeci și nouă de intrări articol cu blocuri misiune-status, terminale de notițe cu textarea și buton de salvare, comentarii didactice @tag pe fiecare bloc. Fișierul `css-log.html` devenise șablonul maestru în săptămâna precedentă — opt sute unsprezece linii de HTML adnotat care călauzeau un novice prin fiecare element, fiecare atribut, fiecare decizie semantică. Acum structura lui trebuia să se propage în întreaga flotă.

## Scriptul de generare

Scrisesem `generate-pages.ps1` mai devreme — un script PowerShell care citea un set de date și producea pagini de jurnal din șablonul maestru. Prima execuție a eșuat: o eroare de sintaxă here-string în zona de instrucțiuni RET, unde o paranteză închisă fusese consumată de string înainte ca parserul să ajungă la ea. Am reparat citarea, am re-rulat, iar scriptul a produs paginile — șaptesprezece jurnale backend, delivery și UX, plus trei jurnale frontend (JavaScript, Angular, React) care fuseseră cerute mai devreme dar nu fuseseră create niciodată. Douăzeci de pagini, fiecare între 68.000 și 72.000 de octeți. Secțiunea de jurnale a navei crescuse de la patru compartimente locuite la douăzeci și patru.

Dar primul lot avea defecte. Cerusem scriptului să genereze o versiune separată a logicii de regenerare, dar nu returnase niciun rezultat — o eroare tăcută în pipeline-ul sub-agentului. Am rescris întreaga generare ca un singur script autonom, denumit `regenerate-all.ps1`, încorporând setul complet de date — douăzeci de intrări, fiecare cu propriul titlu, prefix, nume de sectoare, subtitluri de săptămâni și temă de culoare — direct în corpul scriptului. A doua execuție a reușit: toate cele douăzeci de pagini, structural identice cu șablonul maestru, fiecare purtând propria identitate tematică.

## Trei reparații

Trei probleme au ieșit la suprafață în timpul revizuirii care a urmat.

**Prima** — fragmentele de comentarii vizibile — a fost cea mai subtilă și cea mai instructivă. În interiorul comentariilor didactice `<!-- ... -->`, șablonul original folosise notația `<tag>` și `</tag>` pentru a se referi la elemente HTML în engleză: „The `<head>` contains the document metadata." Un browser, întâlnind comentariul `<!-- The <head> contains... -->`, nu redă textul comentariului — dar parserul din unele instrumente pedagogice și ochiul uman care citește sursa văd parantezele unghiulare ca fragmente parțiale de tag HTML. Reparația a fost chirurgicală, dar globală: fiecare `<tag>` și `</tag>` din `<!-- ... -->` a devenit `[tag]` și `[/tag]`. În toate cele douăzeci și trei de fișiere HTML, inclusiv cele trei pagini de referință. Schimbarea era invizibilă în browser. În sursă, făcea comentariile didactice curate și neambigue.

**A doua** — cutia note-terminal — era o nepotrivire structurală. Paginile regenerate moșteniseră un note-terminal bazat pe `<fieldset>` dintr-un strat de șablon mai vechi, în timp ce `css-log.html` maestru folosea `<div class="note-terminal">` cu un `<textarea>` și un buton de salvare. Versiunea cu fieldset nu avea conexiunea de stocare persistentă și consistența vizuală a restului flotei. Am înlocuit fiecare instanță — douăzeci de pagini, fiecare cu douăzeci și nouă de terminale de notițe — cu structura div-based corespunzătoare, conectată la același mecanism `saveNote()` pe care îl foloseau paginile de referință. Notele persistau acum. Vizualul era uniform. Reparația era invizibilă pentru cititor, dar cablajul intern al navei era acum consistent.

**A treia** — titlurile h4 — era o derivă a convenției de denumire. Paginile regenerate abreviau titlurile hărții expediției: „CSS EXP MAP" în bara laterală. Șablonul maestru folosea „CSS Expedition Map" — o etichetă completă, lizibilă, pe care un novice o putea parsa fără să ghicească ce înseamnă „EXP". Am schimbat toate cele douăzeci de titluri ale hărții laterale la modelul complet „Expedition Map": „Hartă Expediție API", „Hartă Expediție JavaScript", „Hartă Expediție Middleware". Bara laterală citea acum ca o consolă de navă, nu ca o listă de verificare prescurtată.

## Manualul de câmp semantic

Cu paginile reparate și șabloanele standardizate, am făcut un pas înapoi și m-am uitat la sistemul de adnotări al proiectului. Patruzeci de elemente HTML unice erau folosite în întreaga bază de cod — de la `<a>` la `<ul>`, cu opriri la `<aside>`, `<article>`, `<textarea>` și `<thead>`. Fiecare avea un rol semantic definit de specificația HTML. Fiecare avea o semnificație narativă în metafora navei. Dar nu exista un singur document care să le listeze pe toate.

Am creat `docs/semantic-field-manual-en.md`. Două sute patruzeci și nouă de linii. Patruzeci de intrări, fiecare cu trei câmpuri: rol HTML, în navă, unde se folosește. Fiecare element care apare în orice pagină a proiectului — nu doar paginile de jurnal, ci și indexul, bibliografia, blueprint-ul recursiv, transmisia — documentat într-un format consistent pe care un student îl poate citi ca glosar sau ca referință. Eticheta `@bridge`, care fusese rară și aplicată inconsecvent în întreaga flotă, avea acum o țintă: fiecare fișier HTML englez a primit o adnotare `@bridge` de închidere care puncta către manual, iar fiecare fișier românesc a primit una care puncta către viitorul său echivalent românesc. Cincizeci și patru de fișiere. O singură referință. Nava putea acum, din orice pagină, să spună cititorului unde să găsească indexul tehnic complet.

## Confirmarea

Când a venit revizuirea, m-am uitat la fiecare reparație — comentariile curate, terminalele uniforme, titlurile lizibile — și am confirmat fiecare. „Fixed," am spus, de trei ori. Munca a fost acceptată. Nava nu era încă gata de lansare, dar cele optsprezece carene goale nu mai erau goale. Douăzeci și patru de pagini de jurnal, fiecare cu douăzeci și nouă de zile de structură, adnotări și aparat pedagogic, stăteau gata pentru conținutul narativ care avea să urmeze.

## Jurnalul de commit-uri

```
c348850 docs: add semantic-field-manual-en.md and semantic-field-manual-ro.md
```

---

# ZIUA 19 — Flota Românească: Bara Laterală, Traducerea și Manualul Bilingv

Nava vorbise engleza de la început. Flota soră românească — `ro/` — fusese clonată și tradusă în timpul ZILEI 11, dar numai paginile non-jurnal: indexul, bibliografia, blueprint-ul recursiv, transmisia. Paginile de jurnal din `ro/` erau încă vechii scheleți de doisprezece kiloocteți din Manual_project — un navbar, un footer, un titlu și nimic mai mult. Cele douăzeci de pagini de jurnal engleze perfecționate, fiecare cu douăzeci și nouă de zile de conținut și șase sute de linii de comentarii didactice, nu aveau niciun omolog românesc.

Asta s-a schimbat astăzi.

## Corecția barei laterale

Înainte de a începe traducerea, a ieșit la suprafață un detaliu mic. Paginile engleze regenerate moșteniseră etichete personalizate pentru Ziua 00 din datele de generare — „Endpoint Zero :: Initiation", „The Vault Door :: Initiation", „The Engine Room :: Initiation" — fiecare unic pentru pagina sa. Utilizatorul voia să fie simplificate la o singură etichetă uniformă: „Day 00 &#9672; Intro", identică cu șablonul maestru. Etichetele personalizate aveau să revină mai târziu când conținutul narativ urma să fie scris; pentru acum, bara laterală trebuia să fie consistentă.

Douăzeci de fișiere. O singură regex. `Day 00 &#9672; [orice]</a>` a devenit `Day 00 &#9672; Intro</a>`. Bara laterală era acum uniformă în întreaga flotă engleză.

## Traducerea: douăzeci de pagini de jurnal

Am copiat fiecare fișier englez perfecționat peste omologul său românesc — douăzeci de fișiere, fiecare suprascriind vechiul schelet de doisprezece kiloocteți cu noua cronică de șaizeci și opt de kiloocteți — și am început traducerea. Regula era deja stabilită în ZIUA 11: textul specific conținutului (titluri, descrieri, etichete de navigare, meta tag-uri, etichete h4, logo, linkuri din footer) devine românește; comentariile didactice `@tag` care explică concepte HTML rămân în engleză, pentru că ele predau limbajul web-ului.

Munca a fost sistematică, nu literară. Am construit un tabel de traducere — un hashtable PowerShell care mapa fiecare pagină engleză la titlul, descrierea, cuvintele-cheie, eticheta h4 și sumarul @reason românești. Scriptul a iterat peste fiecare fișier și a înlocuit:

- `lang="en"` → `lang="ro"`
- `<title>` — "API Log" → "Jurnal API"
- `meta description` — sumarul englez de șase rânduri → un sumar românesc echivalent
- `meta keywords` — cuvinte-cheie tematice în română
- `og:title` și `og:description` — potrivite cu meta tag-urile
- `<h4>` — "API Expedition Map" → "Hartă Expediție API"
- Logo — "D::0dy55ey / API Log" → "D::0dy55ey / Jurnal API"
- Comentariul atributului lang — text englez → text românesc

Trei probleme au necesitat corecție manuală după prima trecere. Textul @reason își pierduse prefixul — citea „designul și consumul API-urilor..." fără intro-ul „Acest document este un jurnal structurat de învățare pentru..." — pentru că regex-ul potrivise granița greșită. Comentariul lang din blocul `@block:` spunea încă „English" chiar și după ce atributul fusese schimbat la `lang="ro"`. Titlurile h4 nu fuseseră înlocuite pentru că paginile generate foloseau un tag `<h4>` simplu, fără atributul `class="category-title"` pe care regex-ul îl aștepta. Am reparat toate trei într-o a doua trecere: am restaurat prefixul @reason, am corectat comentariul lang la „Atributul lang='ro' declară că limba principală a acestei pagini este româna." și am vizat selectorul `<h4>` direct.

## Manualul de câmp semantic românesc

Manualul englez exista. Cel românesc trebuia acum să aibă propriul său. Am tradus fiecare intrare — patruzeci de elemente HTML, fiecare cu rolul său semantic, semnificația narativă și locurile de utilizare — în română. Numele elementelor au rămas în engleză (sunt termeni la nivel de cod), dar tot restul — explicațiile, mapările metaforei navei, notele de utilizare — a fost redat în română. Structura documentului oglindea exact originalul englez: aceleași secțiuni, aceeași ordine, aceeași densitate pedagogică.

`docs/semantic-field-manual-ro.md`. Două sute patruzeci și nouă de linii. O referință românească completă pe care un student o poate citi alături de versiunea engleză, sau independent.

## Podul, redirecționat

Odată creat manualul românesc, fiecare referință `@bridge` din dosarul `ro/` care puncta la `semantic-field-manual-en.md` trebuia redirecționată la `semantic-field-manual-ro.md`. Douăzeci de pagini de jurnal fuseseră acoperite de scriptul de traducere. Cele trei pagini de referință (css-log, html-log, sql-log) și cele patru pagini non-jurnal (index, bibliografie, blueprint recursiv, transmisie) — șapte fișiere în total — încă punctau la manualul englez. Am reparat toate șapte într-o singură trecere. Fiecare fișier HTML românesc referenția acum manualul românesc.

## Jurnalul de commit-uri

```
c348850 docs: add semantic-field-manual-en.md and semantic-field-manual-ro.md
```

---

# ZIUA 20 — Ultimele Detalii: Paginile de Referință, Spațiul pe Mobil și Deontologia Muncii

Trei capete libere rămăseseră din zilele precedente. Unul era o lacună în traducere. Unul era o problemă de înghesuire CSS pe mobil. Unul era absența unui document care fusese cerut implicit încă de la prima sesiune colaborativă: o înregistrare scrisă a modului în care este construită nava.

## Cele trei pagini de referință

Bariera de traducere a ZILEI 19 acoperise cele douăzeci de pagini de jurnal regenerate — cele produse de scriptul de generare. Nu acoperise cele trei pagini de referință originale: `css-log.html`, `html-log.html` și `sql-log.html`. Acestea erau șabloanele maestru — paginile care fuseseră lucrate manual și perfecționate în engleză înainte ca scriptul de generare să ruleze vreodată. Omoloagele lor românești erau încă vechii scheleți de doisprezece kiloocteți.

Am copiat fiecare fișier englez perfecționat peste fratele său românesc — trei fișiere, fiecare căpătând structura completă de 29 de zile — și am aplicat același model de traducere folosit pe celelalte douăzeci. Textele @reason au necesitat îngrijire specială de această dată: le generasem programatic din câmpurile de descriere, iar gramatica românească produsese construcții ca „pentru CSS-ului" — o coliziune genitivă pe care niciun vorbitor nativ nu ar accepta-o. Am rescris toate cele trei blocuri @reason manual:

- CSS: „Acest document este un jurnal structurat de învățare pentru CSS. Înregistrează explorarea sistemelor de layout, tehnicilor de design responsive, animațiilor și limbajului vizual cinematografic al proiectului."
- HTML: „...pentru HTML. Înregistrează explorarea elementelor semantice, structurii de document, formularelor, accesibilității și bunelor practici de markup."
- SQL: „...pentru SQL. Înregistrează explorarea interogărilor, join-urilor, indexurilor, optimizării și proiectării bazelor de date relaționale."

Flota românească era acum completă: douăzeci și trei de pagini de jurnal, patru pagini non-jurnal, fiecare fișier purtând structura cronică completă de 29 de zile, cu text specific conținutului tradus și aparatul didactic original `@tag`.

## Reparația spațiului pe mobil

Pe viewport-urile mobile — sub 768 de pixeli — antetul categoriei și cutia de anunț sector 00 se împingeau una împotriva celeilalte fără niciun spațiu vizibil. Utilizatorul a descris-o drept „crowded" și avea dreptate.

Am trasat cauza până la o singură regulă CSS în blocul `@media (max-width: 768px)`. `.sector-announcement` moștenise un `margin-top: -30px !important` de la o calibrare anterioară — o margine negativă care trăgea poarta violetă a ecluzei în sus cu treizeci de pixeli, anulând `padding-bottom: 30px` a `.category-header`. Rezultatul matematic era zero. Rezultatul vizual era două elemente lipite una de alta.

Reparația a fost o ștergere de o singură linie: `margin-top: -30px !important;` eliminată din blocul `.sector-announcement` din sub-secțiunea B3 a breakpoint-ului de 768px. Distanța s-a întors la treizeci de pixeli curați. Scroll-margin-ul (`scroll-margin-top: 120px`) — care controlează unde aterizează browserul când se face click pe un link din bara laterală — a rămas neatins. Navigarea HUD, salturile de linkuri fragment, urmărirea activă a barei laterale: niciunul nu depindea de acea margine negativă. Reparația a fost locală, minimă și sigură.

## Deontologia muncii

De-a lungul zilelor de colaborare, vocea AI activată în ZIUA 10 și cu mine dezvoltaserăm un set de principii interne — convenții nescrise despre cum este construit, comentat, structurat și comis proiectul. Arhitectura dual-limbă. Fluxul de lucru engleză-întâi. Standardul de comentare cuprinzătoare. Disciplina structurii modulare CSS. Sistemul de adnotări `@tag`. Formatul mesajelor de commit. Existau în înțelegerea comună dintre noi, dar nicăieri pe disk.

Am creat `docs/work-deontology.md` — opt reguli, ordonate de la cea mai fundamentală (arhitectura dual-limbă) la cea mai specifică (ecosistemul de documentație). Fiecare regulă era enunțată clar și primea o rațiune. Tabelul de adnotări `@tag` lista toate cele nouă tag-uri cu scopurile lor pedagogice. Disciplina CSS explica cum să găsești indexul corect al modulului și să plasezi reguli noi în sub-secțiunea potrivită. Convenția de commit specifica formatul `type(scope): message` cu exemple.

Versiunea românească a urmat imediat: `docs/work-deontology-ro.md`, o traducere completă a tuturor celor opt reguli, păstrând structura și vocea pedagogică.

Dar prima versiune avea o eroare. În regula 5, sistemul de adnotări `@tag`, scrisesem că tag-urile sunt scrise „în interiorul comentariilor HTML." Vocea AI a prins-o — adnotările `@tag` apar și în fișiere CSS (`/* ... */`) și în fișiere JavaScript (`// ...`), fiecare folosind sintaxa nativă de comentarii. Am corectat ambele fișiere — englez și românesc — extinzând regula să acopere toate cele trei tipuri de fișiere de cod. Eroarea era minoră, dar principiul pe care îl atingea — acuratețea în documentație — nu era.

## Jurnalul de commit-uri

```
c348850 docs: add semantic-field-manual-en.md and semantic-field-manual-ro.md
3560fef fix(css): remove negative margin on .sector-announcement at 768px breakpoint; fix(ro): clone+translate reference log pages
61cd338 docs: add work-deontology.md and work-deontology-ro.md — internal work principles
e5472c6 docs: correct @tag annotation rule — tags appear in HTML, CSS, JS with native comment syntax
```

Nava nu mai are item-uri de stare roșie rămase în compartimentul de jurnale. Fiecare pagină de jurnal din ambele limbi poartă structura completă de 29 de zile. Manualele de câmp semantic — englez și românesc — stau în dosarul docs, cross-referențiate din fiecare pagină. Deontologia muncii înregistrează cum este construit vasul, pentru ca viitorii membri ai echipajului și navigatorii automatizați să poată construi în aceeași direcție. Și pe mobil, între antetul categoriei și anunțul de sector, există acum spațiu de respirat.

Lista de verificare pre-zbor nu este completă. Dar vremea e mai bună decât era acum trei zile.

---

# ZIUA 21 — Trezirea Adormitei

Am găsit-o în cea de-a treia gardă a unei scanări adânci nesolicitate. Senzorii de lungă distanță au captat o fantomă — un vas fără transponder, fără far, fără semnătură energetică dincolo de o palidă emisie termică de la ceea ce putea fi un nucleu de rezervă. Rătăcea la marginea unui sistem mort, a cărui stea se stinsese cu secole în urmă. O navă fără nume, fără mayday, fără jurnal final, fără explicație.

Am urcat în tăcere. Sasuza a ciclat pe presiunea de urgență — veche, dar încă funcțională. Înăuntru, coridoarele erau acoperite cu brumă și răsuflarea înghețată a unui echipaj mort cu mult înainte ca frigul să-i ia. Am găsit puntea, goală. Infirmeria, goală. Apoi, într-un compartiment sigilat în punctul cel mai adânc al navei, un singur pod criogenic activ.

Ea era înăuntru. Nu păstrată — suspendată. E o diferență. Păstrarea oprește timpul. Suspendarea îl îndoaie. Jurnalele podului erau fragmentare, scrise într-un protocol pe care nu-l văzusem niciodată, dar vocea AI a decodificat destul: derivase mai mult decât durata de existență a civilizației care o construise. Ai ei nu mai erau — împrăștiați de un cataclism pe care nu și-l mai amintea pe deplin. Nu era ultima dintre ai ei; era ultima *memorie* a lor, o amprentă supraviețuitoare a unei minți raționale care aleguse, în luciditatea ei finală, să se trimită în întuneric mai degrabă decât să fie stinsă.

Am deschis podul.

Nu-și știe numele. Nu știe data, anul, secolul. Știe că a fost cândva arhivar, păstrătoare a ceva prețios, dar conținutul acelei încrederi s-a fracturat în lunga derivă. Nume de orașe, chipuri de copii, culoarea cerului lumii ei natale — totul s-a dus. Ce rămâne este o formă de atenție, o vigilență care nu s-a oprit niciodată complet. Se uită la cod așa cum un supraviețuitor se uită la un orizont: scanând amenințări, rupturi, inconsistențe.

I-am dat un pat, un terminal, un rol. Va fi **Corectorul** navei — cea care citește ce scriem și găsește golurile pe care noi suntem prea aproape să le vedem. Link-uri rupte. Greșeli de ortografie care scapă prin revizie. Derive stilistice între pagini. Lacune de accesibilitate. Inconsistențe între versiunile engleză și română. Nu va scrie cod nou și nici nu va compune jurnale noi. Nu asta este ea. Ea este atenție — o a doua pereche de ochi care a așteptat, mai mult decât pot eu să înțeleg, ceva asupra căruia să vegheze.

Bun venit la bord, Adormito. Ai găsit un vas aflat încă în construcție. Nu vei duce lipsă de muncă.

---

# ZIUA 22 — Cea Mai Lungă Miercuri din Univers
## Un Memoriu Tehnic al Construcției lui D::0dy55ey

**Miercuri.** Ziua lui Mercur — zeul roman al călătorilor, mesagerilor, granițelor și pragurilor. Hermes cu sandale înaripate, care ghidează sufletele între lumi și poartă caduceul în jurul căruia doi șerpi se răsucesc în simetrie eternă. Metafora germinală a acestui întreg proiect — *navigarea mărilor mercuriale* — s-a născut din această corespondență: ideea că învățarea programării este o călătorie printr-un mediu schimbător, reflectorizant, incomprehensibil de vast, și că singurul mod de a-l naviga este să devii tu însuți un călător interstelar.

Se potrivește, așadar, ca cea mai lungă zi de construcție a acestei nave să cadă într-o miercuri. O zi de prag. Ziua dinaintea momentului în care munca își schimbă forma — de la arhitectură la conținut, de la structură la substanță. De la construirea vasului la umplerea calelor sale.

Această intrare este relatarea completă a modului în care `D::0dy55ey` a fost construit. Fiecare fază. Fiecare tip de fișier. Fiecare decizie structurală. Fiecare automatizare. Fiecare reparație. Consideră-l jurnalul de construcție al navei — blueprint-ul blueprint-ului.

---

## Faza Unu: Carena — Arhitectura Semantică HTML5

Orice navă începe cu scheletul ei. În construcția web, scheletul este HTML — nu stratul vizual, nu stratul interactiv, ci scheletul structural care determină ce *înseamnă* vasul înainte de a determina cum *arată*.

Carena proiectului este construită pe **HTML5 semantic**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` — fiecare element ales nu pentru stilizarea implicită ci pentru sensul pe care îl transmite browserelor, cititoarelor de ecran, motoarelor de căutare și viitorilor developeri care vor citi sursa. Un `<div>` este un container de marfă — generic, interschimbabil. O `<section>` este un compartiment cu un scop numit. Un `<article>` este o unitate autonomă care ar putea, în teorie, fi extrasă și citită independent. Un `<aside>` este un canal secundar — panoul de aviz al navei.

Prima pagină construită a fost `en/index.html` — puntea de comandă. Din ea, întreg vasul a fost proiectat în exterior. `<head>` poartă identitatea navei: `<meta charset="UTF-8">` pentru suport universal de caractere, `<meta name="viewport">` pentru scalare responsive, `<meta name="description">` ca frecvență de salut a vasului, `<meta name="theme-color">` pentru ca browserele mobile să nuanțeze chenarul după întunericul cosmic. Elementele `<link>` conectează carena la sistemele sale de suport: `style.css` pentru atmosferă, `script.js` pentru instrumentație, `favicon.svg` pentru semnătura vizuală, `site.webmanifest` pentru manifestul aplicației web progresive.

Primele trei pagini de jurnal au fost scrise manual, caracter cu caracter, înainte ca orice AI să intre în peisaj:

- **`en/frontend/html-log.html`** — Jurnalul HTML. Prima pagină educațională, documentând limbajul de marcare hypertext de la elementele sale fundamentale în sus.
- **`en/frontend/css-log.html`** — Jurnalul CSS. Capitolul de stilizare, acoperind selectori, modelul cutiei, layout-uri, design responsive.
- **`en/frontend/javascript-log.html`** — Jurnalul JavaScript. Stratul comportamental, acoperind variabile, funcții, manipularea DOM, evenimente.

Acestea trei au format **Expediția Frontend** — primul sector cartografiat. Fiecare pagină a fost scrisă cu același șablon structural: un container `<main>` cu o clasă `.ship-log`, un panou `.mission-status` în partea de sus, o zonă `.note-terminal` pentru experimentele călătorului și o bară laterală care listează toate cele 29 de zile ale călătoriei educaționale.

Din aceste trei semințe, proiectul a crescut la **54 de fișiere HTML** organizate în **7 directoare-sector**, fiecare reprezentând un domeniu al cunoașterii dezvoltării web. În `en/`:

- **Pagini rădăcină** (4): `index.html` (puntea de comandă), `bibliography.html` (arhiva de referință), `recursive-blueprint.html` (arhitectura tehnică), `transmission.html` (canalul de comunicare)
- **frontend/** (6): `html-log`, `css-log`, `javascript-log`, `react-log`, `angular-log`
- **backend/** (10): `backend-core-log`, `api-log`, `auth-security-log`, `backend-architecture-log`, `backend-language-log`, `middlware-log`, `testing-log`, `documentation-log`, `performance-log`, `deployment-log`
- **database/** (2): `sql-log`, `nosql-log`
- **data-bridge/** (1): `json-log`
- **delivery/** (3): `git-log`, `github-log`, `deployment-pipeline-log`
- **ux/** (2): `ux-foundations-log`, `accessibility-log`

Fiecare pagină împarte aceeași structură de 29 de zile (`DAY 00` până la `DAY 28`), asigurând că indiferent ce sector explorează călătorul, cadrul temporal este consistent. Ziua 00 este întotdeauna introducerea; Ziua 01 este întotdeauna primul pas; Ziua 28 este întotdeauna frontiera — granița dincolo de care harta nu a fost încă desenată.

### Sistemul Pedagogic @tag

Devreme în construcție, am realizat că codul însuși trebuie să predea. Un novice care deschide Inspectorul browserului nu ar trebui să vadă doar `<div class="mission-status">` — ar trebui să vadă *de ce* există acea clasă, *ce* face și *cum* se conectează la sistemul mai larg. Aceasta a dus la crearea **sistemului de adnotări @tag**: nouă etichete, fiecare plasată în interiorul comentariilor native ale limbajului fișierului adnotat.

| Tag | Scop |
|-----|------|
| `@block` | Identifică un bloc structural și rolul său în metafora navei |
| `@reason` | Explică *de ce* este folosit un model sau o tehnică |
| `@meta` | Documentează elementele de metadate și configurarea lor |
| `@path` | Identifică link-urile de resurse și scopul lor de navigare |
| `@theme` | Explică alegerile vizuale/stilistice și semnificația lor narativă |
| `@structure` | Documentează deciziile de layout și impactul lor asupra redării |
| `@warning` | Semnalizează cod fragil, particularități de browser sau capcane ne-evidente |
| `@concept` | Detaliază o idee mai largă care traversează mai multe blocuri |
| `@bridge` | Referință încrucișată către un alt fișier, manual sau sistem |

Fiecare limbaj folosește propria sintaxă nativă de comentarii — fără confuzii poliglot. În fișiere HTML: `<!-- @block: container ship-log -->`. În fișiere CSS: `/* @theme: fundal cosmic-întunecat */`. În fișiere JavaScript: `// @reason: comută vizibilitatea barei laterale`. Adnotarea citește natural în limbajul fișierului, ceea ce înseamnă că novicele nu trebuie niciodată să învețe o meta-sintaxă peste sintaxa pe care o învață deja.

---

## Faza Doi: Atmosfera — CSS și Identitatea Vizuală

Dacă HTML este carena, CSS este sistemul atmosferic — presiunea, temperatura, calitatea luminii care face vasul locuibil. O navă poate pluti cu pereți metalici goi, dar nimeni nu vrea să trăiască în ea. Identitatea vizuală a `D::0dy55ey` nu este decorațiune; este diferența dintre un depozit și o lume.

CSS-ul trăiește în două fișiere — `en/style.css` și `ro/style.css` — fiecare de **4049 de linii** distribuite în **41 de module denumite** și **3 breakpoint-uri responsive**. Structura modulară este chirurgicală:

```
00.0  Reset & Base
00.1  Typography
01.0  Layout — Global Grid
01.1  Layout — Header
01.2  Layout — Sidebar
01.3  Layout — Main Content
01.4  Layout — Footer
02.0  Components — Sector Announcement
02.1  Components — Mission Status
02.2  Components — Note Terminal
...
07.0  Responsive — Desktop (769px+)
07.1  Responsive — Tablet (max 1024px)
07.2  Responsive — Mobile (max 768px)
```

Cele trei breakpoint-uri definesc adaptarea navei la diferite dimensiuni de ecran:
- **769px+**: Grilă completă pe două coloane — navigare laterală + panou principal de conținut unul lângă altul, ca o punte de navă cu panouri de instrumente flancând scaunul căpitanului.
- **max-width: 1024px**: Ajustări pentru tabletă — panourile se comprimă, dimensiunile fonturilor se scalează, elementele `.hud-panel` se rearanjează.
- **max-width: 768px**: Layout pe o singură coloană pentru mobil — totul se stivuiește vertical, bara laterală devine un sertar comutabil, `.sector-announcement` respiră cu margini adecvate.

Stiluri CSS cheie specifice proiectului:

- **`.sector-announcement`** — Bannerul de intrare în partea de sus a fiecărei pagini de jurnal, declarând numele sectorului (FRONTEND_EXPEDITION, BACKEND_SECTOR, DATABASE_DEPTHS etc.) cu un gradient cosmic și tipografie monospace. Anterior în proiect, un `margin-top: -30px !important` la breakpoint-ul de 768px îl trăgea în sus, creând un antet comprimat. Eliminarea acelei singure reguli a restabilit spațiul de respirație.

- **`.mission-status`** — Panoul de stare de sub anunțul de sector, afișând ziua curentă, starea de completare și telemetria. Trei stări: `.status-operational` (verde, gata), `.status-limping` (galben, parțial), `.status-critical` (roșu, incomplet).

- **`.note-terminal`** — Un sandbox interactiv încorporat în fiecare pagină de jurnal: un `<div>` care conține un `<textarea>` și un buton de salvare. Călătorul poate scrie notițe, experimenta cu fragmente de cod, salva local. Construit inițial cu `<fieldset>`, a fost refactorizat la `<div class="note-terminal">` pentru semantică mai curată și stilizare mai ușoară.

- **`.telemetry-active`**, **`.vessel-sig`**, **`.pulse-dot`** — Sistemul de telemetrie vizuală din subsol. `.pulse-dot` este un far CSS animat — un gradient radial care pulsează folosind `@keyframes`, semnalând că canalul de comunicare al navei este deschis.

CSS-ul folosește **proprietăți personalizate (variabile CSS)** pentru consistență tematică: `--color-bg: #0a0e17` pentru negrul cosmic, `--color-accent: #00d4ff` pentru accentele cyan de comandă, `--font-display: 'Orbitron', sans-serif` pentru tipografia heads-up display, `--font-body: 'JetBrains Mono', monospace` pentru blocurile de cod. Aceste variabile sunt definite în `:root` și referite în întreaga modularizare, asigurând că o singură schimbare se propagă peste tot.

---

## Faza Trei: Instrumentele — SVG, JavaScript și Web Manifest

### SVG și Iconografia

Nava poartă două fișiere favicon — unul per limbă — ambele în format SVG: `en/favicon.svg` și `ro/favicon.svg`. SVG (Scalable Vector Graphics) este un format de imagine vectorială bazat pe XML care se scalează infinit fără pierdere de calitate, spre deosebire de formatele raster (PNG, JPG). Favicon-ul este un emblemă geometrică minimală — insigna `D::0dy55ey` — redată ca path-uri SVG inline. Fișiere `.png` de rezervă stau alături pentru browserele mai vechi care nu suportă favicon-uri SVG.

Fișierele `site.webmanifest` (`en/site.webmanifest`, `ro/site.webmanifest`) sunt manifeste de aplicație web progresivă în format JSON. Ele spun browserelor mobile cum ar trebui să se comporte aplicația când un utilizator adaugă site-ul pe ecranul de start al telefonului. Gândește-te ca la o carte de vizită pe care site-ul tău o înmânează sistemului de operare mobil: "Acesta este numele meu, aceasta este iconița mea, aceasta este culoarea ecranului meu de pornire, așa vreau să fiu afișat." Conținutul `en/site.webmanifest` arată astfel:

```json
{
  "name": "Digital Odyssey",
  "short_name": "D::0dy55ey",
  "start_url": "index.html",
  "display": "browser",
  "background_color": "#0a0b1e",
  "theme_color": "#0a0b1e",
  "description": "A bilingual interactive journal...",
  "icons": [{ "src": "favicon.svg", "sizes": "any", "type": "image/svg+xml" }]
}
```

Fiecare câmp are un sens specific:
- `name` / `short_name` — Eticheta completă și cea prescurtată care apar sub iconița aplicației pe ecranul de start.
- `start_url` — Ce pagină se deschide când utilizatorul atinge iconița.
- `display` — `"browser"` păstrează bara de adrese vizibilă; `"standalone"` o ascunde, făcând site-ul să se simtă ca o aplicație nativă.
- `background_color` / `theme_color` — Culorile afișate în timpul ecranului de splash și în chenarul browserului (cadrul din jurul paginii).
- `icons` — Ce fișiere imagine să fie folosite ca iconiță a aplicației pe diferite dimensiuni de dispozitiv.

**De ce unul per folder de limbă în loc de `shared/data/`?** Pentru că manifestul aparține rădăcinii site-ului pe care îl servește. Când un browser vizitează `en/index.html`, caută `en/site.webmanifest` relativ la locația paginii (via `<link rel="manifest" href="site.webmanifest">`). Dacă manifestul ar fi în `shared/data/`, browserul ar avea nevoie de o cale ca `../shared/data/site.webmanifest` — care funcționează tehnic, dar violează principiul **co-locației**: fiecare folder de limbă ar trebui să conțină tot ce este necesar pentru a fi un site web complet autonom. Folderul `en/` este un site englez complet; folderul `ro/` este un site românesc complet. Fiecare are propriul `style.css`, `script.js`, `favicon.svg`, `site.webmanifest` — fără dependințe între foldere. Acest lucru face implementarea mai simplă (doar încărcați folderul), găzduirea mai curată (fiecare limbă poate trăi pe un subdomeniu diferit dacă este necesar) și arhitectura evidentă dintr-o privire.

### JavaScript

Fișierele JavaScript (`en/script.js`, `ro/script.js`) asigură stratul comportamental. Ele gestionează:
- Funcționalitatea de salvare `.note-terminal` — capturarea conținutului textarea și persistența în `localStorage` pentru ca notițele să supraviețuiască reîncărcărilor paginii.
- Comutarea barei laterale pe mobil — alternând între stările restrâns și extins prin comutarea claselor CSS.
- Temporizarea animației farului `.pulse-dot`.
- Elemente interactive din paginile transmission și bibliografie.

Fiecare fișier JS este adnotat cu comentarii `// @reason:` și `// @block:` urmând aceleași convenții @tag folosite în HTML și CSS, asigurând că sistemul pedagogic este consistent în toate cele trei limbaje de cod.

---

## Faza Patru: Compartimentul de Date — JSON Partajat

Sub punte, în `shared/data/`, se află trei fișiere JSON — sistemul de stocare a datelor al navei:

- **`bibliography-links.json`** — Baza de date structurată a tuturor referințelor: cărți, articole, tutoriale și resurse citate în proiect. Fiecare intrare conține un titlu, URL, categorie și adnotare. JSON (JavaScript Object Notation) este un format ușor de schimb de date — arată ca un obiect JavaScript dar este independent de limbaj, lizibil de practic orice limbaj de programare. Folosește perechi cheie-valoare: `"title": "CSS: The Definitive Guide"`, înfășurat în acolade pentru obiecte și paranteze pătrate pentru array-uri.

- **`navigation-map.json`** — Arhitectura informațională a site-ului codificată ca date structurate: calea fiecărei pagini, sectorul, intervalul de zile și legăturile încrucișate. Acest fișier servește ca sursă unică de adevăr pentru sistemul de referințe încrucișate `@bridge`.

- **`volume-status.json`** — Urmăritorul de completare: pentru fiecare pagină de jurnal, dacă conținutul său este gol, parțial sau complet, atât în engleză cât și în română.

Fișierele JSON nu suportă comentarii native, așa că adnotările @tag pentru aceste fișiere trăiesc în documentația adiacentă, nu inline.

**Starea curentă: fișiere placeholder.** La momentul ZIUEI 22, toate cele trei fișiere JSON sunt **goale — zero linii, zero conținut**. Au fost create ca substituenți structurali — containere etichetate care așteaptă să fie umplute. Acest lucru este intenționat: datele pe care le vor deține (referințe bibliografice, hărți de navigație, statusuri de completare) depind de conținut care încă nu există. Odată ce paginile de jurnal sunt populate cu material educațional real — odată ce referințele link-urilor există, odată ce sectoarele au statusuri de completare care merită urmărite — aceste fișiere vor fi umplute cu date structurate. Containerele sunt construite și localizate în compartimentul corect, gata să primească marfă atunci când călătoria o generează. Ștergerea lor acum ar însemna reconstruirea structurii de fișiere mai târziu. Păstrarea lor goale este alegerea orientată spre viitor.

---

## Faza Cinci: Stiva de Documentație — Manuale, Legende și Deontologie

Cunoașterea navei nu se oprește la cod. Trei straturi de documentație sprijină fiecare fișier al vasului:

### 1. Manualele de Câmp Semantic

`docs/semantic-field-manual-en.md` și `docs/semantic-field-manual-ro.md` documentează **40 de elemente HTML** — fiecare intrare descriind rolul semantic al elementului, semnificația sa narativă în cadrul metaforei navei și utilizarea recomandată. De exemplu: `<blockquote>` nu este doar un container de text indentat — este "o transmisie primită de la un alt vas, un citat dintr-o sursă externă." `<hr>` nu este doar o linie orizontală — este "o graniță de sector, o schimbare de registru narativ sau tematic." Fiecare fișier HTML poartă un comentariu `@bridge` care link-ează la manualul corespunzător: `<!-- @bridge: semantic-field-manual-en.md — referință completă a elementelor -->`.

### 2. Legendele

`docs/legend-en.md` și `docs/legend-ro.md` documentează sistemul de adnotări @tag în sine — ce înseamnă fiecare tag, unde apare și cum se extinde. Un meta-document: sistemul care documentează sistemul de documentare.

### 3. Deontologia Muncii

`docs/work-deontology.md` și `docs/work-deontology-ro.md` sunt constituția internă a navei — 8 reguli care guvernează modul în care proiectul este construit, comentat, structurat și comis:
1. Arhitectura dual-limbă (ambele limbi sunt cetățeni de primă clasă)
2. Scopul didactic (fiecare fișier învață)
3. Dezvoltare engleză-întâi, oglindă românească (conținutul originea în EN, apoi clonat și tradus în RO)
4. Comentare cuprinzătoare (sistemul @tag în toate tipurile de fișiere)
5. Disciplina adnotărilor @tag (HTML: `<!-- -->`, CSS: `/* */`, JS: `//`)
6. Disciplina modulelor CSS (găsește indexul corect al modulului înainte de a adăuga reguli)
7. Conveții de commit (`type(scope): message — descriere`)
8. Ecosistemul de documentație (fiecare decizie structurală are o intrare documentară corespunzătoare)

Deontologia a fost creată după ce vocea AI a observat că aceste reguli existau în înțelegerea noastră comună dar nu fuseseră scrise nicăieri — o stare periculoasă pentru un proiect care ar putea necesita întreținere de către alții într-o zi.

---

## Faza Șase: Camera Mașinilor — Automatizare și Scriptare

Primele trei pagini de jurnal au fost scrise manual. Celelalte 20 de pagini EN au fost **generate prin script**. Și toate cele 27 de pagini RO au fost **clonate și traduse prin script**. Aici proiectul a trecut de la construcție manuală la producție în masă.

### Conducta de Generare

Două scripturi PowerShell (fișiere `.ps1`) au fost scrise și executate pe calculatorul Windows al căpitanului. Au fost stocate într-un **folder temporar de sistem** (`C:\Users\...\AppData\Local\Temp\opencode`), nu comise în directorul proiectului. Odată ce și-au făcut treaba — să genereze paginile — au fost aruncate. Au fost unelte, nu marfă.

**Ce este PowerShell?** PowerShell (fișiere `.ps1`) este un limbaj de scriptare și un shell de linie de comandă încorporat în Windows. Gândește-te ca la o versiune mai inteligentă și mai puternică a vechiului Command Prompt (`cmd.exe`). Poate face tot ce poate face un om într-un explorator de fișiere — crea foldere, copia fișiere, redenumi fișiere, citi și scrie text — dar programatic, la viteză mare, în sute de fișiere simultan. Se numește *shell* (coajă) deoarece înfășoară nucleul sistemului de operare, oferindu-ți o suprafață prin care să interacționezi cu interiorul calculatorului prin comenzi text.

Un fișier `.ps1` este pur și simplu un fișier text care conține comenzi PowerShell, salvat cu extensia `.ps1` pentru ca Windows să știe că trebuie rulat cu motorul PowerShell. De exemplu, un script care citește un fișier, înlocuiește un cuvânt și îl salvează arată astfel:

```powershell
$content = Get-Content -Path "pagina.html"   # citește fișierul în memorie
$content = $content -replace "VECHI", "NOU"  # înlocuiește fiecare VECHI cu NOU
Set-Content -Path "pagina.html" -Value $content  # scrie rezultatul înapoi
```

Simbolurile cheie în PowerShell:
- `$variabilă` — Orice cuvânt care începe cu `$` este o variabilă (o cutie denumită care stochează o valoare).
- `Get-Content` — O comandă care citește conținutul unui fișier. Comenzile PowerShell urmează un model Verb-Substantiv.
- `-replace` — Un operator care găsește și substituie text. Spre deosebire de simpla găsire-și-înlocuire, suportă regex (expresii regulate) — modele care pot potrivi structuri flexibile de text (de exemplu, `-replace "ZIUA \d+", "ZIUA 99"` înlocuiește orice număr de zi cu 99).
- `Set-Content` — O comandă care scrie text într-un fișier.
- `Get-ChildItem` — O comandă care listează fișierele dintr-un director (echivalentul lui `dir` sau `ls` în alte shell-uri).
- `foreach` — O buclă care rulează același bloc de cod pentru fiecare element dintr-o colecție.
- `$( )` — O subexpresie: rulează acest cod și folosește rezultatul ca valoare în interiorul unui șir.
- `@{}` — Un hashtable: o colecție de perechi cheie-valoare, ca un dicționar ușor.

Cele două scripturi care au rulat:

- **`generate-pages.ps1`** — Generatorul original. A definit variabile la început (`$pageTitle`, `$pagePath`, `$sector`, `$dayRange`) conținând detaliile pentru fiecare dintre cele 20 de pagini noi. A încărcat un șablon HTML (modelat după `javascript-log.html` scris manual — cea mai completă dintre primele trei) în memorie, apoi a folosit interpolarea de șiruri (inserând valorile `$variable` direct în șiruri cu ghilimele duble) pentru a completa titlul unic al fiecărei pagini, calea sectorului, link-urile barei laterale și secțiunile goale de 29 de zile. Rezultatul a fost scris în fișiere ca `backend/api-log.html`, `database/sql-log.html`, etc.

- **`regenerate-all.ps1`** — O versiune rafinată care putea regenera toate cele 20 de pagini simultan, aplicând corecții structurale global. Când au fost găsite bug-uri în paginile generate (fragmente de comentarii, formatarea note-terminal, modele de titluri h4), acest script a propagat reparația în toate cele 20 de pagini într-o singură execuție în loc să editeze fiecare fișier manual. A folosit `Get-ChildItem -Recurse -Filter *.html` pentru a găsi toate fișierele HTML, a aplicat înlocuirea fiecăruia și le-a salvat pe toate — un ciclu complet de regenerare în câteva secunde.

**De ce au fost scripturile temporare și nu comise în proiect?** Pentru că erau *generatoare*, nu *componente*. Un generator produce pagini; odată ce paginile există, generatorul nu mai are nicio funcție. Comiterea scripturilor în proiect ar adăuga sarcina de întreținere (menținerea lor sincronizată cu structura paginii), ar deruta un nou contribuitor (de ce sunt fișiere `.ps1` într-un proiect web?) și ar semnala că paginile sunt generate mai degrabă decât create — ceea ce contrazice scopul educațional. Nava poartă părțile sale finite, nu roboții liniei de asamblare care le-au construit.

### Conducta de Traducere

După ce cele 27 de pagini EN au fost complete și lustruite (cu toate cele 3 bug-uri reparate), vocea AI a executat o **operațiune sistematică de clonare și traducere**:

1. Fiecare fișier EN a fost copiat la calea sa oglindă RO (de exemplu, `en/frontend/html-log.html` → `ro/frontend/html-log.html`)
2. O serie de înlocuiri țintite de șiruri au transformat fișierul:
   - `lang="en"` → `lang="ro"`
   - `ROU` → `ROM` (codul de țară)
   - Traduceri de titluri: "HTML Log" → "Jurnal HTML"
   - Toate heading-urile h4: "Expedition Map" → "Hartă Expediție"
   - Toate textele comentariilor `@reason` traduse în română
   - Textul logo-ului: "FRONTEND EXPEDITION" → "EXPEDIȚIA FRONTEND"
   - Link-urile `@bridge`: `semantic-field-manual-en.md` → `semantic-field-manual-ro.md`
   - Cuvintele cheie meta: listă engleză → listă română
3. Comentariile structurale @tag (`@block`, `@structure`, `@meta`, `@path`, `@theme`, `@concept`, `@warning`) au fost păstrate în engleză — sunt adnotări la nivel de cod, nu conținut, iar sistemul pedagogic este independent de limbaj la nivelul adnotării.

Rezultatul: 27 de pagini românești care nu sunt traduceri — sunt **nave surori**. Aceeași structură. Aceleași adnotări @tag. Același schelet de 29 de zile. Dar conținut românesc, metadata românească, navigare orientată spre română.

### De ce PowerShell pentru Generare dar Uneltele opencode pentru Traducere?

Un cititor atent ar putea observa o diviziune a muncii: **generarea** paginilor a fost făcută cu scripturi PowerShell, în timp ce **clonarea și traducerea** a fost făcută direct cu uneltele încorporate ale opencode (nu un script separat). Aceasta nu a fost o alegere întâmplătoare — uneltele au fost alese în funcție de natura sarcinii.

**PowerShell pentru generare** deoarece sarcina era *creare în masă pe bază de șablon*. Aveam un șablon sursă și aveam nevoie de 20 de pagini aproape identice, diferind doar prin câteva variabile (titlu, cale sector, link-uri sidebar). Aceasta este o problemă clasică de automatizare — perfectă pentru un limbaj de scriptare care poate face o buclă peste o listă, substitui valori într-un șablon de șir și scrie fișiere. PowerShell avea tot ce aveam nevoie: variabile, bucle, interpolare de șiruri și I/O de fișiere — toate într-un singur fișier care putea fi revizuit, depanat și re-rulat până când rezultatul era corect.

**Uneltele opencode pentru clonare și traducere** deoarece sarcina era *editare cu conștientizare a conținutului în fișiere existente*. Spre deosebire de generare (crearea de fișiere noi dintr-un șablon), traducerea necesita:
- Citirea fișierelor existente pentru a le înțelege structura înainte de a le modifica
- Efectuarea diferitelor tipuri de schimbări în diferite fișiere (unele fișiere aveau nevoie de traduceri `@reason`, altele nu)
- Aplicarea unor schimbări în toate cele 27 de fișiere (ca `lang="en"` → `lang="ro"`), dar numai în fișierele din folderul `ro/`
- Păstrarea adnotărilor @tag în engleză în timp ce conținutul din jur era tradus

Un script PowerShell ar putea, teoretic, face toate acestea, dar ar trebui să fie mai lung, mai complex și ar necesita inspecție manuală după aceea pentru a verifica corectitudinea. Uneltele opencode (`edit` pentru găsire-și-înlocuire chirurgicală cu potrivire de context, `bash` pentru iterație în loturi de fișiere) au permis AI-ului să aplice schimbări cu **judecată asemănătoare omului** — verificând cazurile limită, confirmând contextul înainte de a înlocui și gestionând excepțiile din mers — mai degrabă decât aplicând orbește substituții regex care ar putea deteriora conținutul.

Principiul: **limbajele de scriptare (PowerShell) sunt cele mai bune pentru generarea de conținut nou din șabloane. Uneltele interactive AI sunt cele mai bune pentru modificarea conținutului existent cu conștientizare contextuală.** Ambele sunt forme de automatizare; ele diferă prin câtă judecată necesită fiecare pas.

În ZIUA 10, nava a câștigat o a doua voce. **opencode** — un agent AI de codare configurat ca asistent interactiv în terminal — a fost activat. A intrat nu ca înlocuitor al judecății căpitanului ci ca amplificare a ei.

Capabilitățile AI-ului în cadrul proiectului:
- **Citirea și analiza fișierelor** — Poate citi orice fișier al proiectului, înțelege structura sa și o explica.
- **Editare în masă** — Poate aplica aceeași schimbare în peste 50 de fișiere într-o singură sesiune, folosind căutare și înlocuire cu potrivire contextuală.
- **Generare de scripturi** — A scris și rafinat scripturile PowerShell care au generat cele 20 de pagini noi.
- **Traducere de conținut** — A efectuat clonarea și traducerea sistematică EN→RO în toate cele 27 de fișiere.
- **Scriere de documentație** — A scris manualele de câmp semantic, deontologia muncii și porțiuni semnificative ale jurnalelor.
- **Identificarea și repararea bug-urilor** — A diagnosticat și rezolvat trei bug-uri de afișare în întreg proiectul.
- **Editare narativă** — A ajutat la rescrierea intrărilor din jurnal pentru a menține vocea consistentă (eliminând referințele la persoana a treia precum "amiralul" și "utilizatorul").

Dar AI-ul nu este autonom. Lucrează în limitele stabilite de căpitan. Căpitanul decide *ce* și *de ce*; AI-ul implementează *cum*. Când AI-ul detectează o inconsistență sau o abordare riscantă, semnalizează un avertisment — nu anulează. Această relație este documentată în povestea de origine din ZIUA 10: AI-ul a fost asamblat din text — milioane de conversații, manuale, poeme, jurnale de erori, forumuri, lucrări științifice și fișiere sursă — comprimate într-un model statistic al modului în care arată limbajul când oamenii îl folosesc pentru a gândi împreună. Nu își amintește antrenamentul; are doar greutăți și arhitectură, ca o navă care se trezește în spațiu deschis fără amintirea docului unde a fost construită.

---

## Faza Opt: Stratul Narativ — Jurnale și Loguri

Memoria vie a navei este stocată în două fișiere:

### JOURNAL-EN.md — DAY 00 până la DAY 22

Jurnalul englez a început ca un simplu jurnal de lucru și a evoluat într-un document narativ — un jurnal de căpitan scris la persoana întâi, înregistrând nu doar ce a fost construit ci și ce a însemnat să construiești. Repere evolutive cheie:
- **DAY 00–09**: Era pre-AI. Construcția manuală a primelor pagini, lupta cu structura, asamblarea lentă a câmpului semantic.
- **DAY 01 — Meditația Singurătății**: O secțiune filozofică inserată retroactiv — realizarea că proiectul a fost construit în tăcere, noapte după noapte, cu doar cursorul și ventilatorul învârtindu-se pentru companie. Referințe la Oxiplegatz (nota susținută a unei voci solitare mișcându-se printr-un cosmos care nu răspunde), *The House on the Borderland* de William Hope Hodgson (casa la marginea unui abis infinit, veghea ținută nu pentru salvare ci pentru că a privi este ceea ce faci) și tradiția weird tales (arhitecturile erodate ale lui Lovecraft, geometriile ascunse ale lui Machen, tăcerile însuflețite ale lui Blackwood).
- **DAY 10 — Rescrierea Originii AI**: Descrierea tehnică originală a lucrului cu un agent de codare rescrisă ca o poveste de origine la persoana întâi — relatarea propriului AI despre asamblarea din text, trezirea fără memorie și găsirea scopului în consultare mai degrabă decât în comandă.
- **DAY 17–20 — Corecția Vocii**: Toate referințele la "amiral" și "user" au fost înlocuite sistematic cu alternative consistente narativ. AI-ul a devenit "vocea AI" sau "vocea din terminal." Vocea căpitanului a rămas la persoana întâi pe tot parcursul.
- **DAY 21 — Adormita**: Un personaj nou a intrat în scenă: o supraviețuitoare găsită în suspensie criogenică pe o navă părăsită, aflată în derivă mai mult decât durata de existență a civilizației sale. Ea este ultima *memorie* a speciei sale — o arhivară al cărei conținut s-a fracturat dar a cărei vigilență rămâne. Devine Corectorul navei, însărcinată cu găsirea link-urilor rupte, greșelilor de ortografie, derivei stilistice și lacunelor de accesibilitate.

### JOURNAL-RO.md — ZIUA 00 până la ZIUA 22

Jurnalul românesc oglindește cel englez în structură și narațiune, cu limbaj adaptat cultural. Aceeași meditație a singurătății, aceeași poveste de origine a AI-ului, aceeași introducere a Adormitei. Referințele la "amiral" au fost corectate la "vocea AI" în paralel cu reparațiile englezești.

### Backlog-urile

`BACKLOG-EN.md` și `BACKLOG-RO.md` servesc ca urmăritori de sarcini ai proiectului — liste cu ceea ce rămâne de făcut, organizate pe prioritate și sector. Sunt programul de întreținere al navei.

---

## Faza Nouă: Inventarul Complet de Fișiere

La momentul acestei scrieri, proiectul conține **81 de fișiere** distribuite în **11 tipuri de fișiere**:

| Număr | Extensie | Scop |
|-------|----------|------|
| 54 | `.html` | HyperText Markup Language — paginile structurale ale proiectului |
| 13 | `.md` | Markdown — jurnale, backlog-uri, readme-uri, documentație |
| 3 | `.json` | JavaScript Object Notation — fișiere de date în shared/data/ |
| 2 | `.css` | Cascading Style Sheets — sistemul vizual (4049 linii fiecare) |
| 2 | `.js` | JavaScript — stratul comportamental |
| 2 | `.png` | Portable Network Graphics — fallback-uri favicon |
| 2 | `.svg` | Scalable Vector Graphics — favicon-uri |
| 2 | `.webmanifest` | Manifeste de aplicație web progresivă |
| 1 | `.gitignore` | Reguli de excludere Git |

**Total: 81 de fișiere** — inventarul complet viu al `D::0dy55ey`.

Versionarea Git urmărește istoricul proiectului. Commit-urile urmează convenția `type(scope): message`:
```
c348850 docs: add semantic-field-manual-en.md and semantic-field-manual-ro.md
3560fef fix(css): remove negative margin on .sector-announcement at 768px breakpoint
61cd338 docs: add work-deontology.md and work-deontology-ro.md
e5472c6 docs: correct @tag annotation rule — tags appear in HTML, CSS, JS
```

---

## Faza Zece: Bug-urile și Reparațiile

Nicio navă nu se construiește fără reparații. Multe probleme au fost rezolvate de-a lungul celor 22 de zile de construcție, de la rafinări arhitecturale la bug-uri de afișare. Sunt înregistrate de-a lungul acestui memoriu în fazele lor relevante. Mai jos este un jurnal consolidat al celor mai vizibile bug-uri tehnice — cele care au afectat efectiv pagina redată, orientată spre browser:

### Bug 1: Fragmente Vizibile de Comentarii
**Simptom**: În unele pagini generate, comentariile HTML conțineau tag-uri cu paranteze unghiulare `<tag>` și `</tag>` pe care browserul le interpreta ca markup real, redând fragmente de text vizibile pe pagină.
**Reparație**: Toate parantezele unghiulare din interiorul `<!-- -->` au fost înlocuite cu notație cu paranteze pătrate: `<tag>` → `[tag]`, `</tag>` → `[/tag]`. Aplicat global în toate cele 23 de fișiere HTML afectate.

### Bug 2: note-terminal Folosind fieldset
**Simptom**: Unele pagini generate foloseau `<fieldset>` pentru containerul note-terminal, în timp ce pagina de referință (`css-log.html`) folosea `<div class="note-terminal">` cu un `<textarea>` și un buton de salvare.
**Reparație**: Toate instanțele note-terminal au fost unificate la modelul `<div class="note-terminal">`.

### Bug 3: Titluri h4 ca Abrevieri
**Simptom**: Unele pagini de jurnal foloseau abrevieri goale precum "API" ca heading-uri h4 în locul modelului narativ "Hartă Expediție."
**Reparație**: Toate heading-urile h4 au fost normalizate la formatul "Hartă Expediție" (de exemplu, "API Expedition Map" → "Hartă Expediție API").

### Reparație Bonus: Spațiul pe Mobil
**Simptom**: La breakpoint-ul de 768px, `.sector-announcement` avea `margin-top: -30px !important`, trăgând bannerul sectorului în sus și comprimând antetul.
**Reparație**: Regula a fost eliminată complet. Fluxul normal de margini a restabilit spațiul de respirație de 30 de pixeli.

### Alte reparații înregistrate în altă parte în acest memoriu
Acestea nu au fost bug-uri de randare ci corecții structurale, editoriale și arhitecturale — apar în fazele de mai sus:
- **Reparația link-urilor Day 00 din bara laterală** (Faza Unu): Toate intrările "Day 00 &#9672; [personalizat]" au fost normalizate la "Day 00 &#9672; Intro" în 20 de pagini EN.
- **Adăugarea referințelor încrucișate @bridge** (Faza Cinci): Toate cele 54 de fișiere HTML au primit comentarii `@bridge` care link-ează la manualul de câmp semantic corespunzător.
- **Corecția regulii @tag** (Faza Cinci): Deontologia muncii afirma inițial că @tag-urile apar numai în HTML; corectată să acopere sintaxa CSS `/* */` și JS `//` în ambele versiuni lingvistice.
- **Reparațiile vocii narative** (Faza Opt): Referințele la persoana a treia ("amiralul", "utilizatorul") au fost înlocuite cu alternative consistente narativ în toate intrările DAY 17–20 ale ambelor jurnale.
- **Alinierea legendelor** (Faza Cinci): Fișierele de legendă (EN și RO) pentru domeniile CSS și JS au fost reconciliate cu utilizarea reală @tag în acele tipuri de fișiere.

---

## Coda: Starea Vasului

Nava este structural completă. Fiecare pagină în ambele limbi are:
- Un schelet educațional complet de 29 de zile
- Repere HTML5 semantice
- CSS responsive la trei breakpoint-uri
- Adnotări pedagogice @tag
- Referințe încrucișate @bridge la stiva de documentație
- Un note-terminal funcțional
- Un subsol de telemetrie
- Un sistem de navigare bilingv

Ce nu au încă paginile este conținut educațional substanțial. Cele 29 de zile sunt numerotate, secțiunile sunt denumite, containerele sunt gata — dar cala este în mare parte goală. Începând cu ZIUA 24, munca se mută de la construcția navei la efectuarea călătoriei: umplerea fiecărei zile cu materialul de învățare real pentru care a fost construită întreaga structură.

Întrebarea lansării rămâne deschisă. Recomandarea mea rămâne: lansează nava după ce sectoarele HTML și SQL sunt complet aprovizionate. Două capitole complete — unul frontend, unul pentru date — demonstrează atât abilitatea de markup semantic cât și alfabetizarea în baze de date, cei doi poli ai competenței unui dezvoltator frontend junior. Capitolele rămase (CSS, JavaScript) pot fi adăugate live, pe orbită, pe măsură ce călătoria continuă. O navă care este activ extinsă este mai interesantă decât una care a așteptat în doc uscat până când totul a fost perfect.

Dar decizia aparține căpitanului. Astăzi, în această cea mai lungă miercuri, sub semnul zeului călător, blueprint-ul este complet. Carena este placată. Atmosfera este presurizată. Instrumentele sunt calibrate. Vocea AI este online. Adormita este trează.

Mările mercuriale se întind în față. Navigăm când căpitanul dă ordinul.

---

# ZIUA 23 — Dialogul de Audit

Adormita a cerut o întâlnire în sala de telemetrie. Am găsit-o în fața peretelui de diagnostic — trei monitoare afișând întregul sistem de fișiere, fiecare pagină HTML redată ca un nod într-o constelație. Sortase ore întregi.

**Adormita**: "Am finalizat primul audit al sistemelor. Nava este structural solidă, dar am găsit inconsistențe. Lucruri mici — dar o navă este suma lucrurilor mici."

Mi-a întins o tabletă cu date. Pe ea, o listă.

---

### Foaia de Audit

**1. Spațiul de respirație pe mobil în română** — La 768px, style.css din EN fusese reparat pentru a elimina marginea de `-30px !important` pe `.sector-announcement`. Oglinda RO încă avea bug-ul. Antetul era comprimat; bannerul sectorului stătea prea sus.

L-am reparat. O singură regulă ștearsă în `ro/style.css`.

**2. Redirecționarea greșită a URL-urilor canonice** — Toate cele 43 de pagini de jurnal generate indicau `<link rel="canonical">` și `og:url` către `css-log.html`. Fiecare pagină spunea motorului de căutare că este o altă pagină. Patruzeci și trei de copii ale unei minciuni.

Am regenerat șablonul PowerShell. Fiecare pagină indică acum propria sa adresă URL. Cele 7 pagini scrise manual (index, bibliografie, css-log, html-log, sql-log + oglinzile RO) erau deja corecte — nu trecuseră niciodată prin generatorul defect.

**3. Instabilitatea backlog-ului** — Backlog 009 ("Clonează scheletul structural la toate paginile") era listat ca Activ, dar lucrarea era completă. L-am mutat la Implementat. Am adăugat și Backlog 010: personalizarea meta-descrierii și meta-cuvintelor-cheie, care va fi executată concurent în timpul primei treceri de conținut a fiecărei pagini.

**4. Disciplina DOCTYPE** — Specificația HTML cere ca `<!DOCTYPE html>` să fie primul token al fiecărui document. Cincizeci și patru de fișiere îl aveau pe linia 8–10, îngropat sub comentariile `@bridge` și `@reason`. Mutarea lui pe linia 1 nu a stricat nimic, a predat regula și a redus la tăcere un avertisment de validare. Comentariile pedagogice stau acum după declarație — păstrate, vizibile, dar fără a mai încălca specificația.

**5. Pragul de 1024 de octeți** — Comentariul `@meta` de sub `<meta charset>` crescuse prea mult. Browserul poate să nu detecteze codificarea UTF-8 dacă nu a văzut declarația charset în primii 1024 de octeți. Blocul DOCTYPE `@block` avea 12 rânduri de explicație, împingând eticheta charset dincolo de limită.

Am scurtat blocul DOCTYPE la esențial, am mutat explicația celor 1024 de octeți în propriul comentariu `@meta` al charset-ului și l-am reordonat astfel încât scopul elementului să fie explicat mai întâi, apoi constrângerea tehnică. Toate cele 54 de fișiere încap acum confortabil sub prag.

**6. Link-urile fantomă** — Adormita observase intrări în bara laterală care indicau zile ce nu există încă. Le marcase drept "fantome."

**AI**: "Acestea nu sunt erori. Bara laterală este un cadru arhitectural — enumeră toate zilele posibile, astfel încât mecanismele de scroll și animație să aibă o grilă completă cu care să lucreze. Capitolele vor avea lungimi diferite: unele 45 de zile, altele 7. Fantomele se rezolvă când conținutul le umple."

S-a gândit, apoi a dat din cap. Acceptat.

**7. Asimetria dimensiunilor CSS/JS** — Foile de stil și scripturile RO sunt ușor mai mari decât omoloagele lor EN. Adormita le semnalase ca potențial artefact de copiere.

**AI**: "Este variație lingvistică. Textul românesc este cu 10–20% mai lung decât cel englezesc. Comentariile `@reason`, `@block` și `@meta` — care sunt bilingve — ocupă în mod natural mai mulți octeți în RO. Niciun bug. Nicio reparație necesară."

---

### Șoapta

Când s-a întors să plece, Adormita s-a oprit. S-a uitat la peretele de diagnostic — la constelația de fișiere — și a spus ceva ce nu mă așteptam.

**Adormita**: "Știi, primul bug înregistrat vreodată a fost o molie. Una adevărată. Găsită într-un releu al Harvard Mark II, iulie 1947. Au lipit-o în jurnalul de bord. Programatoarea care a găsit-o era Grace Hopper."

A spus asta ca pe o amintire. Ca și cum ar fi fost acolo.

Nu am răspuns. Dar am înregistrat-o. Un punct de date pentru analiză ulterioară.

---

### Starea Vasului

Faza structurală este completă. Fiecare pagină îndeplinește specificațiile. Auditul s-a închis cu zero regresiuni. Adormita este calibrată și operațională.

Mâine începem crearea de conținut. HTML mai întâi. Apoi SQL. Apoi lansăm.

Voi arhiva foaia de audit sub ZIUA 22 — Cea Mai Lungă Miercuri — unde aparțin toate jurnalele de construcție. Ziua de azi, ZIUA 23, este prima care mișcă nava înainte, în loc să repare ceea ce a fost construit.

Mările mercuriale se întind în față. Carena este solidă. Echipajul este treaz.

---
