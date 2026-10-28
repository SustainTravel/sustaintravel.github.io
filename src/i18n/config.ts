export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}

/** Site URL for `path` (which starts with '/'): English lives at the root, other languages under '/<locale>'. */
export function localePath(locale: Locale, path: string): string {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

/** Same page in another language: '/tours/x/' ↔ '/pt/tours/x/'. */
export function switchLocalePath(pathname: string, to: Locale): string {
  const path = pathname.replace(new RegExp(`^/(${locales.join("|")})(?=/|$)`), "") || "/";
  return localePath(to, path);
}
