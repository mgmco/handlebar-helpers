/* global test, expect */

const helperFunction = require('../../helpers/or');

test('or() compares things properly', () => {
  expect(helperFunction(true, false)).toBe(true);
  expect(helperFunction(false, false)).toBe(false);
  expect(helperFunction(null, false)).toBe(false);
  expect(helperFunction({}, false)).toBe(true);
  expect(helperFunction(false, [])).toBe(true);
  expect(helperFunction(0, false)).toBe(false);
});
