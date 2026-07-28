# XM Bilverkstad

Website for XM Bilverkstad, an independent car workshop at Anläggarvägen 20 in
Handen, Haninge (southern Stockholm).

## Stack

- **TanStack Start v1** (React 19) with **TanStack Router** file-based routing
  and **TanStack Query**
- **Vite 7** + **TypeScript** in strict mode
- **Tailwind CSS v4** via `@tailwindcss/vite` — theme lives in `@theme` inside
  `src/styles/app.css`, there is no `tailwind.config.js`
- **shadcn/ui** (new-york) components on Radix primitives, icons from
  `lucide-react`
- **react-hook-form** + **zod** for the booking wizard
- **bun** as the package manager
- Deployed to **Netlify** through `@netlify/vite-plugin-tanstack-start`

## Getting started

```bash
bun install
bun run dev        # http://localhost:3000
bun run build      # production build + Netlify SSR entry
bun run typecheck
```

## Structure

```
src/
  routes/            file-based routes (__root, index, tjanster, boka, …)
  components/
    ui/              shadcn/ui primitives
    sections/        page sections shared between routes
  data/              site details, services, reviews, booking packages
  styles/app.css     Tailwind v4 theme
public/images/       site imagery
```

Content lives in `src/data`, so copy and prices can be edited without touching
the components. `src/data/services.ts` drives both the services grid and the
`/tjanster/$slug` detail pages, including their FAQ and JSON-LD.

## Notes

- The site is dark-only by design: black canvas, zinc panels, `blue-600` as the
  single call-to-action colour.
- The booking wizard is client-side only — submitting shows a confirmation and
  does not post anywhere yet. Wiring it to a backend (e.g. Supabase) is the next
  step if bookings need to be stored or emailed.
- Photography in `public/images` was generated with OpenAI's image model rather
  than shot in the workshop; swap in real photos when available.
