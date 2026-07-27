# Legenda comentariilor

## Principiu general
Această legendă stabilește un vocabular comun pentru comentariile din întregul proiect. Scopul ei este să facă fișierele mai ușor de citit, de predat, de arhivat și de indexat.

## Etichete de bază
- `@block:` explică rolul unui bloc logic de cod.
- `@line:` explică o linie, un element sau o instrucțiune punctuală.
- `@reason:` explică de ce există acel cod, nu doar ce face.
- `@warning:` marchează capcane, limite, compatibilități sau greșeli frecvente.
- `@concept:` leagă codul de ideea estetică, poetică, narativă sau metodologică a proiectului.
- `@bridge:` creează o punte către alte fișiere, secțiuni, capitole sau sisteme din proiect.

## Principii de folosire
- Folosesc etichetele doar când aduc claritate reală.
- Nu etichetez fiecare propoziție în mod mecanic.
- Comentariile explică intenția, structura sau contextul, nu repetă inutil codul.
- Păstrez aceeași semnificație pentru aceeași etichetă în toate fișierele.

## HTML
- `@block:` explică un bloc structural HTML, de exemplu `<head>`, `<main>`, `<section>` sau `<footer>`.
- `@path:` explică o cale către un fișier legat, de exemplu `./favicon.svg`, `./style.css` sau `./script.js`.
- `@meta:` explică o informație de tip metadata, cum ar fi `charset`, `viewport`, `description` sau `theme-color`.
- `@structure:` explică rolul unui element în arhitectura documentului.
- `@theme:` explică rolul cromatic, atmosferic sau de identitate vizuală al unui element, clase sau atribut în context HTML.
- `@concept:` explică semnificația simbolică sau narativă a unei alegeri de structură sau conținut.

## CSS
- `@block:` explică o secțiune logică de stiluri, de exemplu reset, layout, componente sau responsive rules.
- `@selector:` explică ce elemente țintește un selector CSS.
- `@theme:` explică rolul cromatic, atmosferic sau identitar al unei reguli.
- `@layout:` explică rolul spațial al unei reguli, de exemplu aliniere, grid, spacing sau poziționare.
- `@component:` explică funcția vizuală a unei componente, cum ar fi un buton, card, header sau meniu.

## JS
- `@block:` explică un bloc logic de comportament sau funcționalitate.
- `@mechanism:` identifică un mecanism numerotat (MECANISM 01–09). Fiecare mecanism este o unitate de comportament autonomă care poate fi referită prin numărul ei în cod, CSS și jurnalul navei.
- `@logic:` explică fluxul intern al unei funcții, condiții sau transformări.
- `@event:` explică un eveniment ascultat sau declanșat, cum ar fi `click`, `submit`, `scroll` sau `DOMContentLoaded`.
- `@state:` explică o stare a interfeței sau a datelor, de exemplu activ/inactiv, deschis/închis, încărcat/neîncărcat.
- `@guard:` marchează o clauză de gardă — o ieșire timpurie care previne execuția codului atunci când premisele (cum ar fi elemente DOM lipsă sau dimensiune incorectă a viewport-ului) nu sunt îndeplinite.
- `@bridge:` explică legătura dintre JavaScript și HTML, CSS sau alte fișiere de date.

## Transversal (HTML, CSS, JS)
- `@pedagogy:` explică un concept pentru un cititor începător — de ce există acest model, ce predă sau cum se leagă de cunoștințele fundamentale. Folosit în HTML, CSS și JS pentru o voce didactică consistentă.
- `@todo:` marchează lucrări planificate sau incomplete, legând de backlog-ul navei.

## SVG și JSON
- Pentru `SVG`, nu am neapărat nevoie de micro-legende separate dacă folosirea lui în proiect rămâne simplă și limitată.
- Pentru `SVG`, pot adăuga doar câteva etichete contextuale, precum `@shape:`, `@color:` sau `@symbol:`, dacă îl tratez ca obiect didactic de sine stătător.
- Pentru `JSON`, comentariile nu sunt acceptate în JSON standard, deci o micro-legendă internă nu este de regulă utilă.
- Dacă vreau explicații pentru JSON, le păstrez într-un fișier separat de documentație sau folosesc un format care permite comentarii, dacă mediul îl acceptă.
