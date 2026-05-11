module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', 'unused-imports', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'react-native/no-inline-styles': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'off',
    'import/order': 'off',
    'tailwindcss/classnames-order': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'react-native/sort-styles': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
  },
};
