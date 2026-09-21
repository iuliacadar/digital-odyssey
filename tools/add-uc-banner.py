#!/usr/bin/env python3
#  ==========================================================================
#  ADD-UC-BANNER — the ship's honesty officer
#  ==========================================================================
#  @reason: A log page whose entries are still "Lorem ipsum dolor sit amet"
#    looks finished. The layout is complete, the typography is confident, the
#    paragraphs are the right length. A visitor reads it and concludes the
#    ship's crew writes nonsense. Placeholder text that is not LABELLED as
#    placeholder text is a silent lie told by the page.
#
#  @concept: This script finds every log page under en/ and ro/ that still
#    contains filler prose, and inserts an "Under Construction" banner
#    immediately after the deck's category header — before the first sector
#    gate, before the first entry, where it cannot be missed.
#
#  @structure: Two wordings are emitted, chosen per page:
#      - "full"    — every log entry on the deck is still filler
#      - "partial" — the deck is partly written; only some entries are filler
#    Telling a reader "nothing here is real" on a page that is 90% written
#    would be its own small dishonesty, so the script counts before it speaks.
#
#  @bridge: Styling lives in en/style.css and ro/style.css, Module 32 (Under
#    Construction Banner), with the narrow-deck metrics in Module 00.2,
#    sub-section B6.
#
#  Usage:
#      python3 tools/add-uc-banner.py --check    # report only, exit 1 if gaps
#      python3 tools/add-uc-banner.py --apply    # write the banners in
#
#  The script is idempotent: a page that already carries the banner is left
#  untouched, so it can be re-run after new log pages are generated.
#  ==========================================================================

import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

#  @reason: Only real log decks are policed. The four flagship pages (index,
#    bibliography, transmission, recursive-blueprint, vault) are finished and
#    carry no filler; markdown journals quote old markup as history.
GLOBS = ("en/**/*-log.html", "ro/**/*-log.html")

#  @warning: The scan must ignore HTML comments. This project's comments are
#    didactic essays, and one of them may legitimately discuss the word
#    "lorem" while the rendered page contains none. What the VISITOR sees is
#    the only thing that counts, so comments are stripped before the test.
COMMENT = re.compile(r"<!--.*?-->", re.S)
LOREM = re.compile(r"lorem", re.I)

#  @structure: Each log entry is an <article class="log-entry">. Counting how
#    many of those contain filler, against how many exist, decides the wording.
ARTICLE = re.compile(r'<article[^>]*class="[^"]*\blog-entry\b[^"]*"[^>]*>(.*?)</article>', re.S)

#  @structure: The insertion point is the close of the deck's category header.
#    Every log page opens its content zone with exactly one
#    <header id="top-deck" class="category-header"> ... </header>.
HEADER_OPEN = re.compile(r'<header[^>]*class="[^"]*\bcategory-header\b[^"]*"[^>]*>')

MARKER = "under-construction"


#  --------------------------------------------------------------------------
#  NEWLINE-PRESERVING FILE I/O
#  --------------------------------------------------------------------------
#  @warning: newline="" is not decoration. Without it, Python's universal
#    newline translation converts every CRLF and bare CR in the source to LF
#    on READ, and there is no record left of what the file originally used.
#    Writing that back rewrites every line in the file. Four RO log pages in
#    this repository are stored with mixed terminators, and that is exactly
#    how a ten-line banner insertion became an eleven-hundred-line diff.
#  @reason: A diff should show what changed. A tool that rewrites lines it did
#    not touch is lying about its own footprint, and it costs the next reviewer
#    their time and the project its history.
def read_source(path):
    with open(path, "r", encoding="utf-8", newline="") as handle:
        return handle.read()


def write_source(path, text):
    with open(path, "w", encoding="utf-8", newline="") as handle:
        handle.write(text)


#  --------------------------------------------------------------------------
#  THE BANNER MARKUP
#  --------------------------------------------------------------------------
#  @structure: [aside] is the correct element. The notice is tangentially
#    related to the log it sits above, and as a landmark with an accessible
#    name a screen-reader user can jump straight to it — or skip past it —
#    instead of wading through it on every visit.
#
#  @warning: The hazard glyph carries aria-hidden="true". It duplicates the
#    words printed beside it; announcing "construction sign, UNDER
#    CONSTRUCTION" would be noise, not information. The MEANING is in the
#    text, never in the glyph and never in the colour.

