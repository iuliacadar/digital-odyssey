//  ==========================================================================
//     D::0dy55ey — ENGINE ROOM: script.js
//     Every mechanism that animates, observes, and remembers.
//     Tag legend: ../docs/legend-en.md
//  ==========================================================================

//  @block: SHIP SENSORS (Global Variable Declarations)
//    These variables live at the module root because multiple mechanisms need
//    access to them. They act as the ship's primary sensors — tracking scroll
//    position and caching DOM references that are expensive to query repeatedly.
//  ==========================================================================

//  @state: lastScrollY — remembers the vertical scroll coordinate from the
//    previous event. Used by MECANISM 01 to determine scroll direction.
let lastScrollY = window.scrollY; // Stores the last known Y position. Starts at whatever the page currently reads.

//  @bridge: navbar — the top HUD bar shared across all pages. MECANISM 01
//    hides/shows it; MECANISM 06.5 toggles overlay on it.
const navbar = document.querySelector(".navbar"); // Grabs the top navigation bar from the DOM — our persistent HUD.

//  @bridge: sidebar — the left-hand navigation console used on log pages.
//    MECANISMS 02 and 06 read and write its scroll position; MECANISM 05 keeps it stable.
const sidebar = document.querySelector(".log-sidebar"); // Grabs the left panel — our mission control sidebar.


//  ==========================================================================
//     MECANISM 01: NAVBAR HIDE/SHOW ON SCROLL
//     Immersion detail: the menu vanishes when you read down, returns when
//     you scroll up. Mimics a HUD that retreats when not needed.
//  ==========================================================================
//  @mechanism: 01 — Navbar Scroll Dynamics
//  @event: window scroll
//  @pedagogy: "scroll" fires hundreds of times per second. But all we do
//    here is compare two numbers and toggle a CSS class — that is fast
//    enough to keep the UI smooth without any throttling.
//  ==========================================================================

// We attach a permanent listener to the window's scroll event.
window.addEventListener("scroll", () => {
  // We ask the browser: where is the scrollbar right now?
  const currentScrollY = window.scrollY; // Fresh coordinate, live from the browser engine.

  // Check: is the user scrolling down AND past the 100px threshold?
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Add the CSS class that translates the navbar upward off the screen.
    navbar.classList.add("navbar--hidden"); // The transition lives in style.css — smooth upward slide.

    // Sidebar optimisation: if the HUD vanished, we glue the sidebar to the top edge (0px).
    if (sidebar) sidebar.style.top = "0"; // Removes the 60px gap that was reserved for the navbar.
  }
  // Otherwise the user is scrolling up — they want to navigate, bring the HUD back.
  else {
    navbar.classList.remove("navbar--hidden"); // Strip the hidden class, the navbar slides back down.

    // Restore the sidebar offset so it sits comfortably below the visible navbar.
    if (sidebar) sidebar.style.top = "60px"; // The 60px gap is back, just like before.
  }

  // Update the global sensor with the new coordinate for the next scroll event.
  lastScrollY = currentScrollY; // The old "last" now becomes "current" — ready for the next comparison.
});


//  ==========================================================================
//     MECANISM 02: INTERSECTION OBSERVER — SIDEBAR ACTIVE DETECTION
//     Reads which section the user is currently looking at and highlights the
//     corresponding button in the sidebar. On desktop it also auto-scrolls the
//     sidebar to centre the active button.
//  ==========================================================================
//  @mechanism: 02 — Sidebar Active Tracking
//  @event: IntersectionObserver (viewport-based)
//  @pedagogy: IntersectionObserver is a modern browser API that fires a
//    callback when an element enters or exits a defined zone of the screen.
//    It is far more performant than listening to "scroll" and manually
//    calculating positions — the browser does the geometry internally.
//  ==========================================================================

// 1. THE RADAR CONFIGURATION: We define the laser scan zone within the viewport.
const observerOptions = {
  root: null, // null means the sensor scans against the visible browser viewport directly.

  //   The laser scan line: we detect the element when it sits in the upper-centre area.
  //   We ignore the top 20% and the bottom 70% — this leaves a fixed 10% scan window.
  rootMargin: "-20% 0px -70% 0px", // The active scan zone is the upper-middle slice of the screen.
  threshold: 0, // Fire the signal instantly the instant the article touches the margin above.
};

// 2. THE SENSOR LOGIC: What happens when a log section enters our scan zone.
const observer = new IntersectionObserver((entries) => {
  // The observer gives us an array of entries — we check each one.
  entries.forEach((entry) => {
    // If this log entry has successfully intersected our scan margin...
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id"); // Grab the entry's unique ID (e.g. "html-day01").

      // Step A: Wipe the active state (pink glow) from ALL sidebar links first.
      document.querySelectorAll(".sidebar-nav a").forEach((link) => {
        link.classList.remove("active"); // Kill the light everywhere before lighting one up.
      });

      // Step B: Find the exact sidebar button whose href matches this detected ID.
      const activeLink = document.querySelector(
        `.sidebar-nav a[href="#${id}"]`,
      );

      // If we found the matching button, inject the .active class to light it up.
      if (activeLink) {
        // Step C: Light up the current day's button with the nebula-pink glow.
        activeLink.classList.add("active"); // The button now shines in the sidebar.

        // Step D: Select the inner scrollable list (the <ul> inside the sidebar).
        const innerSidebarList = document.querySelector(".sidebar-nav ul");

        // ACTIVATE THE RADAR: Only run this auto-centering on Desktop (screens > 768px).
        if (window.innerWidth > 768 && innerSidebarList) {
          //     THE AUTO-CENTRE ALGORITHM:
          //    We calculate where the day's button sits within the list (offsetTop)
          //    and subtract half the sidebar window height (clientHeight / 2).
          //    This simple maths brings the button and its Sector label
          //    RIGHT into the visual centre of the menu, right beneath the MAP title!
          const centerPosition =
            activeLink.offsetTop - innerSidebarList.clientHeight / 2;

          // The sidebar performs a smooth, silent scroll to that exact position.
          innerSidebarList.scrollTo({
            top: centerPosition, // Scroll to the calculated centre point.
            behavior: "smooth", // Smooth cinematic glide.
          });
        }
      }
    }
  });
}, observerOptions);

// 3. PHYSICAL SENSOR ACTIVATION. Attach one sensor to each log day you wrote in HTML.
// We tell the browser to place a radar on every .log-entry article.
document.querySelectorAll(".log-entry").forEach((article) => {
  observer.observe(article); // Start scanning this article for intersection events.
});


//  ==========================================================================
//     MECANISM 03: MISSION STATUS — ANIMATION RE-TRIGGER
//     Every time a .mission-status box scrolls into view, its typing animation
//     is forcibly reset so the user sees it type out fresh.
//  ==========================================================================
//  @mechanism: 03 — Typing Animation Reset
//  @event: IntersectionObserver (30% visibility threshold)
//  @pedagogy: The re-trigger trick works by setting animation to "none" (stops
//    the CSS animation), forcing a browser reflow via offsetHeight, then
//    setting animation back to null (restores the original CSS animation). The
//    browser re-interprets the animation as "new" and replays it from frame 0.
//  ==========================================================================

