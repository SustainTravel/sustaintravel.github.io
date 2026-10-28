# Sustain Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A bilingual (EN / PT-PT) demo website for Sustain, a slow-travel agency in rural Portugal, with a landing page and a tour catalogue of 7 tours. (Owner amendment 2026-10-28: no checkout — "Book" buttons do nothing for now.)

**Architecture:** Next.js App Router with static export (`output: 'export'`). All pages live under `src/app/[locale]/…` and are pre-rendered for `en` and `pt` via `generateStaticParams`. Content (tours, UI strings, photo credits) lives in typed TS files per locale. Pure logic (locale helpers, formatting) is unit-tested with Vitest. No checkout.

**Tech Stack:** Next.js (latest, App Router) + React + TypeScript, Tailwind CSS v4, `next/font` (self-hosted at build), Vitest.

**Spec:** `docs/superpowers/specs/2026-10-28-sustain-website-design.md`

## Global Constraints

- Static export only: `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`. No API routes, no server actions, no middleware.
- No network requests at runtime to third parties: fonts via `next/font` (self-hosted), all photos in `public/`, no CDNs.
- Nothing the user types is sent anywhere or persisted. The only `localStorage` key allowed is `sustain-locale`.
- No checkout (owner amendment 2026-10-28): every "Book this journey" control is a `<button type="button">` with no handler and no navigation. The header "Book a trip" CTA links to the tours catalogue.
- Every user-visible string exists in EN and PT-PT (European Portuguese, not Brazilian: "autocarro" not "ônibus", "telemóvel" not "celular", "pequeno-almoço" not "café da manhã").
- Palette tokens (in `globals.css` `@theme`): `cream #F9F7EB` (page bg = logo bg), `forest #2F5D3A`, `leaf #495E35`, `sage #8BAA6B`, `sage-pale #C9D8B0`, `sun #EDAB4B`, `terracotta #C8693A`, `wicker #9A6A3A`. Text on cream uses `forest` or darker; WCAG AA contrast everywhere (check `sun` buttons use dark text).
- Mobile first-class: every page checked at 360, 390, 768 and 1440 px wide; no horizontal scroll; touch targets ≥ 44 px; inputs ≥ 16 px font (prevents iOS zoom).
- `prefers-reduced-motion` disables non-essential animation.
- Prices are integer EUR per person; display via `formatPrice` only.
- Visual work (Tasks 5, 6, 8) MUST invoke the `frontend-design` skill before writing UI. Final QA (Task 9) MUST invoke the `web-design-guidelines` skill and fix what it flags.

## Review Focus

1. **Switching language on a deep page** — `/en/tours/<slug>/` must map to `/pt/tours/<slug>/` (Task 2 test), and the switch must keep the visitor on the same page.
2. **Long PT strings** — Portuguese labels must not overflow buttons, nav, filter chips or tour cards at 360 px (Task 9 visual check in PT).
3. **Unknown tour slug** — `/en/tours/nope/` serves the localized 404 (`dynamicParams = false`; Task 6 build check).
4. **Dead "Book" button** — must not look broken: it is a real focusable button, keeps hover/focus styles, and does not navigate or throw (Task 6/9 browser check).
5. **Root redirect with blocked storage** — `/` must still redirect when `localStorage` throws (parked T1 minor, fixed in Task 9).

---

## File Structure

```
sustain/
  next.config.ts                    static export config
  vitest.config.ts
  src/app/globals.css               Tailwind import + @theme tokens + base styles
  src/app/(root)/layout.tsx         minimal <html> root for "/"
  src/app/(root)/page.tsx           client redirect to /en/ or /pt/
  src/app/[locale]/layout.tsx       <html lang>, fonts, Header, Footer, generateStaticParams
  src/app/[locale]/page.tsx         landing
  src/app/[locale]/tours/page.tsx   catalogue
  src/app/[locale]/tours/[slug]/page.tsx
    src/app/[locale]/credits/page.tsx
  src/app/[locale]/not-found.tsx
  src/i18n/config.ts                locales, Locale, isLocale, switchLocalePath, pickInitialLocale
  src/i18n/dictionaries/en.ts       UI strings (source of the Dictionary type)
  src/i18n/dictionaries/pt.ts       UI strings typed as Dictionary
  src/i18n/get-dictionary.ts
  src/content/types.ts              Tour, Localized, TourType, ExtraId
  src/content/tours.ts              the 7 tours
  src/content/photo-credits.ts
  src/lib/format.ts                 formatPrice, formatDate
  src/components/icons/*.tsx        Sun, Birds, Sprout, Basket, Bus, Bike (flat SVG in logo style)
  src/components/layout/{Header,MobileMenu,LanguageSwitch,Footer}.tsx
  src/components/landing/{Hero,Different,FeaturedTours,Values,HowItWorks,Impact,About,Testimonials,Faq,Contact}.tsx
  src/components/tours/{TourCard,TourBadges,TourFilter,Gallery,Itinerary}.tsx
  public/logo.jpg                   (exists)
  public/images/hero.jpg, team.jpg, tours/<slug>-<n>.jpg
  README.md                         run, build, deploy, swap team photo
```

