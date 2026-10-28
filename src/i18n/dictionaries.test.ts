import { describe, expect, it } from "vitest";
import { en } from "./dictionaries/en";
import { pt } from "./dictionaries/pt";
import { fill, getDictionary } from "./get-dictionary";

function leaves(node: unknown, path = ""): [string, unknown][] {
  if (node !== null && typeof node === "object")
    return Object.entries(node).flatMap(([k, v]) => leaves(v, path ? `${path}.${k}` : k));
  return [[path, node]];
}

describe("dictionaries", () => {
  const enLeaves = new Map(leaves(en));
  const ptLeaves = new Map(leaves(pt));

  it("every en path exists in pt and vice versa", () => {
    expect([...ptLeaves.keys()].sort()).toEqual([...enLeaves.keys()].sort());
  });

  it("no leaf is empty or whitespace", () => {
    for (const [path, v] of [...enLeaves, ...ptLeaves]) {
      expect(typeof v, path).toBe("string");
      expect((v as string).trim(), path).not.toBe("");
    }
  });

  it("placeholders match between en and pt", () => {
    const vars = (s: unknown) => [...String(s).matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();
    for (const [path, v] of enLeaves) expect(vars(ptLeaves.get(path)), path).toEqual(vars(v));
  });

  it("getDictionary returns the right locale", () => {
    expect(getDictionary("en")).toBe(en);
    expect(getDictionary("pt")).toBe(pt);
  });
});

describe("fill", () => {
  it("replaces placeholders", () => expect(fill("Pay {total}", { total: "€10" })).toBe("Pay €10"));
  it("handles numbers and repeats", () => expect(fill("{n} of {n}", { n: 3 })).toBe("3 of 3"));
  it("leaves unknown placeholders intact", () => expect(fill("Hi {name}", {})).toBe("Hi {name}"));
});

describe("business model canvas", () => {
  const keys = Object.keys(en.businessModel.blocks) as (keyof typeof en.businessModel.blocks)[];

  it("has the nine canvas blocks", () => expect(keys).toHaveLength(9));

  it("every block has items, and en and pt have the same number per block", () => {
    for (const key of keys) {
      expect(en.businessModel.blocks[key].items.length, key).toBeGreaterThan(0);
      expect(pt.businessModel.blocks[key].items.length, key).toBe(en.businessModel.blocks[key].items.length);
    }
  });
});
