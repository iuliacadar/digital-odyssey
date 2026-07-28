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
//    hides/shows it; MECANISM 07 toggles overlay on it.
const navbar = document.querySelector(".navbar"); // Grabs the top navigation bar from the DOM — our persistent HUD.

//  @bridge: sidebar — the left-hand navigation console used on log pages.
//    MECANISMS 02, 05, and 06 read and write its scroll position.
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
//    3. scrollIntoView — keeps the cursor visible as text is written on screen
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
      // scrollIntoView keeps the cursor on screen as the text grows. block: "nearest" scrolls only as needed.
      cursor.scrollIntoView({ block: "nearest" }); // Keeps the cursor visible without excessive scrolling.
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
