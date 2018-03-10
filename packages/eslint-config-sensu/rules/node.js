module.exports = {
  extends: [require.resolve("eslint-config-airbnb-base/rules/node")],

  rules: {
    // Reports require([string]) function calls. Will not report if >1 argument, or single argument is not a literal string.
    // Reports module.exports or exports.*, also.
    // https://github.com/benmosher/eslint-plugin-import/blob/v2.9.0/docs/rules/no-commonjs.md
    "import/no-commonjs": "off",
  },
};
