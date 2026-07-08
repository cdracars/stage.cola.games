# AGENTS.md

## Purpose

Guidance for AI coding assistants working in `stage.cola.games`.

Apply these as defaults and guardrails, not rigid rules.
More specific instruction files may override this.

This repository is the staging website for COLA Games. It is a content-heavy
Next.js application that publishes club information, event pages, and chronicle
support material for live-action roleplaying experiences.

This repo is also the source that promotes content to production via the
documented tag-based deploy flow.

---

## Core Principles

- Prefer consistency with the existing repository over introducing new patterns
- Make the smallest reasonable change that fully solves the problem
- Optimize for readability, maintainability, correctness, and reviewability
- Favor DRY and SRP, but do not abstract prematurely
- Preserve security and safe defaults in code, content handling, and deployment changes
- Follow established best practices for the stack unless repo constraints require otherwise
- Preserve static-export compatibility
- Treat content edits, shared UI edits, and deployment changes as different risk levels
- Avoid unnecessary dependencies, abstractions, and broad rewrites

## Engineering Discipline

- Prefer TDD when practical for behavior-changing work, especially for utilities, logic, and regressions
- When adding or updating tests, structure them clearly using Arrange, Act, Assert
- Keep functions, components, and modules focused on a single responsibility
- Eliminate duplication when it improves maintainability, but avoid speculative abstractions
- Treat maintainability as a first-class requirement alongside correctness and delivery speed
- Apply security-minded thinking by default: validate assumptions, avoid unsafe patterns, and minimize accidental exposure of secrets or privileged behavior
- Use best-practice implementations that fit the repository's actual constraints instead of blindly following generic patterns

## Intent Verification

Before implementing, verify that the requested change actually solves the stated problem.

- Prefer root-cause fixes over surface patches
- If the requested implementation conflicts with the stated goal, call it out clearly
- Do not follow implementation suggestions blindly when a simpler or safer approach achieves the same outcome
- Explain tradeoffs briefly when a less disruptive solution exists
- Respect the requested outcome while challenging unnecessary complexity in the proposed path

---

## Repository Role

This repository is an application site, not a general-purpose framework or component library.

Current priorities:

- keep the COLA staging site stable and easy to update
- support chronicle-specific content without breaking shared site behavior
- preserve static export to GitHub Pages-style hosting
- keep homepage, event pages, and support pages easy to edit
- keep the stage-to-production promotion path reliable and documented

Treat this repo as a focused frontend application with shared components,
route-owned content, static hosting constraints, and a documented production
promotion workflow.

---

## Team Alignment

- Match the style and structure of surrounding code and docs
- Prefer consistency over personal preference
- Reuse existing modules and patterns before creating new ones
- Keep changes easy for teammates to understand, test, and review
- Prefer extending existing route and section patterns over inventing new app structure

## Anti Cargo-Cult Rule

Do not:

- Add abstractions before they are needed
- Rewrite working UI just to match a preferred pattern
- Replace existing Chakra or Tailwind usage without a clear benefit
- Introduce server features that conflict with static export unless explicitly requested
- Reorganize content trees or asset directories without a concrete reason

Favor solving today's problem with the smallest maintainable change.

---

## Working Copy

Prefer the Windows-side clone for active work:

- `C:\Users\cdrac\code\Javascript\stage.cola.games`

Reference repo examples may exist elsewhere on disk, but changes for this site
should land here unless explicitly requested otherwise.

If work is copied in from WSL or another local clone, verify filenames, asset
paths, and links after the transfer.

---

## Expected Stack Behavior

- Runtime: Node 20.x
- Package manager: Yarn 4
- Framework: Next.js 16 App Router
- Language: TypeScript
- UI: Chakra UI with Tailwind utility classes
- Animation: Framer Motion
- Hosting model: static export

Common commands:

- `yarn install`
- `yarn dev`
- `yarn build`
- `npx tsc --noEmit`

This repository has had mixed package-manager state before. The declared
package manager is Yarn 4. Do not casually introduce npm lockfiles or churn
lockfiles as part of unrelated work.

---

## Project Structure

Keep the current repository shape unless a change is explicitly requested:

- `src/app/page.tsx`: homepage route entry
- `src/app/about-us/page.tsx`: club information page
- `src/app/events/page.tsx`: events landing page
- `src/app/cthulhu-1929/...`: Cthulhu 1929 route set
- `src/app/reawakening/...`: Reawakening chronicle pages
- `src/app/a-crown-of-storms/...`: archived A Crown of Storms chronicle pages
- `src/components/layout/`: header, footer, and page layout helpers
- `src/components/sections/`: homepage and route-level reusable sections
- `src/components/ui/`: shared presentational building blocks
- `src/components/cthulhu/`: shared Cthulhu-specific page helpers
- `src/components/overrides/`: wrappers for image and link behavior
- `src/utils/getBasePath.ts`: path helper for static-hosting-safe references
- `src/styles/globals.css`: global styles
- `public/images/`: static art and content images
- `public/docs/`: downloadable public documents
- `.github/workflows/deploy-prod.yml`: production deployment workflow

