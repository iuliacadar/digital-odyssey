# docs/ — The Reference Shelf

The project's bilingual methodology and reference material. Everything here is
written in both English and Romanian; each document is a pair, never a single
file. The root of each pair is the English version, the `-ro.md` sibling is the
Romanian translation.

## Documents

| Document | What it holds | Files |
|---|---|---|
| Comment legend | The `@tag` annotation system used in HTML/CSS/JS code (`@block`, `@group`, `@meta`, `@reason`, `@bridge`, ...) | `legend-en.md` / `legend-ro.md` |
| Semantic field manual | The project's shared terminology and how terms map across the narrative and technical layers | `semantic-field-manual-en.md` / `semantic-field-manual-ro.md` |
| Work deontology | The rules of the voyage — commit conventions (rule #7), the DAY 22 permanent construction log (rule #9), scope discipline | `work-deontology.md` / `work-deontology-ro.md` |
| Notes | The captain's working notes, one per-source sheet per chapter; raw material for the `*-log.html` pages | `notes/` (see its own README) |

## Conventions

- Reference a document from the project root or a volume as `docs/<file>`.
- Every new reference document is added as an EN/RO pair, translated in full.
- Keep the root `README.md` structure tree in sync when a document is added or renamed.

Romanian version: [`docs/README-ro.md`](./README-ro.md)
