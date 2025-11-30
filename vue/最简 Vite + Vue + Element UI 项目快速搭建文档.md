# 最简 Vite + Vue + Element UI 项目快速搭建文档
## 文档说明
本文档提供唯一、极简的 Vite + Vue + Element UI 项目搭建方案，仅保留核心依赖和必要操作，无多余配置，适合快速启动简单项目或验证功能。

## 一、环境要求
- Node.js 版本 ≥ 14.18.0 或 ≥ 16.0.0（需提前安装，可通过 `node -v` 命令检查版本）

## 二、搭建步骤（全程3步，1分钟完成）
### 1. 创建基础项目
打开终端，执行以下命令一键生成 Vite + Vue 基础模板：
```bash
npm create vite@latest my-vue-element -- --template vue
```
- 说明：`my-vue-element` 为项目名称，可自定义（如 `simple-project`）
- 执行后无需额外交互，直接生成最简项目结构

### 2. 安装核心依赖
进入项目目录并安装唯一额外依赖 `element-plus`（Element UI 的 Vue 3 适配版）：
```bash
# 进入项目目录（替换为你的项目名称）
cd my-vue-element

# 安装核心依赖（仅 vite + vue + element-plus，自动关联版本）
npm install element-plus
```

### 3. 启动开发服务器
安装完成后，执行以下命令启动项目：
```bash
npm run dev
```
- 启动成功后，终端会显示访问地址（默认 `http://localhost:5173`）
- 浏览器会自动打开该地址，直接查看效果

## 三、文件修改（仅需修改2个核心文件）
### 1. 入口文件：`src/main.js`（引入 Element UI）
替换原文件内容为以下代码（仅4行，核心是引入并使用 Element Plus）：
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus' // 引入 Element Plus 核心库
import 'element-plus/dist/index.css' // 引入 Element Plus 全局样式

// 创建 Vue 实例并挂载，同时使用 Element Plus 插件
createApp(App).use(ElementPlus).mount('#app')
```

### 2. 根组件：`src/App.vue`（测试 Element 组件）
替换原文件内容为以下代码（包含 Element 组件示例，可直接复用）：
```vue
<template>
  <div style="padding: 2rem; text-align: center;">
    <h1 style="color: #42b983; margin-bottom: 1.5rem;">Vue + Element UI 最简项目</h1>
    
    <!-- Element 按钮组件示例 -->
    <el-button type="primary" size="large">主要按钮</el-button>
    <el-button type="success" size="large" style="margin-left: 1rem;">成功按钮</el-button>
    <el-button type="warning" size="large" style="margin-left: 1rem;">警告按钮</el-button>
    
    <!-- Element 分割线组件 -->
    <el-divider content-position="left" style="margin: 2rem 0;">卡片组件示例</el-divider>
    
    <!-- Element 卡片组件示例 -->
    <el-card style="max-width: 500px; margin: 0 auto; padding: 1.5rem;">
      <p>✅ Element UI 已成功集成</p>
      <p>📌 可直接使用所有 Element 组件</p>
      <p>⚡ 无需额外配置，直接开发业务</p>
    </el-card>
  </div>
</template>

<script setup>
// 组合式 API 最简写法，无需额外代码
</script>
```

## 四、项目结构（极简核心文件）
搭建完成后，项目仅包含必要文件，结构如下：
```
my-vue-element/
├── node_modules/       # 依赖目录（自动生成）
├── public/             # 静态资源目录（含默认图标）
├── src/                # 源码核心目录
│   ├── assets/         # 资源文件夹（默认logo）
│   ├── App.vue         # 根组件（已修改为 Element 示例）
│   └── main.js         # 入口文件（已引入 Element）
├── .gitignore          # Git 忽略文件
├── index.html          # 入口 HTML（Vite 自动注入脚本）
├── package.json        # 依赖配置（仅3个核心依赖）
└── vite.config.js      # Vite 基础配置（无需修改）
```

## 五、核心特性
1. 依赖极简：仅 `vite`、`vue`、`element-plus` 三个核心依赖，无冗余
2. 零配置成本：无需修改 `vite.config.js`，Element Plus 自动支持按需加载
3. 上手即⽤：修改完2个文件后，直接编写 Element 组件即可开发
4. 热更新支持：修改代码后浏览器自动刷新，开发效率高

## 六、使用说明
1. 新增组件：在 `src` 目录下创建 `.vue` 文件，直接使用 Element 组件（无需额外导入）
2. 扩展样式：在 `.vue` 文件的 `<style>` 标签中编写自定义样式，可覆盖 Element 默认样式
3. 构建部署：项目开发完成后，执行 `npm run build` 命令，生成 `dist` 目录，直接部署该目录即可

要不要我帮你整理一份**项目文件完整代码压缩包**，下载后解压即可直接运行，无需手动复制代码？