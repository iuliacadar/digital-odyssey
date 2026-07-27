# D::0dy55ey — BACKLOG-EN.md

This document centralizes ideas, postponed features, refactors, and technical debt for the project. Inline code comments remain useful for local context, but the backlog acts as the main register for items planned for later implementation.

## How to use

- Add a new entry as soon as an important idea appears.
- Keep each item short and clear.
- Mark status, priority, phase, and affected files.
- When the idea is implemented, move it to the "Implemented" section or mark it as "Done".

## Status legend

- `Proposed` — noted idea, not concretely planned yet.
- `Deferred` — accepted idea, intentionally postponed.
- `Planned` — assigned to a clear future phase.
- `In progress` — actively being worked on.
- `Done` — implemented.
- `Dropped` — intentionally abandoned with a reason.

## Priority legend

- `High` — affects architecture, navigation, or global consistency.
- `Medium` — significantly improves the project, but does not block progress.
- `Low` — polish, refinement, or optional extension.

## Active backlog

### 001 — Theme system: Stellar Day / Deep Night

**Title:** Theme system: Stellar Day / Deep Night

**Description:** Implement a light/dark toggle for the entire project, based on a dual matrix of color and contrast variables.

**Status:** Deferred
**Priority:** Medium
**Phase:** After CSS core transfer

**Why later:** The current theme is dark-first, and immediate implementation would duplicate work before the migration and cleanup of the base modules.

**Affected files:** `ro/style.css`, `en/style.css`, `ro/index.html`, `en/index.html`

**Implementation conditions:**
- core variables are cleanly transferred;
- main structural modules are stabilized;
- contrast is verified for both themes;
- `theme-color` can become dual inside `<head>`.

---

### 003 — Dedicated article/sector for frontend validation

**Title:** Validation at the end of frontend chapters

**Description:** Add a validation sector or daylog at the end of the chapters in the frontend volume, for HTML, CSS, and where relevant JavaScript. The section will record structure, syntax, compatibility, and best-practice checks, together with the tools used, including `.hintrc`.

**Status:** Planned

**Priority:** Medium

**Phase:** After the main frontend chapters are stabilized

**Why this idea exists:** Validation works as a closing stage of the study and completes the technical documentation of the chapter without becoming a separate volume.

**Affected files:** `html-log.html`, `css-log.html`, `javascript-log.html`, `.hintrc`

**Steps:**
- add a validation sector at the end of the HTML chapter;
- add a validation sector at the end of the CSS chapter;
- add JS validation only where there is project-specific logic to verify;
- record the validation tools and the main findings;
- mention `.hintrc` as part of the verification setup.

**Completion conditions:**
- validation is integrated coherently into each chapter structure;
- the section remains short, clear, and aligned with the backlog style;
- `.hintrc` is documented or excluded in a justified way.

---

### 004 — Verify text-size-adjust on mobile devices at launch

**Title:** Verify text-size-adjust on mobile devices at launch

**Description:** Check if removing `-webkit-text-size-adjust`, `-moz-text-size-adjust`, and `text-size-adjust` declarations affects text rendering on real mobile devices (iOS Safari, Chrome Android, Firefox Android). If text inflation or scaling issues appear on any device, restore the declarations.

**Status:** Proposed
**Priority:** Low
**Phase:** At launch / first mobile testing round

**Why later:** The declarations were removed to eliminate VS Code linter warnings. The viewport meta tag should handle text inflation, but actual mobile testing is needed to confirm. Low priority because the impact is cosmetic and does not affect desktop users.

**Affected files:** `en/style.css`, `ro/style.css`

**Implementation conditions:**
- test on iOS Safari (iPhone/iPad) — check text size after landscape rotation;
- test on Chrome Android — check text size on zoom;
- test on Firefox Android — check text size on zoom;
- if any issue appears, restore `-webkit-text-size-adjust: 100%` (Safari), `-moz-text-size-adjust: 100%` (Firefox), and `text-size-adjust: 100%` (Chrome/Edge/Samsung).

---

### 008 — Launch preparation: security, empty log content, deploy config

**Title:** Launch preparation — noopener, empty log pages, deploy config

**Description:** Address the blockers identified in the launch readiness assessment before going live. (GitHub Pages will serve `en/` as root; no root `index.html` needed.)

**Status:** Proposed
**Priority:** High
**Phase:** Pre-launch

**Why now:** The main pages (index, bibliography, transmission, recursive-blueprint) are production-ready, but 40+ empty/lorem log pages, and missing `rel="noopener noreferrer"` on some `target="_blank"` links prevent public deployment.

**Affected files:** `en/*.html`, `ro/*.html`, `en/style.css`, `ro/style.css`, `.github/workflows/deploy.yml`, `shared/data/*.json`

