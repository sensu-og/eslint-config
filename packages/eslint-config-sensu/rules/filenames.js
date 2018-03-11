module.exports = {
  // https://github.com/selaux/eslint-plugin-filenames#matching-exported-values-match-exported
  plugins: ["filenames"],
  rules: {
    // Match the file name against the default exported value in the module.
    // Files that dont have a default export will be ignored. The exports of
    // index.js are matched against their parent directory.
    // https://github.com/selaux/eslint-plugin-filenames#matching-exported-values-match-exported
    "filenames/match-exported": ["error", null, "\\..*$"],
    "filenames/match-regex": "off",
    "filenames/no-index": "off",
  },
};
