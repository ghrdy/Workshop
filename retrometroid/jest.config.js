// jest.config.js
export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    //"\\.[jt]sx?$": "babel-jest",
    //"^.+\\.js$": "babel-jest", // Utilise babel-jest pour transpiler le code
  },
  transformIgnorePatterns: ["/node_modules/(?!(foo|bar)/)", "/bar/"],
  /*transformIgnorePatterns: [
    '/node_modules/(?!your-module-to-transform)/',
  ],*/
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"], // Ajoute les extensions que tu utilises
};
