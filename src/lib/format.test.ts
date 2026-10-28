import { describe, expect, it } from "vitest";
import { en } from "@/i18n/dictionaries/en";
import { pt } from "@/i18n/dictionaries/pt";
import { formatLike, formatPrice, statTarget } from "./format";

describe("formatPrice", () => {
  it("en", () => expect(formatPrice(1190, "en")).toBe("€1,190"));
  it("pt", () => expect(formatPrice(2890, "pt")).toMatch(/^2[\s  .]?890[\s  ]€$/));
});

describe("formatLike", () => {
  const stats = [en, pt].flatMap((d) => Object.values(d.impact.stats).map((s) => s.value));
  it("round-trips every impact stat", () => {
    for (const s of stats) expect(formatLike(s, statTarget(s))).toBe(s);
  });
  it("keeps the locale separator and suffix while counting", () => {
    expect(formatLike("18,400", 9200)).toBe("9,200");
    expect(formatLike("18 400", 9200)).toBe("9 200");
    expect(formatLike("96,000", 0)).toBe("0");
    expect(formatLike("100%", 42)).toBe("42%");
  });
});
