module.exports = {
  plugins: ["graphql"],
  rules: {
    // The No Deprecated Fields rule validates that no deprecated fields are
    // part of the query. This is useful to discover fields that have been
    // marked as deprecated and shouldn't be used.
    // https://github.com/apollographql/eslint-plugin-graphql#no-deprecated-fields-validation-rule
    "graphql/no-deprecated-fields": "error",

    // This rule enforces that first letter of types is capitalized. Enabled as
    // relay-compilerwill spew if you names do not match component
    // https://github.com/apollographql/eslint-plugin-graphql#capitalization-of-a-first-letter-of-a-type-name
    "graphql/capitalized-type-name": "error",

    // The Required Fields rule validates that any specified required field is
    // part of the query, but only if that field is available in schema. This is
    // useful to ensure that query results are cached properly in the client.
    // While we could explicitly require 'id' always be present, Relay will
    // always implicitly inlcude the field and unless it is selected will not be
    // passed down to the compoent.
    // https://github.com/apollographql/eslint-plugin-graphql#required-fields-validation-rule
    "graphql/required-fields": "off",

    // The Named Operation rule validates that all operations are named. Naming
    // operations is valuable for including in server-side logs and debugging.
    // Enabled as relay-compiler will spew unless operation name is prseent.
    // https://github.com/apollographql/eslint-plugin-graphql#named-operations-validation-rule
    "graphql/named-operations": "error",

    // Validation for graphql`` template strings.
    "graphql/template-strings": [
      "error",
      {
        // As the plugin is a bit tricky to extend we assume that the schema is
        // configured by .graphql-config.
        // TODO: Wrap plugin and make it easier to extend..?
        // schemaJson: "...",

        // See full list of rules here.
        // https://github.com/graphql/graphql-js/blob/v0.13.1/src/validation/specifiedRules.js#L93-L126
        validators: [
          "ExecutableDefinitions",
          "UniqueOperationNames",
          "LoneAnonymousOperation",
          "SingleFieldSubscriptions",
          "KnownTypeNames",
          "FragmentsOnCompositeTypes",
          "VariablesAreInputTypes",
          "ScalarLeafs",
          "FieldsOnCorrectType",
          "UniqueFragmentNames",
          "KnownFragmentNames",
          "PossibleFragmentSpreads",
          "NoFragmentCycles",
          "UniqueVariableNames",
          "NoUnusedVariables",
          "UniqueDirectivesPerLocation",
          "KnownArgumentNames",
          "UniqueArgumentNames",
          "ValuesOfCorrectType",
          "VariablesDefaultValueAllowed",
          "VariablesInAllowedPosition",
          "OverlappingFieldsCanBeMerged",
          "UniqueInputFieldNames",

          // ----------------------------------------
          // Unhelpful when validating client queries
          // ----------------------------------------
          //
          // "KnownDirectives",
          // "KnownFragmentNames",
          // "NoUndefinedVariables",
          // "NoUnusedFragments",
          // "ProvidedNonNullArguments",
          // "ScalarLeafs",
          //
        ],
        env: "relay",
      },
    ],
  },
};
