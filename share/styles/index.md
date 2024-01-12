## 基础样式

> 1. 统一 css 基础样式
> 2. 设置 px 转 rem

### 统一 css 基础样式

```js
// 公用部分
import "@lib/share/styles/main.js";

// pc端样式
import "@lib/share/styles/pc.js";

// 移动端样式
import "@lib/share/styles/mobile.js";
```

### 设置 px 转 rem

```js
// PC端 设计稿 1920
const postcssPxToRem = require('@lib/share/styles/postcssPxToRem.cjs')

export default defineConfig({
  css: { postcss: postcssPxToRem },
})

// 移动端 设计稿 375
const postcssPxToRemMobile = require('@lib/share/styles/postcssPxToRemMobile.cjs')

export default defineConfig({
  css: { postcss: postcssPxToRemMobile },
})
```
