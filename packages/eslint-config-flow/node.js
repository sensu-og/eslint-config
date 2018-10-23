module.exports = {
  extends: ["../eslint-config/node", "./rules/flowtype", "./rules/style"].map(
    require.resolve,
  ),
};
