# Proxy 与 Object.defineProperty 的区别

## 🔍 一句话总结：

Proxy 能劫持整个对象的所有操作，而 defineProperty 只能劫持某个属性的读写，还不能监听新增/删除属性。

---

## 🆚 核心区别对比

| 特性 | Object.defineProperty | Proxy |
|------|-----------------------|-------|
| 是否能监听新增属性 | ❌ 不行 | ✅ 可以 |
| 是否能监听删除属性 | ❌ 不行 | ✅ 可以 |
| 是否能监听数组索引变化 | ❌ 不行 | ✅ 可以 |
| 是否能劫持整个对象 | ❌ 只能针对一个个属性 | ✅ 一次性代理整个对象 |
| 是否支持 Reflect 配合处理默认行为 | ❌ 不支持 | ✅ 强配合 |
| 是否兼容老浏览器（如 IE） | ✅ 是的 | ❌ 否（Proxy 是 ES6 新特性） |

---

## 📦 举例对比

### 🔴 defineProperty 的限制：

```javascript
const obj = {}
Object.defineProperty(obj, 'name', {
  get() {
    console.log('读取 name')
    return 'Tom'
  },
  set(value) {
    console.log('设置 name 为', value)
  }
})

obj.name = 'Jerry'   // 设置 name 为 Jerry
console.log(obj.name) // 读取 name → Tom

obj.age = 20  // ⚠️ 不能监听
delete obj.name // ⚠️ 不能监听
```

### ✅ Proxy 的强大之处：

```javascript
const obj = {
  name: 'Tom'
}

const proxy = new Proxy(obj, {
  get(target, key) {
    console.log('读取属性:', key)
    return target[key]
  },
  set(target, key, value) {
    console.log('设置属性:', key, '=', value)
    target[key] = value
    return true
  },
  deleteProperty(target, key) {
    console.log('删除属性:', key)
    return delete target[key]
  }
})

proxy.name       // 读取属性: name
proxy.age = 20   // 设置属性: age = 20
delete proxy.name // 删除属性: name
```