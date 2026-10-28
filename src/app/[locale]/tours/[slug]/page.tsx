import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTour, tours } from "@/content/tours";
import { isLocale, localePath } from "@/i18n/config";
import { fill, getDictionary } from "@/i18n/get-dictionary";
import { formatPrice } from "@/lib/format";
import { Bike, Birds, Bus, Check, Chevron, Close, Leaf, Moon, Pin, Sun, Tree } from "@/components/icons";
import { Gallery } from "@/components/tours/Gallery";
import { Itinerary } from "@/components/tours/Itinerary";
import { TourBadges } from "@/components/tours/TourBadges";

export const dynamicParams = false;

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const tour = getTour(slug);
  if (!isLocale(locale) || !tour) return {};
  return { title: `${tour.title[locale]} | Sustain`, description: tour.summary[locale] };
}

// No checkout (owner decision): a real, styled, focusable button that intentionally does nothing.
const bookButton =
  "min-h-12 items-center justify-center rounded-full bg-sun font-semibold whitespace-nowrap text-bark hover:bg-sun-deep active:bg-sun-press press";

export default async function TourPage({ params }: Props) {
  const { locale, slug } = await params;
  const tour = getTour(slug);
  if (!isLocale(locale) || !tour) notFound();
  const dict = getDictionary(locale);
  const t = dict.tour;
  const price = fill(dict.common.priceFrom, { price: formatPrice(tour.priceFrom, locale) });

  return (
    <article aria-labelledby="tour-title">
      <header className="mx-auto max-w-7xl px-5 pt-6 pb-8 sm:px-8 lg:pt-10 lg:pb-12">
        <Link
          href={localePath(locale, "/tours/")}
          className="-ml-1 inline-flex min-h-11 items-center gap-1 rounded-full pr-2 font-semibold text-leaf hover:text-forest"
        >
          <Chevron className="size-4 rotate-180" />
          {dict.common.backToTours}
        </Link>
        <div className="enter relative mt-4 max-w-4xl">
          <p className="flex items-center gap-1.5 font-medium text-leaf">
            <Pin className="size-5 shrink-0" />
            {tour.region[locale]}
          </p>
          <h1 id="tour-title" className="mt-2 font-display text-[2.5rem] leading-[1.05] text-balance text-forest sm:text-6xl lg:text-7xl">
            {tour.title[locale]}
          </h1>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {tour.allowedMonths && (
              <li className="inline-flex items-center gap-1.5 rounded-full bg-forest py-1 pr-3 pl-2 text-sm font-semibold text-cream">
                <Moon className="size-4 text-sun" />
                {t.badges.offSeasonOnly}
              </li>
            )}
            {tour.types.map((type) => (
              <li key={type} className="rounded-full border border-forest/25 px-2.5 py-0.5 text-sm text-forest">
                {dict.tours.types[type]}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <Gallery images={tour.images} title={tour.title[locale]} t={t.gallery} />

      <div className="mx-auto mt-10 grid max-w-7xl gap-12 px-5 pb-16 sm:px-8 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-16 lg:pb-24 xl:grid-cols-[minmax(0,1fr)_23rem]">
        {/* Facts first in the DOM (they open the page on mobile); from lg they become the sticky side card. */}
        <aside aria-label={t.facts.label} className="lg:sticky lg:top-28 lg:col-start-2 lg:row-start-1 lg:self-start">
          <div className="reveal reveal-card rounded-3xl bg-meadow p-6 text-bark sm:p-7">
            <p className="text-sm font-semibold text-leaf">{t.facts.price}</p>
            <p className="mt-1 font-display text-4xl leading-tight">{price}</p>
            <p>{dict.common.perPerson}</p>
            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-t-2 border-sage-pale pt-5 lg:grid-cols-1">
              <div>
                <dt className="text-sm font-semibold text-leaf">{t.facts.duration}</dt>
                <dd className="font-semibold">{fill(dict.common.days, { n: tour.days })}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-leaf">{t.facts.groupSize}</dt>
                <dd className="font-semibold">{fill(t.facts.groupSizeValue, { n: tour.maxGroup })}</dd>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <dt className="text-sm font-semibold text-leaf">{t.facts.region}</dt>
                <dd className="font-semibold">{tour.region[locale]}</dd>
              </div>
            </dl>
            <TourBadges tour={tour} dict={dict} className="mt-6" />
            <button type="button" className={`${bookButton} mt-7 hidden w-full px-6 text-lg lg:inline-flex`}>
              {t.book}
            </button>
          </div>
        </aside>

        <div className="min-w-0 lg:col-start-1 lg:row-start-1">
          <section aria-labelledby="overview-title" className="reveal">
            <h2 id="overview-title" className="sr-only">
              {t.overview}
            </h2>
            <p className="max-w-2xl font-display text-2xl leading-snug text-forest sm:text-[1.7rem] sm:leading-snug">
              {tour.summary[locale]}
            </p>
          </section>

          {tour.allowedMonths && (
            <section aria-labelledby="offseason-title" className="reveal mt-10 flex max-w-2xl gap-4 rounded-3xl border-2 border-dashed border-wicker/50 p-5 sm:p-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-forest text-sun sm:size-12">
                <Moon className="size-6" />
              </span>
              <div>
                <h2 id="offseason-title" className="font-display text-xl leading-snug">
                  {t.offSeason.title}
                </h2>
                <p className="mt-1.5 leading-relaxed">{t.offSeason.body}</p>
              </div>
            </section>
          )}

          <section aria-labelledby="highlights-title" className="reveal mt-14">
            <h2 id="highlights-title" className="font-display text-3xl sm:text-4xl">
              {t.highlights}
            </h2>
            <ul className="mt-6 grid max-w-3xl gap-x-8 gap-y-4 sm:grid-cols-2">
              {tour.highlights[locale].map((h) => (
                <li key={h} className="flex gap-3 leading-relaxed">
                  <Leaf className="mt-0.5 size-6 shrink-0 text-sage" />
                  {h}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="itinerary-title" className="reveal mt-16">
            <h2 id="itinerary-title" className="font-display text-3xl sm:text-4xl">
              {t.itinerary}
            </h2>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed">{t.itineraryLead}</p>
            <Itinerary days={tour.itinerary} locale={locale} dayLabel={t.day} />
          </section>

          <section aria-labelledby="food-title" className="reveal reveal-card gingham mt-16 rounded-3xl p-3 sm:p-5">
            <div className="rounded-2xl bg-cream px-5 py-7 sm:px-8">
              <h2 id="food-title" className="font-display text-3xl sm:text-4xl">
                {t.food}
              </h2>
              <ul className="mt-6 divide-y-2 divide-dotted divide-sage-pale">
                {tour.food[locale].map((item) => {
                  const sep = item.indexOf(": ");
                  const dish = sep < 0 ? item : item.slice(0, sep);
                  const desc = sep < 0 ? "" : item.slice(sep + 2);
                  return (
                    <li key={item} className="py-4 first:pt-0 last:pb-0">
                      <span className="block font-display text-xl leading-snug">{dish}</span>
                      {desc && <span className="mt-1 block leading-relaxed text-leaf">{desc}</span>}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <div className="mt-16 grid gap-10 sm:grid-cols-2">
            <section aria-labelledby="included-title" className="reveal">
              <h2 id="included-title" className="font-display text-2xl sm:text-3xl">
                {t.included}
              </h2>
              <ul className="mt-5 space-y-3">
                {tour.included[locale].map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <Check className="mt-0.5 size-5 shrink-0 text-forest" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="not-included-title" className="reveal">
              <h2 id="not-included-title" className="font-display text-2xl sm:text-3xl">
                {t.notIncluded}
              </h2>
              <ul className="mt-5 space-y-3">
                {tour.notIncluded[locale].map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-leaf">
                    <Close className="mt-1 size-4 shrink-0 text-wicker" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section aria-labelledby="impact-title" className="reveal reveal-card on-dark relative mt-16 overflow-hidden rounded-3xl bg-forest p-6 text-cream sm:p-8">
            <Sun className="absolute -top-6 -right-6 size-28 opacity-90" />
            <Birds className="absolute top-9 right-28 w-12 text-sage-pale/60" />
            <span className="grid size-12 place-items-center rounded-full bg-cream/10 text-sun">
              <Tree className="size-7" />
            </span>
            <h2 id="impact-title" className="mt-4 font-display text-3xl">
              {t.impact}
            </h2>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-sage-pale">{tour.impact[locale]}</p>
          </section>

          <section aria-labelledby="transport-title" className="reveal mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
            <span className="flex shrink-0 gap-2 sm:flex-col">
              <span className="grid size-12 place-items-center rounded-full bg-sage-pale/70 text-forest">
                <Bus className="size-6" />
              </span>
              {tour.badges.bike && (
                <span className="grid size-12 place-items-center rounded-full bg-sage-pale/70 text-forest">
                  <Bike className="size-6" />
                </span>
              )}
            </span>
            <div>
              <h2 id="transport-title" className="font-display text-2xl">
                {t.transport.title}
              </h2>
              <p className="mt-2 leading-relaxed">
                {t.transport.ev}
                {tour.badges.bike && ` ${t.transport.bike}`}
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Mobile booking bar: sticky inside the article, so it rests above the footer instead of covering it. */}
      <div className="book-bar sticky bottom-0 z-30 border-t border-forest/10 bg-cream/95 px-5 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur supports-[backdrop-filter]:bg-cream/85 sm:px-8 lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <p className="leading-tight whitespace-nowrap">
            <span className="block font-display text-lg text-forest sm:text-xl">{price}</span>
            <span className="text-sm text-leaf">{dict.common.perPerson}</span>
          </p>
          <button type="button" className={`${bookButton} inline-flex px-5 text-base sm:px-6 sm:text-lg`}>
            {t.book}
          </button>
        </div>
      </div>
    </article>
  );
}
