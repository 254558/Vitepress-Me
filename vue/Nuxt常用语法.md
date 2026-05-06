# Nuxt 常用语法大全

## 一、页面与路由
### 1. 基础页面路由（文件即路由）
```
pages/
├─ index.vue       →  /
├─ about.vue       →  /about
└─ user/
   └─ [id].vue     →  /user/123
```

### 2. 获取路由参数
```vue
<script setup>
// 获取 ?id=123
const route = useRoute()
console.log(route.query.id)

// 获取 /user/123
console.log(route.params.id)
</script>
```

### 3. 路由跳转
```vue
<template>
  <!-- 声明式 -->
  <NuxtLink to="/about">关于页面</NuxtLink>
  <NuxtLink :to="{ path: '/user', query: { id: 123 } }">用户</NuxtLink>
</template>

<script setup>
// 编程式
const router = useRouter()

function go() {
  router.push('/about')
  router.push({ path: '/user/123' })
}
</script>
```

## 二、数据请求（最常用）
### 1. `useAsyncData` + `$fetch`（官方推荐）
```vue
<script setup>
// 服务端+客户端通用请求
const { data, pending, error } = await useAsyncData(
  'userList', // 缓存key
  () => $fetch('https://api.example.com/users')
)
</script>

<template>
  <div v-if="pending">加载中...</div>
  <div v-else-if="error">请求失败</div>
  <div v-else>{{ data }}</div>
</template>
```

### 2. `useFetch`（极简写法）
```vue
<script setup>
// 自动生成key，一行搞定
const { data, pending, error } = await useFetch('https://api.example.com/users')
</script>
```

### 3. 带参数/请求头
```vue
const { data } = await useFetch('/api/user', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: { name: 'test' }
})
```

## 三、组件使用
### 1. 自动导入组件
放在 `components/` 下的组件**无需 import**，直接用：
```
components/
└─ Button.vue
```
```vue
<template>
  <Button />
</template>
```

### 2. 客户端-only 组件
```vue
<ClientOnly>
  <MyChart />  <!-- 只在客户端渲染，如地图、图表 -->
  <div fallback>加载中...</div>
</ClientOnly>
```

## 四、布局 Layout
### 1. 使用默认布局
```vue
<template>
  <div>页面内容</div>
</template>
```

### 2. 指定自定义布局
```vue
<template>
  <div>内容</div>
</template>

<script setup>
// 使用 layouts/admin.vue
definePageMeta({
  layout: 'admin'
})
</script>
```

### 3. 关闭布局
```vue
definePageMeta({ layout: false })
```

## 五、状态管理（全局状态）
### 1. `useState`（官方自带，无需 Pinia）
```javascript
// composables/useUser.js
export const useUser = () => {
  const name = useState('userName', () => '张三')
  return { name }
}
```

任意页面直接用：
```vue
<script setup>
const { name } = useUser()
</script>
```

### 2. Pinia 用法（常用）
```javascript
// stores/user.js
export const useUserStore = defineStore('user', {
  state: () => ({ name: '' }),
  actions: {
    setName(val) { this.name = val }
  }
})
```
```vue
<script setup>
const userStore = useUserStore()
</script>
```

## 六、头部配置（SEO 标题/关键词）
### 1. 页面单独配置
```vue
<script setup>
useHead({
  title: '首页',
  meta: [
    { name: 'description', content: '页面描述' }
  ]
})
</script>
```

### 2. 全局配置（app.vue）
```vue
<script setup>
useHead({
  titleTemplate: '%s - 我的网站',
  htmlAttrs: { lang: 'zh-CN' }
})
</script>
```

## 七、中间件（路由守卫）
### 1. 全局中间件
```javascript
// middleware/auth.global.js
export default defineNuxtRouteMiddleware((to, from) => {
  if (!isLogin) {
    return navigateTo('/login')
  }
})
```

### 2. 页面单独使用中间件
```vue
<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>
```

## 八、服务端接口 API 路由
```javascript
// server/api/hello.get.ts
export default defineEventHandler(() => {
  return { message: 'Hello Nuxt' }
})
```
前端调用：
```javascript
const { data } = await useFetch('/api/hello')
```

## 九、常用内置组件
```vue
<NuxtLink to="/">首页</NuxtLink>  <!-- 路由跳转 -->
<NuxtPage />                     <!-- 页面出口 -->
<NuxtLayout>                     <!-- 布局出口 -->
<ClientOnly>                     <!-- 客户端渲染 -->
<Transition>                     <!-- 过渡动画 -->
```

## 十、生命周期（Vue 3 + Nuxt）
```vue
<script setup>
onMounted(() => {})  // 客户端挂载
onUnmounted(() => {})

// Nuxt 独有：服务端+客户端都执行
useAsyncData()
useFetch()
</script>
```

---

### 总结
1. **路由**：文件即路由，`useRoute()` / `useRouter()`
2. **请求**：`useFetch` / `useAsyncData`（SSR 必备）
3. **状态**：`useState`（轻量）/ Pinia（大型项目）
4. **组件**：`components/` 自动导入
5. **SEO**：`useHead()` 配置标题描述
6. **中间件**：路由守卫、权限控制
