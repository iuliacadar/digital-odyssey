//  ==========================================================================
//     D::0dy55ey — SALA DE MAȘINI: script.js
//     Fiecare mecanism care animează, observă și memorează.
//     Legenda etichetelor: ../docs/legend-ro.md
//  ==========================================================================

//  @block: SENZORII NAVEI (Declararea variabilelor globale)
//    Aceste variabile trăiesc la rădăcina modulului pentru că mai multe
//    mecanisme au nevoie de acces la ele. Ele acționează ca senzorii principali
//    ai navei — urmăresc poziția scroll-ului și stochează în cache referințe
//    DOM care ar fi costisitor de interogat în mod repetat.
//  ==========================================================================

//  @state: lastScrollY — ține minte coordonata verticală a scroll-ului de la
//    evenimentul trecut. E folosit de MECANISMUL 01 pentru a afla direcția.
let lastScrollY = window.scrollY; // Stochează ultima poziție Y cunoscută. Începe cu orice ar citi pagina.

//  @bridge: navbar — bara HUD de sus, comună tuturor paginilor. MECANISMUL 01
//    o ascunde/o arată; MECANISMUL 06.5 pornește overlay pe ea.
const navbar = document.querySelector(".navbar"); // Prinde bara de navigație de sus din DOM — HUD-ul nostru permanent.

//  @bridge: sidebar — consola de navigație din stânga, folosită pe paginile de jurnal.
//    MECANISMUL 02 și MECANISMUL 06 îi citesc și îi scriu poziția de scroll; MECANISMUL 05 o menține stabilă.
const sidebar = document.querySelector(".log-sidebar"); // Prinde panoul din stânga — consola noastră de misiune.


//  ==========================================================================
//     MECANISMUL 01: ASCUNDEREA/AFIȘAREA BAREI DE NAVIGAȚIE LA SCROLL
//     Detaliu de imersiune: meniul dispare când citești în jos și revine când
//     urci înapoi. Imită un HUD care se retrage când nu e nevoie de el.
//  ==========================================================================
//  @mechanism: 01 — Dinamica barei la scroll
//  @event: scroll pe fereastră
//  @pedagogy: "scroll" se declanșează de sute de ori pe secundă. Tot ce facem
//    aici e să comparăm două numere și să comutăm o clasă CSS — suficient de
//    rapid pentru a păstra interfața fluidă, fără nicio constrângere manuală.
//  ==========================================================================

// Atașăm un ascultător permanent la evenimentul de scroll al ferestrei.
window.addEventListener("scroll", () => {
  // Întrebăm browserul: unde este bara de derulare chiar acum?
  const currentScrollY = window.scrollY; // Coordona proaspătă, direct din motorul browserului.

  // Verifică: derulează în JOS ȘI peste pragul de 100px?
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Adăugăm clasa CSS care ridică bara de navigație în sus, în afara ecranului.
    navbar.classList.add("navbar--hidden"); // Tranziția trăiește în style.css — alunecare lină în sus.

    // Optimizare sidebar: dacă HUD-ul a dispărut, lipim sidebarul de marginea de sus (0px).
    if (sidebar) sidebar.style.top = "0"; // Îndepărtează golul de 60px rezervat barei.
  }
  // În caz contrar utilizatorul derulează în sus — vrea să navigheze, adu HUD-ul înapoi.
  else {
    navbar.classList.remove("navbar--hidden"); // Scoate clasa ascunsă, bara revine în jos.

    // Restaurează poziția sidebarului pentru a sta confortabil sub bara vizibilă.
    if (sidebar) sidebar.style.top = "60px"; // Golul de 60px s-a întors, ca înainte.
  }

  // Actualizăm senzorul global cu noua coordonată pentru următorul eveniment de scroll.
  lastScrollY = currentScrollY; // Vechiul "last" devine "current" — gata pentru comparația următoare.
});


//  ==========================================================================
//     MECANISMUL 02: INTERSECTION OBSERVER — DETECTAREA SECȚIUNII ACTIVE
//     Citește ce secțiune privește acum utilizatorul și evidențiază butonul
//     corespunzător din sidebar. Pe desktop auto-derulează chiar sidebar-ul
//     pentru a centra butonul activ.
//  ==========================================================================
//  @mechanism: 02 — Urmărirea secțiunii active
//  @event: IntersectionObserver (bazat pe viewport)
//  @pedagogy: IntersectionObserver este o API modernă a browserului care
//    declanșează un callback atunci când un element intră sau iese dintr-o
//    zonă definită a ecranului. Este cu mult mai performant decât ascultarea
//    lui "scroll" și calcularea manuală a pozițiilor — browser-ul face
//    geometria intern.
//  ==========================================================================

// 1. CONFIGURAȚIA RADARULUI: definim prin viewport zona de scanare cu laser.
const observerOptions = {
  root: null, // null înseamnă că sensorul radar scanează direct viewport-ul vizibil al browserului.

  //   Linia de scanare cu laser: detectăm elementul când se află în zona central-superioară.
  //   Ignorăm partea de sus 20% și partea de jos 70% — rămâne o fereastră fixă de scanare 10%.
  rootMargin: "-20% 0px -70% 0px", // Zona de scanare activă este feliul de mijloc-superior al ecranului.
  threshold: 0, // Declanșează semnalul instantaneu când articolul atinge marginea de mai sus.
};

// 2. LOGICA SENZORULUI:  Ce se întâmplă când o secțiune de jurnal intră în zona noastră de scanare.
const observer = new IntersectionObserver((entries) => {
  // Observerul ne dă un array de intrări — verificăm fiecare.
  entries.forEach((entry) => {
    // Dacă această intrare s-a intersectat cu succes cu marginea noastră de scanare...
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id"); // Preia ID-ul unic al intrării (de ex. "html-day01").

      // Pasul A: Ștergem starea activă (luciu roz) de la TOATE link-urile din sidebar mai întâi.
      document.querySelectorAll(".sidebar-nav a").forEach((link) => {
        link.classList.remove("active"); // Oprim lumina peste tot înainte de a aprinde una singură.
      });

      // Pasul B: Găsim exact butonul din sidebar al cărui href se potrivește cu acest ID detectat.
      const activeLink = document.querySelector(
        `.sidebar-nav a[href="#${id}"]`,
      );

      // Dacă am găsit butonul potrivit, injectăm clasa .active ca să-l facem să strălucească.
      if (activeLink) {
        // Pasul C: Aprindem butonul zilei curente cu luciul nebula-pink.
        activeLink.classList.add("active"); // Butonul acum strălucește în sidebar.

        // Pasul D: Selectăm lista interioară derulabilă (elementul <ul> din interiorul sidebarului).
        const innerSidebarList = document.querySelector(".sidebar-nav ul");

        // ACTIVEAZĂ RADARUL: Executăm această autocentrare doar pe Desktop (ecrane peste 768px).
        if (window.innerWidth > 768 && innerSidebarList) {
          //     ALGORITMUL DE AUTOCENTRARE:
          //    Calculăm unde se află butonul zilei în interiorul listei (offsetTop)
          //    și scădem jumătate din înălțimea ferestrei sidebaruluiui (clientHeight / 2).
          //    Acest calcul simplu aduce atâta butonul cât si eticheta Sectorului
          //    chiar în centrul vizual al meniului, chiar sub titlul HARTĂ!
          const centerPosition =
            activeLink.offsetTop - innerSidebarList.clientHeight / 2;

          // Sidebar-ul execută o derulare silențioasă și lin către acea poziție exactă.
          innerSidebarList.scrollTo({
            top: centerPosition, // Derulare la punctul central calculat.
            behavior: "smooth", // Glisare cinematică lină.
          });
        }
      }
    }
  });
}, observerOptions);

// 3. ACTIVAREA FIZICĂ A SENZORILOR. Atașăm câte un sensor fiecărei zile de jurnal scrisă in HTML.
// Spunem browserului să pună un radar pe fiecare articol .log-entry.
document.querySelectorAll(".log-entry").forEach((article) => {
  observer.observe(article); // Începe scanarea acestui articol pentru evenimente de intersecție.
});


//  ==========================================================================
//     MECANISMUL 03: STATUS DE MISIUNE — RE-DECLANȘAREA ANIMAȚIEI
//     De fiecare dată când o casetă .mission-status intră în câmpul vizual,
//     animația ei de tipar este resetată forțat, ca utilizatorul să o vadă
//     scriindu-se din nou.
//  ==========================================================================
//  @mechanism: 03 — Resetarea animației de tipar
//  @event: IntersectionObserver (prag de 30% vizibilitate)
//  @pedagogy: Trucul de re-declanșare funcționează setând animation la "none"
//    (oprește animația CSS), forțând un reflow din partea browserului prin
//    offsetHeight, apoi setând animation înapoi la null (restaurează animația
//    CSS originală). Browserul reinterpretează animația ca fiind "nouă" și o
//    redă de la cadrul 0.
//  ==========================================================================

// Creăm un al doilea observer dedicat casetelor verzi cu starea misiunii.
const statusObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Când caseta verde cu starea de misiune intră în ecran (>30% vizibilă)...
      if (entry.isIntersecting) {
        const statusText = entry.target.querySelector("p"); // Găsește tag-ul <p> din interiorul casetei.

        if (statusText) {
          // Pasul A: Îngheață și oprește cu forța animația curentă.
          statusText.style.animation = "none";
          // Pasul B: TRUCUL MAGIC! Forțează browserul să recalculeze dimensiunea, înregistrând reset-ul.
          statusText.offsetHeight; // Accesarea offsetHeight forțează un reflow sincron — browserul observă "none".
          // Pasul C: Preia blocul, permițând animațiile CSS (tipar + blink) să repornească curat de la cadrul 0.
          statusText.style.animation = null; // null restaurează animația CSS originală, care acum pare "nouă" browserului.
        }
      }
    });
  },
  { threshold: 0.3 }, // Declanșează când cel puțin 30% din casetă este vizibilă pe ecran.
);

