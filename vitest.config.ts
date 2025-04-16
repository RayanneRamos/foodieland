import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Ignora todos os arquivos relacionados ao Storybook
    exclude: [
      "**/*.stories.tsx", // Ignora arquivos com o padrão de extensão .stories.tsx
      "**/*.stories.ts", // Ignora arquivos .stories.ts
      "**/stories/**", // Ignora pastas stories
    ],
  },
});
