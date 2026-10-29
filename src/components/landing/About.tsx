import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

export function About({ dict }: { dict: Dictionary }) {
  const t = dict.about;
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="about-title" className="reveal max-w-xl font-display text-4xl leading-tight text-balance sm:text-5xl">
            {t.title}
          </h2>
          <div className="reveal mt-6 max-w-xl space-y-4 text-lg leading-relaxed">
            {t.story.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </div>

        <figure className="reveal reveal-card">
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-sage-pale ring-2 ring-sage-pale">
            <Image
              src="/images/team.jpg"
              alt={t.photoAlt}
              width={1500}
              height={1000}
              sizes="(min-width: 1024px) 600px, 92vw"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <figcaption className="mt-6">
            <h3 className="font-display text-2xl">{t.teamTitle}</h3>
            <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {t.team.map((m) => (
                <li key={m.name} className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-semibold">{m.name}</span>
                  <span className="text-leaf">{m.country}</span>
                </li>
              ))}
            </ul>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
