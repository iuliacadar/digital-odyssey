## Digital Odyssey — deploy targets
##
## `make deploy` is the one-command production deploy.
## See DEPLOY.md for the full explanation, prerequisites, and rollback steps.

.PHONY: deploy deploy-status rollback

# Deploy = push main to origin. The GitHub Actions workflow at
# .github/workflows/deploy.yml watches origin/main and publishes the site
# to GitHub Pages automatically on every push — no build step, no local
# credentials beyond your existing git/gh auth.
deploy:
	@branch=$$(git rev-parse --abbrev-ref HEAD); \
	if [ "$$branch" != "main" ]; then \
		echo "error: deploy must be run from 'main' (currently on '$$branch')"; \
		exit 1; \
	fi
	@if [ -n "$$(git status --porcelain)" ]; then \
		echo "error: working tree has uncommitted changes, commit or stash first"; \
		git status --short; \
		exit 1; \
	fi
	git push origin main
	@echo "Pushed. Tracking the deploy run:"
	@# @line: hand over the exact commit that was just pushed, so the watch
	@#   below can never latch onto an older run (see deploy-status).
	@$(MAKE) --no-print-directory deploy-status DEPLOY_SHA=$$(git rev-parse HEAD)

# Watch the deploy workflow run for ONE specific commit to completion.
#
# @reason: the first version watched "the most recent deploy run"
#   (`gh run list --limit 1`). Right after a push GitHub has often not
#   registered the new run yet, so "the most recent" was the PREVIOUS
#   deploy, and a green previous deploy was reported as this deploy's
#   success (audit 2026-11-04, F10). The target now asks for the run whose
#   head commit is the one that was pushed (`--commit`), waits a bounded
#   time for it to appear, and gives up loudly if it never does.
# @warning: it never falls back to "the latest run". A report about the
#   wrong commit is worse than no report: it ends the investigation that
#   an honest "not found" would have started.
#
# @logic: three knobs, all overridable on the command line:
#   DEPLOY_SHA   the FULL 40-character SHA of the commit whose run to watch.
#                `make deploy` passes the one it just pushed. Left empty, the
#                target asks origin what `main` points at right now
#                (`git ls-remote`), not the local `origin/main`, which is
#                stale if the push came from another machine.
#   DEPLOY_WAIT  seconds to wait for the run to be registered (default 120).
#   DEPLOY_POLL  seconds between looks (default 5; at least 1, or the wait
#                would never run out).
# @warning: `gh run list --commit` matches the full SHA only. A short one
#   (`7324fd0`) matches nothing, so the target used to wait out DEPLOY_WAIT
#   and then report "no run" for a run that existed (QA of audit fix #8).
#   A short hex SHA is now expanded with `git rev-parse` when this clone
#   knows the commit; if it does not, the target refuses at once and asks
#   for the full SHA. Branch names are refused too: a local `main` can be
#   behind origin, which is the stale answer DEPLOY_SHA exists to avoid.
# @warning: DEPLOY_POLL must not start with 0. `00` is zero written twice:
#   it slipped past a check for the literal `0` and polled GitHub in a
#   tight loop forever. `08` and `09` are not numbers at all to the shell's
#   arithmetic (a leading 0 means octal), so it crashed after the first
#   sleep. Both are now refused before the first `gh` call.
# @line: the variable is DEPLOY_SHA, not plain SHA, because make imports
#   every environment variable, and a stray `SHA` exported for some other
#   tool would silently choose the commit to watch.
#
# @bridge: tools/test-deploy-status.py proves all of this against a
#   stand-in `gh`, without touching GitHub or deploying anything.
DEPLOY_SHA ?=
DEPLOY_WAIT ?= 120
DEPLOY_POLL ?= 5

