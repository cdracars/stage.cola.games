# AGENTS.md

## Purpose

Guidance for AI coding assistants working in `stage.cola.games`.

Apply these as defaults and guardrails, not rigid rules.
More specific instruction files may override this.

This repository is the staging website for COLA Games. It is a content-heavy
Next.js app that publishes club information, event pages, and chronicle support
material for live-action roleplaying experiences.

---

## Core Principles

- Prefer consistency with the existing repository over introducing new patterns
- Make the smallest reasonable change that fully solves the problem
- Optimize for readability, maintainability, correctness, and reviewability
- Preserve static-export compatibility
- Treat content changes, route changes, and shared UI changes as different risk levels
- Avoid unnecessary dependencies, abstractions, and broad rewrites

## Intent Verification

Before implementing, verify that the requested change actually solves the stated problem.

- Prefer root-cause fixes over surface patches
- If the requested implementation conflicts with the stated goal, call it out clearly
- Do not follow implementation suggestions blindly when a simpler or safer approach achieves the same outcome
- Explain tradeoffs briefly when a less disruptive solution exists
- Respect the requested outcome while challenging unnecessary complexity in the proposed path

---

## Repository Role

This repository is an application site, not a general-purpose component library.

Current priorities:

- keep the COLA staging site stable and easy to update
- support chronicle-specific content without breaking shared site behavior
- preserve static export to GitHub Pages
- keep homepage, event pages, and support pages easy to edit
- favor predictable content publishing over experimental architecture changes

Treat this repo as a focused frontend application with shared components, route-owned content, and static hosting constraints.

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

- `C:\Users\cdrac\code\javascript\stage.cola.games`

Use the WSL-backed copy only when WSL integration is healthy. If edits are made through a remote connector because local filesystem access is degraded, pull those commits into the Windows clone before continuing local work.

---

## Expected Stack Behavior

- Runtime: Node 20.x
- Framework: Next.js 16 App Router
- Language: TypeScript
- UI: Chakra UI with Tailwind utility classes
- Animation: Framer Motion
- Hosting model: static export for GitHub Pages

The repository currently contains both `yarn.lock` and `package-lock.json`. The declared package manager is Yarn 4, but lockfile state is mixed. Do not casually switch package managers or churn lockfiles as part of unrelated work.

Common commands:

- `npm run dev`
- `npm run build`
- `npm run lint`

If you use a different package manager for a specific reason, explain why.

---

## Project Structure

Keep the current repository shape unless a change is explicitly requested:

- `src/app/page.tsx`: homepage route entry
- `src/app/about-us/page.tsx`: club information page
- `src/app/events/page.tsx`: events landing page
- `src/app/reawakening/...`: Reawakening chronicle pages
- `src/app/a-crown-of-storms/...`: A Crown of Storms chronicle pages
- `src/components/layout/`: header, footer, and page layout helpers
- `src/components/sections/`: homepage and route-level reusable sections
- `src/components/ui/`: shared presentational building blocks
- `src/components/overrides/`: framework-specific wrappers such as image and link behavior
- `src/utils/getBasePath.ts`: path helper for static-hosting-safe references
- `src/styles/globals.css`: global styles
- `public/images/`: static art and content images

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
- Reference assets with site-root-relative paths such as `/images/cthulhu1929/Inheritace Square.jpg`
- Match asset filenames exactly, including spaces, case, and existing misspellings
- Do not rename assets casually unless all references are updated and verified
- Be careful changing event titles and links because homepage cards and route trees can diverge

---

## Static Export Constraints

This app is configured for static export in `next.config.ts`.

Important constraints:

- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`
- custom webpack cache configuration is present to suppress cache-related issues

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

---

## Testing Expectations

- Add or update validation for meaningful behavior changes when practical
- Prefer running the smallest relevant checks first
- For content-only edits, confirm the edited route renders cleanly
- For structural or shared UI edits, run lint and build when possible

Preferred local commands:

- `npm run lint`
- `npm run build`

If a command cannot be run, say so clearly.

---

## Documentation Expectations

- Keep `README.md` accurate if setup or workflow changes materially
- Keep `AGENTS.md` aligned with actual repo workflow and constraints
- Document any new environment, deployment, or content-editing expectations when they become part of normal work

Prefer concise, operationally useful documentation.

---

## Git and Operations

- The remote default branch is `main`
- Do not rewrite history for routine content or UI edits
- Pull remote connector changes into the Windows clone before further local work
- Be careful with lockfile churn and generated output
- Avoid committing unrelated formatting-only changes during focused content tasks

---

## Review Guidance

When reviewing or modifying code, pay particular attention to:

- static export compatibility
- route correctness and link destinations
- asset path correctness
- consistency between homepage cards and destination pages
- shared UI regressions
- unnecessary structural churn
- documentation accuracy

Flag:

- broken static-export assumptions
- asset-path mismatches
- route changes without matching navigation updates
- unnecessary package-manager churn
- large UI rewrites for narrow content requests
