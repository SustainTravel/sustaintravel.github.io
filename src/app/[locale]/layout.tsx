import type { ReactNode } from "react";
import { Figtree, Young_Serif } from "next/font/google";
import { locales } from "@/i18n/config";
import "../globals.css";

// Young Serif: warm, chunky, hand-cut serif with a village-signage feel; Figtree: friendly, very legible body.
const display = Young_Serif({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--nf-display" });
const body = Figtree({ subsets: ["latin", "latin-ext"], variable: "--nf-body" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale === "pt" ? "pt-PT" : "en"} className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
