import type { Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { pt } from "./dictionaries/pt";

const dictionaries: Record<Locale, Dictionary> = { en, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** fill('from {price}', { price: '€890' }) → 'from €890'. Unknown placeholders are left as-is. */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in vars ? String(vars[key]) : match));
}

export type { Dictionary };
