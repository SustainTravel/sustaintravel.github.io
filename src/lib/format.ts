import type { Locale } from "@/i18n/config";

const tag = (locale: Locale) => (locale === "pt" ? "pt-PT" : "en-IE");

/** Euros, whole by default ("€1,190", "1190 €"); `digits` 2 for unit prices ("€1,230.01", "1230,01 €"). */
export function formatPrice(amount: number, locale: Locale, digits = 0): string {
  return new Intl.NumberFormat(tag(locale), {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(amount);
}

/** Plain numbers and percentages in the page's locale: formatNumber(0.2375, "pt", { style: "percent" }). */
export function formatNumber(n: number, locale: Locale, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(tag(locale), { maximumFractionDigits: 2, ...options }).format(n);
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