Tests sit next to their module: `src/**/<name>.test.ts`.

---

### Task 1: Scaffold, tokens and locale routing skeleton

**Files:**
- Create: project via `create-next-app`, `next.config.ts`, `vitest.config.ts`, `src/app/globals.css`, `src/app/(root)/layout.tsx`, `src/app/(root)/page.tsx`, `src/app/[locale]/layout.tsx`, `src/app/[locale]/page.tsx` (placeholder "Sustain"), `src/i18n/config.ts`
- Test: `src/i18n/config.test.ts`

**Interfaces:**
- Produces:
  - `locales = ['en','pt'] as const`, `type Locale = typeof locales[number]`, `defaultLocale: Locale = 'en'`, `LOCALE_STORAGE_KEY = 'sustain-locale'`
  - `isLocale(x: string): x is Locale`
  - `pickInitialLocale(stored: string | null, browserLangs: readonly string[]): Locale`
  - `[locale]/layout.tsx` exports `generateStaticParams()` returning `[{locale:'en'},{locale:'pt'}]` and `dynamicParams = false`

- [ ] **Step 1:** In `/home/nils/Documents/Side/sustain` (already contains `docs/` and `public/logo.jpg`), scaffold into a temp dir with `npx create-next-app@latest tmp-app --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm` (answer any extra prompts with defaults) and move its contents in (keep existing `docs/`, `public/logo.jpg`). Delete the starter `src/app/layout.tsx` and `src/app/page.tsx` (replaced by the two root layouts). `git init` if not a repo; add `.gitignore` entries `out/`, `.next/`, `node_modules/`.
- [ ] **Step 2:** `npm i -D vitest`; add scripts `"test": "vitest run"`. `next.config.ts`: `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`.
- [ ] **Step 3: Write failing tests** in `src/i18n/config.test.ts`:
  - `isLocale('en')` and `isLocale('pt')` true; `isLocale('de')`, `isLocale('')` false
  - `pickInitialLocale('pt', ['en-US'])` → `'pt'` (stored wins)
  - `pickInitialLocale('xx', ['pt-PT'])` → `'pt'` (invalid stored ignored)
  - `pickInitialLocale(null, ['pt-BR','en'])` → `'pt'`
  - `pickInitialLocale(null, ['de-DE'])` → `'en'`
  - `pickInitialLocale(null, [])` → `'en'`
- [ ] **Step 4:** Run `npm test` → FAIL (module missing).
- [ ] **Step 5:** Implement `src/i18n/config.ts`.
- [ ] **Step 6:** Run `npm test` → PASS.
- [ ] **Step 7:** `globals.css`: `@import "tailwindcss";` plus `@theme` with the palette tokens from Global Constraints, `body` bg `cream`, text `forest`. Fonts: invoke `frontend-design` skill to choose a characterful display face + readable body face from Google Fonts; load via `next/font/google` in `[locale]/layout.tsx` as CSS variables. `[locale]/layout.tsx` renders `<html lang={locale === 'pt' ? 'pt-PT' : 'en'}>`. `(root)/layout.tsx` renders a bare `<html lang="en"><body>`; `(root)/page.tsx` is a client component that on mount calls `pickInitialLocale(localStorage.getItem(LOCALE_STORAGE_KEY), navigator.languages)` and `location.replace('/'+locale+'/')`, with visible fallback links to `/en/` and `/pt/`.
- [ ] **Step 8:** Run `npm run build` → succeeds; `ls out/en/index.html out/pt/index.html out/index.html` all exist.
- [ ] **Step 9:** Commit `chore: scaffold Next.js static site with locale routing`.

---

### Task 2: UI dictionaries, formatting and language switch helper

**Files:**
- Create: `src/i18n/dictionaries/en.ts`, `src/i18n/dictionaries/pt.ts`, `src/i18n/get-dictionary.ts`, `src/lib/format.ts`
- Modify: `src/i18n/config.ts` (add `switchLocalePath`)
- Test: `src/i18n/dictionaries.test.ts`, `src/i18n/config.test.ts`, `src/lib/format.test.ts`