// We create a second observer dedicated to the green mission status boxes.
const statusObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // When the green mission status box enters the screen (>30% visible)...
      if (entry.isIntersecting) {
        const statusText = entry.target.querySelector("p"); // Find the <p> tag inside the box.

        if (statusText) {
          // Step A: Freeze and forcibly stop the current animation.
          statusText.style.animation = "none";
          // Step B: THE MAGIC TRICK! Force the browser to recalculate the size, registering the reset.
          statusText.offsetHeight; // Accessing offsetHeight forces a synchronous reflow — the browser notices the "none".
          // Step C: Remove the block, allowing the CSS animations (typing + blink) to restart cleanly from frame 0.
          statusText.style.animation = null; // null restores the original CSS animation, which now feels "new" to the browser.
        }
      }
    });
  },
  { threshold: 0.3 }, // Fire when at least 30% of the box is visible on screen.
);

// Attach the radar to every mission status bar across all your HTML journals.
document.querySelectorAll(".mission-status").forEach((status) => {
  statusObserver.observe(status); // Start the monitoring radar on each status box.
});


//  ==========================================================================
//     MECANISM 04: LOCALSTORAGE — PERSISTENT NOTES SYSTEM
//     Lets the captain write notes in terminal-style textareas and have them
//     survive page refreshes. Uses the browser's localStorage API.
//  ==========================================================================
//  @mechanism: 04 — Persistent Note Saving
//  @pedagogy: localStorage is a key-value store built into every browser. Data
//    survives page reloads and browser restarts. Each note gets its own key
//    (the textarea's id), so notes do not overwrite each other. The limit is
//    approximately 5MB per origin (domain).
//  ==========================================================================

// Function A: Saving the signal to the archives (when you click the button below the textarea).
function saveNote(dayId) {
  const textarea = document.getElementById(dayId); // Find the textarea using its unique ID.
  const noteContent = textarea.value; // Extract the text you typed inside it.

  // Save the content to the browser's secure localStorage memory.
  // The day ID becomes a unique "key" (e.g. key "html-note-day01" holds only that day's text).
  localStorage.setItem(dayId, noteContent); // localStorage = key-value. Key: dayId, Value: what you typed.

  console.log(`Signal saved for sector: ${dayId}`); // Log a technical confirmation to the dev console.
  alert("Signal extension saved to local archives."); // On-screen alert confirming the save to the user.
}

// Function B: Automatic loading of stored data when the page starts/loads.
window.addEventListener("load", () => {
  const allNotes = document.querySelectorAll(".note-terminal textarea"); // Find every textarea in the journal.

  allNotes.forEach((textarea) => {
    const savedContent = localStorage.getItem(textarea.id); // Ask the browser memory: anything saved for this ID?

    // If we found old notes in the archive, auto-inject them back into the textarea so you don't lose them.
    if (savedContent) {
      textarea.value = savedContent; // Restore the captain's previous writing.
    }
  });
});


//  ==========================================================================
//     MECANISM 05: DESKTOP ANCHOR NAVIGATION (Log Page Sidebar)
//     Prevents the browser from jumping the sidebar when clicking an anchor
//     link. Instead, it scrolls only the right-hand content panel
//     (.log-content) and updates the URL via history.pushState.
//  ==========================================================================
//  @mechanism: 05 — Anti-Drift Anchor Navigation
//  @event: DOMContentLoaded → click on .sidebar-link and .map-title-link
//  @reason: Without this mechanism, clicking "#html-day01" would scroll the
//    entire page, dragging the sidebar out of position. By intercepting the
//    click, we scroll only the content panel and leave the sidebar fixed.
//  ==========================================================================

// The protocol activates automatically when the full DOM matrix of the cockpit has loaded.
document.addEventListener("DOMContentLoaded", () => {
  // Select the right-side container (the article zone with the scrollbar).
  const mainContentZone = document.querySelector(".log-content"); // This is the <main> scrollable area.

  //  CORRECTED RADAR: We select both the days (.sidebar-link) AND the special map link (.map-title-link)
  //  so they all fall under the same mechanical shield protection!
  const navigationLinks = document.querySelectorAll(
    ".sidebar-link, .map-title-link",
  );

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // STEP A: CHECK OPERATING MODE (Desktop vs Mobile)
      if (window.innerWidth > 768) {
        //  ABSOLUTELY ESSENTIAL: We stop the browser's native action that used to drag the sidebar up!
        //  This is the shield that blocks the h4 title from flying off the screen.
        event.preventDefault(); // Kill the browser's default jump-to-anchor behaviour.

        const targetAnchorId = link.getAttribute("href"); // Grab the anchor (e.g. "#top-deck" or "#html-day01").
        const targetArticleSection = document.querySelector(targetAnchorId); // Find the target element in the DOM.

        if (targetArticleSection && mainContentZone) {
          let exactScrollCoordinates;

          //  INDIVIDUAL PROTOCOL FOR MAPS:
          //   If the user clicked the big MAP title, we order the right container
          //   to reset completely to the top (coordinate 0), no parasitic offsets!
          if (link.classList.contains("map-title-link")) {
            exactScrollCoordinates = 0; // The map link always goes to the very top.
          }
          //  INDIVIDUAL PROTOCOL FOR DAYS:
          //  Apply your ideal 100px cushion to place log entries neatly under the HUD.
          else {
            exactScrollCoordinates = targetArticleSection.offsetTop - 100; // 100px accounts for the fixed navbar.
          }

          // Execute a smooth scroll STRICTLY inside the right-side window (.log-content).
          mainContentZone.scrollTo({
            top: exactScrollCoordinates, // The calculated target position.
            behavior: "smooth", // Smooth cinematic glide.
          });

          // Discreetly update the browser URL bar without chaotic visual jumps.
          history.pushState(null, null, targetAnchorId); // Changes the URL hash without reloading the page.
        }
      }
      // STEP B: MOBILE MODE
      else {
        console.log(
          `Mobile navigation active for sector: ${link.getAttribute("href")}`,
        ); // Just log it; let the browser handle anchors natively on mobile.
      }
    });
  });
});


//  ==========================================================================
//     MECANISM 06: MOBILE HUD — HORIZONTAL AUTO-SCROLL
//     On narrow screens, when a new section becomes active via MECANISM 02,
//     the sidebar horizontally scrolls to centre the active button.
//  ==========================================================================
//  @mechanism: 06 — HUD Horizontal Sync
//  @event: window scroll
//  @guard: only runs on viewports <= 768px (mobile and split-screen).
//  ==========================================================================

// We listen to the global scroll event again, but this time for mobile.
document.addEventListener("scroll", () => {
  // Execute this protocol strictly on narrow screens (Mobile / Split-screen).
  if (window.innerWidth <= 768) {
    // Select the outer console container (the one with overflow-x: auto).
    const hudContainer = document.querySelector(".log-sidebar"); // The sidebar doubles as a horizontal HUD on mobile.

    // Find the day button that received the .active class in that moment from MECANISM 02.
    const activeButton = document.querySelector(".sidebar-nav a.active"); // The glow tells us which section is visible.

    // Safety shield: run the logic only if both elements are alive on screen.
    if (hudContainer && activeButton) {
      /* TACTILE REALITY MATHS:
          Calculate the button's position relative to the screen's left edge (offsetLeft)
         and subtract half the HUD width to land it EXACTLY centre! */
      const buttonLeft = activeButton.offsetLeft; // Distance from the left edge of the container.
      const buttonWidth = activeButton.offsetWidth; // How wide is the active button itself?
      const hudWidth = hudContainer.offsetWidth; // How wide is the visible HUD window?

      const targetScroll =
        buttonLeft - hudWidth / 2 + buttonWidth / 2; // Centre the button in the visible area.

      // Order the console to execute a smooth horizontal glide to that coordinate.
      hudContainer.scrollTo({
        left: targetScroll, // The calculated centre position.
        behavior: "smooth", // Smooth slide, like a camera dolly.
      });
    }
  }
});


