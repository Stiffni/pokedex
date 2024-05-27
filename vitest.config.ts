import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      include: ["app/**"],
    },
    alias: {
      "@": new URL("./", import.meta.url).pathname,
      "@components": new URL("./app/components/", import.meta.url).pathname,
    },
  },
});
