// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", 
    "plugin:import/recommended", 
    "plugin:jsx-a11y/recommended", 
    "plugin:@typescript-eslint/recommended", 
    "eslint-config-prettier"
  ],
  settings: {
    react: {
      version: "detect",
    },

    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "prettier/prettier": [0],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    quotes: ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
  },
}
