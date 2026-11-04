# D::0dy55ey — notes for AI assistants

Static bilingual (EN/RO) site on GitHub Pages. Plain HTML, CSS and JavaScript, no build step.
Python checkers in `tools/`, CI in `.github/workflows/`.

## Deliberate decisions — do not "fix" these

1. **The long teaching comments are intentional.** They are the project's learning method
   (recursive learning), and they are part of what the site shows: `recursive-blueprint.html`
   fetches the source files and displays them, comments included, as raw text.
   Never strip, shorten, or "declutter" them.
   Follow the tag vocabulary in `docs/legend-en.md`. Do flag comments that are wrong,
   stale, point at the wrong mechanism/module, or merely restate the line (the legend
   itself rules those out).
2. **`en/` and `ro/` are deliberate parallel copies.** Do not merge them into shared code.
   Any code change in one volume must be mirrored in the other; only comment and content
   language may differ. With comments removed, the code in both volumes should be identical.

## Working rules

- Read `docs/legend-en.md` before writing comments, and match the existing voice.
- Mirror every change across `en/` and `ro/` in the same commit, and update both
  `BACKLOG-EN.md` and `BACKLOG-RO.md` together.
- Run `python3 tools/check-noopener.py` and `python3 tools/check-uc-banner.py` before committing.
