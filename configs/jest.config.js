module.exports = {
  rootDir: '../',
  roots: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/src/**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>/configs/tests/jest.setup.js'],
};
