"use client";

import Link from "next/link";
import { useEffect } from "react";
import { LOCALE_STORAGE_KEY, pickInitialLocale } from "@/i18n/config";

function storedLocale() {
  try {
    return localStorage.getItem(LOCALE_STORAGE_KEY);
  } catch {
    return null; // Storage blocked: fall back to the browser languages.
  }
}

// Shown only for a moment (or without JS): the language is unknown, so it speaks both.
const choices = [
  { href: "/en/", lang: "en", prompt: "Continue in English", label: "English" },
  { href: "/pt/", lang: "pt-PT", prompt: "Continuar em português", label: "Português" },
];

export default function RootRedirect() {
  useEffect(() => {
    location.replace(`/${pickInitialLocale(storedLocale(), navigator.languages)}/`);
  }, []);

  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center gap-8 px-5 text-center text-forest">
      <p className="text-3xl font-semibold">Sustain</p>
      <ul className="flex flex-wrap justify-center gap-6">
        {choices.map((c) => (
          <li key={c.href} lang={c.lang}>
            <p>{c.prompt}</p>
            <Link className="mt-1 inline-flex min-h-11 items-center font-semibold underline underline-offset-4" href={c.href} hrefLang={c.lang}>
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
