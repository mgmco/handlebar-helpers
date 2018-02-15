/**
 * Checks for falsiness in all given params. Also counts as falsy are empty objects and arrays.
 * @param {Mixed} params as many arguments as you want to test
 * @returns {Boolean} returns true if all of the given values is falsy
 */
const not = value => {
  if (!value || value === false) return true;

  if (Object.getPrototypeOf(value) === Object.getPrototypeOf({})) {
    return Object.keys(value).length === 0;
  }

  if (Array.isArray(value)) return value.length === 0;

  return false;
};

module.exports = not;
