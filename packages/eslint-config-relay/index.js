module.exports = {
  extends: ["@sensuapp/eslint-config", "./rules/graphql"].map(require.resolve),
};
