1. **query（问号传参）**
用于搜索、筛选、分页，网址：`/list?品类=水果`
- 跳转：`$router` 携带 `query`
- 取值：`$route.query.品类`

2. **params（斜杠传参）**
用于商品/新闻详情页，网址：`/detail/110`
- 先配置路由：`/detail/:id`
- 跳转：`$router` 携带 `params`
- 取值：`$route.params.id`

3. 口诀：**跳转用$router，拿参数用$route**