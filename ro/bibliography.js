//  ==========================================================================
//     D::0dy55ey — MAȘINA DE CUSUT: bibliography.js
//     Desenează pagina Hărții Stelelor (bibliography.html) din indexul JSON
//     partajat. Trăiește în interiorul folderului ro/ pentru ca echipajul
//     român să-și păstreze propria copie complet comentată a mașinii — acest
//     fișier este o RESURSĂ DIDACTICĂ, nu un utilitar partajat. Codul este
//     identic cu cel al variantei en/; doar limba explicațiilor se schimbă.
//     Legenda etichetelor: ../docs/legend-ro.md
//  ==========================================================================
//
//  @block: DE CE EXISTĂ MAȘINA
//  @pedagogy: DE LA CUSUTUL MANUAL LA MAȘINA DE CUSUT
//    Până acum, fiecare rând din fiecare tabel al bibliografiei era scris de
//    mână, direct în fișierul HTML:
//
//      <tr>
//        <td>MDN Web Docs — HTML</td>
//        <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"
//               target="_blank" rel="noopener">Reference Only</a></td>
//        <td>Active</td>
//      </tr>
//
//    Asta a funcționat, dar avea trei costuri:
//      1. același fapt trăia în patru locuri: pagina `en`, pagina `ro`,
//         biblioteca de resurse și indexul JSON;
//      2. fiecare actualizare trebuia repetată de patru ori, de mână;
//      3. un rând adăugat într-o limbă putea fi uitat, în tăcere, în cealaltă.
//
//    Mașina de mai jos schimbă contractul. Fișierul HTML acum păstrează DOAR
//    scheletul — învelișul, etichetele <thead>, <tbody>-ul gol. Datele au o
//    singură sursă de adevăr: ../shared/data/bibliography-links.json (JSON-ul
//    trăiește în shared/data/; acest fișier trăiește în en/). La fiecare
//    vizită, pagina citește acel JSON și coase ea însăși fiecare <tr>, așa cum
//    un război transformă o singură șuviță de fir într-o întreagă pânză.
//
//    Intenționat, mai predăm încă fiecare etichetă de care mâna nu s-a putut
//    dezlipi: <table>, <thead>, <tbody>, <tr>, <th>, <td>, colspan și
//    link-ul <a target="_blank" rel="noopener">. Diferența este de unde se
//    nasc: pe drumul vechi erau tastele o dată în .html; pe drumul nou mașina
//    le creează pe loc cu document.createElement().
//  ==========================================================================

//  --------------------------------------------------------------------------
//  @block: DETECTAREA LIMBII
//  Atributul <html lang="ro"> scris în această pagină HTML este singurul lucru
//  care îi spune mașinii ce limbă vorbește. Este același truc ca MECANISMUL 10-B
//  din script.js. Un singur motor, două limbi: browserul citește atributul,
//  mașina ascultă.
//  --------------------------------------------------------------------------
//  document.documentElement este chiar eticheta <html>; .lang îi citește
//  atributul de limbă ("en" sau "ro"). Căderea || "en" protejează împotriva
//  gazdelor care servesc pagini fără atribut explicit. Mai întâi .toLowerCase(),
//  apoi o valoare implicită sigură și un caz uniform:
const lang = (document.documentElement.lang || "en").toLowerCase();

