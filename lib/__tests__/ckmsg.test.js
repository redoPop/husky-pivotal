const ckmsg = require('../ckmsg');

test('matches messages that start with [#story] references', () => {
  expect(ckmsg('[#123456]')).toBe(true);
});

test('matches messages that mention [#story] references', () => {
  expect(ckmsg('How\'s [#123456]?')).toBe(true);
});

test('matches messages that mention multiple [#story #story] references', () => {
  expect(ckmsg('I like [#123456 #234567]')).toBe(true);
});

test('matches multiline messages with [#story] references', () => {
  expect(ckmsg('Adds all the things\n\n[#123456]')).toBe(true);
});

test('matches messages that use [state #story] references', () => {
  expect(ckmsg('By the way, this [finishes #123456]')).toBe(true);
});

test('rejects messages without [#story] references', () => {
  expect(ckmsg('I have no idea what I\'m doing')).toBe(false);
});

test('rejects messages whose [#story] references are commented', () => {
  expect(ckmsg('# Maybe [#123456]')).toBe(false);
});

test('rejects short numbers as stories', () => {
  expect(ckmsg('[#12345]')).toBe(false);
});
