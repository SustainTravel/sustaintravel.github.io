import { describe, expect, it } from "vitest";
import { formatDate, formatPrice } from "./format";

describe("formatPrice", () => {
  it("en", () => expect(formatPrice(1190, "en")).toBe("€1,190"));
  it("pt", () => expect(formatPrice(2890, "pt")).toMatch(/^2[\s  .]?890[\s  ]€$/));
});

describe("formatDate", () => {
  it("en", () => expect(formatDate("2026-11-14", "en", { day: "numeric", month: "long" })).toBe("14 November"));
  it("pt", () =>
    expect(formatDate("2026-11-14", "pt", { day: "numeric", month: "long" })).toBe("14 de novembro"));
  it("is not shifted by the local timezone", () =>
    expect(formatDate("2026-11-01", "en", { day: "numeric" })).toBe("1"));
});
