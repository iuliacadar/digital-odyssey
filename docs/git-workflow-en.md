# Git and pull requests: how work reaches `main`

A short guide for a beginner, in two halves. **Sending** is how a change
travels from your laptop to a pull request. **Receiving** is how the owner
reads that pull request, merges it and tidies up afterwards. Both halves
describe what this project actually does today. The journal tells the same
ritual as a story (JOURNAL DAY 36–38); this page is the reference.

Romanian version: [`git-workflow-ro.md`](./git-workflow-ro.md)

## The one rule

**Nothing reaches `main` except through a pull request, and only Iulia merges
it, by hand, on GitHub.**

Why so strict: every push to `main` publishes the public site.
`.github/workflows/deploy.yml` runs `on: push` to `main`, and a merge *is* a
push to `main` (see [`DEPLOY.md`](../DEPLOY.md)). `main` has no branch
protection on GitHub, so nothing technical stops a direct push. The rule is
kept by habit, not by a lock. The same goes for the checks: green is a
warning light, not a locked door.

## Words you need

| Word | What it is |
|---|---|
| **commit** | A saved snapshot of the project, with a message and an id (the SHA, e.g. `7324fd0`). |
| **branch** | A movable name that points at a commit. Making one copies no files. Your work happens on the branch, and `main` stays as the public site sees it. |
| **push** | Upload your branch's commits to GitHub (the remote called `origin`). |
| **pull request (PR)** | A request to bring one branch's commits into another, usually `main`, on a GitHub page where people and machines look at it first. PRs are a GitHub feature; Git itself has none. |
| **base / compare** | Base = where the work goes (`main`). Compare = the branch it comes from. |
| **checks (CI)** | Small programs GitHub runs on a fresh machine for every PR. Here, the four guards in `tools/`. |
| **merge commit** | A commit with two parents: `main` before, and the tip of the branch. It is how a PR enters `main` in this project. |
| **remote-tracking name** | Your laptop's memory of a branch on GitHub, e.g. `origin/docs-git-workflow`. |

---

## Part A — Sending a change

### 1. Start from a clean, up-to-date `main`

```bash
git status --porcelain   # prints nothing when there is no unsaved work; check this first
git checkout main        # stand on main (newer spelling: git switch main)
git pull                 # bring main up to date with GitHub before you branch from it
```

If `git status --porcelain` prints anything, stop and find out what it is.
Don't stash, reset or delete work you didn't make.

### 2. Make a branch

```bash
git checkout -b docs-git-workflow   # create the branch and stand on it (newer: git switch -c ...)
```

One branch per fix. Give it a name that says what it is for.

### 3. Change, then run the four checkers

```bash
python3 tools/check-noopener.py    # every target="_blank" link carries rel="noopener noreferrer"
python3 tools/check-uc-banner.py   # filler or empty log pages declare themselves under construction
python3 tools/check-log-prose.py   # log prose shows tag names as words, not as markup
python3 tools/check-parity.py      # en/ and ro/ stay twins: code, toggles, mechanism references
```

All four must pass. These are the same four checks GitHub will run on the PR.
Running them first means you hear the bad news on your own laptop, not in
public. If a checker fails, fix the work. Never weaken the checker.

### 4. Commit, naming every file

```bash
git add docs/git-workflow-en.md docs/git-workflow-ro.md            # stage exactly these files, by name
git commit -m "docs(git): ..." -- docs/git-workflow-en.md docs/git-workflow-ro.md   # commit only these paths
```

Name the files. `git add -A`, `git add .` and `git commit -a` sweep up
everything in the folder, including things you never meant to send.

The message follows the house style (`docs/work-deontology.md` §7):

- subject `type(scope): what changed`, e.g. `fix(js): ...` or `docs(git): ...`;
- a body of bullets: what changed and why;
- a **Verified** paragraph: how you checked it;
- a last line naming the audit or review item it answers.

### 5. Push the branch

```bash
git push -u origin docs-git-workflow   # upload the branch; -u remembers the pairing, so later a plain `git push` works
```

Push **the branch**, never `main`.

### 6. Open the pull request

On GitHub, use the yellow **Compare & pull request** banner, or from the terminal:

```bash
gh pr create --base main --head docs-git-workflow   # open a PR: into main, from this branch; it asks for a title and body
```

Check **base = `main`** and **compare = your branch**. The title uses the same
`type(scope): ...` style. The description says what changed, why, how it was
verified, and anything the merger must know (for example *"merge #11 first"*).

### 7. Watch the checks

The PR page lists four checks, one per guard:

1. `target="_blank" carries rel="noopener noreferrer"`
2. `no log page shows filler or empty content undeclared`
3. `log prose shows tag names as words, not as markup`
4. `en/ and ro/ stay twins: code, toggles, mechanism references`

Each one is a Python program that **exits with a non-zero code** when it finds
a problem, and that turns the check red. Green means every guard passed. Red
means click **Details**, read the log, and fix the work.

### 8. Answer a review by pushing to the same branch

If the reviewer asks for changes, commit them on the same branch and
`git push`. The PR updates itself. Don't open a new one.

---

## Part B — Receiving and merging (the owner's practice)

### 1. Read the PR page: the four-point checklist

Before you press anything, read four things.

1. **The line under the title.** It says
   *"iuliacadar wants to merge N commits into `main` from `<branch>`"*.
   Is the base `main`? Is it the branch you expect?
2. **Conversation tab.** Read the description. At the bottom, look for
   **"All checks have passed"** and **"This branch has no conflicts with the
   base branch"**.
3. **Files changed tab.** This is the tab that matters. Does the number of
   files match what the description promised? Read the red (removed) and green
   (added) lines. Tick **Viewed** on each file as you finish it, so you can see
   what is still unread.
