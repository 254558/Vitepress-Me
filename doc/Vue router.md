# Vue Router 新手教程

## **安装**
打开终端，输入下面这行代码，把 Vue Router 装到你的项目里：
```bash
npm install vue-router@4
# 注意：Vue 3 要用 4.x 版本哦！
```


## **配置路由：去哪页？点这里！**
创建一个 `router.js` 文件，告诉 Vue 你的页面都在哪：

```javascript
// router.js 文件
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'  // 首页
import ProjectView from './views/ProjectView.vue'  // 项目页

const routes = [
  {
    path: '/',          // 访问根路径时
    name: 'Home',       // 路由名字叫 Home
    component: HomeView // 显示这个组件
  },
  {
    path: '/project',   // 访问 /project 时
    name: 'Project',    // 路由名字叫 Project
    component: ProjectView // 显示这个组件
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 用普通 URL 模式（不带 #）
  routes // 上面定义的路由规则
})

export default router // 导出路由，给 main.js 用
```


## **创建页面组件：写 HTML+JS 的地方**
先写个首页组件 `HomeView.vue`：

```vue
<!-- HomeView.vue -->
<template>
  <div class="home">
    <h1>欢迎来到首页</h1>
    <!-- 点击这里会跳转到 Project 页面 -->
    <router-link to="/project">去项目页玩</router-link>
  </div>
</template>
```

再写个项目页组件 `ProjectView.vue`：

```vue
<!-- ProjectView.vue -->
<template>
  <div class="project">
    <h1>项目详情页</h1>
    <!-- 点击返回首页 -->
    <router-link to="/">回首页</router-link>
  </div>
</template>
```

**划重点！**  
`router-link` 就像超链接 `<a>`，但更 Vue！  
`to` 属性可以是路径（如 `/project`），也可以是路由名字（如 `{ name: 'Project' }`）。


## **注册路由：让 Vue 知道你有路由了**
打开 `main.js`，把路由插件装到 Vue 里：

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入刚才写的路由配置

createApp(App)
  .use(router) // 注册路由插件
  .mount('#app')
```


## **主应用模板：路由从这里显示**
修改 `App.vue`，添加路由出口和导航栏：

```vue
<!-- App.vue -->
<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/project">项目页</router-link>
    </nav>
    
    <!-- 路由出口：页面内容会在这里显示 -->
    <router-view></router-view>
  </div>
</template>

<style>
nav {
  padding: 10px;
  background: #f5f5f5;
}
</style>
```


## **除了点击跳转，还能代码跳转**
如果你想在按钮点击或其他事件里跳转，可以这样：

```vue
<template>
  <button @click="goToProject">点我去项目页</button>
</template>

<script>
export default {
  methods: {
    goToProject() {
      // 方式一：直接写路径
      this.$router.push('/project')
      
      // 方式二：用路由名字（推荐，不容易写错）
      this.$router.push({ name: 'Project' })
      
      // 还能后退，像浏览器的返回按钮
      this.$router.back()
    }
  }
}
</script>
```


## **传参数：让页面之间能通信**
比如你想传个项目 ID 到项目页：

```javascript
// 先修改路由配置，加个动态参数
{
  path: '/project/:id',  // :id 表示这是个动态参数
  name: 'Project',
  component: ProjectView
}
```

```vue
<!-- 传递参数 -->
<router-link :to="{ name: 'Project', params: { id: 123 }}">
  查看项目 123
</router-link>

<!-- 在 ProjectView.vue 里获取参数 -->
<script>
export default {
  created() {
    // 打印：项目 ID 是 123
    console.log('项目 ID 是', this.$route.params.id)
  }
}
</script>
```


## **性能优化：懒加载（高级功能）**
项目大了之后，可以让页面按需加载：

```javascript
// router.js
const routes = [
  {
    path: '/',
    name: 'Home',
    // 懒加载：用到这个页面时才加载
    component: () => import('./views/HomeView.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('./views/ProjectView.vue')
  }
]
```