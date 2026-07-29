# Semantic Field Manual

A technical index of every HTML element used across the Digital Odyssey project, with its semantic role and narrative meaning in the spaceship metaphor.

---

## `a` — Anchor / Hyperlink

- **HTML role:** Creates a hyperlink to another page, section, or resource.
- **In the ship:** A navigation waypoint. Each `a` is a command that teleports the crew to another sector (day entry, external resource, or footer link).
- **Where used:** Sidebar day links, footer link list, navbar links, bibliography citations.

## `article` — Journal Entry

- **HTML role:** Represents a self-contained composition — a forum post, magazine article, or daily log entry.
- **In the ship:** Each `<article>` is one day's captain's log entry — a sealed container holding the day's narrative, telemetry, and notes.
- **Where used:** Every day entry (Day 00 through Day 28), transmission entries.

## `aside` — Sidebar / Secondary Console

- **HTML role:** Represents content tangentially related to the main content.
- **In the ship:** The navigator's auxiliary console — a secondary panel to the left of the main deck, holding the expedition map and sector index.
- **Where used:** The log sidebar (`<aside class="log-sidebar">`).

## `body` — The Visible Deck

- **HTML role:** The root container for all renderable content.
- **In the ship:** The entire visible deck of the vessel. Everything the traveller sees — navbar, sidebar, log entries, footer — lives here.
- **Where used:** Every page. Exactly one per document.

## `button` — Control Switch

- **HTML role:** An interactive control that triggers an action (usually via JavaScript).
- **In the ship:** A physical switch or button on the control panel. Pressing it sends a signal (saves a note, toggles a console).
- **Where used:** Inside the note-terminal, index page interactive elements.

## `code` — Inline Signal / Technobabble

- **HTML role:** Represents a fragment of computer code.
- **In the ship:** A raw signal burst or technical incantation — displays code snippets, file names, or terminal commands in monospace.
- **Where used:** Recursive blueprint page for inline code references.

## `dd` — Description Detail / Cargo Manifest

- **HTML role:** The description or value part of a name-value pair in a description list.
- **In the ship:** The contents of a cargo hold or the detailed readout for a signal entry in the archives.
- **Where used:** Bibliography page description lists.

## `div` — Generic Container / Compartment

- **HTML role:** A block-level container with no semantic meaning on its own.
- **In the ship:** A structural compartment, bulkhead, or deck plate. Used to group related controls and displays where a semantic element would be misleading.
- **Where used:** Logo container, log-layout grid, mission-status box, note-terminal wrapper, footer columns.

## `dl` — Description List / Archive Registry

- **HTML role:** A list of name-value groups (terms and descriptions).
- **In the ship:** A ship's registry or glossary — pairs a signal name with its meaning.
- **Where used:** Bibliography page signal legend section.

## `dt` — Description Term / Signal Name

- **HTML role:** The term or name part of a name-value pair in a description list.
- **In the ship:** The name of a signal, frequency, or entry in the registry.
- **Where used:** Bibliography page description lists.

## `footer` — Aft Station

- **HTML role:** Represents the footer of a section or page, typically containing metadata, links, or copyright.
- **In the ship:** The aft station — the rear section of the vessel housing auxiliary navigation links, system telemetry readouts, and the captain's signature.
- **Where used:** Bottom of every page.

## `h1` — Page Title / Vessel Name

- **HTML role:** The highest-level heading — defines the document's main topic.
- **In the ship:** The vessel's primary designation displayed on the main screen. It names the entire expedition.
- **Where used:** Index page hero title, recursive blueprint title.

## `h2` — Section Title / Sector Name

- **HTML role:** Heading level 2 — defines a major section within the document.
- **In the ship:** The primary label for a sector of knowledge. Written in uppercase monospace, it reads like a subspace announcement.
- **Where used:** Category header, sector announcement headings, bibliography section heads.

## `h3` — Day Title / Log Entry Header

- **HTML role:** Heading level 3 — defines a subsection within a section.
- **In the ship:** The header of a single day's log entry. It contains the day number and the thematic subtitle.
- **Where used:** Inside each `<article>` (day entry), blueprint subsections.

## `h4` — Sidebar Map Title

- **HTML role:** Heading level 4 — a sub-heading within a section.
- **In the ship:** The label on the expedition map panel in the sidebar (e.g., "CSS Expedition Map").
- **Where used:** Inside the sidebar, above the sector/day link list, nested subsections.

## `h5` — Deck Sub-label

- **HTML role:** Heading level 5 — a finer sub-heading within a section.
- **In the ship:** A minor deck label — used for deeply nested sections where the hierarchy needs five levels.
- **Where used:** Index page layered information panels.

## `head` — The Bridge / Metadata Hub

- **HTML role:** Container for document metadata — not rendered directly.
- **In the ship:** The bridge's central computer — holds all configuration data (character encoding, viewport, stylesheet links, title) that the vessel needs before it can render the visible deck.
- **Where used:** Every page. Exactly one before `<body>`.

## `header` — Title Card / Banner

- **HTML role:** Represents introductory content or a group of navigational aids.
- **In the ship:** The expedition title card at the top of the content zone. Sets the thematic tone for the journey ahead.
- **Where used:** Inside the log-content zone, index page hero section, page banners.

## `hr` — Thematic Break / Horizon Line

- **HTML role:** Represents a thematic break between content sections.
- **In the ship:** A visual horizon line — marks a transition between major sections of the journey.
- **Where used:** Index page section dividers.

## `html` — The Root Chassis

- **HTML role:** The root element of the document.
- **In the ship:** The outer hull of the vessel. It declares the language (`lang="en"` / `lang="ro"`) so that accessibility tools and search engines can identify the ship's native tongue.
- **Where used:** Every page. Exactly one per document.