// Atașăm radarul la fiecare bară de status de misiune din toate jurnalele HTML.
document.querySelectorAll(".mission-status").forEach((status) => {
  statusObserver.observe(status); // Activează radarul de supraveghere pe fiecare casetă de status.
});


//  ==========================================================================
//     MECANISMUL 04: LOCALSTORAGE — SISTEM DE NOTE PERSISTENTE
//     Îi permite căpitanului să scrie note tip terminal și să le păstreze
//     peste reîncărcările paginii. Folosește API-ul localStorage al browserului.
//  ==========================================================================
//  @mechanism: 04 — Salvarea persistentă a notelor
//  @pedagogy: localStorage este un depozit cheie-valoare integrat în fiecare
//    browser. Datele supraviețuiesc reîncărcărilor de pagină și repornirilor
//    browserului. Fiecare notă primește propria cheie (id-ul textarea-ului),
//    astfel încât notele să nu se suprascrie reciproc. Limita este de
//    aproximativ 5MB per origine (domeniu).
//  ==========================================================================

// Funcția A: Salvarea semnalului în arhive (când dai click pe butonul de sub textarea).
function saveNote(dayId) {
  const textarea = document.getElementById(dayId); // Găsește textarea după id-ul său unic.
  const noteContent = textarea.value; // Extrage textul pe care l-ai tasta în interior.

  // Salvează conținutul în memoria localStorage securizată a browserului.
  // Id-ul zilei devine o "cheie" unică (ex. cheia "html-note-day01" păstrează doar textul acelei zile).
  localStorage.setItem(dayId, noteContent); // localStorage = cheie-valoare. Cheie: dayId, Valoare: ce ai tastat.

  console.log(`Signal saved for sector: ${dayId}`); // Loghează o confirmare tehnică în consola dezvoltatorului.
  alert("Signal extension saved to local archives."); // Alertă pe ecran care confirmă salvarea.
}

// Funcția B: încărcarea automată a datelor stocate când pagina pornește/încarcă.
window.addEventListener("load", () => {
  const allNotes = document.querySelectorAll(".note-terminal textarea"); // Găsește fiecare textarea din jurnal.

  allNotes.forEach((textarea) => {
    const savedContent = localStorage.getItem(textarea.id); // Întreabă memoria browserului: există ceva salvat pentru acest ID?

    // Dacă am găsit note vechi în arhivă, le reintroducem automat în textarea ca să nu le pierzi.
    if (savedContent) {
      textarea.value = savedContent; // Restaurează scrierea anterioară a căpitanului.
    }
  });
});


//  ==========================================================================
//     MECANISMUL 05: NAVIGAȚIA PRIN ANCORE PE DESKTOP (Sidebar-ul Paginii de Jurnal)
//     Împiedică browserul să sare cu pagina când dai click pe un link-ancoră.
//     În schimb, derulează doar panoul de conținut din dreapta
//     (.log-content) și actualizează adresa URL prin history.pushState.
//  ==========================================================================
//  @mechanism: 05 — Navigare prin ancore fără derive
//  @event: DOMContentLoaded → click pe .sidebar-link și .map-title-link
//  @reason: Fără acest mecanism, click pe "#html-day01" ar derula întreaga
//    pagină, scoțând sidebar-ul din poziție. Prin interceptarea click-ului,
//    derulăm doar panoul de conținut și lăsăm sidebar-ul fix.
//  ==========================================================================

// Protocolul se activează automat când întreaga matrice DOM a cabinei de pilotare a fost încărcată.
document.addEventListener("DOMContentLoaded", () => {
  // Selectăm containerul din dreapta (zona articolelor cu scrollbar).
  const mainContentZone = document.querySelector(".log-content"); // Aceasta este zona <main> care se poate derula.

  //  RADARUL CORECTAT: Selectăm atât zilele (.sidebar-link) CÂT ȘI linkul special către hartă (.map-title-link)
  //  ca toate să cadă sub aceeași protecție mecanică a scutului!
  const navigationLinks = document.querySelectorAll(
    ".sidebar-link, .map-title-link",
  );

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Pasul A: VERIFICAREA MODULUI DE OPERARE (Desktop vs Mobil)
      if (window.innerWidth > 768) {
        //  ABSOLUT ESENȚIAL: Oprim acțiunea nativă a browserului care obișnuia să tragă sidebar-ul în sus!
        //  Acesta este scutul care blochează titlul h4 să zboare de pe ecran.
        event.preventDefault(); // Oprim comportamentul nativ de salt-către-ancoră al browserului.

        const targetAnchorId = link.getAttribute("href"); // Preia ancora (ex. "#top-deck" sau "#html-day01").
        const targetArticleSection = document.querySelector(targetAnchorId); // Găsește elementul țintă în DOM.

        if (targetArticleSection && mainContentZone) {
          let exactScrollCoordinates;

          //  PROTOCOL INDIVIDUAL PENTRU HĂRȚI:
          //   Dacă utilizatorul a dat click pe marele titlu HĂRTĂ, ordinăm containerului
          //   din dreapta să se reseteze complet în sus (coordonata 0), fără offseturi parazite!
          if (link.classList.contains("map-title-link")) {
            exactScrollCoordinates = 0; // Linkul către hartă duce mereu chiar în vârf.
          }
          //  PROTOCOL INDIVIDUAL PENTRU ZILE:
          //  Aplică tăşia ideală de 100px ca să plasezi intrările de jurnal ordonat sub HUD.
          else {
            exactScrollCoordinates = targetArticleSection.offsetTop - 100; // 100px ia în calcul navigația fixă.
          }

          // Executăm o derulare lină STRICT în interiorul ferestrei din dreapta (.log-content).
          mainContentZone.scrollTo({
            top: exactScrollCoordinates, // Poziția țintă calculată.
            behavior: "smooth", // Glisare cinematografică fină.
          });

          // Actualizăm discret bara URL a browserului fără sărituri vizuale haotice.
          history.pushState(null, null, targetAnchorId); // Schimbă hash-ul URL fără să reintre încărce pagina.
        }
      }
      // Pasul B: MODUL MOBILE
      else {
        console.log(
          `Mobile navigation active for sector: ${link.getAttribute("href")}`,
        ); // Doar loghează; lasă browserul să manejeze ancorele nativ pe mobil.
      }
    });
  });
});


//  ==========================================================================
//     MECANISMUL 06: HUD MOBILE — DERULARE ORIZONTALĂ AUTOMATĂ
//     Pe ecranele înguste, când o nouă secțiune devine activă prin MECANISMUL 02,
//     sidebar-ul se derulează orizontal ca să centraze butonul activ.
//  ==========================================================================
//  @mechanism: 06 — Sincronizarea orizontală a HUD
//  @event: window scroll
//  @guard: rulează doar pe viewport-uri <= 768px (mobil și ecran divizat).
//  ==========================================================================

// Ascultăm din nou evenimentul global de scroll, dar de data aceasta pentru mobil.
document.addEventListener("scroll", () => {
  // Executăm acest protocol strict pe ecranele înguste (Mobil / Ecran divizat).
  if (window.innerWidth <= 768) {
    // Selectăm containerul consolei exterioare (cel cu overflow-x: auto).
    const hudContainer = document.querySelector(".log-sidebar"); // Sidebar-ul dublat ca HUD orizontal pe mobil.

    // Găsește butonul zilei care a primit clasa .active în acel moment din MECANISMUL 02.
    const activeButton = document.querySelector(".sidebar-nav a.active"); // Luciul ne spune care secțiune este vizibilă.

    // Scut de siguranță: rulează logica doar dacă ambele elemente sunt prezente pe ecran.
    if (hudContainer && activeButton) {
      /* MATEMATICA REALITĂȚII TACTILE:
          Calculăm poziția butonului relativ la marginea stângă a ecranului (offsetLeft)
          și scădem jumătate din lățimea HUD pentru a-l aduce EXACT în centru! */
      const buttonLeft = activeButton.offsetLeft; // Distanța de la marginea stângă a containerului.
      const buttonWidth = activeButton.offsetWidth; // Cât de lat este butonul activ?
      const hudWidth = hudContainer.offsetWidth; // Cât de lată este fereastra HUD vizibilă?

      const targetScroll =
        buttonLeft - hudWidth / 2 + buttonWidth / 2; // Centrează butonul în aria vizibilă.

      // Ordin pentru consolă: execută o glisare orizontală lină către coordonată.
      hudContainer.scrollTo({
        left: targetScroll, // Poziția centrată calculată.
        behavior: "smooth", // Glisare lină, ca un dolly de cameră.
      });
    }
  }
});


