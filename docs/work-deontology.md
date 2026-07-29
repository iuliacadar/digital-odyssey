# Work Deontology — Digital Odyssey

Internal principles for developing and maintaining this project.

---

## 1. Dual-Language Architecture

The project is built on two parallel language fluxes: English (`en/`) and Romanian (`ro/`). Every page, component, and annotation exists in both languages. This may deviate from canonical coding conventions, but it is a deliberate design choice — the project serves as a bilingual learning vessel, not a monolingual production app.

## 2. Didactic Purpose of All Content

Every file in this project is first and foremost a teaching instrument. Code is written not only to execute correctly, but to be read and understood by a novice crew member or an enthusiastic student. This didactic motivation governs all decisions about commenting, structure, and redundancy.

## 3. English-First Creation, Then Romanian Translation

When a new file is created:
1. Perfect it first in the English version, with complete, informative, didactic `@tag` comments (as defined in the legend files under `docs/`).
2. Clone the perfected file into `ro/` and translate all content-specific text (titles, descriptions, navigation labels, visible text) to Romanian.
3. `@tag` comments that explain HTML concepts remain in English — they teach the language of the web.

## 4. Comprehensive Commenting Standard

Every block and every line of code — even when patterns repeat — must be carefully and comprehensively commented. Redundancy is acceptable and intentional: each occurrence is an opportunity for learning. A novice should be able to understand not just what the code does, but why it is written that way and what semantic role each element plays.

## 5. `@tag` Annotation System

All didactic comments use a structured tag system defined in the legend files (`docs/legend-*.md`). Every `@tag` prefixes a specific pedagogical purpose:

| Tag | Purpose |
|---|---|
| `@bridge` | Cross-reference to another file or resource |
| `@reason` | Explains *why* a technique or pattern is used |
| `@block` | Identifies a structural block and its role in the ship metaphor |
| `@meta` | Documents metadata elements and their configuration |
| `@path` | Identifies resource links and their navigation purpose |
| `@theme` | Explains visual/styling choices and their narrative meaning |
| `@structure` | Documents layout decisions and their impact on rendering |
| `@warning` | Flags brittle code, browser quirks, or non-obvious pitfalls |
| `@concept` | Expands on a broader idea that spans multiple blocks |

Every `@tag` must be followed by a colon and a clear, self-contained explanation. Tags appear in all code file types, each using its native comment syntax:

- HTML: `<!-- @tag: ... -->`
- CSS: `/* @tag: ... */`
- JavaScript: `// @tag: ...`

## 6. CSS Module Structure Discipline

The stylesheet (`style.css`) is organized into 30 numbered modules + 2 utility modules (00.1 for `@keyframes`, 00.2 for `@media`), as declared in the module index at the top of the file. Each module governs one component or concern.

When adding or modifying a CSS rule:
1. Find the correct module in the index (e.g., Module 14 for `.sector-announcement`).
2. If the change is inside the `@media` breakpoint (00.2), locate the corresponding sub-section (B1–B4) that matches the component's function.
3. Place the rule there — never append blindly to the end of a block or outside the proper section.
4. Preserve the existing annotation style (`@layout:`, `@theme:`, `@component:`, etc.).

## 7. Commit Message Conventions

Commit messages follow the format: `type(scope): message`

- **type**: `feat`, `fix`, `docs`, `refactor`, `style`, `perf`, `chore`
- **scope**: The affected area — `css`, `js`, `html`, `en`, `ro`, `docs`, `all`
- **message**: Imperative, concise, explaining what and why

Examples:
- `fix(css): remove negative margin on .sector-announcement at 768px breakpoint`
- `docs: add semantic-field-manual-en.md and semantic-field-manual-ro.md`
- `feat(ro): clone+translate perfected log pages to Romanian`

The commit body may contain bullet-point details. The type/scope must accurately reflect the actual content — e.g., `docs:` for files in `docs/`, `fix(en):` for English page fixes, `feat(ro):` for Romanian additions.

## 8. Documentation Ecosystem

The project maintains several document types, each serving a distinct purpose:

| Document | Purpose |
|---|---|
| `README.md` | Project-level orientation — what this is, how to navigate it |
| `*.md` journals / backlogs | Development chronicle — what was done, what remains, design decisions |
| `docs/semantic-field-manual-*.md` | HTML reference — every tag used, with its semantic role and narrative meaning |
| `docs/work-deontology.md` | (this file) Work principles — how we build, why we build that way |

Each document answers a different question: *What is this?*, *What happened?*, *What does this tag mean?*, and *How do we work?*.

---

*These principles are living — they evolve as the project grows. Update this file when a new convention becomes permanent.*
