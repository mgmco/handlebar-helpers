/**
 * Performs a strict type-sensitive comparison between two values
 * @param {Mixed} value1 the first value to campare
 * @param {Mixed} value2 the second value to compare
 * @returns {Boolean} the result of the strict comparison
 */
const isEqual = (value1, value2) => (value1 === value2);

module.exports = isEqual;
