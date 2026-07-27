//  ==========================================================================
//     D::0dy55ey — SALA MOTORELOR: script.js
//     Fiecare mecanism care animează, observă și reține.
//     Legenda etichetelor: ../docs/legend-ro.md
//  ==========================================================================

//  @block: SENZORII NAVEI (Declarații Variabile Globale)
//    Aceste variabile trăiesc la rădăcina modulului pentru că mai multe
//    mecanisme au nevoie de ele. Acționează ca senzorii principali ai navei
//    — urmăresc poziția de scroll și păstrează în cache referințe DOM care
//    sunt scumpe de interogat de mai multe ori.
//  ==========================================================================

//  @state: lastScrollY — reține coordonata verticală de scroll de la
//    evenimentul anterior. Folosit de MECANISM 01 pentru a determina
//    direcția de scroll.
let lastScrollY = window.scrollY; // Stochează ultima poziție Y cunoscută. Pornește cu ce citește acum pagina.

//  @bridge: navbar — bara HUD de sus partajată pe toate paginile.
//    MECANISM 01 o ascunde/arată; MECANISM 07 comută suprapunerea pe ea.
const navbar = document.querySelector(".navbar"); // Prinde bara de navigare de sus din DOM — HUD-ul nostru permanent.

//  @bridge: sidebar — consola de navigație din stânga, folosită pe paginile
//    de jurnal. MECANISMELE 02, 05 și 06 citesc și modifică poziția sa de scroll.
const sidebar = document.querySelector(".log-sidebar"); // Prinde panoul din stânga — consola noastră de control a misiunii.


//  ==========================================================================
//     MECANISM 01: ASCUNDEREA/AFIȘAREA NAVBAR-ULUI LA SCROLL
//     Detaliu de imersiune: meniul dispare când citești în jos, revine când
//     derulezi în sus. Imită un HUD care se retrage când nu e necesar.
//  ==========================================================================
//  @mechanism: 01 — Dinamica Navbar-ului la Scroll
//  @event: window scroll
//  @pedagogy: "scroll" se declanșează de sute de ori pe secundă. Dar tot ce
//    facem aici e să comparăm două numere și să comutăm o clasă CSS —
//    suficient de rapid pentru a menține UI-ul lin, fără throttling.
//  ==========================================================================

// Atașăm un ascultător permanent pe evenimentul de scroll al ferestrei.
window.addEventListener("scroll", () => {
  // Întrebăm browserul: unde e bara de derulare chiar acum?
  const currentScrollY = window.scrollY; // Coordonată proaspătă, live din motorul browserului.

  // Verificăm: utilizatorul dă scroll în jos ȘI a trecut de pragul de 100px?
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Adăugăm clasa CSS care translatează navbar-ul în sus, în afara ecranului.
    navbar.classList.add("navbar--hidden"); // Tranziția e în style.css — alunecare lină în sus.

    // Optimizare sidebar: dacă HUD-ul a dispărut, lipim sidebar-ul de marginea de sus (0px).
    if (sidebar) sidebar.style.top = "0"; // Elimină spațiul de 60px care era rezervat pentru navbar.
  }
  // Altfel, utilizatorul dă scroll în sus — vrea să navigheze, aducem HUD-ul înapoi.
  else {
    navbar.classList.remove("navbar--hidden"); // Scoatem clasa ascunsă, navbar-ul alunecă înapoi în jos.

    // Restaurăm offsetul sidebar-ului pentru a sta confortabil sub navbar-ul vizibil.
    if (sidebar) sidebar.style.top = "60px"; // Spațiul de 60px e înapoi, exact ca înainte.
  }

  // Actualizăm senzorul global cu noua coordonată pentru următorul eveniment de scroll.
  lastScrollY = currentScrollY; // Vechiul „ultim" devine acum „curent" — gata pentru următoarea comparație.
});


//  ==========================================================================
//     MECANISM 02: INTERSECTION OBSERVER — DETECTARE ACTIVĂ SIDEBAR
//     Citește în ce secțiune se află utilizatorul și aprinde butonul
//     corespunzător din sidebar. Pe desktop, derulează automat sidebar-ul
//     pentru a centra butonul activ.
//  ==========================================================================
//  @mechanism: 02 — Urmărire Activă Sidebar
//  @event: IntersectionObserver (bazat pe viewport)
//  @pedagogy: IntersectionObserver e o API modernă de browser care
//    declanșează un callback când un element intră sau iese dintr-o zonă
//    definită a ecranului. E mult mai performantă decât să asculți "scroll"
//    și să calculezi manual pozițiile — browserul face geometria intern.
//  ==========================================================================

