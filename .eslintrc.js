module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 0,
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    //   {
    //     singleQuote: true,
    //     semi: true,
    //     useTabs: false,
    //     tabWidth: 2,
    //     printWidth: 80,
    //     bracketSpacing: true,
    //     arrowParens: 'avoid',
    //   },
    // ],
    // 진입장벽 낮게 (타입 안정성: 주석 지우기)
    // '@typescript-eslint/no-explicit-any': 'off',
    // "@typescript-eslint/explicit-function-return-type": 'off',
    'prefer-const': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['plugin:prettier/recommended'],
};
