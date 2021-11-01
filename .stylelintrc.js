module.exports = {
  extends: [
    'stylelint-config-standard',
    './node_modules/prettier-stylelint/config.js',
    // https://www.npmjs.com/package/postcss-html
    'stylelint-config-html',
    'stylelint-config-recommended-vue',
    'stylelint-config-recommended-less'
  ],
  customSyntax: 'postcss-less',
  rules: {
    'less/no-duplicate-variables': null
  }
}