//  ==========================================================================
//     MECANISMUL 06.5: CONSOLA DE TELEPORTARE HUD — PORNIRE/OPRIRE
//     Butonul "Comandă Deck" deschide/închide overlay-ul holografic de volum.
//     Clasa CSS .hud-open de pe .navbar declanșează animația de coborâre.
//     Click în afara overlay-ului sau apăsarea tastei Escape îl închide.
//  ==========================================================================
//  @mechanism: 06.5 — Comutatorul consolei HUD
//  @event: click pe .hud-toggle, click în afara .hud-overlay, tasta Escape
//  @pedagogy: Comutarea unei clase CSS prin classList.toggle este cea mai
//    simplă și mai performantă metodă de a arăta/ascunde elemente UI. Nu se
//    folosește display:none, nici calcule de înălțime — doar transițiile CSS
//    se ocupă de animație. Ascultătorii de click-în-afară și Escape acționează
//    ca eliberări de siguranță, asigurând că overlay-ul nu prinde niciodată.
//  ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".hud-toggle"); // Butonul "Comand Deck".
  const navBar = document.querySelector(".navbar"); // Navbar-ul părinte care primește .hud-open.
  const overlay = document.querySelector(".hud-overlay"); // Panoul care coboară cu animație.

  // Ieșire de siguranță: dacă lipsește vreun element, ne aflăm pe o pagină fără HUD — abandonăm.
  if (!toggleBtn || !navBar || !overlay) return;

  // Comută clasa .hud-open pe navbar când se apasă butonul.
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Împiedică click-ul să ajungă la ascultătorul documentului de mai jos.
    navBar.classList.toggle("hud-open"); // CSS-ul se ocupă de animația înălțimii.
  });

  // Închide overlay-ul când se face click în afara lui.
  document.addEventListener("click", (e) => {
    // Dacă overlay-ul este deschis și click-ul este în afara atât a lui cât și a butonului de comutare...
    if (
      navBar.classList.contains("hud-open") &&
      !overlay.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      navBar.classList.remove("hud-open"); // Închide panoul HUD.
    }
  });

  // Închide overlay-ul când se apasă tasta Escape.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navBar.classList.contains("hud-open")) {
      navBar.classList.remove("hud-open"); // Eliberare de urgență: Escape închide panoul.
    }
  });
});


//  ==========================================================================
//     MECANISMUL 07: PROTOCOLUL DE ȘTERGERE A CURSORULUI (Curățarea Animației de Tipar)
//     După ce se termină animația de tipar CSS de pe pagina index, acest mecanism
//     elimină cursorul intermitent setând border-right la "none" cu
//     !important. Timingul se potrivește cu duratele keyframe-urilor CSS.
//  ==========================================================================
//  @mechanism: 07 — Ștergerea cursorului șablon
//  @event: DOMContentLoaded
//  @bridge: Țintește .stenciled-metal-text (h1) și .stenciled-metal-text-sub
//    (p) — aceleași elemente animate de CSS în style.css.
//  ==========================================================================

// Protocolul se activează automat când matricea DOM completă s-a încărcat.
document.addEventListener("DOMContentLoaded", () => {
  // 1. ȚINTELE SENZORILOR: Identificăm elementele de text șablon din antet.
  const macroText = document.querySelector(".stenciled-metal-text"); // Marele titlu h1.
  const microText = document.querySelector(".stenciled-metal-text-sub"); // Subtitlul mai mic.

  // Scut de siguranță: calibare doar dacă ambele elemente sunt prezente pe pagină.
  if (macroText && microText) {
    //  2. PROTOCOLUL DE ȘTERGERE AL TITLULUI PRINCIPAL (H1)
    //  Animația de tipar CSS durează exact 3 secunde (3000ms).
    //  Lansăm un cronometru militar care elimină linia de bordură la expirare.
    setTimeout(() => {
      macroText.style.setProperty("border-right", "none", "important"); // Taie bordura fizică din dreapta textului.
      macroText.style.setProperty(
        "border-right-color",
        "transparent",
        "important",
      ); // Forțăm opacitatea la zero absolut.
    }, 3000); // 3000ms = durata exactă a animației h1.

    //  3. PROTOCOLUL DE ȘTERGERE AL SUBTITLULUI MONOSPACE (P)
    //  Subtitlul are o întârziere de 3 secunde iar apoi se tipărește timp de 4 secunde.
    //  Timpul total până la stabilizarea completă a metalului este de 7 secunde (7000ms).
    setTimeout(() => {
      microText.style.setProperty("border-right", "none", "important"); // Oprește intermitența, șterge linia secundară.
      microText.style.setProperty(
        "border-right-color",
        "transparent",
        "important",
      ); // Garantează curățarea totală a pixelilor.
    }, 7000); // 7000ms = 3000ms (întârziere) + 4000ms (durata de tipar).
  }
});


//  ==========================================================================
//     MECANISMUL 08: INTEGRAREA SURSEI RECURSIVE (Doar pe Pagina de Blueprint)
//     Citește atributul data-path din butoanele .tab-btn, preia fișierul
//     corespunzător prin API-ul Fetch și injectează codul său brut
//     în .code-inspector-screen. Gestionează și auto-centrarea pe mobil.
//  ==========================================================================
//  @mechanism: 08 — Încărcător recursiv de sursă
//  @event: DOMContentLoaded, apoi click pe .tab-btn
//  @pedagogy: API-ul Fetch este metoda modernă de a face cereri HTTP din
//    JavaScript. fetch() întoarce un Promise care se rezolvă cu un obiect
//    Response. Lanțurile .then() gestionează răspunsul, iar .catch() erorile.
//    Codul încărcat este afișat ca text simplu (nu este executat) prin
//    textContent, ceea ce este sigur împotriva atacurilor XSS.
//  ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Preia containerul de ieșire și containerul butoanelor tab din DOM.
  const scriptTarget = document.getElementById("script-stream-target"); // Blocul <pre> sau <code> în care apare sursa.
  const tabContainer = document.querySelector(".source-selector-tabs"); // Bara de tab-uri cu butoane data-path.

  // Ieșire de siguranță: dacă aceste elemente nu există, NU suntem pe pagina de blueprint recursiv — renunțăm.
  if (!scriptTarget || !tabContainer) return;

  // Lansăm o scanare fetch asincronă către fișierul sursă selectat.
  function loadSourceFile(filePath) {
    // Afișăm feedback-ul vizual "Se încarcă..." utilizatorului.
    scriptTarget.textContent = "Loading...";
    scriptTarget.style.color = ""; // Resetăm orice culoare de eroare anterioară.

    fetch(filePath) // Pornește cererea HTTP fetch către fișierul țintă.
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `File "${filePath}" not found. (${response.status})`,
          ); // Eroare de rețea? O aruncăm către blocul catch.
        }
        return response.text(); // Transformă tamponul brut al rețelei în text simplu util.
      })
      .then((rawCode) => {
        // Injectăm textul direct în ecranul inspectorului ca text simplu neexecutabil.
        scriptTarget.textContent = rawCode; // Codul sursă apare acum în cilindrul de sticlă.
      })
      .catch((error) => {
        // Dacă a eșuat ceva, afișăm pe ecran o alertă critică de eroare roz.
        scriptTarget.textContent = `[CRITICAL ERROR]: ${error.message}`;
        scriptTarget.style.color = "var(--nebula-pink)"; // Alertă vizuală roză pentru defecțiune de sistem.
      });
  }

  // GESTIONAREA CLICK PE TAB: Când utilizatorul apasă un buton tab în selectorul de surse.
  tabContainer.addEventListener("click", (e) => {
    // closest() urcă prin arborele DOM ca să găsească cel mai apropiat .tab-btn.
    // Gestionează click-urile pe elemente copil (cum ar fi un <span> în interiorul butonului).
    const btn = e.target.closest(".tab-btn");
    if (!btn) return; // Click în afara unui buton de tab? Ignoră.

    // Pasul A: Șterge clasa active-tab de la TOATE taburile.
    tabContainer.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.remove("active-tab"); // Ucide starea activă în totalitate.
    });
    // Pasul B: Aprinde doar butonul apăsat.
    btn.classList.add("active-tab"); // Tab-ul apăsat acum strălucește.

    // Pasul C: Citește atributul data-path — acesta deține URL-ul relativ al fișierului sursă.
    const filePath = btn.getAttribute("data-path");
    if (filePath) {
      loadSourceFile(filePath); // Pornește la fetch și injectează sursa.
    }

    // Auto-centrare mobilă: aceleași calcule tactile ca la MECANISMUL 06.
    if (window.innerWidth <= 768) {
      const btnLeft = btn.offsetLeft; // Distanța tab-ului față de marginea stângă a containerului.
      const btnWidth = btn.offsetWidth; // Lățimea proprie a tab-ului.
      const containerWidth = tabContainer.offsetWidth; // Lățimea vizibilă a barei de tab-uri.
      const targetScroll = btnLeft - containerWidth / 2 + btnWidth / 2; // Îl centrează.
      tabContainer.scrollTo({
        left: targetScroll, // Centrul calculat.
        behavior: "smooth", // Alunecare orizontală lină.
      });
    }
  });

  // ÎNCĂRCĂ TAB-UL IMPLICIT LA INIȚIALIZAREA PAGINII:
  // Dacă un .tab-btn are deja clasa active-tab în HTML-ul brut,
  // îi încărcăm fișierul automat, fără un click manual.
  const defaultTab = tabContainer.querySelector(".tab-btn.active-tab");
  if (defaultTab) {
    const defaultPath = defaultTab.getAttribute("data-path");
    if (defaultPath) {
      loadSourceFile(defaultPath); // Pre-încarcă sursa primului tab la încărcarea paginii.
    }
  }
});


