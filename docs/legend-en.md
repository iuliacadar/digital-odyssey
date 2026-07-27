# Comment legend

## General principle
This legend establishes a shared vocabulary for comments across the whole project. Its purpose is to make the files easier to read, teach, archive, and index.

## Core tags
- `@block:` explains the role of a logical code block.
- `@line:` explains a single line, element, or focused instruction.
- `@reason:` explains why a piece of code exists, not only what it does.
- `@warning:` marks pitfalls, limits, compatibility notes, or common mistakes.
- `@concept:` connects the code to the project’s aesthetic, poetic, narrative, or methodological idea.
- `@bridge:` creates a link to other files, sections, chapters, or systems in the project.

## Usage principles
- I use tags only when they add real clarity.
- I do not tag every sentence mechanically.
- Comments explain intention, structure, or context, not redundantly restate the code.
- I keep the meaning of each tag consistent across all files.

## HTML
- `@block:` explains a structural HTML block, such as `<head>`, `<main>`, `<section>`, or `<footer>`.
- `@path:` explains a linked file path, such as `./favicon.svg`, `./style.css`, or `./script.js`.
- `@meta:` explains a metadata item, such as `charset`, `viewport`, `description`, or `theme-color`.
- `@structure:` explains the role of an element in the document architecture.
- `@theme:` explains the color, atmosphere, or visual identity role of an element, class, or attribute in HTML context.
- `@concept:` explains the symbolic or narrative meaning of a structural or content choice.
- `@cluster:` groups a set of related entries under a thematic heading (used in bibliography pages, e.g. `@cluster: Core Runtimes`).

## CSS
- `@module:` defines the current module number and name (e.g. `@module: 04 — SECTION LAYOUT & CONTENT WRAPPERS`). Acts as the primary structural landmark in the 31-module architecture.
- `@sub-module:` defines the current sub-module number and name within a module (e.g. `@sub-module: 04.1 — Section Architecture`). Nests under the parent `@module:`.
- `@keyframe:` annotates a `@keyframes` animation block (e.g. `@keyframe: A3 — HIGH-VOLTAGE CRT SHIELD STROBE ENGINE`). Links the animation to its narrative purpose.
- `@manifest:` file-level annotation identifying the document type and purpose (used in the opening block of the stylesheet).
- `@group:` labels a logical cluster of related rules within a module, often with a letter code (e.g. `@group: 05.A — THE AXIAL CONTAINER OF THE PAGE`). Also used to group `@keyframes` blocks into categories (A–G).
- `@section:` marks a major division within the responsive / media queries area, identified by a numeric code (e.g. `@section: 00.2.A — Desktop Protocol`).
- `@sub-section:` marks a sub-division within a `@section:`, identified by an alphanumeric code (e.g. `@sub-section: A1 — Global Parent Grid Container`). Nests under the parent `@section:`.
- `@block:` explains a logical styling section, such as reset, layout, components, or responsive rules.
- `@selector:` explains which elements a CSS selector targets.
- `@theme:` explains the color, atmosphere, or identity role of a rule.
- `@layout:` explains the spatial role of a rule, such as alignment, grid, spacing, or positioning.
- `@component:` explains the visual function of a component, such as a button, card, header, or menu.

## JS
- `@block:` explains a logical behaviour or functionality block.
- `@mechanism:` identifies a numbered mechanism (MECANISM 01–09). Each mechanism is a self-contained unit of behaviour that can be referenced by its number across code, CSS, and the ship's journal.
- `@logic:` explains the internal flow of a function, condition, or transformation.
- `@event:` explains a listened-to or triggered event, such as `click`, `submit`, `scroll`, or `DOMContentLoaded`.
- `@state:` explains a UI or data state, such as active/inactive, open/closed, or loaded/unloaded.
- `@guard:` marks a guard clause — an early return that prevents code execution when prerequisites (such as missing DOM elements or incorrect viewport size) are not met.
- `@bridge:` explains the connection between JavaScript and HTML, CSS, or other data files.

## Cross-cutting (HTML, CSS, JS)
- `@pedagogy:` explains a concept for a novice reader — why this pattern exists, what it teaches, or how it connects to foundational knowledge. Used across HTML, CSS, and JS for consistent didactic voice.
- `@todo:` marks planned or incomplete work, linking to the ship's backlog.

## SVG and JSON
- I do not necessarily need separate micro-legends for `SVG` if its use in the project stays simple and limited.
- For `SVG`, I can add only a few contextual tags such as `@shape:`, `@color:`, or `@symbol:` when I treat it as a teaching object on its own.
- For `JSON`, comments are not accepted in standard JSON, so an internal micro-legend is usually not useful.
- If I want to explain JSON, I keep that explanation in a separate documentation file or use a format that allows comments, if the environment supports it.