**Interfaces:**
- Consumes: `Locale`, `locales` (Task 1)
- Produces:
  - `en` (plain object, nested by area: `nav`, `hero`, `different`, `values`, `how`, `impact`, `about`, `testimonials`, `faq`, `contact`, `footer`, `tours`, `tour`, `checkout`, `credits`, `notFound`, `common`); `type Dictionary = typeof en`; `pt: Dictionary`
  - `getDictionary(locale: Locale): Dictionary`
  - `switchLocalePath(pathname: string, to: Locale): string`
  - `formatPrice(amount: number, locale: Locale): string` — `Intl.NumberFormat(locale==='pt'?'pt-PT':'en-IE', {style:'currency', currency:'EUR', maximumFractionDigits:0})`
  - `formatDate(isoDate: string, locale: Locale, opts?: Intl.DateTimeFormatOptions): string` — parses `YYYY-MM-DD` as UTC, formats with `timeZone:'UTC'`

- [ ] **Step 1: Write failing tests:**
  - `dictionaries.test.ts`: recursively walk `en` and `pt`; every leaf path in `en` exists in `pt` and vice versa; no leaf string is empty or whitespace; `pt.checkout.demoBanner` and `en.checkout.demoBanner` equal the exact Global Constraints strings.
  - `config.test.ts` additions: `switchLocalePath('/en/', 'pt')` → `'/pt/'`; `switchLocalePath('/en/book/replant-the-serra/', 'pt')` → `'/pt/book/replant-the-serra/'`; `switchLocalePath('/pt/tours/', 'en')` → `'/en/tours/'`; `switchLocalePath('/', 'pt')` → `'/pt/'`.
  - `format.test.ts`: `formatPrice(1190,'en')` → `'€1,190'`; `formatPrice(2890,'pt')` matches `/^2[\s  .]?890[\s  ]€$/`; `formatDate('2026-11-14','en',{day:'numeric',month:'long'})` → `'14 November'`; same in `pt` → `'14 de novembro'`.
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Implement. Write all landing, catalogue, tour-page, checkout, credits and 404 copy now in both languages, following spec §6 (sections and their order), §6.1 values list (EV-only transfers, bikes, eat local, off-season, small groups, giving back) and §8 (step names, extras names, MB WAY, "what happens next"). Testimonials (3) and impact numbers are invented demo data. FAQ: what is slow travel, why off-season, how transfers work (electric cars/buses), dietary needs, cancellation.
- [ ] **Step 4:** `npm test` → PASS.
- [ ] **Step 5:** Commit `feat: add EN/PT dictionaries and formatting helpers`.

---

### Task 3: Tour content

**Files:**
- Create: `src/content/types.ts`, `src/content/tours.ts`
- Test: `src/content/tours.test.ts`

**Interfaces:**
- Produces (`types.ts`):
```ts
export type Localized<T> = Record<Locale, T>;
export type TourType = 'planting' | 'hiking' | 'biking' | 'yoga' | 'offseason';
export type ExtraId = 'ebike' | 'picnic' | 'trees';
export interface ItineraryDay { title: Localized<string>; body: Localized<string> }
export interface Tour {
  slug: string; days: number; priceFrom: number; maxGroup: number;
  types: TourType[]; featured: boolean;
  allowedMonths: number[] | null;          // 1–12; null = all year
  badges: { ev: true; bike: boolean; farm: boolean };
  extras: ExtraId[];
  images: string[];                        // '/images/tours/<slug>-<n>.jpg', [0] = card/hero
  title: Localized<string>; region: Localized<string>; summary: Localized<string>;
  highlights: Localized<string[]>; food: Localized<string[]>;
  included: Localized<string[]>; notIncluded: Localized<string[]>;
  impact: Localized<string>;
  itinerary: ItineraryDay[];
}
```
- Produces (`tours.ts`): `tours: Tour[]`, `getTour(slug: string): Tour | undefined`

| slug | days | priceFrom | types | allowedMonths | featured |
|---|---|---|---|---|---|
| `replant-the-serra` | 7 | 1190 | planting, hiking | null | yes |
| `peneda-geres-village-trails` | 8 | 1450 | hiking | null | no |
| `ecopista-do-dao-by-bike` | 7 | 1350 | biking | null | yes |
| `alentejo-slow-yoga-retreat` | 10 | 1890 | yoga | null | no |
| `sintra-lisbon-quietly` | 7 | 1290 | offseason | [11,12,1,2,3] | yes |
| `algarve-in-winter` | 9 | 1590 | offseason, hiking | [11,12,1,2,3] | no |
| `slow-portugal-journey` | 14 | 2890 | planting, hiking, biking, yoga | null | yes |