//  ==========================================================================
//     MECANISMUL 09: MAȘINA DE TIPAR COSMICĂ (Transmisie / Cartă de Astrogație)
//     Scrie textul manifestului caracter cu caracter, în interiorul cilindrului
//     de sticlă, ca și cum mesajul ar fi primit în direct din spațiul profund.
//     Se activează doar pe paginile care conțin .manifesto-entry.
//  ==========================================================================
//  @mechanism: 09 — Mașina de tipar cosmică
//  @event: DOMContentLoaded
//  @pedagogy: Aici demonstrează trei tipare fundamentale din JavaScript:
//    1. manipularea DOM — crearea de elemente, setarea de clase, adăugarea
//    2. setTimeout recursiv — fiecare caracter îl programează pe următorul, creând
//       un efect de scriere fără a bloca browserul
//    3. scrollIntoView — ține cursorul vizibil în timp ce textul e scris pe ecran,
//       dar se oprește de îndată ce cititorul preia derularea (cedată utilizatorului)
//  ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".manifesto-entry"); // Găsește containerul cilindrului de sticlă.

  // Ieșire de siguranță: se execută doar pe pagina de transmisie.
  if (!container) return;

  // Paragrafele manifestului sunt scrise direct în transmission.html.
  const paragraphs = container.querySelectorAll("p"); // Preia fiecare paragraf <p> din interiorul containerului.
  if (!paragraphs.length) return; // Niciun paragraf? Nimic de scris. Renunță.

  // Arhivează textul și steagul de semnătură din fiecare paragraf în parte.
  const lines = Array.from(paragraphs).map((p) => ({
    text: p.textContent, // Textul brut al acestui paragraf.
    isSignoff: p.classList.contains("manifesto-signoff"), // E linia asta semnătura căpitanului?
  }));

  // Golește containerul — JS va rescrie totul din datele arhivate.
  // Comentariile pedagogice originale din HTML sunt eliminate și ele aici; rostul lor a fost în timpul scrierii.
  container.innerHTML = ""; // Golește cilindrul de sticlă. Gata pentru transmisia live.

  // CREEAZĂ CONTAINERUL DE IEȘIRE ȘI CURSORUL INTERMITENT.
  const output = document.createElement("div"); // Creează un <div> nou pentru ieșirea de scris.
  output.className = "typewriter-output"; // Îi dă clasa CSS care stilizează textul scris.
  container.appendChild(output); // Îl inserează în cilindrul de sticlă.

  const cursor = document.createElement("span"); // Creează un <span> pentru cursorul intermitent.
  cursor.className = "typing-cursor"; // Clasa CSS care îl face să clipească prin animație.
  container.appendChild(cursor); // Pune cursorul după textul de ieșire.

// Preluarea citirii: de îndată ce cititorul derulează (scroll/atingere/tastă), mașina de scris
  // încetează să mai tragă viewport-ul înapoi spre cursor, astfel pagina se derulează liber
  // în timp ce manifestul continuă să fie scris în fundal.
  let readerTookOver = false;

  // Orice mișcare de rotiță, atingere sau apăsare de săgeată/Space/PageDown/PageUp este semnal
  // că cititorul vrea pagina sub controlul lui. De aici înainte oprim derularea automată.
  const handScrollToReader = () => (readerTookOver = true);
  window.addEventListener("wheel", handScrollToReader, { passive: true });
  window.addEventListener("touchmove", handScrollToReader, { passive: true });
  window.addEventListener("touchstart", handScrollToReader, { passive: true });
  window.addEventListener("keydown", handScrollToReader);

  // Contoare de scriere: paraIdx specifică paragraful, charIdx — caracterul din acel paragraf.
  let paraIdx = 0; // Pornește de la primul paragraf (indexul 0).
  let charIdx = 0; // Pornește de la primul caracter al acelui paragraf (indexul 0).
  let currentP = null; // Niciun element de paragraf nu a fost încă creat.

  // randomDelay variază viteza de scriere între 15-50ms per caracter.
  // Astfel se simulează ritmul neregulat al unui semnal cosmic din spațiul adânc.
  function randomDelay() {
    return Math.floor(Math.random() * 35 + 15); // Returnează un întreg aleatoriu între 15 și 50.
  }

  // typeNextChar — motorul recursiv de tipărire.
  // Scrie un caracter, apoi se auto-programează prin setTimeout.
  // Când paragraful e complet, trece la următorul cu o pauză dramatică.
  // Când toate paragrafele sunt gata, un cronometru de 3 secunde ascunde cursorul.
  function typeNextChar() {
    // Gardă: toate paragrafele au fost tipărite — îndepărtează cursorul după 3 secunde.
    if (paraIdx >= lines.length) {
      // cursor-hidden e o clasă CSS care setează opacitatea la 0, făcând cursorul să dispară.
      setTimeout(() => {
        cursor.classList.add("cursor-hidden"); // Estompează cursorul în tăcere.
      }, 3000);
      return; // Oprește recursiunea. Transmisiunea e completă.
    }

    // Logică: crează un element <p> nou doar când începem să tipărim un paragraf proaspăt.
    if (!currentP) {
      currentP = document.createElement("p"); // Creează un element de paragraf nou.
      if (lines[paraIdx].isSignoff) {
        currentP.className = "manifesto-signoff"; // Clasa specială pentru linia semnătura căpitanului.
      }
      output.appendChild(currentP); // Adaugă paragraful nou în containerul de ieșire.
    }

    const text = lines[paraIdx].text; // Obține textul complet al paragrafului curent.

    if (charIdx < text.length) {
      // Mai sunt caractere de tipărit în acest paragraf.
      currentP.textContent += text[charIdx]; // Adaugă următorul caracter la paragraf.
      charIdx++; // Treci la următorul index de caracter.
      // scrollIntoView ţine cursorul pe ecran pe măsură ce textul crește — dar numai
      // până când cititorul a preluat derularea, ca să nu se lupte niciodată cu el.
      if (!readerTookOver) cursor.scrollIntoView({ block: "nearest" });
      setTimeout(typeNextChar, randomDelay()); // Programează următorul caracter cu o întârziere aleatorie.
    } else {
      // Acest paragraf e terminat — avansează la următorul.
      paraIdx++; // Treci la următorul index de paragraf.
      charIdx = 0; // Resetează indexul de caracter la 0 pentru noul paragraf.
      currentP = null; // Semnalizează că un nou <p> trebuie creat data viitoare.

      if (paraIdx < lines.length) {
        // Pauză mai lungă înaintea liniei de semnătură (semnătura căpitanului) pentru efect narativ dramatic.
        const pause = lines[paraIdx].isSignoff ? 1200 : 500; // 1200ms pentru semnătură, 500ms pentru paragrafe obișnuite.
        setTimeout(typeNextChar, pause); // Programează paragraful următor după pauză.
      } else {
        // Un ultim apel care declanșează garda de mai sus.
        setTimeout(typeNextChar, 500); // Pauză scurtă, apoi garda declanșează și ascunde cursorul.
      }
    }
  }

// O scurtă clipă de tăcere înainte ca transmisia cosmică să înceapă. Imersiunea pe primul loc.
  setTimeout(typeNextChar, 1000); // Așteaptă 1 secundă, apoi începe să tipărească caracter cu caracter.
});


//  ==========================================================================
//     MECANISMUL 10: CAMERA PRIMORDIALĂ SELDON
//     Rulează pe toate paginile. Aplică ștampila pe jurnalul de călătorie
//     (primul contact + punctele de reper), iar când călătorul ajunge pe pagina
//     Camerei (vault.html), guvernează cele două chei rămase ale romanului:
//       Cheia Întâi  — quiz-urile Nav-Gate: trecerea testului unui volum întoarce
//                      prima cheie a capsulei sale.
//       Cheia a Doua — ceasul călătoriei: timpul real scurs de la primul contact,
//                      accelerat de explorare, coace a doua cheie.
//     Când ambele chei se întorc, Adormitul proiectează transmisiunea romanului
//     prin cristal.
//     @pedagogy: Acest mecanism demonstrează șapte tipare JavaScript reale:
//       1. localStorage ca magazie persistentă de stare între pagini (jurnalul de călătorie)
//       2. API-ul Fetch pentru încărcarea de JSON și markdown brut (fără biblioteci)
//       3. redarea cu template literal în DOM (capsulele constelației)
//       4. API-ul FormData + delegarea de evenimente pentru quizuri
//       5. un motor recursiv de scriere prin setTimeout (vocea Adormitului)
//       6. atributul hidden pentru a ține quizul Nav-Gate ascuns până este
//          aleasă o capsulă (o revelare deliberată, accesibilitate pe primul loc)
//       7. pagina însăși ca barieră: navigarea a înlocuit descuerea prin click
//          pe care vechiul design cu o singură pagină o folosea pentru cameră
//  ==========================================================================

