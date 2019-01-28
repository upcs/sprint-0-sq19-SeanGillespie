const add = require('./functions.js');

test('add function is working', () => {
  expect(add(2, 2)).toBe(4);
});

test('add function is Failing', () => {
  expect(add(2, 17)).toBe(4);
});