import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Arc, Birds, Sprout, Sun } from "@/components/icons";
import { HeroScene } from "./HeroScene";

/**
 * The logo's open circle, filled with a real Alentejo cork oak photo as the server-rendered poster,
 * then a live low-poly landscape fades in over it: the one bold move on the page.
 */
export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.hero;
  return (
    <section id="top" aria-labelledby="hero-title" className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pt-8 pb-4 sm:px-8 md:pt-12 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-16 lg:pb-8">
        <div>
          <p className="flex items-center gap-2 font-semibold text-leaf">
            <Sprout className="size-7 shrink-0" />
            {t.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-4 font-display text-[2.6rem] leading-[1.05] text-balance text-forest sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            {t.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest sm:text-xl sm:leading-relaxed">{t.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/tours/`}
              className="inline-flex min-h-12 items-center rounded-full bg-sun px-7 text-lg font-semibold text-bark press hover:bg-sun-deep"
            >
              {t.cta}
            </Link>
            <Link
              href={`/${locale}/#how`}
              className="inline-flex min-h-12 items-center rounded-full border-2 border-forest/25 px-6 text-lg font-semibold text-forest press hover:border-forest"
            >
              {t.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="group relative mx-auto w-full max-w-[22rem] sm:max-w-[28rem] lg:max-w-none">
          <Arc className="absolute inset-0 size-full text-forest" />
          <div className="relative m-[9%] aspect-square overflow-hidden rounded-full bg-sage-pale">
            <Image
              src="/images/hero.jpg"
              alt={t.imageAlt}
              width={1600}
              height={908}
              preload
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="absolute inset-0 size-full object-cover object-[50%_45%]"
            />
            <HeroScene />
          </div>
          {/* The live scene brings its own sun, so this one steps aside once it is showing. */}
          <Sun className="absolute top-[3%] right-[6%] size-[17%] transition-opacity duration-[1600ms] group-has-[[data-ready]]:opacity-0" />
          <Birds className="absolute top-[14%] left-[1%] w-[17%] text-forest" />
        </div>
      </div>
    </section>
  );
}
