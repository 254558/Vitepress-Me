# 排序

## 1. 初始数据
```python
people = {
    'first': ['Corey', 'Jane', 'John', 'Adam'], 
    'last': ['Schafer', 'Doe', 'Doe', 'Doe'], 
    'email': ['CoreyMSchafer@gmail.com', 'JaneDoe@email.com', 'JohnDoe@email.com', 'A@email.com']
}
import pandas as pd
df = pd.DataFrame(people)
df
```
✅ **运行结果**
| index | first | last    | email                     |
|-------|-------|---------|---------------------------|
| 0     | Corey | Schafer | CoreyMSchafer@gmail.com   |
| 1     | Jane  | Doe     | JaneDoe@email.com         |
| 2     | John  | Doe     | JohnDoe@email.com         |
| 3     | Adam  | Doe     | A@email.com               |

---

## 2. 按 `last` 列 **降序** 排序
```python
df.sort_values(by='last', ascending=False)
```
- `by='last'`：按 last 列排序
- `ascending=False`：**降序**（Z→A）

✅ **运行结果**
| index | first | last    | email                     |
|-------|-------|---------|---------------------------|
| 0     | Corey | Schafer | CoreyMSchafer@gmail.com   |
| 1     | Jane  | Doe     | JaneDoe@email.com         |
| 2     | John  | Doe     | JohnDoe@email.com         |
| 3     | Adam  | Doe     | A@email.com               |

---

## 3. 按 `last` + `first` 双列 **同时降序**
```python
df.sort_values(by=['last', 'first'], ascending=False)
```
- 先按 `last` 降序
- `last` 相同的行，再按 `first` 降序（John > Jane > Adam）

✅ **运行结果**
| index | first | last    | email                     |
|-------|-------|---------|---------------------------|
| 0     | Corey | Schafer | CoreyMSchafer@gmail.com   |
| 2     | John  | Doe     | JohnDoe@email.com         |
| 1     | Jane  | Doe     | JaneDoe@email.com         |
| 3     | Adam  | Doe     | A@email.com               |

---

## 4. 双列 **混合排序**（并保存到原表）
```python
df.sort_values(by=['last', 'first'], ascending=[False, True], inplace=True)
df
```
- `ascending=[False, True]`：
  - `last`：**降序**
  - `first`：**升序**（Adam < Jane < John）
- `inplace=True`：直接修改原表格

✅ **运行结果**
| index | first | last    | email                     |
|-------|-------|---------|---------------------------|
| 0     | Corey | Schafer | CoreyMSchafer@gmail.com   |
| 3     | Adam  | Doe     | A@email.com               |
| 1     | Jane  | Doe     | JaneDoe@email.com         |
| 2     | John  | Doe     | JohnDoe@email.com         |

---

## 5. 按 **原始行索引** 复位排序
```python
df.sort_index()
```
回到最开始的索引 0→1→2→3 顺序

✅ **运行结果**
| index | first | last    | email                     |
|-------|-------|---------|---------------------------|
| 0     | Corey | Schafer | CoreyMSchafer@gmail.com   |
| 1     | Jane  | Doe     | JaneDoe@email.com         |
| 2     | John  | Doe     | JohnDoe@email.com         |
| 3     | Adam  | Doe     | A@email.com               |

---

## 6. 只对 **单列** 排序
```python
df['last'].sort_values()
```
只输出 `last` 列的升序结果，不是完整表格

✅ **运行结果**
```
3        Doe
1        Doe
2        Doe
0    Schafer
Name: last, dtype: object
```