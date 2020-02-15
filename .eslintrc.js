module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.tsx', 'test/**/*'] },
    ],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-useless-constructor': 'off',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
