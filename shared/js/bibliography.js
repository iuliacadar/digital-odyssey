//  ==========================================================================
//  D::0dy55ey — THE STITCHING MACHINE (shared): bibliography.js
//  Renders the Star Charts page (bibliography.html, en + ro) from the shared
//  JSON index. Lives in shared/js so that one engine serves BOTH languages —
//  the same single-source-of-truth principle it teaches about the data.
//  Tag legend: ../docs/legend-(en|ro).md
//  ==========================================================================
//
//  @pedagogy: FROM HAND-STITCHING TO THE STITCHING MACHINE
//    Until now, every row of every bibliography table was written by hand,
//    directly in the HTML file:
//
//      <tr>
//        <td>MDN Web Docs — HTML</td>
//        <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"
//               target="_blank" rel="noopener">Reference Only</a></td>
//        <td>Active</td>
//      </tr>
//
//    That worked, but it had three costs:
//      1. the same fact lived in four places: the `en` page, the `ro` page,
//         the resource library, and the JSON index;
//      2. every update had to be repeated four times by hand;
//      3. a row added in one language could silently be forgotten in the other.
//
//    The machine below changes the contract. The HTML files now hold ONLY the
//    skeleton — the shell, the <thead> labels, the empty <tbody>. The data
//    has a single source of truth: ../data/bibliography-links.json (this
//    shared file lives in shared/js/, the JSON one level up in shared/data/).
//    On every visit the page fetches that JSON and stitches every <tr>
//    itself, the way a loom turns one ball of thread into a whole sheet.
//
//    On purpose we still teach every tag the hand could not unlearn:
//    <table>, <thead>, <tbody>, <tr>, <th>, <td>, colspan, and the
//    <a target="_blank" rel="noopener"> link. The difference is where they
//    are born: on the old road they were typed once in the .html; on the new
//    road the machine creates them on the fly with document.createElement().
//  ==========================================================================

//  --------------------------------------------------------------------------
//  @block: LANGUAGE DETECTION
//  The <html lang="en"> (or lang="ro") attribute written in each HTML page
//  is the only thing that tells the machine which language to speak. This
//  is the same trick MECANISM 10-B of script.js uses. One engine, two
//  languages: the browser reads the attribute, the machine obeys.
//  --------------------------------------------------------------------------
const lang = (document.documentElement.lang || "en").toLowerCase();

//  --------------------------------------------------------------------------
//  @block: THE WORD BOX
//  Every phrase the user can see is kept here, in both languages, indexed by
//  the lang code read above. One word box, two collections. The data (titles,
//  URLs, annotations) stays in the JSON untouched — only the dashboard text
//  is translated at render time.
//  --------------------------------------------------------------------------
const strings = {
  en: {
    statusReadout: {
      active: "Active",
      "in progress": "In Progress",
      queued: "Queued", // the ship also keeps a waiting queue, honestly lit.
    },
    freeSuffix: { true: "(free)", false: "(subscription)" },
    empty: "No signals charted for this sector yet.",
    open: "Open",
    error: "ARCHIVE ERROR",
  },
  ro: {
    //  The Romanian words are the same three mission lights, spoken in the
    //  sister tongue. The user's phrase is carefully written here once —
    //  this box is the only place Romanian lives in this engine.
    statusReadout: {
      active: "Activ",
      "in progress": "În Progres",
      queued: "În așteptare", // the queue, honestly lit.
    },
    freeSuffix: { true: "(gratuit)", false: "(abonament)" },
    empty: "Niciun semnal încă desenat pentru acest sector.",
    open: "Deschide",
    error: "EROARE ARHIVĂ",
  },
};
const txt = strings[lang] || strings.en;

//  --------------------------------------------------------------------------
//  @block: SCOPE GUARD
//  Several pages load script.js, but only the two Star Charts pages contain
//  the shelves — <tbody data-shelf="..."> empty frames this machine fills.
//  If there is no shelf at all, we are not on a charts deck: stop silently.
//  --------------------------------------------------------------------------
const bibliographyShelves = document.querySelectorAll("[data-shelf]");

