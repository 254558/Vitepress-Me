# 筛选

```python
import pandas as pd

data = {
    "name": ["张三","李四","王五","赵六"],
    "age": [18, 25, 22, 30],
    "city": ["广州","深圳","广州","上海"]
}
df = pd.DataFrame(data)
print("原始数据 df：")
print(df)
```
**原始结果：**
```
  name  age city
0   张三   18   广州
1   李四   25   深圳
2   王五   22   广州
3   赵六   30   上海
```

---

## 1. 单条件筛选：年龄 > 22
```python
res1 = df[df["age"] > 22]
print("\n1. 年龄大于22：")
print(res1)
```
**筛选结果：**
```
  name  age city
1   李四   25   深圳
3   赵六   30   上海
```

---

## 2. 筛选城市等于 广州
```python
res2 = df[df["city"] == "广州"]
print("\n2. 城市是广州：")
print(res2)
```
**筛选结果：**
```
  name  age city
0   张三   18   广州
2   王五   22   广州
```

---

## 3. 多条件 且 &
年龄>20 **并且** 城市=广州
```python
res3 = df[(df["age"] > 20) & (df["city"] == "广州")]
print("\n3. 年龄>20 且 城市广州：")
print(res3)
```
**筛选结果：**
```
  name  age city
2   王五   22   广州
```

---

## 4. 多条件 或 |
年龄<20 **或者** 城市=上海
```python
res4 = df[(df["age"] < 20) | (df["city"] == "上海")]
print("\n4. 年龄<20 或 城市上海：")
print(res4)
```
**筛选结果：**
```
  name  age city
0   张三   18   广州
3   赵六   30   上海
```

---

## 5. isin 多值筛选
城市在 [广州, 深圳] 里
```python
res5 = df[df["city"].isin(["广州", "深圳"])]
print("\n5. 城市在广州、深圳：")
print(res5)
```
**筛选结果：**
```
  name  age city
0   张三   18   广州
1   李四   25   深圳
2   王五   22   广州
```

---

## 6. ~ 取反筛选
**不是**广州、深圳
```python
res6 = df[~df["city"].isin(["广州", "深圳"])]
print("\n6. 不在广州、深圳：")
print(res6)
```
**筛选结果：**
```
  name  age city
3   赵六   30   上海
```

---

## 7. loc 筛选 + 指定列
只看 name、age 两列
```python
res7 = df.loc[df["age"] > 20, ["name", "age"]]
print("\n7. 年龄>20，只显示姓名年龄：")
print(res7)
```
**筛选结果：**
```
  name  age
1   李四   25
2   王五   22
3   赵六   30
```
