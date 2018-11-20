module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
  ],
  plugins: [
    'stylelint-no-unsupported-browser-features'
  ],
  rules: {
    'declaration-colon-space-after': 'always',
    'declaration-colon-newline-after': null,
    'plugin/no-unsupported-browser-features': [true, {
      severity: 'warning',
    }],
    'value-list-max-empty-lines': null,
  },
}