if (bibliographyShelves.length > 0) {
  //  --------------------------------------------------------------------------
  //  THE ONE SOURCE OF TRUTH — shared/data/bibliography-links.json.
  //  The machine lives in shared/js/, and the JSON lives in shared/data/.
  //  But fetch() resolves its path against the PAGE, not against this file.
  //  Both pages (en/ and ro/) sit exactly one folder below the project root,
  //  so the same relative path "../shared/data/bibliography-links.json"
  //  reaches the same file from either of them.
  //  --------------------------------------------------------------------------
  const CATALOG_PATH = "../shared/data/bibliography-links.json";

  //  --------------------------------------------------------------------------
  //  THE MACHINE (fetch and the Promise)
  //  --------------------------------------------------------------------------
  //  fetch() is the browser's built-in channel to request a file over the
  //  network. It returns a Promise — an "IOU" that guarantees to deliver a
  //  result somewhere in the future: either data or an error. Two .then()
  //  unwrap it:
  //    .then #1 → check response.ok (a 404 says "file not found");
  //    .then #2 → response.json() converts the file's text into a live object.
  //  Because the request runs in the background, every piece of DOM we build
  //  lives inside those .then() callbacks — the data has not arrived yet the
  //  instant the engine first starts. Same pattern as MECANISM 08 and 10.
  //  --------------------------------------------------------------------------
  fetch(CATALOG_PATH)
    .then((response) => {
      //  The network always answers — but a 404 is still "an answer". The
      //  `ok` flag is true only for good status codes (200–299). If not, we
      //  throw an error so the .catch() below can paint the failure.
      if (!response.ok) {
        throw new Error(`${txt.error}: ${CATALOG_PATH} (${response.status}).`);
      }
      return response.json();
    })
    .then((catalog) => {
      //  ------------------------------------------------------------------
      //  THE SEAM — render each shelf from its slice of the array
      //  ------------------------------------------------------------------
      //  catalog.sources is an array of {title, url, category, kind, status,
      //  free, annotation}. For each <tbody data-shelf> we keep only entries
      //  whose .category equals the value written in the HTML. That attribute
      //  is the seam: HTML says WHICH deck, JSON says WHAT goes on it.
      //  ------------------------------------------------------------------
      bibliographyShelves.forEach((shelf) => {
        const category = shelf.dataset.shelf;

        //  .filter() returns a NEW array with only the elements the predicate
        //  (the arrow function returning a boolean) accepted. The predicate
        //  here: "does this source belong to this shelf's category?"
        const shelfSources = catalog.sources.filter(
          (source) => source.category === category,
        );

        //  An empty deck must never silently sit — one honest row so the
        //  shelf keeps its promise of presence.
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
        //  CLUSTER STITCHES — reintroducing colspan
        //  ------------------------------------------------------------------
        //  The old hand-sewn charts had sub-headers like "— Core runtimes —"
        //  spanning three columns with colspan="3". That visual is too useful
        //  to lose in the upgrade, so the machine groups entries by their
        //  `kind` (course, book, docs, video, …) and draws a separator row
        //  each time the kind changes — the colspan lesson survives.
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

          //  BUILD <tr>
          const row = document.createElement("tr");

          //  CELL 1 — the SOURCE NAME
          const nameCell = document.createElement("td");
          //  @pedagogy: textContent vs innerHTML. textContent treats the
          //    string as PLAIN TEXT — the browser cannot execute it as
          //    markup. innerHTML would parse it as HTML, a classic security
          //    hole (XSS). Our own file would "work" either way, but the safe
          //    way is the lesson — textContent, always.
          nameCell.textContent = entry.title;
          //  The library annotation becomes a tooltip (title attribute-show
          //  on hover), so the crowd never sees a bare fishing title.
          nameCell.title = entry.annotation || entry.title;
          row.appendChild(nameCell);

          //  CELL 2 — the FREQUENCY (URL) link
          const linkCell = document.createElement("td");
          const link = document.createElement("a");
          //  href = the destination; target="_blank" opens a new tab so the
          //  crew stays on the charts; rel="noopener" is a safety fence that
          //  stops the opened page from reaching back through window.opener.
          link.href = entry.url;
          link.target = "_blank";
          link.rel = "noopener";
          link.textContent = `${txt.open} ${txt.freeSuffix[
            entry.free ? "true" : "false"
          ]}`;
          linkCell.appendChild(link);
          row.appendChild(linkCell);

          //  CELL 3 — the MISSION STATUS badge
          const statusCell = document.createElement("td");
          const label = txt.statusReadout[entry.status] || entry.status;
          statusCell.textContent = label;
          statusCell.classList.add(statusClassFor(label, txt));
          row.appendChild(statusCell);

          //  FINAL STITCH — mount the finished row into the <tbody> shelf.
          shelf.appendChild(row);
        }
      });
    })
    .catch((error) => {
      //  ------------------------------------------------------------------
      //  FAILURE DRILL — if the fetch failed, never leave blank decks.
      //  Offline, wrong path, deleted file: the crew reads exactly what went
      //  wrong in the ship's alarm pink.
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
//  THE TAILOR'S HELPER — one job, one name
//  The status CSS light classes are independent from the words: "status-active"
//  stays "status-active" in Romanian too. So this helper works only from the
//  translated label and returns the right class, whichever language the page
//  speaks. The maps above stay separate; the class names stay identical.
//  --------------------------------------------------------------------------
function statusClassFor(label, txt) {
  //  Queued / În așteptare borrows the amber of In Progress — both mean
  //  "in the works, just waiting its turn".
  if (label === txt.statusReadout.queued) return "status-in-progress";
  if (label === txt.statusReadout["in progress"]) return "status-in-progress";
  return "status-active"; // Active / Activ
}