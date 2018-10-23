const extensions = [
  "@sensuapp/eslint-config",
  "./rules/react",
  "./rules/react-a11y",
];

module.exports = {
  extends: extensions.map(require.resolve),
};
