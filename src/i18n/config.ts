export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_STORAGE_KEY = "sustain-locale";

export function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}

export function pickInitialLocale(
  stored: string | null,
  browserLangs: readonly string[],
): Locale {
  if (stored && isLocale(stored)) return stored;
  for (const lang of browserLangs) {
    const base = lang.toLowerCase().split("-")[0];
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}

/** Same page in another language: '/en/tours/x/' → '/pt/tours/x/'; paths without a locale get one. */
export function switchLocalePath(pathname: string, to: Locale): string {
  const [, first = "", ...rest] = pathname.split("/");
  const tail = isLocale(first) ? rest : [first, ...rest];
  return `/${to}/${tail.join("/")}`;
}
