//  ==========================================================================
//     ODISEEA DIGITALĂ: NUCLEUL DE CONTROL CRUCIAL (script.js)
//  ==========================================================================

// DECLARAȚIE VARIABLE GLOBALE (Senzorii principali ai navei)
let lastScrollY = window.scrollY; // Memorează ultima poziție de scroll pe verticală a paginii globale
const navbar = document.querySelector(".navbar"); // Selectează bara de navigare de sus (HUD-ul principal)
const sidebar = document.querySelector(".log-sidebar"); // Selectează panoul din stânga (Consola de control)

//  --------------------------------------------------------------------------
//     MECANISMUL 1: DINAMICA NAVBAR-ULUI (Ascundere / Afișare la Scroll)
//     Acest script oferă imersiune: ascunde meniul când citești, îl arată când urci pagina.
//    --------------------------------------------------------------------------
window.addEventListener("scroll", () => {
  // Monitorizăm constant mișcarea rotiței sau degetului pe ecran
  const currentScrollY = window.scrollY; // Aflăm coordonata curentă pe verticală

  // Verificăm: dacă utilizatorul dă scroll în jos ȘI a depășit 100 de pixeli de la tavan
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    navbar.classList.add("navbar--hidden"); // Adăugăm clasa din CSS care împinge navbar-ul în sus, ascunzându-l

    // Optimizare Mobile HUD: Dacă navbar-ul s-a ascuns, lipim sidebar-ul direct de tavanul ecranului (top: 0)
    if (sidebar) sidebar.style.top = "0";
  }
  // Altfel, înseamnă că utilizatorul dă scroll în sus (vrea să navigheze înapoi)
  else {
    navbar.classList.remove("navbar--hidden"); // Ștergem clasa, iar navbar-ul coboară lin înapoi pe ecran

    // Dacă navbar-ul este vizibil, împingem sidebar-ul în jos cu 60px ca să nu se suprapună sub el
    if (sidebar) sidebar.style.top = "60px";
  }

  // Actualizăm variabila globală cu noua poziție, pregătind-o pentru următorul scroll
  lastScrollY = currentScrollY;
});

//  --------------------------------------------------------------------------
//  MECANISMUL 2: DETECTARE AUTOMATĂ ȘI AUTO-CENTRARE SIDEBAR (PRO UX UPDATE)
//  Pe măsură ce citești în dreapta, butoanele din stânga se aprind ȘI sidebar-ul
//  se derulează singur pentru a-ți arăta sectorul și ziua curentă!
//  --------------------------------------------------------------------------
// 1. Configurația radarului (Fereastra centrală de scanare a ecranului)
const observerOptions = {
  root: null, // Senzorul scanează raportat direct la ecranul vizibil al browserului (viewport)

  //    Linia de scanare laser: detectăm elementul când se află în zona centrală a ecranului.
  //    Ignorăm primii 20% de sus și ultimii 70% de jos, lăsând o fereastră fixă de scanare.
  rootMargin: "-20% 0px -70% 0px", // Laserul scanează zona central-superioară a ecranului
  threshold: 0, // Declanșează semnalul instantaneu, imediat ce articolul atinge marja de mai sus
};

// 2. Logica senzorului: Ce se întâmplă când o zi/secțiune intră în zona laser
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Dacă o secțiune de log a intersectat cu succes marja noastră de scanare
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id"); // Extragem ID-ul unic al acelui articol (ex: "html-day01")

      // Pasul A: Ștergem clasa stării active (stingem lumina roz) de la TOATE butoanele din sidebar ca să facem curat
      document.querySelectorAll(".sidebar-nav a").forEach((link) => {
        link.classList.remove("active");
      });

      // Pasul B: Căutăm strict butonul din stânga care trimite către ID-ul pe care tocmai l-am detectat pe ecran
      const activeLink = document.querySelector(
        `.sidebar-nav a[href="#${id}"]`,
      );

      // Dacă am găsit butonul corespunzător, îi injectăm clasa .active pentru a-l aprinde vizual
      if (activeLink) {
        // Pasul C: Aprindem butonul zilei curente pe roz (`nebula-pink`)
        activeLink.classList.add("active");
        // Pasul D: Selectăm lista interioară care are scroll independent (eticheta <ul>)
        const innerSidebarList = document.querySelector(".sidebar-nav ul");

        // ACTIVAREA RADARULUI: Rulăm această logică DOAR pe Desktop (ecrane > 768px)
        if (window.innerWidth > 768 && innerSidebarList) {
          //     ALGORITMUL DE AUTO-CENTRARE:
          //    Calculăm unde se află butonul zilei în listă (activeLink.offsetTop)
          //    și scădem jumătate din înălțimea ferestrei sidebar-ului (innerSidebarList.clientHeight / 2).
          //    Acest calcul matematic simplu va aduce butonul și Sectorul din care face parte
          //    FIX în centrul vizual al meniului, sub titlul MAP!
          const centerPosition =
            activeLink.offsetTop - innerSidebarList.clientHeight / 2;

          // Sidebar-ul execută un scroll automat, lin și silențios către acea zonă
          innerSidebarList.scrollTo({
            top: centerPosition,
            behavior: "smooth", // Alunecare fluidă cinematică
          });
        }
      }
    }
  });
}, observerOptions);