//  ==========================================================================
//     MECANISM 06.5: HUD TELEPORT CONSOLE TOGGLE
//     The "Command Deck" button opens/closes the holographic volume overlay.
//     The CSS class .hud-open on the .navbar triggers the slide-down animation.
//     Clicking outside the overlay or pressing Escape closes it.
//  ==========================================================================
//  @mechanism: 06.5 — HUD Console Toggle
//  @event: click on .hud-toggle, click outside .hud-overlay, Escape key
//  @pedagogy: Toggling a CSS class via classList.toggle is the simplest
//    and most performant way to show/hide UI elements. No display:none
//    switching, no height calculations — just let CSS transitions handle
//    the animation. The outside-click and Escape listeners act as safety
//    releases, ensuring the overlay never traps the user.
//  ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".hud-toggle"); // The "Command Deck" button.
  const navBar = document.querySelector(".navbar"); // The parent navbar that receives .hud-open.
  const overlay = document.querySelector(".hud-overlay"); // The slide-down panel.

  // Safety exit: if any element is missing, we're on a page without the HUD — bail out.
  if (!toggleBtn || !navBar || !overlay) return;

  // Toggle the .hud-open class on the navbar when the button is clicked.
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the click from reaching the document listener below.
    navBar.classList.toggle("hud-open"); // CSS handles the height animation.
  });

  // Close the overlay when clicking outside of it.
  document.addEventListener("click", (e) => {
    // If the overlay is open and the click is outside both the overlay and the toggle button...
    if (
      navBar.classList.contains("hud-open") &&
      !overlay.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      navBar.classList.remove("hud-open"); // Close the HUD panel.
    }
  });

  // Close the overlay when the Escape key is pressed.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navBar.classList.contains("hud-open")) {
      navBar.classList.remove("hud-open"); // Emergency release: Escape shuts the panel.
    }
  });
});


//  ==========================================================================
//     MECANISM 07: CURSOR ERASE PROTOCOL (Typing Animation Cleanup)
//     After the CSS typing animation on the index page finishes, this mechanism
//     removes the blinking cursor by setting border-right to "none" with
//     !important. The timing matches the CSS keyframe durations.
//  ==========================================================================
//  @mechanism: 07 — Stencil Cursor Erase
//  @event: DOMContentLoaded
//  @bridge: Targets .stenciled-metal-text (h1) and .stenciled-metal-text-sub
//    (p) — the same elements animated by CSS in style.css.
//  ==========================================================================

// The protocol activates automatically when the complete DOM matrix has loaded.
document.addEventListener("DOMContentLoaded", () => {
  // 1. SENSOR TARGETS: Identify the stencilled text elements in the header.
  const macroText = document.querySelector(".stenciled-metal-text"); // The big h1 title.
  const microText = document.querySelector(".stenciled-metal-text-sub"); // The smaller subtitle.

  // Safety shield: only calibrate if both elements are present on the page.
  if (macroText && microText) {
    //  2. MAIN TITLE (H1) ERASE PROTOCOL
    //  The CSS typing animation lasts exactly 3 seconds (3000ms).
    //  We launch a military timer that removes the border line when it expires.
    setTimeout(() => {
      macroText.style.setProperty("border-right", "none", "important"); // Cut the physical right border of the text.
      macroText.style.setProperty(
        "border-right-color",
        "transparent",
        "important",
      ); // Force opacity to absolute zero.
    }, 3000); // 3000ms = exact duration of the h1 animation.

    //  3. SUBTITLE MONOSPACE (P) ERASE PROTOCOL
    //  The subtitle has a 3-second delay and then types for 4 seconds.
    //  Total time to full metal stabilisation is 7 seconds (7000ms).
    setTimeout(() => {
      microText.style.setProperty("border-right", "none", "important"); // Stop the blinking, erase the secondary line.
      microText.style.setProperty(
        "border-right-color",
        "transparent",
        "important",
      ); // Guarantee total pixel cleanup.
    }, 7000); // 7000ms = 3000ms (delay) + 4000ms (typing duration).
  }
});


//  ==========================================================================
//     MECANISM 08: RECURSIVE SOURCE INTEGRATION (Blueprint Page Only)
//     Reads the data-path attribute from .tab-btn buttons, fetches the
//     corresponding file via the Fetch API, and injects its raw source code
//     into .code-inspector-screen. Also handles auto-centre on mobile.
//  ==========================================================================
//  @mechanism: 08 — Recursive Source Loader
//  @event: DOMContentLoaded, then click on .tab-btn
//  @pedagogy: The Fetch API is the modern way to make HTTP requests from
//    JavaScript. fetch() returns a Promise that resolves with a Response
//    object. .then() chains handle the response, .catch() handles errors.
//    The loaded code is displayed as plain text (not executed) via
//    textContent, which is safe against XSS attacks.
//  ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Grab the output container and the tab button container from the DOM.
  const scriptTarget = document.getElementById("script-stream-target"); // The <pre> or <code> block where source appears.
  const tabContainer = document.querySelector(".source-selector-tabs"); // The tab bar with data-path buttons.

  // Safety exit: if these elements don't exist, we're NOT on the recursive-blueprint page — bail out.
  if (!scriptTarget || !tabContainer) return;

  // Launch an async fetch scan towards the selected source file.
  function loadSourceFile(filePath) {
    // Show "Loading..." visual feedback to the user.
    scriptTarget.textContent = "Loading...";
    scriptTarget.style.color = ""; // Reset any previous error colour.

    fetch(filePath) // Start the HTTP fetch request to the target file.
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `File "${filePath}" not found. (${response.status})`,
          ); // Network error? Throw it to the catch block.
        }
        return response.text(); // Convert the raw network buffer into plain usable text.
      })
      .then((rawCode) => {
        // Inject the text directly into the inspector screen as plain non-executable text.
        scriptTarget.textContent = rawCode; // The source code now appears in the glass cylinder.
      })
      .catch((error) => {
        // If anything failed, display a pink critical error alert on screen.
        scriptTarget.textContent = `[CRITICAL ERROR]: ${error.message}`;
        scriptTarget.style.color = "var(--nebula-pink)"; // Pink visual alert for system damage.
      });
  }

  // TAB CLICK HANDLER: When the user clicks a tab button in the source selector.
  tabContainer.addEventListener("click", (e) => {
    // closest() walks up the DOM tree to find the nearest .tab-btn.
    // This handles clicks on child elements (like a <span> inside the button).
    const btn = e.target.closest(".tab-btn");
    if (!btn) return; // Clicked outside a tab button? Ignore.

    // Step A: Strip the active-tab class from ALL tabs.
    tabContainer.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.remove("active-tab"); // Kill the active state across the board.
    });
    // Step B: Light up only the clicked button.
    btn.classList.add("active-tab"); // The clicked tab now glows.

    // Step C: Read the data-path attribute — it holds the relative URL to the source file.
    const filePath = btn.getAttribute("data-path");
    if (filePath) {
      loadSourceFile(filePath); // Launch the fetch and inject the source.
    }

    // Mobile auto-centre: same tactile maths as MECANISM 06.
    if (window.innerWidth <= 768) {
      const btnLeft = btn.offsetLeft; // Distance of the tab from the container's left edge.
      const btnWidth = btn.offsetWidth; // The tab's own width.
      const containerWidth = tabContainer.offsetWidth; // The visible width of the tab bar.
      const targetScroll = btnLeft - containerWidth / 2 + btnWidth / 2; // Centre it.
      tabContainer.scrollTo({
        left: targetScroll, // The calculated centre.
        behavior: "smooth", // Smooth horizontal slide.
      });
    }
  });

  // LOAD DEFAULT TAB ON PAGE INIT:
  // If a .tab-btn already has the active-tab class in the raw HTML,
  // load its file automatically without requiring a manual click.
  const defaultTab = tabContainer.querySelector(".tab-btn.active-tab");
  if (defaultTab) {
    const defaultPath = defaultTab.getAttribute("data-path");
    if (defaultPath) {
      loadSourceFile(defaultPath); // Pre-load the first tab's source on page load.
    }
  }
});


