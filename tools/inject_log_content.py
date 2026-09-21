#!/usr/bin/env python3
"""Inject real content into log-text divs, replacing Lorem ipsum paragraphs in order.

Reads content from _content_*.json files and writes into the target HTML files,
replacing each Lorem-ipsum <p>...</p> inside <div class="log-text"> with the
Nth entry from the corresponding content array (in document order).
"""
import json
import re
import sys

REPO = "/home/iulia/GitHub/digital-odyssey"

# topic key -> (en_path, ro_path)
TARGETS = {
    "middlware": (f"{REPO}/en/backend/middlware-log.html", f"{REPO}/ro/backend/middlware-log.html"),
    "testing": (f"{REPO}/en/backend/testing-log.html", f"{REPO}/ro/backend/testing-log.html"),
    "documentation": (f"{REPO}/en/backend/documentation-log.html", f"{REPO}/ro/backend/documentation-log.html"),
    "performance": (f"{REPO}/en/backend/performance-log.html", f"{REPO}/ro/backend/performance-log.html"),
    "deployment": (f"{REPO}/en/backend/deployment-log.html", f"{REPO}/ro/backend/deployment-log.html"),
    "sql": (f"{REPO}/en/database/sql-log.html", f"{REPO}/ro/database/sql-log.html"),
    "nosql": (f"{REPO}/en/database/nosql-log.html", f"{REPO}/ro/database/nosql-log.html"),
    "uxfoundations": (f"{REPO}/en/ux/ux-foundations-log.html", f"{REPO}/ro/ux/ux-foundations-log.html"),
    "accessibility": (f"{REPO}/en/ux/accessibility-log.html", f"{REPO}/ro/ux/accessibility-log.html"),
    "git": (f"{REPO}/en/delivery/git-log.html", f"{REPO}/ro/delivery/git-log.html"),
    "github": (f"{REPO}/en/delivery/github-log.html", f"{REPO}/ro/delivery/github-log.html"),
    "deploymentpipeline": (f"{REPO}/en/delivery/deployment-pipeline-log.html", f"{REPO}/ro/delivery/deployment-pipeline-log.html"),
}

CONTENT_FILES = [
    f"{REPO}/_content_middlware_testing.json",
    f"{REPO}/_content_documentation_performance.json",
    f"{REPO}/_content_deployment_sql.json",
    f"{REPO}/_content_nosql_uxfoundations.json",
    f"{REPO}/_content_accessibility_git.json",
    f"{REPO}/_content_github_deploymentpipeline.json",
]

# Matches a full log-text div containing a single lorem ipsum paragraph:
# <div class="log-text">\n  <p>\n    Lorem ipsum ...\n  </p>\n</div>
LOG_TEXT_RE = re.compile(
    r'(<div class="log-text">\s*<p>\s*)(Lorem ipsum[^<]*?)(\s*</p>\s*</div>)',
    re.DOTALL,
)


def wrap_paragraph(text, indent="              "):
    # simple word-wrap to keep files readable, ~78 cols after indent
    words = text.split()
    lines = []
    cur = []
    cur_len = 0
    for w in words:
        if cur_len + len(w) + 1 > 78:
            lines.append(" ".join(cur))
            cur = [w]
            cur_len = len(w)
        else:
            cur.append(w)
            cur_len += len(w) + 1
    if cur:
        lines.append(" ".join(cur))
    return ("\n" + indent).join(lines)


def inject(path, entries):
    with open(path, encoding="utf-8") as f:
        html = f.read()

    count = [0]

    def repl(m):
        idx = count[0]
        count[0] += 1
        if idx >= len(entries):
            # no more entries available; leave as-is
            return m.group(0)
        new_text = wrap_paragraph(entries[idx])
        return f'{m.group(1)}{new_text}\n            {m.group(3).lstrip()}'

    new_html, n = LOG_TEXT_RE.subn(repl, html)
    replaced = min(count[0], len(entries))
    with open(path, "w", encoding="utf-8") as f:
        f.write(new_html)
    return count[0], replaced


def main():
    content = {}
    for cf in CONTENT_FILES:
        with open(cf, encoding="utf-8") as f:
            content.update(json.load(f))

    report = []
    for topic, (en_path, ro_path) in TARGETS.items():
        if topic not in content:
            report.append(f"MISSING content for topic={topic}")
            continue
        en_entries = content[topic].get("en", [])
        ro_entries = content[topic].get("ro", [])
        en_found, en_replaced = inject(en_path, en_entries)
        ro_found, ro_replaced = inject(ro_path, ro_entries)
        report.append(
            f"{topic}: EN found={en_found} replaced={en_replaced}/{len(en_entries)} | "
            f"RO found={ro_found} replaced={ro_replaced}/{len(ro_entries)}"
        )

    print("\n".join(report))


if __name__ == "__main__":
    main()