// 1. CONFIGURAȚIA RADARULUI: Definim zona de scanare laser în interiorul viewport-ului.
const observerOptions = {
  root: null, // null înseamnă că senzorul scanează direct raportat la viewport-ul vizibil al browserului.

  //   Linia de scanare laser: detectăm elementul când se află în zona central-superioară a ecranului.
  //   Ignorăm primii 20% de sus și ultimii 70% de jos — asta lasă o fereastră fixă de scanare de 10%.
  rootMargin: "-20% 0px -70% 0px", // Zona activă de scanare e felia din mijlocul-superior al ecranului.
  threshold: 0, // Declanșează semnalul instantaneu, imediat ce articolul atinge marja de mai sus.
};

// 2. LOGICA SENZORULUI: Ce se întâmplă când o secțiune de log intră în zona noastră de scanare.
const observer = new IntersectionObserver((entries) => {
  // Observerul ne dă un array de intrări — verificăm fiecare.
  entries.forEach((entry) => {
    // Dacă această intrare de log a intersectat cu succes marja noastră de scanare...
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id"); // Extragem ID-ul unic al articolului (ex: "html-day01").

      // Pasul A: Ștergem starea activă (strălucirea roz) de la TOATE linkurile din sidebar mai întâi.
      document.querySelectorAll(".sidebar-nav a").forEach((link) => {
        link.classList.remove("active"); // Stingem lumina peste tot înainte să aprindem una.
      });

      // Pasul B: Găsim butonul exact din sidebar al cărui href se potrivește cu acest ID detectat.
      const activeLink = document.querySelector(
        `.sidebar-nav a[href="#${id}"]`,
      );

      // Dacă am găsit butonul corespunzător, injectăm clasa .active pentru a-l aprinde.
      if (activeLink) {
        // Pasul C: Aprindem butonul zilei curente cu strălucirea nebula-pink.
        activeLink.classList.add("active"); // Butonul strălucește acum în sidebar.

        // Pasul D: Selectăm lista interioară derulabilă (<ul> din sidebar).
        const innerSidebarList = document.querySelector(".sidebar-nav ul");

        // ACTIVAREA RADARULUI: Rulează auto-centrarea DOAR pe Desktop (ecrane > 768px).
        if (window.innerWidth > 768 && innerSidebarList) {
          //     ALGORITMUL DE AUTO-CENTRARE:
          //    Calculăm unde se află butonul zilei în listă (offsetTop)
          //    și scădem jumătate din înălțimea ferestrei sidebar-ului (clientHeight / 2).
          //    Acest calcul matematic simplu va aduce butonul și Sectorul din care face parte
          //    FIX în centrul vizual al meniului, sub titlul MAP!
          const centerPosition =
            activeLink.offsetTop - innerSidebarList.clientHeight / 2;

          // Sidebar-ul execută un scroll automat, lin și silențios către acea poziție.
          innerSidebarList.scrollTo({
            top: centerPosition, // Derulăm la punctul central calculat.
            behavior: "smooth", // Alunecare fluidă cinematică.
          });
        }
      }
    }
  });
}, observerOptions);

// 3. ACTIVAREA FIZICĂ A SENZORILOR. Atașăm câte un senzor pe fiecare zi de log scrisă în HTML.
// Îi spunem browserului să pună câte un radar pe fiecare articol .log-entry.
document.querySelectorAll(".log-entry").forEach((article) => {
  observer.observe(article); // Pornim scanarea automată pentru acest articol.
});


//  ==========================================================================
//     MECANISM 03: RE-DECLANȘARE ANIMAȚIE STATUS MISSION
//     De fiecare dată când o casetă .mission-status intră în vizor, animația
//     sa de typing este resetată forțat pentru ca utilizatorul să o vadă
//     scriindu-se din nou.
//  ==========================================================================
//  @mechanism: 03 — Resetare Animație Typing
//  @event: IntersectionObserver (prag de vizibilitate 30%)
//  @pedagogy: Trucul de re-declanșare funcționează astfel: setăm animation la
//    "none" (oprim animația CSS), forțăm un reflow al browserului prin
//    offsetHeight, apoi setăm animation înapoi la null (restaurând animația
//    CSS originală). Browserul reinterpretează animația ca fiind „nouă" și o
//    reia de la început.
//  ==========================================================================

