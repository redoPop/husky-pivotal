/**
Given commit message and branch name strings, returns a new commit
message string containing the Pivotal Tracker Story ID based on the
provided branch name.
*/

const ckbranch = require('./ckbranch');
const ckmsg = require('./ckmsg');

module.exports = (msg, branch) => {
  // Early escape for messages that already contain a Story ID
  if (ckmsg(msg)) return msg;

  // Extract the Story ID from the branch name
  const story = ckbranch(branch || '');

  // Construct message addition
  const prepend = story ? [
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
  ];

  return `${prepend.join('\n')}${msg}`;
};
