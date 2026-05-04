# DataFrame
## 一、什么是 DataFrame
可以理解为：Python版的**Excel 表格**

## 二、创建 DataFrame 几种常用方式
### 1. 字典创建（最常用）
```python
data = {
    "姓名": ["张三","李四","王五"],
    "年龄": [18,20,22],
    "城市": ["广州","深圳","上海"]
}
df = pd.DataFrame(data)
print(df)
```

### 2. 列表嵌套创建
```python
data = [
    ["张三",18,"广州"],
    ["李四",20,"深圳"]
]
df = pd.DataFrame(data, columns=["姓名","年龄","城市"])
```