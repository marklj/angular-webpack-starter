// https://eslint.org/docs/user-guide/configuring
const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'html',
  ],
  extends: "airbnb-typescript/base",
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module'

  },
  env: {
    browser: true,
  },
  // check if imports actually resolve
  settings: {
    // 'import/resolver': {
    //   config: "webpack.config.ts",
    // },
    'html/report-bad-indent': 'warn',
  },

  // add your custom rules here
  'rules': {
    // {{#if_eq lintConfig "standard"}}
    // // allow paren-less arrow functions
    // 'arrow-parens': 0,
    // // allow async-await
    // 'generator-star-spacing': 0,
    // {{/if_eq}}
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'ts': 'never',
      // 'vue': 'never'
    }],
    'import/prefer-default-export': 0,
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'linebreak-style': ["error", "windows"],
    // dont enforce class methods `this` error
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'unicode-bom': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'class',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ]
  }
}