module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    '@react-native-community',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'warn',
    'no-underscore-dangle': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'react-native/no-color-literals': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'warn',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-async-promise-executor': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    radix: 'off',
    'react/display-name': 'off',
    'react/no-array-index-key': 'warn',
    'react/destructuring-assignment': 'off',
    'react/no-unused-state': 'warn',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'react/jsx-fragments': [1, 'syntax'],
    'object-shorthand': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    '@typescript-eslint/explicit-function-return-type': [
      2,
      {
        allowExpressions: true,
      },
    ],
    'no-underscore-dangle': [
      2,
      {
        allowAfterThis: true,
      },
    ],
    'array-bracket-spacing': [2, 'never'],
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
    'prettier/prettier': [
      2,
      {
        tabWidth: 2,
        bracketSpacing: true,
      },
    ],
  },
  env: {
    'react-native/react-native': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
