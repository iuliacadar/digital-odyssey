# shared/ — Resources shared by both language volumes

Assets and structured data meant to be used by **both** volumes (`en/` and `ro/`).
Nothing here is language-specific; anything that differs per language lives in that
volume's own folder. Keeping the shared layer separate prevents duplication and
keeps each volume self-contained.

```
shared/
├── README.md
├── assets/                        # Binary and visual resources
│   ├── icons/                     # SVG / icon set for HUD elements
│   ├── images/                    # Raster images used in the journals
│   │   └── prt-sc/                # Screenshots by chapter (prt-sc = print-screen)
│   │       ├── html/              #   HTML chapter captures (e.g. charset1024bytes_rule.png)
│   │       └── delivery/          #   Delivery chapter captures (e.g. git history)
│   └── textures/                  # Textures for cinematic backgrounds / CRT effects
└── data/                          # Machine-readable shared data, read by JS
    ├── bibliography-links.json    # Shared reference list (index ↔ bibliography)
    ├── navigation-map.json        # Site map / nav structure shared across volumes
    └── volume-status.json         # Completion / progress status per volume
```

## Conventions

- Reference a shared resource from a volume as `../shared/<path>`.
- Add images for a journal page under `assets/images/prt-sc/<chapter>/` so captures
  stay grouped by topic.
- The JSON files under `data/` are currently structural placeholders; they are filled
  when the pages they reference gain real content.