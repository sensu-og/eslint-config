module.exports = {
  extends: [require.resolve("eslint-config-airbnb-base/rules/variables")],

  rules: {
    // The undefined variable in JavaScript is actually a property of the global
    // object. As such, in ECMAScript 3 it was possible to overwrite the value
    // of undefined. While ECMAScript 5 disallows overwriting undefined, it’s
    // still possible to shadow undefined.
    // https://eslint.org/docs/rules/no-undefined
    "no-undefined": "error",
  },
};