All `maxGroup: 12`, `badges.ev: true`, `badges.farm: true`. `badges.bike` true for Dão, Algarve, Slow Portugal, Replant (bike to planting sites). `extras`: all tours have `picnic` and `trees`; `ebike` only where `badges.bike`. Regions, food moments and themes per spec §7.

- [ ] **Step 1: Write failing tests** in `tours.test.ts`:
  - exactly 7 tours, unique slugs, slugs match the table
  - for every tour: `itinerary.length === days`; every `Localized` string in both locales is non-empty; every localized array has the same length in `en` and `pt` and length ≥ 1 (≥ 3 for highlights)
  - `images.length >= 3`, every path matches `/^\/images\/tours\/<slug>-\d\.jpg$/`
  - offseason tours have `allowedMonths` `[11,12,1,2,3]`; all others `null`
  - `ebike ∈ extras` iff `badges.bike`
  - `getTour('nope')` → `undefined`
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Write the 7 tours (EN + PT-PT), slow pace: rest/free afternoons, max ~15–20 km hiking or ~40 km cycling a day, EV transfer days marked, at least one farmer/producer meal per tour.
- [ ] **Step 4:** `npm test` → PASS.
- [ ] **Step 5:** Commit `feat: add tour content`.

---

### Task 4: Real photos and credits

**Files:**
- Create: `public/images/hero.jpg`, `public/images/team.jpg` (placeholder), `public/images/tours/<slug>-<n>.jpg` (the paths from Task 3), `src/content/photo-credits.ts`, `src/app/[locale]/credits/page.tsx`
- Test: `src/content/photo-credits.test.ts`

**Interfaces:**
- Consumes: `tours` (Task 3)
- Produces: `photoCredits: { file: string; author: string; license: string; source: string }[]`

- [ ] **Step 1: Write failing test:** every `tour.images` path plus `/images/hero.jpg` exists on disk under `public/` and has a matching `photoCredits` entry; every credit has non-empty `author`, `source` (https URL) and `license` from the allowlist `CC0`, `Public domain`, `CC BY 2.0/3.0/4.0`, `CC BY-SA 2.0/3.0/4.0`, `Unsplash License`.
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Find real photos of each actual place (Serra da Lousã schist villages, Peneda-Gerês, Ecopista do Dão, Alentejo cork oaks, Sintra/Lisbon, Western Algarve/Costa Vicentina; Slow Portugal reuses varied shots). Source: Wikimedia Commons API (`action=query&generator=search&gsrnamespace=6&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=1600`) and/or Unsplash pages. Download into a fresh scratch dir, check with `file` that each is a JPEG, then copy to the target names at ~1600 px wide, ≤ 400 KB. Record author/license/source from `extmetadata`. Hero: a wide rural Portugal landscape. `team.jpg`: generated 3:2 cream placeholder (e.g. 1500×1000 with sage illustration-style shapes and text-free) — the About section overlays the "photo coming soon" label in markup so it's translated.
- [ ] **Step 4:** Credits page lists every photo with author, licence and source link, grouped by tour.
- [ ] **Step 5:** `npm test` → PASS; open 3 random images to eyeball they show the right place.
- [ ] **Step 6:** Commit `feat: add real place photos with credits`.

---

### Task 5: Layout chrome and landing page

**Files:**
- Create: `src/components/icons/*`, `src/components/layout/*`, `src/components/landing/*`, `src/components/tours/TourCard.tsx`, `src/components/tours/TourBadges.tsx`, `src/app/[locale]/not-found.tsx`
- Modify: `src/app/[locale]/layout.tsx`, `src/app/[locale]/page.tsx`

**Interfaces:**
- Consumes: `getDictionary`, `switchLocalePath`, `LOCALE_STORAGE_KEY`, `tours`, `formatPrice`
- Produces: `<TourCard tour={Tour} locale={Locale} dict={Dictionary} />`, `<TourBadges tour={Tour} dict={Dictionary} />` (reused in Tasks 6 and 8)

