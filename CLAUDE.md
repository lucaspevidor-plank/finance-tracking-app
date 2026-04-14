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

## Project Structure

```
app/
├── layout.tsx                      # Root layout (fonts, global providers)
├── page.tsx                        # Root route — redirects to /pages/dashboard
├── globals.css                     # Global styles and Tailwind @theme configuration
├── components/                     # Shared/reusable UI components
│   ├── Navbar.tsx
│   ├── SummaryCard.tsx
│   ├── TransactionList.tsx
│   └── SpendingBreakdown.tsx
├── pages/                          # App Router page segments (folder name = URL segment)
│   └── dashboard/
│       └── page.tsx                # /pages/dashboard — main dashboard view
├── hooks/                          # Custom React hooks (use* prefix)
├── lib/                            # Utility functions, helpers, and shared logic
│   └── mock-data.ts                # Placeholder data (replace with real API calls)
├── types/                          # Shared TypeScript types and interfaces
│   └── finance.ts                  # Transaction, Category interfaces
└── api/                            # API route handlers (route.ts files)
```

### Conventions

- **Components**: All reusable UI components go in `app/components/`. One component per file, named with PascalCase (e.g., `TransactionCard.tsx`).
- **Pages**: Route segments live under `app/pages/[route]/page.tsx`. Keep page files thin — delegate logic to components and hooks.
- **Hooks**: Custom hooks go in `app/hooks/`, prefixed with `use` (e.g., `useTransactions.ts`).
- **Lib**: Pure utility functions and data-fetching helpers go in `app/lib/`. Placeholder data lives in `app/lib/mock-data.ts`.
- **Types**: Shared TypeScript interfaces and types go in `app/types/`.
- **API routes**: Server-side route handlers go in `app/api/[route]/route.ts`.
