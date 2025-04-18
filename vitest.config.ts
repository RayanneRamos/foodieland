import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Ignora todos os arquivos relacionados ao Storybook
    exclude: [
      "**/*.stories.*",
      "**/stories/**",
      "**/node_modules/**",
      "**/dist/**",
    ],
  },
});
