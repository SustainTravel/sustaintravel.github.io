import { describe, expect, it } from "vitest";
import * as fa from "./financial-assumptions";

/** Every Localized label in the data, found by walking it. */
function labels(node: unknown): { en?: unknown; pt?: unknown }[] {
  if (Array.isArray(node)) return node.flatMap(labels);
  if (node === null || typeof node !== "object") return [];
  if ("en" in node || "pt" in node) return [node as { en?: unknown; pt?: unknown }];
  return Object.values(node).flatMap(labels);
}

describe("financial assumptions match the sheet", () => {
  it("other direct expenses add up to the sheet's 2027 total", () => {
    expect(fa.yearTotals(fa.otherDirectExpenses.map((r) => r.values))[0]).toBe(90580);
  });

  it("CAPEX adds up to 26,400", () => expect(fa.sum(fa.capex.map((c) => c.value))).toBe(26400));

  it("the loan instalment is the annuity of the principal", () => {
    const { principal, rate: i, years, instalment } = fa.financing.loan;
    const annuity = (principal * i) / (1 - (1 + i) ** -years);
    expect(annuity).toBeCloseTo(23703.08, 2);
    expect(instalment).toBeCloseTo(annuity, 2);
  });

  it("every row has one value per year", () => {
    const rows = [
      ...fa.sales.flatMap((s) => [s.units, s.price]),
      ...fa.otherDirectExpenses.map((r) => r.values),
      ...fa.staffing.flatMap((g) => g.roles.map((r) => r.headcount)),
      ...fa.operatingExpenses.map((r) => r.values),
    ];
    for (const r of rows) expect(r).toHaveLength(fa.years.length);
  });

  it("every label has a non-empty en and pt text, and the counts match", () => {
    const all = labels(fa);
    const en = all.filter((l) => typeof l.en === "string" && l.en.trim());
    const pt = all.filter((l) => typeof l.pt === "string" && l.pt.trim());
    expect(all.length).toBeGreaterThan(50);
    expect(pt).toHaveLength(en.length);
    expect(en).toHaveLength(all.length);
  });

  it("no em dashes or spaced en dashes in labels", () => {
    for (const l of labels(fa)) for (const s of [l.en, l.pt]) expect(String(s)).not.toMatch(/\u2014| \u2013 /);
  });
});
