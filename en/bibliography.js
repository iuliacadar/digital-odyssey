//  ==========================================================================
//     D::0dy55ey — THE STITCHING MACHINE: bibliography.js
//     Renders the Star Charts page (bibliography.html) from the shared JSON
//     index. Lives inside the en/ folder so that the English crew keeps its
//     own fully-commented copy of the machine — this file is a didactic
//     resource, not a shared utility. The code is identical to the ro/
//     sibling; only the language of the explanations changes.
//     Tag legend: ../docs/legend-en.md
//  ==========================================================================
//
//  @block: WHY THE MACHINE EXISTS
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
//    The machine below changes the contract. The HTML file now holds ONLY the
//    skeleton — the shell, the <thead> labels, the empty <tbody>. The data
//    has a single source of truth: ../shared/data/bibliography-links.json
//    (the JSON lives in shared/data/; this file lives in en/). On every visit
//    the page fetches that JSON and stitches every <tr> itself, the way a
//    loom turns one ball of thread into a whole sheet.
//
//    On purpose we still teach every tag the hand could not unlearn:
//    <table>, <thead>, <tbody>, <tr>, <th>, <td>, colspan, and the
//    <a target="_blank" rel="noopener"> link. The difference is where they
//    are born: on the old road they were typed once in the .html; on the new
//    road the machine creates them on the fly with document.createElement().
//  ==========================================================================

//  --------------------------------------------------------------------------
//  @block: LANGUAGE DETECTION
//  The <html lang="en"> attribute written in this HTML page is the only thing
//  that tells the machine which language to speak. This is the same trick
//  MECANISM 10-B of script.js uses. One engine, two languages: the browser
//  reads the attribute, the machine obeys.
//  --------------------------------------------------------------------------
//  document.documentElement is the <html> tag itself; .lang reads its
//  language attribute ("en" or "ro"). The fallback || "en" protects against
//  hosts that serve pages without an explicit attribute. .toLowerCase() first,
//  then a safe default and a uniform case:
const lang = (document.documentElement.lang || "en").toLowerCase();

