/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    // 'plugin:vue/recommended',
    'plugin:vuetify/base',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/v-bind-style': 'warn',
    'vue/v-on-style': 'warn',
    'vue/v-slot-style': 'warn',
    'vue/first-attribute-linebreak': 'off',
    'vue/html-indent': 'off', // TODO
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/mustache-interpolation-spacing': ['warn', 'always'],
    'vue/no-lone-template': 'warn',
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': ['warn', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'never',
    }],
    'vue/html-self-closing': ['warn', {
      'html': {
        'void': 'never',
        'normal': 'any',
        'component': 'any',
      },
    }],
    'vue/require-default-prop': 'off', // TODO
    'vue/this-in-template': ['warn', 'never'],
    // "vue/component-tags-order":"warn",
    // "vue/component-tags-order": ["warn", {
    //   "order": [
    //     "template",
    //     "style",
    //     "script",
    //   ]
    // }],
    // "vue/order-in-components": "off"
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
