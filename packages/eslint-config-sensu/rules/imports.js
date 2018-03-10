module.exports = {
  extends: [require.resolve("eslint-config-airbnb-base/rules/imports")],

  rules: {
    // TODO: Only disable in a hypothetical node.js specific config
    // https://github.com/benmosher/eslint-plugin-import/blob/v2.9.0/docs/rules/no-commonjs.md
    "import/no-commonjs": "error",

    // Forbid the use of Node.js builtin modules. Can be useful for client-side
    // web projects that do not have access to those modules.
    // https://github.com/benmosher/eslint-plugin-import/blob/v2.9.0/docs/rules/no-nodejs-modules.md
    "import/no-nodejs-modules": "error",

    // Reports if namespace import is used.
    // https://github.com/benmosher/eslint-plugin-import/blob/v2.9.0/docs/rules/no-namespace.md
    "import/no-namespace": "error",

    // Enforce a convention in the order of require() / import statements.
    // https://github.com/benmosher/eslint-plugin-import/blob/v2.9.0/docs/rules/order.md
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "never",
      },
    ],

    // This rule enforces that all exports are declared at the bottom of the file. This rule will report any export declarations that comes before any non-export statements.
    // https://github.com/benmosher/eslint-plugin-import/blob/v2.9.0/docs/rules/exports-last.md
    "import/exports-last": "error",

    // Forbid a module from importing itself. This can sometimes happen during refactoring.
    // https://github.com/benmosher/eslint-plugin-import/blob/v2.9.0/docs/rules/no-self-import.md
    "import/no-self-import": "error",

    // No no no.
    // https://github.com/benmosher/eslint-plugin-import/blob/v2.9.0/docs/rules/no-default-export.md
    "import/no-default-export": "off",

    // Reports when named exports are not grouped together in a single export declaration
    // or when multiple assignments to CommonJS module.exports or exports object are present
    // in a single file.
    // https://github.com/benmosher/eslint-plugin-import/blob/v2.9.0/docs/rules/group-exports.md
    "import/group-exports": "off",

    // Ensures that there are no useless path segments.
    // https://github.com/benmosher/eslint-plugin-import/blob/v2.9.0/docs/rules/no-useless-path-segments.md
    "import/no-useless-path-segments": "error",
  },
};
