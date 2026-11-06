# Git și pull request-uri: cum ajunge munca în `main`

Un ghid scurt pentru începători, în două jumătăți. **Trimiterea** arată cum
ajunge o schimbare de pe laptop într-un pull request. **Primirea** arată cum
citește proprietara acel pull request, cum îl unește (merge) și cum face
ordine după aceea. Ambele jumătăți descriu ce face proiectul acesta azi, în
realitate. Jurnalul spune același ritual ca poveste (JURNAL ZIUA 36–38); pagina
aceasta e referința.

Interfața GitHub e în engleză, așa că textele de pe butoane și din pagini sunt
citate în engleză, cu traducerea alături.

Versiunea engleză: [`git-workflow-en.md`](./git-workflow-en.md)

## Singura regulă

**Nimic nu ajunge în `main` decât printr-un pull request, și numai Iulia îl
unește, cu mâna ei, pe GitHub.**

De ce atât de strict: fiecare push în `main` publică site-ul public.
`.github/workflows/deploy.yml` rulează `on: push` în `main`, iar un merge
*este* un push în `main` (vezi [`DEPLOY.md`](../DEPLOY.md)). `main` nu are
protecție de ramură pe GitHub, deci nimic tehnic nu oprește un push direct.
Regula se ține prin obicei, nu prin lacăt. La fel și verificările: verdele e
un bec de avertizare, nu o ușă încuiată.

## Cuvintele de care ai nevoie

| Cuvânt | Ce este |
|---|---|
| **commit** | O fotografie salvată a proiectului, cu un mesaj și un identificator (SHA-ul, de ex. `7324fd0`). |
| **ramură (branch)** | Un nume mobil care arată spre un commit. Crearea ei nu copiază niciun fișier. Munca se face pe ramură, iar `main` rămâne așa cum îl vede site-ul public. |
| **push** | Urcarea commit-urilor ramurii tale pe GitHub (remote-ul numit `origin`). |
| **pull request (PR)** | O cerere de a aduce commit-urile unei ramuri în alta, de obicei `main`, pe o pagină GitHub unde oameni și mașini se uită întâi la ea. PR-urile sunt o funcție GitHub; Git însuși nu are așa ceva. |
| **base / compare** | Base = unde merge munca (`main`). Compare = ramura din care vine. |
| **verificări (checks, CI)** | Programe mici pe care GitHub le rulează pe o mașină curată pentru fiecare PR. Aici, cei patru paznici din `tools/`. |
| **commit de merge** | Un commit cu doi părinți: `main` de dinainte și vârful ramurii. Așa intră un PR în `main` în proiectul acesta. |
| **nume de urmărire la distanță (remote-tracking)** | Memoria laptopului tău despre o ramură de pe GitHub, de ex. `origin/docs-git-workflow`. |

---

## Partea A — Trimiterea unei schimbări

### 1. Pornește dintr-un `main` curat și la zi

```bash
git status --porcelain   # nu afișează nimic când nu există muncă nesalvată; verifică asta întâi
git checkout main        # treci pe main (scriere mai nouă: git switch main)
git pull                 # adu main la zi cu GitHub înainte să faci o ramură din el
```

Dacă `git status --porcelain` afișează ceva, oprește-te și află ce este.
Nu pune deoparte (stash), nu reseta și nu șterge muncă pe care n-ai făcut-o tu.

### 2. Fă o ramură

```bash
git checkout -b docs-git-workflow   # creează ramura și treci pe ea (mai nou: git switch -c ...)
```

O ramură pentru fiecare reparație. Dă-i un nume care spune la ce folosește.

### 3. Schimbă, apoi rulează cele patru verificatoare

```bash
python3 tools/check-noopener.py    # fiecare link target="_blank" are rel="noopener noreferrer"
python3 tools/check-uc-banner.py   # paginile de jurnal goale sau de umplutură se declară „în construcție”
python3 tools/check-log-prose.py   # proza din jurnale arată numele de taguri ca vorbe, nu ca markup
python3 tools/check-parity.py      # en/ și ro/ rămân gemeni: cod, comutatoare, trimiteri la mecanisme
```

