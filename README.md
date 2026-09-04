# 🌟 Ghulam Dastgir — Portfolio

A modern, animated developer portfolio built with **React + TypeScript + Vite**,
styled with **Tailwind CSS v4**, and animated with **Motion** (Framer Motion).
Dark, cinematic single-page design with scroll-reveal sections, a pointer-tilt
project grid, a spring-animated project modal, and an ambient animated background.

## 🚀 Live Demo

Deployed on **Vercel** — <!-- paste your vercel.app URL here -->

## 🧱 Stack

| Layer      | Tech |
|------------|------|
| Framework  | React 18 + TypeScript |
| Build tool | Vite 6 |
| Styling    | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation  | `motion` (motion/react) |
| Icons      | `lucide-react` |
| Fonts      | Space Grotesk (display), Inter (body), JetBrains Mono (accents) |

The visual language (colors, typography, spacing, motion rules) is captured as a
Stitch design system and documented inline in `src/index.css` via `@theme`.

## 📱 Sections

- **Hero** — staggered word-by-word headline reveal, animated code card
- **About** — bio, portrait with gradient glow, stat tiles
- **Experience** — vertical timeline with a drawn-in gradient rail (Amperor Tech, 10Pearls)
- **Skills & Tools** — grouped chips + an infinite marquee
- **Selected Work** — asymmetric project grid, pointer-follow tilt + glow, detail modal
- **Contact** — split info / form, `mailto:` submission

## 🗂️ Structure

```
src/
  components/     UI + section components
  data/           site.ts, projects.ts, experience.ts, skills.ts  (edit content here)
  lib/motion.ts   shared animation variants
  index.css       Tailwind theme tokens + base styles
public/           resume PDF, portrait, favicon
legacy/           the previous vanilla HTML/CSS/JS site (kept for reference)
```

## 🛠️ Getting Started

```bash
npm install
npm run dev      # http://localhost:5173 (client-only, HMR)
npm run build    # type-check + client build + SSR prerender  ->  dist/
npm run preview  # serve the production build
```

### Rendering — "loads at once"

`npm run build` runs three steps:

1. `vite build` — the normal client bundle.
2. `vite build --ssr src/entry-server.tsx` — a server bundle.
3. `node prerender.js` — renders `<App />` to static HTML with
   `react-dom/server` and inlines it into `dist/index.html`.

So the deployed page ships **fully rendered markup** (good for first paint and
SEO); the client then `hydrateRoot`s it and the Motion animations play exactly
as before. Output stays 100% static — no Node server at runtime. A `<noscript>`
block reveals all content if JS is disabled.

### Contact form

Wired to [FormSubmit](https://formsubmit.co) (`https://formsubmit.co/ajax/<email>`),
no API key. **One-time setup:** the first submission makes FormSubmit email an
"Activate Form" link to the address in `src/data/site.ts` — click it once and
submissions then land in that inbox. Until then the form shows an
"email me directly" fallback. A honeypot field guards against bots.

## ✏️ Editing content

All copy lives in `src/data/`. Add a project by appending an object to
`projects` in `src/data/projects.ts`; update roles in `experience.ts`; the
resume link and socials are in `site.ts`.

## 🚢 Deploy

Deployed on **Vercel** (framework preset: Vite; build `npm run build`, output
`dist`). `base: "./"` in `vite.config.ts` keeps the output portable to any host
or sub-path.
