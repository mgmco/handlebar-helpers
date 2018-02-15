/**
 * Checks for truthy values in any of the provided arguments
 * @param {Mixed} params Any amount of arguments can be supplied, and all will be checked for
 * truthiness
 * @return {Boolean} returns true if any of the given values is truthy, otherwise false
 */
const or = (...params) => {
  for (const param of params) if (param) return true;
  return false;
};

module.exports = or;
