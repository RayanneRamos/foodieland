import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { type ViteUserConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
} as UserConfig & ViteUserConfig);
