# Sustain Travel Agency — Website Design

Date: 2026-10-28
Status: awaiting owner approval

## 1. Intent and the why

**Sustain** is a sustainable travel agency selling multi-day tour packages in rural Portugal. It promotes **slow and rural tourism**: hidden gems away from crowds, tree planting, hikes, bike rides, yoga, local farm food and national dishes, and visits to famous attractions **only in the off season** to fight mass tourism.

The site is a **demo** to be presented to **event organizers who asked the team to build it**. It must look and behave like a finished, real business site, including a convincing checkout, while having **no real backend, payments or data storage**. Success = organizers click through landing → tour → checkout → confirmation and believe it is a real, polished product that clearly communicates the mission.

## 2. Goals, non-goals, anti-goals

**Goals**
- Complete landing page with all standard sections plus a bilingual tour catalogue and a simulated checkout.
- Full English and Portuguese versions (every page, including tours and checkout).
- Visual identity derived from the logo (see §5).
- Mission visible in the product itself (off-season-only booking, impact lines, green badges), not only in copy.
- Shareable as a single link; works offline-ish at a venue (all assets self-hosted).

**Non-goals (for now)**
- Real payments, real availability, booking management, user accounts, CMS, emails.
- Analytics, cookie banners, SEO beyond sensible titles/meta.

**Anti-goals (failure even if it works)**
- Feels slick/corporate/generic "travel template" instead of warm, earthy, hand-made like the logo.
- Anyone could mistake the demo checkout for real and enter real card data → a visible "Demo — no payment is taken" notice in checkout.
- Any entered data leaves the browser or is persisted.
- Promoting fast/overpacked trips — itineraries must read as slow.

## 3. Constraints

- Owner chose **React** (option C). Node v22 available locally.
- Static hosting (Netlify / GitHub Pages / Vercel), no server.
- Team photo for "About us" arrives later → placeholder now, swappable by replacing one image file.
- Real photos of the actual places, downloaded from the web (Unsplash / Wikimedia Commons, free licences), self-hosted, credited.
- Accessibility: WCAG AA contrast, keyboard-operable checkout, `prefers-reduced-motion` respected.
- **Mobile is a first-class version (owner requirement)**, not a shrunk desktop: every page and section designed and checked at phone widths (~360–430px), tablet and desktop. Touch targets ≥ 44px, no horizontal scroll, readable type without zoom, thumb-friendly checkout (bottom summary bar, numeric keyboards for card/phone fields, native-feeling date picking).
- **Must pass the `web-design-guidelines` skill review (owner requirement)** — run it against the built pages before calling the work done, and fix what it flags.

## 4. Approaches considered

| Option | Trade-off |
|---|---|
| A. Plain HTML/CSS/JS | Zero build, but 7 tours × 2 languages duplicates layout everywhere; hard to maintain. |
| B. Astro static site | Best fit on paper (content-heavy, one interactive island, built-in i18n). Recommended, not chosen. |
| **C. React (chosen by owner)** | Heavier than strictly needed, but familiar, great for the interactive checkout. |

**Builder's call within C:** **Next.js (App Router) + TypeScript with static export** (`output: 'export'`). Reason: file-based routes give real per-language URLs (`/en/...`, `/pt/...`) and pre-rendered tour pages via `generateStaticParams`, while still exporting plain static files. Plain Vite + React Router would need extra work for per-page URLs on static hosts.

## 5. Visual identity (from the logo)

Palette (to be fine-tuned against the logo file):
- Forest green (primary, text on light) ≈ `#2F5D3A`
- Sage / meadow green ≈ `#8BAA6B`, pale sage ≈ `#C9D8B0`
- Sun yellow-orange (accent, CTAs) ≈ `#F2B441`
- Terracotta (roofs, secondary accent) ≈ `#C8693A`
- Wicker brown ≈ `#9A6A3A`
- Cream background ≈ `#FAF6EC`

