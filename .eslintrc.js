/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:vue/vue3-recommended'
  ],
  // We have to explicit set the parser: https://stackoverflow.com/a/66525357
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  // https://eslint.vuejs.org/user-guide/#compiler-macros-such-as-defineprops-and-defineemits-generate-no-undef-warnings
  env: {
    'vue/setup-compiler-macros': true
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json']
      },
      rules: {
        // The core 'no-undef' rules does not work with type definitions
        'no-undef': 'off'
      }
    },
    // storybook specific rules
    {
      files: ['**/**.stories.ts', '**/**.stories.tsx'],
      rules: {
        'import/no-anonymous-default-export': 0,
        'no-console': 0,
        '@typescript-eslint/consistent-type-assertions': 0

      }
    }
  ]
}
