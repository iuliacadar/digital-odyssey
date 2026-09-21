// fixture: JS-constructed anchors
const good = document.createElement("a");
good.href = "https://example.com";
good.target = "_blank";
good.rel = "noopener noreferrer"; // complete — must NOT be reported

const bad = document.createElement("a");
bad.href = "https://example.com";
bad.target = "_blank"; // no rel at all — MUST be reported

const half = document.createElement("a");
half.target = "_blank";
half.rel = "noopener"; // incomplete — MUST be reported
