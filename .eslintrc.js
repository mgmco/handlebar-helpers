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
    "arrow-parens": ["error", "as-needed"],
    "no-restricted-syntax": ["off"],
    "no-console": ["warn", { allow: ["error"] }],
    "no-continue": ["off"],
    "import/no-unresolved": [2, {}],
    "import/prefer-default-export": ["off"],
    "class-methods-use-this": ["off"],
    "eol-last": ["error", "always"]
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
}