//  ==========================================================================
//     MECANISM 09: COSMIC TYPEWRITER (Transmission / Astrogation Charter)
//     Types the manifesto text one character at a time inside the glass
//     cylinder, as if the message is being received live from deep space.
//     Only activates on pages containing .manifesto-entry.
//  ==========================================================================
//  @mechanism: 09 — Cosmic Typewriter
//  @event: DOMContentLoaded
//  @pedagogy: This demonstrates three fundamental patterns in JavaScript:
//    1. DOM manipulation — creating elements, setting classes, appending
//    2. Recursive setTimeout — each character schedules the next, creating a
//       typing effect without blocking the browser
//    3. scrollIntoView — keeps the cursor visible as text is written on screen,
//       but stops as soon as the reader takes over scrolling (handed to the user)
//  ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".manifesto-entry"); // Find the glass cylinder container.

  // Safety exit: only run on the transmission page.
  if (!container) return;

  // The manifesto paragraphs are hardcoded directly in transmission.html.
  const paragraphs = container.querySelectorAll("p"); // Grab every <p> inside the container.
  if (!paragraphs.length) return; // No paragraphs? Nothing to type. Bail out.

  // Archive the text content and the signoff flag from each paragraph for later typing.
  const lines = Array.from(paragraphs).map((p) => ({
    text: p.textContent, // The raw text content of this paragraph.
    isSignoff: p.classList.contains("manifesto-signoff"), // Is this the captain's signature line?
  }));

  // Clear the container — JS will re-type everything from the archived data.
  // The original pedagogical comments in the HTML are removed here too; their purpose was during authoring.
  container.innerHTML = ""; // Empty the glass cylinder. Ready for the live transmission.

  // CREATE OUTPUT CONTAINER AND BLINKING CURSOR.
  const output = document.createElement("div"); // Create a fresh <div> for the typing output.
  output.className = "typewriter-output"; // Give it the CSS class that styles the typed text.
  container.appendChild(output); // Insert it into the glass cylinder.

  const cursor = document.createElement("span"); // Create a <span> for the blinking cursor.
  cursor.className = "typing-cursor"; // The CSS class that makes it blink via animation.
  container.appendChild(cursor); // Insert the cursor after the output text.

  // Reading takeover: once the reader scrolls (wheel/touch/key), the typewriter
  // stops pulling the viewport back to the cursor, so the page scrolls freely
  // while the manifesto keeps typing in the background.
  let readerTookOver = false;

  // Any wheel, touch, or arrow/space/PageDown/PageUp keystroke is a sign the
  // reader wants the page under their control. We stop auto-scrolling from then on.
  const handScrollToReader = () => (readerTookOver = true);
  window.addEventListener("wheel", handScrollToReader, { passive: true });
  window.addEventListener("touchmove", handScrollToReader, { passive: true });
  window.addEventListener("touchstart", handScrollToReader, { passive: true });
  window.addEventListener("keydown", handScrollToReader);

  // Typing counters: paraIdx tracks which paragraph, charIdx tracks which character inside that paragraph.
  let paraIdx = 0; // Start at the first paragraph (index 0).
  let charIdx = 0; // Start at the first character of that paragraph (index 0).
  let currentP = null; // No paragraph element has been created yet.

  // randomDelay varies the typing speed between 15-50ms per character.
  // This simulates the irregular rhythm of a deep-space cosmic signal.
  function randomDelay() {
    return Math.floor(Math.random() * 35 + 15); // Returns a random integer between 15 and 50.
  }

  // typeNextChar — the recursive typing engine.
  // Types one character, then schedules itself via setTimeout.
  // When a paragraph is complete, it moves to the next with a dramatic pause.
  // When all paragraphs are done, a 3-second timer hides the cursor.
  function typeNextChar() {
    // Guard: all paragraphs have been typed — dismiss the cursor after 3 seconds.
    if (paraIdx >= lines.length) {
      // cursor-hidden is a CSS class that sets opacity to 0, making the cursor disappear.
      setTimeout(() => {
        cursor.classList.add("cursor-hidden"); // Fade out the cursor silently.
      }, 3000);
      return; // Stop the recursion. The transmission is complete.
    }

    // Logic: create a new <p> element when we start typing a fresh paragraph.
    if (!currentP) {
      currentP = document.createElement("p"); // Create a new paragraph element.
      if (lines[paraIdx].isSignoff) {
        currentP.className = "manifesto-signoff"; // Special class for the captain's signature line.
      }
      output.appendChild(currentP); // Append the new paragraph to the output container.
    }

    const text = lines[paraIdx].text; // Get the full text of the current paragraph.

    if (charIdx < text.length) {
      // There are still characters left to type in this paragraph.
      currentP.textContent += text[charIdx]; // Append the next character to the paragraph.
      charIdx++; // Move to the next character index.
      // scrollIntoView keeps the cursor on screen as the text grows — but only
      // until the reader has taken over scrolling, so it never fights them.
      if (!readerTookOver) cursor.scrollIntoView({ block: "nearest" });
      setTimeout(typeNextChar, randomDelay()); // Schedule the next character with a random delay.
    } else {
      // This paragraph is finished — advance to the next one.
      paraIdx++; // Move to the next paragraph index.
      charIdx = 0; // Reset character index to 0 for the new paragraph.
      currentP = null; // Signal that a new <p> needs to be created next time.

      if (paraIdx < lines.length) {
        // Longer pause before the signoff line (the captain's signature) for dramatic narrative effect.
        const pause = lines[paraIdx].isSignoff ? 1200 : 500; // 1200ms for signoff, 500ms for regular paragraphs.
        setTimeout(typeNextChar, pause); // Schedule the next paragraph after the pause.
      } else {
        // One final call to trigger the completion guard above.
        setTimeout(typeNextChar, 500); // Short pause, then the guard fires and hides the cursor.
      }
    }
  }

  // A brief moment of silence before the cosmic transmission begins. Immersion first.
  setTimeout(typeNextChar, 1000); // Wait 1 second, then start typing character by character.
});


