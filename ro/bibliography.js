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
    statusReadout: {
      active: "Active",
      "in progress": "In Progress",
      queued: "Queued", // nava păstrează și o coadă de așteptare, cinstit luminată.
    },
    freeSuffix: { true: "(free)", false: "(subscription)" },
    empty: "No signals charted for this sector yet.",
    open: "Open",
    error: "ARCHIVE ERROR",
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
    freeSuffix: { true: "(gratuit)", false: "(abonament)" },
    empty: "Niciun semnal încă desenat pentru acest sector.",
    open: "Deschide",
    error: "EROARE ARHIVĂ",
  },
};
const txt = strings[lang] || strings.en;

//  --------------------------------------------------------------------------
//  @block: PROBĂ DE SCOP
//  Mai multe pagini încarcă script.js, dar doar cele două pagini de Hărți
//  Stele conțin rafurile — cadrele goale <tbody data-shelf="..."> pe care le
//  umple această mașină. Dacă nu există nicio raft, nu suntem pe puntea de
//  hartă: ne oprim în tăcere.
//  --------------------------------------------------------------------------
const bibliographyShelves = document.querySelectorAll("[data-shelf]");

if (bibliographyShelves.length > 0) {
  //  --------------------------------------------------------------------------
  //  UNA, SINGURA SURSĂ DE ADEVĂR — shared/data/bibliography-links.json.
  //  Mașina trăiește în en/ (sau ro/), iar JSON-ul în shared/data/.
  //  Dar fetch() își rezolvă calea față de PAGINĂ, nu față de acest fișier.
  //  Ambele pagini (en/ și ro/) stau exact cu un nivel mai jos de rădăcină,
  //  deci aceeași cale relativă "../shared/data/bibliography-links.json"
  //  ajunge la același fișier din oricare dintre ele.
  //  --------------------------------------------------------------------------
  const CATALOG_PATH = "../shared/data/bibliography-links.json";

  //  --------------------------------------------------------------------------
  //  MAȘINA (fetch și Promise)
  //  --------------------------------------------------------------------------
  //  fetch() este canalul nativ al browserului pentru a solicita un fișier prin rețea.
  //  Întoarce un Promise — o "IOU" care garantează să livreze un rezultat
  //  undeva în viitor: fie date, fie o eroare. Două .then() îl
  //  dezvăluie:
  //    .then #1 → verifică response.ok (un 404 spune "fișierul nu e găsit");
  //    .then #2 → response.json() transformă textul fișierului într-un obiect viu.
  //  Fiindcă cererea rulează în fundal, fiecare piesă de DOM pe care o construim
  //  trăiește în interiorul acestor callbacks .then() — datele nu au ajuns încă
  //  la momentul la care motorul pornește prima dată. Același tipar ca la
  //  MECANISMUL 08 și 10.
  //  --------------------------------------------------------------------------
  fetch(CATALOG_PATH)
    .then((response) => {
      //  Rețeaua răspunde întotdeauna — dar un 404 tot "răspuns" este. Steagul
      //  `ok` este adevărat doar pentru codurile bune (200–299). Dacă nu, aruncăm
      //  erroare ca .catch()-ul de mai jos să poată vopsi eroarea.
      if (!response.ok) {
        throw new Error(`${txt.error}: ${CATALOG_PATH} (${response.status}).`);
      }
      return response.json();
    })
    .then((catalog) => {
      //  ------------------------------------------------------------------
      //  CUSĂTURA — fiecare raft din felia sa de matrice
      //  ------------------------------------------------------------------
      //  catalog.sources este un array de {title, url, category, kind, status,
      //  free, annotation}. Pentru fiecare <tbody data-shelf> reținem doar
      //  intrările a căror .category este egală cu valoarea scrisă în HTML. Acel
      //  atributul este cusătura: HTML spune CARE punte, JSON spune CE urcă.
      //  ------------------------------------------------------------------
      bibliographyShelves.forEach((shelf) => {
        const category = shelf.dataset.shelf;

        //  .filter() întoarce un array NOU doar cu elementele pe care predicatul
        //  (arrow-ul care întoarce un boolean) le-a acceptat. Predicatul de aici:
        //  "aparține această sursă categoriei raftului?"
        const shelfSources = catalog.sources.filter(
          (source) => source.category === category,
        );

        //  O punte goală nu trebuie să stea niciodată tăcut — un rând onest ca
        //  raftul să-și păstreze promisiunea de prezență.
        if (shelfSources.length === 0) {
          const ghost = document.createElement("tr");
          const cell = document.createElement("td");
          cell.textContent = txt.empty;
          cell.colSpan = 3;
          ghost.appendChild(cell);
          shelf.appendChild(ghost);
          return;
        }

        //  ------------------------------------------------------------------
        //  CUSĂTURI PE GRUPE — reintroducerea colspan
        //  ------------------------------------------------------------------
        //  Graficele vechi făcute de mână aveau sub-întâlniri de genul de genul
        //  "— Core runtimes —" care se întindeau peste trei coloane cu colspan="3".
        //  Acest vizual e prea util ca să-l pierdem în upgrade, așa că mașina
        //  grupează intrările după `kind` (course, book, docs, video, …) și
        //  trasează un rând-separator de fiecare dată când se schimbă — lecția
        //  colspan supraviețuiește.
        let previousKind = null;

        for (const entry of shelfSources) {
          if (entry.kind !== previousKind) {
            const clusterRow = document.createElement("tr");
            const clusterCell = document.createElement("td");
            clusterCell.className = "cluster-label";
            clusterCell.colSpan = 3;
            clusterCell.textContent = `— ${entry.kind} —`;
            clusterRow.appendChild(clusterCell);
            shelf.appendChild(clusterRow);
            previousKind = entry.kind;
          }

          //  CONSTRUCȚIA <tr>
          const row = document.createElement("tr");

          //  CELULA 1 — numele sursei
          const nameCell = document.createElement("td");
          //  @pedagogy: textContent vs innerHTML. textContent tratează stringul ca
          //    TEXT SIMPLU — browserul nu-l poate executa ca marcaj. innerHTML l-ar
          //    interpreta ca HTML, o gaură clasică de securitate (XSS). Ar funcționa
          //    funcționa oricum, dar calea sigură este lecția — textContent, mereu.
          nameCell.textContent = entry.title;
          //  Adnotația bibliotecii devine un tooltip (atribut title afișat la hover),
          //  ca echipajul să nu vadă niciodată doar un titlu de listare gol.
          nameCell.title = entry.annotation || entry.title;
          row.appendChild(nameCell);

          //  CELULA 2 — linkul de frecvență (URL)
          const linkCell = document.createElement("td");
          const link = document.createElement("a");
          //  href = destinația; target="_blank" deschide un tab nou ca echipajul
          //  să rămână pe hărți; rel="noopener" este un gard de siguranță care
          //  împiedică pagina deschisă să se întindă înapoi prin window.opener.
          link.href = entry.url;
          link.target = "_blank";
          link.rel = "noopener";
          link.textContent = `${txt.open} ${txt.freeSuffix[
            entry.free ? "true" : "false"
          ]}`;
          linkCell.appendChild(link);
          row.appendChild(linkCell);

          //  CELULA 3 — insignă de status de misiune
          const statusCell = document.createElement("td");
          const label = txt.statusReadout[entry.status] || entry.status;
          statusCell.textContent = label;
          statusCell.classList.add(statusClassFor(label, txt));
          row.appendChild(statusCell);

          //  CUSĂTURA FINALĂ — montăm rândul finit în raftul <tbody>.
          shelf.appendChild(row);
        }
      });
    })
    .catch((error) => {
      //  ------------------------------------------------------------------
      //  ALEARTA DE DRILL — dacă fetch-ul a eșuat, nu lăsa niciodată punți goale.
      //  Offline, cale greșită, fișier șters: echipajul citește exact ce a
      //  eșu tun, în rozul de alarmă al navei.
      //  ------------------------------------------------------------------
      const errorRow = document.createElement("tr");
      const errorCell = document.createElement("td");
      errorCell.colSpan = 3;
      errorCell.textContent = `[${txt.error}]: ${error.message}`;
      errorCell.style.color = "var(--nebula-pink)";
      errorRow.appendChild(errorCell);

      bibliographyShelves.forEach((shelf) => {
        shelf.innerHTML = "";
        shelf.appendChild(errorRow.cloneNode(true));
      });
    });
}

//  --------------------------------------------------------------------------
//  ASISTENTUL CROITORULUI — o treabă, un nume
//  Clasele CSS de lumină de status sunt independente de cuvinte: "status-active"
//  rămâne "status-active" și în română. Deci acest ajutor lucrează doar cu
//  eticheta tradusă și întoarce clasa corectă, oricare ar fi limba. Hărțile de mai
//  sus rămân aproape; numele claselor rămân identice.
//  --------------------------------------------------------------------------
function statusClassFor(label, txt) {
  //  Queued / În așteptare împrumută chihlimbarul lui în Progres — ambele
  //  înseamnă "în lucru, doar își așteaptă rândul".
  if (label === txt.statusReadout.queued) return "status-in-progress";
  if (label === txt.statusReadout["in progress"]) return "status-in-progress";
  return "status-active"; // Active / Activ
}