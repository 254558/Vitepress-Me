# Array

## `_.chunk(array, [size=1])`

```javascript
function chunk(array, size = 1) {
  // 处理边界：原数组无效或 size 不合法 → 返回空数组
  if (!Array.isArray(array) || size < 1) return [];
  
  const result = [];
  const len = array.length;
  
  // 循环截取子数组，步长为 size
  for (let i = 0; i < len; i += size) {
    // 从 i 开始，截取 size 个元素（不足则取到末尾）
    result.push(array.slice(i, i + size));
  }
  
  return result;
}

// 测试
chunk([1,2,3,4], 2); // → [[1,2], [3,4]]
chunk([1,2,3], 5); // → [[1,2,3]]
chunk(null, 2); // → []
```

从零开始截两个，下次从2开始截两个，下次从4开始截两个

---

## `_.compact(array)`

```js
const compact = (array) => (array || []).filter(Boolean);
```

filter：让元素 “通过回调函数的测试”，通过的留下，没通过的被过滤掉。

`Boolean()` 是 JS 原生函数，作用是把任意值转为布尔值，遵循 JS 标准的 “真假值规则”：

- 传入**假值**（`false`、`null`、`undefined`、`0`、`''`、`NaN`）→ 返回 `false`；
- 传入**真值**（除假值外的所有值，比如 `1`、`'a'`、`{}`、`[]`、`()=>{}`）→ 返回 `true`。

## `_.concat(array, [values])`

## `_.difference(array, [values])`

## `_.differenceBy(array, [values], [iteratee=_.identity])`

## `_.differenceWith(array, [values], [comparator])`

## `_.drop(array, [n=1])`