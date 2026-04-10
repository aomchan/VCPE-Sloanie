# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About This Website

This is the official website for the **MIT Sloan Venture Capital & Private Equity (VCPE) Club**.

**Mission & Vision:** The VCPE Club is the central hub for all things entrepreneurship, startup, and venture for the entire MIT ecosystem — spanning not just the MBA program, but also undergrad and Ph.D. graduate communities. The club bridges members to venture ecosystems beyond MIT, including venture capital firms, founders and startups, alumni, and industry sponsors and partners.

The mission is to generate the most opportunities and connections for members to flourish in the venture and entrepreneurship space — whether connecting aspiring investors to VC firms, connecting founders to investors, or bringing industry professionals together on bigger projects.

**Three Pillars:**
1. **External Events with Partners** — firm treks, speaker series, and industry panels with top VC/PE firms
2. **Career Development** — opportunities within the venture capital space (recruiting, resume books, winternships)
3. **Internal Community** — cross-community events spanning MBA, undergrad, and Ph.D. organizations

**Tone & Branding:** Open, collaborative, and builder-centric. Copy should feel inclusive across the full MIT ecosystem, not MBA-exclusive. Emphasize opportunity, connection, and access to the venture world.

## Commands

```bash
# Development
npm run dev          # Start Vite dev server
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # ESLint

# Testing
npm run test         # Run unit tests once (vitest)
npm run test:watch   # Run unit tests in watch mode
npx playwright test  # Run e2e tests
```

To run a single test file: `npx vitest run src/path/to/file.test.ts`

## Architecture

**Stack:** React 18 + TypeScript + Vite, React Router v6, TailwindCSS + shadcn/ui, TanStack Query, React Hook Form + Zod.

**Routing** (`src/App.tsx`): Five pages — `/` (Index), `/events`, `/community`, `/team`, `/join` — plus a catch-all NotFound. Each page imports `Navbar` and `Footer` directly.

**Pages** (`src/pages/`): Self-contained page components. All page-level data (event lists, speaker arrays, metrics) is defined as constants at the top of each page file rather than fetched from an API.

**Components** (`src/components/`):
- `Navbar.tsx` — fixed, transparent-to-solid on scroll, with mobile drawer
- `Footer.tsx` — site-wide footer
- `NavLink.tsx` — individual nav link with active state
- `ui/` — full shadcn/ui component library (do not edit these directly; use the shadcn CLI to add/update)

**Styling conventions:**
- Brand colors: `text-sloan-red` / `bg-primary` (deep navy). Both are CSS custom properties defined in `src/index.css`.
- Display/heading font: `font-display` (Space Grotesk). Body font: `font-sans` (Inter).
- Layout utilities: `container-narrow` (max-w-6xl centered) and `section-padding` (py-20 md:py-28) — defined as `@layer utilities` in `src/index.css`.
- Path alias `@/` maps to `src/`.

**Tests:** Unit tests live in `src/test/` or colocated as `*.test.ts(x)`. Vitest + jsdom + Testing Library. E2E via Playwright (`playwright.config.ts`, `playwright-fixture.ts`).
