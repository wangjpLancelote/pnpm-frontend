# 5dyl

## 招商系统

```docs
  Vue3 + TypeScript + Pinia + Element-Plus + Vite
  pnpm 包管理器，解决了幽灵依赖问题
  Vueuse hooks提供了组件开发的新思路
  tailwindCSS 原子化的CSS解决方案
  i18n 国际化多语言支持

```

### 运行项目

```bash
# 安装包
pnpm install

# 运行项目
pnpm run dev

```

### tsc校验

```bash
pnpm run lint

```

### lint-staged代码格式校验

```bash
pnpm run pre-commit

```

### 打包项目(打包命令会自动执行tsc)

```bash

# 打包项目 测试环境
pnpm run build_master


# 打包项目 正式环境
pnpm run build_release

```

打包文件目录 `packages/dist`

### 预览项目

```bash
pnpm run preview

```

### 配置运行环境

1. `packages/mode`下创建`.env.xxx`文件件
2. `packages/package.json`里`scripts`下创建运行命令和打包命令
3. `package.json`里`scripts`下创建命令链接到`packages/package.json`

### git commit 提交规范

- commit关键词

  - "feat", // 新功能 feature
  - "fix", // 修复 bug
  - "docs", // 文档注释
  - "style", // 代码格式
  - "refactor", // 重构
  - "perf", // 性能优化
  - "test", // 增加测试
  - "chore", // 构建过程或辅助工具的变动
  - "revert", // 回退
  - "build", // 打包

- 例子
  ```shell
    git add .
    git commit -m "feat: 新增了xxx功能" |
    git commit -m "fix: 修复了xxxbug" |
    git commit -m "chore: 增加了xxxpipeline，改善了xxx流程" |
    git commit -m "build: 打包"
  ```

### 部署

#### 提供两种部署方式

- nginx静态资源部署

```doc
  nginx 部署是将项目build之后将dist的产物放入的nginx对应的目录下，配置nginx.conf的location下的root属性，将root属性指向对应dist文件下的index.html文件，重启nginx则可以完成部署
```

- docker部署
  ```doc
  docker部署是将项目build之后，将产物dist文件放入到Dockerfile所在的目录，此Dockerfile一般是拉取的一个nginx镜像，nginx镜像内的nginx.conf配置对应root指向，随后打包此镜像，启动对应容器，部署完成
  ```
