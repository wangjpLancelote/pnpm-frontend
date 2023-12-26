module.exports = {
  '*.{js,jsx,vue,ts,tsx}': ['eslint --config .eslintrc.js --fix', 'prettier --config .prettierrc.js --write'],
  '*.{scss,less,css,html,md}': ['prettier --config .prettierrc.js --write'],
  '!(package)*.json': ['prettier --config .prettierrc.js --write--parser json'],
}
