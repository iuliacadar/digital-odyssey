# DAY 00 — Inspiration Baseline

I opened Manual_project again tonight. Not to copy from it — I know every line — but to remember how it felt to sit inside it for the first time. The CRT scanlines were the first thing I built: a `body::before` with a dual raster that flickered across an otherwise empty terminal. I stared at it for twenty minutes, watching the phosphor glow fade in and out, thinking: *this is what I want the reader to feel — not that they are reading code, but that they have entered a vessel.*

This section is the departure log of `D::0dy55ey`. Not a technical specification — a record of what I carried from the wreck of Manual_project, what I rebuilt, and what I left behind in the dark.

## What I carried

I carried the atmospheric core: the hard-won knowledge that an interface can feel like a place. Manual_project had taught me that a colour palette is not decoration but gravity. `space-dark` pulls you down into the void; `amber-glow` warns that something important is near; `solar-mint` is the colour of oxygen on a damaged ship. I kept all of it, but I needed a tighter architecture to hold the weight.

The new project expands the old volumes — `Frontend Landscape`, `Database Void` — and adds new compartments: `JSON Data Bridge`, `Backend Core`, `UX Lab`, `Deployment`. But the real change is not the number of rooms. It is that the ship now has a coherent navigation system. The reader moves through learning paths, not just pages.

What the source gave me:

- A stylistic and narrative starting point — the retro-futurist cockpit, glass and steel of a working vessel.
- A technical foundation — CSS grids that bleed, JavaScript mechanisms that watch the scroll like radar.
- A didactic conviction — that knowledge is transmitted best when the code explains itself from inside.

What `D::0dy55ey` builds on top:

- An architecture that does not collapse under its own weight.
- A bilingual structure that is not translation but parallel existence — each language breathes differently.
- A stricter covenant between atmosphere, content, and structure: nothing is decorative.
- A form clean enough to publish, layered enough to teach from.
- Thematic volumes that do not just contain information — they guide a journey.

## The technical lineage — where the heartbeat lives

The most visible inheritance from Manual_project is the **3D polyhedral reactor mesh**: an icosahedron of twenty triangular faces, each one a CSS `clip-path` miracle positioned on spherical 3D coordinates. I built it late at night, coffee going cold, rotating the faces in my head before I rotated them in the browser. When it finally rendered — twenty triangles floating in void-black like a Dyson swarm — I sat back and felt, for a moment, that I had built something that did not belong entirely to this world.

Then the GPU crisis hit.

Twenty overlapping vector triangles combined with heavy `filter: drop-shadow()` properties created a repaint flood that froze browser instances and triggered CPU thermal throttling. The fans on my laptop sounded like a ship breaking apart. I watched the frame counter drop from 60 to 12 to 4, and I thought: *this is where the project dies. The icosahedron is too beautiful to live.*

I did not delete it. I sat with the problem for three days — three days of `will-change: transform, opacity`, of replacing heavy blur filters with strict `inset` and `box-shadow` metrics, of forcing the browser to isolate the mesh onto dedicated GPU compositing layers. On the third night, the frame counter locked at 60 FPS and stayed there. The icosahedron lived. The fans quieted. I closed the laptop at 3 AM and sat in the dark, listening to the silence where the thermal throttling had been.

That moment — the stabilisation of the icosahedron — is the secret origin of `D::0dy55ey`. Every technical decision since has been shaped by the knowledge that beauty is fragile, that performance is not optional, and that a machine pushed to its limit will tell you exactly where it hurts if you listen.

Other inheritances from before the crisis:

- The **Dual-Isolate-Scroll** layout: a CSS Grid where sidebar and content breathe on separate scroll flows, like two crew members in different compartments of the same ship. On mobile, a tactile horizontal console replaces the desktop split.
- The **Intersection Observer API** configured with root margins of `-20% 0px -70% 0px` — precise as a sniper cut, detecting article visibility to synchronise the sidebar's active state. I calibrated those margins by hand, scrolling up and down for an hour until the tracking felt *predictable*.
- Six coordinated JavaScript mechanisms that govern the cockpit: the navbar knows when to hide, the typewriter knows when to retrigger, the radar knows where you are looking.

The bilingual strategy was already there in Manual_project: `style-en.css` and `style-ro.css` as separate lives under the same skin. The recursive page — `recursive-blueprint.html` — was the most personal: a split-screen terminal that fetches and displays the project's own source code. A project that reads itself. I built it because I wanted the codebase to be its own teacher — to close the loop between writing and understanding.

The name `D::0dy55ey` came later, but it was waiting. It points toward cosmic navigation, cockpit systems, telemetry, digital exploration. It is not a title; it is a coordinate. The visual atmosphere — CRT phosphor, translucent HUD layers, neon accents, void-black backgrounds — is not a style applied from outside. It is the interface's natural voice, learned from a year of watching the same screen through different eyes.

The project now has a strong internal documentation layer: implementation summaries, a technical glossary, bibliography, and journal entries that record decisions, bug fixes, optimisations, and future steps. All of this shows that `D::0dy55ey` is not only an interface, but a process archive and a pedagogical instrument.

Based on where the ship stands now, the next natural moves are:

- consolidating the final repository structure.
- clearly separating core pages, documentation, and journals.
- refining `index.html` as the main map.
- organising the manifesto and bilingual journals into a predictable scheme.
- carefully migrating atmosphere and style from the previous project into the new architecture.

## Manual_project — the five-phase arc

The parent project was not written in one breath. It grew through five distinct phases, each with its own emotional register:

**Phase 1: The Steel Hull (28–30 April 2026).** Three days of pure construction. HTML architecture with two volumes, strict heading hierarchy h1→h5, the first CSS palette that felt *right* (solar-mint, nebula-pink, amber-warning, space-dark). CRT scanlines. Glassmorphism. The first JavaScript mechanisms — crude by later standards, but they worked. I remember the moment the navbar first hid on scroll-down: it felt like the ship had woken up.

**Phase 2: Modular Expansion (5–20 May 2026).** The period of discipline. CSS refactored into eleven self-documenting modules, each with inline commentary turning the stylesheet into a live manual. The bilingual split: `style-en.css` and `style-ro.css`. The 3D dual spherical matrix — concentric dashed rings on crossed axes — spinning in the dark. I was learning CSS not as a language but as a material — like glass or steel.

**Phase 3: The Recursive Blueprint & GPU Crisis (20 May–11 June 2026).** The hardest phase. The icosahedron was born here, and almost died here. Twenty faces of pure CSS geometry built with spherical coordinates I calculated by hand on paper before writing a single line of code. Then the bottleneck. Then the solution. This phase taught me something no tutorial ever could: the browser is not a blank canvas but a physics engine, and every pixel has a cost.

**Phase 4: The 6-Mechanism Engine (26–29 May 2026, parallel to Phase 3).** While the icosahedron fought for its life, the JavaScript layer quietly became a machine of its own: Cockpit Visibility Shield, Log Accessibility Coupling, Terminal Re-Trigger Engine, Desktop Radar Tracking, Anti-Displacement Desktop Engine, Auto-Scroll HUD Mobile. Six mechanisms. One cockpit. I documented each one in `script.js` with a dedication that surprised even me.

**Phase 5: Stabilisation & Bilingual Turn (June 2026).** The ship stopped shaking. The architecture formalised. A 45-day HTML curriculum mapped. `bibliography.html` with data grids. W3C validation, trailing slash cleanup, dead code removal. The project became *stable* — not finished, but ready to carry weight. It became the foundation for `D::0dy55ey` without ever knowing it would.

## Cultural references — the voices I hear when I work

Every interface is a conversation with the dead. These are the voices that surround me in the cockpit:

### Literature

**Stanisław Lem — *Solaris* (1961)**
I return to this novel the way others return to harbour. It taught me that the unknown is not a puzzle to solve but a presence to sit with. The interface mirrors this: it never fully reveals itself; there is always another layer behind the glassmorphism, another depth beyond the CRT mask. The ocean of Solaris is the void that surrounds every panel on this ship.
*Source:* Lem, Stanisław. *Solaris*. Warsaw: Wydawnictwo MON, 1961. English translation: Walker, 1970.

**Joseph Conrad — *Heart of Darkness* (1899)**
The journey upriver into an unknown, morally ambiguous space is the narrative skeleton of every scroll action on this interface. The user is Marlow. The codebase is the river. The core of understanding recedes as you approach it, because understanding is not a destination but a direction.
*Source:* Conrad, Joseph. *Heart of Darkness*. Serialised in *Blackwood's Magazine*, 1899. First book edition: *Youth: A Narrative; and Two Other Stories*. London: Blackwood, 1902.

**Joseph Conrad — *Nostromo* (1904)**
From this novel I took the atmosphere of the working vessel — the steel hull, the crew quarters, the sense that a ship is not a home but a responsibility. The Nostromo in *Alien* carries the same weight: a cargo ship with rivets and steam and grimy corridors. This is the aesthetic of the cockpit.
*Source:* Conrad, Joseph. *Nostromo: A Tale of the Seaboard*. London: Harper & Bros, 1904.

**Herman Melville — *Moby-Dick* (1851)**
The obsessive quest for an entity that is always just beyond the horizon. Each journal entry is a whaling log — a record of pursuit, failure, and rare, luminous insight. The cosmic divider lines in the interface are the ocean horizon between one chase and the next.
*Source:* Melville, Herman. *Moby-Dick; or, The Whale*. New York: Harper & Brothers, 1851.

**Edgar Allan Poe — tales and poems (1830s–1840s)**
Poe taught me that atmosphere is not decoration but meaning. The dread of being buried alive, the claustrophobia of the mind turned inward — these translate into the tight scroll containers, the pulse of the neon cursor, the feeling that the interface is a confined space from which data emerges like a heartbeat from a crypt.
*Source:* Poe, Edgar Allan. *The Complete Tales and Poems*. New York: Modern Library, 1938 (compilation).

