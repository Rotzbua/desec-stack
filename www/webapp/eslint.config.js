/* eslint-env node */
import {defineConfig} from 'eslint/config'
import globals from 'globals'
import {FlatCompat} from '@eslint/eslintrc'
import js from '@eslint/js';

import path from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

export default defineConfig([
  {
    ignores: ['**/src/modules/**/*'],
  },
  ...compat.extends(
      'plugin:vue/vue2-essential',
      // 'plugin:vue/vue2-strongly-recommended',
      // 'plugin:vue/vue2-recommended',
      // 'plugin:vuetify/base',
      // 'plugin:vuetify/recommended',
      'plugin:import/recommended',
      'plugin:vue-scoped-css/recommended', // vue2
      'eslint:recommended',
  ),
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.builtin,
      },
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
        },
      },
    },
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
      'vue-scoped-css/enforce-style-type': 'off',
      'vue-scoped-css/no-deprecated-deep-combinator': 'warn', // Preparation for vue3
      'vue/match-component-file-name': ['error', {'extensions': ['vue'], 'shouldMatchCase': true}],
    },
  },
])
