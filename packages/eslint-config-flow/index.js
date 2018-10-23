module.exports = {
  extends: ["./rules/flowtype", "./rules/style"].map(require.resolve),
  parser: "babel-eslint",
};
