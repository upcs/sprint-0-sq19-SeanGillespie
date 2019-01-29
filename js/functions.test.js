const add = require('./functions.js');

test('2 plus 2 is 4', () => {
  expect(add(2, 2)).toBe(4);
});

test('2 + 3 = 7', () => {
  expect(add(2, 3)).toBe(7);//test should fail now
});