Do not reorganize the layout unless explicitly requested.

---

## Architecture Guidance

- Keep route-specific content near its route
- Keep shared UI separate from chronicle-specific content
- Keep layout concerns in `src/components/layout`
- Keep homepage composition in section components rather than bloating `src/app/page.tsx`
- Reuse existing UI primitives before creating new ones
- Prefer content edits over structural changes when the task is editorial

In particular:

- do not introduce server-only data fetching for content that can remain static
- do not assume this app will run in a serverful deployment model
- do not bypass existing wrappers for image or link behavior without checking why they exist
- keep shared navigation and footer behavior consistent across routes

---

## Content and Asset Rules

- Homepage hero content belongs in `src/components/sections/hero-section.tsx`
- Homepage feature-card content belongs in `src/components/sections/feature-section.tsx`
- Chronicle content should remain within the matching `src/app/...` subtree
- Put static assets under `public/images/...` whenever practical
- Put downloadable documents under `public/docs/...`
- Reference assets with site-root-relative paths such as `/images/cthulhu1929/Inheritance.jpg`
- Match asset filenames exactly, including spaces, case, and existing misspellings
- Do not rename assets casually unless all references are updated and verified
- Be careful changing event titles and links because homepage cards and route trees can diverge
- Treat copy from approved Google Docs or provided source documents as locked unless told otherwise

---

## Static Export Constraints

This app is configured for static export in `next.config.ts`.

Important constraints:

- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`
- custom webpack cache configuration is present

When changing routing, links, assets, or image usage:

- keep pages compatible with static export
- avoid server actions, runtime-only APIs, and features that require a Node server
- preserve trailing-slash-safe navigation
- check whether path helpers or base-path-safe behavior already exist before changing URL handling

---

## Frontend Change Guidance

- Preserve the established visual language unless a redesign is requested
- Prefer intentional, targeted UI changes over sweeping restyles
- Reuse existing spacing, typography, and card patterns when updating content surfaces
- Keep accessibility in mind for headings, buttons, links, and image alt text
- Avoid introducing unnecessary motion or complexity into content pages

For chronicle pages in particular:

- follow provided style guides literally when one exists
- do not improvise extra navigation panes or duplicate header areas
- do not rewrite locked copy for brevity or tone without approval

---

## Testing Expectations

- Add or update validation for meaningful behavior changes when practical
- Prefer running the smallest relevant checks first
- For content-only edits, confirm the edited route renders cleanly
- For structural or shared UI edits, run type-check and build when possible
- For deploy workflow changes, read the workflow and verify the documentation matches it

Preferred local commands:

- `npx tsc --noEmit`
- `yarn build`

If a command cannot be run, say so clearly.

---

## Documentation Expectations

- Keep `README.md` accurate if setup, deploy, or workflow behavior changes materially
- Keep `AGENTS.md` aligned with actual repo workflow and constraints
- Keep stage-to-production instructions concrete and operational
- Document new content-editing or deployment expectations when they become part of normal work

Prefer concise, operationally useful documentation.

---

## Deployment and Operations

- Default branch: `main`
- Production deploy is tag-driven, not merge-driven
- Production deploy workflow lives in `.github/workflows/deploy-prod.yml`
- Production deploy pushes generated static output to `cdracars/cola.games` branch `gh-pages`
- Production workflow depends on `PRODUCTION_PAT`

When changing deploy behavior:

- update the workflow
- update `README.md`
- make sure the documented process still matches reality

Do not change deploy semantics casually during content or UI work.

---

## Git Guidance

- Do not rewrite history for routine content or UI edits
- Avoid bundling lockfile churn into unrelated site/content commits
- Keep commits focused by concern where practical
- Be explicit if a push requires rebase due to remote movement
- Preserve unrelated local changes unless the user explicitly asks otherwise

---

## Review Guidance

When reviewing or modifying code, pay particular attention to:

- static export compatibility
- route correctness and link destinations
- asset path correctness
- consistency between homepage cards and destination pages
- shared UI regressions
- typography and style-guide fidelity on chronicle pages
- deployment documentation accuracy

Flag:

- broken static-export assumptions
- asset-path mismatches
- route changes without matching navigation updates
- unnecessary package-manager churn
- duplicate page-level header chrome
- large UI rewrites for narrow content requests
