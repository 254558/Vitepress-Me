1. **`<router-view>`**：页面容器，路由页面都在这里显示
```vue
<router-view></router-view>
```

2. **`<router-link>`**：点击跳转页面
```vue
<router-link to="/about">去关于页</router-link>
```

3. **JS 代码跳转**
```js
import { useRouter } from 'vue-router'
const router = useRouter()
router.push('/about')
```