//  --------------------------------------------------------------------------
//  @block: CUTIA DE CUVINTE
//  Fiecare frază pe care utilizatorul o poate vedea se află aici, în ambele
//  limbi, indexat după codul de limbă citit mai sus. O cutie de cuvinte, două
//  colecții. Datele (titluri, URL-uri, adnotări) rămân în JSON neatins — doar
//  textul de jos al panoului este tradus la momentul desenării. Păstrând
//  AMBELE colecții în ambele fișiere înseamnă că variantele en/ și ro/ ale
//  acestei mașini rămân identice la nivel de cod — singura diferență între ele
//  este comentariul didactic.
//  --------------------------------------------------------------------------
const strings = {
  en: {
    //  Cele trei lumini de misiune, rostite în limba engleză. Fiecare cheie
    //  este cuvântul RAW de status pe care îl folosește JSON-ul; fiecare
    //  valoare este fraza pe care o citește vizitatorul în a treia coloană.
    statusReadout: {
      active: "Active",
      "in progress": "In Progress",
      queued: "Queued", // nava păstrează și o coadă de așteptare, cinstit luminată.
    },
    //  Cele patru feluri în care se ajunge la o resursă. Cheia este cuvântul
    //  RAW de acces pe care îl folosește JSON-ul; valoarea este sufixul scurt
    //  pe care îl citește vizitatorul pe linkul de frecvență: free nu cere
    //  plată, subscription se ascunde în spatele unei platforme plătite
    //  (Everand/Scribd), purchase costă un preț fix pe carte, iar borrow este
    //  împrumutul temporar al Archive.org (împrumuturi de 1 oră sau 14 zile).
    accessSuffix: {
      free: "(free)",
      subscription: "(subscription)",
      purchase: "(purchase)",
      borrow: "(borrow)",
    },
    empty: "No signals charted for this sector yet.",
    open: "Open", //  Eticheta-verb de pe linkul de frecvență.
    error: "ARCHIVE ERROR", //  Prefixul răsunător pe care antrenamentul de eșec îl vopsește în roz.
  },
  ro: {
    //  Cuvintele românești sunt aceleași trei lumini de misiune, rostite în
    //  limba soră. Fraza utilizatorului este scrisă aici o singură dată —
    //  această cutie este singurul loc în care româna trăiește în acest motor.
    statusReadout: {
      active: "Activ",
      "in progress": "În Progres",
      queued: "În așteptare", // coada, cinstit iluminată.
    },
    accessSuffix: {
      free: "(gratuit)",
      subscription: "(abonament)",
      purchase: "(cumpărare)",
      borrow: "(împrumut)",
    },
    empty: "Niciun semnal încă desenat pentru acest sector.",
    open: "Deschide",
    error: "EROARE ARHIVĂ",
  },
};
const txt = strings[lang] || strings.en; //  Alege cutia care se potrivește cu limba paginii.

//  --------------------------------------------------------------------------
//  @block: PROBĂ DE SCOP
//  Mai multe pagini încarcă script.js, dar doar cele două pagini de Hărți
//  Stele conțin rafurile — cadrele goale <tbody data-shelf="..."> pe care le
//  umple această mașină. Dacă nu există nicio raft, nu suntem pe puntea de
//  hartă: ne oprim în tăcere.
//  --------------------------------------------------------------------------
const bibliographyShelves = document.querySelectorAll("[data-shelf]");
//  @bridge: [data-shelf] este cusătura dintre HTML și acest motor. Fiecare
//  <tbody data-shelf="frontend"> gol din pagina Hărții Stelelor anunță o
//  punte; querySelectorAll le adună pe toate într-un singur NodeList — flota
//  de cadre pe care o va umple mașina de cusut.

