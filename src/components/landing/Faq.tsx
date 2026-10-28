import type { Dictionary } from "@/i18n/get-dictionary";
import { Plus } from "@/components/icons";

/** Native <details> accordion: keyboard and screen-reader support for free, no JS. */
export function Faq({ dict }: { dict: Dictionary }) {
  const t = dict.faq;
  return (
    <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <h2 id="faq-title" className="reveal font-display text-4xl leading-tight text-balance sm:text-5xl lg:sticky lg:top-28 lg:self-start">
          {t.title}
        </h2>
        <div className="border-t-2 border-sage-pale">
          {t.items.map((item) => (
            <details key={item.q} className="group border-b-2 border-sage-pale">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-xl leading-snug [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sage-pale/70 transition-transform duration-300 group-open:rotate-45">
                  <Plus className="size-5" />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-lg leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