Feel: warm, earthy, hand-drawn. Rounded organic shapes, the logo's circle-arc motif, soft paper-like background, small illustrated accents from the logo (sun, birds, basket, sprout) as dividers/icons. A characterful serif or rounded display face for headings + a readable sans for body (final pick at implementation via frontend-design skill). Real photos carry the tours; illustration accents carry the brand.

Logo: `public/logo.jpg` (615×615 JPEG, background sampled `#F9F7EB`; sun `#EDAB4B`, leaf green `#495E35`). Only a JPEG exists. *Builder's call:* use the site cream = the logo's background so the JPEG sits seamlessly; on dark surfaces (footer) show it inside a cream circle badge. Small accents (sun, birds, sprout, basket) are redrawn as simple SVG icons in the logo's flat style, not cut out of the JPEG.

## 6. Site structure

Routes (all under `/[locale]`, locale ∈ `en`, `pt`; `/` sends visitors to their stored/browser language, default `en`):

- `/[locale]` — Landing page
- `/[locale]/tours` — Tour catalogue with filter by experience type
- `/[locale]/tours/[slug]` — Tour detail
- `/[locale]/book/[slug]` — Simulated checkout
- `/[locale]/credits` — Photo credits

Header on every page: logo + "Sustain", nav (Tours, Values, About us, FAQ, Contact), **EN | PT switch** (keeps the visitor on the equivalent page; choice remembered in `localStorage`), "Book a trip" CTA. Mobile: hamburger menu.

### 6.1 Landing page sections (in order)
1. **Hero** — strong photo of rural Portugal, headline about slow travel, CTA "Explore tours".
2. **What makes us different** — short slow/rural tourism pitch: hidden gems, off-season classics, local people.
3. **Featured tours** — 3–4 tour cards (incl. the 14-day signature journey).
4. **Our values** — 
   - Zero-emission transfers: **only electric cars and electric buses**
   - **Bikes for getting around** wherever possible
   - **Eat local**: meals from local farmers and family producers, traditional Portuguese dishes
   - **Off-season travel** to famous sights to prevent mass tourism
   - **Small groups, local stays**
   - **Giving back**: tree planting / reforestation
5. **How it works** — 3 steps: choose a slow journey → book → we handle EV transfers, local stays and food.
6. **Impact in numbers** — demo figures (trees planted, km cycled, local producers partnered, % zero-emission transfers).
7. **About us** — mission story + **team photo placeholder** (same aspect ratio as final; one file swap).
8. **Testimonials** — 3 invented guest quotes.
9. **FAQ** — accordion (what is slow travel, why off-season, how transfers work, dietary needs, cancellation).
10. **Contact / newsletter** — form that shows a success message, sends nothing.
11. **Footer** — logo, short mission, links, socials (placeholder), contact email (placeholder), credits link, "© Sustain".

### 6.2 Tour card
Photo, title, region, duration, price "from €X / person", experience type tags, and green badges: 🚌 EV transfers · 🚲 bike days · 🧺 farm-to-table meals (shown where they apply). Off-season tours show a "Nov–Mar only" tag.

### 6.3 Tour detail page
Photo gallery (3–4 real photos), overview, highlights, **day-by-day itinerary** (shows the slow pace), local food moments, what's included / not included, impact line (e.g. "≈ 20 native trees planted per group"), transport note (EV transfers, bikes), group size, price, sticky "Book this journey" CTA.

## 7. Tours (content — names, lengths, prices are proposals)

All multi-day, slow-paced. Each includes regional food moments with local producers.

