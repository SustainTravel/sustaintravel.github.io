# Sustain

A bilingual (English / European Portuguese) demo website for Sustain, a slow-travel agency in rural Portugal. It is a fully static Next.js site: no server, no database and no checkout. The "Book this journey" buttons do nothing on purpose.

- `/en/` and `/pt/`: landing page
- `/en/tours/`: all seven journeys, with a filter (`?type=hiking` and similar links can be shared)
- `/en/tours/<slug>/`: one page per journey
- `/en/credits/`: photo credits
- `/`: picks a language (the last one chosen, otherwise the browser's) and redirects

## Run it locally

Needs Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # unit tests (Vitest)
npm run lint
npm run build      # static site written to out/
```

The first `npm run build` (and `npm run dev`) needs an internet connection once, to download the two Google fonts. After that they are self-hosted in the build, and the site makes no requests to other sites.

## Deploy

`npm run build` writes the complete site to `out/`. Any static host works.

- **Netlify (recommended):** go to <https://app.netlify.com/drop> and drag the `out/` folder onto the page. You get a public URL straight away.
- **GitHub Pages:** works only as a *user/organisation site* (`<name>.github.io`) or with a *custom domain*. A normal project site lives in a subfolder (`<name>.github.io/sustain/`), which breaks the site's absolute links such as `/en/`. Publish the contents of `out/` and add an empty `.nojekyll` file so the `_next/` folder is served.

Unknown URLs show the bilingual `404.html`; Netlify and GitHub Pages both pick it up automatically.

## Offline backup for the presentation

If the venue Wi-Fi fails, run the built site from your laptop:

```bash
npm run build
npx serve out      # then open the URL it prints, e.g. http://localhost:3000
```

`npx serve` downloads a small tool the first time, so run it once before the event while you are still online.

## Change the content

| What | Where |
| --- | --- |
| All page text, both languages (landing, menu, footer, FAQ, contact, 404…) | `src/i18n/dictionaries/en.ts` and `src/i18n/dictionaries/pt.ts` |
| The seven journeys: titles, prices, itineraries, food, inclusions | `src/content/tours.ts` |
| Photo credits | `src/content/photo-credits.ts` |
| Colours | `src/app/globals.css` (`@theme` block) |

Both dictionaries must keep exactly the same keys; `npm test` fails if one language is missing a string. The three testimonials quote journey titles from `tours.ts`, so if you rename one of those journeys, update the testimonial too (a test checks this).

### Swap the team photo

Replace `public/images/team.jpg` with the real photo, keeping the same file name. A 3:2 landscape image works best (for example 1500 × 1000 px); other shapes are cropped to fit. Then remove the "Team photo coming soon" label: delete the `<figcaption>` in `src/components/landing/About.tsx`, and update `about.photoAlt` in both dictionaries to describe the photo.

### Replace tour photos

Each journey uses four photos, `public/images/tours/<slug>-1.jpg` to `-4.jpg`; the first one is the card image. Every photo needs an entry in `src/content/photo-credits.ts` (a test checks this).

## Placeholders to replace before going live

- The email address `ola@sustain.pt` (in both dictionaries, `footer.email`) is a placeholder.
- The Instagram and Facebook links in `src/components/layout/Footer.tsx` point to the sites' home pages, not to real Sustain accounts.
- The contact form only validates and says thank you; nothing is sent or stored.
- The impact figures and testimonials are sample copy.
