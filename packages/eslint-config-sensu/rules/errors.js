module.exports = {
  extends: [require.resolve("eslint-config-airbnb-base/rules/errors")],

  rules: {
    // A constant expression (for example, a literal) as a test condition might
    // be a typo or development trigger for a specific behavior.
    // https://eslint.org/docs/rules/no-constant-condition
    "no-constant-condition": "error",
  },
};
