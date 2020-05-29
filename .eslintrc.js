const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['prettier', 'react', 'react-hooks', 'react-redux', 'jsx-a11y'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-body-style': [2, 'as-needed'],
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'consistent-return': 0,
    'no-console': 1,
    'no-case-declarations': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'no-unused-vars': 2,
    'react-hooks/rules-of-hooks': 'error',
    'import/no-named-as-default': 0,
    'class-methods-use-this': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-webpack-loader-syntax': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