// 3. Activarea fizică a senzorului pe elemente.  Pornirea radarelor pe fiecare zi scrisă de mine  în HTML
// Îi spunem browserului să pună câte un senzor pe fiecare articol de zi scris de tine în HTML
document.querySelectorAll(".log-entry").forEach((article) => {
  observer.observe(article); // Pornim scanarea automată pentru acest articol
});

//  --------------------------------------------------------------------------
//   MECANISMUL 3: RE-TRIGGER ANIMATION (Efectul Cyberpunk de Typing Reset)
//   Resetează și repornește animația textului verde din ".mission-status" când devine vizibil.
//   Prinde momentul când caseta intră pe ecran și repornește scrisul de la zero!
//  --------------------------------------------------------------------------
const statusObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Când caseta verde de status a unei misiuni intră pe ecran (vizibilitate peste 30%)
      if (entry.isIntersecting) {
        const statusText = entry.target.querySelector("p"); // Căutăm eticheta <p> din interior

        if (statusText) {
          statusText.style.animation = "none"; // Pasul A: Înghețăm și oprim forțat animația curentă
          statusText.offsetHeight; // Pasul B: TRUCUL MAGIC! Forțăm browserul să recalculeze dimensiunea, înregistrând resetul
          statusText.style.animation = null; // Pasul C: Ștergem blocarea, permițând animațiilor din CSS (typing și blink) să repornească curat
        }
      }
    });
  },
  { threshold: 0.3 },
); // Declanșează când cel puțin 30% din casetă e vizibilă pe ecran

// Atașăm senzorul pe toate barele de status din jurnalele tale HTML
document.querySelectorAll(".mission-status").forEach((status) => {
  statusObserver.observe(status); // Pornim radarul de monitorizare pentru fiecare casetă
});

// --------------------------------------------------------------------------
//     MECANISMUL 4: MEMORIE PERSISTENTĂ (Sistem de salvare LocalStorage per Articol)
//     Permite căpitanului să scrie notițe în terminal și să le păstreze chiar și după Refresh.
//    --------------------------------------------------------------------------

// Funcția A: Salvarea semnalului în arhive (Când apeși pe butonul de sub text-area)
function saveNote(dayId) {
  const textarea = document.getElementById(dayId); // Căutăm caseta de text (textarea) folosind ID-ul ei unic
  const noteContent = textarea.value; // Extragem textul pe care l-ai tastat în interiorul ei

  // Salvăm conținutul în memoria securizată a browserului (localStorage)
  // ID-ul zilei devine o „cheie” unică (ex: cheia "html-note-day01" va ține doar textul acelei zile)
  localStorage.setItem(dayId, noteContent);

  console.log(`Signal saved for sector: ${dayId}`); // Afișăm un log tehnic de confirmare în consola de dezvoltator
  alert("Signal extension saved to local archives."); // Alertă pe ecran pentru a confirma utilizatorului salvarea
}

// Funcția B: Încărcarea automată a datelor stocate (La pornirea/încărcarea paginii)
window.addEventListener("load", () => {
  const allNotes = document.querySelectorAll(".note-terminal textarea"); // Căutăm toate casetele de text din jurnal

  allNotes.forEach((textarea) => {
    const savedContent = localStorage.getItem(textarea.id); // Întrebăm memoria browserului dacă are ceva salvat pentru acest ID

    // Dacă am găsit notițe vechi în arhivă, le reinjectăm automat în căsuța de text ca să nu le pierzi
    if (savedContent) {
      textarea.value = savedContent;
    }
  });
});

