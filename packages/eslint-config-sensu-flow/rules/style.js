module.exports = {
  // Simply use prettier. Auto-magical formatting for all. 🎉
  plugins: ["prettier"],
  extends: [require.resolve("eslint-config-prettier/flowtype")],

  rules: {
    // https://github.com/prettier/eslint-plugin-prettier/blob/v2.6.0/README.md
    "prettier/prettier": "error",
  },
};
