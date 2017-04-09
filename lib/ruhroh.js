/**
Display a message and Exit Level 1.
*/

const chalk = require('chalk');

module.exports = msg => {
  process.stdout.write(chalk.yellow(`${msg.join('\n')}\n`));
  process.exit(1);
};
