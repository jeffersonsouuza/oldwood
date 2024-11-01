import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      eqeqeq: ['error', 'always'],
    },
  },
];
