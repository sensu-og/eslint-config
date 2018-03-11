const extensions = [
  "eslint-config-sensu",
  "./rules/react",
  "./rules/react-a11y",
];

module.exports = {
  extends: extensions.map(require.resolve),
};
