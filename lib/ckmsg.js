/**
Given a message string, returns true if it contains a
Pivotal Tracker Story ID, false otherwise.
*/

module.exports = msg => {
  return !!String(msg).match(/^(?:[^#].*\[|\[)[^\]]*#\d{6,}\]/m);
};
