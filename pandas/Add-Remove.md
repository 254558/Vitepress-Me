# 增删
## 初始化数据
```python
import pandas as pd
data = {
    'first': ['Corey', 'Jane', 'John'],
    'last': ['Schafer', 'Doe', 'Doe'],
    'email': ['Corey@gmail.com', 'Jane@email.com', 'John@email.com']
}
df = pd.DataFrame(data)
df
```
**运行结果**：
|   | first | last    | email           |
|---|-------|---------|-----------------|
| 0 | Corey | Schafer | Corey@gmail.com |
| 1 | Jane  | Doe     | Jane@email.com  |
| 2 | John  | Doe     | John@email.com  |

---

## 一、Add 添加操作
### 1. 直接新增列
```python
df['age'] = [25, 30, 35]
df['full_name'] = df['first'] + ' ' + df['last']
df
```
**运行结果**：
|   | first | last    | email           | age | full_name     |
|---|-------|---------|-----------------|-----|---------------|
| 0 | Corey | Schafer | Corey@gmail.com | 25  | Corey Schafer |
| 1 | Jane  | Doe     | Jane@email.com  | 30  | Jane Doe      |
| 2 | John  | Doe     | John@email.com  | 35  | John Doe      |

### 2. 指定位置插入列
```python
df.insert(1, 'gender', ['M', 'F', 'M'])
df
```
**运行结果**：
|   | first | gender | last    | email           | age | full_name     |
|---|-------|--------|---------|-----------------|-----|---------------|
| 0 | Corey | M      | Schafer | Corey@gmail.com | 25  | Corey Schafer |
| 1 | Jane  | F      | Doe     | Jane@email.com  | 30  | Jane Doe      |
| 2 | John  | M      | Doe     | John@email.com  | 35  | John Doe      |

### 3. 添加单行（pd.concat）
```python
new_row = pd.DataFrame({'first': ['Tony'], 'last': ['Stark'], 'email': ['tony@gmail.com']})
df = pd.concat([df, new_row], ignore_index=True)
df
```
**运行结果**：
|   | first | gender | last    | email           | age | full_name     |
|---|-------|--------|---------|-----------------|-----|---------------|
| 0 | Corey | M      | Schafer | Corey@gmail.com | 25  | Corey Schafer |
| 1 | Jane  | F      | Doe     | Jane@email.com  | 30  | Jane Doe      |
| 2 | John  | M      | Doe     | John@email.com  | 35  | John Doe      |
| 3 | Tony  | NaN    | Stark   | tony@gmail.com  | NaN | NaN           |

### 4. 追加多行 DataFrame
```python
df2 = pd.DataFrame({
    'first': ['Steve', 'Bruce'],
    'last': ['Rogers', 'Wayne'],
    'email': ['steve@gmail.com', 'bruce@gmail.com']
})
df = pd.concat([df, df2], ignore_index=True)
df
```
**运行结果**：
|   | first | gender | last    | email            | age | full_name     |
|---|-------|--------|---------|------------------|-----|---------------|
| 0 | Corey | M      | Schafer | Corey@gmail.com  | 25  | Corey Schafer |
| 1 | Jane  | F      | Doe     | Jane@email.com   | 30  | Jane Doe      |
| 2 | John  | M      | Doe     | John@email.com   | 35  | John Doe      |
| 3 | Tony  | NaN    | Stark   | tony@gmail.com   | NaN | NaN           |
| 4 | Steve | NaN    | Rogers  | steve@gmail.com  | NaN | NaN           |
| 5 | Bruce | NaN    | Wayne   | bruce@gmail.com  | NaN | NaN           |

---

## 二、Remove 删除操作
### 1. 删除单列 / 多列
```python
# 删除单列
df.drop(columns='age', inplace=True)
# 删除多列
df.drop(columns=['gender', 'full_name'], inplace=True)
df
```
**运行结果**：
|   | first | last    | email            |
|---|-------|---------|------------------|
| 0 | Corey | Schafer | Corey@gmail.com  |
| 1 | Jane  | Doe     | Jane@email.com   |
| 2 | John  | Doe     | John@email.com   |
| 3 | Tony  | Stark   | tony@gmail.com   |
| 4 | Steve | Rogers  | steve@gmail.com  |
| 5 | Bruce | Wayne   | bruce@gmail.com  |

### 2. 按索引删除行
```python
df.drop(index=[4,5], inplace=True)
df
```
**运行结果**：
|   | first | last    | email           |
|---|-------|---------|-----------------|
| 0 | Corey | Schafer | Corey@gmail.com |
| 1 | Jane  | Doe     | Jane@email.com  |
| 2 | John  | Doe     | John@email.com  |
| 3 | Tony  | Stark   | tony@gmail.com  |

### 3. 按条件删除行
删除 `last == Doe` 的行
```python
filt = df['last'] == 'Doe'
df.drop(index=df[filt].index, inplace=True)
df
```
**运行结果**：
|   | first | last    | email           |
|---|-------|---------|-----------------|
| 0 | Corey | Schafer | Corey@gmail.com |
| 3 | Tony  | Stark   | tony@gmail.com |
