# vue组件之间如何通信
## 一、父子通信
### 1. 父 → 子：props
**子组件 Child.vue**
```vue
<template>
  <div>{{ msg }}</div>
</template>

<script setup>
// 接收父传的值
const props = defineProps({
  msg: String
})
</script>
```

**父组件 Parent.vue**
```vue
<template>
  <!-- 自定义属性传参 -->
  <Child msg="我是父组件传过来的数据" />
</template>

<script setup>
import Child from './Child.vue'
</script>
```

---

### 2. 子 → 父：$emit
**子组件 Child.vue**
```vue
<template>
  <button @click="sendData">向父传值</button>
</template>

<script setup>
// 定义触发事件
const emit = defineEmits(['getVal'])

const sendData = () => {
  // 触发自定义事件，并携带参数
  emit('getVal', '子组件的内容')
}
</script>
```

**父组件 Parent.vue**
```vue
<template>
  <!-- 监听子组件自定义事件 -->
  <Child @getVal="handleGet" />
</template>

<script setup>
const handleGet = (val) => {
  console.log('父接收：', val) // 子组件的内容
}
</script>
```

---

### 3. ref：父直接获取子实例/方法
**子组件 Child.vue**
```vue
<script setup>
// 需主动暴露方法/变量
const fun = () => {
  console.log('子组件方法')
}
defineExpose({ fun })
</script>
```

**父组件 Parent.vue**
```vue
<template>
  <Child ref="childRef" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Child from './Child.vue'

const childRef = ref(null)

onMounted(() => {
  // 直接调用子组件方法
  childRef.value.fun()
})
</script>
```

---

## 二、祖孙跨级通信：provide / inject
场景：顶层祖先组件 → 深层后代组件，中间组件不用层层透传

### 祖先组件（最外层）
```vue
<script setup>
import { provide, ref } from 'vue'

// 响应式数据，后代可更新
const info = ref('祖先提供的全局数据')

// 向下注入
provide('keyInfo', info)
</script>
```

### 任意后代/孙子组件
```vue
<template>
  <div>{{ info }}</div>
</template>

<script setup>
import { inject } from 'vue'

// 接收上层注入的数据
const info = inject('keyInfo')
</script>
```

---

### 快速记忆
1. 父子传值：`props` 下行，`emit` 上行
2. 父调子：`ref + defineExpose`
3. 多层嵌套跨级：上层 `provide`，下层 `inject`