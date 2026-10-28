import { describe, expect, it } from "vitest";
import { isLocale, localePath, switchLocalePath } from "./config";

describe("isLocale", () => {
  it("accepts en and pt", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("pt")).toBe(true);
  });
  it("rejects others", () => {
    expect(isLocale("de")).toBe(false);
    expect(isLocale("")).toBe(false);
  });
});

describe("localePath", () => {
  it("en has no prefix", () => {
    expect(localePath("en", "/")).toBe("/");
    expect(localePath("en", "/tours/x/")).toBe("/tours/x/");
    expect(localePath("en", "/#how")).toBe("/#how");
  });
  it("pt is under /pt", () => {
    expect(localePath("pt", "/")).toBe("/pt/");
    expect(localePath("pt", "/business-model/")).toBe("/pt/business-model/");
  });
});

describe("switchLocalePath", () => {
  it("tour page both ways", () => {
    expect(switchLocalePath("/tours/x/", "pt")).toBe("/pt/tours/x/");
    expect(switchLocalePath("/pt/tours/x/", "en")).toBe("/tours/x/");
  });
  it("home both ways", () => {
    expect(switchLocalePath("/", "pt")).toBe("/pt/");
    expect(switchLocalePath("/pt/", "en")).toBe("/");
    expect(switchLocalePath("/pt", "en")).toBe("/");
  });
  it("business model both ways", () => {
    expect(switchLocalePath("/business-model/", "pt")).toBe("/pt/business-model/");
    expect(switchLocalePath("/pt/business-model/", "en")).toBe("/business-model/");
  });
  it("same language is a no-op", () => {
    expect(switchLocalePath("/tours/", "en")).toBe("/tours/");
    expect(switchLocalePath("/pt/tours/", "pt")).toBe("/pt/tours/");
  });
  it("works without a trailing slash", () => expect(switchLocalePath("/tours", "pt")).toBe("/pt/tours"));
  it("does not strip a segment that only starts with a locale", () =>
    expect(switchLocalePath("/ptx/", "pt")).toBe("/pt/ptx/"));
});
