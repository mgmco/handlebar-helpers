/* global test, expect */

const helperFunction = require('../../helpers/is-equal');

test('isEqual() compares things properly', () => {
  expect(helperFunction('penis', 'butt')).toBe(false);
  expect(helperFunction(11, 11)).toBe(true);
  expect(helperFunction(11, '11')).toBe(false);
});
