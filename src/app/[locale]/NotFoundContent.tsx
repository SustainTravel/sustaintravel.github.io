"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { defaultLocale, isLocale, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Arc, Birds, Sun } from "@/components/icons";

export function NotFoundContent({ strings }: { strings: Record<Locale, Dictionary["notFound"]> }) {
  const param = useParams<{ locale?: string }>()?.locale ?? "";
  const locale = isLocale(param) ? param : defaultLocale;
  const t = strings[locale];
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-5 py-16 text-center sm:py-24">
      <div className="relative size-40">
        <Arc className="absolute inset-0 size-full text-forest" />
        <Sun className="absolute top-8 left-1/2 size-10 -translate-x-1/2" />
        <Birds className="absolute bottom-12 left-1/2 w-16 -translate-x-1/2 text-forest" />
      </div>
      <h1 className="mt-8 font-display text-4xl text-balance sm:text-5xl">{t.title}</h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-pretty">{t.body}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href={localePath(locale, "/")}
          className="inline-flex min-h-12 items-center rounded-full bg-sun px-7 font-semibold text-bark press hover:bg-sun-deep"
        >
          {t.home}
        </Link>
        <Link
          href={localePath(locale, "/tours/")}
          className="inline-flex min-h-12 items-center rounded-full border-2 border-forest/25 px-6 font-semibold press hover:border-forest"
        >
          {t.tours}
        </Link>
      </div>
    </section>
  );
}
