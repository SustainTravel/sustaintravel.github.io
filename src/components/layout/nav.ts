import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export type NavItem = { href: string; label: string };

/** Landing anchors use the full `/[locale]/#id` path so they also work from other pages. */
export function navItems(locale: Locale, dict: Dictionary): NavItem[] {
  const home = `/${locale}/`;
  return [
    { href: `${home}tours/`, label: dict.nav.tours },
    { href: `${home}#values`, label: dict.nav.values },
    { href: `${home}#about`, label: dict.nav.about },
    { href: `${home}#faq`, label: dict.nav.faq },
    { href: `${home}#contact`, label: dict.nav.contact },
  ];
}
