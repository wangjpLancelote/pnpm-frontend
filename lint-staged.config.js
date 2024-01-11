module.exports = {
  "*.{js,jsx,vue,ts,tsx}": ["eslint --config ./packages/.eslintrc.js --fix", "prettier --config ./packages/.prettierrc.js --write"],
  "*.{scss,less,css,html,md}": ["prettier --config ./packages/.prettierrc.js --write"],
  "!(package)*.json": ["prettier --config ./packages/.prettierrc.js --write--parser json"]
};
