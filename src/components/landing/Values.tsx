import type { Dictionary } from "@/i18n/get-dictionary";
import { BasketLine, Bike, Bus, Hills, Home, Moon, Tree } from "@/components/icons";

const icons = { ev: Bus, bikes: Bike, local: BasketLine, offseason: Moon, smallGroups: Home, givingBack: Tree };

export function Values({ dict }: { dict: Dictionary }) {
  const t = dict.values;
  return (
    <section id="values" aria-labelledby="values-title" className="relative mt-16 mb-6 bg-meadow sm:mt-24 sm:mb-8">
      <Hills colors={["#c9d8b0", "#d4dfbe", "#dfe7cc"]} className="absolute bottom-full h-10 w-full sm:h-16" />
      {/* Same hills, upside down: the band ends in a ridge instead of a straight edge. */}
      <Hills colors={["#ebeedb", "#e5ebd3", "#dfe7cc"]} className="absolute top-full h-10 w-full rotate-180 sm:h-16" />
      <div className="mx-auto max-w-7xl px-5 pt-10 pb-16 sm:px-8 lg:pb-24">
        <h2 id="values-title" className="max-w-2xl font-display text-4xl leading-tight text-balance text-bark sm:text-5xl">
          {t.title}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-bark">{t.lead}</p>
        <ul className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(icons) as (keyof typeof icons)[]).map((key) => {
            const Icon = icons[key];
            const item = t.items[key];
            return (
              <li key={key} className="flex gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-cream text-forest ring-2 ring-forest/10">
                  <Icon className="size-7" />
                </span>
                <div>
                  <h3 className="font-display text-xl leading-snug text-bark">{item.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-bark">{item.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
