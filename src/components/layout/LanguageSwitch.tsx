"use client";

import { usePathname } from "next/navigation";
import { localePath, locales, switchLocalePath, type Locale } from "@/i18n/config";

/** EN | PT links to the same page in the other language. Plain <a> so the new <html lang> loads cleanly. */
export function LanguageSwitch({ locale, label, className = "" }: { locale: Locale; label: string; className?: string }) {
  const pathname = usePathname() ?? localePath(locale, "/");
  return (
    <div role="group" aria-label={label} className={`flex items-center rounded-full border border-forest/20 p-1 ${className}`}>
      {locales.map((l) => {
        const href = switchLocalePath(pathname, l);
        const active = l === locale;
        return (
          <a
            key={l}
            href={href.endsWith("/") ? href : `${href}/`}
            hrefLang={l}
            translate="no"
            lang={l === "pt" ? "pt-PT" : "en"}
            aria-current={active ? "true" : undefined}
            className={`grid min-h-11 min-w-11 place-items-center rounded-full px-2 text-sm font-semibold transition-colors ${
              active ? "bg-forest text-cream" : "text-forest hover:bg-sage-pale/70"
            }`}
          >
            {l.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
