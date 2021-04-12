module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  rules: {
    // we don't need this anymore since we are going full on ts
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-in-jsx-scope': 'off',
    camelcase: 'off',
    quotes: 'off',
    '@typescript-eslint/quotes': [
      'off',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: 'off',
    '@typescript-eslint/semi': 'error',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        asyncArrow: 'always',
        anonymous: 'always',
        named: 'never',
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    'no-empty-function': 'off',
    'no-console': [
      'error',
      {
        allow: ['warn'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['.(scss|css|png|jpg|svg|woff|woff2|ttf|eot|otf)$'],
      },
    ],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'function-paren-newline': 'off',
    'consistent-return': 'error',
    'no-param-reassign': 'off',
    'no-void': 'error',
    'no-underscore-dangle': 'off',
    'global-require': 'off',
  },
  overrides: [
    {
      files: ['*.spec.js', '*.spec.tsx', '*.spec.ts', 'tests/**/*.js'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'react/jsx-no-bind': ['off'],
      },
    },
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    react: {
      version: '17.0.0',
    },
  },
};
