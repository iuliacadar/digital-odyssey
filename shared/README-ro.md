# shared/ — Resurse partajate de ambele volume lingvistice

Resurse și date structurate destinate **ambelor** volume (`en/` și `ro/`).
Nimic de aici nu este specific unei limbi; orice lucru care diferă per limbă
stă în propriul folder al volumului respectiv. Păstrarea stratului partajat separat
previne duplicarea și menține fiecare volum autosuficient.

```
shared/
├── README.md                        # Această versiune, în engleză
├── README-ro.md                     # Această versiune, în română
├── assets/                          # Resurse binare și vizuale
│   ├── icons/                       # Set de iconițe SVG pentru elementele HUD
│   ├── images/                      # Imagini raster folosite în jurnale
│   │   └── prt-sc/                  # Capturi de ecran pe capitol (prt-sc = print-screen)
│   │       ├── html/                #   Capturi din capitolul HTML (ex. charset1024bytes_rule.png)
│   │       └── delivery/            #   Capturi din capitolul Delivery (ex. istoric git)
│   └── textures/                    # Texturi pentru fundaluri cinematice / efecte CRT
└── data/                            # Date structurate partajate, citite de JS
    ├── bibliography-links.json      # Lista de referințe partajată (index ↔ bibliografie)
    ├── navigation-map.json          # Harta site-ului / structura de navigație partajată
    └── volume-status.json           # Statusul de completare / progres per volum
```

## Convenții

- Referiți o resursă partajată dintr-un volum ca `../shared/<cale>`.
- Adăugați imagini pentru o pagină de jurnal sub `assets/images/prt-sc/<capitol>/`
  pentru ca capturile să rămână grupate pe temă.
- Fișierele JSON din `data/` sunt în prezent placeholder-uri structurale; sunt
  completate atunci când paginile la care fac referire capătă conținut real.

Versiunea engleză: [`shared/README.md`](./README.md)
