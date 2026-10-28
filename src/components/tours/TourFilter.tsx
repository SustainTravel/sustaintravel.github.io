"use client";

import { useState, type ReactNode } from "react";
import type { TourType } from "@/content/types";
import type { Dictionary } from "@/i18n/get-dictionary";

type Filter = TourType | "all";
const filters: Filter[] = ["all", "planting", "hiking", "biking", "yoga", "offseason"];

/** Chips filter server-rendered cards by experience type; state is local (no URL param needed). */
export function TourFilter({ items, t }: { items: { key: string; types: TourType[]; card: ReactNode }[]; t: Dictionary["tours"] }) {
  const [active, setActive] = useState<Filter>("all");
  const shown = active === "all" ? items : items.filter((item) => item.types.includes(active));

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <div role="group" aria-label={t.filterLabel} className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const on = f === active;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(f)}
                className={`min-h-11 rounded-full px-4 font-semibold transition-colors ${
                  on ? "bg-forest text-cream" : "border-2 border-forest/20 text-forest hover:border-forest hover:bg-sage-pale/50"
                }`}
              >
                {f === "all" ? t.filterAll : t.types[f]}
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="font-medium text-leaf">
          {t.count.replace("{n}", String(shown.length))}
        </p>
      </div>

      {shown.length > 0 ? (
        <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((item) => (
            <li key={item.key} className="flex flex-col">
              {item.card}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10 rounded-3xl bg-meadow px-6 py-12 text-center">
          <p className="text-lg text-bark">{t.empty}</p>
          <button
            type="button"
            onClick={() => setActive("all")}
            className="mt-5 inline-flex min-h-12 items-center rounded-full bg-sun px-6 font-semibold text-bark transition-colors hover:bg-[#e39d36]"
          >
            {t.showAll}
          </button>
        </div>
      )}
    </>
  );
}