// Creăm un al doilea observer dedicat casetelor verzi de status al misiunii.
const statusObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Când caseta verde de status a unei misiuni intră pe ecran (>30% vizibilă)...
      if (entry.isIntersecting) {
        const statusText = entry.target.querySelector("p"); // Căutăm eticheta <p> din interiorul casetei.

        if (statusText) {
          // Pasul A: Înghețăm și oprim forțat animația curentă.
          statusText.style.animation = "none";
          // Pasul B: TRUCUL MAGIC! Forțăm browserul să recalculeze dimensiunea, înregistrând resetul.
          statusText.offsetHeight; // Accesarea offsetHeight forțează un reflow sincron — browserul observă "none".
          // Pasul C: Ștergem blocarea, permițând animațiilor CSS (typing + blink) să repornească curat de la cadrul 0.
          statusText.style.animation = null; // null restaurează animația CSS originală, care acum e „nouă" pentru browser.
        }
      }
    });
  },
  { threshold: 0.3 }, // Se declanșează când cel puțin 30% din casetă e vizibilă pe ecran.
);

// Atașăm senzorul pe toate barele de status din jurnalele tale HTML.
document.querySelectorAll(".mission-status").forEach((status) => {
  statusObserver.observe(status); // Pornim radarul de monitorizare pentru fiecare casetă.
});


//  ==========================================================================
//     MECANISM 04: LOCALSTORAGE — SISTEM DE NOTIȚE PERSISTENTE
//     Permite căpitanului să scrie notițe în textarea-uri tip terminal și să
//     le păstreze după reîncărcarea paginii. Folosește API-ul localStorage al
//     browserului.
//  ==========================================================================
//  @mechanism: 04 — Salvare Persistentă a Notițelor
//  @pedagogy: localStorage e un magazin de tip cheie-valoare încorporat în
//    fiecare browser. Datele supraviețuiesc reîncărcărilor de pagină și
//    repornirilor de browser. Fiecare notiță are propria cheie (id-ul
//    textarea-ului), astfel încât notițele nu se suprascriu între ele.
//    Limita e de aproximativ 5MB per origine (domeniu).
//  ==========================================================================

// Funcția A: Salvarea semnalului în arhive (când apeși pe butonul de sub textarea).
function saveNote(dayId) {
  const textarea = document.getElementById(dayId); // Căutăm caseta de text (textarea) folosind ID-ul ei unic.
  const noteContent = textarea.value; // Extragem textul pe care l-ai tastat în interiorul ei.

  // Salvăm conținutul în memoria securizată a browserului (localStorage).
  // ID-ul zilei devine o „cheie" unică (ex: cheia "html-note-day01" va ține doar textul acelei zile).
  localStorage.setItem(dayId, noteContent); // localStorage = cheie-valoare. Cheia: dayId, Valoarea: ce-ai tastat.

  console.log(`Semnal salvat pentru sectorul: ${dayId}`); // Log tehnic de confirmare în consola de dezvoltator.
  alert("Extensia de semnal a fost salvată în arhivele locale."); // Alertă pe ecran pentru confirmarea salvării.
}

// Funcția B: Încărcarea automată a datelor stocate (la pornirea/încărcarea paginii).
window.addEventListener("load", () => {
  const allNotes = document.querySelectorAll(".note-terminal textarea"); // Căutăm toate casetele de text din jurnal.

  allNotes.forEach((textarea) => {
    const savedContent = localStorage.getItem(textarea.id); // Întrebăm memoria browserului: are ceva salvat pentru acest ID?

    // Dacă am găsit notițe vechi în arhivă, le reinjectăm automat în căsuța de text ca să nu le pierzi.
    if (savedContent) {
      textarea.value = savedContent; // Restaurăm scrisul anterior al căpitanului.
    }
  });
});


