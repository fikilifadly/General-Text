import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    plugins: {
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
    },

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    settings: {
      'import/resolver': {
        typescript: true,
      },
    },

    rules: {
      // 🔥 Sort imports automatically
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // 🔥 Prevent circular dependencies
      'import/no-cycle': 'error',

      // 🔥 Prevent unresolved paths
      'import/no-unresolved': 'error',

      // 🔥 Avoid deep relative imports (clean architecture)
      'no-restricted-imports': [
        'error',
        {
          patterns: ['../../*'],
        },
      ],

      // Not needed in React 17+
      'react/react-in-jsx-scope': 'off',
    },
  },
])