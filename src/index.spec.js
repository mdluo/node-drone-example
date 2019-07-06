const { add } = require('./index');

describe('index', () => {
  test('add', () => {
    expect(add(1, 2)).toBe(3);
  });
});
