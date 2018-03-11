module.exports = {
  extends: [require.resolve("eslint-config-airbnb/rules/react")],

  rules: {
    // Ensures that any component or prop methods used to handle events are
    // correctly prefixed.
    // https://github.com/yannickcr/eslint-plugin-react/blob/v7.7.0/docs/rules/jsx-handler-names.md
    "react/jsx-handler-names": [
      "off",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
      },
    ],

    // Updating the state after a component mount will trigger a second render()
    // call and can lead to property/layout thrashing.
    // https://github.com/yannickcr/eslint-plugin-react/blob/v7.7.0/docs/rules/no-did-mount-set-state.md
    "react/no-did-mount-set-state": "error",

    // This rule is aimed to forbid the use of mutating this.state directly.
    // https://github.com/yannickcr/eslint-plugin-react/blob/v7.7.0/docs/rules/no-direct-mutation-state.md
    "react/no-direct-mutation-state": "error",

    // ------------------------------------
    // Rules not present in v16.1.0 release
    // ------------------------------------

    // Prevent usage of button elements without an explicit type attribute
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/button-has-type.md
    "react/button-has-type": [
      "error",
      {
        button: true,
        submit: true,
        reset: false,
      },
    ],

    // Enforce consistent usage of destructuring assignment of props, state, and context
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": ["error", "always"],

    // Forbid certain props on DOM Nodes
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-dom-props.md
    "react/forbid-dom-props": ["off", { forbid: [] }],

    // Ensures inline tags are not rendered without spaces between them
    "react/jsx-child-element-spacing": "off",

    // Validate JSX maximum depth
    // https://github.com/yannickcr/eslint-plugin-react/blob/abe8381c0d6748047224c430ce47f02e40160ed0/docs/rules/jsx-max-depth.md
    "react/jsx-max-depth": "off",

    // One JSX Element Per Line
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
    "react/jsx-one-expression-per-line": "error",

    // Enforce defaultProps declarations alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-sort-default-props.md
    "react/jsx-sort-default-props": "off",

    // Prevent using this.state within a this.setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-access-state-in-setstate.md
    "react/no-access-state-in-setstate": "error",

    // Prevent this from being used in stateless functional components
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-this-in-sfc.md
    "react/no-this-in-sfc": "error",
  },
};
