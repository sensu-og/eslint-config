module.exports = {
  extends: ["eslint-config-sensu/node", "./rules/graphql"].map(require.resolve),
};