**Steps:**
- add `rel="noopener noreferrer"` to all `target="_blank"` links across all HTML files;
- fill or remove the 18 empty structural-shell log pages per language (or add a "🚧 Under Construction" banner);
- replace Lorem Ipsum text in `html-log.html`, `css-log.html`, `javascript-log.html`, `sql-log.html` with real content;
- populate or remove the 3 empty JSON files in `shared/data/`;
- add GitHub Actions deployment workflow (or enable Pages via repo Settings);
- optional: add a `CNAME` file for a custom domain.

**Completion conditions:**
- `https://iuliacadar.github.io/digital-odyssey/en/` shows the EN index;
- no `target="_blank"` link lacks `rel="noopener noreferrer"`;
- no log page shows an empty body or placeholder text without an "Under Construction" banner;
- deployment is automated or documented with a single command.

---

## Implemented

Move completed items here, keeping the date and a short note about what changed.

### 002 — Recursive pages with complete metadata

**Date:** 2026-07-27
**Note:** All HTML pages (main pages + all 22 log pages per language) now have complete `<head>` — charset, viewport, title, meta description, theme-color, favicon — with language-appropriate pedagogical comments. The `@meta:` annotation documents each tag. RO mirrors EN structurally. The two original backlog copies (one "In progress", one "Planned") were consolidated and moved here.

---

### 005 — Holographic HUD Console navigation for index + icosahedron portal

**Date:** 2026-07-27
**Note:** Fully implemented across both languages. HUD overlay with all 6 volumes and sub-log links, glassmorphism CSS with staggered boot-sequence animations, JS toggle with outside-click and Escape key close. Icosahedron portal links index → recursive-blueprint.html; mini-reactor links back to index. Footer includes transmission link and EN/RO language toggle. "Return to Command Deck" retained alongside HUD as an explicit navigation aid (design choice, not incompleteness).

---

### 006 — CSS Console Repairs and UI Calibrations

**Date:** 2026-07-23

**Scope:** Visual refinements across the entire fleet.

**Changes:**
- Reduced `.armillary-reactor-core` margins from 140px to 60px (top/bottom) to keep icosahedron bottom faces within viewport on page load.
- Reduced `.blueprint-container` margin-top from 100px to 40px and tightened `.terminal-split`, `.blueprint-demo-text`, and `.recursive-reactor-wrapper` spacing for the mini-reactor.
- Removed `overflow: hidden` from `.hero` to stop 3D face clipping.
- Added `class="return-btn"` to all 50 "← Return to Command Deck" links so subdirectory pages get the same green dashed border style as root pages.
- Restyled `.footer-links a` to match `.archive-link` (green border, green glow hover).
- Restyled `.hud-toggle` to match the return-btn style (green dashed border, green hover).
- Made `.hud-overlay` fully opaque (`rgb(10, 11, 30)`) and full-screen (`calc(100vh - 60px)`).
- Added `aria-label` to both reactor portals for accessibility.
- Updated and restyled `.lang-toggle-active` to filled green background.
- Added Day 10 — Reparations Log section to JOURNAL-EN.md and JOURNAL-RO.md.
- Synced all CSS changes to `ro/style.css`.

**Files affected:** `en/style.css`, `ro/style.css`, `en/index.html`, `en/recursive-blueprint.html`, `ro/index.html`, `JOURNAL-EN.md`, `JOURNAL-RO.md`, `BACKLOG-EN.md`, `BACKLOG-RO.md`.

---

### 007 — Index Restructuring, Data Bridge Annex, Pedagogical Comments, and Branding Finalisation

**Date:** 2026-07-24

**Scope:** Final restructuring of EN/RO index pages, Data Bridge as annex volume, new branding, journal rename.

**Changes:**
- Expanded `en/index.html` and `ro/index.html` from 2 to 6 volumes in build order.
- Added `bridge-volume` section with `.bridge-volume` CSS class (amber dashed border, glow, bridge-shake animation).
- Added comprehensive pedagogical comments (`@block`, `@meta`, `@reason`, `@path`, `@warning`, `@bridge`, `@theme`) to every block in both index files.
- Updated branding: EN `"Signals from the Digital Deep" / "From the Digital Deep"`, RO `"Semnale din Adâncul Digital" / "Din Adâncul Digital"`.
- Mobile UI refinements: subtitle 9px, `.armillary-band-container` 100%, tighter `.hud-toggle`, `.footer-links a`, `.return-btn`, `.footer p`.
- Translated and cloned EN structure → RO with Romanian comments.
- Renamed `JURNAL-EN.md` → `JOURNAL-EN.md` and `JURNAL-RO.md` → `JOURNAL-RO.md`.
- Updated all README and BACKLOG references to the renamed journal files.
- Added DAY 11 entries to both journals and both backlogs.

**Files affected:** `en/index.html`, `ro/index.html`, `en/style.css`, `ro/style.css`, `JOURNAL-EN.md`, `JOURNAL-RO.md`, `BACKLOG-EN.md`, `BACKLOG-RO.md`, `README.md`, `README-EN.md`, `README-RO.md`.

---

### Example

**ID:** 000
**Title:** Example completed item
**Date:** YYYY-MM-DD
**Note:** Short summary of the implementation.
