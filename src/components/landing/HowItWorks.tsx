import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/get-dictionary";

/** A real sequence, so it gets numbers, set in the logo's open circle and joined by a winding path. */
export function HowItWorks({ dict }: { dict: Dictionary }) {
  const t = dict.how;
  return (
    <section id="how" aria-labelledby="how-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <h2 id="how-title" className="reveal max-w-2xl font-display text-4xl leading-tight text-balance sm:text-5xl">
        {t.title}
      </h2>
      <div className="relative mt-12">
        <svg
          viewBox="0 0 1000 60"
          preserveAspectRatio="none"
          className="absolute top-3 left-[3%] hidden h-12 w-[69%] md:block"
          aria-hidden
        >
          <path
            d="M0 30C120 -5 220 65 340 30S560 -5 680 30 880 65 1000 30"
            fill="none"
            stroke="#8baa6b"
            strokeWidth="3"
            strokeDasharray="2 12"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-12">
          {t.steps.map((step, i) => (
            <li key={step.title} className="reveal flex gap-5 md:block" style={{ "--i": i } as CSSProperties}>
              <span className="relative grid size-[4.5rem] shrink-0 place-items-center rounded-full bg-cream font-display text-4xl text-forest">
                <svg viewBox="0 0 72 72" className="absolute inset-0 size-full" aria-hidden>
                  <path d="M58 58A31 31 0 1 1 66 32" fill="none" stroke="#2f5d3a" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="60" cy="14" r="7" fill="#edab4b" />
                </svg>
                <span className="relative">{i + 1}</span>
              </span>
              <div>
                <h3 className="font-display text-2xl md:mt-5">{step.title}</h3>
                <p className="mt-2 max-w-sm leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
