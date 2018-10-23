const extensions = [
  "../eslint-config/node",
  "./rules/react",
  "./rules/react-a11y",
];

module.exports = {
  extends: extensions.map(require.resolve),
};
