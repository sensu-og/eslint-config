module.exports = {
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/docs",
    "./rules/variables",
    "./rules/strict",
    "./rules/modern",
    "./rules/imports",
    "./rules/style",
  ].map(require.resolve),
  parser: "babel-eslint",
};
