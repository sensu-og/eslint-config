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

    // While I prefer stateless functional components, since not every component
    // can be one, I'd rather be consistent and extend React.Component.
    // https://github.com/yannickcr/eslint-plugin-react/blob/v7.7.0/docs/rules/prefer-es6-class.md
    "react/prefer-es6-class": "error",

    // See above.
    // https://github.com/yannickcr/eslint-plugin-react/blob/v7.7.0/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function": "off",

    // While very ideal, can make working with CSS in JS quite difficult at
    // times. Flowtype should be preferred over prop types in the first place.
    // https://github.com/yannickcr/eslint-plugin-react/blob/v7.7.0/docs/rules/forbid-prop-types.md
    "react/forbid-prop-types": "off",

    // Enforces that there is exactly one space between two JSX attributes or the JSX tag name and the first JSX attribute in the same line.
    // https://github.com/yannickcr/eslint-plugin-react/blob/64ef4b8ccb33db7c9a9f75c562f98cd31d64c256/docs/rules/jsx-props-no-multi-spaces.md
    "react/jsx-props-no-multi-spaces": "error",

    // Certain legacy lifecycle methods are unsafe for use in async React applications and cause warnings in strict mode. These also happen to be the lifecycles that cause the most confusion within the React community.
    // https://github.com/yannickcr/eslint-plugin-react/blob/5b08a1e7392ea2b4d03ac615c14a71723fc615f2/docs/rules/no-unsafe.md
    "react/no-unsafe": "error",

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

    // A fragment is redundant if it contains only one child, or if it is the
    // child of a html element, and is not a keyed fragment.
    // https://github.com/yannickcr/eslint-plugin-react/blob/7ccff100909ec510c3eebaee7c5ed658773ebcf0/docs/rules/jsx-no-useless-fragment.md
    "react/jsx-no-useless-fragment": "error",
  },
};
