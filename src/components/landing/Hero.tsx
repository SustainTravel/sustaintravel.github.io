import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Arc, Birds, Sprout } from "@/components/icons";
import { HeroScene } from "./HeroScene";

/**
 * The logo's open circle, filled with the logo itself as the server-rendered poster (and the fallback without
 * WebGL, JS or motion), then a live low-poly landscape fades in over it: the one bold move on the page.
 * The entrance is plain CSS (enter / hero-arc in globals.css), so it plays on first paint without waiting for JS.
 */
export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.hero;
  return (
    <section id="top" aria-labelledby="hero-title" className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pt-8 pb-4 sm:px-8 md:pt-12 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-16 lg:pb-8">
        <div>
          <p className="enter flex items-center gap-2 font-semibold text-leaf">
            <Sprout className="size-7 shrink-0" />
            {t.eyebrow}
          </p>
          <h1
            id="hero-title"
            style={{ animationDelay: "60ms" }}
            className="enter mt-4 font-display text-[2.6rem] leading-[1.05] text-balance text-forest sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            {t.title}
          </h1>
          <p style={{ animationDelay: "140ms" }} className="enter mt-6 max-w-xl text-lg leading-relaxed text-forest sm:text-xl sm:leading-relaxed">{t.lead}</p>
          <div style={{ animationDelay: "220ms" }} className="enter mt-8 flex flex-wrap gap-3">
            <Link
              href={localePath(locale, "/tours/")}
              className="inline-flex min-h-12 items-center rounded-full bg-sun px-7 text-lg font-semibold text-bark press hover:bg-sun-deep"
            >
              {t.cta}
            </Link>
            <Link
              href={localePath(locale, "/#how")}
              className="inline-flex min-h-12 items-center rounded-full border-2 border-forest/25 px-6 text-lg font-semibold text-forest press hover:border-forest"
            >
              {t.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="hero-circle relative mx-auto w-full max-w-[22rem] sm:max-w-[28rem] lg:max-w-none">
          <Arc className="hero-arc absolute inset-0 size-full text-forest" />
          <div className="relative m-[9%] aspect-square overflow-hidden rounded-full bg-cream">
            {/* The logo's ring is centred at (300, 300) of 615 and curls in to r = 274: shift it onto the circle's
                centre and scale past that, so the ring is clipped away and only the Arc above draws one. */}
            <Image
              src="/logo.jpg"
              alt=""
              width={615}
              height={615}
              loading="eager"
              className="absolute inset-0 size-full translate-[1.4%] scale-[1.16]"
            />
            <HeroScene />
          </div>
          <Birds className="absolute top-[14%] left-[1%] w-[17%] text-forest" />
        </div>
      </div>
    </section>
  );
}
