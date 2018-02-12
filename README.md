# MGMCo Handlebars helpers

Some useful helpers to be used with any Handlebars environment.

## What's actually here

This repo contains a few helper functions intended to be initialised as Handlebar helpers. This should be done inside your own HBS instance, and is out of scope for this library. You can do this like so:

```js
// Assumes you have an instance of Handlebars
Handlebars.registerHelper('helperName', helperFunction)
```

More detailed usage docs are in each of the helper's files in the `helpers` folder.

 * `formatCurrency(amount, options)`