# DevRoots website

A Next.js (App Router) marketing site for DevRoots, a Kolkata-based systems
operations studio.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Pages

- `/` — Home
- `/services` — Web platforms, infrastructure & DevOps, managed operations
- `/about` — Studio background and values
- `/contact` — Contact form (currently front-end only, no email backend wired up)

## Notes / next steps

- **Copy is placeholder.** Everything under "Services", "About", and the
  contact details (email, phone) is draft copy for you to edit — search
  each page in `src/app/**/page.tsx`.
- **Fonts:** built with resilient system-font stacks (see
  `src/app/globals.css`) since this build environment couldn't reach Google
  Fonts. To use the originally intended type pairing, add real webfont
  files via `next/font/local` (e.g. Rajdhani or Chakra Petch for display,
  Inter for body, IBM Plex Mono for labels) — the CSS variables
  (`--font-display`, `--font-body`, `--font-mono`) are already wired up in
  `globals.css`, so dropping in font files only requires updating those
  three lines.
- **Contact form** currently just shows a "sent" confirmation state — wire
  it to an email service (Resend, Formspree, etc.) or an API route to
  actually deliver messages.
- **Brand assets** live in `public/brand/` (mark, wordmark, banner).
