# MGMCo Handlebars helpers [![Build Status](https://travis-ci.org/mgmco/handlebar-helpers.svg?branch=master)](https://travis-ci.org/mgmco/handlebar-helpers)

Some useful helpers to be used with any Handlebars environment.

## What's actually here

This repo contains a few helper functions intended to be initialised as Handlebar helpers. This should be done inside your own HBS instance, and is out of scope for this library. You can do this like so:

```js
// Assumes you have an instance of Handlebars
Handlebars.registerHelper('helperName', helperFunction)
```

More detailed usage docs are in each of the helper's files in the `helpers` folder.

 * `formatCurrency(amount, options)`
 * `math(operand1, operator, operand2)`
 * `concat(fragment1, [fragment2, fragment3 ...])`
 * `isEqual(value1, value2)`
 * `or(value1, [value2 ...])`
 * `not(value)`
 * `and(value1, value2)`

## ES6+

These are written in ES6+ Javascript. You should really transpile these, but again, you should be doing this in your own build pipeline.