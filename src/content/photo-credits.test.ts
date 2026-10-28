import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { photoCredits } from "./photo-credits";
import { tours } from "./tours";

const LICENSES = [
  "CC0",
  "Public domain",
  "CC BY 2.0",
  "CC BY 3.0",
  "CC BY 4.0",
  "CC BY-SA 2.0",
  "CC BY-SA 3.0",
  "CC BY-SA 4.0",
  "Unsplash License",
];
const files = ["/images/hero.jpg", ...tours.flatMap((t) => t.images)];

describe("photo credits", () => {
  it.each(files)("%s exists on disk and has a credit", (file) => {
    expect(existsSync(join(process.cwd(), "public", file))).toBe(true);
    expect(photoCredits.filter((c) => c.file === file)).toHaveLength(1);
  });

  it("has no credit for a file that is not used", () => {
    for (const c of photoCredits) expect(files).toContain(c.file);
  });

  it.each(photoCredits.map((c) => [c.file, c] as const))("%s has author, https source and allowed licence", (_f, c) => {
    expect(c.author.trim()).not.toBe("");
    expect(c.source).toMatch(/^https:\/\/\S+$/);
    expect(LICENSES).toContain(c.license);
  });
});