//  ==========================================================================
//     MECANISM 05: NAVIGAȚIE ANCORĂ PE DESKTOP (Sidebar Jurnal)
//     Previne browserul din a muta sidebar-ul când se dă click pe un link
//     ancoră. În schimb, derulează doar panoul din dreapta (.log-content) și
//     actualizează URL-ul prin history.pushState.
//  ==========================================================================
//  @mechanism: 05 — Navigație Anti-Derivă pe Ancore
//  @event: DOMContentLoaded → click pe .sidebar-link și .map-title-link
//  @reason: Fără acest mecanism, un click pe "#html-day01" ar derula întreaga
//    pagină, trăgând sidebar-ul din poziție. Interceptând click-ul, derulăm
//    doar panoul de conținut și lăsăm sidebar-ul fix.
//  ==========================================================================

// Protocolul se activează automat la încărcarea completă a matricii DOM a cockpitului.
document.addEventListener("DOMContentLoaded", () => {
  // Selectăm containerul din dreapta (zona de articole cu bara de scroll).
  const mainContentZone = document.querySelector(".log-content"); // Aceasta e zona <main> derulabilă.

  //  CORECTURĂ RADAR: Selectăm atât zilele (.sidebar-link) cât și linkul special de hartă (.map-title-link)
  //  pentru a le pune sub aceeași barieră de protecție mecanică!
  const navigationLinks = document.querySelectorAll(
    ".sidebar-link, .map-title-link",
  );

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // PASUL A: VERIFICĂM MODUL DE OPERARE (Desktop vs Mobil)
      if (window.innerWidth > 768) {
        //  ABSOLUT IMPRESCINDIBIL: Oprim acțiunea nativă a browserului care trăgea sidebar-ul în sus!
        //  Acesta este scutul care blochează fuga titlului h4 de pe ecran.
        event.preventDefault(); // Oprim comportamentul nativ de salt la ancoră al browserului.

        const targetAnchorId = link.getAttribute("href"); // Preluăm ancora (ex: "#top-deck" sau "#html-day01").
        const targetArticleSection = document.querySelector(targetAnchorId); // Găsim elementul țintă în DOM.

        if (targetArticleSection && mainContentZone) {
          let exactScrollCoordinates;

          //  PROTOCOL INDIVIDUAL PENTRU HĂRȚI:
          //   Dacă utilizatorul a apăsat pe titlul mare MAP, îi ordonăm containerului din dreapta
          //   să se reseteze complet în vârf (coordonata 0), fără decalaje parazite!
          if (link.classList.contains("map-title-link")) {
            exactScrollCoordinates = 0; // Linkul hărții merge întotdeauna la începutul absolut.
          }
          //  PROTOCOL INDIVIDUAL PENTRU ZILE:
          //  Se aplică amortizarea ta ideală de 100px pentru a așeza logurile curat sub HUD.
          else {
            exactScrollCoordinates = targetArticleSection.offsetTop - 100; // 100px ține cont de navbar-ul fix.
          }

          // Executăm scroll-ul fluid STRICT în interiorul ferestrei din dreapta (.log-content).
          mainContentZone.scrollTo({
            top: exactScrollCoordinates, // Poziția țintă calculată.
            behavior: "smooth", // Alunecare cinematică lină.
          });

          // Schimbăm discret URL-ul din bara de sus a browserului fără salturi vizuale haotice.
          history.pushState(null, null, targetAnchorId); // Schimbă hash-ul URL-ului fără a reîncărca pagina.
        }
      }
      // PASUL B: MODUL MOBIL
      else {
        console.log(
          `Navigație mobilă activă pentru sectorul: ${link.getAttribute("href")}`,
        ); // Doar logăm; lăsăm browserul să gestioneze ancorele nativ pe mobil.
      }
    });
  });
});


//  ==========================================================================
//     MECANISM 06: HUD MOBIL — DERULARE ORIZONTALĂ AUTOMATĂ
//     Pe ecrane înguste, când o nouă secțiune devine activă prin MECANISM 02,
//     sidebar-ul derulează orizontal pentru a centra butonul activ.
//  ==========================================================================
//  @mechanism: 06 — Sincronizare Orizontală HUD
//  @event: window scroll
//  @guard: rulează doar pe viewport-uri <= 768px (mobil și ecran split).
//  ==========================================================================

