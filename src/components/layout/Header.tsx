import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";
import { navItems } from "./nav";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items = navItems(locale, dict);
  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 sm:px-6 lg:h-20 lg:gap-3 lg:px-8">
        <Link href={`/${locale}/`} className="mr-auto flex min-h-11 shrink-0 items-center gap-2.5 rounded-full pr-2">
          <Image src="/logo.jpg" alt="" width={48} height={48} className="size-11 lg:size-13" preload />
          <span translate="no" className="font-display text-2xl leading-none text-forest lg:text-[1.7rem]">{dict.common.brand}</span>
        </Link>

        <nav aria-label={dict.nav.label} className="hidden md:block">
          <ul className="flex items-center">
            {items.map((item, i) => (
              // md–lg: no room for both, so the "Book a trip" CTA stands in for "Tours" (same URL).
              <li key={item.href} className={i === 0 ? "md:max-lg:hidden" : undefined}>
                <NavLink
                  href={item.href}
                  className="flex min-h-11 items-center rounded-full px-1.5 font-medium whitespace-nowrap text-forest transition-colors hover:bg-sage-pale/70 lg:px-3.5"
                  activeClassName="bg-sage-pale/60 font-semibold underline decoration-sun decoration-2 underline-offset-8"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSwitch locale={locale} label={dict.common.language} className="hidden md:flex" />

        <Link
          href={`/${locale}/tours/`}
          className="hidden min-h-11 items-center rounded-full bg-sun px-4 font-semibold whitespace-nowrap text-bark press hover:bg-sun-deep md:inline-flex lg:px-5"
        >
          {dict.common.bookTrip}
        </Link>

        <MobileMenu
          locale={locale}
          items={items}
          labels={{
            brand: dict.common.brand,
            open: dict.common.openMenu,
            close: dict.common.closeMenu,
            nav: dict.nav.label,
            language: dict.common.language,
            cta: dict.common.bookTrip,
          }}
        />
      </div>
    </header>
  );
}
