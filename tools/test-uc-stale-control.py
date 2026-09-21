#!/usr/bin/env python3
"""Negative control for the STALE verdict: inject a banner onto a WRITTEN deck.

@reason: The gate now claims it fails in both directions. That claim is worth
  exactly as much as a demonstration. This puts a banner back onto a deck whose
  prose is real and finished — the precise regression that shipped 22 lying
  notices — runs the gate, and requires it to come back red. The page is
  restored afterwards either way.
"""
import importlib.util
import pathlib
import subprocess
import sys

spec = importlib.util.spec_from_file_location("uc", "tools/add-uc-banner.py")
uc = importlib.util.module_from_spec(spec)
spec.loader.exec_module(uc)

TARGET = pathlib.Path("en/delivery/git-log.html")
original = uc.read_source(TARGET)

assert uc.MARKER not in original, "pick a page with no banner for this test"
assert "lorem" not in original.lower(), "pick a page whose prose is real"

try:
    injected = uc.insert(original, "en", "partial")
    uc.write_source(TARGET, injected)

    result = subprocess.run(
        [sys.executable, "tools/check-uc-banner.py"], capture_output=True, text=True
    )
    caught = result.returncode != 0 and "STALE" in result.stdout

    print("Injected an Under Construction banner onto a fully written deck:")
    print(f"   {TARGET}")
    print()
    for line in result.stdout.splitlines():
        if "STALE" in line or "FAIL" in line or "prune" in line:
            print("   " + line.strip())
    print()
    print(f"gate exit code: {result.returncode}")
finally:
    uc.write_source(TARGET, original)
    restored = uc.read_source(TARGET) == original
    print(f"page restored: {restored}")

print()
print("CONTROL PASSED — the gate rejects a banner on finished prose."
      if caught else
      "CONTROL FAILED — the gate accepted a false notice.")
sys.exit(0 if caught else 1)