// Ascultăm din nou evenimentul global de scroll, dar de data asta pentru mobil.
document.addEventListener("scroll", () => {
  // Executăm acest protocol strict pe ecrane strâmte (Mobil / Split-screen).
  if (window.innerWidth <= 768) {
    // Selectăm containerul exterior al consolei (cel cu overflow-x: auto).
    const hudContainer = document.querySelector(".log-sidebar"); // Sidebar-ul devine HUD orizontal pe mobil.

    // Găsim butonul de zi care a primit clasa .active în acel moment de la MECANISMUL 02.
    const activeButton = document.querySelector(".sidebar-nav a.active"); // Strălucirea ne spune ce secțiune e vizibilă.

    // Scut de siguranță: rulăm logica doar dacă ambele elemente sunt active pe ecran.
    if (hudContainer && activeButton) {
      /* MATEMATICA REALITĂȚII TACTILE:
          Calculăm poziția butonului în raport cu marginea stângă a ecranului (offsetLeft)
         și scădem jumătate din lățimea HUD-ului pentru a-l poziționa FIX pe centru! */
      const buttonLeft = activeButton.offsetLeft; // Distanța de la marginea stângă a containerului.
      const buttonWidth = activeButton.offsetWidth; // Cât de lat e butonul activ?
      const hudWidth = hudContainer.offsetWidth; // Cât de lată e fereastra vizibilă a HUD-ului?

      const targetScroll =
        buttonLeft - hudWidth / 2 + buttonWidth / 2; // Centrează butonul în zona vizibilă.

      // Ordonăm consolei să execute o glisare orizontală lină la acea coordonată.
      hudContainer.scrollTo({
        left: targetScroll, // Poziția centrală calculată.
        behavior: "smooth", // Glisare lină, ca un dolly de cameră.
      });
    }
  }
});


//  ==========================================================================
//     MECANISM 07: PROTOCOL DE ȘTERGERE CURSOR (Curățare Animație Typing)
//     După ce animația CSS de typing de pe index se termină, acest mecanism
//     elimină cursorul intermitent setând border-right la "none" cu
//     !important. Temporizarea se potrivește cu durata keyframe-urilor CSS.
//  ==========================================================================
//  @mechanism: 07 — Ștergere Cursor Stencil
//  @event: DOMContentLoaded
//  @bridge: Țintește .stenciled-metal-text (h1) și .stenciled-metal-text-sub
//    (p) — aceleași elemente animate de CSS în style.css.
//  ==========================================================================

// Protocolul se activează automat la încărcarea completă a matricii DOM a cockpitului.
document.addEventListener("DOMContentLoaded", () => {
  // 1. ANCORELE SENZORILOR: Identificăm elementele de text ștanțat din header.
  const macroText = document.querySelector(".stenciled-metal-text"); // Titlul mare h1.
  const microText = document.querySelector(".stenciled-metal-text-sub"); // Subtitlul mai mic.

  // Scut de siguranță: executăm calibrarea doar dacă ambele elemente sunt prezente în pagină.
  if (macroText && microText) {
    //  2. PROTOCOL STINGERE TITLU PRINCIPAL (H1)
    //  Animația de typing CSS durează fix 3 secunde (3000ms).
    //  Lansăm un cronometru militar care elimină bordura la finalul timpului.
    setTimeout(() => {
      macroText.style.setProperty("border-right", "none", "important"); // Taie fizic bordura din dreapta textului.
      macroText.style.setProperty(
        "border-right-color",
        "transparent",
        "important",
      ); // Forțează opacitatea la zero absolut.
    }, 3000); // 3000ms = durata exactă a animației h1.

    //  3. PROTOCOL STINGERE SUBTITLU MONOSPACE (P)
    //  Subtitlul are o amânare de 3 secunde și scrie timp de 4 secunde.
    //  Timpul total până la stabilizarea completă în metal este de 7 secunde (7000ms).
    setTimeout(() => {
      microText.style.setProperty("border-right", "none", "important"); // Oprește clipirea și șterge linia secundară.
      microText.style.setProperty(
        "border-right-color",
        "transparent",
        "important",
      ); // Garantează curățarea totală a pixelilor.
    }, 7000); // 7000ms = 3000ms (delay) + 4000ms (durata scrierii).
  }
});


