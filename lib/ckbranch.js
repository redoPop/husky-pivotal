/**
Given a branch name string, returns the pivotal tracker Story ID
it appears to contain, or false if it contains none.
*/

module.exports = branch => {
  const matches = branch.match(/\b(\d{6,})/);
  return matches ? matches[1] : false;
};
