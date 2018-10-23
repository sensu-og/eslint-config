module.exports = {
  extends: [require.resolve("eslint-config-airbnb/rules/react-a11y")],

  rules: {
    // -----------------------------------------
    // Options not present in recommended config
    // -----------------------------------------

    // TODO: determine if we want any of these.
    "jsx-a11y/label-has-associated-control": "off",
  },
};