4. **Commits tab.** Are the commit titles in house style,
   `type(scope): what changed`?

**Don't merge yet** if a check is red, if GitHub reports conflicts, if the file
count surprises you, or if the description says another PR must go in first.

### 2. Why you can't press *Approve*

The crew of agents works through Iulia's own GitHub account, so GitHub lists
her as the **author of every PR**. GitHub doesn't let anyone approve their own
PR, which is why *Approve* is not available to her. That's expected. The
review happens on the board (the QA verdict, ACCEPT or REVISE) and in your own
reading with the checklist above. GitHub shows *who sent* a PR; the board
shows *who built* it.

### 3. Merge with *Create a merge commit*

1. Next to the green **Merge pull request** button, open the arrow and choose
   **Create a merge commit**. (Not *Squash and merge*, not *Rebase and merge*.)
2. GitHub opens two fields. Fill them in the house style:
   - **Commit message:** `type(scope): merge … (#N)`. Replace GitHub's default
     *"Merge pull request #N from …"*.
   - **Description:** the PR title. This repository already pre-fills it.
3. Press **Confirm merge**.

Real examples from `git log main`:

```text
fix(deploy): merge the deploy-status race fix and the honest deploy.yml comment (#6)
fix(i18n): merge Romanian note-save alerts (#7)
docs(backlog): merge #013's premise correction into BACKLOG-RO (#8)
```

Why a merge commit: it keeps every commit of the branch under its own SHA, and
it records "this came in as one PR". `git log --first-parent main` then reads
as one line per PR. *Squash* presses the branch into one new commit, and
*rebase* copies each commit with a new SHA. Both are legitimate choices in
other teams, but they lose the small commits' identity, and they make step 6
below refuse.

### 4. Delete the branch on GitHub

After the merge, the PR page shows **Delete branch**. Press it. The branch
name has done its job, the commits are safe inside `main`, and the PR page
keeps a **Restore branch** button. This repository doesn't delete merged
branches automatically, so this is a manual step.

### 5. The deploy that follows

The merge is a push to `main`, so the **Deploy to GitHub Pages** workflow
starts by itself. It usually takes a minute or two (longer when GitHub is
busy). Watch it in the Actions tab, or with `make deploy-status` (see
`DEPLOY.md`).

**A *cancelled* deploy is normal when you merge several PRs close together.**
Only one deploy runs at a time, and at most one waits behind it. When a newer
merge arrives while an older run is still waiting, GitHub cancels the waiting
one, because the newer commit already contains everything the older one would
have published. That happened on 2026-11-06: #6 deployed, #7's run was
cancelled while waiting, and #8's run published both. **Cancelled is not
failed.** Check the *latest* run, and check that it contains your commit.

### 6. The local clean-up: four commands

```bash
git checkout main          # step off the merged branch; you can't delete the branch you stand on
git pull                   # fetch from GitHub, including the merge commit, and move your main forward to match
git branch -d <branch>     # delete the local branch name; -d is the safe delete and refuses if work would be lost
git fetch --prune          # forget origin/<branch> names whose branch GitHub has deleted
```

Several PRs merged? One `git checkout main` and one `git pull`, then a
`git branch -d` for each branch (or several names on one line), then one
`git fetch --prune`.

What each one is for:

- `git pull` is `git fetch` (download) plus a merge into your `main`. Here it
  is a *fast-forward*: your `main` had nothing of its own, so Git just moves
  the name forward.
- `git branch -d` removes only the **name** on your laptop. The commits stay in
  `main`.
- `git fetch --prune` removes the *ghosts*. Without it, `git branch -a` keeps
  listing `origin/<branch>` for branches GitHub deleted long ago. A plain
  `git pull` doesn't prune.

### 7. "error: the branch '…' is not fully merged"

`git branch -d` says this when the branch holds commits that your local `main`
doesn't have. Deleting the name could lose them, so Git refuses. Usual reasons:

- you haven't run `git pull` yet, so your `main` doesn't have the merge;
- the PR isn't merged at all (check its page);
- someone pushed a commit to the branch after the merge;
- the PR was merged with *Squash* or *Rebase*, so `main` holds copies with
  new SHAs, not the branch's own commits.

See what is missing with:

```bash
git log --oneline main..<branch>   # list the commits that are on <branch> but not on main
```

If the list is empty after a `git pull`, or you have checked every commit and
truly don't need them, `git branch -D <branch>` (capital D) forces the delete.
Use it only after checking. It is the one command here that can throw work away.

### 8. The classic typo: a command without `git`

```bash
fetch --prune       # WRONG: no `git`, so the shell looks for a program called `fetch`
git fetch --prune   # right: every git command starts with `git`
```

On Ubuntu, a missing command can trigger a helpful offer: *"Command 'fetch'
not found, but can be installed with: sudo snap install fetch"*. **Don't.**
That is a different program that happens to share the name, unrelated to Git.
"Command not found, but can be installed" almost always means a typo, not a
missing tool. (It happened on 2026-11-05; the journal calls the result *the
Stowaway*. If it has already been installed, `sudo snap remove fetch` removes
it.)

---

## The card by the airlock

**Sending:** fresh `main` → `git checkout -b <branch>` → change → four
checkers → `git add <paths>` + `git commit -m "type(scope): ..." -- <paths>` →
`git push -u origin <branch>` → open the PR (base `main`) → green checks.

**Receiving:** read the line under the title, the Conversation tab, Files
changed, Commits → *Create a merge commit*, `type(scope): merge … (#N)`, PR
title as description → **Delete branch** → `git checkout main`, `git pull`,
`git branch -d <branch>`, `git fetch --prune`.
