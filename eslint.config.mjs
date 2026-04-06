// eslint.config.js
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        XMLHttpRequest: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "warn",
      "no-console": "off"
    },
    ignores: ["public/js/md5.js"],
  },
];