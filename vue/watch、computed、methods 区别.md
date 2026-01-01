# watch、computed、methods 区别
## 一、核心区别
简单场景下效果一致，非要选最优解的话：
1.  `computed`：靠**缓存**避免重复计算
2.  `methods`：处理**用户交互/支持传参**
3.  `watch`：专门搞定**异步操作**
