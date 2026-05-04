# Updating Data 

```
   first     last                    email
0  Corey  Schafer  CoreyMSchafer@gmail.com
1   Jane      Doe        JaneDoe@email.com
2   John      Doe        JohnDoe@email.com
```

## 1. 最常用：loc 按「行标签、列名」改
语法：
```python
df.loc[行索引, 列名] = 新值
```
示例：把第2行 `last` 改成 `Smith`
```python
df.loc[2, 'last'] = 'Smith'
```

## 2. 专门改单个单元格：at（更快）
`at` 只用来改**单个单元格**，语法和 loc 一样
```python
df.at[2, 'last'] = 'Doe'
```

## 3. iloc 按「数字位置」改（行号、列号）
只认**第几行、第几列**，从 0 开始
```python
# 第2行，第1列
df.iloc[2, 1] = 'Smith'
```

## 4. 先筛选条件，再改单元格（工作最常用）
先过滤出符合条件的那一行，再改对应列
```python
# 筛选邮箱等于 JohnDoe@email.com 的行
filt = df['email'] == 'JohnDoe@email.com'
# 改这一行的 last 列
df.loc[filt, 'last'] = 'Smith'
```
