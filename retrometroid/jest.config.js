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
  testEnvironment: "jsdom", // Environnement de test
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"], // Ajoute les extensions que tu utilises
  collectCoverage: true, // Active la génération de la couverture
  coverageDirectory: "coverage", // Répertoire pour les rapports de couverture
  coverageReporters: ["json", "text", "lcov"], // Formats de sortie (lcov est nécessaire pour SonarCloud)

};
