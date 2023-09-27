/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    // 'plugin:vue/strongly-recommended',
    // 'plugin:vue/recommended',
    // 'plugin:vuetify/base',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/v-bind-style': 'warn',
    'vue/v-on-style': 'warn',
    'vue/v-slot-style': 'warn',
    'vue/mustache-interpolation-spacing': ['warn', 'always'],
    'vue/no-multi-spaces': 'warn',
    'vue/no-deprecated-filter': 'warn', // Preparation for vue3
    'vue/no-deprecated-v-on-number-modifiers': 'warn', // Preparation for vue3
    'vue/no-deprecated-html-element-is': 'warn', // Preparation for vue3
    'vue/no-deprecated-v-on-native-modifier': "off",
    'vue/no-v-for-template-key-on-child ': "off",
  },
  ignorePatterns: ['**/src/modules/**/*'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
