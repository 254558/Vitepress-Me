# Pinia 核心意义及实操指南（精简版）
## 一、核心意义
解决组件间传值繁琐问题，全局任意组件可直接读写共享数据，简化开发。
## 二、无状态库的痛点
1. 父子组件：props层层透传，层级越多越混乱；
2. 兄弟组件：无法直接通信，传统方案难维护；
3. 跨组件共享：localStorage/单独JS文件无响应式。
## 三、Pinia 实操步骤
### 1. 安装
```bash
npm i pinia
```
### 2. 全局挂载（main.js）
```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
createApp(App).use(createPinia()).mount('#app')
```
### 3. 新建仓库（stores/user.js）
```js
import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => ({ token: '', username: '', age: 18 }),
  actions: {
    login(info) { this.token = info.token; this.username = info.name },
 logout() { this.$reset() }
  }
})
```
### 4. 组件使用
#### 读取数据
```vue
<template><div>{{ user.username }}</div></template>
<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
</script>
```
#### 修改数据
```vue
<script setup>
const user = useUserStore()
user.age = 20; // 直接改
user.login({ token: 'abc123', name: '张三' }); // 调用方法
</script>
```
## 四、关键知识点
1. 解构数据用 storeToRefs 保持响应式；
2. 任意组件引入仓库即可读写数据；
3. 持久化：安装插件 + 仓库添加 persist: true。
```bash
npm i pinia-plugin-persistedstate
```