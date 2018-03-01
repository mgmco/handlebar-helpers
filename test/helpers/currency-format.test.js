/* global test, expect */

const Handlebars = require('handlebars');
const helperFunction = require('../../helpers/currency-format');

Handlebars.registerHelper('format-currency', helperFunction);

test('currencyFormat() properly processes a monetary currency', () => {
  const template = '{{format-currency amount=amount currency=currency format=format locale=locale}}';
  const params = {
    currency: {
      isMoney: true,
      abbreviation: 'EUR'
    },
    locale: 'de',
    amount: 42
  };

  expect(Handlebars.compile(template)(params)).toBe('€ 42');
});

test('currencyFormat() properly processes a monetary currency with support for kastlijntje', () => {
  const template = '{{format-currency amount=amount currency=currency format=format locale=locale}}';
  const params = {
    currency: {
      isMoney: true,
      abbreviation: 'EUR',
      decimalTerminator: '-'
    },
    locale: 'de',
    amount: 42
  };

  expect(Handlebars.compile(template)(params)).toBe('€ 42.-');
});

test('currencyFormat() properly processes a non-monetary currency', () => {
  const template = '{{format-currency amount=amount currency=currency format=format}}';
  const params = {
    currency: {
      isMoney: false,
      singularName: 'staatslot',
      pluralName: 'staatsloten'
    },
    format: '{{amount}} {{currency}}'
  };

  const pluralResult = Handlebars.compile(template)({ ...params, amount: 3 });
  const singleResult = Handlebars.compile(template)({ ...params, amount: 1 });

  expect(typeof pluralResult).toBe('string');
  expect(pluralResult).toBe('3 staatsloten');
  expect(typeof singleResult).toBe('string');
  expect(singleResult).toBe('1 staatslot');
});