//  ==========================================================================
//     MECANISM 10: THE SELDON VAULT
//     Runs on every page. Stamps the voyage log (first contact + waypoints),
//     and when the traveller reaches the Vault page (vault.html), it governs
//     the two remaining keys of the novel:
//       Key One   — the Nav-Gate quizzes: passing a volume's test turns the
//                   first key of its capsule.
//       Key Two   — the voyage clock: real time since first contact,
//                   accelerated by exploration, ripens the second key.
//     When both keys turn, the Sleeper projects the novel's transmission
//     through the crystal.
//     @pedagogy: This mechanism demonstrates seven real JavaScript patterns:
//       1. localStorage as a persistent cross-page state store (the voyage log)
//       2. the Fetch API for loading JSON and raw markdown (no libraries)
//       3. template literal rendering into the DOM (constellation capsules)
//       4. the FormData API + event delegation for the quizzes
//       5. a recursive setTimeout typing engine (the Sleeper's voice)
//       6. the hidden attribute to keep the Nav-Gate quiz hidden until a
//          capsule is chosen (a deliberate reveal, accessibility-first)
//       7. the page itself as the gate: navigation replaced the click-unseal
//          that the old single-page design used for the chamber
//  ==========================================================================

//  @block: 10-A — VOYAGE LOG (runs on every page of the ship)
//  The moment a traveller loads ANY page, the voyage begins.
//  ==========================================================================
(function stampVoyageLog() {
  const FIRST_KEY = "d0_voyage_firstContact";
  const WAYPOINTS_KEY = "d0_voyage_waypoints";

  //  First contact: the instant the traveller first stepped aboard.
  if (!localStorage.getItem(FIRST_KEY)) {
    localStorage.setItem(FIRST_KEY, String(Date.now())); // Stored in milliseconds.
  }

  //  Waypoint stamping: derive the volume + page from the current URL.
  //  Example: /digital-odyssey/en/frontend/html-log.html -> frontend/html-log
  const path = window.location.pathname.replace(/\/$/, "");
  const match = path.match(
    /\/(frontend|backend|database|data-bridge|ux|delivery)\/([^/]+?)\.html$/,
  );
  let currentWaypoint = null;

  if (match) {
    currentWaypoint = `${match[1]}/${match[2]}`; // e.g. "frontend/html-log"
  } else {
    //  Flagship pages also count as waypoints (index, transmission, etc.).
    const page = path.split("/").pop();
    if (page && page.endsWith(".html")) currentWaypoint = page;
  }

  if (currentWaypoint) {
    //  Load the existing waypoint array (or start fresh).
    let waypoints = [];
    try {
      waypoints = JSON.parse(localStorage.getItem(WAYPOINTS_KEY)) || [];
    } catch {
      waypoints = [];
    }
    //  Add only pages never visited before — each distinct visit is one boost.
    if (!waypoints.includes(currentWaypoint)) {
      waypoints.push(currentWaypoint);
      localStorage.setItem(WAYPOINTS_KEY, JSON.stringify(waypoints));
    }
  }
})();


