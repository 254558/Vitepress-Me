页面一：

```vue
<template>
  <div>
    <h1>Project</h1> 
    <router-link to="/">Go to Home</router-link>
  </div>
</template>
```

页面二：
```vue
<template>
  <div>
    <h1>Project</h1> 
    <router-link to="/">Go to Home</router-link>
  </div>
</template>
```

主页面：
```js
import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from './components/HomeView.vue'
import ProjectView from './components/ProjectView.vue'

export default createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/project', component: ProjectView }
  ]
})
```
main.js：
```js
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#app')
```

