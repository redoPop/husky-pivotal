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
Husky stashes git hook parameters $* into a GIT_PARAMS env var.
This method reads indexed parameters back out of that variable.
*/
exports.param = (index = 0) => {
  // Unfortunately this will break if there are escaped spaces within
  // a single argument; I don't believe there's a workaround for this
  // without modifying Husky itself
  return process.env.GIT_PARAMS.split(' ')[index];
};

/**
Returns the path of a pending commit message.
Assumes (gasp) that the commit message path is the first parameter
stashed in GIT_PARAMS because for our purposes it always is.
*/
exports.msgPath = () => {
  return exports.param(0);
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
  fs.writeFile(exports.msgPath(), text);
};
