/* global test, expect */

const helperFunction = require('../../helpers/math');

test('math() can do simple calculations', () => {
  expect(helperFunction(1, '+', 13)).toBe(14);
  expect(helperFunction(133, '-', 13)).toBe(120);
  expect(helperFunction(10, '*', 13)).toBe(130);
  expect(helperFunction(100, '/', 10)).toBe(10);
  expect(helperFunction(15, '%', 13)).toBe(2);
  expect(helperFunction(1, '>', 13)).toBe(false);
  expect(helperFunction(1, '<', 13)).toBe(true);
  expect(helperFunction(1, '>=', 13)).toBe(false);
  expect(helperFunction(1, '<=', 13)).toBe(true);
});
