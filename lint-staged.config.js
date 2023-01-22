const micromatch = require('micromatch');

module.exports = {
  '*': (allFiles) => {
    const commands = [];

    // Lint and format TypeScript and JavaScript files.
    const codeFiles = micromatch(allFiles, ['**/*.[tj]s?(x)']);
    if (codeFiles.length > 0) {
      commands.push(
        /* eslint-disable-next-line */
        `eslint --cache --cache-location ./node_modules/.cache/eslint --fix --ignore-path .gitignore ${codeFiles.join(
          ' '
        )}`
      );
    }

    // Format Markdown, JSON, and PostCSS files.
    const miscFiles = micromatch(allFiles, ['**/*.json']);
    if (miscFiles.length > 0) {
      commands.push(`prettier --write ${miscFiles.join(' ')}`);
    }

    return commands;
  },
};
