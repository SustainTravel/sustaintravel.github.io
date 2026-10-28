import { describe, expect, it } from "vitest";
import { formatPrice } from "./format";

describe("formatPrice", () => {
  it("en", () => expect(formatPrice(1190, "en")).toBe("€1,190"));
  it("pt", () => expect(formatPrice(2890, "pt")).toMatch(/^2[\s  .]?890[\s  ]€$/));
});
