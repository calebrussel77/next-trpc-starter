/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  arrowParens: "avoid",
  bracketSpacing: true,
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  bracketSameLine: false,
  jsxSingleQuote: false,
  proseWrap: "always",
  quoteProps: "as-needed",
  requirePragma: false,
  useTabs: false,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    "^@/client/(.*)$",
    "^@/components/(.*)$",
    "^@/features/(.*)$",
    "^@/validations/(.*)$",
    "^@/pages/(.*)$",
    "^@/types/(.*)$",
    "^@/utils/(.*)$",
    "^@/lib/(.*)$",
    "^@/server/(.*)$",
    "^@/hooks/(.*)$",
    "^@/contexts/(.*)$",
    "^@/constants/(.*)$",
    "^[./]",
  ],
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
