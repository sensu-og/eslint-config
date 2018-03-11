module.exports = {
  extends: ["eslint-config-sensu", "./rules/graphql"].map(require.resolve),
};
