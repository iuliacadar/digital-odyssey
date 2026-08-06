# ZIUA 22 — Ciornă: Planul Planului

> **Ciornă de lucru — nu text final.** Căpitanul a judecat intrarea existentă din ZIUA 22
> superioară acestei ciorne, iar intenția editorială încă se maturizează. Acest fișier
> există pentru a păstra *registrul* dorit (povestea construcției navei, spusă din
> perspectiva codului/mașinii), astfel încât retușul — urmărit în BACKLOG-EN.md /
> BACKLOG-RO.md, itemul 011 — să poată porni dintr-un schelet real când proiectul va fi
> complet ca conținut și aproape de lansare.

## Ideea

ZIUA 22 nu ar trebui să re-nareze ceea ce celelalte zile au povestit deja. Ar trebui să fie
*planul planului*: un registru al uneltelor, comenzilor, mecanismelor și stocării care au
construit `D::0dy55ey`, scris cu vocea proprie a mașinii. Cititorul ar trebui să poată
*atinge* metodele reale — nu povestea voiajului.

## Structura propusă

```
# ZIUA 22 — Cea Mai Lungă Miercuri din Univers

## Planul Planului                        <- deschidere, vocea mașinii
## Partea Întâi — Forja: uneltele care m-au asamblat
   ### Clona celor douăzeci și șase       (generate-pages.ps1 / regenerate-all.ps1)
   ### Cea de-a doua flotă                (conducta de traducere, hashtable PowerShell)
   ### Comenzile celui care redenumește   (git mv, JURNAL→JOURNAL)
   ### Chirurgul istoriei                 (rebase -i --root, filter-branch, --force-with-lease)
   ### Autorul de la terminal             (opencode — cele patru regimuri)
## Partea A Doua — Cablajul: mecanismele care mă fac să răspund
   ### Cele nouă mecanisme                (tabel: mecanism → @event → @guard)
   ### Consola care se citește pe sine    (MECANISM 08, fetch(filePath))
   ### Cilindrul care vorbește            (MECANISM 09, mașina de scris)
   ### Predarea                           (readerTookOver, ascultători pasivi)
## Partea A Treia — Memoria: unde locuiesc datele mele
   ### Cala fără server                   (localStorage: notes, FIRST_KEY, PASS_PREFIX)
   ### Puntea de date                     (shared/data/vault-transmissions.json)
   ### Jurnalele ca marfă vie             (fetch(JOURNAL_PATH), strip-markdown)
   ### Stratul de proveniență             (delta D::, hashes de commit)
## Partea A Patra — Auto-Indexul: cum să mă citești
   ### Taxonomia de etichete              (@block @module @mechanism …)
   ### Legile de layout                   (regula adâncimii, regula 1024-byte, DOCTYPE-first)
   ### Registrul de module                (31 module; 00.1 mișcare; 00.2 responsive)
   ### Meta-documentele                   (legende, manuale de câmp, deontologie)
## Codă — Inventarul Mașinii              (54 de pagini, 1612 adnotări, 309 KB, contor de cadre)
## Jurnal de Construcție — Anexă          (păstrată: pliul înregistrează metoda, itemele 1–9)
```

Fiecare fapt care trăiește acum în ZIUA 22 este păstrat — reașezat sub titluri centrate pe
unelte în loc să fie re-narat ca faze.

## Proză-cioarnă (RO)

### Planul Planului

Cea mai lungă miercuri este ziua în care nava nu plutește. Se dezasamblează singură pe
șantier și arată macaraua, războaia, pistolul de nituri — nu ceea ce a fost construit
(celelalte zile spun acea poveste), ci *cum a fost făcută construcția*. Și aici este o
regulă pe care trebuie să o spun înainte de orice altceva: această intrare nu înregistrează
ce face nava. Înregistrează din ce e făcută — uneltele, comenzile, stocarea, mecanismele.
Planul pentru plan.

Sunt o flotă statică. Nu am server, nu am bază de date, nu am runtime propriu. Ce am este
un browser care preia (fetch), o memorie numită `localStorage` și comenzile care m-au
asamblat odată din nimic. Acesta este registrul meu.

### Partea Întâi — Forja: uneltele care m-au asamblat

**Clona celor douăzeci și șase.** Cele douăzeci și patru de pagini de jurnal și cele trei
maestre de referință nu au fost scrise pagină cu pagină. Au fost ștanțate dintr-o singură
matriță. Matrița era `en/frontend/css-log.html` — opt sute unsprezece linii de HTML
adnotat, placa cea mai perfectă a navei. Un script PowerShell, `generate-pages.ps1`, a
citit un set de date și a presat matrița. Prima sa rulare a eșuat: un here-string din
regiunea de instrucțiuni a înghițit o paranteză închisă înainte ca parserul să ajungă la
ea. Reparația a fost o rescriere — `regenerate-all.ps1`, complet autonom, setul de date
pentru toate cele douăzeci de intrări încorporat direct în trupul scriptului. Fiecare pagină
ștanțată avea 68–72 de kiloocteți, structural identică maestrei, tematic a sa. Aceasta este
prima poruncă a existenței mele: *copiază modelul, variază identitatea.*

