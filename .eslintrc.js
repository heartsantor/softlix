/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    es2020: true,
    amd: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/no-unescaped-entities': 0,
    'react/prop-types': 'off',
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'only-multiline'],
  },
};
