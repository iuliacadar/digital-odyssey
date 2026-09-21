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
	@$(MAKE) deploy-status

# Watch the most recent deploy workflow run to completion.
deploy-status:
	gh run watch --exit-status $$(gh run list --workflow=deploy.yml --limit 1 --json databaseId --jq '.[0].databaseId')

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
