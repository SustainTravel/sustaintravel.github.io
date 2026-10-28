import type { Tour } from "@/content/types";
import type { Dictionary } from "@/i18n/get-dictionary";
import { BasketLine, Bike, Bus } from "@/components/icons";

/** Green sustainability badges (spec §6.2): EV transfers always, bike days and farm meals where they apply. */
export function TourBadges({ tour, dict, className = "" }: { tour: Tour; dict: Dictionary; className?: string }) {
  const t = dict.tour.badges;
  const badges = [
    { show: tour.badges.ev, label: t.ev, Icon: Bus },
    { show: tour.badges.bike, label: t.bike, Icon: Bike },
    { show: tour.badges.farm, label: t.farm, Icon: BasketLine },
  ].filter((b) => b.show);
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {badges.map(({ label, Icon }) => (
        <li
          key={label}
          className="inline-flex items-center gap-1.5 rounded-full bg-sage-pale/80 py-1 pr-3 pl-2 text-sm font-medium text-bark"
        >
          <Icon className="size-4 shrink-0 text-forest" />
          {label}
        </li>
      ))}
    </ul>
  );
}