// --------------------------------------------------------------------------
//    MECANISMUL 5: SOLUȚIA SALVATOARE ANTI-DEPLASARE DESKTOP (Navigație Inteligentă Ancore)
//    Oprește browserul din a trage sidebar-ul în sus pe Desktop și redă libertatea pe Mobil.
//    --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Selectăm containerul din dreapta (zona de articole)
  const mainContentZone = document.querySelector(".log-content");

  //  CORECTURĂ RADAR: Selectăm atât zilele (.sidebar-link) cât și link-ul special de hartă (.map-title-link)
  //  pentru a le pune sub aceeași barieră de protecție mecanică!
  const navigationLinks = document.querySelectorAll(
    ".sidebar-link, .map-title-link",
  );

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // PASUL A: VERIFICĂM MODUL DE OPERARE (Desktop vs Mobil)
      if (window.innerWidth > 768) {
        //  IMPRESCINDIBIL: Oprim acțiunea nativă a browserului care trăgea sidebar-ul în sus!
        //  Acesta este scutul care blochează fuga titlului h4 de pe ecran.
        event.preventDefault();

        const targetAnchorId = link.getAttribute("href"); // Preluăm ancora (ex: "#top-deck" sau "#html-day01")
        const targetArticleSection = document.querySelector(targetAnchorId); // Găsim elementul țintă

        if (targetArticleSection && mainContentZone) {
          let exactScrollCoordinates;

          //  PROTOCOL INDIVIDUAL PENTRU HĂRȚI:
          //   Dacă utilizatorul a apăsat pe titlul mare MAP, îi ordonăm containerului din dreapta
          //   să se reseteze complet în vârf (coordonata 0), fără decalaje parazite!
          if (link.classList.contains("map-title-link")) {
            exactScrollCoordinates = 0;
          }
          //  PROTOCOL INDIVIDUAL PENTRU ZILE:
          //  Se aplică amortizarea ta ideală de 100px pentru a așeza logurile curat sub HUD.
          else {
            exactScrollCoordinates = targetArticleSection.offsetTop - 100;
          }

          // Executăm scroll-ul fluid STRICT în interiorul ferestrei din dreapta (.log-content)
          mainContentZone.scrollTo({
            top: exactScrollCoordinates,
            behavior: "smooth", // Alunecare cinematică lină
          });

          // Schimbăm discret URL-ul din bara de sus a browserului fără salturi vizuale haotice
          history.pushState(null, null, targetAnchorId);
        }
      }
      // PASUL B: MODUL MOBIL
      else {
        console.log(
          `Mobile navigation active for sector: ${link.getAttribute("href")}`,
        );
      }
    });
  });
});

// --------------------------------------------------------------------------
//    MECANISMUL 6: AUTO-SCROLL HUD MOBILE (Sincronizare Swipe Automatic)
//    Prinde momentul când o zi devine activă la scroll pe mobil și glisează
//    automat banda HUD pentru a aduce capsula curentă în centrul ecranului!
// --------------------------------------------------------------------------
document.addEventListener("scroll", () => {
  // Executăm acest protocol strict pe ecrane strâmte (Mobile / Split-screen)
  if (window.innerWidth <= 768) {
    // Selectăm containerul exterior al consolei care are overflow-x: auto
    const hudContainer = document.querySelector(".log-sidebar");

    // Găsim butonul de zi care a primit clasa .active în acel moment de la Mecanismul 4
    const activeButton = document.querySelector(".sidebar-nav a.active");

    // Scut de siguranță: Rulăm logica doar dacă ambele elemente sunt active pe ecran
    if (hudContainer && activeButton) {
      /* MATEMATICA REALTĂȚII TAXTILE:
          Calculăm poziția butonului în raport cu marginea stângă a ecranului (offsetLeft)
         și scădem jumătate din lățimea HUD-ului pentru a-l poziționa fix pe centru! */
      const buttonLeftCoordinates = activeButton.offsetLeft;
      const buttonWidth = activeButton.offsetWidth;
      const hudWidth = hudContainer.offsetWidth;

      const targetScrollPosition =
        buttonLeftCoordinates - hudWidth / 2 + buttonWidth / 2;

      // Ordonăm consolei să execute o glisare orizontală lină (smooth) la acea coordonată
      hudContainer.scrollTo({
        left: targetScrollPosition,
        behavior: "smooth",
      });
    }
  }
});

//    ==========================================================================
//    MECANISMUL 07: SINCRO-DETECTOR CURSOR // TERMINAL ERASE PROTOCOL
//    Dezactivează și șterge definitiv cursoarele de scriere după stabilizarea textului.
//    ==========================================================================

