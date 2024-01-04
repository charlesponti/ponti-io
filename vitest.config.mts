import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    setupFiles: ["./tests/setupTests.ts"],
    environment: "jsdom",
    coverage: {
      provider: "v8",
    },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "public"),
    },
  },
});
