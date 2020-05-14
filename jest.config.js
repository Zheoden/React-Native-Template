module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@?react-navigation|@react-native|native-base)',
  ],
  testMatch: [
    '**/__tests__/unit/**/*.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  setupFilesAfterEnv: [
    '<rootDir>setup-tests.js'
  ],
};
