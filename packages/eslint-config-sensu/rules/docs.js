module.exports = {
  rules: {
    // This rule enforces valid and consistent JSDoc comments. It reports any of
    // the following problems:
    //
    // - inconsistent order of parameter names in a comment compared to the
    //   function or method
    // - missing return tag: @return or @returns
    // - missing parameter or return type
    // - missing parameter or return description
    // - syntax error
    //
    // https://eslint.org/docs/rules/valid-jsdoc
    "valid-jsdoc": "error",

    // Would be open to enabling this some day if the rule only appiled to
    // exported identifiers. In it's current state documenting every self
    // descriptive private function, method, class feels a tad excessive.
    // https://eslint.org/docs/rules/require-jsdoc
    "require-jsdoc": "off",
  },
};
