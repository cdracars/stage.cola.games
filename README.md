# stage.cola.games

Staging site for COLA Games, built with Next.js static export and deployed to GitHub Pages-style hosting.

## Overview

- Staging repo: `cdracars/stage.cola.games`
- Production site: `https://cola.games`
- Production deploy target repo: `cdracars/cola.games`
- Production publish branch in target repo: `gh-pages`

This repo builds a static site into `out/` via Next.js `output: "export"`.

## Local Development

Requirements:

- Node `>=20.9.0 <21`
- Yarn `4.6.0` via `.yarn/releases/yarn-4.6.0.cjs`

Common commands:

```bash
yarn install
yarn dev
yarn build
```

Notes:

- The app uses static export, so `yarn build` generates the publishable site into `out/`.
- `next.config.ts` is already configured for static output, trailing slashes, and unoptimized images.

## Repo Layout

- `src/app/` - route pages
- `src/components/` - shared UI/layout components
- `public/` - static assets copied into the export
- `.github/workflows/deploy-prod.yml` - production deployment workflow

## Staging Workflow

Normal staging work happens in this repository:

1. Make changes in `main`.
2. Validate locally.
3. Commit and push to `origin/main`.

Recommended local validation before push:

```bash
npx tsc --noEmit
yarn build
```

If `yarn build` fails because the local dependency state is out of sync, fix that before tagging a production release.

## Production Deploy Process

Production deploys are tag-driven.

### What triggers production deploy

Pushing a git tag that starts with `v` triggers `.github/workflows/deploy-prod.yml`.

Examples:

- `v1.0.14`
- `v2026.07.07.1`

### What the workflow does

The production workflow:

1. Checks out this staging repo.
2. Installs Node 20.
3. Runs `yarn install`.
4. Runs `yarn build` with `ENVIRONMENT=production`.
5. Writes `cola.games` to `out/CNAME`.
6. Initializes a temporary git repo inside `out/`.
7. Force-pushes the static export to:

`https://github.com/cdracars/cola.games.git` -> branch `gh-pages`

### Required secret

The workflow depends on this GitHub Actions secret in the staging repo:

- `PRODUCTION_PAT`

That token must have permission to push to `cdracars/cola.games`.

## Exact Stage-to-Prod Release Steps

Use this sequence when promoting staging to production:

1. Make sure `main` in `stage.cola.games` contains the exact version you want live.
2. Pull latest changes locally.
3. Run validation:

```bash
yarn install
npx tsc --noEmit
yarn build
```

4. Push any final commits to `origin/main`.
5. Create a production tag on that exact commit:

```bash
git tag v1.0.14
git push origin v1.0.14
```

6. Watch the GitHub Actions run for `Deploy to Production`.
7. Confirm the workflow completed successfully.
8. Verify the live site at `https://cola.games`.

## Rollback Process

If production needs to be rolled back:

1. Identify the last known good commit in `stage.cola.games`.
2. Create a new tag from that commit.
3. Push the new tag.

Example:

```bash
git checkout <good-commit-sha>
git tag v1.0.15
git push origin v1.0.15
```

Because the workflow force-pushes the generated static output, the latest successful release tag wins.

## Important Operational Notes

- Production deploy is not driven by merging to `main`; it is driven by pushing a `v*` tag.
- The workflow force-pushes to the production repo's `gh-pages` branch.
- `yarn build` must succeed in this repo before a production deploy will work.
- Static assets required by pages must live in `public/` so they are included in `out/`.
- If domain handling changes, update both `.github/workflows/deploy-prod.yml` and any Pages/domain settings in the production repo.

## Quick Reference

Local dev:

```bash
yarn dev
```

Local export check:

```bash
yarn build
```

Production release:

```bash
git tag v1.0.14
git push origin v1.0.14
```
