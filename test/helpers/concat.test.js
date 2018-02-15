/* global test, expect */

const helperFunction = require('../../helpers/concat');

test('concat() puts things together', () => {
  expect(helperFunction('penis', 'butt')).toBe('penisbutt');
  expect(helperFunction(11, 'butt')).toBe('11butt');
  expect(helperFunction({ bad: true }, 'butt')).toBe('butt');
  expect(helperFunction([1, 'penis'], 'butt')).toBe('butt');
});
