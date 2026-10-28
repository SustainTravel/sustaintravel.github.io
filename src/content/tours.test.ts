import { describe, expect, it } from "vitest";
import { getTour, tours } from "./tours";

const table = {
  "replant-the-serra": { days: 7, priceFrom: 1190, types: ["planting", "hiking"], offseason: false, featured: true, bike: true },
  "peneda-geres-village-trails": { days: 8, priceFrom: 1450, types: ["hiking"], offseason: false, featured: false, bike: false },
  "ecopista-do-dao-by-bike": { days: 7, priceFrom: 1350, types: ["biking"], offseason: false, featured: true, bike: true },
  "alentejo-slow-yoga-retreat": { days: 10, priceFrom: 1890, types: ["yoga"], offseason: false, featured: false, bike: false },
  "sintra-lisbon-quietly": { days: 7, priceFrom: 1290, types: ["offseason"], offseason: true, featured: true, bike: false },
  "algarve-in-winter": { days: 9, priceFrom: 1590, types: ["offseason", "hiking"], offseason: true, featured: false, bike: true },
  "slow-portugal-journey": { days: 14, priceFrom: 2890, types: ["planting", "hiking", "biking", "yoga"], offseason: false, featured: true, bike: true },
} as const;

/** Every [path, value] leaf under a localized field: { en, pt } → strings or string arrays. */
function localizedStrings(tour: (typeof tours)[number]): [string, unknown][] {
  const { title, region, summary, impact, highlights, food, included, notIncluded, itinerary } = tour;
  const fields = { title, region, summary, impact, highlights, food, included, notIncluded };
  const out: [string, unknown][] = [];
  for (const [k, v] of Object.entries(fields))
    for (const loc of ["en", "pt"] as const) {
      const val = v[loc];
      if (Array.isArray(val)) val.forEach((s, i) => out.push([`${k}.${loc}[${i}]`, s]));
      else out.push([`${k}.${loc}`, val]);
    }
  itinerary.forEach((d, i) => {
    for (const loc of ["en", "pt"] as const) {
      out.push([`itinerary[${i}].title.${loc}`, d.title[loc]]);
      out.push([`itinerary[${i}].body.${loc}`, d.body[loc]]);
    }
  });
  return out;
}

describe("tours", () => {
  it("has exactly the 7 tours from the table, with unique slugs", () => {
    const slugs = tours.map((t) => t.slug);
    expect(slugs).toHaveLength(7);
    expect(new Set(slugs).size).toBe(7);
    expect(slugs.sort()).toEqual(Object.keys(table).sort());
  });

  describe.each(tours.map((t) => [t.slug, t] as const))("%s", (slug, tour) => {
    const row = table[slug as keyof typeof table];

    it("matches the table values", () => {
      expect(tour.days).toBe(row.days);
      expect(tour.priceFrom).toBe(row.priceFrom);
      expect(tour.types).toEqual(row.types);
      expect(tour.featured).toBe(row.featured);
      expect(tour.maxGroup).toBe(12);
      expect(tour.badges).toEqual({ ev: true, bike: row.bike, farm: true });
    });

    it("has one itinerary day per tour day", () => {
      expect(tour.itinerary).toHaveLength(tour.days);
    });

    it("has every localized string non-empty in both locales", () => {
      for (const [path, v] of localizedStrings(tour)) {
        expect(typeof v, path).toBe("string");
        expect((v as string).trim(), path).not.toBe("");
      }
    });

    it("has localized arrays of equal length in en and pt", () => {
      for (const key of ["highlights", "food", "included", "notIncluded"] as const) {
        expect(tour[key].pt, key).toHaveLength(tour[key].en.length);
        expect(tour[key].en.length, key).toBeGreaterThanOrEqual(key === "highlights" ? 3 : 1);
      }
    });

    it("has at least 3 images at /images/tours/<slug>-<n>.jpg", () => {
      expect(tour.images.length).toBeGreaterThanOrEqual(3);
      const re = new RegExp(`^/images/tours/${slug}-\\d\\.jpg$`);
      for (const img of tour.images) expect(img).toMatch(re);
    });

    it("is bookable Nov–Mar only when off-season, otherwise all year", () => {
      expect(tour.allowedMonths).toEqual(row.offseason ? [11, 12, 1, 2, 3] : null);
    });

    it("offers picnic and trees, and an e-bike exactly when it has the bike badge", () => {
      expect(tour.extras).toContain("picnic");
      expect(tour.extras).toContain("trees");
      expect(tour.extras.includes("ebike")).toBe(tour.badges.bike);
    });
  });

  it("getTour finds by slug and returns undefined for unknown slugs", () => {
    expect(getTour("algarve-in-winter")?.slug).toBe("algarve-in-winter");
    expect(getTour("nope")).toBeUndefined();
  });
});
