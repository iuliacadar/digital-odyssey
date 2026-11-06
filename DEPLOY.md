# Deploy

D::0dy55ey is a static site (no build step, no bundler, no framework
runtime). Deployment publishes the repository as-is to GitHub Pages via a
GitHub Actions workflow.

## How a change reaches the live site: merge a pull request

**Deploys happen when a pull request is merged into `main`.** Work is done on
a branch, sent as a pull request, checked by the Lint workflow
(`.github/workflows/lint.yml`, the four guards in `tools/`), and merged by
Iulia on GitHub with *Create a merge commit*. A merge is a push to `main`, so
the deploy workflow starts by itself (see [What happens on
deploy](#what-happens-on-deploy)). Nobody pushes to `main` directly any more;
the one exception is the emergency [Rollback](#rollback) below.

The whole path, both for whoever sends a PR and for whoever merges it,
including the local clean-up afterwards, is in the Git/PR workflow guide:
[`docs/git-workflow-en.md`](docs/git-workflow-en.md) (Romanian:
[`docs/git-workflow-ro.md`](docs/git-workflow-ro.md)).

To watch the deploy that a merge has just started:

```bash
make deploy-status
```

With no arguments it watches the run for the commit `main` points at on
GitHub right now, which is the merge you just made (details below).

If you merge several PRs close together, one of the deploy runs may end as
**cancelled**. That is normal: only one deploy runs at a time and at most one
waits behind it, so a newer merge replaces the run that was still waiting, and
the newer commit already contains everything the older one would have
published. Cancelled is not failed. Check the latest run, and check that it
contains your commit.

## One-command deploy (a direct push; not the normal path)

```bash
make deploy
```

`make deploy` pushes your local `main` straight to GitHub. That was how the
site was published until the first pull request (PR #1, merged 2026-11-04);
since then every change arrives through a merged pull request instead. After
a normal merge and `git pull`, your local `main` has nothing new to push, so
`make deploy` only watches the run. It:

1. refuses to run unless you're on `main` with a clean working tree;
2. runs `git push origin main`;
3. tails the GitHub Actions run for the commit it just pushed to completion.
   It waits up to 2 minutes for GitHub to register that run, and fails with
   an error if it never appears; it never reports on an older run instead.

`make deploy-status` does step 3 on its own, for a run already in flight. By
default it watches the run for the commit `main` points at on origin right
now. To watch a specific commit, or wait longer:

```bash
make deploy-status DEPLOY_SHA=<full 40-character SHA> DEPLOY_WAIT=300
```

Give the **full** SHA (`git rev-parse <commit>` prints it). GitHub's run
filter matches full SHAs only; a short one such as `7324fd0` matches
nothing. The target expands a short SHA itself when your clone knows that
commit, and refuses at once, asking for the full SHA, when it doesn't.
Branch names are refused, because your local `main` may be behind origin.
`DEPLOY_POLL` (seconds between looks, default 5) must be at least 1, written
without a leading 0.

Why it matters: right after a push, the newest run GitHub lists is often
still the *previous* deploy. The first version of `deploy-status` watched
"the newest run" and could report that previous deploy's green tick as this
deploy's success (audit 2026-11-04, F10). `tools/test-deploy-status.py`
reproduces that race with a stand-in `gh` and proves the target no longer
falls for it.

`make deploy` is a safety-checked wrapper around one command,
`git push origin main`, not a separate mechanism. Merging a pull request on
GitHub has the same effect on the site, because a merge is also a push to
`main`, and it is the path this project uses.

You can also trigger a redeploy of the current `main` without a new commit:

```bash
gh workflow run deploy.yml
```

## Prerequisites

- `git` with push access to `iuliacadar/digital-odyssey` (origin), i.e. your
  SSH key or HTTPS credential is already configured — nothing project-specific
  to set up.
- `gh` (GitHub CLI), authenticated (`gh auth status`) — only needed for
  the workflow-watch step (`make deploy-status`, which `make deploy` runs
  after its push) and for `gh workflow run`. Not required for the underlying
  `git push`. If `gh` is missing or logged out, the push has still happened;
  only the watch fails, with an error saying so.
- No environment variables, secrets, `.env` file, or local `npm install` are
  required. The workflow itself needs no repository secrets beyond the
  automatically-provided `GITHUB_TOKEN` and the standard `github-pages`
  environment, which is already configured on this repo (Settings → Pages →
  Source: GitHub Actions).

## What happens on deploy

`.github/workflows/deploy.yml` runs on every push to `main`, which in practice
means every merged pull request (and via manual `workflow_dispatch`):

1. checks out the repo;
2. uploads the repository root as the Pages artifact (no build/compile step —
   this is a plain HTML/CSS/JS site);
3. publishes it to GitHub Pages.

Live URLs after a successful deploy:

- English (canonical): `https://iuliacadar.github.io/digital-odyssey/en/`
- Romanian: `https://iuliacadar.github.io/digital-odyssey/ro/`
- Bare root (`https://iuliacadar.github.io/digital-odyssey/`) intentionally
  404s and links to both of the above — see BACKLOG-EN.md item #008 for the
  rationale (option 3: `en/` is canonical, no root `index.html`).

A deploy typically finishes in 1-2 minutes. Check status any time with:

```bash
gh run list --workflow=deploy.yml --limit 5
```

or watch the Actions tab: https://github.com/iuliacadar/digital-odyssey/actions

## Rollback

The site has no server, no database, and no persistent state — "rollback"
means "make an older commit be what's published," nothing more.

Fastest path — revert and redeploy in one step:

```bash
make rollback
```

This reverts the tip commit on `main` (`git revert --no-edit HEAD`) and pushes,
which triggers a normal deploy of the reverted content. It prompts for
confirmation before pushing.

To roll back further than one commit, or to a specific known-good commit:

```bash
git revert --no-edit <bad-commit-sha>       # for one bad commit
# or, to reset straight to a known-good SHA (rewrites history — coordinate
# with anyone else pushing to main before doing this):
git reset --hard <good-sha>
git push --force-with-lease origin main
```

Either way, once the new tip of `main` is pushed, the deploy workflow
republishes automatically — there is no separate "undo deploy" action to run
in GitHub Pages itself.

## Manual / emergency fallback (no CLI push access)

If `git push` is ever unavailable but you have web access to the GitHub UI:

1. Go to the repo → Actions → "Deploy to GitHub Pages" → "Run workflow" →
   select `main` → Run. This redeploys whatever is currently on `main`
   without requiring a new push.
2. To change content without `git`, edit the file in GitHub's web UI. When
   you commit, choose **Create a new branch for this commit and start a pull
   request**, not "Commit directly to the `main` branch". The change then goes
   through the same checks and merge as any other PR
   ([`docs/git-workflow-en.md`](docs/git-workflow-en.md)), and the deploy
   starts when it is merged.