EN_COMMENT = """        <!-- @block: UNDER CONSTRUCTION BANNER — THE SCAFFOLDING BEACON
          This deck is not finished. Rather than let a visitor read filler
          prose and mistake it for the ship's log, the state is declared
          openly, at the top, before the first sector gate.
          @reason:
            Placeholder text that is not labelled as placeholder text is a
            silent lie: the page looks complete and the paragraphs look like
            content. This banner turns that silent failure into an honest,
            visible status the reader can act on.
          @concept:
            The notice never relies on colour alone. It carries three
            independent channels — the hazard glyph, the literal words
            "Under Construction", and the explanatory sentence beneath. A
            reader with any form of colour blindness, or one using a forced-
            colours or reader mode, loses nothing.
          @structure:
            [aside] marks content set apart from the surrounding log. With
            aria-label it becomes a named landmark, so assistive technology
            can reach it directly or skip it entirely.
          @warning:
            The glyph carries aria-hidden="true" because it duplicates the
            adjacent words. Announcing it would add noise, not meaning.
          @bridge:
            Styling lives in en/style.css, Module 32 — Under Construction
            Banner. The narrow-deck metrics live in Module 00.2, B6.
        -->"""

RO_COMMENT = """        <!-- @block: BANNERUL „ÎN CONSTRUCȚIE" — FARUL DE SCHELĂRIE
          Această punte nu este terminată. În loc să lăsăm un vizitator să
          citească proză de umplutură și să o confunde cu jurnalul navei,
          starea este declarată deschis, în capul paginii, înaintea primei
          porți de sector.
          @reason:
            Textul de umplutură care nu este etichetat drept text de umplutură
            este o minciună tăcută: pagina pare completă, iar paragrafele par
            conținut. Acest banner transformă acel eșec tăcut într-o stare
            onestă, vizibilă, pe care cititorul o poate folosi.
          @concept:
            Notificarea nu se bazează niciodată doar pe culoare. Poartă trei
            canale independente — glifa de pericol, cuvintele literale
            „În Construcție" și propoziția explicativă de dedesubt. Un cititor
            cu orice formă de daltonism sau care folosește un mod cu contrast
            forțat ori un mod de lectură nu pierde nimic.
          @structure:
            [aside] marchează conținut pus deoparte față de jurnalul din jur.
            Cu aria-label devine un reper denumit, astfel încât tehnologia
            asistivă îl poate atinge direct sau îl poate sări complet.
          @warning:
            Glifa poartă aria-hidden=\"true\" pentru că duplică cuvintele
            alăturate. Anunțarea ei ar adăuga zgomot, nu sens.
          @bridge:
            Stilizarea trăiește în ro/style.css, Modulul 32 — Bannerul
            „În Construcție". Metricile pentru punțile înguste trăiesc în
            Modulul 00.2, B6.
        -->"""

EN_PROSE = {
    "full": (
        "This deck is still being built. Every log entry below is placeholder\n"
        "            text — the structure is in place, but the writing has not been\n"
        "            done yet. Nothing here is real content. The finished decks are\n"
        "            listed on the <a href=\"../index.html\">main bridge</a>."
    ),
    "partial": (
        "This deck is still being built. Some log entries below are placeholder\n"
        "            text rather than written content — where the text reads\n"
        "            &ldquo;Lorem ipsum&rdquo;, that entry has not been authored yet.\n"
        "            The finished decks are listed on the\n"
        "            <a href=\"../index.html\">main bridge</a>."
    ),
}

RO_PROSE = {
    "full": (
        "Această punte este încă în construcție. Fiecare intrare de jurnal de\n"
        "            mai jos este text de umplutură — structura există, dar scrierea\n"
        "            nu a fost încă făcută. Nimic de aici nu este conținut real.\n"
        "            Punțile terminate sunt listate pe\n"
        "            <a href=\"../index.html\">puntea de comandă</a>."
    ),
    "partial": (
        "Această punte este încă în construcție. Unele intrări de jurnal de mai\n"
        "            jos sunt text de umplutură în locul conținutului scris — acolo\n"
        "            unde textul spune &bdquo;Lorem ipsum&rdquo;, acea intrare nu a\n"
        "            fost încă redactată. Punțile terminate sunt listate pe\n"
        "            <a href=\"../index.html\">puntea de comandă</a>."
    ),
}

