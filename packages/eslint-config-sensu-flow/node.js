module.exports = {
  extends: [
    "eslint-config-sensu/node",
    "./rules/flowtype",
    "./rules/style",
  ].map(require.resolve),
};
