const git = require('../git');

describe('param', () => {
  const ORIGINAL_ENV = Object.assign({}, process.env);

  afterEach(() => {
    process.env = ORIGINAL_ENV;
  });

  test('looks for git parameters in GIT_PARAMS', () => {
    process.env.GIT_PARAMS = 'foo bar';

    expect(git.param(0)).toBe('foo');
    expect(git.param(1)).toBe('bar');
  });

  test('looks for git parameters in HUSKY_GIT_PARAMS', () => {
    process.env.HUSKY_GIT_PARAMS = 'baz qux';

    expect(git.param(0)).toBe('baz');
    expect(git.param(1)).toBe('qux');
  });
});