LOCALE = {
    "en": {
        "comment": EN_COMMENT,
        "aria": "Under construction notice",
        "label": "Under Construction",
        "prose": EN_PROSE,
    },
    "ro": {
        "comment": RO_COMMENT,
        "aria": "Notificare: secțiune în construcție",
        "label": "În Construcție",
        "prose": RO_PROSE,
    },
}


def banner(lang, variant):
    """Build the full banner block — didactic comment plus markup."""
    loc = LOCALE[lang]
    return (
        f"{loc['comment']}\n"
        f'        <aside class="under-construction" aria-label="{loc["aria"]}">\n'
        f'          <p class="uc-label">\n'
        f'            <span class="uc-icon" aria-hidden="true">&#128679;</span>\n'
        f"            {loc['label']}\n"
        f"          </p>\n"
        f"          <p>\n"
        f"            {loc['prose'][variant]}\n"
        f"          </p>\n"
        f"        </aside>\n"
    )


def visible_text(html):
    """@reason: Strip comments first — the didactic essays in this codebase
    discuss placeholder text on purpose. Only what the visitor SEES counts."""
    return COMMENT.sub("", html)


def classify(path):
    """Return (needs_banner, variant, filler_entries, total_entries)."""
    raw = read_source(path)
    shown = visible_text(raw)

    if not LOREM.search(shown):
        return False, None, 0, 0

    bodies = ARTICLE.findall(shown)
    total = len(bodies)
    filler = sum(1 for body in bodies if LOREM.search(body))

    #  @concept: "full" is reserved for a deck where every entry is filler.
    #    A deck with even one written entry gets the softer, truer wording.
    variant = "full" if total and filler == total else "partial"
    return True, variant, filler, total


def insert(raw, lang, variant):
    """Place the banner immediately after the category header closes."""
    opening = HEADER_OPEN.search(raw)
    if not opening:
        return None
    close = raw.find("</header>", opening.end())
    if close == -1:
        return None
    cut = close + len("</header>")

    #  @structure: The generated pages run "</header>        <!-- ===== SECTOR"
    #    on one physical line; the hand-written ones put </header> alone on its
    #    line. Normalising to a newline before the banner keeps both readable.
    #
    #  @warning: NEWLINE INHERITANCE. Four RO log pages are stored with mixed
    #    CRLF/CR/LF terminators. An earlier version of this script read and
    #    wrote in text mode, which silently rewrote every terminator to LF and
    #    turned a ten-line insertion into an eleven-hundred-line diff — the
    #    real change buried under a full-file rewrite in review and in
    #    `git log -p`. Files are now read and written with newline="" (see
    #    read_source/write_source), so the banner must carry the SAME
    #    terminator the surrounding file uses rather than a hardcoded "\n".
    term = "\r\n" if "\r\n" in raw[:4096] else ("\r" if "\r" in raw[:4096] else "\n")
    block = banner(lang, variant).replace("\n", term)

    return raw[:cut] + term + term + block + term + raw[cut:].lstrip("\r\n")


def main():
    apply = "--apply" in sys.argv
    if not apply and "--check" not in sys.argv:
        print("usage: add-uc-banner.py [--check | --apply]")
        return 2

    needs, already, written, failed = [], [], [], []

    for glob in GLOBS:
        for path in sorted(ROOT.glob(glob)):
            rel = path.relative_to(ROOT)
            lang = rel.parts[0]
            raw = read_source(path)
            has_banner = MARKER in raw
            wants, variant, filler, total = classify(path)

            if not wants:
                continue
            if has_banner:
                already.append(rel)
                continue

            needs.append((rel, variant, filler, total))
            if apply:
                updated = insert(raw, lang, variant)
                if updated is None:
                    failed.append(rel)
                    continue
                write_source(path, updated)
                written.append(rel)

    for rel, variant, filler, total in needs:
        print(f"  {rel}  [{variant}]  {filler}/{total} entries are filler")

    print()
    print(f"already banner-ed: {len(already)}")
    if apply:
        print(f"banners written:   {len(written)}")
        if failed:
            print(f"FAILED (no category-header found): {len(failed)}")
            for rel in failed:
                print(f"  {rel}")
            return 1
        return 0

    if needs:
        print(f"FAIL — {len(needs)} log page(s) show filler with no Under Construction banner")
        return 1
    print("OK — every log page with filler content carries an Under Construction banner.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
