import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

/** `headerClass` hides an item from the desktop header row only; the mobile menu and footer always list it. */
export type NavItem = { href: string; label: string; headerClass?: string };

/** Landing anchors use the full home path (`/#id`, `/pt/#id`) so they also work from other pages. */
export function navItems(locale: Locale, dict: Dictionary): NavItem[] {
  const home = localePath(locale, "/");
  return [
    // md–lg: no room for both, so the "Book a trip" CTA stands in for "Tours" (same URL).
    { href: `${home}tours/`, label: dict.nav.tours, headerClass: "md:max-lg:hidden" },
    { href: `${home}#values`, label: dict.nav.values },
    { href: `${home}#about`, label: dict.nav.about },
    // md–xl: the row is already full, so this one lives in the footer there.
    { href: `${home}business-model/`, label: dict.nav.businessModel, headerClass: "md:max-xl:hidden" },
    { href: `${home}#faq`, label: dict.nav.faq },
    { href: `${home}#contact`, label: dict.nav.contact },
  ];
}
