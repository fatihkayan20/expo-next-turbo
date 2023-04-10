module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "turbo",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "newline-before-return": "error",
    "lines-around-comment": [
      "error",
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
      },
    ],
    "no-console": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
      },
    },
  ],
};
