# nahue-cv

Personal CV website — single-page, dark, industrial. Built with Next.js 14, Tailwind, shadcn/ui patterns and Framer Motion.

Live: _add Vercel URL once deployed_

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui patterns
- **Animations**: Framer Motion
- **Icons**: lucide-react
- **Hosting**: Vercel

## Architecture

- `app/` — Next.js App Router (layout + single page)
- `components/` — one section per file, plus shared `navbar`, `footer`, `section-heading`, and `ui/button`
- `lib/cv-data.ts` — **single source of truth for all CV content**. Edit here, the site updates everywhere.
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

The site renders one route (`/`) that stacks all sections vertically. Navbar anchors point to section IDs (`#about`, `#experience`, …). Each section is a Framer-Motion-animated component that fades in on scroll.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All copy lives in [`lib/cv-data.ts`](./lib/cv-data.ts). Components are typed against the structures exported there — change the data, the UI updates.

## Deploy

The repo is wired for Vercel. Push to `main` → Vercel builds and deploys automatically. See `DEPLOY.md` for the first-time setup instructions.