Toate patru trebuie să treacă. Sunt aceleași patru verificări pe care GitHub
le va rula pe PR. Dacă le rulezi întâi, afli vestea proastă pe laptopul tău,
nu în public. Dacă un verificator pică, repară munca. Nu slăbi niciodată
verificatorul.

### 4. Fă commit-ul, numind fiecare fișier

```bash
git add docs/git-workflow-en.md docs/git-workflow-ro.md            # pregătește (staging) exact aceste fișiere, pe nume
git commit -m "docs(git): ..." -- docs/git-workflow-en.md docs/git-workflow-ro.md   # commit doar pe aceste căi
```

Numește fișierele. `git add -A`, `git add .` și `git commit -a` mătură tot ce e
în dosar, inclusiv lucruri pe care n-ai vrut niciodată să le trimiți.

Mesajul urmează stilul casei (`docs/work-deontology-ro.md` §7):

- subiect `tip(zonă): ce s-a schimbat`, de ex. `fix(js): ...` sau `docs(git): ...`;
- un corp din liniuțe: ce s-a schimbat și de ce;
- un paragraf **Verified** (verificat): cum ai verificat;
- un ultim rând care numește punctul de audit sau de revizie la care răspunde.

### 5. Urcă ramura

```bash
git push -u origin docs-git-workflow   # urcă ramura; -u ține minte perechea, ca data viitoare să meargă un simplu `git push`
```

Urcă **ramura**, niciodată `main`.

### 6. Deschide pull request-ul

Pe GitHub, folosește banda galbenă **Compare & pull request** („compară și
cere unirea”) sau, din terminal:

```bash
gh pr create --base main --head docs-git-workflow   # deschide un PR: în main, din ramura aceasta; cere un titlu și o descriere
```

