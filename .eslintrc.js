const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier',
    'react-app'
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'react-hooks'],
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/comma-dangle': ['off'],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    '@typescript-eslint/no-explicit-any': 0,
    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 2,
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'warn',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'no-unused-vars': 'warn',
    'prettier/prettier': ['error', prettierOptions],
    'react/jsx-props-no-spreading': [
      'warn',
      {
        html: 'ignore',
        exceptions: ['**/*.stories.tsx']
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.tsx',
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.tsx',
          '**/*.ts'
        ]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "max-len": ["warn", { "code": 80 }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off"
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] }
    }
  ],
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
};