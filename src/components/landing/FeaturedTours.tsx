import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { tours } from "@/content/tours";
import { TourCard } from "@/components/tours/TourCard";

export function FeaturedTours({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.tours.featured;
  return (
    <section id="featured" aria-labelledby="featured-title" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
      <div className="reveal flex flex-wrap items-end justify-between gap-4">
        <h2 id="featured-title" className="font-display text-4xl text-balance sm:text-5xl">
          {t.title}
        </h2>
        <Link
          href={`/${locale}/tours/`}
          className="inline-flex min-h-11 items-center font-semibold text-forest underline decoration-sun decoration-2 underline-offset-[6px] hover:decoration-forest"
        >
          {t.viewAll}
        </Link>
      </div>
      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
        {tours
          .filter((tour) => tour.featured)
          .map((tour) => (
            <div key={tour.slug} className="reveal reveal-card flex flex-col">
              <TourCard tour={tour} locale={locale} dict={dict} />
            </div>
          ))}
      </div>
    </section>
  );
}
