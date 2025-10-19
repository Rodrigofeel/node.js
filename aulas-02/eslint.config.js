import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021
      }
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin
    },
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    rules: {
      "prettier/prettier": "error"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];


