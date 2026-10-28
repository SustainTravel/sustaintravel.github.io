import type { Locale } from "@/i18n/config";

const tag = (locale: Locale) => (locale === "pt" ? "pt-PT" : "en-IE");

export function formatPrice(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(tag(locale), {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}
