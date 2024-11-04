import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  vue: true,
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },
  rules: {
    // Add your own rules
    "no-console": "warn",
  },
});
