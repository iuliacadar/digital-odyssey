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

## Implemented

Move completed items here, keeping the date and a short note about what changed.

### Example

**ID:** 000
**Title:** Example completed item
**Date:** YYYY-MM-DD
**Note:** Short summary of the implementation.