//  --------------------------------------------------------------------------
//  @block: THE WORD BOX
//  Every phrase the user can see is kept here, in both languages, indexed by
//  the lang code read above. One word box, two collections. The data (titles,
//  URLs, annotations) stays in the JSON untouched — only the dashboard text
//  is translated at render time. Keeping BOTH collections in both files means
//  the en/ and ro/ copies of this machine stay byte-identical in code — the
//  only thing that differs between them is the didactic commentary.
//  --------------------------------------------------------------------------
const strings = {
  en: {
    //  The three mission lights, spoken in the English tongue. Each key is
    //  the RAW status word the JSON uses; each value is the sentence a
    //  visitor reads in the third table column.
    statusReadout: {
      active: "Active",
      "in progress": "In Progress",
      queued: "Queued", // the ship also keeps a waiting queue, honestly lit.
    },
    //  The four ways a resource can be reached. The key is the RAW access
    //  word the JSON uses; the value is the short suffix a visitor reads on
    //  the frequency link: free needs no payment, subscription hides behind a
    //  paid platform (Everand/Scribd), purchase costs a fixed price per book,
    //  and borrow is Archive.org's temporary lending (1-hour or 14-day loans).
    accessSuffix: {
      free: "(free)",
      subscription: "(subscription)",
      purchase: "(purchase)",
      borrow: "(borrow)",
    },
    empty: "No signals charted for this sector yet.",
    open: "Open", //  The verb label on the frequency link.
    error: "ARCHIVE ERROR", //  The loud prefix the failure drill paints in pink.
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
const txt = strings[lang] || strings.en; //  Pick the box that matches the page's tongue.

//  --------------------------------------------------------------------------
//  @block: SCOPE GUARD
//  Several pages load script.js, but only the two Star Charts pages contain
//  the shelves — <tbody data-shelf="..."> empty frames this machine fills.
//  If there is no shelf at all, we are not on a charts deck: stop silently.
//  --------------------------------------------------------------------------
const bibliographyShelves = document.querySelectorAll("[data-shelf]");
//  @bridge: [data-shelf] is the seam between HTML and this engine. Every
//  empty <tbody data-shelf="frontend"> in the Star Charts page announces a
//  deck; querySelectorAll rounds up all of them into one NodeList — the
//  fleet of frames the stitching machine will fill.

if (bibliographyShelves.length > 0) {
  //  @guard: the whole machine lives inside this if. If the page has zero
  //  shelves (any page that is not the Star Charts deck), the engine stays
  //  silent — no fetch, no errors, no work. The guard stops the machine
  //  before it even starts, same as MECANISM 08's early return.
  //  --------------------------------------------------------------------------
  //  THE ONE SOURCE OF TRUTH — shared/data/bibliography-links.json.
  //  The machine lives in en/ (or ro/), and the JSON lives in shared/data/.
  //  But fetch() resolves its path against the PAGE, not against this file.
  //  Both pages (en/ and ro/) sit exactly one folder below the project root,
  //  so the same relative path "../shared/data/bibliography-links.json"
  //  reaches the same file from either of them.
  //  --------------------------------------------------------------------------
  const CATALOG_PATH = "../shared/data/bibliography-links.json";
  //  @bridge: the path is written relative to the PAGE (bibliography.html),
  //  not to this script file. Both en/ and ro/ sit one folder below the
  //  project root, so one constant reaches the same JSON from either tongue.

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
    //  @event: fetch fires an HTTP request to the catalogue over the network.
    //  It returns a Promise — an IOU that resolves later with a Response.
    .then((response) => {
      //  The network always answers — but a 404 is still "an answer". The
      //  `ok` flag is true only for good status codes (200–299). If not, we
      //  throw an error so the .catch() below can paint the failure.
      if (!response.ok) {
        //  @guard: bad statuses are not data. Throwing here jumps the chain
        //  straight to .catch(), skipping every later .then().
        throw new Error(`${txt.error}: ${CATALOG_PATH} (${response.status}).`);
        //  @pedagogy: throw inside a Promise is an intentional abort — the
        //  error message travels down to the nearest .catch() handler.
      }
      return response.json();
      //  @logic: response.json() parses the raw body text into a real JS
      //  object. It returns ANOTHER Promise, so the next .then() receives
      //  the freshly-parsed catalogue as its argument.
    })
    .then((catalog) => {
      //  catalog is now the LIVE object parsed from the JSON file — it owns
      //  a .sources array. The heart of the machine lives here.
      bibliographyShelves.forEach((shelf) => {
        //  @pedagogy: forEach walks the NodeList of shelves and runs the
        //  function once per deck, handing us that shelf as an argument.
        const category = shelf.dataset.shelf;
        //  @bridge: shelf.dataset reads data-* attributes from the element.
        //  .shelf gives us the exact string written in the HTML — "frontend",
        //  "backend-sector", … — the password that names this deck.

        //  @logic: .filter() visits every source in the catalogue and keeps
        //  only those whose .category equals this shelf's name. The predicate
        //  arrow returns a boolean — true keeps, false discards. The catalogue
        //  itself is never mutated; shelfSources is a fresh, sliced deck.
        const shelfSources = catalog.sources.filter(
          (source) => source.category === category,
        );

        //  An empty deck must never silently sit — one honest row so the
        //  shelf keeps its promise of presence.
        //  @guard: a section that exists in the HTML but has no sources in
        //  the JSON is still a deck — it deserves a row, not blankness.
        if (shelfSources.length === 0) {
          const ghost = document.createElement("tr"); //  A lone row, born in memory.
          const cell = document.createElement("td"); //  One cell to hold the sentence.
          cell.textContent = txt.empty; //  @line: textContent = plain text, never markup.
          cell.colSpan = 3; //  @pedagogy: stretch this single cell across all three columns.
          ghost.appendChild(cell); //  Mount the cell inside the row.
          shelf.appendChild(ghost); //  Mount the row inside the empty shelf.
          return; //  @guard: no sources, no rows — this deck is done; move on.
        }

        //  ------------------------------------------------------------------
        //  GATHERING THE FLEET — one sort so the cluster rows read as sections
        //  ------------------------------------------------------------------
        //  The raw JSON hands the sources interleaved (a book, then a course,
        //  then a book again). Left as-is, the "— kind —" divider would fire on
        //  every change and scatter one-row fragments across the shelf. Sorting
        //  by kind — then alphabetically by title within each kind — makes every
        //  divider open a real, contiguous block, in one stable parade shared by
        //  both languages: courses lead, then books, guides, docs, essays,
        //  communities, videos, games, and whatever the JSON mints next.
        const KIND_PARADE = [
          //  @state: the parade protocol. The lower the index, the earlier a
          //  source of that kind appears on the shelf. New kinds fall to the
          //  tail (index -1 → tail) and sort among themselves by title.
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
          //  @logic: Array.prototype.sort compares pairs and wants a number:
          //  negative → a goes first; positive → b goes first; zero → as-is.
          const tail = KIND_PARADE.length; //  Sentinel rank for kinds missing from the parade.
          const rankA = KIND_PARADE.indexOf(a.kind); //  A's parade index (or -1 if unknown).
          const rankB = KIND_PARADE.indexOf(b.kind); //  B's parade index (or -1 if unknown).
          const sorted = (rankA === -1 ? tail : rankA) - (rankB === -1 ? tail : rankB);
          //  @line: the ternary maps -1 onto tail so stragglers sort last,
          //  then the difference tells us which of the pair walks first.
          return sorted || a.title.localeCompare(b.title);
          //  @logic: if the kinds tie (same rank, difference 0), fall back to
          //  alphabetical order by title — same kind blocks stay tidy.
        });

        //  ------------------------------------------------------------------
        //  CLUSTER STITCHES — reintroducing colspan
        //  ------------------------------------------------------------------
        //  The old hand-sewn charts had sub-headers like "— Core runtimes —"
        //  spanning three columns with colspan="3". That visual is too useful
        //  to lose in the upgrade, so the machine groups entries by their
        //  `kind` (course, book, docs, video, …) and draws a separator row
        //  each time the kind changes — the colspan lesson survives.
        let previousKind = null;
        //  @state: remembers the last kind we labelled, so a divider row is
        //  drawn only when the current entry opens a NEW kind block.

        for (const entry of shelfSources) {
          //  @logic: for...of walks the sorted deck one source at a time.
          if (entry.kind !== previousKind) {
            //  @line: a different kind than the last row means a new cluster
            //  begins here → emit the "— kind —" separator banner.
            const clusterRow = document.createElement("tr"); //  Banner row.
            const clusterCell = document.createElement("td"); //  Banner cell.
            clusterCell.className = "cluster-label"; //  @bridge: styled by CSS (cyan-grey divider label).
            clusterCell.colSpan = 3; //  @pedagogy: colspan="3" widens one cell across all columns.
            clusterCell.textContent = `— ${entry.kind} —`; //  e.g. "— book —".
            clusterRow.appendChild(clusterCell); //  Cell into row.
            shelf.appendChild(clusterRow); //  Row into shelf.
            previousKind = entry.kind; //  Refresh the sentinel for the next entries.
          }

          //  BUILD <tr> — one data row per source.
          const row = document.createElement("tr"); //  @line: the row is born empty, cell by cell.

          //  CELL 1 — the SOURCE NAME
          const nameCell = document.createElement("td"); //  The title cell.
          //  @pedagogy: textContent vs innerHTML. textContent treats the
          //    string as PLAIN TEXT — the browser cannot execute it as
          //    markup. innerHTML would parse it as HTML, a classic security
          //    hole (XSS). Our own file would "work" either way, but the safe
          //    way is the lesson — textContent, always.
          nameCell.textContent = entry.title; //  Plain-text title into the cell.
          //  The library annotation becomes a tooltip (title attribute shows
          //  on hover), so the crew never sees a bare listing title.
          nameCell.title = entry.annotation || entry.title; //  Fallback: title again if no annotation.
          row.appendChild(nameCell); //  Mount cell 1.

          //  CELL 2 — the FREQUENCY (URL) link
          const linkCell = document.createElement("td"); //  The link cell.
          const link = document.createElement("a"); //  @pedagogy: <a> is the anchor tag.
          //  href = the destination; target="_blank" opens a new tab so the
          //  crew stays on the charts; rel="noopener" is a safety fence that
          //  stops the opened page from reaching back through window.opener.
          link.href = entry.url; //  Where the link points.
          link.target = "_blank"; //  New tab: the charts page stays behind.
          link.rel = "noopener"; //  @warning: noopener blocks tab-nabbing.
          link.textContent = `${txt.open} ${txt.accessSuffix[
            entry.access
          ]}`; //  @line: "Open (free)" / "Open (subscription)" / "Open (purchase)" / "Open (borrow)" in the page's tongue.
          linkCell.appendChild(link); //  Anchor into its cell.
          row.appendChild(linkCell); //  Mount cell 2.

          //  CELL 3 — the MISSION STATUS badge
          const statusCell = document.createElement("td"); //  The status cell.
          const label = txt.statusReadout[entry.status] || entry.status;
          //  @line: translate the raw status word via the word box; if a
          //  status is missing from the map, show the raw word as-is.
          statusCell.textContent = label; //  Plain-text status label.
          statusCell.classList.add(statusClassFor(label, txt));
          //  @bridge: statusClassFor returns the CSS light class ("status-active"
          //  / "status-in-progress") that colours the badge amber or mint.
          row.appendChild(statusCell); //  Mount cell 3.

          //  FINAL STITCH — mount the finished row into the <tbody> shelf.
          shelf.appendChild(row); //  The complete row lands on its deck.
        }
      });
    })
    .then(() => {
      //  ------------------------------------------------------------------
      //  RE-AIMING THE LANDING — the visitor may arrive through a footer hash
      //  like #backend-refs. The browser aims at that anchor WHILE the shelves
      //  are still empty frames; the machine then stitches rows into every
      //  shelf above the target, the page grows, and the intended section gets
      //  pushed down away from where the browser first landed. So once every
      //  shelf is full, aim once more at the true position. (Frontend appeared
      //  to "land" only because it is the first table — nothing above it moves.)
      //  The CSS scroll-margin-top on these sections clears the fixed navbar.
      //  ------------------------------------------------------------------
      if (window.location.hash) {
        //  @guard: only when the URL carries an anchor (#backend-refs).
        const landing = document.getElementById(window.location.hash.slice(1));
        //  @line: slice(1) strips the leading "#", so "#backend-refs" becomes
        //  the id "backend-refs"; getElementById finds that section.
        if (landing) {
          landing.scrollIntoView();
          //  @line: scrollIntoView glides the viewport to the section; the
          //  CSS scroll-margin-top gives the fixed navbar breathing room.
        }
      }
    })
    .catch((error) => {
      //  ------------------------------------------------------------------
      //  FAILURE DRILL — if the fetch failed, never leave blank decks.
      //  Offline, wrong path, deleted file: the crew reads exactly what went
      //  wrong in the ship's alarm pink.
      //  ------------------------------------------------------------------
      const errorRow = document.createElement("tr"); //  One error row template.
      const errorCell = document.createElement("td"); //  Its single wide cell.
      errorCell.colSpan = 3; //  Span all three columns like the cluster rows.
      errorCell.textContent = `[${txt.error}]: ${error.message}`;
      //  @line: the name of the failure + the browser's message, readable plainly.
      errorCell.style.color = "var(--nebula-pink)"; //  @bridge: alarm pink token from CSS.
      errorRow.appendChild(errorCell); //  Cell into row.

      bibliographyShelves.forEach((shelf) => {
        shelf.innerHTML = "";
        //  @line: clear any half-stitched rows the machine may have left.
        shelf.appendChild(errorRow.cloneNode(true));
        //  @logic: cloneNode(true) copies the whole error row per shelf, so
        //  each deck shows the same alarm without re-creating it each time.
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
  //  @logic: the queued sentence lives at txt.statusReadout.queued; if the
  //  label says exactly that, it earns the amber "in progress" light.
  if (label === txt.statusReadout["in progress"]) return "status-in-progress";
  //  @logic: the in-progress sentence itself gets the same amber light.
  return "status-active"; // Active / Activ —  every other status shines mint.
}
