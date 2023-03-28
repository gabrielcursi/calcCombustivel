module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    '@react-native-community',
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars-experimental": "error",
    "no-unused-vars": "off"
  }
  
};
