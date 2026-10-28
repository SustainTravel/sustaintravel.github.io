import type { Dictionary } from "@/i18n/get-dictionary";
import { Birds, Hills } from "@/components/icons";

export function Impact({ dict }: { dict: Dictionary }) {
  const t = dict.impact;
  const stats = [t.stats.trees, t.stats.km, t.stats.producers, t.stats.ev];
  return (
    <section id="impact" aria-labelledby="impact-title" className="on-dark relative mt-16 bg-forest text-cream sm:mt-20">
      <Hills colors={["#c9d8b0", "#8baa6b", "#2f5d3a"]} className="absolute bottom-full h-12 w-full sm:h-20" />
      <div className="relative mx-auto max-w-7xl px-5 pt-10 pb-16 sm:px-8 lg:pb-24">
        <Birds className="absolute top-6 right-6 w-16 text-sage-pale/70 sm:right-10 sm:w-20" />
        <h2 id="impact-title" className="max-w-xl pr-16 font-display text-4xl leading-tight text-balance sm:text-5xl">
          {t.title}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-sage-pale">{t.lead}</p>
        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end gap-2 border-l-2 border-sun/60 pl-4 sm:pl-6">
              <dt className="leading-snug text-sage-pale">{s.label}</dt>
              <dd className="font-display text-4xl text-sun sm:text-6xl">{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-12 text-sm text-sage-pale">{t.note}</p>
      </div>
    </section>
  );
}