//  ==========================================================================
//     MECANISM 08: ÎNCĂRCARE SURSĂ RECURSIVĂ (Pagina Blueprint)
//     Citește atributul data-path de pe butoanele .tab-btn, face fetch către
//     fișierul corespunzător și injectează codul sursă brut în
//     .code-inspector-screen. Include și auto-centrare pe mobil.
//  ==========================================================================
//  @mechanism: 08 — Încărcător Sursă Recursivă
//  @event: DOMContentLoaded, apoi click pe .tab-btn
//  @pedagogy: Fetch API e modul modern de a face cereri HTTP din JavaScript.
//    fetch() returnează un Promise care se rezolvă cu un obiect Response.
//    Lanțurile .then() gestionează răspunsul, iar .catch() tratează erorile.
//    Codul încărcat e afișat ca text simplu (nu e executat) prin textContent,
//    ceea ce e sigur împotriva atacurilor XSS.
//  ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Prindem containerul de ieșire și containerul butoanelor de tab din DOM.
  const scriptTarget = document.getElementById("script-stream-target"); // Blocul <pre> sau <code> unde apare sursa.
  const tabContainer = document.querySelector(".source-selector-tabs"); // Bara de taburi cu butoane data-path.

  // Ieșire de siguranță: dacă aceste elemente nu există, NU suntem pe pagina recursive-blueprint — ieșim.
  if (!scriptTarget || !tabContainer) return;

  // Lansăm o scanare asincronă Fetch către fișierul sursă selectat.
  function loadSourceFile(filePath) {
    // Arătăm feedback vizual "Se încarcă..." utilizatorului.
    scriptTarget.textContent = "Se încarcă...";
    scriptTarget.style.color = ""; // Resetăm orice culoare de eroare anterioară.

    fetch(filePath) // Pornim cererea HTTP fetch către fișierul țintă.
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Fișierul "${filePath}" nu a fost găsit. (${response.status})`,
          ); // Eroare de rețea? Aruncăm în blocul catch.
        }
        return response.text(); // Convertim bufferul brut din rețea în text simplu utilizabil.
      })
      .then((rawCode) => {
        // Injectăm textul direct în ecranul inspectorului ca text simplu, neexecutabil.
        scriptTarget.textContent = rawCode; // Codul sursă apare acum în cilindrul de sticlă.
      })
      .catch((error) => {
        // Dacă ceva a eșuat, afișăm o alertă critică de eroare în roz pe ecran.
        scriptTarget.textContent = `[EROARE CRITICĂ]: ${error.message}`;
        scriptTarget.style.color = "var(--nebula-pink)"; // Alertă vizuală roz pentru avarie de sistem.
      });
  }

  // MANIPULAREA CLICK PE TABURI: Când utilizatorul click pe un buton de tab.
  tabContainer.addEventListener("click", (e) => {
    // closest() urcă în arborele DOM pentru a găsi cel mai apropiat .tab-btn.
    // Acest lucru gestionează click-urile pe elemente copil (ca un <span> în interiorul butonului).
    const btn = e.target.closest(".tab-btn");
    if (!btn) return; // S-a făcut click în afara unui tab? Ignorăm.

    // Pasul A: Ștergem clasa active-tab de la TOATE taburile.
    tabContainer.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.remove("active-tab"); // Stingem starea activă peste tot.
    });
    // Pasul B: Aprindem doar butonul pe care s-a făcut click.
    btn.classList.add("active-tab"); // Tabul apăsat acum strălucește.

    // Pasul C: Citim atributul data-path — conține URL-ul relativ către fișierul sursă.
    const filePath = btn.getAttribute("data-path");
    if (filePath) {
      loadSourceFile(filePath); // Lansăm fetch-ul și injectăm sursa.
    }

    // Auto-centrare pe mobil: aceeași matematică tactilă ca la MECANISM 06.
    if (window.innerWidth <= 768) {
      const btnLeft = btn.offsetLeft; // Distanța tabului de la marginea stângă a containerului.
      const btnWidth = btn.offsetWidth; // Lățimea tabului însuși.
      const containerWidth = tabContainer.offsetWidth; // Lățimea vizibilă a barei de taburi.
      const targetScroll = btnLeft - containerWidth / 2 + btnWidth / 2; // Îl centrăm.
      tabContainer.scrollTo({
        left: targetScroll, // Centrul calculat.
        behavior: "smooth", // Glisare orizontală lină.
      });
    }
  });

  // ÎNCĂRCĂ TABUL IMPLICIT LA PORNIRE:
  // Dacă un .tab-btn are deja clasa active-tab în HTML-ul brut,
  // îi încărcăm fișierul automat fără a necesita un click manual.
  const defaultTab = tabContainer.querySelector(".tab-btn.active-tab");
  if (defaultTab) {
    const defaultPath = defaultTab.getAttribute("data-path");
    if (defaultPath) {
      loadSourceFile(defaultPath); // Pre-încărcăm sursa primului tab la încărcarea paginii.
    }
  }
});


//  ==========================================================================
//     MECANISM 09: MAȘINA DE SCRIS COSMICĂ (Transmisie / Carta de Astrogare)
//     Scrie textul manifestului caracter cu caracter în interiorul cilindrului
//     de sticlă, ca și cum mesajul ar fi recepționat live din adâncul cosmic.
//     Se activează doar pe paginile care conțin .manifesto-entry.
//  ==========================================================================
//  @mechanism: 09 — Mașina de Scris Cosmică
//  @event: DOMContentLoaded
//  @pedagogy: Acest mecanism demonstrează trei modele fundamentale în
//    JavaScript:
//    1. Manipularea DOM — crearea de elemente, setarea claselor, atașarea
//    2. setTimeout recursiv — fiecare caracter programează următorul, creând
//       un efect de tastare fără a bloca browserul
//    3. scrollIntoView — menține cursorul vizibil pe măsură ce textul este
//       scris pe ecran
//  ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".manifesto-entry"); // Găsim containerul cilindrului de sticlă.

  // Ieșire de siguranță: rulează doar pe pagina de transmisie.
  if (!container) return;

  // Paragrafele manifestului sunt scrise direct în transmission.html.
  const paragraphs = container.querySelectorAll("p"); // Prindem fiecare <p> din interiorul containerului.
  if (!paragraphs.length) return; // Niciun paragraf? Nimic de tastat. Ieșim.

  // Arhivăm conținutul text și indicatorul de semnătură din fiecare paragraf pentru tastarea ulterioară.
  const lines = Array.from(paragraphs).map((p) => ({
    text: p.textContent, // Textul brut al acestui paragraf.
    isSignoff: p.classList.contains("manifesto-signoff"), // E linia de semnătură a căpitanului?
  }));

  // Curățăm containerul — JS-ul va retasta totul din datele arhivate.
  // Comentariile pedagogice originale din HTML sunt și ele eliminate aici; și-au servit scopul în timpul scrierii.
  container.innerHTML = ""; // Golim cilindrul de sticlă. Gata pentru transmisiunea live.

  // CREĂM CONTAINERUL DE IEȘIRE ȘI CURSORUL CLIPITOR.
  const output = document.createElement("div"); // Creăm un <div> proaspăt pentru ieșirea tastată.
  output.className = "typewriter-output"; // Îi dăm clasa CSS care stilizează textul tastat.
  container.appendChild(output); // Îl inserăm în cilindrul de sticlă.

  const cursor = document.createElement("span"); // Creăm un <span> pentru cursorul clipitor.
  cursor.className = "typing-cursor"; // Clasa CSS care îl face să clipească prin animație.
  container.appendChild(cursor); // Inserăm cursorul după textul de ieșire.

  // Contoare de tastare: paraIdx urmărește paragraful, charIdx urmărește caracterul din acel paragraf.
  let paraIdx = 0; // Începem la primul paragraf (index 0).
  let charIdx = 0; // Începem la primul caracter al acelui paragraf (index 0).
  let currentP = null; // Niciun element de paragraf nu a fost creat încă.

  // randomDelay variază viteza de tastare între 15-50ms per caracter.
  // Simulează ritmul neregulat al unui semnal cosmic din adâncuri.
  function randomDelay() {
    return Math.floor(Math.random() * 35 + 15); // Returnează un număr aleator între 15 și 50.
  }

  // typeNextChar — motorul recursiv de tastare.
  // Tastează un caracter, apoi se auto-programează prin setTimeout.
  // Când un paragraf e complet, trece la următorul cu o pauză dramatică.
  // Când toate paragrafele sunt gata, un timer de 3 secunde ascunde cursorul.
  function typeNextChar() {
    // Gardă: toate paragrafele au fost tastate — ascunde cursorul după 3 secunde.
    if (paraIdx >= lines.length) {
      // cursor-hidden e o clasă CSS care setează opacitatea la 0, făcând cursorul să dispară.
      setTimeout(() => {
        cursor.classList.add("cursor-hidden"); // Estompează cursorul în liniște.
      }, 3000);
      return; // Oprim recusivitatea. Transmisiunea e completă.
    }

    // Logică: creează un element <p> nou când începem un paragraf proaspăt.
    if (!currentP) {
      currentP = document.createElement("p"); // Creăm un nou element de paragraf.
      if (lines[paraIdx].isSignoff) {
        currentP.className = "manifesto-signoff"; // Clasă specială pentru linia de semnătură a căpitanului.
      }
      output.appendChild(currentP); // Atașăm noul paragraf la containerul de ieșire.
    }

    const text = lines[paraIdx].text; // Obținem textul complet al paragrafului curent.

    if (charIdx < text.length) {
      // Mai sunt caractere de tastat în acest paragraf.
      currentP.textContent += text[charIdx]; // Atașăm următorul caracter la paragraf.
      charIdx++; // Trecem la următorul index de caracter.
      // scrollIntoView menține cursorul pe ecran pe măsură ce textul crește. block: "nearest" derulează doar cât trebuie.
      cursor.scrollIntoView({ block: "nearest" }); // Menține cursorul vizibil fără derulare excesivă.
      setTimeout(typeNextChar, randomDelay()); // Programează următorul caracter cu o întârziere aleatoare.
    } else {
      // Acest paragraf e terminat — trecem la următorul.
      paraIdx++; // Trecem la următorul index de paragraf.
      charIdx = 0; // Resetăm indexul de caracter la 0 pentru noul paragraf.
      currentP = null; // Semnalăm că un nou <p> trebuie creat data viitoare.

      if (paraIdx < lines.length) {
        // Pauză mai lungă înaintea liniei de semnătură (semnătura căpitanului) pentru efect narativ dramatic.
        const pause = lines[paraIdx].isSignoff ? 1200 : 500; // 1200ms pentru semnătură, 500ms pentru paragrafe normale.
        setTimeout(typeNextChar, pause); // Programează următorul paragraf după pauză.
      } else {
        // Un ultim apel pentru a declanșa garda de finalizare de mai sus.
        setTimeout(typeNextChar, 500); // Pauză scurtă, apoi garda se declanșează și ascunde cursorul.
      }
    }
  }

  // Un scurt moment de tăcere înainte ca transmisiunea cosmică să înceapă. Imersiunea pe primul loc.
  setTimeout(typeNextChar, 1000); // Așteptăm 1 secundă, apoi începem tastarea caracter cu caracter.
});


//  ==========================================================================
//     BACKLOG — Îmbunătățiri de Navigație & UX (Mecanisme Planificate)
//     Acesta nu e cod activ — sunt intrări în backlog-ul de dezvoltare al
//     navei, păstrate aici pentru implementare viitoare.
//  ==========================================================================

//  @todo: 01 — Generare Dinamică a Indexului Sidebar
//    În loc să scriem manual 1000+ de linkuri în sidebar, un script va
//    extrage textul din fiecare <h3> și va genera automat elementele <li>
//    corespunzătoare. Esențial pentru paginile extinse de tip HTML-Log.

//  @todo: 02 — Sistem de Căutare și Filtrare
//    O bară de căutare în sidebar care filtrează intrările de jurnal după
//    cuvânt cheie (ex: "Flexbox", "Joins", "Loops") în timp real, folosind
//    filtrul încorporat al browserului sau un algoritm simplu de potrivire
//    a textului.

//  @todo: 03 — Calcul Dinamic al Offsetului Navbar-ului
//    În loc să codificăm rigid offsetul de 100px în MECANISM 05, JavaScript
//    va măsura înălțimea reală a navbar-ului la runtime și va ajusta
//    scroll-margin-top dinamic pentru fiecare dispozitiv.

//  @todo: 04 — Sistem de Export Notițe
//    Extinderea MECANISMULUI 04 cu un buton de "descărcare" care compilează
//    toate notițele salvate într-un singur fișier markdown sau text pentru
//    referință offline.
//  ==========================================================================
