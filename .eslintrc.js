const path = require('path')

module.exports = {
  extends: [
    'airbnb',
    'plugin:sonarjs/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: [
    'sonarjs',
    'prettier',
  ],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.json']
      },
      webpack: {
        config: path.resolve(__dirname, './config/webpack.config.dev.js')
      }
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
    ],
  },
  rules: {
    'function-paren-newline': 'off',
    'semi': ['error', 'never'],
    'react/jsx-filename-extension': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'jsx-a11y/anchor-is-valid': 'off',
    'prettier/prettier': 'error',
    'sonarjs/cognitive-complexity': 'off', // FIXME: turn it on when refactoring
    'no-console': 'off',
    'react/destructuring-assignment': 'off',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  overrides: [
    {
      files: [
        'config/**/*.js',
        'scripts/**/*.js',
      ],
      rules: {
        'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
        'no-console': 'off',
        'global-require': 'off',
      }
    }
  ],
}