//  @block: 10-A — JURNALUL DE CĂLĂTORIE (rulează pe fiecare pagină a navei)
//  Din clipa în care un călător încarcă ORICE pagină, călătoria începe.
//  @pedagogy: Acesta este un IIFE (Immediately Invoked Function Expression —
//  Expresie de funcție invocată imediat) — funcția rulează o singură dată, chiar
//  în clipa exactă în care scriptul se încarcă și nu are nevoie niciodată să fie
//  chemată din nou. Singura sa treabă este să scrie două fapte în localStorage,
//  magazia persistentă cheie–valoare a browser-ului care supraviețuiește
//  reîncărcărilor de pagină:
//    1. clipa primului contact (când călătorul a pus întâia oară piciorul la bord)
//    2. lista în creștere a paginilor distincte ("puncte de reper") vizitate
//    de atunci încoace
//    Pentru că localStorage acceptă doar șiruri, numerele trebuie convertite în
//    șiruri (String()), iar tablourile serializate cu JSON.stringify().
//  ==========================================================================
(function stampVoyageLog() {
  //  Chei de stocare scrise manual. Ținându-le în constante cu nume rezultă că
  //  același șir este garantat în fiecare fișier — o singură greșeală de tipar în
  //  un literal gol ar crea neobservat o a doua intrare, goală. MECANISM 10-B
  //  citește exact aceleași chei, astfel încât ambele blocuri sunt de acord asupra
  //  felului de a numi cele două fapte ale călătoriei.
  const FIRST_KEY = "d0_voyage_firstContact";
  const WAYPOINTS_KEY = "d0_voyage_waypoints";

  //  ---------------------------------------------------------------
  //  MARCHEAZĂ PRIMUL CONTACT
  //  ---------------------------------------------------------------
  //  Primul contact: clipa în care călătorul a pus prima dată piciorul la bord.
  if (!localStorage.getItem(FIRST_KEY)) {
    //  O pui doar dacă nu există încă niciun timestamp — prima vizită câștigă și
    //  nu este rescrisă, așa încât "vechimea călătoriei" rămâne stabilă între vizite.
    localStorage.setItem(FIRST_KEY, String(Date.now())); // Stocat în milisecunde.
  }

  //  ---------------------------------------------------------------
  //  DEDUCE PUNCTUL DE REPER CURENT DIN URL
  //  ---------------------------------------------------------------
  //  Ștampilarea punctelor de reper: deducem volumul + pagina din URL-ul curent.
  //  Exemplu: /digital-odyssey/en/frontend/html-log.html -> frontend/html-log
  const path = window.location.pathname.replace(/\/$/, ""); // Îndepărtează întâi orice bară finală, ca regexul să pornească curat.
  const match = path.match(
    /\/(frontend|backend|database|data-bridge|ux|delivery)\/([^/]+?)\.html$/,
  );
  let currentWaypoint = null; // Păstrează numele lizibil al acestei pagini, sau null dacă pagina nu e un punct de reper.

  if (match) {
    //  match[1] = volumul ("frontend"), match[2] = pagina ("html-log").
    //  Stocarea lor ca un singur șir unit cu slash dă un ID lizibil și unic.
    currentWaypoint = `${match[1]}/${match[2]}`; // ex. "frontend/html-log"
  } else {
    //  Paginile-amiral contează și ele ca puncte de reper (index, transmission etc.).
    const page = path.split("/").pop(); // Ia ultimul segment din URL (numele paginii).
    if (page && page.endsWith(".html")) currentWaypoint = page;
  }

  //  ---------------------------------------------------------------
  //  ȘTAMPILEAZĂ PUNCTUL DE REPER (DOAR O DATĂ PER PAGINĂ DISTINCTĂ)
  //  ---------------------------------------------------------------
  if (currentWaypoint) {
    //  Încarcă vectorul existent de puncte de reper (sau pornește de la zero).
    let waypoints = [];
    try {
      waypoints = JSON.parse(localStorage.getItem(WAYPOINTS_KEY)) || [];
    } catch {
      waypoints = []; // JSON corupt sau gol? Revenirea la un tablou curat.
    }
    //  Adaugă doar paginile niciodată vizitate — fiecare vizită distinctă este un boost.
    if (!waypoints.includes(currentWaypoint)) {
      waypoints.push(currentWaypoint);
      localStorage.setItem(WAYPOINTS_KEY, JSON.stringify(waypoints)); // Serializează la string înainte de a stoca.
    }
  }
})(); // Bracket-ul IIFE: tot blocul a fost deja executat până la această linie


//  @block: 10-B — MOTORUL CAMEREI PRIMORDIALE
//  Se activează doar pe pagina Camerei. Acum că vault-ul are propria pagină, nu
//  mai există o cameră ascunsă de descuiat: actul deliberat este însăși
//  navigarea,
//  așa încât codul de poartă Key-Zero a dispărut. Acest bloc guvernează cele
//  două chei rămase ale romanului:
//    Cheia Întâi  — quiz-urile Nav-Gate: trecerea unui test de volum întoarce
//                   prima cheie a capsulei sale.
//    Cheia a Doua — ceasul călătoriei: timpul real scurs de la primul contact,
//                   accelerat de explorare, coace a doua cheie.
//  Când ambele chei se întorc, Adormitul proiectează transmisiunea romanului
//  prin cristal.
//  @pedagogy: Acesta este cel mai mare mecanism unic al navei. Citește-l încet,
//  de sus până jos — fiecare funcție este o unitate didactică distinctă:
//      1.  Linia de deschidere selectează contextul paginii (o ieșire de
//          siguranță care ține întregul motor adormit pe paginile care nu sunt
//          Camera).
//      2.  Un set de constante și referințe DOM, legate o singură dată așa încât
//          fiecare funcție de mai încolo împărtășește ACELAȘI nume lizibil pentru
//          fiecare element de pe ecran.
//      3.  Încărcarea manifestului JSON, apoi calculele ceasului călătoriei și
//          particulele de logică de joc care decid ce poate debloca călătorul.
//      4.  Renderizarea constelației (un constructor de template literal peste un
//          tablou).
//      5.  Quizul Nav-Gate (FormData + grupuri de radio, punctat, răsplătit).
//      6.  Cristalul Adormitului (o transmisiune scenarizată + typeSignal
//          recursiv).
//      7.  Încărcarea jurnalului (deduce pachetele de ZI din markdown-ul brut).
//    Acestea sunt aceleași unelte pe care le întâlnește un începător în prima lună
//    de JavaScript: interogări DOM, addEventListener, array.map / .join / .filter
//    / .includes, template literal, JSON, fetch/then, și setTimeout recursiv. Nici
//    o linie nu depinde de o bibliotecă terță — orice comportament e construit din
//    propria mână.
//  ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  //  Elementul <div> al camerei este reperul care dovedește că suntem PE pagina
  //  Camerei. Dacă lipsește, suntem pe o pagină de conținut — ieșim imediat ca tot
  //  motorul (și orice legare DOM de dedesubt) să rămână adormit.
  const chamber = document.querySelector(".vault-chamber");
  if (!chamber) return; // Nu e pagina Camerei — lasă motorul adormit.

  //  ---------------------------------------------------------------
  //  LIMBA + CHEI DE STOCARE
  //  ---------------------------------------------------------------
  //  Întâi limba: JavaScript citește atributul <html lang="ro"> setat în capul
  //  paginii. Fiecare șir care apare utilizatorului este ales la rulare între
  //  variantele română (ro) și engleză (en) folosind această valoare.
  const lang = (document.documentElement.lang || "en").toLowerCase();
  //  Cele trei chei de stocare oglindesc MECANISMUL 10-A (cele două chei ale
  //  călătoriei) plus drapeelele proprii acestui bloc pentru "quiz trecut" per
  //  volum. PASS_PREFIX se completează mai târziu: "d0_vault_pass_" + volumul
  //  (ex. frontend) identifică o capsulă.
  const FIRST_KEY = "d0_voyage_firstContact";
  const WAYPOINTS_KEY = "d0_voyage_waypoints";
  const PASS_PREFIX = "d0_vault_pass_";

  //  ---------------------------------------------------------------
  //  REFERINȚE DOM — legate O SINGURĂ DATĂ, refolosite de fiecare funcție de
  //  mai jos.
  //  ---------------------------------------------------------------
  //  Fiecare apel getElementById execută o căutare în toată pagina. Legarea
  //  rezultatului la o const înseamnă căutare o singură dată, iar restul
  //  motorului vorbește cu aceste elemente printr-un nume scurt și citibil.
  const growthNote = document.getElementById("vault-growth-note");
  const constellation = document.getElementById("capsule-constellation");
  const firstContactEl = document.getElementById("vault-first-contact");
  const waypointsEl = document.getElementById("vault-waypoints");
  const shipHoursEl = document.getElementById("vault-ship-hours");
  const unlockedEl = document.getElementById("vault-unlocked");
  const sleeperStatus = document.getElementById("sleeper-status");
  const vaultOutput = document.getElementById("vault-output");
  const vaultCursor = document.getElementById("vault-cursor");
  const navGate = document.getElementById("nav-gate");
  const navGateTitle = document.getElementById("nav-gate-title");
  const navGateIntro = document.getElementById("nav-gate-intro");
  const navGateForm = document.getElementById("nav-gate-form");
  const navGateResult = document.getElementById("nav-gate-result");

  //  Jurnalul brut este încărcat live, ca site-ul și GitHub să rămână un singur
  //  corp. JOURNAL_PATH se rezolvă la ../JOURNAL-EN.md sau ../JOURNAL-RO.md —
  //  exact fișierul markdown pe care îl găzduiește repository-ul GitHub. Camera
  //  nu duplică niciodată romanul: citește cartea reală a căpitanului în clipa
  //  în care pagina rulează.
  const JOURNAL_PATH = `../JOURNAL-${lang === "ro" ? "RO" : "EN"}.md`;

  //  Două locuri de "memorie de lucru" împărtășite pentru tot blocul:
  let vaultData = null;   // vault-transmissions.json analizat
  let activeCapsule = null; // Capsula deschisă acum în Nav-Gate

  //  ---------------------------------------------------------------
  //  ÎNCARCĂ MANIFESTUL CAMEREI
  //  ---------------------------------------------------------------
  //  fetch() returnează o Promisiune. Lanțul .then() desface răspunsul în două
  //  etape: întâi verifică statusul HTTP, apoi parsează corpul ca JSON.
  fetch("../shared/data/vault-transmissions.json")
    .then((response) => {
      if (!response.ok) throw new Error(`Vault manifest not found (${response.status}).`);
      return response.json();
    })
    .then((data) => {
      //  Păstrează manifestul analizat în variabila împărtășită, ca fiecare
      //  funcție ulterioară să ajungă la capsule, călătorie și datele romanului
      //  fără a reîncărca.
      vaultData = data;
      //  Pornește cele două lucruri care au nevoie de date: desenează butoanele
      //  capsulelor și arată telemetria, apoi ține ceasul călătoriei în mers.
      renderConstellation(data.capsules);
      refreshTelemetry();
      setInterval(refreshTelemetry, 30000); // Ceasul ticăie la fiecare 30 de secunde.

      //  Nota de creștere: meta datele romanului din manifest spun călătorului
      //  câte zile sunt sigilate și promit că schema continuă să crească.
      if (growthNote && data.novel) {
        growthNote.textContent =
          (lang === "ro"
            ? data.novel.growthNote?.ro
            : data.novel.growthNote?.en) ||
          (lang === "ro"
            ? "Romanul crește — zilele sigilate se tot adună."
            : "The novel is growing — the sealed days keep mounting.");
      }
    })
    .catch((error) => {
      //  Offline, cale greșită sau fișier corrupt? Arată o eroare roz în
      //  cameră în loc să lase călătorul să se uite la o cutie tăcută.
      constellation.innerHTML =
        `<p class="vault-error">[VAULT ERROR]: ${error.message}</p>`;
    });

  //  ---------------------------------------------------------------
  //  CEASUL CĂLĂTORIEI
  //  ---------------------------------------------------------------
  //  Aceasta este matematica "Cheii a Doua". Călătorul nu așteaptă pur și simplu
  //  ceasul: poate explora nava (acumulând puncte de reper) ca să-l accelereze.
  //  readVoyageState() citește cele două fapte din localStorage scrise de
  //  MECANISMUL 10-A și calculează un singur număr: orele-navă efective trecute.
  function readVoyageState() {
    //  Primul contact, stocat ca timestamp în milisecunde; revine la "acum" dacă
    //  lipsește, ca să aibă călătoria un punct de pornire chiar la prima rulare.
    const firstContact = Number(localStorage.getItem(FIRST_KEY)) || Date.now();
    let waypoints = [];
    try {
      waypoints = JSON.parse(localStorage.getItem(WAYPOINTS_KEY)) || [];
    } catch {
      waypoints = []; // Tablou corupt? Tratează călătoria ca abia începută.
    }
    //  oreEfectiveCălătorie = oreReale * (1 + boost * numărulPunctelor)
    const realHours = (Date.now() - firstContact) / 3600000; // Milisecunde -> ore (1 oră = 3.600.000 ms).
    const boost = (vaultData && vaultData.voyage.perWaypointBoost) || 0.5; // Fiecare punct de reper multiplică progresul.
    const shipHours = realHours * (1 + boost * waypoints.length); // Totalul accelerat.
    return { firstContact, waypoints, realHours, shipHours }; // Un obiect, patru fapte.
  }

  //  Scrie cele patru celule de telemetrie pe pagina Camerei: data primului
  //  contact, câte puncte de reper sunt ștampilate, orele-navă curente și
  //  numărul deblocate/total. Apelat la încărcare și pe fiecare tic de 30 de
  //  secunde.
  function refreshTelemetry() {
    const state = readVoyageState(); // Ia ceasul proaspăt calculat.
    firstContactEl.textContent = new Date(state.firstContact).toLocaleDateString(lang, { // Formatează timestamp-ul frumos...
      year: "numeric",          // ...anul complet,
      month: "short",           // numele scurt al lunii,
      day: "numeric",           // și ziua numerică
    });
    waypointsEl.textContent = String(state.waypoints.length); // Numără punctele de reper.
    shipHoursEl.textContent = state.shipHours.toFixed(1); // O zecimală.

    if (vaultData) {
      const total = vaultData.capsules.length; // Numărul de capsule din manifest.
      const unlocked = vaultData.capsules.filter((c) => isUnlocked(c)).length; // Câte au AMBELE chei.
      unlockedEl.textContent = `${unlocked} / ${total}`; // ex. "1 / 6".
    }
  }

