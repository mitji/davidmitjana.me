module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'import/prefer-default-export': 'off',
    quotes: 'off',
    'eol-last': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.tsx'] }],
    'react/require-default-props': 0,
    'react/no-unescaped-entities': 0
  },
}
