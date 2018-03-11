module.exports = {
  plugins: ["flowtype"],
  extends: ["plugin:flowtype/recommended"],

  settings: {
    flowtype: {
      // lets see how this goes over...
      onlyFilesWithFlowAnnotation: true,
    },
  },

  rules: {
    // Deprecated Babylon (the Babel parser) v6.10.0 fixes parsing of the
    // invalid syntax this plugin warned against.
    // https://github.com/gajus/eslint-plugin-flowtype#valid-syntax
    "flowtype/valid-syntax": "off",

    // This rule can optionally report missing or missed placed annotations,
    // common typos (e.g. // @floww), and enforce a consistant annotation style.
    // https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation
    "flowtype/require-valid-file-annotation": [
      "error",
      "always",
      {
        annotationStyle: "block",
      },
    ],

    // -----------------------------------------
    // Options not present in recommended config
    // -----------------------------------------

    // TODO: determine if we want any of these.
    "flowtype/newline-after-flow-annotation": "off",
    "flowtype/no-dupe-keys": "off",
    "flowtype/no-existential-type": "off",
    "flowtype/no-flow-fix-me-comments": "off",
    "flowtype/no-mutable-array": "off",
    "flowtype/no-primitive-constructor-types": "off",
    "flowtype/no-unused-expressions": "off",
    "flowtype/object-type-delimiter": "off",
    "flowtype/require-exact-type": "off",
    "flowtype/require-types-at-top": "off",
    "flowtype/require-variable-type": "off",
    "flowtype/sort-keys": "off",
    "flowtype/type-import-style": "off",
  },
};