deploy-status:
	@case "$(DEPLOY_WAIT):$(DEPLOY_POLL)" in \
		*[!0-9:]*|:*|*:|*:*:*|*:0*) \
			echo "error: DEPLOY_WAIT and DEPLOY_POLL must be whole seconds, DEPLOY_POLL >= 1 with no leading 0" >&2; \
			exit 1;; \
	esac; \
	sha="$(DEPLOY_SHA)"; \
	if [ -z "$$sha" ]; then \
		sha=$$(git ls-remote origin refs/heads/main | cut -f1); \
	fi; \
	if [ -z "$$sha" ]; then \
		echo "error: could not ask origin which commit main is on; pass DEPLOY_SHA=<full 40-character SHA>" >&2; \
		exit 1; \
	fi; \
	if ! printf '%s\n' "$$sha" | grep -Eqx '[0-9a-f]{40}'; then \
		full=; \
		if printf '%s\n' "$$sha" | grep -Eqx '[0-9a-fA-F]{4,40}'; then \
			full=$$(git rev-parse --verify --quiet "$$sha^{commit}"); \
		fi; \
		if [ -z "$$full" ]; then \
			echo "error: DEPLOY_SHA=$$sha is not a full 40-character SHA, and this clone cannot expand it." >&2; \
			echo "  gh matches the full SHA only. Pass it in full, e.g. from 'git rev-parse <commit>'" >&2; \
			echo "  after a 'git fetch', or from the commit's page on GitHub." >&2; \
			exit 1; \
		fi; \
		echo "DEPLOY_SHA=$$sha expanded to $$full (gh matches full SHAs only)."; \
		sha=$$full; \
	fi; \
	echo "Waiting for the deploy.yml run of commit $$sha (up to $(DEPLOY_WAIT)s)..."; \
	waited=0; \
	while :; do \
		id=$$(gh run list --workflow=deploy.yml --commit "$$sha" --limit 1 \
			--json databaseId --jq '.[0].databaseId // empty') || { \
			echo "error: 'gh run list' failed (is gh logged in? try 'gh auth status')" >&2; \
			exit 1; \
		}; \
		[ -n "$$id" ] && break; \
		if [ "$$waited" -ge "$(DEPLOY_WAIT)" ]; then \
			echo "error: no deploy.yml run for commit $$sha after $(DEPLOY_WAIT)s." >&2; \
			echo "  Not falling back to the latest run: it belongs to a different commit." >&2; \
			echo "  Look at https://github.com/iuliacadar/digital-odyssey/actions, or wait longer:" >&2; \
			echo "  make deploy-status DEPLOY_SHA=$$sha DEPLOY_WAIT=300" >&2; \
			exit 1; \
		fi; \
		sleep $(DEPLOY_POLL); \
		waited=$$((waited + $(DEPLOY_POLL))); \
	done; \
	echo "Found run $$id for commit $$sha."; \
	gh run watch --exit-status "$$id"

