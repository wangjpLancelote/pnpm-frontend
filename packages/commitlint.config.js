const checkType = (header) => {
  header = `${header}`;
  const enumType = ["feat", "fix", "style", "chore", "test", "ci", "refactor", "revert", "reformat", "docs"];
  const realType = header.split(":")[0];
  return enumType.includes(realType);
};

const checkSubject = (header) => {
  header = `${header}`;
  const realSubject = header.split(":")[1];
  if (!realSubject) {
    return false;
  }
  return realSubject.length > 0;
};

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum-rule": [2, "never"],
    "subject-enum-rule": [2, "never"],
    "type-enum": [0, "never"],
    "type-empty": [0, "always"],
    "subject-empty": [0, "always"]
  },
  plugins: [
    {
      rules: {
        "type-enum-rule": ({ header }) => {
          return [
            checkType(header),
            '需要包含提交类型，格式如: "【feat: 开发新功能】" 中的feat, ' +
              "可选值有: feat/fix/style/test/chore/ci/..., 类型后面紧跟【英文冒号】和【空格号】分隔主题信息"
          ];
        },
        "subject-enum-rule": ({ header }) => {
          return [checkSubject(header), '需要包含提交主题, 格式如: "【feat: 开发新功能】" 中的 【开发新功能】'];
        }
      }
    }
  ]
};