//  ---------------------------------------------------------------
  //  STAREA CHEILOR: quiz trecut ȘI ceasul călătoriei copt
  //  ---------------------------------------------------------------
  //  Următoarele trei funcțulețe sunt "predicate" — fiecare răspunde la O
  //  întrebare da/nu despre o capsulă. Ținându-le separate, restul codului poate
  //  pune întrebări clare ("a fost trecut quizul?") fără să-i pese CUM este
  //  stocat răspunsul.
  function quizPassed(capsule) {
    //  Citește steagul cheiat după volum: "d0_vault_pass_frontend" === "1" înseamnă
    //  călătorul a trecut Nav-Gate-ul acelui volum. String-ul "1" înseamnă adevărat.
    return localStorage.getItem(PASS_PREFIX + capsule.volume) === "1";
  }

  function clockRipened(capsule) {
    //  Cheia a Doua se coace când orele-navă accelerate ating cota capsulei.
    return readVoyageState().shipHours >= capsule.requiredShipHours;
  }

  function isUnlocked(capsule) {
    //  O capsulă este cu adevărat deschisă DOAR când ambele chei se întorc deodată.
    //  && (ȘI) înseamnă că un quiz trecut fără timp, sau timp fără quiz, contează
    //  tot ca blocat.
    return quizPassed(capsule) && clockRipened(capsule);
  }

  //  ---------------------------------------------------------------
  //  RENDERIZATORUL CONSTELAȚIEI DE CAPSULE
  //  ---------------------------------------------------------------
  //  Listener-ul de click este atașat O SINGURĂ DATĂ, în afara renderizatorului,
  //  astfel încât re-renderizarea constelației să nu îngrămădească niciodată
  //  handlere duplicate. Acesta este tiparul "delegare de evenimente": în loc să
  //  dea fiecărei capsule propriul listener (care s-ar strica în clipa în care
  //  re-renderizăm lista), UN singur listener trăiește pe container și inspectează
  //  orice a fost clicat.
  constellation.addEventListener("click", (event) => {
    const btn = event.target.closest(".capsule"); // Urcă de la click până găsește butonul de capsulă.
    if (!btn) return; // Clicundeva în afara unei capsule? Ignoră.
    const cap = vaultData.capsules.find((c) => c.id === btn.dataset.capsule); // Potrivește data attribute-ul cu o capsulă din manifest.
    if (cap) handleCapsuleClick(cap, btn); // Găsită! Trimite la routerul principal.
  });

  //  Construiește butoanele de capsulă ca un singur șir HTML din tabloul
  //  manifestului. Aceasta arată trei metode de tablou folosite dintr-o suflare:
  //    .map()     converta fiecare capsulă -> un șir de buton
  //    .join("")  lipi toate șirele de buton cu nimic între ele
  //  innerHTML primește șirul finisat dintr-o dată. Starea este un string:
  //  "sealed", "ripening", sau "open".
  function renderConstellation(capsules) {
    constellation.innerHTML = capsules
      .map((cap) => {
        const passed = quizPassed(cap); // Steagul de quiz a fost ștampilat?
        const ripened = clockRipened(cap); // Este ceasul călătoriei suficient de copt?
        const state = isUnlocked(cap) // Decide starea vizuală...
          ? "open"        // ...ambele chei: deblocată complet.
          : passed
            ? "ripening"  // quiz făcut, timpul încă scurt.
            : "sealed";   // altfel: blocat.
        const lockLabel = // Text lizibil al lacătului, potrivit cu starea.
          !passed && !ripened
            ? `${lang === "ro" ? "CHEIE DUALĂ: test + timp" : "DUAL KEY: quiz + time"}`
            : !passed
              ? `${lang === "ro" ? "TEST NECESAR" : "QUIZ REQUIRED"}`
              : `${lang === "ro" ? "SE COACE (timp)" : "RIPENING (time)"}`;
        const title = cap.title[lang] || cap.title.en; // Alege titlul limbii.

        //  Template literal: un buton HTML real construit cu înlocuitori ${}.
        //  data-capsule ascunde id-ul capsulei ca handlerul de click să-l poată
        //  găsi; type="button" oprește butonul să trimită vreun formular.
        return `
        <button class="capsule capsule--${state}" data-capsule="${cap.id}" type="button">
          <span class="capsule-day">${cap.day}</span>
          <span class="capsule-volume">${cap.volume}</span>
          <span class="capsule-title">${title}</span>
          <span class="capsule-lock">${lockLabel}</span>
        </button>`;
      })
      .join(""); // Concaten­ează fiecare șir de buton într-un singur payload innerHTML.
  }

  //  Routerul central pentru un click pe capsulă. Citește cele două chei și alege
  //  una dintre cele trei căi de comportament — aceasta este o scară curată de
  //  decizii if/else.
  function handleCapsuleClick(cap, btn) {
    const passed = quizPassed(cap); // Instantaneu al Cheii Întâi (quizul).
    const ripened = clockRipened(cap); // Instantaneu al Cheii a Doua (timp).

    //  Cazul 1: deja deblocată — proiectează transmisiunea direct.
    if (passed && ripened) {
      projectTransmission(cap); // Ambele chei întoarse: trezește Adormitul acum.
      return;
    }

    //  Cazul 2: quizul încă netrecut — deschide Nav-Gate-ul.
    if (!passed) {
      openNavGate(cap); // Cheia întâi încă lipsește: dă testul.
      return;
    }

    //  Cazul 3: quiz trecut, ceasul tot se coace — explică așteptarea.
    if (!ripened) {
      const need = cap.requiredShipHours - readVoyageState().shipHours; // Câte ore-navă mai rămân.
      setSleeperStatus(
        lang === "ro"
          ? `CAPSULA SE COACE — încă ${need.toFixed(1)} ore-navă până se deschide. Explorează nava ca s-o accelerezi.`
          : `CAPSULE STILL RIPENING — ${need.toFixed(1)} more ship-hours until it opens. Explore the ship to accelerate.`,
      );
    }
  }

