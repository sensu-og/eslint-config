module.exports = {
  extends: [require.resolve("eslint-config-airbnb-base/rules/best-practices")],

  rules: {
    // specify the maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/rules/complexity
    // https://www.youtube.com/watch?v=NMS2VnDveP8
    complexity: ["error", 11],

    // disallow the use of alert, confirm, and prompt
    // https://eslint.org/docs/rules/no-alert
    "no-alert": "error",

    // Comparing to null without a type-checking operator (== or !=), can have
    // unintended results as the comparison will evaluate to true when comparing
    // to not just a null, but also an undefined value.
    // https://eslint.org/docs/rules/no-eq-null
    "no-eq-null": "error",

    // The updates of imported bindings by ES Modules cause runtime errors.
    // https://eslint.org/docs/rules/no-import-assign
    "no-import-assign": "error",
  },
};
