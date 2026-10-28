import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Figtree, Young_Serif } from "next/font/google";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

// Young Serif: warm, chunky, hand-cut serif with a village-signage feel; Figtree: friendly, very legible body.
const display = Young_Serif({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--nf-display" });
const body = Figtree({ subsets: ["latin", "latin-ext"], variable: "--nf-body" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = { children: ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getDictionary(locale).common;
  return { title: meta.title, description: meta.description };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <html lang={locale === "pt" ? "pt-PT" : "en"} className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-sun px-5 py-3 font-semibold text-bark focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {dict.common.skipToContent}
        </a>
        <Header locale={locale} dict={dict} />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
