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
    // 🚫 unused vars
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',

    // 🚫 inline styles
    'react-native/no-inline-styles': 'warn',

    // 🚫 console logs (optional)
    'no-console': 'warn',

    // cleaner code
    'react/react-in-jsx-scope': 'off', // not needed in RN
  },
};
