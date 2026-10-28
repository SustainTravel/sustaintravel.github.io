"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { Locale } from "@/i18n/config";
import { Birds, Close, Hills, Menu, Sun } from "@/components/icons";
import { LanguageSwitch } from "./LanguageSwitch";
import type { NavItem } from "./nav";
import { NavLink } from "./NavLink";

type Labels = { brand: string; open: string; close: string; nav: string; language: string; cta: string };

/**
 * Hamburger + full-screen sheet below `md`. A modal <dialog> makes the rest of the page inert (focus trap)
 * and closes on Esc; we add the body scroll lock and close it if the viewport grows past `md`.
 */
export function MobileMenu({ locale, items, labels }: { locale: Locale; items: NavItem[]; labels: Labels }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const mq = window.matchMedia("(min-width: 48rem)");
    const onWide = () => mq.matches && ref.current?.close();
    mq.addEventListener("change", onWide);
    return () => {
      root.style.overflow = "";
      mq.removeEventListener("change", onWide);
    };
  }, [open]);

  const show = () => {
    ref.current?.showModal();
    setOpen(true);
  };
  const close = () => ref.current?.close();

  // A modal <dialog> still lets Tab leave for the browser chrome; wrap it so focus stays in the menu.
  const trapTab = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key !== "Tab") return;
    const els = e.currentTarget.querySelectorAll<HTMLElement>("a[href], button");
    const first = els[0];
    const last = els[els.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={show}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="grid size-12 place-items-center rounded-full text-forest hover:bg-sage-pale/70"
      >
        <Menu className="size-7" />
        <span className="sr-only">{labels.open}</span>
      </button>

      <dialog
        id="mobile-menu"
        ref={ref}
        aria-label={labels.nav}
        onClose={() => setOpen(false)}
        onKeyDown={trapTab}
        className="menu-sheet fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain bg-cream p-0 text-forest"
      >
        <div className="relative flex min-h-full flex-col">
          <div className="flex h-16 items-center justify-between px-5">
            <span translate="no" className="flex items-center gap-2.5 font-display text-2xl">
              {/* Eager: the header already loaded this file; a lazy copy trips Chrome's CLS issue. */}
              <Image src="/logo.jpg" alt="" width={44} height={44} loading="eager" className="size-11" />
              {labels.brand}
            </span>
            <button
              type="button"
              onClick={close}
              className="grid size-12 place-items-center rounded-full hover:bg-sage-pale/70"
            >
              <Close className="size-7" />
              <span className="sr-only">{labels.close}</span>
            </button>
          </div>

          {/* The dialog already carries the navigation name; a second identical label would be announced twice. */}
          <nav className="px-5 pt-6">
            <ul>
              {items.map((item) => (
                <li key={item.href} className="border-b border-forest/10">
                  <NavLink
                    href={item.href}
                    onClick={close}
                    className="flex min-h-14 items-center font-display text-3xl hover:text-leaf"
                    activeClassName="underline decoration-sun decoration-4 underline-offset-8"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-wrap items-center gap-4 px-5 pt-8">
            <Link
              href={`/${locale}/tours/`}
              onClick={close}
              className="inline-flex min-h-12 items-center rounded-full bg-sun px-6 font-semibold text-bark hover:bg-sun-deep press"
            >
              {labels.cta}
            </Link>
            <LanguageSwitch locale={locale} label={labels.language} />
          </div>

          <div className="relative mt-auto h-40 overflow-hidden pt-10" aria-hidden>
            <Sun className="absolute right-10 top-2 size-14" />
            <Birds className="absolute left-8 top-4 w-16 text-forest" />
            <Hills colors={["#c9d8b0", "#8baa6b", "#2f5d3a"]} className="absolute bottom-0 h-24 w-full" />
          </div>
        </div>
      </dialog>
    </div>
  );
}
