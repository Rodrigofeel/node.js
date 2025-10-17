import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    plugins: { js, react: require("eslint-plugin-react"), "@typescript-eslint": require("@typescript-eslint/eslint-plugin"), prettier: require("eslint-plugin-prettier") },
    extends: [
      "js/recommended",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021
      },
      parser: require.resolve("@typescript-eslint/parser")
    },
    rules: {
      "prettier/prettier": "error"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
]);

