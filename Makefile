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
#   DEPLOY_SHA   commit whose run to watch. `make deploy` passes the one it
#                just pushed. Left empty, the target asks origin what `main`
#                points at right now (`git ls-remote`), not the local
#                `origin/main`, which is stale if the push came from
#                another machine.
#   DEPLOY_WAIT  seconds to wait for the run to be registered (default 120).
#   DEPLOY_POLL  seconds between looks (default 5; at least 1, or the wait
#                would never run out).
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
		*[!0-9:]*|:*|*:|*:0) \
			echo "error: DEPLOY_WAIT and DEPLOY_POLL must be whole seconds, DEPLOY_POLL >= 1" >&2; \
			exit 1;; \
	esac; \
	sha="$(DEPLOY_SHA)"; \
	if [ -z "$$sha" ]; then \
		sha=$$(git ls-remote origin refs/heads/main | cut -f1); \
	fi; \
	if [ -z "$$sha" ]; then \
		echo "error: could not ask origin which commit main is on; pass DEPLOY_SHA=<commit>" >&2; \
		exit 1; \
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

# Roll back to the previous commit on main and redeploy. Confirms before
# pushing since this rewrites what's live.
rollback:
	@echo "Current HEAD: $$(git rev-parse --short HEAD) — $$(git log -1 --pretty=%s)"
	@echo "Rolling back to: $$(git rev-parse --short HEAD~1) — $$(git log -1 --pretty=%s HEAD~1)"
	@read -p "Revert main to the previous commit and push? [y/N] " ans; \
	if [ "$$ans" = "y" ] || [ "$$ans" = "Y" ]; then \
		git revert --no-edit HEAD; \
		git push origin main; \
	else \
		echo "aborted"; \
	fi
