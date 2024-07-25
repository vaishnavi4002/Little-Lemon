module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).js?(x)'
  ]
};
