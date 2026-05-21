# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for **Conceito Mármores & Granitos** — a premium marble and granite company.
Instagram: https://www.instagram.com/conceitomarmoresegranitoss/

## Tech stack

- **Next.js 14** (App Router, standalone output)
- **TypeScript**
- **Tailwind CSS** with custom `gold` and `dark` color tokens
- **Framer Motion** for all animations
- **Lucide React** for icons

## Commands

```bash
npm install       # install dependencies (generates package-lock.json)
npm run dev       # dev server on http://localhost:3000
npm run build     # production build
npm run lint      # ESLint
```

## Docker deployment (port 8002)

```bash
docker compose up -d --build   # build and start on port 8002
docker compose down            # stop
```

The Dockerfile uses a 3-stage build (deps → builder → runner) with `output: 'standalone'`.
The runner stage uses `ENV PORT=8002 HOSTNAME=0.0.0.0` so Next.js binds on all interfaces.

## Architecture

All sections live as individual client components in `components/`. The page composes them in `app/page.tsx`. Layout and global fonts are in `app/layout.tsx`.

**Company info** (WhatsApp number, phone, email, address, Instagram URL) is centralised in `lib/constants.ts` — update that file before deploy.

**Images** are Unsplash placeholder URLs. Replace with real company photos in each component. Unsplash is already allowed in `next.config.js` `remotePatterns`; add other domains there as needed.

## Key design tokens

Defined in `tailwind.config.ts`:
- `gold` / `gold-light` / `gold-dark` — accent colour
- `dark` / `dark-100` through `dark-500` — background scale

Custom component classes (`btn-gold`, `btn-outline`, `section-label`, `section-heading`) live in `app/globals.css` under `@layer components`.

## Fonts

Loaded via `next/font/google` in `app/layout.tsx`:
- **Playfair Display** → `font-serif` (headings)
- **Inter** → `font-sans` (body, default)
