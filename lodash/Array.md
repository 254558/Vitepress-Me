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

```js
function concat(array, ...values) {
  // 处理 array 为 null/undefined 的情况，默认转为空数组
  const result = Array.isArray(array) ? [...array] : [];

  // 遍历所有待合并的 values
  for (const value of values) {
    if (Array.isArray(value)) {
      // 数组：直接展开添加（浅拷贝）
      result.push(...value);
    } else if (
      // 类数组判断：有 length 属性 + 是对象（排除字符串/函数，因为字符串有 length 但需整体添加）
      typeof value === 'object' &&
      value !== null &&
      'length' in value &&
      !(value instanceof String) &&
      !(value instanceof Function)
    ) {
      // 类数组（如 arguments、NodeList）转为数组后展开
      result.push(...Array.from(value));
    } else {
      // 原始值（字符串、数字、布尔等）直接添加
      result.push(value);
    }
  }

  return result;
}
```

for (const value of values) ：遍历可迭代对象

## `_.difference(array, [values])`

```js
function difference(array, ...values) {
  // 1. 处理边界情况：如果第一个参数不是数组/类数组，返回空数组
  if (!Array.isArray(array) && !isArrayLike(array)) {
    return [];
  }

  // 2. 把第一个参数转为真正的数组（支持类数组），并过滤掉 null/undefined
  const source = Array.from(array).filter(item => item != null);

  // 3. 合并所有 values 参数（支持多个数组/类数组），转为 Set 用于快速查找（去重+O(1)查询）
  const excludedSet = new Set();
  values.forEach(val => {
    // 只处理数组/类数组，非数组参数忽略（同 Lodash 行为）
    if (Array.isArray(val) || isArrayLike(val)) {
      Array.from(val).forEach(item => excludedSet.add(item));
    }
  });

  // 4. 过滤出 source 中不在 excludedSet 的元素（保持顺序，自动去重 source 重复项）
  return source.filter((item, index, self) => {
    // 两个条件：① 不在排除集合中 ② 是当前元素在 source 中第一次出现（去重）
    return !excludedSet.has(item) && self.indexOf(item) === index;
  });
}

// 辅助函数：判断是否为类数组（有 length 属性且 length 是非负整数）
function isArrayLike(obj) {
  return (
    obj != null &&
    typeof obj.length === 'number' &&
    obj.length >= 0 &&
    typeof obj !== 'function' // 排除函数（函数有 length，但不算类数组）
  );
}
```



## `_.differenceBy(array, [values], [iteratee=_.identity])`

## `_.differenceWith(array, [values], [comparator])`

## `_.drop(array, [n=1])`