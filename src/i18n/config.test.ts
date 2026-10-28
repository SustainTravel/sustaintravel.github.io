import { describe, expect, it } from "vitest";
import { isLocale, pickInitialLocale, switchLocalePath } from "./config";

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

describe("pickInitialLocale", () => {
  it("stored wins", () => expect(pickInitialLocale("pt", ["en-US"])).toBe("pt"));
  it("ignores invalid stored", () => expect(pickInitialLocale("xx", ["pt-PT"])).toBe("pt"));
  it("uses first matching browser language", () =>
    expect(pickInitialLocale(null, ["pt-BR", "en"])).toBe("pt"));
  it("falls back to en for unsupported", () =>
    expect(pickInitialLocale(null, ["de-DE"])).toBe("en"));
  it("falls back to en for empty", () => expect(pickInitialLocale(null, [])).toBe("en"));
});

describe("switchLocalePath", () => {
  it("home", () => expect(switchLocalePath("/en/", "pt")).toBe("/pt/"));
  it("keeps the rest of the path", () =>
    expect(switchLocalePath("/en/book/replant-the-serra/", "pt")).toBe("/pt/book/replant-the-serra/"));
  it("pt to en", () => expect(switchLocalePath("/pt/tours/", "en")).toBe("/en/tours/"));
  it("root", () => expect(switchLocalePath("/", "pt")).toBe("/pt/"));
});
