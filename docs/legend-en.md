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

## CSS
- `@block:` explains a logical styling section, such as reset, layout, components, or responsive rules.
- `@selector:` explains which elements a CSS selector targets.
- `@theme:` explains the color, atmosphere, or identity role of a rule.
- `@layout:` explains the spatial role of a rule, such as alignment, grid, spacing, or positioning.
- `@component:` explains the visual function of a component, such as a button, card, header, or menu.

## JS
- `@block:` explains a logical behavior or functionality block.
- `@logic:` explains the internal flow of a function, condition, or transformation.
- `@event:` explains a listened-to or triggered event, such as `click`, `submit`, `scroll`, or `DOMContentLoaded`.
- `@state:` explains a UI or data state, such as active/inactive, open/closed, or loaded/unloaded.
- `@bridge:` explains the connection between JavaScript and HTML, CSS, or other data files.

## SVG and JSON
- I do not necessarily need separate micro-legends for `SVG` if its use in the project stays simple and limited.
- For `SVG`, I can add only a few contextual tags such as `@shape:`, `@color:`, or `@symbol:` when I treat it as a teaching object on its own.
- For `JSON`, comments are not accepted in standard JSON, so an internal micro-legend is usually not useful.
- If I want to explain JSON, I keep that explanation in a separate documentation file or use a format that allows comments, if the environment supports it.