- [ ] **Step 1:** Invoke the `frontend-design` skill. Direction: warm, earthy, hand-made like the logo — the logo's circle-arc motif, flat illustrated accents (sun, birds, sprout, basket) as section dividers/icons, rounded organic shapes, paper-cream background, real photos carry emotion. Not a generic travel template.
- [ ] **Step 2:** Header: logo + "Sustain", nav anchors (Tours → `/[locale]/tours/`, Values/About/FAQ/Contact → landing anchors), `LanguageSwitch` (EN | PT; `<a>` to `switchLocalePath(pathname, other)`, writes `LOCALE_STORAGE_KEY` on click, `aria-current` on active), "Book a trip" CTA. Below `md`: hamburger opens `MobileMenu` (focus trapped, Esc closes, body scroll locked). Footer per spec §6.1 item 11 with logo in a cream circle badge on dark green.
- [ ] **Step 3:** Landing sections in spec §6.1 order, each a component with an `id` for anchors. Featured tours = `tours.filter(t => t.featured)` as `TourCard`s (photo, title, region, `days`, "from" `formatPrice`, type tags, `TourBadges`, "Nov–Mar only" tag when `allowedMonths`). About: mission story + `team.jpg` in a 3:2 `object-fit: cover` frame with the translated "Team photo coming soon" label. Contact form: on submit `preventDefault`, show translated success message, send nothing.
- [ ] **Step 4:** `npm run build` → succeeds. `npx serve out` and check `/en/` and `/pt/` at 360, 390, 768, 1440 px (browser devtools MCP screenshots): no horizontal scroll, nav works, language switch keeps the page, mobile menu opens/closes with keyboard.
- [ ] **Step 5:** Commit `feat: add header, footer and landing page`.

---

### Task 6: Tour catalogue and tour detail pages

**Files:**
- Create: `src/app/[locale]/tours/page.tsx`, `src/app/[locale]/tours/[slug]/page.tsx`, `src/components/tours/{TourFilter,Gallery,Itinerary}.tsx`

**Interfaces:**
- Consumes: `tours`, `getTour`, `TourCard`, `TourBadges`, `getDictionary`, `formatPrice`
- Produces: tour detail route `/[locale]/tours/[slug]/` with `generateStaticParams` over locales × slugs and `dynamicParams = false`; "Book this journey" is a `<button type="button">` that does nothing (no checkout)

- [ ] **Step 1:** Invoke `frontend-design` (same direction as Task 5).
- [ ] **Step 2:** Catalogue: intro, `TourFilter` (client; chips: All, Tree planting, Hiking, Biking, Yoga, Off-season classics; filters by `types`; filter state in `?type=` query param is not needed — local state), grid of `TourCard`s, empty state never possible but handled.
- [ ] **Step 3:** Detail page per spec §6.3: `Gallery` (swipeable/scroll-snap on mobile, keyboard-accessible), overview, highlights, `Itinerary` (day-by-day, collapsible on mobile), food moments, included / not included, impact line, transport note, group size, price; off-season tours show a note explaining why they run Nov–Mar only. Sticky "Book this journey" bar at the bottom on mobile, sticky side card on desktop. `generateMetadata` sets localized title/description.
- [ ] **Step 4:** `npm run build`; confirm `out/{en,pt}/tours/<slug>/index.html` exist for all 7 slugs (14 files). Visual check at 360 and 1440 px for one off-season and one all-year tour in both languages.
- [ ] **Step 5:** Commit `feat: add tour catalogue and detail pages`.

---

### Task 7: (dropped 2026-10-28 — owner removed the simulated checkout)

### Task 8: (dropped 2026-10-28 — owner removed the simulated checkout)

---

### Task 9: QA against web design guidelines, mobile pass, README

**Files:**
- Modify: whatever the review flags
- Create: `README.md`

- [ ] **Step 0:** Remove the now-unused `checkout` block from both dictionaries and its demo-banner test; delete any `book` route if present. Apply the parked minors listed in the ledger.
- [ ] **Step 1:** Invoke the `web-design-guidelines` skill and review every page type (`/en/`, `/pt/`, catalogue, one detail page, credits, 404). Fix every finding; note any deliberately not fixed with a one-line reason in the final report.
- [ ] **Step 2:** Mobile pass in **PT** (longer strings) at 360 px: header, mobile menu, filter chips, tour cards, itinerary, sticky book bar, buttons — no overflow, no horizontal scroll, touch targets ≥ 44 px. Repeat spot checks at 768 and 1440 px.
- [ ] **Step 3:** Lighthouse (devtools MCP) on `/en/` and one tour detail page, mobile profile: Accessibility ≥ 95, no console errors. Keyboard-only run through landing → catalogue → tour page.
- [ ] **Step 4:** `README.md`: `npm install`, `npm run dev`, `npm test`, `npm run build` → `out/`, deploy (drag `out/` to Netlify, or GitHub Pages), offline backup `npx serve out`, **swap team photo = replace `public/images/team.jpg` (3:2 landscape recommended)**, where copy lives (`src/i18n/dictionaries/*.ts`, `src/content/tours.ts`).
- [ ] **Step 5:** `npm test` and `npm run build` both pass.
- [ ] **Step 6:** Commit `chore: QA fixes and README`.
