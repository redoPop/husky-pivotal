/**
Helpers for working with Git and Husky.
*/

const exec = require('child_process').exec;
const fs = require('fs');

/**
Run a git command and arguments in the current working directory,
and fire a callback with its output or empty str if errors occur.
*/
exports.command = (command, cb) => {
  exec(`git ${command}`, (err, stdout, stderr) => {
    cb(stderr ? '' : String(stdout).trim());
  });
};

/**
Returns path of pending commit message.
Assumes the message path is command line argument argv[3]
per commands given in the husky-pivotal readme.
*/
exports.msgPath = () => {
  return process.argv[2];
};

/**
Reads the branch name, fires a callback with it.
*/
exports.readBranch = cb => {
  exports.command('symbolic-ref --short HEAD', cb);
};

/**
Reads the commit message, fires a callback with its contents.
*/
exports.readMsg = cb => {
  // Git recommends using UTF-8 encoding for commit messages
  fs.readFile(exports.msgPath(), 'utf-8', (err, text) => {
    if (!err) cb(text);
  });
};

/**
Writes to the commit message.
*/
exports.writeMsg = text => {
  fs.writeFile(exports.msgPath(), text, () => {});
};
