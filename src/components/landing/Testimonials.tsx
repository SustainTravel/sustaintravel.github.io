import type { Dictionary } from "@/i18n/get-dictionary";
import { Leaf } from "@/components/icons";

export function Testimonials({ dict }: { dict: Dictionary }) {
  const t = dict.testimonials;
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <h2 id="testimonials-title" className="font-display text-4xl text-balance sm:text-5xl">
        {t.title}
      </h2>
      <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-3 md:gap-0 md:divide-x-2 md:divide-sage-pale">
        {t.items.map((item) => (
          <figure key={item.name} className="flex flex-col border-t-2 border-sage-pale pt-8 md:border-t-0 md:px-8 md:pt-0 md:first:pl-0 md:last:pr-0">
            <span className="font-display text-7xl leading-[0.6] text-sun" aria-hidden>
              “
            </span>
            <blockquote className="-mt-3 font-display text-xl leading-relaxed">
              <p>{item.quote}</p>
            </blockquote>
            <figcaption className="mt-auto pt-6">
              <p className="font-semibold">{item.name}</p>
              <p className="text-leaf">{item.from}</p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-leaf">
                <Leaf className="size-4 text-sage" />
                {item.tour}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
