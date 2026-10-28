import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { fill, type Dictionary } from "@/i18n/get-dictionary";
import { formatPrice } from "@/lib/format";
import { Moon } from "@/components/icons";
import { TourBadges } from "./TourBadges";

/** Arched photo like a village window; the whole card is one link via the title's stretched ::after. */
export function TourCard({ tour, locale, dict }: { tour: Tour; locale: Locale; dict: Dictionary }) {
  return (
    <article className="group relative flex flex-1 flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-full rounded-b-xl bg-sage-pale xl:aspect-[4/5]">
        <Image
          src={tour.images[0]}
          alt=""
          width={1600}
          height={1067}
          sizes="(min-width: 1280px) 290px, (min-width: 640px) 45vw, 92vw"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {tour.allowedMonths && (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-cream py-1 pr-3 pl-2 text-sm font-semibold text-bark">
            <Moon className="size-4 text-terracotta" />
            {dict.tour.badges.offSeasonOnly}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <p className="text-sm font-medium text-leaf">{tour.region[locale]}</p>
        <h3 className="mt-1 font-display text-2xl leading-tight text-forest">
          <Link
            href={`/${locale}/tours/${tour.slug}/`}
            className="after:absolute after:inset-0 after:rounded-t-[999px] after:rounded-b-xl group-hover:underline decoration-sun decoration-2 underline-offset-4"
          >
            {tour.title[locale]}
          </Link>
        </h3>
        <p className="mt-2 text-forest">
          <span className="font-semibold">{fill(dict.common.days, { n: tour.days })}</span>
          <span className="mx-2 text-sage" aria-hidden>
            /
          </span>
          {fill(dict.common.priceFrom, { price: formatPrice(tour.priceFrom, locale) })}{" "}
          <span className="text-leaf">{dict.common.perPerson}</span>
        </p>
        {/* mt-auto: chips sit on a common baseline across a row of cards, whatever the title length. */}
        <div className="mt-auto pt-3">
          <ul className="flex flex-wrap gap-1.5">
            {tour.types.map((type) => (
              <li key={type} className="rounded-full border border-forest/25 px-2.5 py-0.5 text-sm text-forest">
                {dict.tours.types[type]}
              </li>
            ))}
          </ul>
          <TourBadges tour={tour} dict={dict} className="mt-3" />
        </div>
      </div>
    </article>
  );
}