## `li` — List Item / Waypoint

- **HTML role:** A single item in an ordered or unordered list.
- **In the ship:** A single waypoint on the expedition map or a command in the helm's menu.
- **Where used:** Sidebar link list, navbar navigation list, footer link list.

## `link` — Resource Tether

- **HTML role:** Links the document to an external resource (stylesheet, favicon, manifest).
- **In the ship:** A data tether connecting the vessel to external systems — the stylesheet (style.css), the ship's emblem (favicon), and the navigation manifest.
- **Where used:** Inside `<head>`.

## `main` — Main Deck

- **HTML role:** The dominant content area of the document. There should be only one per page.
- **In the ship:** The main deck of the vessel — the primary workplace where the log entries and the sidebar are displayed.
- **Where used:** Wraps the primary content zone. One per page.

## `meta` — Configuration Signal

- **HTML role:** Provides metadata about the document (charset, viewport, description, theme-color).
- **In the ship:** A configuration signal broadcast to the browser before the page loads. Each `<meta>` sets a parameter: character encoding, viewport scale, colour theme.
- **Where used:** Inside `<head>`.

## `nav` — Helm / Navigation Console

- **HTML role:** Represents a section of navigation links.
- **In the ship:** The helm station — the primary navigation console at the top of the deck. Contains the vessel logo and the main command links.
- **Where used:** The top navbar and the sidebar navigation.

## `p` — Paragraph / Narrative Log

- **HTML role:** A paragraph of text.
- **In the ship:** A page of the captain's narrative log — the story of what was learned on each day of the journey.
- **Where used:** Day entry narratives, mission-status readouts, telemetry lines, copyright notice, index descriptions.

## `pre` — Pre-formatted Transmission

- **HTML role:** Represents preformatted text — preserves whitespace and line breaks.
- **In the ship:** A raw teleprinter output or unfiltered signal burst — displays code blocks, ASCII diagrams, or terminal output as-is.
- **Where used:** Recursive blueprint page for code blocks.

## `script` — Control System Loader

- **HTML role:** Embeds or references executable JavaScript.
- **In the ship:** The loader that activates the vessel's control systems — typing animation, persistent note storage, search filter, HUD console toggle. Placed just before `</body>` so the deck renders first, then the systems come online.
- **Where used:** At the end of every page, just before `</body>`.

## `section` — Content Zone / Deck Sector

- **HTML role:** A generic section of content, typically with a heading.
- **In the ship:** A major deck sector. The log-content `<section>` is the primary workspace — all day entries, sector announcements, and headers live inside it.
- **Where used:** The log-content wrapper, index page sections, bibliography sections.

## `span` — Inline Marker / Signal Light

- **HTML role:** An inline container with no semantic meaning — used for styling or scripting hooks.
- **In the ship:** A signal light or status indicator — wraps small pieces of text that need special visual treatment (telemetry values, meta-title subtitles, active status).
- **Where used:** Day numbers in article headers, meta-title subtitles, telemetry status values, sidebar decorators.

## `strong` — Emphasis / Urgent Signal

- **HTML role:** Indicates strong importance, seriousness, or urgency.
- **In the ship:** A priority alert — marks critical instructions, warnings, or high-importance data that the crew must not ignore.
- **Where used:** Blueprint page important notices, emphasised keywords.

## `table` — Data Console / Sensor Readout

- **HTML role:** Represents tabular data — rows and columns of structured information.
- **In the ship:** A data console displaying sensor readouts, resource allocation charts, or signal logs in grid format.
- **Where used:** Bibliography page table sections.

## `tbody` — Data Console Body

- **HTML role:** Groups the body rows of a table.
- **In the ship:** The main data stream of a console display — all active readings below the header row.
- **Where used:** Bibliography page tables.

## `td` — Data Cell

- **HTML role:** A single data cell in a table row.
- **In the ship:** A single reading or value on the data console — one piece of information in a structured grid.
- **Where used:** Bibliography page table cells.

## `textarea` — Captain's Annotation Pad

- **HTML role:** A multi-line text input field.
- **In the ship:** The captain's personal annotation pad — a persistent terminal where notes and observations are written and stored locally in the ship's memory (localStorage).
- **Where used:** Inside the note-terminal of every day entry.

## `th` — Data Console Header

- **HTML role:** A header cell in a table — defines a column or row label.
- **In the ship:** The column label on a data console — tells the crew what kind of data each column contains.
- **Where used:** Bibliography page table headers.

## `thead` — Data Console Header Group

- **HTML role:** Groups the header rows of a table.
- **In the ship:** The fixed header section of a data console — remains constant while the data rows scroll beneath it.
- **Where used:** Bibliography page tables.

## `title` — Vessel Designation

- **HTML role:** Defines the document title shown in the browser tab.
- **In the ship:** The vessel's call sign displayed on the bridge's main screen (e.g., "D::0dy55ey | CSS Log").
- **Where used:** Inside `<head>` on every page.

## `tr` — Data Row

- **HTML role:** A single row of cells in a table.
- **In the ship:** A horizontal strip of readings on the data console — one complete record across all columns.
- **Where used:** Bibliography page table rows.

## `ul` — Unordered List / Waypoint Cluster

- **HTML role:** An unordered list of items.
- **In the ship:** A cluster of waypoints on the expedition map. Each `<li>` is a sector or day entry the traveller can jump to.
- **Where used:** Sidebar link list, navbar command list, footer link column, index feature lists.

---

*Generated from the `@structure:`, `@block:`, `@concept:`, and `@theme:` annotations embedded across the project's HTML pages.*
