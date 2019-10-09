/**
Given commit message and branch name strings, returns a new commit
message string containing the Pivotal Tracker Story ID based on the
provided branch name.
*/

const ckbranch = require('./ckbranch');
const ckmsg = require('./ckmsg');

// Returns true if the provided commit contains non-comment lines
const hasBody = msg => !!String(msg).match(/^\b[^#].+/m)

module.exports = (msg, branch) => {
  // Early escape for messages that already contain a Story ID
  if (ckmsg(msg)) return msg;

  // Extract the Story ID from the branch name
  const story = ckbranch(branch || '');

  // Construct message addition
  const extra = (story ? [
    '',
    '',
    `[#${story}]`,
  ] : [
    '',
    '# RUH ROH: 💥',
    '# No Pivotal Tracker Story ID was found in the current branch name.',
    '# Please add a Story ID to this commit manually with [#_] notation.',
    '# For example: [#123456] where 123456 is the Story ID.',
    '# 🐶',
    '#',
  ]).join('\n');

  // If the existing commit message contains text then the extras
  // should be appended to it, otherwise they should be prepended
  return hasBody(msg)
    ? `${msg}${extra}`
    : `${extra}${msg}`;
};
