import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { en } from "@/i18n/dictionaries/en";
import { pt } from "@/i18n/dictionaries/pt";
import { Arc, Birds, Hills, Sun } from "@/components/icons";
import { body, display } from "./fonts";
import "./globals.css";

// Becomes out/404.html, served by the static host for any unknown URL. The language is unknown, so it speaks both.
export const metadata: Metadata = { title: `${en.notFound.title} · ${pt.notFound.title} — Sustain` };
export const viewport: Viewport = { themeColor: "#f9f7eb" };

const versions = [
  { locale: "en", lang: "en", t: en.notFound },
  { locale: "pt", lang: "pt-PT", t: pt.notFound },
] as const;

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <header className="mx-auto flex w-full max-w-5xl px-5 py-4 sm:px-8">
          <Link href="/en/" className="flex min-h-11 items-center gap-2.5 rounded-full pr-2">
            <Image src="/logo.jpg" alt="" width={48} height={48} className="size-11" />
            <span translate="no" className="font-display text-2xl leading-none text-forest">
              Sustain
            </span>
          </Link>
        </header>
        <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-5 pt-6 pb-16 text-center sm:px-8">
          <div className="relative size-36 sm:size-40">
            <Arc className="absolute inset-0 size-full text-forest" />
            <Sun className="absolute top-8 left-1/2 size-10 -translate-x-1/2" />
            <Birds className="absolute bottom-11 left-1/2 w-16 -translate-x-1/2 text-forest" />
          </div>
          <p className="mt-6 font-display text-6xl text-wicker">404</p>
          <div className="mt-8 grid w-full gap-10 sm:grid-cols-2 sm:gap-0 sm:divide-x-2 sm:divide-dashed sm:divide-sage-pale">
            {versions.map(({ locale, lang, t }) => (
              <section key={locale} lang={lang} className="flex flex-col items-center sm:px-8">
                <h1 className="font-display text-3xl text-balance sm:text-4xl">{t.title}</h1>
                <p className="mt-3 max-w-sm text-lg leading-relaxed text-pretty">{t.body}</p>
                {/* mt-auto: the grid stretches both columns, so the buttons line up whatever the copy length. */}
                <div className="mt-auto flex flex-wrap justify-center gap-3 pt-6">
                  <Link
                    href={`/${locale}/`}
                    className="inline-flex min-h-12 items-center rounded-full bg-sun px-6 font-semibold text-bark transition-colors hover:bg-sun-deep"
                  >
                    {t.home}
                  </Link>
                  <Link
                    href={`/${locale}/tours/`}
                    className="inline-flex min-h-12 items-center rounded-full border-2 border-forest/25 px-5 font-semibold transition-colors hover:border-forest"
                  >
                    {t.tours}
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </main>
        <div>
          <Hills colors={["#c9d8b0", "#8baa6b", "#2f5d3a"]} className="block h-12 w-full sm:h-20" />
          <div className="h-8 bg-forest" />
        </div>
      </body>
    </html>
  );
}
