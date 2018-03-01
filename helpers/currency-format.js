/**
 * Takes some basic currency information and formats it in a locale-specific way.
 * @param {Object} params This configures the display of the currency
 * @param {Number} params.amount This is how much
 * @param {Boolean} params.currency.isMoney Indicates wether this is monetary (euro)
 * or not (a phone)
 * @param {String} params.locale For `isMoney: true`, this determines which locate to use (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)
 * @param {String} params.currency.abbreviation An ISO 4217 designation for a monetary currency (https://en.wikipedia.org/wiki/ISO_4217)
 * @param {String} params.currency.singularName For `isMoney: false`, this is displayed as NAME in
 * the case of 1
 * @param {String} params.currency.pluralName For `isMoney: false`, this is displayed as NAME in
 * the case of >1
 * @param {String} params.format For `isMoney: false`, this specifies how the
 * currency will get rendered. The strings `{{currency}}` and `{{amount}}` will be replaced.
 * @param {String} params.currency.decimalTerminator For `isMoney: true`, this supports a different
 * form of terminating a 00 value in cents
 * @return {String} in the case of isMoney, returns a local-sepcific currency string.
 * In the case of a non-monetary one, it uses a string template to format everything.
*/
const formatCurrency = params => {
  /*
    We look specifically for params.hash here because that is how Handlebars passes in
    variable arguments:

    https://handlebarsjs.com/block_helpers.html
  */
  const {
    amount,
    currency,
    format,
    locale
  } = params.hash ? params.hash : params;

  if (typeof currency.isMoney === 'undefined') {
    throw new Error('"currency.isMoney" is not set');
  } else if (currency.isMoney === false && !format) {
    throw new Error('"format" is not set for a non-monetary currency');
  } else if (currency.isMoney && (!locale || !currency.abbreviation)) {
    throw new Error('"locale" or "currency.abbreviation" is not set for a monetary currency');
  }

  if (currency.isMoney) {
    // Set the amount of decimals we want to show, it's 2 or 0
    const hasTrailingZeroZero = amount % 1 === 0;
    const localeOptions = {
      style: 'currency',
      currency: currency.abbreviation
    };

    if (hasTrailingZeroZero && !currency.decimalTerminator) {
      localeOptions.maximumFractionDigits = 0;
      localeOptions.minimumFractionDigits = 0;
    }

    let localisedValue = new Intl.NumberFormat(locale, localeOptions).format(amount);

    if (hasTrailingZeroZero && currency.decimalTerminator) {
      localisedValue = `${localisedValue.slice(0, -2)}${currency.decimalTerminator}`;
    }

    return localisedValue;
  }

  const name = amount > 1 ? currency.pluralName : currency.singularName;
  return format.replace('{{amount}}', amount).replace('{{currency}}', name);
};

module.exports = formatCurrency;
