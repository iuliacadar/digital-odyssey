# Digital Odyssey — BACKLOG-EN.md

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

### 002 — Recursive pages with complete metadata

**Title:** Complete metadata for recursive pages

**Description:** Fill all HTML pages with title, meta description, theme-color, and a dedicated favicon, while keeping consistency between the RO and EN versions.

**Status:** In progress
**Priority:** High
**Phase:** Head implementation for all existing pages

**Why now:** This is the technical identity baseline of the project and should be established before other content or structural optimizations.

**Affected files:** `ro/*.html`, `en/*.html`

**Steps:**
- unify the `<head>` structure;
- complete the page-specific title;
- write the meta description for each page;
- set `theme-color` according to the project palette;
- add the correct favicon for each subproject;
- verify relative paths for the RO and EN versions.

**Completion conditions:**
- all existing HTML pages have a complete `<head>`;
- RO and EN versions are consistent with each other;
- `theme-color` is applied correctly;
- favicon loads without errors;
- the structure is conceptually identical in both subprojects.

**Title:** Complete metadata for recursive pages

**Description:** Add title, meta description, theme-color, and a dedicated favicon to every HTML page, keeping consistency between the RO and EN versions.

**Status:** Planned
**Priority:** High
**Phase:** In parallel with HTML page transfer

**Why this idea exists:** Every page should be autonomous, readable, and consistent within the bilingual project.

**Affected files:** `ro/*.html`, `en/*.html`

**Steps:**
- unify the `<head>` structure;
- adapt relative paths;
- verify the favicon;
- verify language-specific differences.

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

## Implemented

Move completed items here, keeping the date and a short note about what changed.

### Example

**ID:** 000
**Title:** Example completed item
**Date:** YYYY-MM-DD
**Note:** Short summary of the implementation.


