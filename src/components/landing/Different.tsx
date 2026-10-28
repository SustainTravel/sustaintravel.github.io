import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Hands, Village, WinterSun } from "@/components/icons";

const icons = [Village, WinterSun, Hands];

export function Different({ dict }: { dict: Dictionary }) {
  const t = dict.different;
  return (
    <section id="different" aria-labelledby="different-title" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
      <h2 id="different-title" className="reveal max-w-2xl font-display text-4xl leading-tight text-balance sm:text-5xl">
        {t.title}
      </h2>
      <p className="reveal mt-4 max-w-xl text-lg leading-relaxed">{t.lead}</p>
      <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3">
        {t.points.map((p, i) => {
          const Icon = icons[i];
          return (
            <li key={p.title} className="reveal border-t-2 border-sage-pale pt-6" style={{ "--i": i } as CSSProperties}>
              <Icon className="size-14" />
              <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
              <p className="mt-2 leading-relaxed">{p.body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
