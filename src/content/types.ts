import type { Locale } from "@/i18n/config";

export type Localized<T> = Record<Locale, T>;
export type TourType = "planting" | "hiking" | "biking" | "yoga" | "offseason";

export interface ItineraryDay {
  title: Localized<string>;
  body: Localized<string>;
}

export interface Tour {
  slug: string;
  days: number;
  priceFrom: number;
  maxGroup: number;
  types: TourType[];
  featured: boolean;
  /** 1–12; null = all year */
  allowedMonths: number[] | null;
  badges: { ev: true; bike: boolean; farm: boolean };
  /** '/images/tours/<slug>-<n>.jpg', [0] = card/hero */
  images: string[];
  title: Localized<string>;
  region: Localized<string>;
  summary: Localized<string>;
  highlights: Localized<string[]>;
  food: Localized<string[]>;
  included: Localized<string[]>;
  notIncluded: Localized<string[]>;
  impact: Localized<string>;
  itinerary: ItineraryDay[];
}
