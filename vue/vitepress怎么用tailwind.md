# VitePress + Tailwind CSS v4 

## 前置说明
本教程适用于 **VitePress 1.x + Tailwind CSS v4**，配置后可在 Markdown/Vue 组件中直接使用所有 Tailwind 类。

---

### 1. 安装依赖
```bash
pnpm add -D tailwindcss @tailwindcss/vite
# 或 npm
npm install -D tailwindcss @tailwindcss/vite
```

### 2. 配置 VitePress 启用 Tailwind 插件
修改文件：`.vitepress/config.js`
```js
import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // 其他配置（title、themeConfig 等）...
  
  // 核心：注入 Tailwind Vite 插件
  vite: {
    plugins: [tailwindcss()]
  }
})
```

### 3. 创建 Tailwind 样式文件
新建文件：`.vitepress/theme/tailwind.css`
```css
@import 'tailwindcss';

/* 扫描所有页面文件，让 Tailwind 生效 */
@source '../../**/*.md';
@source '../../.vitepress/**/*.vue';

/* 可选：适配 VitePress 主题色 */
.prose {
  --tw-prose-headings: var(--vp-c-text-1);
  --tw-prose-body: var(--vp-c-text-2);
}
```

### 4. 在主题入口引入样式
修改文件：`.vitepress/theme/index.js`
```js
// 引入 Tailwind
import './tailwind.css'
import DefaultTheme from 'vitepress/theme'

export default DefaultTheme
```

### 5. 在 Markdown 中使用
直接在页面中写 HTML + Tailwind 类：
```md
### Tailwind 测试
<div class="aspect-video w-full bg-black rounded"></div>

<div class="aspect-square w-40 bg-blue-500 rounded-xl mt-4"></div>
```

使用 Vue 组件时，用 `:::raw` 包裹：
```md
:::raw
<div class="flex gap-2">
  <button class="px-4 py-2 bg-green-500 text-white rounded">按钮</button>
</div>
:::
```