| # | Tour | Region | Days | Type | Food moment examples | Notes |
|---|---|---|---|---|---|---|
| 1 | Replant the Serra | Serra da Lousã (schist villages) | 7 | Tree planting | chanfana, local honey | native oaks after wildfires; impact line in trees |
| 2 | Peneda-Gerês Village Trails | Peneda-Gerês National Park | 8 | Hiking | cooking caldo verde & broa with a family | granite hamlets |
| 3 | Ecopista do Dão by Bike | Dão / Viseu | 7 | Biking | Dão wine, queijo Serra da Estrela | old railway greenway |
| 4 | Alentejo Slow Yoga Retreat | Alentejo cork-oak forest | 10 | Yoga | açorda, migas | sunrise yoga |
| 5 | Sintra & Lisbon, Quietly | Sintra / Lisbon | 7 | Off-season classics | travesseiros de Sintra, pastéis de nata | **bookable Nov–Mar only** |
| 6 | Algarve in Winter | Western Algarve / Costa Vicentina | 9 | Off-season classics + coastal walks | cataplana with fishermen | **bookable Nov–Mar only** |
| 7 | The Slow Portugal Journey (signature) | North → South | 14 | Mixed: planting, hiking, cycling, yoga | across all regions | flagship tour |

Prices in EUR per person, realistic for small-group full-board slow tours (builder sets, roughly €1,100–€2,900). Text for both languages written by the builder; Portuguese should be European Portuguese (pt-PT).

## 8. Simulated checkout

Must feel like a real live checkout. Nothing is sent, stored or validated against any service. Persistent banner: "Demo — no payment is taken. Do not enter real card details."

Steps with progress indicator, and an order summary panel (sticky on desktop) whose price updates live:
1. **Date** — calendar of departure dates. *Builder's call:* departures are generated by rule relative to today (e.g. every 2nd Saturday, next 12 months) so the link never shows past dates however long it's shared; "sold out" / "2 spots left" are assigned by a fixed pattern on the departure index so the look stays consistent. **Off-season tours (5, 6) only allow November–March**, with a short note explaining why.
2. **Travellers & extras** — group size (1–12); extras with prices: e-bike rental, farmers' market picnic basket, "plant 10 extra trees" donation.
3. **Your details** — lead traveller name, email, phone, country, dietary needs; basic client-side validation.
4. **Payment** — card form (number, expiry, CVC, name) with formatting and basic validation that accepts any well-formed test number; MB WAY option (Portuguese local touch, simulated). "Pay €X" button shows a short processing state.
5. **Confirmation** — booking reference (generated), summary, "what happens next" text, green impact of the booking.

State lives only in memory; refreshing resets it.

## 9. Language

All UI strings and all tour content exist in EN and PT-PT. Switching language keeps the current page. Number/price/date formatting per locale.

## 10. Decided vs left to the builder

**Decided by the owner:** React; EN + PT; demo-only realistic checkout; About us with team photo placeholder; real photos from the web; tour themes (planting, hiking, biking, yoga, off-season classics); longer tours; values incl. EV-only transfers and bikes; local farm food and national dishes.

**Builder's calls from the review (owner may override):**
- *Offline:* hosted static link with all assets self-hosted (no CDNs, fonts self-hosted). Backup: the exported `out/` folder can be served from a laptop (`npx serve out`). No service worker.
- *Devices:* mobile-first; checkout polished on both phone (summary collapses to a bottom bar) and laptop/projector.
- *Team photo:* 3:2 landscape frame with `object-fit: cover`, so any photo fits; swap = replace `public/images/team.jpg`.
- *Scope per tour:* all 7 tours get full content (itinerary, gallery, included) in both languages.
- *All copy* lives in per-locale content files so a native speaker can edit text without touching components. Portuguese is written in full pt-PT (owner has not yet said whether a native speaker will review it).
- *Signature 14-day tour* is bookable all year but routes the Sintra/Algarve days in the shoulder season; only tours 5 and 6 are Nov–Mar only.

**Builder's calls (owner may override):** Next.js static export; exact palette/typography; tour names, regions, prices, itineraries and copy; testimonials and impact numbers (invented demo data); MB WAY option; checkout extras; styling approach and component structure; hosting choice.
