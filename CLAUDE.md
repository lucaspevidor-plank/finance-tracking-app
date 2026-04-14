# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test runner is configured yet.

## Architecture

This is a **Next.js 16.2.3** app using the **App Router** (`app/` directory). Next.js 16 has breaking changes from prior versions — always consult `node_modules/next/dist/docs/` before writing Next.js-specific code.

- **Framework**: Next.js 16 App Router — layouts in `app/layout.tsx`, pages as `app/**/page.tsx`, route handlers as `app/**/route.ts`
- **Styling**: Tailwind CSS v4 via PostCSS (`postcss.config.mjs`). v4 has a new configuration format — no `tailwind.config.js`; configuration lives in CSS via `@theme` inside `app/globals.css`
- **Language**: TypeScript (strict mode). Path alias `@/*` resolves to the repo root
- **React**: 19.2.4 — Server Components are the default; add `"use client"` only when needed for interactivity or browser APIs
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google` in the root layout
