/**
 * Checks for truthiness in all given params.
 * @param {Mixed} params as many arguments as you want to test
 * @returns {Boolean} returns false if even one of the given values is falsy
 */
const and = (...params) => {
  for (const param of params) if (!param) return false;
  return true;
};

module.exports = and;
