const ckbranch = require('../ckbranch');

test('matches {story}-{feature} branch style', () => {
  expect(ckbranch('123456-great-stuff')).toBe('123456');
});

test('matches feature/{story}-{feature} branch style', () => {
  expect(ckbranch('feature/123456-great-stuff')).toBe('123456');
});

test('matches branch names with long numbers', () => {
  expect(ckbranch('123456789101112-great-stuff')).toBe('123456789101112');
});

test('rejects branch names with short numbers', () => {
  expect(ckbranch('12345-great-stuff')).toBe(false);
});

test('rejects branch names without stories', () => {
  expect(ckbranch('feature/great-stuff')).toBe(false);
});