//  ---------------------------------------------------------------
  //  QUIZUL NAV-GATE
  //  ---------------------------------------------------------------
  function openNavGate(cap) {
    activeCapsule = cap;
    const q = cap.quiz;
    navGateTitle.textContent = q.title[lang] || q.title.en;
    navGateIntro.textContent =
      lang === "ro"
        ? `Dovedește că ai străbătut volumul ${cap.volume}. Treci de testul cu cel puțin ${q.passThreshold} din ${q.questions.length} răspunsuri corecte, iar cheia întâi a capsulei se va întoarce.`
        : `Prove you have traversed the ${cap.volume} volume. Answer at least ${q.passThreshold} of ${q.questions.length} correctly to turn the first key of this capsule.`;
    navGateResult.innerHTML = "";

    //  Renderizează întrebările de quiz ca grupuri de radio.
    //  Un .map() peste întrebări produce HTML-ul inițial; în interiorul lui,
    //  opțiunile își primesc propriul .map() ca fiecare radio să fie construit din
    //  propriul obiect. name="q${qIndex}" grupează radio-urile unei întrebări
    //  împreună — browserul întoarce singur "doar un radio per grup de nume".
    //  Spațiile albe din fiecare răspuns rămân brute în interiorul template
    //  literal-ului, apoi toate sunt unite cu join("").
    navGateForm.innerHTML = q.questions
      .map((question, qIndex) => {
        const options = question.options
          .map(
            (opt, oIndex) => `
              <label class="nav-gate-option">
                <input type="radio" name="q${qIndex}" value="${oIndex}" required />
                <span>${opt[lang] || opt.en}</span>
              </label>`,
          )
          .join("");
        return `
          <fieldset class="nav-gate-question">
            <legend>${question.q[lang] || question.q.en}</legend>
            ${options}
          </fieldset>`;
      })
      .join("");

    //  Butonul de trimitere — construit cu createElement ca să controlăm type-ul
    //  și eticheta, apoi atașat la formular ca un node real (fără re-parse).
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "nav-gate-submit";
    submit.textContent = lang === "ro" ? "DESCUIE CAPSULA" : "UNSEAL THE CAPSULE";
    navGateForm.appendChild(submit);

    //  Dezvăluie panoul și duce viewport-ul glisat spre el.
    navGate.hidden = false;
    navGate.scrollIntoView({ behavior: "smooth", block: "center" });
  }

//  ---------------------------------------------------------------
  //  TRIMITE — notează quizul, decide cheia
  //  ---------------------------------------------------------------
  //  Din nou delegare de evenimente, dar pentru "submit" (se declanșează când se
  //  apasă butonul de trimitere al formularului SAU tasta Enter).
  //  event.preventDefault() oprește GET-resubmit-ul nativ al browserului,
  //  ca pagina să nu se reîncarce niciodată și rezultatul să fie desenat live la
  //  fața locului.
  navGateForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Oprește reîncărcarea nativă a paginii.
    if (!activeCapsule) return; // Niciun context de capsulă? Nimic de notat.

    //  FormData este unealta proprie a browserului pentru citirea controalelor
    //  de formular. .get() returnează valoarea radio-ului ales (indexul pentru
    //  radio) după numele grupului — dându-ne indexul răspunsului ales pentru
    //  fiecare întrebare dintr-odată.
    const formData = new FormData(navGateForm);
    const answers = activeCapsule.quiz.questions.map((_, qIndex) =>
      formData.get(`q${qIndex}`), // Indexul ales de călător.
    );

    //  Scorul: .reduce() străbate fiecare întrebare, acumulând 1 pentru fiecare
    //  răspuns corect. Number(string) transformă valoarea radio într-un întreg
    //  ca să-l comparăm cu q.correct prin ===. Compararea === q.correct ? 1 : 0
    //  devine elementul de adunare al acumulării (ternar într-un reduce — un tipar de începător).
    const score = activeCapsule.quiz.questions.reduce((acc, q, idx) => {
      return acc + (Number(answers[idx]) === q.correct ? 1 : 0);
    }, 0);

    const threshold = activeCapsule.quiz.passThreshold; // Răspunsurile corecte necesare.
    const passed = score >= threshold; // Verdictul binar al întregului quiz.

    if (passed) {
      //  Cheia întâi se întoarce: punctul de reper al volumului e ștampilat
      //  permanent.
      localStorage.setItem(PASS_PREFIX + activeCapsule.volume, "1");
      navGateResult.innerHTML =
        `<p class="nav-gate-result-ok">${
          lang === "ro"
            ? `CHEIE ÎNTOARSĂ — ${score}/${answers.length} corecte. Capsula a primit cheia întâi.`
            : `FIRST KEY TURNED — ${score}/${answers.length} correct. The capsule has received its first key.`
        }</p>`;
      //  Constelația și telemetria sunt re-renderizate ca starea "se coace"
      //  și numărătoarea deblocatelor să reflecte cheia proaspăt întoarsă.
      renderConstellation(vaultData.capsules);
      refreshTelemetry();
    } else {
      //  Sub prag: nicio cheie, și feedback clar despre ce să faci în continuare.
      navGateResult.innerHTML =
        `<p class="nav-gate-result-fail">${
          lang === "ro"
            ? `NU AI TRECUT — ${score}/${answers.length}. Ai nevoie de cel puțin ${threshold}. Reîncearcă după o nouă traversare.`
            : `NOT PASSED — ${score}/${answers.length}. You need at least ${threshold}. Retry after another traversal.`
        }</p>`;
    }
  });

