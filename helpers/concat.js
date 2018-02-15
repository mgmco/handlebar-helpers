/**
 * Concatenates strings or numbers together
 * @param {Number|String} fragments You can place an almost infinite amount of arguments. If
 * they are the type String or Number they will be concatenated, others will be ignored.
 * @returns {String} The concatenated string of all the valid arguments
 */
function concat(...fragments) {
  let value = '';

  for (const fragment of fragments) {
    if (['string', 'number'].indexOf(typeof fragment) > -1) value += fragment;
  }

  return value;
}

module.exports = concat;
