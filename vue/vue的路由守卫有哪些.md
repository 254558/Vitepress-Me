# Vue 路由守卫（Router Guards）全解
Vue 路由守卫**核心作用是监听路由的跳转过程**，在路由切换的不同阶段执行逻辑（比如登录校验、权限控制、页面跳转拦截等）。

按照**作用范围和执行时机**，分为 **3 大类、共 7 个** 常用路由守卫：

---

## 一、全局守卫（所有路由都会触发）
全局生效，任意路由切换都会执行，在 `router/index.js` 中定义。

### 1. 全局前置守卫 `beforeEach`
- **执行时机**：路由**开始跳转之前**
- **最常用**：登录验证、权限判断、跳转拦截
```js
router.beforeEach((to, from, next) => {
  // to: 要去的路由
  // from: 当前离开的路由
  // next: 必须调用！控制路由是否放行
  if (to.path !== '/login' && !isLogin) {
    next('/login') // 未登录，跳转到登录页
  } else {
    next() // 放行
  }
})
```

### 2. 全局解析守卫 `beforeResolve`
- **执行时机**：在路由组件被解析**之后、跳转完成之前**
- 比 `beforeEach` 晚，比 `afterEach` 早
- 适合：异步路由数据加载、最终校验

### 3. 全局后置守卫 `afterEach`
- **执行时机**：路由**跳转完成之后**
- **没有 `next`**，无法拦截路由
- 适合：页面标题修改、埋点统计、关闭加载动画
```js
router.afterEach((to, from) => {
  document.title = to.meta.title || '默认标题'
})
```

---

## 二、路由独享守卫（单个路由生效）
只对**当前配置的路由**生效，直接写在路由配置里。

### 4. `beforeEnter`
- **执行时机**：进入当前路由**之前**
- 优先级：高于全局前置守卫
```js
const routes = [
  {
    path: '/user',
    component: User,
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // 仅 /user 路由触发
      if(hasPermission) next()
      else next('/403')
    }
  }
]
```

---

## 三、组件内守卫（组件内部使用）
写在 Vue 组件（.vue 文件）中，只对当前组件生效。

### 5. 组件进入守卫 `beforeRouteEnter`
- **执行时机**：渲染该组件的路由跳转**进入前**
- **注意**：此时组件实例 `this` 还没创建，**不能用 this**
- 可以通过 `next(vm => {})` 访问实例

### 6. 组件更新守卫 `beforeRouteUpdate`
- **执行时机**：路由**参数变化**但**组件复用**时（如 /user/1 → /user/2）
- 可以用 `this`，最常用在详情页切换

### 7. 组件离开守卫 `beforeRouteLeave`
- **执行时机**：离开当前组件路由**之前**
- **最常用**：表单未保存提醒、清除定时器
```js
export default {
  beforeRouteLeave(to, from, next) {
    // 弹窗提醒
    if (this.formChanged) {
      if(confirm('确定离开？数据将丢失')) next()
      else next(false) // 阻止跳转
    } else {
      next()
    }
  }
}
```

---

# 完整执行顺序（必背）
路由跳转时，守卫执行**固定顺序**：
1. 组件内：`beforeRouteLeave`（离开当前页）
2. 全局：`beforeEach`
3. 路由独享：`beforeEnter`
4. 组件内：`beforeRouteEnter`
5. 全局：`beforeResolve`
6. 全局：`afterEach`
7. 页面渲染完成

---

# 核心参数说明
所有守卫都接收 3 个参数（`afterEach` 没有 `next`）：
- `to`：即将要进入的目标路由
- `from`：当前正要离开的路由
- `next()`：**必须调用**，决定路由是否放行
  - `next()`：放行
  - `next(false)`：中断跳转
  - `next('/path')`：强制跳转到指定路由

---

### 总结
1. **全局守卫**：`beforeEach`、`beforeResolve`、`afterEach`（所有路由通用）
2. **路由独享**：`beforeEnter`（单个路由专用）
3. **组件内守卫**：`beforeRouteEnter`、`beforeRouteUpdate`、`beforeRouteLeave`
4. **最常用**：`beforeEach`（登录校验）、`beforeRouteLeave`（离开拦截）