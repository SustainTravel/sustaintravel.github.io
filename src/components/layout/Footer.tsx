import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { fill, type Dictionary } from "@/i18n/get-dictionary";
import { Facebook, Hills, Instagram, Mail, Pin } from "@/components/icons";
import { navItems } from "./nav";

// Hover keeps cream (sun on forest is only 3.8:1) and adds an underline.
const linkClass = "inline-flex min-h-11 min-w-11 items-center gap-2 underline-offset-4 hover:underline";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.footer;
  // Placeholder profiles until the real accounts exist.
  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/", Icon: Instagram },
    { label: "Facebook", href: "https://www.facebook.com/", Icon: Facebook },
  ];
  return (
    <footer className="on-dark relative mt-16 bg-forest text-cream sm:mt-24">
      <Hills colors={["#c9d8b0", "#8baa6b", "#2f5d3a"]} className="absolute bottom-full h-12 w-full sm:h-20" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 pt-12 pb-10 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="col-span-2 lg:col-span-1">
          <Link href={localePath(locale, "/")} className="inline-flex items-center gap-4 rounded-full">
            <span className="grid size-24 shrink-0 place-items-center rounded-full bg-cream p-1.5">
              {/* Eager: the header already loaded this file; lazy here only trips Chrome's CLS issue. */}
              <Image src="/logo.jpg" alt="" width={84} height={84} loading="eager" className="rounded-full" />
            </span>
            <span translate="no" className="font-display text-3xl">
              {dict.common.brand}
            </span>
          </Link>
          <p className="mt-5 max-w-sm leading-relaxed text-sage-pale">{t.mission}</p>
        </div>

        <nav aria-label={t.exploreTitle}>
          <h2 className="font-display text-xl">{t.exploreTitle}</h2>
          <ul className="mt-3">
            {navItems(locale, dict).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={localePath(locale, "/credits/")} className={linkClass}>
                {t.credits}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-xl">{t.contactTitle}</h2>
          <ul className="mt-3">
            <li>
              <a href={`mailto:${t.email}`} className={linkClass}>
                <Mail className="size-5 text-sun" />
                {t.email}
              </a>
            </li>
            <li className="flex min-h-11 items-center gap-2">
              <Pin className="size-5 text-sun" />
              {t.location}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl">{t.followTitle}</h2>
          <ul className="mt-3 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-12 place-items-center rounded-full border border-cream/30 transition-colors hover:border-sun hover:text-sun"
                >
                  <Icon className="size-5" />
                  <span className="sr-only">
                    {label} {dict.common.newTab}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-sage-pale sm:px-8">
          {fill(t.copyright, { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
