// jest.config.js
export default {
  transform: {
    "^.+\\.js$": "babel-jest", // Utilise babel-jest pour transpiler le code
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"], // Ajoute les extensions que tu utilises
};
