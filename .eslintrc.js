module.exports = {
  "extends": ["airbnb-base"],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "rules": {
    "global-require": ["off"],
    "comma-dangle": ["error", "never"],
    "no-plusplus": ["off"],
    "arrow-parens": ["off"],
    "no-restricted-syntax": ["off"],
    "no-console": ["off"],
    "no-continue": ["off"],
    "import/no-unresolved": [2, {}],
    "import/prefer-default-export": ["off"],
    "class-methods-use-this": ["off"],
    "eol-last": ["error", "always"]
  }
}