module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  errorOnDeprecated: true,
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["/node_modules/, dist/"],
  testRegex: "test.*\\.tsx?$",
  testTimeout: 10000,
  verbose: true
};