//  @block: 10-B — VAULT CHAMBER ENGINE
//  Only activates on the vault page. Now that the vault has its own page, there
//  is no hidden chamber to unseal: the deliberate act is the navigation itself,
//  so the Key-Zero gate code is gone. This block governs the two remaining
//  keys of the novel:
//    Key One   — the Nav-Gate quizzes: passing a volume's test turns the
//                first key of its capsule.
//    Key Two   — the voyage clock: real time since first contact,
//                accelerated by exploration, ripens the second key.
//  When both keys turn, the Sleeper projects the novel's transmission
//  through the crystal.
//  @pedagogy: This is the ship's largest single mechanism. Read it slowly, top to
//    bottom — every function is a discrete teaching unit:
//      1.  The opening line selects the page context (a safety exit that keeps
//          the whole engine asleep on non-vault pages).
//      2.  A set of constants and DOM references, bound once so every later
//          function shares the SAME readable name for each on-screen element.
//      3.  Fetching the JSON manifest, then the voyage-clock maths and the
//          game-logic predicates that decide what the traveller may unlock.
//      4.  The constellation renderer (a template-literal builder over an array).
//      5.  The Nav-Gate quiz (FormData + radio groups, scored, rewarded).
//      6.  The Sleeper's crystal (a scripted transmission + recursive typeSignal).
//      7.  The journal fetch (slices DAY packages out of raw markdown).
//    These are the same tools a beginner meets in the first month of JavaScript:
//    DOM queries, addEventListener, array.map / .join / .filter / .includes,
//    template literals, JSON, fetch/then, and recursive setTimeout. Not one
//    line relies on a third-party library — every behaviour is built by hand.
//  ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  //  The chamber <div> is the landmark that proves we are ON the vault page.
  //  If it is missing, we are on some content page — exit immediately so the
  //  whole engine (and every DOM binding below) stays asleep.
  const chamber = document.querySelector(".vault-chamber");
  if (!chamber) return; // Not the vault page — leave the engine asleep.

  //  ---------------------------------------------------------------
  //  LANGUAGE + STORAGE KEYS
  //  ---------------------------------------------------------------
  //  First, the language: JavaScript reads the <html lang="ro"> attribute set
  //  in the page's head. Every user-facing string below is chosen at runtime
  //  between the Romanian (ro) and English (en) variants using this one value.
  const lang = (document.documentElement.lang || "en").toLowerCase();
  //  The three storage keys mirror MECANISM 10-A (the voyage's two keys) plus
  //  this block's own per-volume "quiz passed" flags. PASS_PREFIX is completed
  //  later: "d0_vault_pass_" + the volume (e.g. frontend) identifies one capsule.
  const FIRST_KEY = "d0_voyage_firstContact";
  const WAYPOINTS_KEY = "d0_voyage_waypoints";
  const PASS_PREFIX = "d0_vault_pass_";

  //  ---------------------------------------------------------------
  //  DOM REFERENCES — bound ONCE, reused by every function below.
  //  ---------------------------------------------------------------
  //  Each getElementById call performs a search of the whole page. Binding the
  //  result to a const means the search happens exactly once, and the rest of
  //  the engine talks to these elements by a short, readable name.
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

  //  The raw journal is fetched live so the website and GitHub stay one body.
  //  JOURNAL_PATH resolves to ../JOURNAL-EN.md or ../JOURNAL-RO.md — the very
  //  markdown file the GitHub repository hosts. The vault never duplicates the
  //  novel: it reads the captain's real book at the moment the page runs.
  const JOURNAL_PATH = `../JOURNAL-${lang === "ro" ? "RO" : "EN"}.md`;

  //  Two shared "working memory" slots for the whole block:
  let vaultData = null;   // The parsed vault-transmissions.json
  let activeCapsule = null; // The capsule currently open in the Nav-Gate

  //  ---------------------------------------------------------------
  //  LOAD THE VAULT MANIFEST
  //  ---------------------------------------------------------------
  //  fetch() returns a Promise. The .then() chain unpacks the response in two
  //  stages: first check the HTTP status, then parse the body as JSON.
  fetch("../shared/data/vault-transmissions.json")
    .then((response) => {
      if (!response.ok) throw new Error(`Vault manifest not found (${response.status}).`);
      return response.json();
    })
    .then((data) => {
      //  Store the parsed manifest in the shared variable so every later
      //  function can reach capsules, voyage, and novel data without re-fetching.
      vaultData = data;
      //  Kick off the two things that need the data: draw the capsule buttons
      //  and show the telemetry, then keep the voyage clock ticking.
      renderConstellation(data.capsules);
      refreshTelemetry();
      setInterval(refreshTelemetry, 30000); // The clock ticks every 30 seconds.

      //  The growth note: the manifest's novel meta tells the traveller how
      //  many days are sealed and promises the constellation keeps growing.
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
      //  Offline, wrong path, or a corrupt file? Show a pink error in the
      //  chamber rather than leaving the traveller staring at a silent box.
      constellation.innerHTML =
        `<p class="vault-error">[VAULT ERROR]: ${error.message}</p>`;
    });

  //  ---------------------------------------------------------------
  //  VOYAGE CLOCK
  //  ---------------------------------------------------------------
  //  This is the "Key Two" maths. The traveller does not simply wait for the
  //  clock: they can explore the ship (accumulate waypoints) to accelerate it.
  //  readVoyageState() reads the two localStorage facts written by MECANISM 10-A
  //  and computes a single number: the effective ship-hours that have elapsed.
  function readVoyageState() {
    //  First contact, stored as a millisecond timestamp; fall back to "now" if
    //  it is missing, so the voyage has a starting point on its very first run.
    const firstContact = Number(localStorage.getItem(FIRST_KEY)) || Date.now();
    let waypoints = [];
    try {
      waypoints = JSON.parse(localStorage.getItem(WAYPOINTS_KEY)) || [];
    } catch {
      waypoints = []; // Corrupted array? Treat the voyage as just starting.
    }
    //  effectiveVoyageHours = realHours * (1 + boost * waypointCount)
    const realHours = (Date.now() - firstContact) / 3600000; // Milliseconds -> hours (1 hour = 3,600,000 ms).
    const boost = (vaultData && vaultData.voyage.perWaypointBoost) || 0.5; // Each waypoint multiplies progress.
    const shipHours = realHours * (1 + boost * waypoints.length); // The accelerated total.
    return { firstContact, waypoints, realHours, shipHours }; // One object, four facts.
  }

  //  Writes the four telemetry cells on the vault page: the date of first
  //  contact, how many waypoints are stamped, the current ship-hours, and the
  //  unlocked/total count. Called on load and on the 30-second tick.
  function refreshTelemetry() {
    const state = readVoyageState(); // Grab the freshly computed clock.
    firstContactEl.textContent = new Date(state.firstContact).toLocaleDateString(lang, { // Format the timestamp nicely...
      year: "numeric",          // ...full year,
      month: "short",           // short month name,
      day: "numeric",           // and numeric day
    });
    waypointsEl.textContent = String(state.waypoints.length); // Waypoint tally.
    shipHoursEl.textContent = state.shipHours.toFixed(1); // One decimal place.

    if (vaultData) {
      const total = vaultData.capsules.length; // Number of capsules on the manifest.
      const unlocked = vaultData.capsules.filter((c) => isUnlocked(c)).length; // How many have BOTH keys.
      unlockedEl.textContent = `${unlocked} / ${total}`; // e.g. "1 / 6".
    }
  }

  //  ---------------------------------------------------------------
  //  KEY STATE: quiz passed AND voyage clock ripened
  //  ---------------------------------------------------------------
  //  The next three tiny functions are "predicates" — they each answer ONE
  //  yes/no question about a capsule. Keeping them separate lets the rest of
  //  the code ask clear questions ("has this quiz been passed?") without caring
  //  HOW the answer is stored.
  function quizPassed(capsule) {
    //  Read the flag keyed by volume: "d0_vault_pass_frontend" === "1" means the
    //  traveller cleared that volume's Nav-Gate. String "1" stands for true.
    return localStorage.getItem(PASS_PREFIX + capsule.volume) === "1";
  }

  function clockRipened(capsule) {
    //  Key Two ripens when the accelerated ship-hours reach the capsule's quota.
    return readVoyageState().shipHours >= capsule.requiredShipHours;
  }

  function isUnlocked(capsule) {
    //  A capsule is truly open ONLY when both keys turn at once. && (AND) means
    //  a quiz pass without time, or time without a quiz, still reads as locked.
    return quizPassed(capsule) && clockRipened(capsule);
  }

  //  ---------------------------------------------------------------
  //  CAPSULE CONSTELLATION RENDERER
  //  ---------------------------------------------------------------
  //  The click listener is attached ONCE, outside the renderer, so that
  //  re-rendering the constellation never stacks duplicate handlers. This is the
  //  "event delegation" pattern: instead of giving every capsule its own
  //  listener (which would break the instant we re-render the list), ONE
  //  listener lives on the container and inspects whatever was clicked.
  constellation.addEventListener("click", (event) => {
    const btn = event.target.closest(".capsule"); // Walk up from the click to find the capsule button.
    if (!btn) return; // Clicked somewhere outside a capsule? Ignore.
    const cap = vaultData.capsules.find((c) => c.id === btn.dataset.capsule); // Match the data attribute to a manifest capsule.
    if (cap) handleCapsuleClick(cap, btn); // Found! Send it to the main router.
  });

  //  Builds the capsule buttons as a single HTML string from the manifest array.
  //  This shows three core array methods used in one breath:
  //    .map()     convert every capsule -> one button string
  //    .join("")  glue all the button strings together with nothing between them
  //  innerHTML receives the finished string all at once. State is a string:
  //  "sealed", "ripening", or "open".
  function renderConstellation(capsules) {
    constellation.innerHTML = capsules
      .map((cap) => {
        const passed = quizPassed(cap); // Has the quiz flag been stamped?
        const ripened = clockRipened(cap); // Is the voyage clock mature enough?
        const state = isUnlocked(cap) // Decide the visual state...
          ? "open"        // ...both keys: fully unlocked.
          : passed
            ? "ripening"  // quiz done, time still short.
            : "sealed";   // otherwise: locked.
        const lockLabel = // Human-readable lock text, matching the state.
          !passed && !ripened
            ? `${lang === "ro" ? "CHEIE DUALĂ: test + timp" : "DUAL KEY: quiz + time"}`
            : !passed
              ? `${lang === "ro" ? "TEST NECESAR" : "QUIZ REQUIRED"}`
              : `${lang === "ro" ? "SE COACE (timp)" : "RIPENING (time)"}`;
        const title = cap.title[lang] || cap.title.en; // Pick the language's title.

        //  Template literal: a real HTML button built with ${} placeholders.
        //  data-capsule stashes the capsule id so the click handler above can
        //  find it; type="button" stops the button from submitting any form.
        return `
        <button class="capsule capsule--${state}" data-capsule="${cap.id}" type="button">
          <span class="capsule-day">${cap.day}</span>
          <span class="capsule-volume">${cap.volume}</span>
          <span class="capsule-title">${title}</span>
          <span class="capsule-lock">${lockLabel}</span>
        </button>`;
      })
      .join(""); // Concatenate every button string into ONE innerHTML payload.
  }

  //  The central router for a capsule click. It reads the two keys and chooses
  //  one of three behaviour paths — this is a clean if/else decision ladder.
  function handleCapsuleClick(cap, btn) {
    const passed = quizPassed(cap); // Snapshot Key One (quiz).
    const ripened = clockRipened(cap); // Snapshot Key Two (time).

    //  Case 1: already unlocked — project the transmission directly.
    if (passed && ripened) {
      projectTransmission(cap); // Both keys turned: wake the Sleeper now.
      return;
    }

    //  Case 2: quiz not yet passed — open the Nav-Gate.
    if (!passed) {
      openNavGate(cap); // First key still missing: give the test.
      return;
    }

    //  Case 3: quiz passed, clock still ripening — explain the wait.
    if (!ripened) {
      const need = cap.requiredShipHours - readVoyageState().shipHours; // How many ship-hours remain.
      setSleeperStatus(
        lang === "ro"
          ? `CAPSULA SE COACE — încă ${need.toFixed(1)} ore-navă până se deschide. Explorează nava ca s-o accelerezi.`
          : `CAPSULE STILL RIPENING — ${need.toFixed(1)} more ship-hours until it opens. Explore the ship to accelerate.`,
      );
    }
  }

  //  ---------------------------------------------------------------
  //  NAV-GATE QUIZ
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

    //  Render the quiz questions as radio groups.
    //  One .map() over the questions produces the initial HTML; inside it, the
    //  options get their OWN .map() so each radio is built from its own object.
    //  name="q${qIndex}" groups the radios of one question together — the
    //  browser enforces "only one radio per name group" for free. Each answer's
    //  whitespace is held raw inside a template literal, then all are join("")ed.
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

    //  Submit button — built with createElement so we control its type and
    //  label, then appended to the form as a real node (no re-parsing needed).
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "nav-gate-submit";
    submit.textContent = lang === "ro" ? "DESCUIE CAPSULA" : "UNSEAL THE CAPSULE";
    navGateForm.appendChild(submit);

    //  Reveal the panel and glide the viewport to it.
    navGate.hidden = false;
    navGate.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  //  ---------------------------------------------------------------
  //  SUBMIT — score the quiz, decide the key
  //  ---------------------------------------------------------------
  //  Event delegation again, but for "submit" (fired when the form's submit
  //  button is clicked OR Enter is pressed). event.preventDefault() stops the
  //  browser's native GET-resubmit so the page never reloads and the result
  //  can be drawn live in place.
  navGateForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop the native page reload.
    if (!activeCapsule) return; // No capsule in context? Nothing to score.

    //  FormData is the browser's own tool for reading form controls. .get()
    //  returns the chosen radio's value ("" for radio) by that group's name —
    //  giving us the selected answer index for every question at once.
    const formData = new FormData(navGateForm);
    const answers = activeCapsule.quiz.questions.map((_, qIndex) =>
      formData.get(`q${qIndex}`), // The index the traveller chose.
    );

    //  Score: .reduce() walks every question, accumulating 1 for each correct
    //  answer. Number(string) turns the radio value into an integer so we can
    //  compare it to q.correct with ===. compare === q.correct ? 1 : 0 becomes
    //  the accumulator's adder (ternary inside a reduce — a beginner pattern).
    const score = activeCapsule.quiz.questions.reduce((acc, q, idx) => {
      return acc + (Number(answers[idx]) === q.correct ? 1 : 0);
    }, 0);

    const threshold = activeCapsule.quiz.passThreshold; // Needed correct answers.
    const passed = score >= threshold; // The whole quiz's binary verdict.

    if (passed) {
      //  The first key turns: the volume's waypoint is permanently stamped.
      localStorage.setItem(PASS_PREFIX + activeCapsule.volume, "1");
      navGateResult.innerHTML =
        `<p class="nav-gate-result-ok">${
          lang === "ro"
            ? `CHEIE ÎNTOARSĂ — ${score}/${answers.length} corecte. Capsula a primit cheia întâi.`
            : `FIRST KEY TURNED — ${score}/${answers.length} correct. The capsule has received its first key.`
        }</p>`;
      //  The constellation and telemetry are re-rendered so the "ripening"
      //  state and the unlocked tally reflect the freshly-turned key.
      renderConstellation(vaultData.capsules);
      refreshTelemetry();
    } else {
      //  Below threshold: no key, and clear feedback on what to do next.
      navGateResult.innerHTML =
        `<p class="nav-gate-result-fail">${
          lang === "ro"
            ? `NU AI TRECUT — ${score}/${answers.length}. Ai nevoie de cel puțin ${threshold}. Reîncearcă după o nouă traversare.`
            : `NOT PASSED — ${score}/${answers.length}. You need at least ${threshold}. Retry after another traversal.`
        }</p>`;
    }
  });

  //  ---------------------------------------------------------------
  //  THE SLEEPER'S CRYSTAL — projection engine
  //  ---------------------------------------------------------------
  function setSleeperStatus(text) {
    //  A one-line helper: a short, loud status line above the output.
    sleeperStatus.textContent = text;
  }

  //  projectTransmission is the vault's grand finale: the moment both keys are
  //  turned, this builds the full transmission DOM. It shows the other side of
  //  innerHTML usage — building nodes with createElement when the markup must
  //  be inserted WHILE user text (the teaser) is still typing into them.
  function projectTransmission(cap) {
    //  Mark the capsule as opened so it keeps its lit state visually.
    //  First un-light EVERY capsule, then light the one that was clicked —
    //  querySelectorAll + forEach walks all of them, remove/add the class.
    constellation
      .querySelectorAll(".capsule")
      .forEach((b) => b.classList.remove("capsule--active"));
    const activeBtn = constellation.querySelector(
      `[data-capsule="${cap.id}"]`, // Template literal again, this time as a CSS selector.
    );
    if (activeBtn) activeBtn.classList.add("capsule--active");

    //  Wake the Sleeper: a banner status line in the current language.
    setSleeperStatus(
      lang === "ro"
        ? "ADORMITA SE TREZEȘTE — TRANSMISIE RECEPȚIONATĂ"
        : "THE SLEEPER WAKES — TRANSMISSION RECEIVED",
    );
    vaultOutput.innerHTML = ""; // Clear any previous transmission first.

    //  The projection begins with the title line, then the teaser signal.
    //  Pick the language-appropriate strings from the manifest capsule.
    const title = cap.title[lang] || cap.title.en;
    const teaser = cap.teaser[lang] || cap.teaser.en;

    const header = document.createElement("p");
    header.className = "vault-transmission-title";
    header.textContent = `${cap.day} — ${title}`; // e.g. "DAY 12 — The Joins".
    vaultOutput.appendChild(header);

    const signal = document.createElement("p");
    vaultOutput.appendChild(signal); // This <p> is where typeSignal writes, one char at a time.

    //  Delta layer: the commit hashes that gave birth to this transmission.
    if (cap.deltas && cap.deltas.length) {
      const delta = document.createElement("p");
      delta.className = "vault-delta-line";
      delta.textContent = `TRANSMISSION DELTA${cap.deltas.length > 1 ? "S" : ""}: ${cap.deltas.join(" · ")}`;
      vaultOutput.appendChild(delta);
    }

    //  If the day is unwritten, the Sleeper speaks the pending prophecy only.
    //  cap.status === "pending" marks still-sealed days in the manifest.
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
      return; // Stop here: there is no journal text to fetch for a pending day.
    }

    //  Written days: type the teaser, then fetch the live journal section.
    //  The projection is sequential — typeSignal runs the fetch only AFTER the
    //  teaser finishes (its onDone callback), so the traveller hears the teaser
    //  first and the full day second.
    typeSignal(signal, teaser, () => {
      fetchJournalPackage(cap, (fullText) => {
        const divider = document.createElement("p");
        divider.className = "vault-divider";
        divider.textContent = "— · — · —"; // A motif splitting teaser from prose.
        vaultOutput.appendChild(divider);

        const full = document.createElement("pre");
        full.className = "vault-full-text";
        full.textContent = fullText; // The stripped DAY-section markdown, verbatim.
        vaultOutput.appendChild(full);

        //  A real link to the captain's journal on GitHub, opened in a new tab.
        const link = document.createElement("p");
        link.className = "vault-journal-link";
        const a = document.createElement("a");
        a.href = JOURNAL_PATH;
        a.target = "_blank"; // New tab ...
        a.rel = "noopener"; // ... without giving the new page a back-reference.
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
  //  THE SLEEPER'S VOICE — a recursive typing engine
  //  ---------------------------------------------------------------
  //  The signature takes the element to write into, the text to reveal, and an
  //  onDone callback run when the whole string has been typed. This is a lesson
  //  in recursion + a closure: typeNext schedules ITSELF with setTimeout until
  //  idx reaches the end — the closure keeps remembering idx between ticks.
  function typeSignal(element, text, onDone) {
    let idx = 0; // The cursor position inside the string (our shared counter).
    vaultCursor.style.display = "inline"; // Show the blinking block caret.
    vaultOutput.scrollIntoView({ behavior: "smooth", block: "nearest" });

    function typeNext() {
      if (idx < text.length) {
        element.textContent += text[idx]; // Append one character to the element.
        idx++; // Advance the shared counter.
        vaultCursor.scrollIntoView({ block: "nearest" }); // Chase the caret.
        //  Random 8–20ms delays emulate an irregular deep-space signal.
        setTimeout(typeNext, Math.floor(Math.random() * 12 + 8));
      } else {
        //  Done typing: hide the caret and call the caller's continuation.
        vaultCursor.style.display = "none";
        if (onDone) onDone();
      }
    }
    typeNext(); // Kick off the very first tick.
  }

  //  ---------------------------------------------------------------
  //  JOURNAL — slice DAY packages out of the live markdown
  //  ---------------------------------------------------------------
  //  Fetches the raw journal and slices out the package of DAY sections the
  //  capsule unlocks (cap.days, e.g. ["DAY 00", ..., "DAY 21"]). Each DAY is
  //  sliced, markdown is stripped, and the sections are joined with a divider
  //  so the whole package types out as one transmission.
  //  Progressive enhancement: if the fetch fails (offline / file://), the
  //  teaser already received stands alone — the vault never breaks.
  function extractDaySection(markdown, dayWord, dayNumber) {
    //  What is being hunted, e.g. "DAY 12". Interpolated from the capsule's day
    //  list, so the same function serves every volume.
    const sectionHeader = `${dayWord} ${dayNumber}`;
    //  A RegExp built at runtime. We escape special characters in the header
    //  first (replace with \$&) so "DAY 12" cannot be misread as a pattern.
    //  ^#{1,3} = 1..3 leading hashes (a markdown heading), then the header,
    //  then \b (a word boundary) so "DAY 12" never matches inside "DAY 123".
    const headerPattern = new RegExp(
      `^#{1,3}\\s+${sectionHeader.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      "m", // The "m" flag lets ^ match line starts across the whole file.
    );
    const startMatch = markdown.match(headerPattern);
    if (!startMatch) throw new Error(`Section ${sectionHeader} not found.`);
    const startIdx = startMatch.index; // Character offset of the heading start.

    //  Find the next section header after it (a new DAY / ZIUA for any volume).
    //  .slice() crops the string right after this heading, so the search starts
    //  cleanly past the current day; +sectionHeader.length skips the heading.
    const nextMatch = markdown
      .slice(startIdx + sectionHeader.length)
      .match(/^#{1,3}\s+(DAY|ZIUA)\s+\d+[:\s—]/m);
    const endIdx = nextMatch
      ? startIdx + sectionHeader.length + nextMatch.index // Stop at next day.
      : markdown.length; // No next day: the section runs to the file's end.

    //  Strip markdown syntax to type readable prose. Each .replace is ONE
    //  translation rule, run left to right on the slice.
    let section = markdown.slice(startIdx, endIdx);
    section = section
      .replace(/^\s*#+\s*/gm, "")   // remove heading markers (a leading # ...)
      .replace(/\*\*([^*]+)\*\*/g, "$1") // bold: **word** -> word
      .replace(/\*([^*]+)\*/g, "$1")     // italics: *word* -> word
      .replace(/^---\s*$/gm, "")          // horizontal rules (a lone divider)
      .replace(/`([^`]+)`/g, "$1")        // inline code: `code` -> code
      .trim(); // Drop leading/trailing blank lines around the section.
    return section; // The readable DAY text, ready for the <pre>.
  }

  //  Ties the package together: resolves each day number, slices ALL its DAY
  //  sections, and — only if at least one landed — calls onSuccess with the
  //  sections joined by a blank line. Days handed to it come straight from the
  //  capsule's manifest (cap.days).
  function fetchJournalPackage(cap, onSuccess) {
    const days = cap.days || [];
    if (!days.length) return; // No package assigned yet — teaser stands.

    fetch(JOURNAL_PATH)
      .then((response) => {
        if (!response.ok) throw new Error("Journal unavailable.");
        return response.text(); // We want raw markdown, not JSON.
      })
      .then((markdown) => {
        //  The Romanian journal spells the day "ZIUA", the English one "DAY".
        const dayWord = lang === "ro" ? "ZIUA" : "DAY";
        //  Resolve each day number, then slice every section in the package.
        const sections = [];
        for (const day of days) {
          //  Pull the first digits out of "DAY 12" -> "12".
          const dayNumber = (day.match(/\d+/) || [""])[0];
          if (!dayNumber) continue; // No digits after all? Skip this entry.
          try {
            sections.push(extractDaySection(markdown, dayWord, dayNumber));
          } catch {
            //  A missing day breaks nothing: later or earlier days still land.
          }
        }
        if (!sections.length) throw new Error("No sections projected.");
        onSuccess(sections.join("\n\n")); // Hand over the whole package.
      })
      .catch(() => {
        //  Silent fallback: the teaser already typed remains the projection.
        setSleeperStatus(
          lang === "ro"
            ? "SIGNAL PARȚIAL — arhiva e în afara razei; teaserul rămâne."
            : "PARTIAL SIGNAL — the archive is out of range; the teaser stands.",
        );
      });
  }
});

//  ==========================================================================
//     BACKLOG — Navigation & UX Enhancements (Planned Mechanisms)
//     These are not active code — they are entries in the ship's development
//     backlog, preserved here for future implementation.
//  ==========================================================================

//  @todo: 01 — Dynamic Sidebar Index Generation
//    Instead of manually writing 1000+ sidebar links, a script will extract
//    text from every <h3> and auto-generate the corresponding <li> elements.
//    Essential for the extended HTML-Log journal pages.

//  @todo: 02 — Search & Filter Archive
//    A search bar in the sidebar that filters log entries by keyword
//    (e.g. "Flexbox", "Joins", "Loops") in real time, using the browser's
//    built-in filter or a simple text-matching algorithm.

//  @todo: 03 — Dynamic Navbar Offset Calculation
//    Instead of hardcoding the 100px offset in MECANISM 05, JavaScript will
//    measure the actual navbar height at runtime and adjust scroll-margin-top
//    dynamically for every device.

//  @todo: 04 — Note Export System
//    Extend MECANISM 04 with a "download" button that compiles all saved
//    notes into a single markdown or text file for offline reference.
//  ==========================================================================
