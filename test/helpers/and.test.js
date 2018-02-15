/* global test, expect */

const helperFunction = require('../../helpers/and');

test('and() compares things properly', () => {
  expect(helperFunction(true, true)).toBe(true);
  expect(helperFunction(true, false)).toBe(false);
  expect(helperFunction(false, false)).toBe(false);
  expect(helperFunction(null, false)).toBe(false);
  expect(helperFunction({}, true)).toBe(true);
  expect(helperFunction(true, [])).toBe(true);
  expect(helperFunction(0, false)).toBe(false);
  expect(helperFunction(true, ['bums'])).toBe(true);
  expect(helperFunction({ dicks: true }, true)).toBe(true);
});
