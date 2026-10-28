import type { ItineraryDay } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { fill } from "@/i18n/get-dictionary";
import { Plus } from "@/components/icons";

/**
 * Day-by-day path. Native <details> so each day folds on small screens without JS;
 * from lg the closed content is forced visible via ::details-content (older browsers just keep it collapsible).
 */
export function Itinerary({ days, locale, dayLabel }: { days: ItineraryDay[]; locale: Locale; dayLabel: string }) {
  return (
    <ol className="relative mt-8">
      {days.map((day, i) => (
        <li key={i} className="relative pb-2 pl-14 last:pb-0 sm:pl-16">
          {/* Dashed path joining the day markers, like the trail on the landing page. */}
          {i < days.length - 1 && (
            <span aria-hidden className="absolute top-12 bottom-0 left-5 border-l-2 border-dashed border-sage" />
          )}
          <span
            aria-hidden
            className="absolute top-2 left-0 grid size-10 place-items-center rounded-full bg-cream font-display text-lg text-forest ring-2 ring-forest/25"
          >
            {i + 1}
          </span>
          <details open={i === 0} className="group lg:details-content:[content-visibility:visible]">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-2 lg:pointer-events-none lg:cursor-auto [&::-webkit-details-marker]:hidden">
              <span>
                <span className="block text-sm font-semibold text-leaf">{fill(dayLabel, { n: i + 1 })}</span>
                <span className="block font-display text-xl leading-snug text-forest">{day.title[locale]}</span>
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sage-pale/70 transition-transform duration-300 group-open:rotate-45 lg:hidden">
                <Plus className="size-5" />
              </span>
            </summary>
            <p className="max-w-2xl pb-6 leading-relaxed text-forest">{day.body[locale]}</p>
          </details>
        </li>
      ))}
    </ol>
  );
}
