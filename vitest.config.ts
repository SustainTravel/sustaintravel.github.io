import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  // A non-UTC zone so tests that silently depend on UTC fail here, not on a visitor's machine.
  test: { environment: "node", env: { TZ: "America/Los_Angeles" } },
});