Verifică **base = `main`** și **compare = ramura ta**. Titlul folosește același
stil `tip(zonă): ...`. Descrierea spune ce s-a schimbat, de ce, cum a fost
verificat și orice trebuie să știe cea care unește (de exemplu
*„unește întâi #11”*).

### 7. Urmărește verificările

Pagina PR-ului arată patru verificări, câte una pentru fiecare paznic (numele
lor sunt în engleză, exact așa):

1. `target="_blank" carries rel="noopener noreferrer"`
2. `no log page shows filler or empty content undeclared`
3. `log prose shows tag names as words, not as markup`
4. `en/ and ro/ stay twins: code, toggles, mechanism references`

Fiecare e un program Python care **iese cu un cod diferit de zero** când
găsește o problemă, iar asta face verificarea roșie. Verde înseamnă că toți
paznicii au trecut. Roșu înseamnă: apasă **Details** (detalii), citește jurnalul
rulării și repară munca.

### 8. Răspunde la o revizie urcând pe aceeași ramură

Dacă recenzentul cere schimbări, fă commit-urile pe aceeași ramură și dă
`git push`. PR-ul se actualizează singur. Nu deschide unul nou.

---

## Partea B — Primirea și unirea (practica proprietarei)

### 1. Citește pagina PR-ului: lista în patru puncte

Înainte să apeși ceva, citește patru lucruri.

1. **Rândul de sub titlu.** Spune
   *„iuliacadar wants to merge N commits into `main` from `<ramură>`”*
   („vrea să unească N commit-uri în `main` din `<ramură>`”).
   Baza e `main`? E ramura la care te aștepți?
2. **Fila Conversation** (conversația). Citește descrierea. Jos de tot, caută
   **„All checks have passed”** (toate verificările au trecut) și **„This branch
   has no conflicts with the base branch”** (ramura nu are conflicte cu baza).
3. **Fila Files changed** (fișiere schimbate). Asta e fila care contează.
   Numărul de fișiere se potrivește cu ce a promis descrierea? Citește rândurile
   roșii (șterse) și verzi (adăugate). Bifează **Viewed** (văzut) pe fiecare
   fișier când l-ai terminat, ca să vezi ce a rămas necitit.
4. **Fila Commits.** Titlurile commit-urilor sunt în stilul casei,
   `tip(zonă): ce s-a schimbat`?

**Nu uni încă** dacă o verificare e roșie, dacă GitHub raportează conflicte,
dacă numărul de fișiere te surprinde sau dacă descrierea spune că alt PR
trebuie să intre primul.

### 2. De ce nu poți apăsa *Approve*

Echipajul de agenți lucrează prin contul GitHub al Iuliei, așa că GitHub o
trece pe ea ca **autoare a fiecărui PR**. GitHub nu lasă pe nimeni să-și aprobe
propriul PR, de aceea *Approve* (aprobă) nu îi este disponibil. E normal.
Revizia se face pe tablă (verdictul QA, ACCEPT sau REVISE) și în propria ta
lectură, cu lista de mai sus. GitHub arată *cine a trimis* un PR; tabla arată
*cine l-a construit*.

### 3. Unește cu *Create a merge commit*

1. Lângă butonul verde **Merge pull request**, deschide săgeata și alege
   **Create a merge commit** (creează un commit de merge). Nu *Squash and
   merge*, nu *Rebase and merge*.
2. GitHub deschide două câmpuri. Completează-le în stilul casei:
   - **Mesajul commit-ului:** `tip(zonă): merge … (#N)`. Înlocuiește mesajul
     implicit al GitHub, *„Merge pull request #N from …”*.
   - **Descrierea:** titlul PR-ului. Depozitul acesta o completează deja singur.
3. Apasă **Confirm merge** (confirmă unirea).

Exemple reale din `git log main`:

```text
fix(deploy): merge the deploy-status race fix and the honest deploy.yml comment (#6)
fix(i18n): merge Romanian note-save alerts (#7)
docs(backlog): merge #013's premise correction into BACKLOG-RO (#8)
```

De ce un commit de merge: păstrează fiecare commit al ramurii cu SHA-ul lui și
consemnează „asta a intrat ca un singur PR”. `git log --first-parent main` se
citește atunci câte un rând pe PR. *Squash* presează ramura într-un singur
commit nou, iar *rebase* copiază fiecare commit cu un SHA nou. Amândouă sunt
alegeri legitime în alte echipe, dar pierd identitatea commit-urilor mici și
fac pasul 6 de mai jos să refuze.

### 4. Șterge ramura pe GitHub

După unire, pagina PR-ului arată **Delete branch** (șterge ramura). Apasă-l.
Numele ramurii și-a făcut treaba, commit-urile sunt în siguranță în `main`, iar
pagina PR-ului păstrează un buton **Restore branch** (restaurează ramura).
Depozitul acesta nu șterge singur ramurile unite, deci pasul e manual.

### 5. Publicarea care urmează

Unirea e un push în `main`, deci fluxul **Deploy to GitHub Pages** pornește
singur. De obicei durează un minut sau două (mai mult când GitHub e aglomerat).
Urmărește-l în fila Actions sau cu `make deploy-status` (vezi `DEPLOY.md`).

**O publicare *cancelled* (anulată) e normală când unești mai multe PR-uri unul
după altul.** Rulează o singură publicare odată și cel mult una așteaptă în
spatele ei. Când sosește o unire mai nouă cât timp o rulare mai veche încă
așteaptă, GitHub o anulează pe cea care așteaptă, pentru că commit-ul mai nou
conține deja tot ce ar fi publicat cea veche. Asta s-a întâmplat pe
2026-11-06: #6 s-a publicat, rularea lui #7 a fost anulată cât aștepta, iar rularea lui #8
le-a publicat pe amândouă. **Anulat nu înseamnă eșuat.** Uită-te la *ultima*
rulare și verifică dacă îți conține commit-ul.

### 6. Curățenia locală: patru comenzi

```bash
git checkout main          # coboară de pe ramura unită; nu poți șterge ramura pe care stai
git pull                   # adu de pe GitHub, inclusiv commit-ul de merge, și mută main-ul tău înainte, la fel
git branch -d <ramură>     # șterge numele local al ramurii; -d e ștergerea sigură și refuză dacă s-ar pierde muncă
git fetch --prune          # uită numele origin/<ramură> ale ramurilor pe care GitHub le-a șters
```

Ai unit mai multe PR-uri? Un singur `git checkout main` și un singur `git pull`,
apoi câte un `git branch -d` pentru fiecare ramură (sau mai multe nume pe același
rând), apoi un singur `git fetch --prune`.

La ce folosește fiecare:

- `git pull` înseamnă `git fetch` (descărcare) plus o unire în `main`-ul tău.
  Aici e un *fast-forward* (avans rapid): `main`-ul tău n-avea nimic al lui,
  așa că Git doar mută numele înainte.
- `git branch -d` șterge doar **numele** de pe laptopul tău. Commit-urile rămân
  în `main`.
- `git fetch --prune` șterge *fantomele*. Fără el, `git branch -a` continuă să
  arate `origin/<ramură>` pentru ramuri șterse de mult de GitHub. Un simplu
  `git pull` nu face curățenia asta.

### 7. „error: the branch '…' is not fully merged”

`git branch -d` spune asta („ramura nu e unită complet”) când ramura are
commit-uri pe care `main`-ul tău local nu le are. Ștergerea numelui le-ar putea
pierde, așa că Git refuză. Motive obișnuite:

- n-ai rulat încă `git pull`, deci `main`-ul tău nu are unirea;
- PR-ul nu e unit deloc (uită-te pe pagina lui);
- cineva a mai urcat un commit pe ramură după unire;
- PR-ul a fost unit cu *Squash* sau *Rebase*, deci `main` are copii cu SHA-uri
  noi, nu commit-urile ramurii.

Vezi ce lipsește cu:

```bash
git log --oneline main..<ramură>   # arată commit-urile care sunt pe <ramură>, dar nu și pe main
```

Dacă lista e goală după un `git pull`, sau ai verificat fiecare commit și chiar
nu-ți mai trebuie, `git branch -D <ramură>` (D mare) forțează ștergerea.
Folosește-l doar după verificare. E singura comandă de aici care poate arunca
muncă.

### 8. Greșeala clasică: o comandă fără `git`

```bash
fetch --prune       # GREȘIT: lipsește `git`, deci shell-ul caută un program numit `fetch`
git fetch --prune   # corect: fiecare comandă git începe cu `git`
```

Pe Ubuntu, o comandă care lipsește poate aduce o ofertă „de ajutor”:
*„Command 'fetch' not found, but can be installed with: sudo snap install
fetch”* („comanda nu există, dar poate fi instalată”). **Nu o accepta.** E alt
program, care doar poartă același nume și n-are legătură cu Git. „Command not
found, but can be installed” înseamnă aproape mereu o greșeală de tastare, nu
o unealtă lipsă. (S-a întâmplat pe 2026-11-05; jurnalul îl numește pe rezultat
*Clandestinul*. Dacă a fost deja instalat, `sudo snap remove fetch` îl scoate.)

---

## Fișa de lângă ecluză

**Trimiterea:** `main` proaspăt → `git checkout -b <ramură>` → schimbarea →
cele patru verificatoare → `git add <căi>` +
`git commit -m "tip(zonă): ..." -- <căi>` → `git push -u origin <ramură>` → deschide PR-ul (base `main`) →
verificări verzi.

**Primirea:** citește rândul de sub titlu, fila Conversation, Files changed,
Commits → *Create a merge commit*, `tip(zonă): merge … (#N)`, titlul PR-ului ca
descriere → **Delete branch** → `git checkout main`, `git pull`,
`git branch -d <ramură>`, `git fetch --prune`.