**H. P. Lovecraft — weird tales (1917–1937)**
His cosmic horror — the slow dawning that humanity is not central to the universe — shaped the project's refusal of cheerful, flat design. The vastness of the void, the non-human geometries of the icosahedron, the indifference of the amber alert lights: all borrow from his aesthetic of scale and silence.
*Source:* Lovecraft, H. P. *The Weird Tales*. Providence, RI: Wandering Star Press, 1997 (definitive variorum).

**William Hope Hodgson — *The House on the Borderland* (1908) and *The Night Land* (1912)**
This is the deepest wound. Hodgson's vision of ancient, cyclopean structures adrift in a cosmos that is neither hostile nor friendly but simply *vast* and *old* — this is the single strongest literary influence on the project's architectural imagination. The recursive-blueprint page, the armillary reactor, the sense that the codebase is a ruin you explore: all of it comes from Hodgson. I read *The Night Land* in a single sitting during a night of insomnia, and when I finished it, I opened my editor and began building a page that could hold that feeling.
*Source:* Hodgson, William Hope. *The House on the Borderland*. London: Chapman and Hall, 1908. *The Night Land*. London: Eveleigh Nash, 1912.

### Cinema

**Andrei Tarkovsky — *Solaris* (1972)**
The primary cinematic reference, but more than that: a teacher. Tarkovsky's long, meditative shots, his use of water and vegetation as organic counterpoints to cold technology, his refusal to explain the alien — all of it taught me that an interface can be *slow*, that it can hold silence, and that the most powerful design leaves questions open. The colour palette — desaturated greens, deep blacks, sepia whites — is a direct translation of his film stock.
*Source:* *Solaris*. Directed by Andrei Tarkovsky. Mosfilm, 1972. Based on the novel by Stanisław Lem.

**Ridley Scott — *Alien* (1979)**
The Nostromo is not a starship; it is a working vessel with rivets, steam, and grimy corridors. That aesthetic of *functional industrial hardware* — CRT terminals, toggle-switch buttons, amber alert lights — is the visual language of the cockpit. The alien itself is never fully seen, just as the codebase never fully reveals itself; it operates at the edge of vision, behind glass and scanlines.
*Source:* *Alien*. Directed by Ridley Scott. 20th Century Fox, 1979.

