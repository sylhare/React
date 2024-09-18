module.exports = {
  rootDir: ".",
  collectCoverage: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests/setup/setupTests.ts"],
  testMatch: ["<rootDir>/tests/**/*.{test,spec}.{ts,tsx}"],
  testPathIgnorePatterns: ["<rootDir>/tests/setup"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(svg|css)$": "<rootDir>/tests/setup/stubTransform.js"
  },
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
};