// Protocolul se activează automat la încărcarea completă a matricii DOM a cockpitului
document.addEventListener("DOMContentLoaded", () => {
  // 1. ANCORELE SENZORILOR: Identificăm elementele de text ștanțat din header
  const macroText = document.querySelector(".stenciled-metal-text");
  const microText = document.querySelector(".stenciled-metal-text-sub");

  // Scut de siguranță: Executăm calibrarea doar dacă ambele elemente sunt prezente în pagină
  if (macroText && microText) {
    //  2. PROTOCOL STINGERE TITLU PRINCIPAL (H1)
    //  Animația de typing CSS durează fix 3 secunde (3000ms).
    //  Lansăm un cronometru militar care elimină linia la finalul timpului.
    setTimeout(() => {
      macroText.style.setProperty("border-right", "none", "important"); // Taie fizic bordura din dreapta textului
      macroText.style.setProperty(
        "border-right-color",
        "transparent",
        "important",
      ); // Forțează opacitatea la zero absolut
    }, 3000); // 3000ms = Durata exactă a animației h1

    //  3. PROTOCOL STINGERE SUBTITLU MONOSPACE (P)
    //  Subtitlul are o amânare de 3 secunde și scrie timp de 4 secunde.
    //  Timpul total până la stabilizarea completă în metal este de 7 secunde (7000ms).
    setTimeout(() => {
      microText.style.setProperty("border-right", "none", "important"); // Oprește clipirea și șterge linia secundară
      microText.style.setProperty(
        "border-right-color",
        "transparent",
        "important",
      ); // Garantează curățarea totală a pixelilor
    }, 7000); // 7000ms = 3000ms (delay) + 4000ms (durata scrierii)
  }
});

//        ==========================================================================
//        MECANISMUL 08: RECURSIVE SOURCE INTEGRATION (MECANISMUL EXCLUSIV AL PAGINII)
//        Execută o cerere asincronă internă (Fetch) către script.js, îi extrage textul
//        brut cu tot cu comentariile românești și îl plantează curat în pre.
//        ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const scriptTarget = document.getElementById("script-stream-target");

  if (scriptTarget) {
    // Lansăm scanarea de tip Fetch către fișierul tău de control
    fetch("script.js")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Transmisie întreruptă. Fișierul script.js nu a fost detectat în radare.",
          );
        }
        return response.text(); // Conversia bufferului în text brut curat
      })
      .then((rawCode) => {
        // Injectăm textul direct în ecranul inspectorului
        scriptTarget.textContent = rawCode;
      })
      .catch((error) => {
        scriptTarget.textContent = `[CRITICAL ERROR]: ${error.message}`;
        scriptTarget.style.color = "var(--nebula-pink)"; // Alertă vizuală roz în caz de avarie
      });
  }
});

// --- [NAVIGATION & UX TODOs] ---
// --- [LOGICA DE AUTOMATIZARE ȘI SISTEME AVANSATE] ---

// 1. [SCALABILITATE]: Generarea dinamică a Indexului.
//    În loc să scriem manual 1000 de link-uri în Sidebar, vom crea un script
//    care extrage automat textul din fiecare <h3> și creează un <li> corespunzător.
//    (Esențial pentru jurnalele extinse de tip HTML-Log).

// 2. [SMART TRACKING]: Intersection Observer - Active State.
//    Sincronizarea automată a "locației" utilizatorului: pe măsură ce dai scroll
//    prin sute de zile, Sidebar-ul trebuie să "aprindă" automat link-ul
//    corespunzător (clasa .active) fără intervenție manuală.

// 3. [RE-TRIGGER ANIMATION]: Typing Reset.
//    Resetarea și pornirea animației de tip "typing" din .mission-status p
//    pentru fiecare articol care intră în vizor, oferind un feedback vizual constant.

// 4. [SEARCH & FILTER]: Sistem de Arhivă.
//    Adăugarea unei bare de căutare în Sidebar care să permită filtrarea instantanee
//    a celor 1000 de zile după cuvinte cheie (ex: "Flexbox", "Joins", "Loops").

// 5. [OFFSET CALCULATION]: Dinamica Consolei.
//    Calcularea precisă a înălțimii Navbar-ului și Sidebar-ului în JavaScript
//    pentru a ajusta scroll-margin-top în timp real, eliminând suprapunerile
//    indiferent de dispozitiv.

// 6. [APPLICATION INTERACTIVITY]: Sistem de notițe persistente per articol.
//    Folosirea LocalStorage pentru a permite utilizatorilor să adauge și să salveze
//    extensii de jurnal direct din interfață.