//  ---------------------------------------------------------------
  //  CRISTALUL ADORMITULUI — motorul de proiecție
  //  ---------------------------------------------------------------
  function setSleeperStatus(text) {
    //  Un helper de o linie: o linie scurtă și sonoră de stare deasupra ieșirii.
    sleeperStatus.textContent = text;
  }

  //  projectTransmission este marea finală a Camerei: în clipa în care ambele
  //  chei se întorc, aceasta construiește întregul DOM al transmisiunii. Arată
  //  cealaltă față a utilizării innerHTML — construirea unor noduri cu
  //  createElement când markup-ul trebuie insertat CHIAR ÎN TIMP ce textul
  //  utilizatorului (teaserul) se scrie încă în ele.
  function projectTransmission(cap) {
    //  Marchează capsula ca deschisă ca să-și păstreze starea luminată vizual.
    //  Întâi stingem TOATE capsulele, apoi luminăm pe cea clicată —
    //  querySelectorAll + forEach le parcurge pe toate, șterge/adaugă clasa.
    constellation
      .querySelectorAll(".capsule")
      .forEach((b) => b.classList.remove("capsule--active"));
    const activeBtn = constellation.querySelector(
      `[data-capsule="${cap.id}"]`, // Template literal din nou, de data asta ca selector CSS.
    );
    if (activeBtn) activeBtn.classList.add("capsule--active");

    //  Trezește Adormitul: o linie de stare-banner în limba curentă.
    setSleeperStatus(
      lang === "ro"
        ? "ADORMITA SE TREZEȘTE — TRANSMISIE RECEPȚIONATĂ"
        : "THE SLEEPER WAKES — TRANSMISSION RECEIVED",
    );
    vaultOutput.innerHTML = ""; // Golește întâi orice transmisiune anterioară.

    //  Proiecția începe cu linia de semnătură: apoi semnalul teaser.
    //  Alege șirul potrivit limbii din capsula manifestului.
    const title = cap.title[lang] || cap.title.en;
    const teaser = cap.teaser[lang] || cap.teaser.en;

const header = document.createElement("p");
    header.className = "vault-transmission-title";
    header.textContent = `${cap.day} — ${title}`; // ex. „DAY 12 — The Joins”.
    vaultOutput.appendChild(header);

    const signal = document.createElement("p");
    vaultOutput.appendChild(signal); // În acest <p> scrie typeSignal, caracter cu caracter.

    //  Stratul delta: hashele de commit care au dat naștere acestei transmisiuni.
    if (cap.deltas && cap.deltas.length) {
      const delta = document.createElement("p");
      delta.className = "vault-delta-line";
      delta.textContent = `TRANSMISSION DELTA${cap.deltas.length > 1 ? "S" : ""}: ${cap.deltas.join(" · ")}`;
      vaultOutput.appendChild(delta);
    }

    //  Dacă ziua nu e scrisă, Adormitul rostește numai profeția în așteptare.
    //  cap.status === "pending" marchează în manifest zilele încă sigilate.
    if (cap.status === "pending") {
      typeSignal(signal, teaser, () => {
        const pending = document.createElement("p");
        pending.className = "vault-pending-note";
        pending.textContent =
          lang === "ro"
            ? "Această cală e încă în curs de încărcare. Căpitanul scrie — întoarce-te când nava a avansat."
            : "This cargo hold is still being loaded. The captain is writing — return when the ship has advanced.";
        vaultOutput.appendChild(pending);
      });
      return; // Oprește-te aici: nu există text de jurnal de adus pentru o zi în așteptare.
    }

    //  Zilele scrise: scrie teaser-ul, apoi aduce secțiunea jurnalului la viață.
    //  Proiecția e secvențială — typeSignal rulează fetch doar DUPĂ ce teaser-ul
    //  se termină (callback-ul onDone), ca să audă călătorul întâi teaser-ul,
    //  după viața întregii zile.
    typeSignal(signal, teaser, () => {
      fetchJournalPackage(cap, (fullText) => {
        const divider = document.createElement("p");
        divider.className = "vault-divider";
        divider.textContent = "— · — · —"; // Un motiv grafic care separă teaser-ul de proză.
        vaultOutput.appendChild(divider);

        const full = document.createElement("pre");
        full.className = "vault-full-text";
        full.textContent = fullText; // Markdown-ul secțiunii de ZI, cum a fost fixat, verbatim.
        vaultOutput.appendChild(full);

        //  Un link real către jurnalul căpitanului pe GitHub, deschis în tab nou.
        const link = document.createElement("p");
        link.className = "vault-journal-link";
        const a = document.createElement("a");
        a.href = JOURNAL_PATH;
        a.target = "_blank"; // Tab nou ...
        a.rel = "noopener"; // ... fără a da noii pagini o referință înapoi.
        a.textContent =
          lang === "ro"
            ? "DESCHIDE JURNALUL COMPLET (GitHub)"
            : "OPEN THE FULL JOURNAL (GitHub)";
        link.appendChild(a);
        vaultOutput.appendChild(link);
      });
    });
  }

  //  ---------------------------------------------------------------
  //  VOCEA ADORMITULUI — un motor recursiv de scriere
  //  ---------------------------------------------------------------
  //  Funcția primește elementul în care să scrie, textul de dezvăluit și un
  //  callback onDone rulat când tot string-ul a fost scris. Aceasta este o
  //  lecție despre recursiune + o închidere (closure): typeNext se programează
  //  SINGUR cu setTimeout până când idx ajunge la capăt — închiderea continuă
  //  să-și aducă aminte de idx între ticuri.
  function typeSignal(element, text, onDone) {
    let idx = 0; // Poziția cursorului în interiorul stringului (contorul nostru partajat).
    vaultCursor.style.display = "inline"; // Arată cursorul de text intermitent.
    vaultOutput.scrollIntoView({ behavior: "smooth", block: "nearest" });

    function typeNext() {
      if (idx < text.length) {
        element.textContent += text[idx]; // Adaugă un caracter elementului.
        idx++; // Avansează contorul partajat.
        vaultCursor.scrollIntoView({ block: "nearest" }); // Urmărește cursorul.
        //  Întârzieri aleatorii de 8–20ms emulează un semnal neregulat din spațiul
        //  adânc.
        setTimeout(typeNext, Math.floor(Math.random() * 12 + 8));
      } else {
        //  Scrisul s-a terminat: ascunde cursorul și cheamă continuarea apelantului.
        vaultCursor.style.display = "none";
        if (onDone) onDone();
      }
    }
    typeNext(); // Declanșează primul tic.
  }

//  ---------------------------------------------------------------
  //  JURNALUL — taie pachete de ZILE din markdown-ul live
  //  ---------------------------------------------------------------
  //  Aduce jurnalul brut și extrage pachetul de secțiuni DAY pe care capsula
  //  îl deblochează (cap.days, ex. ["DAY 00", ..., "DAY 21"]). Fiecare DAY este
  //  tăiat, markdown-ul este dezbrăcat, iar secțiunile sunt unite cu un divizor,
  //  ca pachetul întreg să bată la mașină drept o singură transmisiune.
  //  Îmbunătățire progresivă: dacă fetch-ul eșuează (offline / file://), teaser-ul
  //  deja primit stă de unul singur — Camera nu se sparge niciodată.
  function extractDaySection(markdown, dayWord, dayNumber) {
//  Ce vânăm, ex. "DAY 12". Interpolat din lista de zile a capsulei, deci
    //  aceeași funcție servește fiecare volum.
    const sectionHeader = `${dayWord} ${dayNumber}`;
    //  O RegExp construită la runtime. Scăpăm caracterele speciale din header
    //  prima dată (replace cu \$&) ca să nu poată fi citit "DAY 12" drept tipar.
    //  ^#{1,3} = 1..3 hare la început (un titlu markdown), apoi header-ul,
    //  apoi \b (o graniță de cuvânt) astfel încât "DAY 12" să nu se potrivească
    //  niciodată în interiorul "DAY 123".
const headerPattern = new RegExp(
      `^#{1,3}\\s+${sectionHeader.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      "m", // Steagul "m" lasă ^ să se potrivească peste începuturile de linie din tot fișierul.
    );
    const startMatch = markdown.match(headerPattern);
    if (!startMatch) throw new Error(`Section ${sectionHeader} not found.`);
    const startIdx = startMatch.index; // Deplasarea de caracter a începutului de titlu.

    //  Găsește următorul titlu de secțiune după el (un nou DAY / ZIUA, pentru orice
    //  volum).
    //  .slice() decupează șirul chiar după acest titlu, ca să înceapă căutarea
    //  curat dincolo de ziua curentă; +sectionHeader.length trece peste titlu.
    const nextMatch = markdown
      .slice(startIdx + sectionHeader.length)
      .match(/^#{1,3}\s+(DAY|ZIUA)\s+\d+[:\s—]/m);
    const endIdx = nextMatch
      ? startIdx + sectionHeader.length + nextMatch.index // Oprește la ziua următoare.
      : markdown.length; // Fără zi următoare: secțiunea merge până la capătul fișierului.

    //  Dezbrăcă sintaxa markdown ca să bată proză lizibilă. Fiecare .replace
    //  este UNA regula de traducere, rulată de la stânga la dreapta pe felie.
    let section = markdown.slice(startIdx, endIdx);
    section = section
      .replace(/^\s*#+\s*/gm, "")   // îndepărtează titlurile (un # la început)
      .replace(/\*\*([^*]+)\*\*/g, "$1") // bold: **cuvânt** -> cuvânt
      .replace(/\*([^*]+)\*/g, "$1")     // italic: *cuvânt* -> cuvânt
      .replace(/^---\s*$/gm, "")          // reguli orizontale (un singur divizor)
      .replace(/`([^`]+)`/g, "$1")        // cod inline: `cod` -> cod
      .trim(); // Scade liniile goale din cap și coadă din zona secțiunii.
    return section; // Textul DAY lizibil, pregătit pentru <pre>.
  }

  //  Leagă pachetul întreg: rezolvă fiecare număr de zi, taie TOATE secțiunile
  //  de DAY și — doar dacă a aterizat cel puțin una — cheamă onSuccess cu
  //  secțiunile unite de o linie goală. Zilele primite vin direct din manifestul
  //  capsulei (cap.days).
  function fetchJournalPackage(cap, onSuccess) {
    const days = cap.days || [];
    if (!days.length) return; // Încă nu s-a repartizat niciun pachet — teaserul stă.

    fetch(JOURNAL_PATH)
      .then((response) => {
        if (!response.ok) throw new Error("Journal unavailable.");
        return response.text(); // Vrem markdown brut, nu JSON.
      })
      .then((markdown) => {
        //  Jurnalul românesc scrie ziua „ZIUA", cel englezesc „DAY".
        const dayWord = lang === "ro" ? "ZIUA" : "DAY";
        //  Rezolvă fiecare număr de zi, apoi taie fiecare secțiune din pachet.
        const sections = [];
        for (const day of days) {
          //  Scoate primele cifre din „DAY 12" -> „12".
          const dayNumber = (day.match(/\d+/) || [""])[0];
          if (!dayNumber) continue; // Până la urmă nicio cifră? Sar peste intrarea asta.
          try {
            sections.push(extractDaySection(markdown, dayWord, dayNumber));
          } catch {
            //  O zi lipsă nu strică nimic: zilele mai târzii ori mai vechi tot aterizează.
          }
        }
        if (!sections.length) throw new Error("No sections projected.");
        onSuccess(sections.join("\n\n")); // Predă pachetul întreg.
      })
      .catch(() => {
        //  Revenire tăcută: teaserul deja scris rămâne proiecția.
        setSleeperStatus(
          lang === "ro"
            ? "SIGNAL PARȚIAL — arhiva e în afara razei; teaserul rămâne."
            : "PARTIAL SIGNAL — the archive is out of range; the teaser stands.",
        );
      });
  }
});

//  ==========================================================================
//     BACKLOG — Îmbunătățiri de Navigare & UX (Mecanisme Planificate)
//     Aceste intrări trăiesc acum în registrul principal al proiectului:
//     BACKLOG-RO.md. Vezi intrările 013–016 (Index dinamic al sidebarului,
//     Căutare și filtrare, Offset dinamic al navbarului, Export de note) —
//     întreținute acolo, nu duplicate aici.
//  ==========================================================================
