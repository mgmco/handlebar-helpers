/* global test, expect */

const helperFunction = require('../../helpers/not');

test('not() compares things properly', () => {
  expect(helperFunction(true, false)).toBe(false);
  expect(helperFunction(false, false)).toBe(true);
  expect(helperFunction(null, false)).toBe(true);
  expect(helperFunction({}, false)).toBe(true);
  expect(helperFunction(false, [])).toBe(true);
  expect(helperFunction(0, false)).toBe(true);
});
