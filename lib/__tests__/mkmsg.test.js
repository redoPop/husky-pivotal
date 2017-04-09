const mkmsg = require('../mkmsg');

test('leaves messages untouched if they already contain story references', () => {
  expect(mkmsg('[#123456]')).toBe('[#123456]');
});

test('adds a story reference generated from the branch parameter', () => {
  expect(mkmsg('', '123456-feature-name').split('\n')[2]).toBe('[#123456]');
});

test('adds a "ruh roh" if no story reference could be generated', () => {
  expect(mkmsg('').split('\n')[1]).toBe('# RUH ROH: 💥');
});

test('prepends content without removing existing content', () => {
  expect(mkmsg('\n# Prior content').split('\n').pop()).toBe('# Prior content');
  expect(mkmsg('\n# Prior content', '123456-feature-name').split('\n').pop()).toBe('# Prior content');
});
