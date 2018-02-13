const requiredForMonetary = [ 'locale', 'abbreviation' ];
const requiredForNonMonetary = [ 'singularName', 'pluralName', 'templateString' ];

/**
 * Takes some basic currency information and formats it in a locale-specific way.
 * @param {Number} amount This is how much
 * @param {Object} options This configures the display of the currency
 * @param {Boolean} options.isMoney Indicates wether this is monetary (euro) or not (a phone)
 * @param {String} options.locale For `isMoney: true`, this determines which locate to use (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)
 * @param {String} options.abbreviation An ISO 4217 designation for a monetary currency (https://en.wikipedia.org/wiki/ISO_4217)
 * @param {String} options.singularName For `isMoney: false`, this is displayed as NAME in the case of 1
 * @param {String} options.pluralName For `isMoney: false`, this is displayed as NAME in the case of >1
 * @param {String} options.templateString For `isMoney: false`, this specifies how the currency will get rendered. The strings `{{currency}}` and `{{amount}}` will be replaced.
 * @param {String} options.decimalTerminator For `isMoney: true`, this supports a different form of terminating a 00 value in cents
 * @return {String} in the case of isMoney, returns a local-sepcific currency string.
 * In the case of a non-monetary one, it uses a string template to format everything.
*/
const formatCurrency = (amount, options) => {
  if (typeof options.isMoney === 'undefined') throw new Error('options.isMoney is not set');
  
  (options.isMoney ? requiredForMonetary : requiredForNonMonetary).forEach(prop => {
    if (typeof options[prop] === 'undefined') throw new Error(`options.${prop} is not set`);
  });

  if (options.isMoney) {
    // Set the amount of decimals we want to show, it's 2 or 0
    const hasTrailingZeroZero = amount === 0 || amount % 1 === 0;

    if (hasTrailingZeroZero && !options.decimalTerminator) {
      currencyStyle.maximumFractionDigits = 0;
      currencyStyle.minimumFractionDigits = 0;
    }

    let localisedValue = new Intl.NumberFormat(options.locale, {
      style: 'currency',
      currency: options.abbreviation,
    }).format(amount);

    if (hasTrailingZeroZero && options.decimalTerminator) {
      localisedValue = `${localisedValue.slice(0, -2)}${options.decimalTerminator}`;
    }

    return localisedValue;
  } else {
    const name = amount > 1 ? options.pluralName : options.singularName;
    return options.templateString.replace('{{amount}}', amount).replace('{{currency}}', name);
  }
}

module.exports = formatCurrency;