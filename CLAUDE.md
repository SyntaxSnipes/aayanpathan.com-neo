# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `vite-project/`:

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # TypeScript check + Vite build (outputs to dist/)
npm run lint       # ESLint
npm run preview    # Preview production build locally
npm run deploy     # Build and deploy to GitHub Pages (gh-pages -d dist)
```

## Architecture

Single-page portfolio site — no routing. The entire page lives in `src/App.tsx` as a set of memoized React components rendered top to bottom.

**Key structural points:**
- `App.tsx` contains all section components inline (`Header`, `MainContent`, and subsections). There is no separate `components/` directory.
- Three.js and Vanta.js (NET/WAVES effects) are loaded from CDN in `index.html`, not via npm. `src/vanta.d.ts` provides type declarations for the global `VANTA` object.
- Tailwind CSS is integrated via `@tailwindcss/vite` plugin (not PostCSS). Custom reusable classes (`.section`, `.full-bleed`, `.edge-fades`, etc.) are defined in `App.css`.
- The contact form uses EmailJS (`@emailjs/browser`) — no backend. Service/template IDs are stored directly in the component (not env vars).

**Styling conventions:**
- Dark theme base: `#0f0f17` background
- Font: Satoshi (loaded from Fontshare CDN in `index.html`)
- Glassmorphism pattern: `backdrop-blur` + `bg-gradient-to-br` with low-opacity backgrounds
- Responsive breakpoints follow Tailwind defaults (`md:`, `lg:`)

**Assets:**
- Tech stack SVG icons are in `src/assets/tech-stack-icons/`
- Project screenshots (PNG) are in `src/assets/`
