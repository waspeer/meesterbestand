module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.tsx', 'test/**/*'] },
    ],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
  },
};
