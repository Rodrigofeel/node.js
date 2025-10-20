// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
      parser: parserTs,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      react: pluginReact,
      "@typescript-eslint": tseslint,
      prettier,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "prettier/prettier": "error",
      "no-console": ["error", { allow: ["warn", "log"] }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
