"use client";

import Link from "next/link";
import { useEffect } from "react";
import { LOCALE_STORAGE_KEY, pickInitialLocale } from "@/i18n/config";

export default function RootRedirect() {
  useEffect(() => {
    const locale = pickInitialLocale(
      localStorage.getItem(LOCALE_STORAGE_KEY),
      navigator.languages,
    );
    location.replace(`/${locale}/`);
  }, []);

  return (
    <main className="p-8">
      <p>Sustain</p>
      <p>
        <Link className="underline" href="/en/">English</Link>
        {" / "}
        <Link className="underline" href="/pt/">Português</Link>
      </p>
    </main>
  );
}