if (bibliographyShelves.length > 0) {
  //  @guard: toată mașina trăiește în interiorul acestui if. Dacă pagina are
  //  zero rafturi (orice pagină care nu este puntea Hărții Stelelor), motorul
  //  rămâne tăcut — fără fetch, fără erori, fără muncă. Garda oprește mașina
  //  înainte chiar să pornească, la fel ca întoarcerea timpurie din MECANISMUL 08.
  //  --------------------------------------------------------------------------
  //  UNA, SINGURA SURSĂ DE ADEVĂR — shared/data/bibliography-links.json.
  //  Mașina trăiește în en/ (sau ro/), iar JSON-ul în shared/data/.
  //  Dar fetch() își rezolvă calea față de PAGINĂ, nu față de acest fișier.
  //  Ambele pagini (en/ și ro/) stau exact cu un nivel mai jos de rădăcină,
  //  deci aceeași cale relativă "../shared/data/bibliography-links.json"
  //  ajunge la același fișier din oricare dintre ele.
  //  --------------------------------------------------------------------------
  const CATALOG_PATH = "../shared/data/bibliography-links.json";
  //  @bridge: calea este scrisă relativ la PAGINĂ (bibliography.html), nu la
  //  acest fișier script. Atât en/, cât și ro/ stau cu un nivel mai jos de
  //  rădăcina proiectului, deci o singură constantă ajunge la același JSON
  //  din oricare dintre limbi.

  //  --------------------------------------------------------------------------
  //  MAȘINA (fetch și Promise)
  //  --------------------------------------------------------------------------
  //  fetch() este canalul nativ al browserului pentru a solicita un fișier
  //  prin rețea. Întoarce un Promise — o "IOU" care garantează să livreze un
  //  rezultat undeva în viitor: fie date, fie o eroare. Două .then() îl
  //  dezvăluie:
  //    .then #1 → verifică response.ok (un 404 spune "fișierul nu e găsit");
  //    .then #2 → response.json() transformă textul fișierului într-un obiect viu.
  //  Fiindcă cererea rulează în fundal, fiecare piesă de DOM pe care o
  //  construim trăiește în interiorul acestor callbacks .then() — datele nu
  //  au ajuns încă la momentul la care motorul pornește prima dată. Același
  //  tipar ca la MECANISMUL 08 și 10.
  //  --------------------------------------------------------------------------
  fetch(CATALOG_PATH)
    //  @event: fetch declanșează o cerere HTTP către catalog, prin rețea.
    //  Întoarce un Promise — o IOU care se rezolvă mai târziu cu un Response.
    .then((response) => {
      //  Rețeaua răspunde întotdeauna — dar un 404 tot "răspuns" este. Steagul
      //  `ok` este adevărat doar pentru codurile bune (200–299). Dacă nu,
      //  aruncăm o eroare ca .catch()-ul de mai jos să poată vopsi eșecul.
      if (!response.ok) {
        //  @guard: statusurile rele nu sunt date. Aruncarea aici trimite
        //  lanțul direct la .catch(), sărind peste fiecare .then() ulterior.
        throw new Error(`${txt.error}: ${CATALOG_PATH} (${response.status}).`);
        //  @pedagogy: throw în interiorul unui Promise este o anulare
        //  intenționată — mesajul de eroare coboară până la cel mai apropiat
        //  handler .catch().
      }
      return response.json();
      //  @logic: response.json() parsează textul brut al corpului într-un
      //  obiect JS real. Întoarce UN ALT Promise, deci următorul .then()
      //  primește catalogul proaspăt parsat ca argument.
    })
    .then((catalog) => {
      //  catalog este acum obiectul VIU parsat din fișierul JSON — deține un
      //  array .sources. Inima mașinii trăiește aici.
      bibliographyShelves.forEach((shelf) => {
        //  @pedagogy: forEach parcurge NodeList-ul de rafturi și rulează
        //  funcția o dată per punte, dându-ne acel raft ca argument.
        const category = shelf.dataset.shelf;
        //  @bridge: shelf.dataset citește atributele data-* de pe element.
        //  .shelf ne dă exact stringul scris în HTML — "frontend",
        //  "backend-sector", … — parola care dă numele acestei punți.

        //  @logic: .filter() vizitează fiecare sursă din catalog și păstrează
        //  doar pe cele al căror .category este egal cu numele raftului.
        //  Predicatul-arrow întoarce un boolean — true ține, false aruncă.
        //  Catalogul în sine nu este niciodată modificat; shelfSources este o
        //  punte nouă, tăiată proaspăt.
        const shelfSources = catalog.sources.filter(
          (source) => source.category === category,
        );

        //  O punte goală nu trebuie să stea niciodată tăcut — un rând onest
        //  ca raftul să-și păstreze promisiunea de prezență.
        //  @guard: o secțiune care există în HTML dar nu are surse în JSON
        //  este tot o punte — merită un rând, nu gol.
        if (shelfSources.length === 0) {
          const ghost = document.createElement("tr"); //  Un rând singuratic, născut în memorie.
          const cell = document.createElement("td"); //  O celulă care să țină fraza.
          cell.textContent = txt.empty; //  @line: textContent = text simplu, niciodată marcaj.
          cell.colSpan = 3; //  @pedagogy: întinde această singură celulă peste toate cele trei coloane.
          ghost.appendChild(cell); //  Montează celula în rând.
          shelf.appendChild(ghost); //  Montează rândul în raftul gol.
          return; //  @guard: fără surse, fără rânduri — această punte e gata; mergi mai departe.
        }

        //  ------------------------------------------------------------------
        //  ADUNAREA FLOTILEI — o singură sortare pentru ca rândurile de grup
        //  să se citească drept secțiuni
        //  ------------------------------------------------------------------
        //  JSON-ul brut livrează sursele amestecate (o carte, apoi un curs,
        //  apoi iar o carte). Lăsat așa, separatorul „— kind —" ar declanșa la
        //  fiecare schimbare de tip și ar împrăștia fragmente de un rând pe
        //  raft. Sortarea după kind — apoi alfabetic după titlu în cadrul
        //  fiecărui kind — face ca fiecare separator să deschidă un bloc real,
        //  continuu, într-o singură paradă stabilă împărtășită de ambele
        //  limbi: cursurile conduc, apoi cărțile, ghidurile, documentația,
        //  eseurile, comunitățile, videourile, jocurile și orice bate JSON-ul
        //  în continuare.
        const KIND_PARADE = [
          //  @state: protocolul paradei. Cu cât indexul e mai mic, cu atât o
          //  sursă de acel kind apare mai devreme pe raft. Kind-urile noi cad
          //  la coadă (index -1 → coadă) și se sortează între ele după titlu.
          "course",
          "book",
          "guide",
          "docs",
          "essay",
          "community",
          "video",
          "game",
        ];
        shelfSources.sort((a, b) => {
          //  @logic: Array.prototype.sort compară perechi și vrea un număr:
          //  negativ → a merge primul; pozitiv → b merge primul; zero → cum e.
          const tail = KIND_PARADE.length; //  Rangul santinelă pentru kind-urile lipsă din paradă.
          const rankA = KIND_PARADE.indexOf(a.kind); //  Indexul de paradă al lui A (sau -1 dacă necunoscut).
          const rankB = KIND_PARADE.indexOf(b.kind); //  Indexul de paradă al lui B (sau -1 dacă necunoscut).
          const sorted = (rankA === -1 ? tail : rankA) - (rankB === -1 ? tail : rankB);
          //  @line: operatorul ternar mapează -1 pe coadă ca întârziații să
          //  meargă ultimii, apoi diferența ne spune care din pereche merge
          //  primul.
          return sorted || a.title.localeCompare(b.title);
          //  @logic: dacă kind-urile sunt egale (același rang, diferență 0),
          //  cădem pe ordinea alfabetică după titlu — blocurile cu același
          //  kind rămân ordonate.
        });

        //  ------------------------------------------------------------------
        //  CUSĂTURI PE GRUPE — reintroducerea colspan
        //  ------------------------------------------------------------------
        //  Graficele vechi făcute de mână aveau sub-întâlniri precum
        //  "— Core runtimes —" care se întindeau peste trei coloane cu
        //  colspan="3". Acest vizual e prea util ca să-l pierdem în upgrade,
        //  așa că mașina grupează intrările după `kind` (course, book, docs,
        //  video, …) și trasează un rând-separator de fiecare dată când se
        //  schimbă kind-ul — lecția colspan supraviețuiește.
        let previousKind = null;
        //  @state: reține ultimul kind etichetat, ca un rând-divizor să fie
        //  desenat doar când intrarea curentă deschide un bloc NOU de kind.

        for (const entry of shelfSources) {
          //  @logic: for...of parcurge puntea sortată, o sursă la un moment dat.
          if (entry.kind !== previousKind) {
            //  @line: un kind diferit față de ultimul rând înseamnă că un nou
            //  grup începe aici → emitem banera-separator „— kind —".
            const clusterRow = document.createElement("tr"); //  Rândul-banner.
            const clusterCell = document.createElement("td"); //  Celula-banner.
            clusterCell.className = "cluster-label"; //  @bridge: stilizat prin CSS (eticheta divizor cyan-gri).
            clusterCell.colSpan = 3; //  @pedagogy: colspan="3" lărgește o celulă peste toate coloanele.
            clusterCell.textContent = `— ${entry.kind} —`; //  de ex. "— book —".
            clusterRow.appendChild(clusterCell); //  Celula în rând.
            shelf.appendChild(clusterRow); //  Rândul în raft.
            previousKind = entry.kind; //  Împrospătează santinela pentru următoarele intrări.
          }

          //  CONSTRUCȚIA <tr> — un rând de date per sursă.
          const row = document.createElement("tr"); //  @line: rândul se naște gol, celulă cu celulă.

          //  CELULA 1 — numele sursei
          const nameCell = document.createElement("td"); //  Celula titlului.
          //  @pedagogy: textContent vs innerHTML. textContent tratează stringul
          //    ca TEXT SIMPLU — browserul nu-l poate executa ca marcaj.
          //    innerHTML l-ar interpreta ca HTML, o gaură clasică de securitate
          //    (XSS). Fișierul nostru ar "funcționa" oricum, dar calea sigură
          //    este lecția — textContent, mereu.
          nameCell.textContent = entry.title; //  Titlul ca text simplu în celulă.
          //  Adnotația bibliotecii devine un tooltip (atribut title afișat la
          //  hover), ca echipajul să nu vadă niciodată un titlu de listare gol.
          nameCell.title = entry.annotation || entry.title; //  Cădere: din nou titlul, dacă nu există adnotație.
          row.appendChild(nameCell); //  Montează celula 1.

          //  CELULA 2 — linkul de frecvență (URL)
          const linkCell = document.createElement("td"); //  Celula linkului.
          const link = document.createElement("a"); //  @pedagogy: <a> este eticheta de ancoră.
          //  href = destinația; target="_blank" deschide un tab nou ca
          //  echipajul să rămână pe hărți; rel="noopener" este un gard de
          //  siguranță care împiedică pagina deschisă să se întindă înapoi
          //  prin window.opener.
          link.href = entry.url; //  Încotro pointează linkul.
          link.target = "_blank"; //  Tab nou: pagina de hărți rămâne în spate.
          link.rel = "noopener"; //  @warning: noopener blochează tab-nabbing.
          link.textContent = `${txt.open} ${txt.accessSuffix[
            entry.access
          ]}`; //  @line: "Open (free)" / "Open (subscription)" / "Open (purchase)" / "Open (borrow)" în limba paginii.
          linkCell.appendChild(link); //  Ancoră în celula ei.
          row.appendChild(linkCell); //  Montează celula 2.

          //  CELULA 3 — insignă de status de misiune
          const statusCell = document.createElement("td"); //  Celula de status.
          const label = txt.statusReadout[entry.status] || entry.status;
          //  @line: tradu cuvântul RAW de status prin cutia de cuvinte; dacă
          //  un status lipsește din hartă, arată cuvântul brut așa cum e.
          statusCell.textContent = label; //  Eticheta de status ca text simplu.
          statusCell.classList.add(statusClassFor(label, txt));
          //  @bridge: statusClassFor întoarce clasa CSS de lumină
          //  ("status-active" / "status-in-progress") care colorează insigna
          //  în chihlimbar sau mentă.
          row.appendChild(statusCell); //  Montează celula 3.

          //  CUSĂTURA FINALĂ — montăm rândul finit în raftul <tbody>.
          shelf.appendChild(row); //  Rândul complet aterizează pe puntea lui.
        }
      });
    })
    .then(() => {
      //  ------------------------------------------------------------------
      //  RE-AJUSTAREA ATERIZĂRII — vizitatorul poate ajunge printr-un hash de
      //  subsol precum #backend-refs. Browser-ul țintește acea ancoră ÎN TIMP CE
      //  rafturile sunt încă cadre goale; mașina cusește apoi rânduri în
      //  fiecare raft aflat deasupra țintei, pagina crește, iar secțiunea
      //  dorită este împinsă în jos, departe de locul unde a aterizat inițial
      //  browser-ul. Așa că, odată ce fiecare raft este plin, țintește încă o
      //  dată poziția reală. (Frontend-ul părea să „aterizeze" doar pentru că
      //  este primul tabel — nimic deasupra lui nu se mută.)
      //  CSS-ul scroll-margin-top pe aceste secțiuni eliberează bara fixă de
      //  navigație.
      //  ------------------------------------------------------------------
      if (window.location.hash) {
        //  @guard: doar când URL-ul poartă o ancoră (#backend-refs).
        const landing = document.getElementById(window.location.hash.slice(1));
        //  @line: slice(1) taie "#"-ul din față, deci "#backend-refs" devine
        //  id-ul "backend-refs"; getElementById găsește acea secțiune.
        if (landing) {
          landing.scrollIntoView();
          //  @line: scrollIntoView alunecă cu viewport-ul spre secțiune;
          //  scroll-margin-top din CSS dă barei fixe de navigație spațiu să
          //  respire.
        }
      }
    })
    .catch((error) => {
      //  ------------------------------------------------------------------
      //  ANTRENAMENTUL DE EȘEC — dacă fetch-ul a eșuat, nu lăsa niciodată
      //  punți goale. Offline, cale greșită, fișier șters: echipajul citește
      //  exact ce a eșuat, în rozul de alarmă al navei.
      //  ------------------------------------------------------------------
      const errorRow = document.createElement("tr"); //  Șablonul unui rând de eroare.
      const errorCell = document.createElement("td"); //  Singura lui celulă lată.
      errorCell.colSpan = 3; //  Întinde-le peste toate cele trei coloane, ca rândurile de grup.
      errorCell.textContent = `[${txt.error}]: ${error.message}`;
      //  @line: numele eșecului + mesajul browserului, citite simplu.
      errorCell.style.color = "var(--nebula-pink)"; //  @bridge: tokenul roz-alarmă din CSS.
      errorRow.appendChild(errorCell); //  Celula în rând.

      bibliographyShelves.forEach((shelf) => {
        shelf.innerHTML = "";
        //  @line: curăță orice rânduri pe jumătate cusute pe care mașina le-ar
        //  fi lăsat în urmă.
        shelf.appendChild(errorRow.cloneNode(true));
        //  @logic: cloneNode(true) copiază întregul rând de eroare per raft,
        //  deci fiecare punte arată aceeași alarmă fără să o re-creeze de
        //  fiecare dată.
      });
    });
}

//  --------------------------------------------------------------------------
//  ASISTENTUL CROITORULUI — o treabă, un nume
//  Clasele CSS de lumină de status sunt independente de cuvinte: "status-active"
//  rămâne "status-active" și în română. Deci acest ajutor lucrează doar cu
//  eticheta tradusă și întoarce clasa corectă, oricare ar fi limba paginii.
//  Hărțile de mai sus rămân separate; numele claselor rămân identice.
//  --------------------------------------------------------------------------
function statusClassFor(label, txt) {
  //  Queued / În așteptare împrumută chihlimbarul lui În Progres — ambele
  //  înseamnă "în lucru, doar își așteaptă rândul".
  if (label === txt.statusReadout.queued) return "status-in-progress";
  //  @logic: fraza queued trăiește la txt.statusReadout.queued; dacă eticheta
  //  spune exact asta, câștigă lumina chihlimbarie "in progress".
  if (label === txt.statusReadout["in progress"]) return "status-in-progress";
  //  @logic: fraza in-progress însăși primește aceeași lumină chihlimbarie.
  return "status-active"; // Active / Activ — orice alt status strălucește mentă.
}