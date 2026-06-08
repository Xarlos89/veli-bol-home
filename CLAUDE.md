# Veli Bol Excursions — Claude Code Guide

## What this project is

Static marketing website for Veli Bol Excursions, a boat tour company in Bol, Croatia. Single-page scroll. No backend, no router, no database. Builds to `dist/` and deploys to GitHub Pages via GitHub Actions.

## Commands

```bash
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve dist/ locally
```

## Stack

- **React 18** — UI
- **Vite 5** — build tool, `base: '/'` in `vite.config.js`
- **Tailwind CSS 3** — styling via utility classes + component layer in `src/index.css`
- **No router** — single HTML page, anchor links (`#essentials`, `#about`, etc.)

## Project layout

```
src/
  components/
    Navbar.jsx       sticky nav, logo + hamburger, anchor links in dropdown
    Footer.jsx       address / phone / email / copyright
  sections/          one file per visible scroll section, assembled in App.jsx
    Hero.jsx
    Essentials.jsx   tour info, pricing, map
    About.jsx
    Experience.jsx   dark navy "six reasons" grid
    FoodOnBoard.jsx  menu add-ons
    Gallery.jsx      2-col photo grid
  App.jsx            imports and orders all sections
  main.jsx           ReactDOM.createRoot
  index.css          @tailwind directives + .label, .section-heading, .btn-dark, .info-card
public/
  images/            boat.jpg, billboard.jpg — served as static assets
  favicon.svg
.github/
  workflows/
    deploy.yml       push to main → npm ci → npm run build → GitHub Pages
```

## Design tokens (tailwind.config.js)

| Token | Value | Used for |
|---|---|---|
| `cream` | `#F2EDE5` | page background |
| `cream-dark` | `#E8E1D7` | placeholder slots |
| `navy` | `#0C1B2B` | Experience section background |
| `navy-light` | `#142333` | Experience section cards |
| `amber` | `#C9973A` | labels, icons, accents |
| `ink` | `#1A1409` | body text |
| `soft` | `#DDD6CC` | borders, dividers |

Fonts: **Playfair Display** (serif — headings, logo, italic) · **Inter** (sans — body, labels, UI)

## Reusable CSS classes (src/index.css)

- `.label` — small amber spaced-caps section label
- `.section-heading` / `.section-heading-light` — Playfair Display bold h2
- `.btn-dark` — black filled CTA button
- `.btn-outline-light` — white outlined button (for use on dark/photo backgrounds)
- `.info-card` — white rounded card with shadow
- `.info-card-label` / `.info-card-value` — label + value typography inside info cards

## Section IDs (for anchor links)

`#home` · `#essentials` · `#about` · `#experience` · `#food` · `#gallery` · `#contact` (footer)

## Content that changes seasonally

- **Pricing** — `src/sections/Essentials.jsx` — the three-column price table
- **Food menu** — `src/sections/FoodOnBoard.jsx` — the `menu` array
- **Tour details** — `src/sections/Essentials.jsx` — the `infoCards` array (duration, schedule, destination, group size)

## Adding photos

1. Drop image into `public/images/` (JPG or WebP, keep under 400 KB)
2. In `src/sections/Gallery.jsx`, replace a `src: null` entry with `src: '/images/filename.jpg'`
3. Push to `main` — Actions builds and deploys automatically

## Deployment

- **GitHub Pages**: push to `main` triggers `.github/workflows/deploy.yml`
  - Actions pinned to exact versions: `checkout@v6.0.3`, `setup-node@v6.4.0`, `upload-pages-artifact@v5.0.0`, `deploy-pages@v5.0.0`
  - Node 26, `npm ci`, `npm run build`, artifact from `dist/`
  - Enable at: Settings → Pages → Source → GitHub Actions
- **Self-hosted**: see `Caddyfile` — drop `dist/` at `/var/www/veli-bol/`, Caddy handles HTTPS

## What's placeholder / not yet real

- Gallery slots 2, 3, 4, 6 — `src: null` in `Gallery.jsx`, renders `cream-dark` placeholder
- Google Maps embed in `Essentials.jsx` uses a placeholder embed URL — replace with a real embed from Google Maps if needed
- Crew bios — not present in current design (removed in redesign)
