# 5dyl

## @5dyl/template-cloud

### 运行项目

```bash
# 安装包
pnpm install

# 运行项目
pnpm run dev

```

### 打包项目

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

1. `packages/mode`下创建`.emv.xxx`文件件
2. `packages/package.json`里`scripts`下创建运行命令和打包命令
3. `package.json`里`scripts`下创建命令链接到`packages/package.json`
