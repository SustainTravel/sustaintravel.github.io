import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { body, display } from "../fonts";
import "../globals.css";

export const dynamicParams = false;

export const viewport: Viewport = { themeColor: "#f9f7eb" };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = { children: ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getDictionary(locale).common;
  return {
    // Only needed to turn the opengraph-image path into an absolute URL; set NEXT_PUBLIC_SITE_URL at build time.
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: meta.title,
    description: meta.description,
  };
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
          className="sr-only z-50 rounded-full bg-sun font-semibold text-bark focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-5 focus:py-3"
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
