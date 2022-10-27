module.exports = {
  parser: "babel",
  printWidth: 100,
  trailingComma: "all",
  bracketSpacing: false,
  semi: true,
  arrowParens: "avoid",
  overrides: [
    {
      files: "e2e/**/*.js",
      options: {
        printWidth: 120,
      },
    },
    {
      files: "**/*.scss",
      options: {
        parser: "scss",
      },
    },
    {
      files: "**/*.css",
      options: {
        parser: "css",
      },
    },
  ],
};
