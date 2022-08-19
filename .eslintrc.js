module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        "react/prop-types": ["error", { "ignore": ["navigation"]}],
        "no-useless-escape": "off",
        "no-trailing-spaces": "warn",
        "no-tabs": ["warn", { "allowIndentationTabs": true }],
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 1 }],
        "semi": ["warn", "never"],
        "no-mixed-spaces-and-tabs": ["warn"],
        "indent": ["warn", "tab"],
        "eol-last": ["warn", "always"],
        "no-duplicate-imports": "error",
        "no-irregular-whitespace": ["error", { "skipStrings": true }],
        "comma-style": ["error", "last"],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off"
      },
    },
  ],
};
