# AGENTS.md

## Purpose

This repository contains the staging site for COLA Games. It is a Next.js 16 static-export app used to publish event, club, and chronicle content.

## Working Copy

Prefer the Windows-side clone for active work:
- `C:\Users\cdrac\code\javascript\stage.cola.games`

Avoid relying on the WSL-backed working copy unless WSL integration is healthy. The Windows clone is the safer default for edits, local tooling, and Git operations.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Chakra UI
- Tailwind CSS
- Framer Motion
- Static export deployment to GitHub Pages

## Commands

Use Node 20.x. The repo declares `>=20.9.0 <21` in `package.json`.

Common commands:
- `npm run dev`
- `npm run build`
- `npm run lint`

There are both `yarn.lock` and `package-lock.json` artifacts in the repo. Treat the existing state carefully and do not casually switch package managers as part of unrelated work.

## App Structure

Top-level app routes live in `src/app`.

Primary sections:
- `src/app/page.tsx`: homepage
- `src/app/about-us/page.tsx`
- `src/app/events/page.tsx`
- `src/app/reawakening/...`
- `src/app/a-crown-of-storms/...`

Shared UI is mostly under:
- `src/components/layout`
- `src/components/sections`
- `src/components/ui`
- `src/components/overrides`

Utilities and styles:
- `src/utils/getBasePath.ts`
- `src/styles/globals.css`

## Content Conventions

- Homepage hero content lives in `src/components/sections/hero-section.tsx`.
- Homepage feature cards live in `src/components/sections/feature-section.tsx`.
- Route-specific chronicle content should stay inside the matching `src/app/...` subtree.
- Static images should be placed under `public/images/...` and referenced with site-root-relative paths such as `/images/cthulhu1929/Inheritace Square.jpg`.
- Match asset filenames exactly, including case and spelling.

## Static Export Constraints

This app is configured for static export in `next.config.ts`.

Important constraints:
- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`
- custom webpack config is present to avoid cache warnings

When changing routing, links, or asset loading:
- keep pages compatible with static export
- avoid server-only features unless you also change the deployment model
- be careful with image handling and base-path assumptions

## Change Guidelines

- Keep edits narrow and route-specific when possible.
- Prefer existing design patterns over introducing a new UI system.
- Reuse shared UI components before creating new one-off wrappers.
- Do not rename or move large content trees unless the task explicitly requires it.
- Do not remove existing assets just because they look unused without confirming references.

## Validation

Before finishing substantial changes, run the most relevant checks available:
- `npm run lint`
- `npm run build`

If a change affects content only, at minimum confirm the edited route/component still renders cleanly in development.

## Git Notes

- The remote default branch is `main`.
- If edits are made through the GitHub connector because local filesystem access is degraded, pull those commits into the Windows clone before continuing local work.
- Do not rewrite history for routine content or UI edits.
