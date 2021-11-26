module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'off',
      { extensions: ['.js', '.ts', '.tsx', '.jsx'] },
    ],
    'react/prop-types': 'off',
  },
  globals: {
    React: true,
    JSX: true,
  },
};
