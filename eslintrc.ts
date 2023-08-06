module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        tsx: true,
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended', 
    ],
    plugins: ['react', 'jsx-a11y', 'prettier'],
    rules: {
      'prettier/prettier': 'error', 
      'react/react-in-jsx-scope': 'off', 
      'react/prop-types': 'off', 
      'jsx-a11y/anchor-is-valid': 'off',
      camelcase: ['error', { properties: 'always' }]
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  