import type { Locale } from "@/i18n/config";

const tag = (locale: Locale) => (locale === "pt" ? "pt-PT" : "en-IE");

export function formatPrice(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(tag(locale), {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** `isoDate` is 'YYYY-MM-DD'; parsed and formatted in UTC so no visitor timezone can shift the day. */
export function formatDate(
  isoDate: string,
  locale: Locale,
  opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" },
): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString(tag(locale), { ...opts, timeZone: "UTC" });
}