# Undo the newest commit on main and redeploy, after checking that it is
# safe to, showing exactly what will be undone, and asking first.
#
# @reason: this is the emergency button, so it has to work on the commit
#   that is really at the tip of main. The first version ran a plain
#   `git revert HEAD`. Since PRs are merged with GitHub's "Create a merge
#   commit", the tip is usually a MERGE commit, and git refuses to revert a
#   merge without being told which side to keep ("is a merge but no -m
#   option was given"). The button failed exactly when it was needed, and
#   still exited 0, so it looked as if it had worked. It also never checked
#   where it was run from (audit 2026-11-04, F10).
#
# @pedagogy: `git revert X` does not delete X or rewrite history. It adds a
#   NEW commit that does the opposite of X, so the history keeps both the
#   mistake and its undo, and nobody else's copy of main breaks. A push of
#   that new commit redeploys the site like any other push.
# @pedagogy: a merge commit has TWO parents. Parent 1 is main as it was just
#   before the merge; parent 2 is the tip of the PR branch that was merged
#   in. "Undo this merge" is ambiguous until you say which parent to go back
#   to. `-m 1` means "parent 1 is the mainline": keep main's side, take back
#   everything the merge brought in. The files end up exactly as they were
#   on main before the PR was merged, so the whole PR is undone in one go.
#   (`-m 2` would keep the PR and undo main's side: never what we want here.)
#
# @guard: it refuses, and changes nothing, unless all three hold:
#   1. the current branch is main (the branch that is live);
#   2. nothing is unsaved: no edited, staged or new files, because a revert
#      on top of half-finished work mixes the two, and a stray new file is
#      a sign of work in progress;
#   3. local main is exactly origin's main, checked after a fresh fetch. If
#      this clone is BEHIND, its "newest commit" is not the live one and it
#      would undo the wrong thing. If it is AHEAD, the push would publish
#      commits nobody reviewed along with the undo.
#
# @warning: a `#` comment can sit inside a multi-line recipe below because
#   the shell, not make, reads it: the comment swallows the line's trailing
#   backslash and ends at the newline. Two rules make that safe: a comment
#   line only follows a line that ends a command (`;`, `then`, `else`, `{`),
#   and every dollar sign in a comment is written twice, because make
#   still expands the recipe (turning two into one) before the shell sees it.
# @warning: the step that pushes calls `make deploy-status` by its plain
#   name, not through make's $(MAKE) variable. make runs any recipe line
#   that mentions $(MAKE) even under `make -n` (a dry run, meant to only
#   PRINT the commands), so a curious `make -n rollback` would have reverted
#   and pushed for real after a "y".
#
# @bridge: DEPLOY.md, section "Rollback", explains this to a human.
# @bridge: tools/test-rollback.py proves every case above in a throwaway
#   repository with a local stand-in for GitHub; it never touches the real one.
rollback:
	@# @guard: check 1 of 3 — run only from main.
	@# @line: `git symbolic-ref --short HEAD` prints the current branch name.
	@#   It FAILS when HEAD is "detached" (a commit checked out with no branch),
	@#   and then the `||` part gives a readable stand-in name instead.
	@branch=$$(git symbolic-ref --quiet --short HEAD) || branch="a detached HEAD (no branch at all)"; \
	# @line: any branch other than main is refused. \
	if [ "$$branch" != "main" ]; then \
		# @line: say where we are and how to get to the right place. \
		echo "error: rollback must be run from 'main', but you are on $$branch." >&2; \
		echo "  Nothing was changed. Run 'git checkout main', then 'make rollback' again." >&2; \
		# @line: exit 1 stops make here, before anything is touched. \
		exit 1; \
	# @line: end of the branch check. \
	fi
	@# @guard: check 2 of 3 — nothing unsaved.
	@# @line: `git status --porcelain` prints one line per edited, staged or
	@#   new file, and nothing at all when everything is committed. `-n` asks
	@#   "is that text non-empty?".
	@if [ -n "$$(git status --porcelain)" ]; then \
		# @line: plain-English refusal, then git's own short list of the files. \
		echo "error: there are uncommitted changes. Rollback needs a clean main, so nothing gets mixed into the undo." >&2; \
		# @line: show which files, so she knows what to commit or put aside. \
		git status --short >&2; \
		# @line: nothing was changed; say what to do next. \
		echo "  Nothing was changed. Commit or put these changes aside, then run 'make rollback' again." >&2; \
		# @line: stop make before the fetch and the prompt. \
		exit 1; \
	# @line: end of the unsaved-work check. \
	fi
	@# @guard: check 3 of 3, part 1 — ask GitHub what main is right now.
	@# @line: `git fetch origin main` downloads origin's main and updates this
	@#   clone's `origin/main` bookmark. It changes no file and no local branch.
	@git fetch --quiet origin main || { \
		# @line: no network or no access: refuse rather than compare with a stale bookmark. \
		echo "error: could not fetch main from origin (offline? not logged in?). Nothing was changed." >&2; \
		# @line: stop make; nothing has been touched. \
		exit 1; \
	# @line: end of the fetch-failed branch. \
	}
	@# @guard: check 3 of 3, part 2 — local main must equal origin's main.
	@# @line: `rev-list --left-right --count main...origin/main` prints two
	@#   numbers: commits only in local main (not pushed yet), then commits only
	@#   on origin (not pulled yet). `set --` stores them as $$1 and $$2.
	@set -- $$(git rev-list --left-right --count main...origin/main); \
	# @line: both must be 0, or this clone and the live site disagree about the tip. \
	if [ "$$1" != 0 ] || [ "$$2" != 0 ]; then \
		# @line: give both numbers, in words. \
		echo "error: local main and origin's main differ: $$1 commit(s) here are not pushed, $$2 commit(s) are only on GitHub (not pulled)." >&2; \
		# @line: why that matters for a rollback. \
		echo "  Rolling back now could undo the wrong commit, or publish unpushed ones with the undo." >&2; \
		# @line: what to do next, and that nothing happened. \
		echo "  Nothing was changed. Get them in step first (usually 'git pull'), then run 'make rollback' again." >&2; \
		# @line: stop make before the prompt. \
		exit 1; \
	# @line: end of the in-step check. \
	fi
	@# @block: show exactly what will be undone, before asking.
	@# @line: `HEAD^2` is "the second parent of the tip". Only a merge has one,
	@#   so `rev-parse --verify` succeeding on it means "the tip is a merge".
	@if git rev-parse --verify --quiet 'HEAD^2' >/dev/null; then \
		# @line: name the merge itself (short SHA and subject). \
		echo "The newest commit on main is a MERGE: $$(git log -1 --format='%h %s' HEAD)"; \
		# @line: say plainly that the whole PR goes, not just one commit. \
		echo "Undoing it takes back everything it brought in, i.e. these commits:"; \
		# @line: HEAD^1..HEAD^2 = "on the PR side (parent 2) but not on main before the merge (parent 1)". \
		git log --oneline 'HEAD^1..HEAD^2' | sed 's/^/    /'; \
	# @line: no second parent, so an ordinary single commit. \
	else \
		# @line: name the one commit that will be undone. \
		echo "The newest commit on main is a single commit, which will be undone:"; \
		# @line: its short SHA and subject, indented like the merge list. \
		echo "    $$(git log -1 --format='%h %s' HEAD)"; \
	# @line: end of the merge-or-not choice. \
	fi; \
	# @line: in BOTH cases the files end up as at parent 1, the commit before the tip on main. \
	echo "Afterwards the site's files will be exactly as at $$(git log -1 --format='%h %s' 'HEAD^1')."
	@# @block: ask, undo, push, then watch the redeploy. One shell, so the
	@#   answer and each step's success carry through to the next.
	@# @line: printf, not `read -p`: make runs recipes with /bin/sh, and `-p`
	@#   is not a POSIX option. Capital N in [y/N] marks the default: No.
	@printf 'Undo it with a new "revert" commit and push to main (this redeploys the site)? [y/N] '; \
	# @line: read one line of the answer; at end of input `ans` stays empty, which counts as No. \
	read ans; \
	# @line: only y or Y goes ahead; anything else, including just Enter, is No. \
	case "$$ans" in y|Y) ;; *) echo "aborted: nothing was changed."; exit 0;; esac; \
	# @line: the same merge test as above, now to choose how to revert. \
	if git rev-parse --verify --quiet 'HEAD^2' >/dev/null; then \
		# @line: a merge: `-m 1` = keep main's side (parent 1), undo the whole merged PR. \
		git revert --no-edit -m 1 HEAD; \
	# @line: an ordinary commit has one parent, so no -m (git refuses -m on it). \
	else \
		# @line: plain revert; `--no-edit` keeps git's own "Revert ..." message, no editor opens. \
		git revert --no-edit HEAD; \
	# @line: if either revert failed, stop before pushing anything. \
	fi || { echo "error: git revert failed (see above). Nothing was pushed; the site is unchanged." >&2; exit 1; }; \
	# @line: publish the revert commit; this push is what triggers the redeploy. \
	git push origin main || { \
		# @line: e.g. someone pushed in the last few seconds; the undo exists only on this computer. \
		echo "error: the push was refused, so the site is unchanged. The revert commit exists only on this computer." >&2; \
		# @line: the two ways forward; HEAD~1 here is the tip before the revert, so only the revert is dropped. \
		echo "  Retry with 'git pull' then 'git push origin main', or drop the local revert with 'git reset --hard HEAD~1'." >&2; \
		# @line: stop; do not watch a deploy that was never triggered. \
		exit 1; \
	# @line: end of the push-failed branch. \
	}; \
	# @line: the full SHA of the revert commit just pushed; deploy-status matches full SHAs only. \
	sha=$$(git rev-parse HEAD); \
	# @line: say what happens next. \
	echo "Pushed revert $$sha. Tracking its deploy run:"; \
	# @line: watch THIS commit's run, not "the latest" one (see deploy-status); plain `make`, see the @warning above. \
	make --no-print-directory deploy-status DEPLOY_SHA="$$sha" || { \
		# @line: the undo is live on main either way; only the watching failed or the deploy did. \
		echo "note: the revert IS pushed to main. Check the deploy at https://github.com/iuliacadar/digital-odyssey/actions" >&2; \
		# @line: still a failure for make, so nobody reads this as a clean success. \
		exit 1; \
	# @line: end of the watch-failed branch. \
	}