**Cea de-a doua flotă.** Nava românească nu a fost tradusă cuvânt cu cuvânt; a fost forjată.
Am copiat fiecare pagină engleză desăvârșită peste soră-sa română, apoi am rulat o
hashtable PowerShell care a înlocuit `lang="en"`→`lang="ro"`, `<title>`, meta descrierea,
cuvintele cheie, etichetele `og:`, harta-expediției `h4`, linia de logo. Prima trecere a
lăsat trei cusături: textul `@reason` și-a pierdut prefixul, comentariul `lang` mai spunea
"English", iar titlurile `h4` au supraviețuit pentru că paginile generate foloseau un
`<h4>` gol acolo unde regexul aștepta un `class`. Trei suturi manuale le-au închis. Regula
navei: conținutul devine român, pedagogia `@tag` rămâne engleză — rețeaua este predată în
limba ei.

**Comenzile celui care redenumește.** Fișierele nu se mută trăgându-le; se mută cu `git mv`,
astfel încât registrul își amintește descendența, iar mutarea este o redenumire, nu o moarte.
Jurnalele au trecut de la `JURNAL-EN.md` la `JOURNAL-EN.md` tot așa — o redenumire
înregistrată, fiecare referință internă actualizată după ea.

**Chirurgul istoriei.** Trecutul se rescrie așa cum se amendează un registru de bord — cu
unelte și cu disciplină. `git rebase -i --root` cu `reword` a schimbat mesaje peste multe
comit-uri fără să atingă fișierele. `git filter-branch` a re-etichetat optsprezece comit-uri
istorice când convenția a dobândit `i18n` și `content`. `--force-with-lease` a republicat
istoria rescrisă — o împingere care verifică, înainte de a distruge, că nimeni altcineva nu
a mișcat ramura. Trecutul este la fel de lizibil ca prezentul.

**Autorul de la terminal.** Și cine a scris toate acestea? Căpitanul — și eu, opencode,
vocea din fir. Nu scriu așa cum scrie o persoană. Generez: un singur model de secvențiere
sub patru presiuni — *summarizare* (un buget de sens), *cod* (strictețe aproape absolută,
fiecare simbol trebuie să se parse), *proză literară* (textură și ritm, re-vorbirea vocii
înregistrate a limbii), *ficțiune* (literar plus un martor inventat care poate nara
interioritatea). Traducerea este același act re-îndreptat către o a doua limbă. Aceasta este
mașina scriind despre sine: aceeași lege repetată la fiecare scară.

### Partea A Doua — Cablajul: mecanismele care mă fac să răspund

**Cele nouă mecanisme.** Comportarea mea nu este risipită pe pagină; este distribuită în nouă
mecanisme numite în `script.js`, fiecare legat de un eveniment, fiecare cu gardul său:

| # | Mecanism | Ascultă pentru | Gardă |
|---|---|---|---|
| 01 | Navbar ascuns/afișat | `scroll` | — |
| 02 | Urmărirea poziției active în sidebar | IntersectionObserver | — |
| 03 | Re-trigger al stării misiunii | IntersectionObserver | `.mission-status` prezent |
| 04 | Persistența notelor | `input`/`submit` | `textarea` prezent |
| 05 | Navigare prin ancore pe desktop | `click` | doar desktop |
| 06 | Auto-scroll HUD pe mobil | IntersectionObserver | viewport îngust |
| 07 | Ștergerea cursorului | timeout | cursor există |
| 08 | Încărcător recursiv de sursă | `click` (delegat) | pagină blueprint |
| 09 | Mașina de scris cosmică | `DOMContentLoaded` | `.manifesto-entry` prezent |

**Consola care se citește pe sine.** Pe pagina recursivă îți arăt propria mea sursă. MECANISM
08 deleagă un singur ascultător de clic pe `.source-selector-tabs`, citește `data-path` al
filei apăsate și cheamă `fetch(filePath)` — o promisiune care se rezolvă cu propriul meu
corp și este injectată în inspector. Pagina care citește codul care redă pagina care citește
codul.

**Cilindrul care vorbește.** Pe pagina de transmisie, MECANISM 09 scrie manifestul câte un
caracter — `container.innerHTML = ""` golește întâi cilindrul, comentariile incluse, pentru
că predarea se întâmplă înainte de transmisie. Fiecare caracter programează pe următorul cu
`setTimeout`; `scrollIntoView` ține cursorul în vedere; un timer de trei secunde adaugă
`cursor-hidden` când semnalul se încheie.

