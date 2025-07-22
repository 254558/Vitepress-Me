# 用简单的方式理解 async/await

## 一、先从生活例子看异步

想象你在餐厅吃饭的场景：
- 你点了一份汉堡（这就像发起一个请求）
- 厨师开始做汉堡（这是"异步处理"，需要时间）
- 等待的时候你可以玩手机、聊天（主线程没闲着，还在做其他事）
- 汉堡做好了，服务员会叫你取餐（这是"回调通知"）

而async/await就像：你虽然盯着厨房看，但并没有真的阻止你做其他事，只是看起来你在"同步"地等餐——代码写起来像一步步按顺序执行，但实际上还是异步的。

## 二、为什么需要 async/await？

我们拿"读文件"举例子，看看代码是怎么进化的：

### 最麻烦的写法：回调地狱
就像剥洋葱，一层套一层，越套越多：
```javascript
// 先读a.txt，再读b.txt，再读c.txt
readFile('a.txt', (err, data1) => {
  readFile('b.txt', (err, data2) => {
    readFile('c.txt', (err, data3) => {
      // 终于读完三个文件了
    });
  });
});
```
问题：嵌套太多，像金字塔一样，看着头晕，出错了也难改。

### 好一点的写法：Promise链式调用
把洋葱摊平了，用.then()连接：
```javascript
readFilePromise('a.txt')
  .then(data1 => {
    return readFilePromise('b.txt');
  })
  .then(data2 => {
    return readFilePromise('c.txt');
  })
  .then(data3 => {
    // 处理结果
  });
```
改进：不嵌套了，但还是要写很多.then()，有点啰嗦。

### 最简单的写法：async/await
看起来就像普通的顺序执行代码：
```javascript
async function readAllFiles() {
  const data1 = await readFilePromise('a.txt');
  const data2 = await readFilePromise('b.txt');
  const data3 = await readFilePromise('c.txt');
  // 处理结果
}
```
优势：
- 代码顺序就是执行顺序，一目了然
- 用try/catch就能处理错误，和同步代码一样
- 不会卡住页面，后台悄悄处理
