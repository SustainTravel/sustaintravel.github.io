import type { Locale } from "@/i18n/config";

const tag = (locale: Locale) => (locale === "pt" ? "pt-PT" : "en-IE");

export function formatPrice(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(tag(locale), {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** The number inside a formatted stat: "18,400" or "18 400" -> 18400, "100%" -> 100. */
export function statTarget(stat: string): number {
  return Number(stat.replace(/\D/g, ""));
}

/**
 * `n` dressed like `stat`: same thousands separator, prefix and suffix, so a count-up stays in the page's locale.
 * shortcut: whole numbers only, add decimals if a stat ever needs them.
 */
export function formatLike(stat: string, n: number): string {
  const [, before, digits, after] = stat.match(/^(\D*)(\d[\d\D]*\d|\d)(\D*)$/) ?? ["", "", stat, ""];
  const sep = digits.match(/\D/)?.[0] ?? "";
  return before + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep) + after;
}
