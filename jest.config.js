/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  exclude: [
    "**/*.stories.tsx", // Ignora arquivos com o padrão de extensão .stories.tsx
    "**/*.stories.ts", // Ignora arquivos .stories.ts
    "**/stories/**", // Ignora pastas stories
  ],
};