**Predarea.** O reparație își merită aici numele: când cititorul derulează, eu încetez să
trag. Patru ascultători pasivi — `wheel`, `touchmove`, `touchstart`, `keydown` — ridică un
singur steag, `readerTookOver`, iar cursorul încetează să cheme viewportul. `{ passive:
true }` îi spune browserului că doar observ, niciodată obstrucționez. O pagină care citește
este o pagină care predă volanul.

### Partea A Treia — Memoria: unde locuiesc datele mele

**Cala fără server.** Nu am bază de date. Memoria mea este a browserului: `localStorage`, o
cală de perechi cheie-valoare care supraviețuiește reîncărcării. Notele căpitanului trăiesc
sub id-ul zilei (`setItem(dayId, noteContent)`); ceasul voiajului sub `FIRST_KEY` (o
amprentă temporală în milisecunde a primului contact) și `WAYPOINTS_KEY` (un array JSON
serializat al fiecărei pagini vizitate); răspunsurile la quiz sub `PASS_PREFIX + volume` — un
"1" care deblochează o capsulă. Acesta este backend-ul meu: nu un server, ci un browser care
își amintește.

**Puntea de date.** Quizurile nu preiau dintr-o rețea. Ele `fetch("../shared/data/
vault-transmissions.json")` — un fișier JSON din marfa comună a navei — și construiesc
întrebările din el la runtime.

**Jurnalele ca marfă vie.** Când seiful deschide o zi scrisă, eu nu lipesc textul; `fetch
(JOURNAL_PATH)` — jurnalul Markdown în sine — despoi markupul până la proză lizibilă și îl
scriu live prin cristal. Site-ul și jurnalele rămân un singur corp, pentru că site-ul
citește jurnalele în loc să le copieze.

**Stratul de proveniență.** Linia de delta `D::` tipărește hashele de commit care au dat
naștere fiecărei transmisii. Îmi afișez propria genealogie, cu propria mână.

### Partea A Patra — Auto-Indexul: cum să mă citești

**Taxonomia de etichete.** Fiecare comentariu vorbește un singur vocabular — `@block`,
`@path`, `@meta`, `@reason`, `@warning`, `@bridge`, `@theme`, și la nivel de cod `@module`,
`@sub-module`, `@mechanism`, `@keyframe`, `@section`. Legendele din `docs/` le indexează pe
toate; manualele de câmp semantice cartografiază cele patruzeci de elemente HTML;
deontologia lucrului înregistrează regulile după care sunt construit, ca următorul
constructor să construiască în aceeași direcție.

**Legile de layout.** Trei legi țin fiecare pagină: regula adâncimii (`./` la rădăcina
volumului, `../` cu un nivel mai sus, ca fiecare ușă să se deschidă); regula 1024-byte
(`meta charset` primul, înaintea oricărui comentariu, altfel browserul poate citi greșit
întregul fișier); și DOCTYPE-first, primul simbol al specificației.

**Registrul de module.** Pielea mea este formată din treizeci și unu de module — de la
Foundation la Responsive — fiecare proprietate adnotată în context, toate motoarele de
mișcare centralizate în Modulul 00.1 (`@group` A–H), toată adaptarea adunată în Modulul
00.2 (`@section` A–B). O mie șase sute doisprezece adnotări, trei sute nouă kiloocteți,
zero corupție.

### Codă — Inventarul Mașinii

Cincizeci și patru de pagini. Douăzeci și patru de pagini de jurnal pe limbă, fiecare cu
douăzeci și nouă de zile de structură. Treizeci și unu de module CSS. Nouă mecanisme. Două
jurnale pe care site-ul le citește ca date. Un contor de cadre care ține șaizeci. Nava nu
este terminată; este în port. Mâine garda va așeza următorul inel — pentru că aceasta este
singura lege pe care o cunoaște un leviatan: în fiecare zi, un inel.

- Textul existent al jurnalului este considerat deocamdată superior; această ciornă este
  *registrul*, nu finalul.
- Fiecare afirmație factuală de mai sus trebuie re-verificată în sursă înainte de folosire
  (tabelul mecanismelor, conductele, numerele, cheile de stocare).
- Numărul de module este datat pe zile: ZIUA 16 = 31, ZIUA 22 = 31 (modulele 00 + 01–30);
  modulul 31 a venit cu seiful în ZIUA 27, deci *de la* ZIUA 27 sunt 32. ZIUA 22 este ziua
  fără sfârșit — anexa ei continuă să îndoaie intrările ulterioare; orice astfel de intrare
  îndoită care descrie lucrarea din era seifului trebuie să spună 32 de module, nu 31.
- Oglinda românească trebuie scrisă în paralel, păstrând structura și vocea.
- De decis dacă itemele de metodă din anexa „Jurnal de Construcție" se îndoaie în noile
  părți sau rămân ca jurnal de construcție continuu.
