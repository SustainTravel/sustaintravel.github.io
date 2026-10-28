import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tours } from "@/content/tours";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Birds, Hills, Sun } from "@/components/icons";
import { TourCard } from "@/components/tours/TourCard";
import { TourFilter } from "@/components/tours/TourFilter";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getDictionary(locale).tours.meta;
}

export default async function ToursPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const t = dict.tours;
  return (
    <>
      <section aria-labelledby="tours-title" className="relative bg-meadow">
        <div className="relative mx-auto max-w-7xl px-5 pt-10 pb-16 sm:px-8 sm:pb-24 lg:pt-16">
          <Sun className="absolute top-6 right-5 size-10 sm:top-8 sm:right-10 sm:size-20 lg:top-14" />
          <Birds className="absolute top-32 right-36 hidden w-16 text-forest lg:block" />
          <h1 id="tours-title" className="max-w-3xl pr-10 font-display text-[2.25rem] leading-[1.05] text-balance text-bark sm:pr-24 lg:pr-0 sm:text-6xl lg:text-7xl">
            {t.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bark sm:text-xl sm:leading-relaxed">{t.lead}</p>
        </div>
      </section>
      <div className="relative">
        <Hills colors={["#c9d8b0", "#ebeedb", "#f9f7eb"]} className="absolute bottom-full h-10 w-full sm:h-16" />
        <div className="mx-auto max-w-7xl px-5 pt-4 pb-20 sm:px-8 lg:pb-28">
          <h2 className="sr-only">{t.listTitle}</h2>
          <TourFilter
            t={t}
            items={tours.map((tour) => ({
              key: tour.slug,
              types: tour.types,
              card: <TourCard tour={tour} locale={locale} dict={dict} />,
            }))}
          />
        </div>
      </div>
    </>
  );
}
