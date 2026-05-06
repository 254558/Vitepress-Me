# TypeScript 最常用核心语法

## 1. 基础类型注解（最常用）
给变量/参数指定类型，TS 会自动校验类型错误。
```typescript
// 基础类型
let name: string = "张三";
let age: number = 20;
let isStudent: boolean = true;
let nullVal: null = null;
let undef: undefined = undefined;

// any：任意类型（不推荐滥用，会失去 TS 校验）
let anyVal: any = 123;

// unknown：安全的任意类型（推荐替代 any）
let unknownVal: unknown = "abc";
```

## 2. 数组类型
两种写法，日常用第一种最多。
```typescript
// 写法1（推荐）：类型[]
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["a", "b"];

// 写法2：泛型写法
let arr2: Array<number> = [1, 2];
```

## 3. 对象类型（interface / type）
**定义对象结构**，前端写接口、组件 props 必用。

### ① interface（最常用）
```typescript
// 定义对象类型
interface User {
  name: string;       // 必填属性
  age: number;
  phone?: string;     // ? 可选属性
  readonly id: number; // readonly 只读属性（不可修改）
}

// 使用
const user: User = {
  id: 1,
  name: "李四",
  age: 25
  // phone 可以不写
};
```

### ② type 类型别名
```typescript
type User = {
  name: string;
  age: number;
}
```
> 日常开发：**对象用 interface，联合/交叉类型用 type**。

## 4. 函数类型
指定**参数类型**和**返回值类型**，必用语法。
```typescript
// 完整写法
function add(a: number, b: number): number {
  return a + b;
}

// 无返回值：void
function log(msg: string): void {
  console.log(msg);
}

// 可选参数
function greet(name?: string): void {
  console.log(name || "你好");
}

// 默认参数
function sum(a: number, b: number = 0): number {
  return a + b;
}
```

## 5. 联合类型 |
**一个值可以是多种类型**，超级常用。
```typescript
// 变量可以是 string 或 number
let id: string | number = 1001;
id = "uuid-123";

// 常用场景：状态
let status: "success" | "error" | "loading" = "loading";
```

## 6. 交叉类型 &
**合并多个类型**，常用于扩展对象。
```typescript
interface Base {
  id: number;
}
interface Person {
  name: string;
}

// 合并两个类型
type User = Base & Person;

const user: User = { id: 1, name: "小明" };
```

## 7. 泛型（重用类型逻辑）
写**通用函数/组件/工具类**必用，让类型可以“传参”。
```typescript
// 定义一个通用函数：返回值类型 = 参数类型
function identity<T>(arg: T): T {
  return arg;
}

// 使用
const res = identity<string>("hello");
const num = identity<number>(123);
```

## 8. 类型断言
手动告诉 TS “我确定这个值的类型”。
```typescript
const str: unknown = "123";

// 告诉 TS 这是 string
const len = (str as string).length;

// 另一种写法（JSX 中只能用 as）
const len2 = (<string>str).length;
```

## 9. 枚举 enum
定义**固定常量集合**，比如状态、类型。
```typescript
enum Status {
  Success = 200,
  Error = 500,
  NotFound = 404
}

console.log(Status.Success); // 200
```

## 10. 可选链 ?. / 空值合并 ??
日常处理数据防报错，必用语法。
```typescript
const user = { info: { name: "小红" } };

// 可选链：属性不存在不报错
const name = user?.info?.name; 

// 空值合并：只有 null/undefined 才用默认值
const age = user?.age ?? 18;
```

## 11. 类型推断
TS 会**自动推导类型**，不用每次都写注解。
```typescript
// TS 自动推断：str 是 string 类型
let str = "abc";
// str = 123; // 报错
```

---

# 日常高频组合用法（实战必看）
### 1. 接口请求返回类型
```typescript
interface ApiRes<T = any> {
  code: number;
  data: T;
  msg: string;
}

// 使用：指定 data 是 User 类型
const res: ApiRes<User> = { code:200, data:{id:1,name:""}, msg:"" };
```

### 2. 函数参数 + 联合类型
```typescript
function setStatus(status: "success" | "error"): void {}
setStatus("success");
```

---

### 总结
1. **基础注解**：`string/number/boolean/any/unknown`
2. **对象**：`interface` + `?可选` + `readonly只读`
3. **函数**：参数类型 + 返回值类型 + `void`
4. **灵活类型**：`| 联合`、`& 交叉`、`泛型<T>`
5. **防错**：`?.` 可选链、`??` 空值合并
