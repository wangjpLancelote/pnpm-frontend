## Foundamental Frontend前端项目搭建指引

### 目录

- [搭建项目目录结构](#搭建项目目录结构)
- [初始化前端应用内容-packages](#初始化前端项目-packages)
- [初始化通用组件及函数目录-share](#初始化通用组件及函数目录-share)
- [代码格式检验及美化插件(可选)](#代码格式检验及美化可选)
- [git-代码提交规范与格式校验插件(可选)](#git-代码提交规范与格式校验可选)
- [使用第三方UI框架(可选)](#项目ui框架)
- [项目目录结构图示](#最终的项目目录图)

#### 搭建项目目录结构

monoRepo机制， 巨石应用的目前最优解决方案，最早源自Google的内部工程文化，这里方案使用<b>pnpm</b>包管理器，和npm同源，学习成本低，易于上手

- 安装Node.js和Npm(NodeJS的安装包会自动安装npm)

```shell
Linux安装
sudo apt-get install nodejs

Mac环境
brew install nodejs

windows环境(官网下载安装包)
https://nodejs.org/en
```

- 安装<b>pnpm</b>

```shell
npm install pnpm -g
```

- 使用<b>pnpm</b>初始化项目

```bash
mkdir project && cd project
pnpm init
pnpm install
```

此时project目录下会存在<i><b>package.json</b></i>文件、<i><b>pnpm-lock.yaml</b></i>文件

- 在当前目录下新建两个目录：packages、share
  - packages：前端项目
  - share：通用的组件以及函数
  - (xxxModule：可按需增加新的模块)

```shell
|- /project

mkdir packages
mkdir share
```

- 分别将两个目录进行pnpm初始化：

```shell
cd packages && pnpm init
cd share && pnpm init
```

- 这时候两个目录下会有一个文件：
  - /packages/package.json
  - /share/package.json
- 分别在两个package.json下的dependencies中添加对方模块在各自的package.json中注册的的name：

```json
在packages/package.json中添加
"dependencies": {
  "@lib/share": "workspace:*",
}
在share/package.json中添加
"dependencies": {
  "@lib/packages": "workspace:*",
}
```

<i><b>这里的@lib/share是用于各自互相调用对方模块时候的包名</b></i>

- 例如使用方法：

```js
import * as share from "@lib/share";
```

- 新建一个pnpm-workspace.yaml

```shell
touch pnpm-workspace.yaml
内容如下：
这里填写的目录名称，**表示文件全匹配
packages:
  - 'packages/**'
  - "share/**"
```

#### 初始化前端项目 packages

为了与外层的pnpm-workspace起到依赖管理的效果，package内部的所有依赖安装建议使用pnpm install xxx的方式

- 使用vite脚手架初始化前端项目

```shell
pnpm create vite
或者直接选择vue模版
pnpm create vite my-vue-app -- --template vue
或者使用
npm init vite@latest
```

使用上面这种方式会比较快捷的生成模版、成型的目录结构
<b><i>**下面介绍一下如何手动初始化前端项目**</i></b>

- 手动初始化前端项目（以Vue应用为例子）

```shell
cd packages

pnpm install vite@latest
pnpm install vue@latest
pnpm install vue-router
pnpm install sass
```

- 使用typescript进行开发(可选)
- 如果引入了typescript，则将文件的.js后缀改成.ts后缀，下面介绍的内容默认已经引入typescript开发，因此均使用.ts后缀名

```shell
pnpm install typescript
pnpm install vue-tsc
```

- 引入typescript开发需要添加/packages/tsconfig.json

```shell
touch tsconfig.json
```

<i>tsconfig常用配置如下</i>

```json
{
  "compilerOptions": {
    // 指定编译版本 esnext为最新的ECMAScript版本
    "target": "esnext",
    // 使用ECMAScript中的定义初始化语法来处理类字段
    "useDefineForClassFields": true,
    // 生成的模块规范 esnext为最新的模块规范和使用特性
    "module": "esnext",
    // 模块解析策略，node为node.js解析策略,相对路径导入将基于导入文件的位置进行相对路径解析，非相对路径导入将从导入文件的目录开始向上查找node_modules目录，这是为了模拟node 运行时的导入行为
    "moduleResolution": "node",
    // 严格类型检查
    "strict": true,
    // 指定JSX代码的处理方式 preserve为保留JSX代码不进行转换，因为通常jsx文件会有其他工具进行转化
    "jsx": "preserve",
    // 允许导入.ts文件作为模块,确保编译的一致性和确定性
    "allowImportingTsExtensions": true,

    // 仅生成类型声明文件.d.ts
    // "emitDeclarationOnly": true,

    // 是否生成类型声明文件，允许其他ts或者js项目在使用时正确获得类型提示
    // "declaration": true,

    // 仅进行类型检查
    "noEmit": true,
    // 是否生成源映射文件, 源映射文件可以让代码在浏览器中使用ts代码进行调试
    "sourceMap": true,
    // 是否允许导入JSON文件
    "resolveJsonModule": true,
    // 支持默认导入 支持 import x from xxx 这种写法
    "esModuleInterop": true,
    // 指定编译时需要包含的库文件 esnext指的是最新的ECMAScript，dom指的是document对象
    "lib": ["esnext", "dom"],
    // 用于解析非相对模块名的基本目录
    "baseUrl": ".",
    // 允许编译.js文件
    "allowJs": true,
    // 跳过对默认库文件(如第三方库)的检查
    "skipDefaultLibCheck": true,
    // 指定模块名到对应文件或目录的映射，主要是使用@别名
    "paths": {
      "@/*": ["src/*"]
    },
    // 编译后输出的目录
    "outDir": "./dist",
    // 指定要包含的类型声明文件
    "types": ["vite/client"],
    // 跳过的引入的声明文件的类型检查
    "skipLibCheck": true,
    // 允许默认导入, 指的是不需要导入具体的模块即可，允许非具名导出
    "allowSyntheticDefaultImports": true,
    // 强制文件名的一致性 真实文件名大小写与导入的文件名大小写要一致
    "forceConsistentCasingInFileNames": true,
    // 启用对类属性的严格初始化检查，类属性是否需要初始化数据
    "strictPropertyInitialization": false
  },
  // 指定应该包含在编译中的文件或目录的列表
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "src/types/**/*.d.ts",
    "src/components/FormComp/src/form-render.tsx",
    "src/utils/jsencrypt.js"
  ],
  // 指定应该排除在编译之外的文件或目录的列表
  "exclude": ["node_modules", "dist", "**/*.js"]
}
```

- <i>使用vite构建项目</i>
- 创建/packages/vite.config.ts

```shell
touch vite.config.ts
```

一个简单项目的vite.config配置如下

```ts
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import { resolve } from "path";
import vuePlugin from "@vitejs/plugin-vue";
export default defineConfig(({ mode, command }: ConfigEnv): any => {
  return {
    base: "./",
    plugins: [
      vuePlugin({
        include: [/\.vue$/, /\.md$/],
      }),
    ],
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
    server: {
      port: 3000,
      host: true,
      open: true,
    },
  };
});
```

- 在当前目录下新建一个目录/packages/src/

```shell
mkdir src
```

- 添加两个文件：项目入口文件/src/main.ts、Vue的模版文件入口：App.vue

```shell
cd src
touch main.ts
touch App.vue
```

<i>App.vue</i>

```vue
<template>
  <el-config-provider :locale="appStore.locale" :size="size">
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts"></script>
<style></style>
```

需要在main.ts初始化整个Vue实例并挂载App.vue
<i>main.ts</i>

```ts
import App from "./App.vue";
import { createApp } from "vue";
const app = createApp(App);

app.mount("#app");
```

- 在当前目录下新建一个/packages/index.html文件

```shell
touch index.html
```

- 添加页面路由，新建/pacakges/router并新建一个index.ts文件

```shell
mkdir router && cd router
touch index.ts
```

<i>router/index.ts</i>

```ts
import { createWebHistory, createRouter, RouteOption } from "vue-router";
/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_CONTEXT_PATH),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
```

- main.ts中注册路由实例

```ts
import router from "./router/index";
app.use(router);
```

- 前端项目一定要有一个html文件，用来承载渲染的dom节点，vite项目的index.html文件需要放在根目录下
  <i>index.html</i>

```html
<html>
  <body>
    <div id="app">
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
        <div class="load_title">正在加载系统资源，请耐心等待</div>
      </div>
    </div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

- 最后，启动整个项目需要配置对应npm命令

```shell
vim package.json
```

进入package.json，添加scripts属性命令

```json
  "scripts": {
    "dev": "vite --mode development",
    "build": "vite build && vue-tsc --noEmit",
    "lint-ts": "vue-tsc --noEmit",
    "preview": "vite preview"
  },
```

启动项目

```shell
npm run dev
```

打包项目

```shell
npm run build
```

#### 初始化通用组件及函数目录 share

和packages目录做法基本一样，可根据需要添加对应的依赖

#### 代码格式检验及美化插件(可选)

为了保证提交的代码风格不会有太大的差异，通常会在项目中设置一些代码格式校验

- eslint
  进入根目录/

```shell
cd /
pnpm install eslint -D
touch .eslintrc.js
pnpm eslint --init
```

<i>.eslintrc.js常见配置项</i>

```ts
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "2020",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/no-v-model-argument": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        // 关闭空类型检查 {}
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
  },
  globals: {
    DialogOption: "readonly",
    OptionType: "readonly",
  },
};
```

- 新建eslint规则需要忽略文件：.eslintignore

```shell
touch .eslintignore
```

- prettier代码格式美化，调整代码排版格式

```shell
pnpm install eslint-plugin-prettier prettier eslint-config-prettier或者指定目录安装：pnpm install --prefix packages eslint-plugin-prettier prettier eslint-config-prettier
```

- 新建.prettierrc.js

```
touch .prettierrc.js
```

<i>.prettierrc.js常见配置项</i>

```ts
/**
 * 代码格式化配置
 */
module.exports = {
  // 一行最多多少个字符
  printWidth: 150,
  // 指定每个缩进级别的空格数
  tabWidth: 2,
  // 使用制表符而不是空格缩进行
  useTabs: false,
  // 在语句末尾是否需要分号
  semi: true,
  // 是否使用单引号
  singleQuote: false,
};
```

- 新建.prettierignore忽略文件

```shell
touch .prettierignore
```

#### git 代码提交规范与格式校验插件(可选)

- lint-staged，对git暂存区的内容进行检查，检查的规则由config配置

```shell
cd /
pnpm install lint-staged
touch lint-staged.config.js
```

<i>添加package.json的scripts脚本</i>

```json
"scripts": {
  "pre-commit": "lint-staged"
}
```

<i>lint-staged.config.js常见配置项</i>

```ts
module.exports = {
  "*.{js,jsx,vue,ts,tsx}": [
    "eslint --config ./packages/.eslintrc.js --fix",
    "prettier --config ./packages/.prettierrc.js --write",
  ],
  "*.{scss,less,css,html,md}": [
    "prettier --config ./packages/.prettierrc.js --write",
  ],
  "!(package)*.json": [
    "prettier --config ./packages/.prettierrc.js --write--parser json",
  ],
};
```

- husky/commitlint 针对git commit内容进行规范

```shell
pnpm install husky -D
npx husky --init (根目录下会生成.shuky目录，并自动生成pre-commit文件)
cd .husky && touch commit-msg
```

<i>pre-commit</i>

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm run pre-commit
# 这个pre-commit命令就是上面在scripts中添加的命令

```

<i>commit-msg</i>

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# npx --no-install commitlint --edit "$1"

```

对/.husky/目录下的两个文件进行修改权限为可执行文件

```shell
chmod +x 777
```

- 安装commitlint，对于git commit不规范的地方作出合理提示

```shell
pnpm install @commitlint/config-conventional @commitlint-cli -D
```

添加commitlint规则，新建commitlint.config.js

```shell
touch commitlint.config.js
```

<i>commitlint.config.js</i>

```js
const checkType = (header) => {
  header = `${header}`;
  const enumType = [
    "feat",
    "fix",
    "style",
    "chore",
    "test",
    "ci",
    "refactor",
    "revert",
    "reformat",
    "docs",
  ];
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
    "subject-empty": [0, "always"],
  },
  plugins: [
    {
      rules: {
        "type-enum-rule": ({ header }) => {
          return [
            checkType(header),
            '需要包含提交类型，格式如: "【feat: 开发新功能】" 中的feat, ' +
              "可选值有: feat/fix/style/test/chore/ci/..., 类型后面紧跟【英文冒号】和【空格号】分隔主题信息",
          ];
        },
        "subject-enum-rule": ({ header }) => {
          return [
            checkSubject(header),
            '需要包含提交主题, 格式如: "【feat: 开发新功能】" 中的 【开发新功能】',
          ];
        },
      },
    },
  ],
};
```

#### 使用第三方UI框架(可选)

为了更方便快捷的开发web页面，通常会使用一些业界常用的第三方UI库，这些UI库可以适用大部分的场景，可以更加快捷的开发对应的页面功能

- Element-plus

```shell
cd packages
pnpm install element-plus @element-plus/icons-vue -S
```

<i>在项目中注册element-plus</i>

```shell
cd src
touch main.ts

** 在main.ts中添加一下内容
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import locale from "element-plus/es/locale/lang/zh-cn";

app.use(ElementPlus as any, {
  locale: locale,
  // 支持 large、default、small
  size: Cookies.get("size") || "default"
});
**

```

<i>在项目中使用</i>

```ts
<el-form :model="form" label-width="120px"></el-form>
import { ElForm } from 'element-plus'
```

- tailwindCSS
  tailwindCSS是一个原子化的CSS框架，适用于快速开发UI界面，可以无侵入的在项目中使用

<i>在项目中注册tailwindCSS</i>

```shell
cd packages
pnpm install tailwindcss postcss autoprefixer --save-dev

touch tailwind.config.js
touch postcss.config.js
```

<i>tailwind.config.js</i>

```ts
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // purge: ['./index.html', './src/**/*.{vue,js,ts, jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

<i>postcss.config.js</i>

```ts
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

<i>在项目中使用</i>

```html
<html>
  <body>
    <div class="space-y-6 py-8 text-base leading-7 text-gray-600"></div>
  </body>
</html>
```

#### 最终的项目目录图

```text
├── .husky
|  ├── \_
|  ├── pre-commit
|  └── commit-msg
├── \packages
|  ├── \src
|  |  ├── \router
|  |  |  ├── modules
|  |  |  └── index.ts
|  |  ├── App.vue
|  |  ├── main.ts
|  ├── package.json
|  ├── package-lock.json
|  ├── tsconfig.json
|  ├── tailwindcss.config.js
|  ├── postcss.config.js
|  ├── vite.config.ts
|  └── index.html
├── \share
| ├── \components
| |   ├── \folders
| |   └── index.ts
| ├── \utils
| |   ├── \folders
| |   └── index.ts
| ├── \styles
| |   ├── \folders
| |   └── index.css
| ├── \node_modules
| ├── index.ts
| ├── tsconfig.json
| ├── vite.cofnig.ts
| ├── package.json
| ├── package-lock.json
| └── index.html
├── .eslintrc.js
├── .eslintignore
├── .prettier.js
├── .prettierignore
├── commitlint.config.js
├── lint-staged.config.js
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml

```
