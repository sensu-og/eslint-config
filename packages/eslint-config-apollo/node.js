module.exports = {
  extends: ["../eslint-config/node", "./rules/graphql"].map(require.resolve),
};
