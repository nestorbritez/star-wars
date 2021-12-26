module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['/dist', '/coverage'],
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: { version: 'detect' },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  rules: {
    'func-names': ['error', 'always'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
}