***Alien* as a Conradian adaptation**
The ship's name *Nostromo* is taken directly from Conrad's novel, and the film's structure — a crew travelling into an unknown void, confronting a force that reflects their own greed and fear — is an unacknowledged echo of *Heart of Darkness*. This layered reference taught me that a single artefact — a spaceship, a colour, a font — can carry the weight of multiple cultural traditions at once.
*Source:* The naming lineage is confirmed by Ted Billy, "A Curious Case of Influence: Nostromo and Alien(s)", *Conradiana*, Vol. 21, No. 2, 1989, pp. 147–157. The Wikipedia entry for *Nostromo* (Conrad's novel) documents the spaceship naming and the *Sulaco* reference in *Aliens* (1986), establishing the direct Conrad-to-Alien lineage.

### Music

**Oxiplegatz (1993–?)**
I discovered this Swedish avant-garde metal project during the icosahedron crisis. Its blend of symphonic black metal and science-fiction lyrics — space exploration, alien contact, cosmic isolation — became the soundtrack to the hardest engineering work of the project. The album *Sidereal Journey*, with its artwork of celestial mechanics fused with metallic textures, directly informed the visual direction: the cold beauty of deep space rendered through the grit of heavy machinery.
*Source:* Oxiplegatz. *Fairytales* (1994), *Worlds and Worlds* (1996), *Sidereal Journey* (1998). Encyclopaedia Metallum (Metal Archives): https://www.metal-archives.com/bands/Oxiplegatz/7750 . Genre: Symphonic/Avant-garde Black Metal. Themes: Science fiction, Outer space, Fantasy.

**Cryo Chamber (YouTube / Bandcamp, founded 2011)**
This is the ambient architecture of the project's silence. Simon Heath's dark ambient label — *Hastur*, *Exo* by Tineidae — provided the slow, vast drones I listened to while rebuilding the layout at 1 AM. The feeling of floating through a dark, ancient space — neither hostile nor welcoming — migrated directly into the design. I cannot separate the visual rhythm of this interface from the audio rhythm of those records.
*Source:* Cryo Chamber. YouTube channel (https://www.youtube.com/@cryochamberlabel) with 426K subscribers. Bandcamp page (https://cryochamber.bandcamp.com). As described by Heath in an interview with Bandcamp Daily: "I was more interested in environmental spaces, far-reaching narratives and sonic journeys to other worlds" (https://daily.bandcamp.com/label-profile/cryo-chamber-dark-ambient-guide, 2020).

### Design & Visual Arts

**Renaissance armillary spheres (15th–17th centuries)**
The armillary sphere — a mechanical model of the celestial sphere made of nested metal rings — is the direct structural prototype for the icosahedral reactor header (class `.armillary-reactor-core` in the source code). Like a Renaissance astronomer, the user stands at the centre of a mechanical universe whose rings chart the motion of invisible bodies. I named the class before I built it, and the name forced me to build something worthy of it.
*Source:* General historical reference. The armillary sphere is documented in scientific instrument collections such as the Museo Galileo in Florence and the Oxford Museum of the History of Science. For the specific application to web design and the naming of the `.armillary-reactor-core` class, see the Manual_project source code (JURNAL.md, lines 3095–3123 and the `style.css` module for `.armillary-reactor-core`).

**CRT monitors / 1970s hardware terminals**
The scanlines (`body::before` with dual-raster background), the phosphor green glow of code blocks, the cathode-ray flicker animation (`crt-flicker`), the bombé CRT screen effect (`inset box-shadow` on terminal containers) — all recreate the experience of sitting in front of an industrial military monitor from the 1970s. This is not nostalgia. The CRT imposes a *material limit* on the digital: the interface admits that it is made of glass, phosphor, and electron beams. It refuses the clean immateriality of flat design.
*Source:* Original implementation documented in Manual_project's `style.css` (MODULE 02: GLOBAL RESET & GRAVITY FIELDS, `body::before` selector) and `JURNAL.md` lines 822–826, 5481. The effect references authentic 1970s terminals such as the VT100 and IBM 3270.

**Space Age / Retro-futurism (1950s–1970s)**
The geometric typeface (Space Grotesk), the capsule-shaped buttons, the stencilled technical labels, the amber and mint-green status indicators — all belong to the visual language of the Space Age, when the future was imagined as a clean, rational, geometric machine. The project rejects postmodern irony in favour of this *earnest* futurism.
*Source:* Space Grotesk font by Florian Karsten (Google Fonts). The visual language references the NASA Graphics Standards Manual (1976, by Richard Danne and Bruce Blackburn) and the broader Mid-Century Modern / Googie architecture tradition.

**Cyberpunk (1980s–present)**
The neon-pink and magenta accents, the dark backgrounds with glowing highlights, the sense of the interface as a console hacked into a larger system — all cyberpunk gestures, but used without the dystopian narrative. Here, the neon cockpit is a space of learning and exploration, not corporate surveillance.
*Source:* Gibson, William. *Neuromancer*. New York: Ace, 1984. Scott, Ridley. *Blade Runner*. Warner Bros, 1982. Otomo, Katsuhiro. *Akira*. Kodansha, 1982–1990 (manga); Tokyo Movie Shinsha, 1988 (film). Manual_project CSS modules 7 and 8.

**Glassmorphism (2020s UI trend)**
The translucent frosted-glass panels (`backdrop-filter: blur` on navigation bars, category cards, and footer) simulate physical cockpit materials — acrylic, smoked glass, polycarbonate. A layered depth that mirrors the conceptual layering of the project itself: interface, code, commentary.
*Source:* Original implementation in Manual_project's `style.css` (MODULE 05: INTERFACE NAVIGATION & TERMINAL CONTROLS). The broader UI trend documented on Dribbble and UX Collective (circa 2020–2021).

**HUD (Heads-Up Display) — adapted from aviation**
The sticky navigation bar, the persistent sidebar with active-state tracking, the telemetry-style status messages ("SYS_STATUS: READY_TO_WRITE //") — all simulate the experience of piloting a vessel. I adapted this from aviation heads-up displays, where critical flight data is projected onto the pilot's forward view so they never look away from the world outside.
*Source:* Original concept documented in `JURNAL.md` line 35: "Concept de design preluat din aviație, implementat în Digital Odyssey prin elemente de interfață «lipicioase» (position: sticky)."

### Philosophy & Pedagogy

**Edutainment (recursive self-documentation)**
The idea that the codebase should be its own manual — every CSS module, every JavaScript mechanism, every HTML structure explaining itself from within — is the pedagogical core of the project. The `recursive-blueprint.html` page is the purest expression: it fetches and displays the project's own source code, turning the browser into a self-referential teaching machine. The student reads the code that *is currently rendering the page they are using*.
*Source:* The concept of "recursive edutainment" is original to this project and is fully articulated in `JURNAL.md` lines 722–725 and in the `recursive-blueprint.html` meta-description. The term "Edutainment" itself dates to the 1970s educational software movement (e.g., The Oregon Trail, 1971).

**Philosophy of narrative space (academic background)**
My master's degree in American literature — with a focus on weird tales and the philosophy of narrative space — is not separate from this project; it is embedded in its architecture. The interface is a *navigable narrative space*: each scroll reveals a new chapter, each hover activates a new layer of meaning, each click teleports the user to a different sector of the story. This conviction — that technology and the humanities belong in the same conversation — is the deepest structural influence on the entire project.
*Source:* Academic formation, University of Bucharest, Faculty of Foreign Languages and Literatures, MA in American Literature (thesis on weird tales and narrative space). This background is cited in DAY 01 of both journals.

---

# DAY 01 — Prolegomena

I sat down to write the first real log of `D::0dy55ey` with the hatch sealed behind me. The project was no longer a sketch — it was a vessel taking shape in the dry dock of my mind, and I needed to declare what kind of vessel it would be before the keel was fully laid. This entry is that declaration: not a note, but a covenant.

The ship rests on three pillars, and I built each one from the materials I carried with me.

The **technical pillar** is the steel frame — computer science, logic, mathematics, web architecture, the discipline of writing code that compiles without complaint and follows standards I did not invent but chose to respect. It is the craft of making a system that works.

The **didactic pillar** is the wiring harness — pedagogy, learning theory, the transfer of knowledge from one mind to another through the medium of the source file itself. I wanted anyone who opens these files to find not just executable instructions, but a teacher embedded in the comments.

The **narrative pillar** is the atmosphere in the cabin — humanistic culture, literary imagination, the attention to form and meaning that turns a technical interface into a place where a story breathes.

These three pillars are not separate in my mind. My training in philosophy and my master's degree in American literature — the thesis on weird tales and the philosophy of narrative space — are not decorations on the résumé of this project. They are its load-bearing walls. The idea that a codebase can be read as a text, that an interface can function as a narrative territory, that learning to program is a form of cosmic navigation: all of it comes from that formation. The command deck language, the telemetry on every footer, the recursive self-documentation — none of it is ornamental. It is the practical expression of a conviction I have held since graduate school: that technology and the humanities belong in the same conversation, and that conversation can happen inside a browser.

In the architecture, `index.html` is the command deck. From it, I coordinate the satellite pages — the logs, the recursive blueprint, the bibliography, the manifesto — each one a module with its own function, none of them breaking the clarity of the whole. The manifesto lives in its own file, not inside the README. The bilingual journal is not a commit log in prose; it is a living archive, the ship's own memory written down at night.

The narrative identity of `D::0dy55ey` runs on the fuel of cosmic navigation — the command room, telemetry streams, self-documentation as a form of cartography. I carried the cinematic atmosphere and cultural weight of `Manual_project` into this new hull, but I rebuilt it cleaner, more coherent, scalable. At the centre of that identity is the belief that an interface can be both a learning instrument and a space of cultural resonance, and that these two functions do not compete.

I initialized the repository by splitting Romanian and English into two parallel corridors: `ro/` and `en/`. This was not convenience. It was structural discipline. Each language has its own pages, its own style, its own favicon — so the experience stays coherent within each version. I chose a clean, predictable split over a universal compromise.

At the root I placed the orientation documents — `README.md`, `README-RO.md`, `README-EN.md`, `JURNAL-RO.md`, `JURNAL-EN.md`. These are the first coordinates a visitor reads: a map, a method, a history of the voyage so far. Beside them I opened a `docs/` folder for the reference material — the comment-tag legend, the technical glossaries — so the code stays clean and the documentation stays consultable without cluttering the source.

Inside each language folder, one `index.html`, one `style.css`, one `script.js`, one `favicon.svg`. The code lives close to the page it serves. Local differences do not pollute a shared file; shared resources stay separate from local ones. The structure breathes.

I committed in small, clear strokes — repository initialization, bilingual documentation, journal architecture, stabilization of the first form. The Git history should read like a logbook, not a cargo manifest.

The name `D::0dy55ey` came to me as a signature, not a title. The `D::` is the C++ scope resolution operator, a namespace marker for a programmer's eye. The `0dy55ey` uses leetspeak — zero for O, five for S — so the word *Odyssey* becomes a glyph, compact and technical, a call sign that fits in a favicon or a header bar. It is a brand mark, a logo, a visual tag, all at once.

It also separates the conceptual name from the project's visual identity — the repository remains `digital-odyssey` on GitHub, a descriptive transport layer. But `D::0dy55ey` is what the ship calls itself in the dark. I know I must check the name carefully before wider use — collisions, confusion, readability. For now, it is an artistic and technical choice, one I hold lightly but wear with intention.

This day lays the frame: identity, direction, structure, bilingual method. It does not only describe where the work begins — it defines how that beginning should be read later, by me or by anyone who finds this archive in the drift.

Based on this day, the next natural steps are:

- stabilizing the repository structure.
- organizing documentation in the root and in `docs/`.
- continuing the bilingual model with editorial consistency.
- keeping the visual identity aligned with the technical structure.

---

# DAY 02 — First Implementations

I moved from the drawing board to the hull today. The prolegomena had laid out what the ship should be; now I began bolting the plates in place, running the first wires, testing where the weight would settle.

The most important clarification was the autonomy hierarchy of the pages. `index.html` is the command centre of the mother ship — the bridge from which the entire fleet is piloted. From there I coordinate the log pages, the bibliography, the manifesto, the documentation, all the appendices. They are independent modules in function, but they remain tethered to the central control because they share the same editorial and technical architecture. They are ships in a fleet, not derelicts adrift.

`recursive-blueprint.html` has a different status. I designed it as a smaller, self-piloted vessel — an explorer that ranges further than the other modules. It is not merely an appendix; it is a system that can orient itself, display its own data, and function as a project within the project. That is why it carries its own `h1`, just as it did in `Manual_project` — so that anyone who lands on it knows they have entered an autonomous instance, not a subordinate page.

I continued refining the semantic hierarchy. The project holds a strict structure: one `h1` in the main context, `h2` for volumes, `h3` for chapters and sectors, deeper levels for annexes and submodules. React and Angular are not treated as separate disciplines — they are extensions of the JavaScript chapter. This preserves didactic coherence. Knowledge should be transmitted in an ordered way, not scattered across parallel tracks.

On the visual side, I locked the retro-futurist identity. The colour language, the CRT scanlines, the glassmorphism effects, the inner shadows — these are not a style applied from outside. They emerge from an atmosphere shaped by the philosophy of exploration, astronomy, astrophysics, literature, art, photography, music, design, and cinema. `Solaris` remains a reference point, but it is one among many. The cockpit's contemplative and technical tone draws from a wider constellation.

The navigation and interactivity mechanisms began to take shape. The command deck model — sticky menu, smooth scrolling, active-section tracking, sidebar synchronisation — creates an interface that does not let the crew get lost. It guides them through the content in a controlled way, serving both the technical and the didactic functions of the vessel.

The JavaScript layer runs on six coordinated mechanisms, inherited from `Manual_project` and refined:

1. **The Cockpit Visibility Shield** — watches the scroll direction. When the crew scrolls down, the navbar vanishes into immersion mode. A short upward scroll brings it back.
2. **Log Accessibility Coupling** — manages click states on navigation links, ensuring the `.active` class switches cleanly between modules.
3. **Terminal Re-Trigger Engine** — an Intersection Observer fixed on the mission status box. When an article enters visibility past 30%, it resets and replays the typewriter animation from the beginning.
4. **Desktop Radar Tracking** — the primary Intersection Observer for the sidebar. As the crew scrolls through the journal, it detects which article is on screen and moves the `.active` class to the corresponding sidebar button automatically.
5. **Anti-Displacement Desktop Engine** — intercepts anchor clicks on desktop, prevents the native browser jump that would yank the sidebar out of position, and executes a controlled `scrollTo` strictly inside the text container with a 100px air cushion under the HUD.
6. **Mobile HUD Auto-Scroll** — on mobile, detects the moment a day becomes active and scrolls the HUD band horizontally, bringing the current capsule to the centre of the screen.

I also locked the project into a documentation-driven register. The journals, the bibliography, and `recursive-blueprint.html` are not decorative additions. They are the instruments through which the project becomes explainable from the inside. In the case of the recursive page, the instrument becomes part of what is explained — the page refers to itself, inspects its own components, and closes the loop between builder and built.

The direction is now clear: `index.html` commands the mother ship, the satellite modules fulfil their roles, and `recursive-blueprint.html` drifts further as an autonomous explorer. The next natural steps are final structural refinement, journal stabilisation, completion of the technical implementation, and a balanced relationship between atmosphere, rigour, and readability.

Based on this day, the next natural steps are:

- consolidating the final structure of the pages.
- keeping the separation clear between modules and the command center.
- preserving the special autonomy of the recursive page.
- continuing to align semantics, design, and interactivity.

---

# DAY 03 — GitHub Pathway for Publishing the Project

Today I charted the route from the local dock to the public registry — the exact sequence of commands that moves the project from my machine to the remote archive where the world can find it. This is not a mechanical checklist. It is a launch procedure, and I write it down so that every time I repeat it, I do so with the same discipline as the first.

## 1. Prepare the local repository

I check the project structure, making sure the files are seated correctly in their designated compartments: `ro/`, `en/`, `docs/`, and the root files — `README.md`, the bilingual journals — all in their proper places. The ship must be orderly before it leaves the yard.

## 2. Initialize Git if needed

If the repository has not been born yet, I speak the first command:

```bash
git init
```

This creates the local Git history — the ship's logbook, empty but ready.

## 3. Check the current status

```bash
git status
```

I read the status output like a pre-flight checklist, confirming which files are new, which are modified, which are staged.

## 4. Add the desired files to staging

```bash
git add .
```

Sometimes I select files manually; for a stage commit I add everything relevant. This is the moment when the cargo is loaded onto the transport.

## 5. Create the commit

```bash
git commit -m "docs: add initial bilingual project structure"
```

The message must be short and clear. It is the label on the crate, visible forever in the log.

## 6. Connect the local repo to GitHub

```bash
git remote add origin <REPOSITORY_URL>
```

If the remote already exists, I check the current configuration. The tether between local and remote must be secure.

## 7. Push the project to GitHub

```bash
git push -u origin main
```

If the main branch bears another name, I replace `main` with the correct one. This is the moment the ship appears on the public scope.

## 8. Verify the result

After the push, I open GitHub to confirm the structure, the commit, the files — all displayed correctly. The registry confirms the arrival.

## 9. Continue incrementally

As I work, I repeat the cycle:
`change → status → add → commit → push`.

This rhythm keeps the history clean and easy to follow. A logbook, not a spill.

---

# DAY 04 — Commit Tags and Rewriting Messages

A ship's log is only as trustworthy as the entries in it. Today I established the conventions for writing commit messages — and, when necessary, the procedure for rewriting them after the fact. The goal is a history that is coherent, readable, and useful to anyone who traces the project's evolution through the Git archive.

## Recommended tags

These are the labels I affix to each entry in the logbook, so that a glance at the history tells you what kind of work was done:

- `feat`: a new feature.
- `fix`: a bug fix.
- `docs`: documentation-only changes.
- `style`: formatting or style changes with no logic impact.
- `refactor`: internal restructuring without new behavior.
- `perf`: performance improvements.
- `test`: adding or changing tests.
- `build`: build system, dependencies, or compilation config changes.
- `ci`: continuous integration or pipeline changes.
- `chore`: general maintenance with no direct product impact.
- `revert`: reverting a previous commit.
- `improve`: a general improvement when no other tag fits well.
- `wip`: work in progress, used temporarily.
- `snapshot`: a checkpoint or safety backup, used before a major refactor or sweep.
- `i18n`: internationalisation or localisation work (translating pages, cloning RO/EN versions).
- `content`: adding or rewriting prose content (manifesto text, pedagogical annotations, creative copy).

## Style notes

`chore`, `docs`, and `style` are the most frequent tags in a journal or portfolio repository. For a project like this, consistency matters more than novelty. A uniform message pattern makes it easy to separate content changes from structural ones when reading the history weeks or months later.

## Rewriting existing messages

On the fourth day, I worked on clarifying how I name commits — and on the steps required to amend a message when the original wording was not precise enough. A commit message should be short, technical, and consistent with the type of change, especially for project documents and bilingual documentation files.

For the immediately preceding commit, the procedure is surgical. I change the message locally with `git commit --amend`, save the new message in the editor Git opens. If the commit has already been pushed to the remote, I update the history on GitHub with a forced push — but I use `git push --force-with-lease`, which adds a safety check before overwriting.

This operation must be used carefully on public branches. Alone on my own branch, it is safe and efficient. On a shared branch, rewriting history requires much more caution. In my project, it is most useful when I finish important documents and want the commit history to remain clean, precise, and easy to follow.

To rewrite messages without changing file contents across multiple commits, I use `git rebase -i --root` with the `reword` action.

## Steps taken

1. I checked repository status with `git status`.
2. I confirmed the working tree was clean.
3. I started an interactive rebase from the first commit with `git rebase -i --root`.
4. I changed `pick` to `reword` for the selected commits.
5. I saved the rebase file and continued the process.
6. I entered the new messages one by one at the prompts opened by Git.
7. I finished the rebase.
8. I verified the result with `git status` and `git log --oneline --decorate --graph --all`.
9. I published the new history to GitHub with `git push --force-with-lease`.

## Final messages used

- `chore: initialize project repository`
- `docs: add bilingual project README`
- `docs: add Romanian README`
- `docs: refine README documentation structure`
- `docs: add bilingual journal structure and project prolegomena`
- `docs: update journal before commit rewrite`

## Technical notes

In the rebase todo list, only `pick` is changed to `reword`. The new messages are not written in the initial list; they are entered at Git's separate prompts. `--force-with-lease` is preferred over `--force` because it verifies that the remote branch has not changed since the last fetch — an extra layer of caution before rewriting shared history.

This day establishes discipline in Git history. Messages should be clear, and rewriting them should follow the same rigour as the rest of the project. The logbook must be honest, even when it is corrected.

---

# DAY 05 — Comments, Documentation, and `<head>`

Several architectural decisions converged today, all circling the same conviction: the project must be easy to read, easy to maintain, and explainable from within. Every bolt must be labelled. Every panel must open to reveal its wiring.

## Stylistic and technical decisions

I established a comment legend with fixed tags — `@block`, `@path`, `@meta`, `@reason`, `@warning`, `@bridge`. Not decorative. A taxonomy of intent embedded directly in the source files, so that anyone reading the code can follow the reasoning without leaving the editor.

I decided to keep the README files and the bilingual journals in the project root — `README-RO.md`, `README-EN.md`, `JURNAL-RO.md`, `JURNAL-EN.md` — while the detailed documentation, like the comment legend itself, lives in `docs/`. The root is the entry point, the map you see when you first arrive. The reference material is close enough to be useful but separate enough not to clutter the navigation.

Each language has its own local HTML, CSS, JS, and favicon files. This is not only a technical split. It is editorial. Each version has its own atmosphere, its own text, its own rhythm. The core content is mirrored, so maintenance stays manageable, but the air in each cabin is its own.

I also clarified `theme-color`. It does not represent the content colour of the page. It is the browser interface colour — the tint of the chrome around the window, especially on mobile. Rather than tying it to language, I found it more useful to assign it by page family: main pages, journal pages, bibliography, support. Function over flag.

For `ro/index.html` and `en/index.html`, the meta description must be adapted to the page language, and the main title must match the linguistic and conceptual identity. In English, `Charting Digital Frontiers` — broader, more poetic — held its place as the best-suited title at this stage.

## The `<head>` container and its elements

I spent time today studying the `<head>` as a living system — the ship's avionics bay, where every page's identity is configured before it meets the browser.

### The role of `<head>`

The `<head>` element is the compartment where I store the metadata and resources that tell the browser, search engines, and other instruments how to interpret the page. The crew never sees it directly, but without it the page would arrive blind — no encoding, no styles, no identity. It is the black box, the configuration module, the silent partner of every rendered view.

### Important elements inside `<head>`

#### `<title>`

Sets the page title visible in the browser tab. This is the ship's name on the registry — the first thing a crew member sees when they open a new channel.

#### `<meta>`

A general-purpose information carrier. Here I define the character set, page description, viewport instructions for mobile screens, browser theme colour, and any other metadata the page needs to announce itself correctly.

#### `<link>`

The tether to external resources — stylesheets, favicons, fonts. Every file the page needs to render is connected here, like a umbilical to the ship's supply lines.

#### `<style>`

Allows CSS to be written directly inside the page. I use it for quick local adjustments, when a page needs a specific rule without the overhead of an external file.

#### `<script>`

Links to or contains JavaScript code. This is where the interactive logic lives — the mechanisms that wake up after the page loads and begin watching, listening, responding.

#### `<base>`

Sets the base URL for all relative links in the document. I rarely use it, but it is there when I need all paths to originate from a fixed coordinate.

#### `<meta charset="UTF-8">`

Defines the character encoding. UTF-8 is the standard — the universal translator that ensures every diacritic, every special symbol, every international character arrives intact.

#### `<meta name="viewport">`

Controls how the page adapts to different screen sizes. Essential for responsive design — without it, the ship's layout would collapse on smaller displays.

#### `<meta name="description">`

Provides a short description of the page. Search engines read it. It is the first summary a visitor sees before boarding.

#### `<meta name="theme-color">`

Suggests a colour for the browser interface, especially on mobile. It tints the chrome around the viewport — a small gesture, but one that tells the operating system what world this page belongs to.

### How I use `<head>` in the project

In `D::0dy55ey`, I treat `<head>` as a control and identity layer. Every page starts from the same base: language, title, description, local files, shared resources. For bilingual pages, I change only the title and meta description — the rest of the structure stays stable, a single template adapted to two voices.

---

# DAY 06 — Implementing Comments and Documentation Structure

Today I wired the project's documentation layer into its final form — a clear comment structure that unites code and explanation, and a separation between reference material and working files that keeps both clean. This is not a superficial addition. It is architectural: the ship must be maintainable, readable, and teachable from within its own panels.

## Comment legend

I formalised a legend of fixed tags — `@block`, `@path`, `@meta`, `@reason`, `@warning`, `@bridge` — each one a signal in the code's own spectrum. No more ad hoc notes scattered across files. From now on, every comment speaks the same vocabulary.

`@block` marks a logical zone — a compartment in the ship. `@path` points to a file route or reference — a coordinate on the map. `@meta` describes context — the atmospheric reading of a section. `@reason` explains motivation — why this panel exists. `@warning` signals a caution — a hot surface, a live wire. `@bridge` connects two parts of the system — a passage between decks. This vocabulary is not decorative. It turns every comment into a didactic instrument.

## Documentation organization

I kept `README-RO.md`, `README-EN.md`, `JURNAL-RO.md`, and `JURNAL-EN.md` in the project root — the first things a visitor sees, the map and the logbook at the entrance. The detailed documentation — the comment legend itself, the methodological material — lives in `docs/`. The root stays clean and navigation-oriented; `docs/` becomes the reference shelf, close enough to the code to be useful in practice, separate enough not to clutter the workflow.

## Language separation

Each language has its own local HTML, CSS, JS, and favicon files. This is not only a technical separation — it is editorial. Each version breathes with its own atmosphere, its own text, its own rhythm. The core content remains mirrored so that maintenance stays manageable, but the two versions are not translations of each other in the mechanical sense. They are two ships sailing parallel courses.

The same logic extends to meta descriptions and titles. Each page reflects its linguistic and conceptual identity. For the English version, `Charting Digital Frontiers` remains the most suitable title — broader, more poetic.

## How I use `<head>`

In `D::0dy55ey`, I treat `<head>` as a control and identity layer. Language, title, description, local files, shared resources — every page launches from the same predictable base. For bilingual pages, I change only the title and meta description; the rest of the structure stays stable, a single template speaking two dialects.


---

# DAY 07 — GitHub Workflow for Uploading Files

This day documents the workflow I use to upload files to GitHub, using the correct Git terminology. In practice, I do not say only that I uploaded the files, but more precisely that I **added them to the repository, committed them, and pushed them to GitHub**.

## Correct terms

- **Repository / repo** = the project space on GitHub. The dock where the ship is moored.
- **Stage / add** = preparing files for commit. Loading the cargo into the airlock.
- **Commit** = saving a local version with a message. Writing the log entry before transmission.
- **Push** = sending the commit from my computer to GitHub. The transmission itself.
- **Upload** = a general term; in the GitHub interface it appears as “Upload files” when I upload directly from the browser. Acceptable in casual speech, but imprecise for the logbook.

## Standard steps

1. I create or modify files locally — .md, .html, .css, .js — whatever the day's work demands.
2. I check what changed with git status.
3. I add the files to staging with git add . or selectively.
4. I create a commit with a clear and short message.
5. I send the changes to GitHub with git push.
6. I verify on GitHub that the files appeared correctly.

## Example commands

```bash
git status
git add .
git commit -m "docs: update bilingual journal structure"
git push
```

## How I write it in the journal

I edited the files locally, staged them, created a commit with a descriptive message, and pushed the changes to GitHub. In Git terminology, this workflow means staging, committing, and pushing — not just uploading. The words matter because they reflect the discipline of the process.

## Why this matters

Using the correct terms helps keep the workflow precise and professional. “Upload” is fine as a general expression — it is what the interface button says — but in Git the exact sequence is staging, committing, and pushing. A ship's crew names every manoeuvre correctly, because in the dark, the difference between a push and a pull is the difference between arriving and drifting.

---

# DAY 08 — The Ship Takes Shape: Six Compartments, One Hull

I sat with the volume map spread across my screen like a star chart, and I understood at last why no two compartments of a ship are built the same way. The frontend does not obey the same logic as the backend, because the frontend is a surface — you learn it by layering, one material at a time — while the backend is a circulatory system, and you learn it by tracing the flow of blood from valve to valve. To force uniformity across all six would be to pretend that every room on a vessel is a copy of every other. It is not. The engine room breathes differently from the bridge. The cargo hold has its own geometry. And a ship that ignored those differences would never leave atmosphere.

So I divided the vessel into six compartments, each organised by its own didactic gravity.

## Frontend

The frontend is the hull — the visible face of the ship. Here the learning path is a straight line, a passage from one material to the next: first I build the skeleton in HTML, then I dress it in CSS, then I wire its nervous system with JavaScript, and finally I extend that wiring into the larger frameworks — React, Angular — that govern how a vessel of scale thinks.

**The chapters:** `html-log`, `css-log`, `javascript-log`, `react-log`, `angular-log`.

I placed React and Angular not as foreign territories but as branches of the same trunk. They are not separate kingdoms; they are dialects of the same language, spoken further along the corridor. This is not fragmentation — it is coherence.

## Database

The database compartment is split by paradigm, not by tool. On one side: SQL, the world of structure, relationships, and consistency — a grid of steel shelves where every datum knows its coordinate. On the other side: NoSQL, the world of flexibility, of documents that bend, of schemas that refuse to be fixed before the data arrives.

**The chapters:** `sql-log`, `nosql-log`.

This is a binary division, clean as a circuit: two ways of thinking about persistence, not two syntaxes to memorise. The novice who walks through both doors will understand not just how to query but what it means to *organise* — and those are different skills.

## Backend

The backend is not a list of languages. It is a system of cooperating organs — request enters, something validates it, something processes it, something connects it to data, something documents it, something tests it, something delivers it. To flatten this into a simple list would be to cut the ship's veins and call the diagram complete.

**The chapters:**
- `backend-core-log` — the working base, the system's heart.
- `api-log` — how the ship exposes its functions to the outside.
- `auth-security-log` — the locks on every hatch.
- `backend-architecture-log` — the blueprint of the blueprint.
- `backend-language-log` — the tools used, but as support, not as principle.
- `middleware-log` — the corridors through which requests travel.
- `testing-log` — how we verify that nothing is broken.
- `documentation-log` — the explainability layer, the ship teaching itself.
- `performance-log` — optimisation, the tuning of every engine.
- `deployment-log` — the final path out into the void.

The backend reader does not ask "which language do I learn next?" They ask: *where does the request enter, who validates it, how is it processed, where does it touch the data, how is it documented, how is it tested, and how does it leave?* The chapters follow those questions.

## Delivery

Delivery is a separate compartment because publication is not the same as construction. You can build a perfect server and still fail to launch it. This volume documents the passage from working state to published state: the pipeline, the version control, the synchronisation with the remote repository.

**The chapters:** `deployment-pipeline-log`, `git-log`, `github-log`.

The three together trace the arc: *what happened, in what order, and where it lives now.*

## UX

UX is not a branch of frontend. It is its own domain, because how a page *feels* to move through is not the same as how it *looks*. Perception, navigation, cognitive comfort — these are not decorative concerns; they are the difference between a ship you can pilot and a ship you abandon at the first lock.

**The chapters:** `accessibility-log`, `ux-foundations-log`.

First the principles of experience, then the concrete and ethical requirement of accessibility. UX is not an appendix. It is the air pressure in every cabin.

## Data Bridge

The Data Bridge is a liminal space — a corridor between the interface and the data systems. It does not duplicate frontend, nor does it copy database. It explains the transfer between them, and JSON is its language.

**The chapter:** `json-log`.

Small, but conceptually crucial. Every ship needs a passage between decks.

## What I learned tonight

The final order on the command deck — Frontend, Data Bridge, Backend, Database, UX, Delivery — is not arbitrary. It moves the reader through visible construction first, then the interchange layer, then server logic, then persistence, then experience, and finally publication. A progression from what you can touch to what you cannot, from the hull outward to the signal that leaves the ship behind.

Six compartments. One hull. Each with its own breathing rhythm. The ship is coherent now — not because every room is the same, but because every room knows why it is different.

---

# DAY 09 — The Head of Every Page, the Backlog of Every Future

Tonight I worked in two directions at once. Behind me, the backlog — a chart of every idea not yet ready for its implementation cycle, gathered into a register so that no intention is lost and no current structure is disturbed. A backlog is not a wish list. It is a navigator's auxiliary board: the plotted courses I have not yet taken, marked with their bearings and fuel estimates. Each entry waits for its moment, cleanly separated from the stabilised architecture around it. The ship remains orderly; the future remains visible.

Ahead of me: the `<head>` of every page — all fifty-two of them.

## The head container, complete

I took the template from `en/index.html` and pressed it into every document in the fleet. Every page — whether a top-level deck, a chapter log, or a support module — now opens with the same semantic foundation: character encoding, viewport, title, description, keywords, author, theme-colour, Open Graph metadata (title, description, type, URL, locale, site name, background colour, image), Twitter card, canonical link, robots directive, favicon, font preconnections, and the local stylesheet link. The only things that change are the page's identity — its title, its description, its keywords, its file paths.

Fifty-two pages, one architecture. I open any file in the project and the head block greets me like a familiar instrument panel, every gauge in the same position, every annotation in the same legend tags: `@block`, `@meta`, `@path`, `@reason`, `@warning`, `@theme`.

## The depth rule

A ship with many decks needs a rule for how doors reference each other. Pages at the root of a language folder — `bibliography.html`, `recursive-blueprint.html`, `transmission.html` — use `./` to find `style.css`, `favicon.svg`, `script.js`. They live in the same compartment. Pages nested one level deeper — `en/frontend/html-log.html`, `ro/backend/api-log.html` — use `../` to ascend one deck and reach the language folder where the resources wait.

This is not bureaucracy. It is the difference between a door that opens and a door that opens into empty space. Every link resolves. Every path is predictable. The book metaphor holds: each language folder is a volume, each subfolder a chapter, each log page a section. Resources live at the volume level, accessible through a single, predictable step up or a single, predictable step across.

## `meta name` vs `meta property`

I consolidated the head template into a single reusable structure and, in doing so, clarified the difference between two attributes that look alike but serve entirely different functions.

`<meta name="...">` speaks to the browser. It says: *this is my description, my keywords, my author, my viewport, my theme-colour, my robots directive.* It is the page speaking to the machine that renders it.

`<meta property="og:...">` speaks to the network. It says: *this is how I want to appear when I am shared — on social platforms, in messaging cards, in link previews, in any space outside my own context.* `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`, `og:site_name` — these control the card that represents the page when the page itself is not there to speak.

In short: `name` is for the page at home. `property` is for the page abroad. Both are necessary in a vessel that intends to be published.

## Void tags and the `/>` notation

I also settled the question of void tags. In HTML5, `<meta charset="UTF-8">` is valid without a closing slash. But I chose the `/>` form — `<meta charset="UTF-8" />` — inherited from XHTML, because consistency across all documents is more important than the purity of any single convention. The project reads the same way in every file: `/>` on every void element, every time. No exceptions, no ambiguity.

## The 1024-byte rule

The `meta charset` declaration must be the first element inside `<head>`, within the first 1024 bytes of the document. This is not superstition. The HTML parsing specification tells us that some browsers determine character encoding by scanning only the first kilobyte. If the encoding declaration comes later — after a long comment, after a misplaced block — the browser may misinterpret the entire file before it ever reaches the truth.

So in every page, `meta charset` sits immediately after the opening `<head>` tag. No comment precedes it. The explanation follows after, never before. The rule is satisfied, and the didactic commentary remains intact.

## Frontend validation

I made a note — a discipline note, not a bureaucratic one — that validation is part of the ship's construction. It checks whether every page respects the same semantic template, whether the `<head>` elements are complete, whether the relative paths resolve, whether the bilingual pages mirror each other in structure.

For now it is a manual note. But it sits in the log, waiting for the day it becomes its own sector — automated linting, quality gates, a dedicated daylog. The ship is not yet at that stage, but the intention is charted.

---

# DAY 10 — The Ship Gains a Crew: AI, Migration, Rebranding, and Repairs

This was the day the ship stopped being a solo voyage. I began working with **opencode**, a terminal-based AI agent configured as a collaborative instrument — not a replacement for my decisions, but an extension of my capacity to implement them. It reads files, proposes changes, applies modifications across dozens of files at once, and explains every decision through the same legend tags the project already uses: `@block`, `@reason`, `@warning`, `@theme`. I speak in natural language — migration, style fixes, bulk replacements, structural decisions — and the agent executes in a verifiable, transparent way. It does not work autonomously; it works within boundaries I set, reflecting my editorial and architectural control. The interaction feels like pair programming with an asymmetrical distribution: I decide the what and the why; the agent implements the how, and flags anything that does not fit.

This freed me to think about architecture and content while the agent handled mechanical repetition, file synchronisation, and systematic verification across fifty files at once.

## The footer template: telemetry data stream

I designed a unified footer for the entire fleet — a telemetry data stream that appears at the bottom of every page, carrying three lines of information:

- **SYS_ORBIT** — the current sector the reader is navigating: `COMMAND_DECK` for the index, `FRONTEND_EXPEDITION` for frontend logs, `BACKEND_SECTOR` for backend pages, and so on.
- **COORDINATES** — the physical origin of the project: Cluj-Napoca, Romania, followed by the current system timestamp.
- **Copyright** — the vessel's name, `D::0dy55ey`, and the captain's signature: Iulia-Alexandra Cadar.

On certain pages — the bibliography, for instance — the footer also carries an external communications link styled as a `.pulse-dot` beacon, opening the bibliography in a new tab. Every element is annotated with didactic comments from `docs/legend-en.md`, explaining the status indicator, the `.telemetry-active` class, the `.vessel-sig` signature, and the geographic coordinates.

## Importing from the mother project

I brought the body content of `Manual_project` across the void and into the new hull — every page that had existed in the original structure: `index.html`, `bibliography.html` with its `<table class="data-grid">` entries, `recursive-blueprint.html` with its split-screen terminal, and all twenty-three chapter log pages covering every sector from HTML to deployment.

Each imported block received didactic HTML comments — `@block` for logical zones, `@reason` for motivation, `@structure` for document architecture, `@concept` for narrative meaning, `@theme` for atmospheric choices — on every `<section>`, `<article>`, `<p>`, `<ul>`, and `<table>`. In the `ro/` folder, I noted that all explanatory comments must eventually be translated to Romanian, and the same applies to `script.js` and `style.css`: imported, annotated, waiting for a full language pass.

## The CSS console: thirteen warnings, thirteen fixes

I opened the PROBLEMS panel in VS Code and found thirteen warnings in `en/style.css`. I fixed each one by hand, understanding why it appeared and what the standard-compliant solution demanded.

**`backdrop-filter` — 8 occurrences.** The frosted glass effect needs the `-webkit-backdrop-filter` prefix for Safari and older WebKit browsers. I added the prefixed version before every `backdrop-filter` declaration — a defensive technique: Safari reads the prefix, Chrome and Firefox read the standard, everyone sees the same glass.

**`text-size-adjust` — 1 occurrence.** The property controls mobile text inflation. It requires three vendor prefixes (`-webkit-`, `-ms-`, `-moz-`) for full support. I removed the active declaration and kept it as a commented teaching reference — the viewport `<meta>` tag already covers most scenarios, and the code remains instructive without triggering a warning.

**`text-justify` — 1 occurrence.** A compatibility flag in certain rendering contexts. I replaced the active declaration with a comment preserving the intent.

**`-webkit-overflow-scrolling` — 1 occurrence.** A legacy iOS property, deprecated since iOS 13. I removed it entirely. Modern devices handle momentum scrolling natively.

**`scrollbar-width` — 2 occurrences.** Supported in Firefox but not yet in Chrome or Safari. I wrapped each in a `@supports (scrollbar-width: thin)` block — progressive enhancement: Firefox applies the thin rule, Chrome and Safari ignore it without error.

**`meta[name=theme-color]` — 2 false positives.** Stale warnings from VS Code's linter. The actual `<meta name="theme-color">` tags had already been removed. The project now uses `manifest.json` for Firefox's `theme_color` and `og:background_color` for social previews. A Reload Window cleared the phantom warnings.

## Rebranding: from "Digital Odyssey" to `D::0dy55ey`

I replaced the working title across the entire project. "Digital Odyssey" was a descriptive placeholder — accurate but not distinctive. `D::0dy55ey` is a signature.

The form uses leetspeak: `0` for `o`, `5` for `s` — "0dy55ey" instead of "Odyssey". The `D::` prefix echoes the C++ scope resolution operator, giving the name a programming-language flavour. The double colon separates the initial `D` (for "Digital") from the rest, creating a logo-like glyph.

Six arguments drove the change:

1. **Visual identity** — `D::0dy55ey` is compact, technical, immediately recognisable. It fits in a favicon, a header, a copyright line.
2. **Brand separation** — the GitHub repository remains `digital-odyssey` as the technical transport layer; `D::0dy55ey` is the internal, narrative identity. The split is deliberate.
3. **Cosmic navigation metaphor** — the name looks like a spacecraft call sign or a system identifier on a HUD console. It belongs to the same world as "Command Deck", "Astrogation Charter", and "telemetry".
4. **Narrative coherence** — the rebranding aligns the visual language with the conceptual framing that already existed.
5. **Memorability** — a distinctive, slightly unusual name is easier to remember and search for than a generic descriptive one.

The replacement was executed across all 63 files — HTML, CSS, Markdown — with zero remaining instances of the old title in visible text.

## Two navigation models

I established two distinct patterns. The index page — the Command Deck — is a hub. Its logo is a hyperlink back to itself, and its navigation links point to anchor sections on the same page: `#frontend-scape`, `#database-void`, `#backend-sector`, `#ux-lab`, `#delivery-deck`, `#data-bridge`. This model is for **orientation and discovery**: the reader sees all sectors and can jump to any of them.

All other pages — bibliography, transmission, recursive-blueprint, every chapter log — follow a different logic. They are satellite modules. Their navigation is designed for **focus and return**: a static logo (`D::0dy55ey / Section Name`) that is not hyperlinked — it tells the crew where they are without offering to leave — and a single "← Return to Command Deck" link pointing to `index.html` (or `../index.html` for subdirectory pages). This encourages linear reading: finish the current chapter, then return to the hub. Every one of the 52 non-index pages was updated to this pattern, with language-appropriate comments on every line of the nav block.

## The HUD dropdown, the icosahedron portal, and the expanded footer

The index page had two arrow-down anchor buttons. I replaced them with a single "Command Deck" button that toggles a glassmorphism slide-down panel containing all six volumes — a `.hud-overlay` with `.hud-panel`, staggered CSS fade-in per `.hud-volume` for a sequential reveal. JavaScript (`MECANISMUL 7` in `script.js`) handles three interaction modes: click toggle, close on outside click, close on Escape. A guard clause — `if (!hudToggle) return` — ensures the script does not error on pages without the button. The navbar stays clean on mobile: logo and HUD button, nothing more.

The icosahedron became a hidden Easter egg. The `quantum-plasma-sphere` div is now wrapped in a `<a href="recursive-blueprint.html" class="reactor-portal">` — no visible label, no link colour, no underline. The only way to reach the recursive blueprint page is to click the 3D reactor. On the recursive page, the mini-reactor is similarly wrapped in `<a href="index.html" class="reactor-portal">`, creating a closed loop: index → recursive → index. Teleportation through the wormhole reactor. The footer deliberately contains no link to the recursive page — it is a hidden sector, not a regular destination.

The footer expanded into a secondary command console: a `<ul class="footer-links">` with three items — the bibliography link (with `pulse-dot` beacon), the transmission link (also with `pulse-dot`), and the EN/RO language toggle with `.lang-toggle-active` highlighting the current language and `.lang-sep` for the vertical separator. The same structure was copied to the recursive blueprint pages.

The recursive page itself swapped its "← Return to Command Deck" link for the same HUD button and overlay used on the index pages. The static logo `D::0dy55ey / Recursive Blueprint` remains unlinked, but the navigation is now the glassmorphism panel. The recursive page has its own HUD, its own command console — an autonomous vessel within the fleet.

I added BACKLOG entry 005 to both `BACKLOG-EN.md` and `BACKLOG-RO.md`, documenting the full scope: HUD dropdown, icosahedron portal, footer expansion, volume definitions, design decisions (no footer link to recursive, closed loop, guard clauses), affected files (10), and completion conditions. Status: "In progress".

Language discipline held across every file: `en/` files use English comments with EN tags, `ro/` files use Romanian comments with RO tags. CSS and JS files use Romanian comments — the project originates from a Romanian developer, and the native tongue governs the engine room.

## CSS console repairs and UI calibrations

Testing the interface revealed a series of visual fractures. I repaired them one by one.

**Reactor landing calibration.** Both the 20-face icosahedron and the 5-face mini-reactor extended past the visible viewport on page load. The causes were excessive margins: `.armillary-reactor-core` had 140px top and bottom margins on a 540px height — a vertical footprint of 820px, with no room for the 3D `translateZ(210px)` face extension. I reduced margins from 140px to 60px, tightened `.blueprint-container` from 100px to 40px, reduced `.terminal-split` from 40px to 20px, trimmed `.blueprint-demo-text` from 25px to 15px, increased the `.recursive-reactor-wrapper` negative margin from -20px to -40px, and removed `overflow: hidden` from `.hero`. The geodesic cores now land fully visible within the viewport.

**Unified hover glow and spin acceleration.** The two reactors had inconsistent hover behaviour — different spin timings, different glow intensities. I standardised both to use the same `lightning-glow-fusion` keyframes and the same `3s` hover spin duration. Identical glow intensity, border transitions, and acceleration curves.

**Unified "Return to Command Deck" link style.** The link had two different visual treatments depending on directory depth — root pages matched a CSS selector that applied a green dashed border, while subdirectory pages fell back to a default grey style with pink hover laser. I added `class="return-btn"` to all 50 "← Return to Command Deck" anchors. The CSS selector `.nav-links a.return-btn` was already defined with the correct rule block. Every page now receives the green dashed border, 40% opacity idle state, and full-green hover with subtle background shimmer, regardless of depth.

**Footer link panel unified.** The bibliography, transmission, and language toggle links all needed the same archive-link button style. I updated `.footer-links a` to match `.archive-link`: green text, green border, padding, and a hover state that fills the background with green and swaps text to dark. The `.lang-toggle-active` class now uses a filled green background with dark text. Applied across 50+ pages and synced between `en/style.css` and `ro/style.css`.

**Opaque full-screen HUD console.** The overlay used `background: rgba(10, 11, 30, 0.85)` with `backdrop-filter: blur(8px)`, which let the icosahedron and titles bleed through. I changed the background to solid `rgb(10, 11, 30)`, removed the `backdrop-filter`, expanded the open height from `70vh` to `calc(100vh - 60px)`, and updated the `.navbar-spacer` from `calc(60px + 70vh)` to `100vh`. Desktop and mobile now use the same dimensions — no need for a separate mobile media query.

**Auxiliary repairs.** The icosahedron and mini-reactor portal `<a>` elements had no text content — only empty `<div>` faces. I added `aria-label` attributes: `"Enter the Recursive Blueprint"` on the index page, `"Return to Command Deck"` on the recursive page (and their Romanian equivalents). This silenced the aXe "Links must have discernible text" warning. The HUD toggle button — previously grey with a magenta hover — was restyled to match the "Return to Command Deck" button: green dashed border, desaturated green text, full-green hover with subtle background shimmer.

---

# DAY 11 — The Command Deck Reaches Its Final Form

Today the two index pages — English and Romanian — stopped being sketches and became the full command deck they were always meant to be. Every volume in place. Every annotation written. The new brand identity locked in like a hull plate welded at dawn.

## Six volumes, one progression

I expanded both `en/index.html` and `ro/index.html` from the original two-volume outline (Frontend + Database) to the complete six-volume architecture defined on DAY 08. The order on the deck follows the natural build sequence:

- **Frontend** (`frontend-scape`) — HTML, CSS, JavaScript, React, Angular. The visible hull.
- **Data Bridge** (`data-bridge`) — JSON. The annex volume, positioned second — a corridor between the surface and the logic beneath.
- **Backend** (`backend-sector`) — core logic, API, auth, architecture, languages, middleware, testing, documentation, performance, deployment. The circulatory system.
- **Database** (`database-void`) — SQL and NoSQL. Persistence. The ship's memory.
- **UX** (`ux-lab`) — accessibility and foundations. The air pressure in every cabin.
- **Delivery** (`delivery-deck`) — deployment pipeline, Git, GitHub. The final signal leaving the hull.

The progression moves the reader from visible construction, through the data interchange layer, into server logic, then persistence, then experience, and finally publication. From what you can touch to what you cannot.

## The Data Bridge as an annex

The Data Bridge is not a chapter inside another volume — it is a distinct annex with its own `<section>`, its own `<h2>`, and its own entry in the HUD navigation panel, positioned between Frontend and Backend. Visually, it wears an amber (`#FFBF00`) dashed border with a 4px width — replacing the standard cyan — and a `box-shadow` with amber glow (`0 0 30px rgba(255, 191, 0, 0.4)`). A custom `@keyframes bridge-shake` animation gives it a subtle, intermittent vibration — 1–2px translations on X and Y axes with 50–100ms delays — distinguishing the bridge from the stable volumes around it. It trembles slightly, as if it knows it spans two territories.

The same `.bridge-volume` rules live in both `en/style.css` and `ro/style.css`, with Romanian comments in the `ro/` version.

## Pedagogical comments on every block

Every structural element in both index pages now carries a didactic comment. The `<head>` elements, the `<nav>` links, every hero text line, every volume `<article>`, every `<h2>` and `<h3>`, every footer element, the `<script>` tag, the `<hr>` dividers, the `.pulse-dot` beacons, every `target="_blank"` — all annotated with `@block`, `@meta`, `@reason`, `@path`, `@warning`, `@bridge`, and `@theme` tags. In the Romanian version, every comment is translated and uses the tag labels from `docs/legend-ro.md`. The `ro/index.html` grew from approximately 540 lines to 871 — matching the English version in structure, depth, and breath.

## The new brand identity

I replaced the previous titles — `Charting Digital Frontiers` / `Cartografierea Frontierelor Digitale` — with something that sounds less like a description and more like a signal from deep space.

**English:**
- `<title>`: `D::0dy55ey | Signals from the Digital Deep`
- `<h1>`: `From the Digital Deep`
- Subtitle: `Full Stack Transmissions from the Cosmic Ship D::0dy55ey`

**Romanian:**
- `<title>`: `D::0dy55ey | Semnale din Adâncul Digital`
- `<h1>`: `Din Adâncul Digital`
- Subtitle: `Transmisii Full Stack de la Nava Cosmică D::0dy55ey`

The brand is no longer a label. It is a message arriving from the dark. The HUD overlay, OG metadata, and canonical paths were all updated to match.

## Mobile refinements

I recalibrated the CSS for small screens: the subtitle font reduced to `9px` to fit within the viewport, `.armillary-band-container` set to `width: 100%` to prevent horizontal overflow, `.hud-toggle` padding and font size tightened, `.footer-links a` shrunk, `.return-btn` spacing compressed, `.footer p` font size reduced to stop text wrapping on narrow viewports. The ship needed to be readable in a cockpit the size of a phone screen.

## Romanian mirror: cloned, translated, complete

The `ro/index.html` was not built separately. It was cloned from the English version and then transformed: every visible string translated to Romanian, every pedagogical comment translated, `lang="ro"` set on the `<html>` element, `og:locale="ro_RO"` for social previews, all canonical and OG URLs pointing to `/ro/` paths, and the language toggle in the footer pointing to the correct paths for both versions. Two pages, one architecture, two languages breathing at the same rate.

## Journal files renamed

`JURNAL-EN.md` and `JURNAL-RO.md` became `JOURNAL-EN.md` and `JOURNAL-RO.md`. The English naming convention now runs consistently across the project — matching the English-language journal content and the project's international orientation. Every internal reference in README files, BACKLOG documents, and all other files was updated. The old names are gone from every log, every link, every mention.

---

# DAY 12 — The Autognostic Engine: A Ship That Reads Itself

Today I finished the recursive blueprint page. It is no longer a page. It is a closed-circuit terminal where the ship interrogates its own source code in real time — a vessel reading its own blueprints by the light of its own phosphor screen. I call it **The Autognostic Engine**, from *autognosis*: self-knowledge.

## The file-selector console

I replaced the four static, broken tabs with a horizontally scrollable console listing all thirty files grouped under seven volume labels: ROOT, FRONTEND, DATA BRIDGE, BACKEND, DATABASE, UX, DELIVERY. The HUD swipe mechanism carries it — `overflow-x: auto`, hidden scrollbar, momentum scrolling on mobile. The HUD volume order was fixed to match the index: Frontend → Data Bridge → Backend → Database → UX → Delivery.

Tab switching now works. MECANISMUL 08 was rewritten from the keel up: it uses event delegation on `.source-selector-tabs`, reads the `data-path` attribute from the clicked `.tab-btn`, fetches the file via the Fetch API, and injects the source into the code inspector. On mobile, the active tab auto-centers horizontally. A body class fix — `module-view` → `blueprint-layout` — activated the existing CSS selectors that had been waiting for this moment.

New CSS entered the stylesheet: `.source-selector-tabs` as a scrollable flex container, `.tab-btn` in phosphor green caps with hover glow and active-tab highlight, `.volume-label` in amber uppercase, and `.blueprint-master-subtitle` with amber glow, uppercase, and 3px letter-spacing. The mobile media query was updated for compact sizing.

The Romanian version — `ro/recursive-blueprint.html` — was completely outdated and has been fully rewritten to match the English structure, with all text and comments translated, and the RO stylesheet synced.

## Colour palette: autonomy vs. affiliation

The recursive page establishes its own colour identity while remaining visibly part of the fleet. The logic is deliberate:

- **H1 and subtitle** — white and amber, instead of the index's white and neon green. Amber evokes old phosphor terminals, diagnostic readouts, the introspection of a closed-circuit engine. This is the engine room, not the command deck.
- **HUD h3 volume titles** — amber, overridden from the index's pink. The entire HUD interior shifts to amber so that no colour from the index palette leaks in. The page maintains a single self-consistent palette from titles through navigation.
- **Source tabs and log-page links** — keep their phosphor green. Green is native to the console aesthetic and coexists harmoniously with amber.
- **`<code>index.html</code>` in the description paragraph** — overridden from pink (the global `p code` rule) to phosphor green, matching the file-selector tabs and code inspector.
- **Pink logo (h1 in navbar)** — retained. The pink logo is the fleet tether: it marks the page as a D::0dy55ey vessel despite its declared autonomy.
- **Footer author name** — pink, unchanged from `span.vessel-sig`, serving as the closing bracket of the fleet affiliation.

In summary: the recursive page governs itself with an amber-and-green internal palette for all navigation, code, and content text, while the pink logo and captain's signature remain as the sole index-colour elements — visual tethers that say *this is still D::0dy55ey* without disturbing the page's internal autonomy.

## The creative recast

I considered four candidates for the H1:

1. **The Ship That Reads Its Own Blueprints** — narrative, immediately evocative.
2. **The Autognostic Engine** — coined from *autognosis* (self-knowledge); technical, philosophical, unique. **Selected.**
3. **The Recursive Abyss: Log of the Self-Examining Vessel** — dramatic, deep, infinite descent.
4. **The Mirror of the Deep** — poetic, minimal, reflection without end.

The subtitle: *A Closed Circuit Between Creator and Creation.*

The description paragraph that follows tells the crew what this page is: a closed-circuit terminal where the ship interrogates its own source code in real time. Every file in the fleet — from `index.html` to the deployment logs — is subject to examination here. The console below operates as a recursive dialogue between creator and creation, thirty files of logic, poetry, and structure exposed to the light of their own phosphor screen.

For the left panel, I wrote three versions before settling on the final blend. Option A was poetic and oceanic — a living archive, each file a cabin in the ship's memory. Option B was cinematic and engine-room-sharp — the neural cortex stripped bare, the geodesic core as a five-faced god. The final blend takes the poetry of A and the sharpness of B, arriving at something that speaks with both voices at once:

> This is no dead text. The Recursive Grid is the ship's neural cortex stripped bare — not a metaphor, but the literal architecture of this vessel's consciousness, laid out in green phosphor on a black screen. In the starboard pane, the source scrolls past like a continuous depth charge, each line a synaptic pulse. On the left, the geodesic core rotates in blind obedience, a five-faced god executing decrees written before the first commit. Code is not the blueprint of the vessel. Code is the vessel itself, tangled in a loop of self-surveillance from which nothing escapes — not even the silence between the brackets. And this terminal is where it watches itself watch itself, down to the last semicolon.

---

# DAY 13 — The Astrogation Charter: A Message in a Crystal Cylinder

Today I finished the transmission page — the Astrogation Charter, the philosophical heart of the project. It needed to feel like a message arriving from deep space, not a page you scroll through but a transmission you witness in real time.

## The header: three attempts

The page originally used the index's full `.hero` class with a 3D icosahedron — a 100vh theatrical display that visually competed with both the command deck and the recursive engine. I tried three paths to find the right voice.

**First attempt:** a `.charter-header` with a double starlight-blue border, white title, blue subtitle. It introduced a new colour — starlight-blue — used nowhere else in the project. The captain rejected it immediately: *"no colours salad."* A palette must be a system, not a collection.

**Second attempt:** a minimalist header with pink title and gray subtitle, no borders, identical to the bibliography's `category-header`. But the manifesto is not a reference list; it is the ship's philosophical core. Making it identical felt like hiding the heart behind a bulkhead door.

**Final decision:** keep the `category-header` structure and colours — pink `h2`, stardust subtitle — but add `✦` glyphs on each side of the title as the only differentiator. The glyphs whisper *this page is special* without breaking the palette or introducing a new colour. The h1 remains reserved exclusively for the two flagship pages: the command deck and the autognostic engine.

## The hologram-crystal cylinder

The initial concept was a literal glass bottle — neck, cork, body — built in pure CSS. The captain challenged me: she wanted something holographic, with a myriad of faces. A bottle would not hold the vastness.

I built a pill-shaped cylinder instead, a column of light and glass:

- **Shape:** capsule form with `border-radius: 40px`, suggesting a vertical cylinder.
- **Glass body:** a `radial-gradient` with a dark core — `rgba(10, 11, 20, 0.92)` — and faintly glowing edges in solar-mint green, fading into an amber top and pink bottom via `linear-gradient(180deg)`.
- **Rims:** amber top border (the cap) and pink bottom border (the base) — the only two structural colours touching the vessel.
- **Reflection stripe:** a `::before` pseudo-element drawn as a thin vertical gradient stripe on the left side, simulating light refracting through curved glass.
- **Float animation:** `crystal-float` bobs the cylinder up and down by 7px on a 6-second cycle, as if adrift in a cosmic ocean.
- **Inner shadow:** `inset 0 0 80px rgba(0, 0, 0, 0.3)` creates depth — the suggestion of a thick glass wall, a vessel within a vessel.

No icosahedron. No 3D faces. No clip-path. Just a pure glass tube containing the message. The "myriad of faces" is implied by the shifting gradient and the multi-coloured glow at different angles — a hologram-crystal that catches the light differently from every seat in the cockpit.

## MECANISMUL 09: The cosmic typewriter

Inside the cylinder, a JavaScript mechanism — MECANISMUL 09 — types the manifesto text character by character, simulating a live deep-space transmission being received in real time.

**Auto-scroll.** After each character is written, `cursor.scrollIntoView({ block: "nearest" })` keeps the transmission visible. The reader does not need to scroll; the page follows the text as it unfolds, like a feed arriving without human intervention.

**Cursor dismissal.** When the last character of the last paragraph is written, `typeNextChar` is called one final time. It detects that the transmission has ended, sets a 3-second timeout, and adds the `cursor-hidden` class to the blinking cursor. The cursor blinks for approximately 3.5 seconds after the final character — a 500ms paragraph pause plus the 3000ms dismiss timer — then fades out. The carrier signal drops. The transmission is complete.

**Comments vanish from the live DOM.** The pedagogical comments — `@concept`, `@reason`, `@theme`, `@structure` — placed between manifesto paragraphs are present in the HTML source code for a novice to study. But when `container.innerHTML = ""` executes at the start of MECANISMUL 09, all child nodes — including HTML comments — are removed from the live DOM. This is intentional. It is philosophical. The comments serve their purpose before the typing begins, and once the mechanism starts, they vanish. The captain's own words guided this: *"Dolphins do not breach for your sake. Stars do not fall into your hand. You wait — eyes fixed on the vastness — and only then do they appear."* The transmission is live. You pay attention as it happens. The page does not wait. The novice must keep their gaze fixed.

Everything is shown in the harshness of real passing time. That is the teaching philosophy of this vessel: the signal arrives, and you are there to receive it, or you miss it.

---

# DAY 14 — The Final Signal: Links Unified, Toggles Homologous, History Rewritten

## The transmission titles, at last consistent

The footer link to the Astrogation Charter was not speaking the same language across the fleet. Depending on which page you stood on and at what depth, the link still carried the old `Manifesto` or `Manifest` suffix — a remnant of an earlier naming phase that no longer fit the cosmic-journey narrative. I opened all 54 HTML files and unified every instance to a single title per language:

- **EN pages:** `The Astrogation Charter` — the `- Manifesto` and `— Manifesto` suffixes removed.
- **RO pages:** `Carta de Astronavigație` — the `— Manifest` suffix removed; the RO log pages and RO bibliography that still carried the English title in both link text and description paragraph were fixed; `Astro-navigație` renamed to `Astronavigație`; the parenthetical descriptions updated from `transmisia/manifestul` and `manifest` to the consistent `transmisiunea`.

## The homologous language toggle

The language toggle had always pointed to the index pages — `en/index.html` or `ro/index.html` — no matter which page you were reading. Switching languages meant abandoning your current sector and being thrown back to the command bridge. Useful, but coarse.

We chose a more precise model: **homologous linking**. Each page now links to its counterpart in the other language at the same section, same log, same depth. `en/frontend/html-log.html` links to `ro/frontend/html-log.html`, not to `ro/index.html`. `ro/transmission.html` links to `en/transmission.html`, not to `en/index.html`.

This required two passes. The first computed and replaced all 52 href values (the two index pages already pointed to themselves correctly). The second pass fixed a pre-existing bug on 24 RO pages — every log page plus `ro/bibliography.html` — where the `lang-toggle-active` class was incorrectly placed on the EN link instead of the RO link. Now the active language always matches the page you are on.

## Spelling: Astronavigație

The Romanian compound `Astro-navigație` carried a hyphen that made it look like a French calque. In Romanian, prefixes bind directly to the root: *astrofizică*, *astronaut*, *astronomie*. I updated all 12 occurrences in `ro/transmission.html` — the title, meta tags, h2, logo, and comments — plus the reference in `ro/index.html`, the CSS and JS comments, and this journal. One word, no hyphen: `Astronavigație`.

## Commit tags extended, history rewritten

The DAY 04 convention grew two new tags that the original list had missed:

- **`i18n`** — internationalisation and localisation: translating pages, cloning RO/EN versions.
- **`content`** — adding or rewriting prose content: manifesto text, pedagogical annotations, creative copy.

With the full list settled, I rewrote 18 past commits that lacked tags using `git filter-branch`:

| Tag | Scope |
|-----|-------|
| `content:` | recast of recursive blueprint (creative copy) |
| `docs:` | journal entries (×3) |
| `style:` | colour palette overrides, spelling unification (×3) |
| `feat:` | transmission page, typewriter, auto-scroll, cursor fade, homologous toggle (×8) |
| `refactor:` | header restructuring, link title unification (×3) |
| `fix:` | typeNextChar cursor dismiss bug (was upper-case `Fix:`, now lower-case `fix:`) |
| `i18n:` | RO transmission page translation |

I created a temporary `pre-rewrite-backup` branch as a safety net, then force-pushed the rewritten history to `main`. The backup branch was subsequently deleted. The ship's log is clean again — every commit speaks the same language, every message carries its proper tag, and the past is as readable as the present.

---
