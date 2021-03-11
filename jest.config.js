/* eslint-disable max-len */
// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['Scripts'],
  coverageDirectory: 'reports',
  setupFilesAfterEnv: ['<rootDir>/Scripts/setup-jest.ts'],
  moduleNameMapper: {
    // '@app/(.*)': '<rootDir>/Scripts/app/$1',
    // '@core': ['<rootDir>/Scripts/app/@core'],
    // '@core/(.*)': ['<rootDir>/Scripts/app/@core/$1'],
    // '@shared': ['<rootDir>/Scripts/app/@shared'],
    // '@shared/(.*)': ['<rootDir>/Scripts/app/@shared/$1'],
  },
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  // Do not ignore librairies such as ionic, ionic-native or bootstrap to transform them during unit testing.
  transformIgnorePatterns: ['node_modules/(?!(jest-test))'],
};
