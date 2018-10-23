module.exports = {
  // Instead of pulling in style rules from airbnb configuration, we simply use
  // prettier. Auto-magical formatting for all. 🎉
  plugins: ["prettier"],
  extends: [require.resolve("eslint-config-prettier/index")],

  rules: {
    // https://github.com/prettier/eslint-plugin-prettier/blob/v2.6.0/README.md
    "prettier/prettier": "error",

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    "prefer-object-spread": "error",

    // Open to re-enabling rules that do not conflict with prettier and provide
    // exceptional value.
    camelcase: "off",
    "capitalized-comments": "off",
    "consistent-this": "off",
    "func-name-matching": "off",
    "func-names": "off",
    "func-style": "off",
    "id-blacklist": "off",
    "id-length": "off",
    "id-match": "off",
    "line-comment-position": "off",
    "linebreak-style": "off",
    "lines-between-class-members": "off",
    "max-depth": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    "new-cap": "off",
    "no-array-constructor": "off",
    "no-bitwise": "off",
    "no-continue": "off",
    "no-inline-comments": "off",
    "no-lonely-if": "off",
    "no-multi-assign": "off",
    "no-negated-condition": "off",
    "no-nested-ternary": "off",
    "no-new-object": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-ternary": "off",
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "off",
    "one-var": "off",
    "operator-assignment": "off",
    "padding-line-between-statements": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "spaced-comment": "off",
  },
};
