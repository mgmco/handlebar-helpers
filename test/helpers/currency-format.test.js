const Handlebars = require('handlebars')
const helperFunction = require('../../helpers/currency-format')

test('currencyFormat() properly processes a monetary currency', () => {
  const options = {
    isMoney: true,
    locale: 'de-DE',
    abbreviation: 'EUR'
  }

  const result = helperFunction(25.43, options)

  expect(typeof result).toBe('string')
  expect(result).toBe('€ 25.43')
})

test('currencyFormat() properly processes a non-monetary currency', () => {
  const options = {
    isMoney: false,
    singularName: 'staatslot',
    pluralName: 'staatsloten',
    templateString: '{{amount}} {{currency}}'
  }

  const hbsHelper = Handlebars.registerHelper('currencyFormat', helperFunction)
  const pluralResult = Handlebars.compile('{{currencyFormat 3 options}}')({ options })
  const singleResult = Handlebars.compile('{{currencyFormat 1 options}}')({ options })

  expect(typeof pluralResult).toBe('string')
  expect(pluralResult).toBe('3 staatsloten')
  expect(typeof singleResult).toBe('string')
  expect(singleResult).toBe('1 staatslot')
})