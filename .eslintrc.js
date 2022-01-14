module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb", "airbnb/hooks",
    "eslint:recommended",
    "prettier"
  ],
  "plugins": [
    "react"
  ],
  "rules": {
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": "off",
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off",
    "no-plusplus": "off",
    "max-len": ["error", { "code": 80 }]
  },
  "env": {
    "browser": true,
    "node": true
  }
};
