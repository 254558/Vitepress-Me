# pandas 数据分析核心总结（统计 + 分组 + 实战）

## 一、加载数据 + 基础设置
```python
import pandas as pd

# 加载 Stack Overflow 调查数据（设置索引为 Respondent）
df = pd.read_csv('data/survey_results_public.csv', index_col='Respondent')
schema_df = pd.read_csv('data/survey_results_schema.csv', index_col='Column')

# 显示更多行列
pd.set_option('display.max_columns', 85)
pd.set_option('display.max_rows', 85)

df.head()  # 查看前5行
```
✅ **运行结果**：显示完整的调查表格（84列数据）

---

## 二、数值统计（中位数、描述、计数）
### 1. 查看薪资列
```python
df['ConvertedComp'].head(15)
```
```
Respondent
1          NaN
2          NaN
3       8820.0
4      61000.0
5          NaN
6     366420.0
7          NaN
8          NaN
9      95179.0
10     13293.0
11         NaN
12         NaN
13     90000.0
14     57060.0
15         NaN
Name: ConvertedComp, dtype: float64
```

### 2. 中位数（排除空值）
```python
df['ConvertedComp'].median()
# 结果：57287.0

df.median()  # 所有数值列的中位数
```
```
CompTotal        62000.0
ConvertedComp    57287.0
WorkWeekHrs         40.0
CodeRevHrs           4.0
Age                 29.0
dtype: float64
```

### 3. 数据描述（统计大全）
```python
df.describe()
```
- count：数量
- mean：平均值
- std：标准差
- min/max：最小/最大值
- 25%/50%/75%：分位数

### 4. 非空值数量
```python
df['ConvertedComp'].count()
# 结果：55823
```


## 三、数据计数（value_counts）
### 1. 业余编程爱好者
```python
df['Hobbyist'].value_counts()
```
```
Yes    71257
No     17626
```

### 2. 社交媒体使用统计
```python
df['SocialMedia'].value_counts()
```
```
Reddit                      14374
YouTube                     13830
WhatsApp                    13347
Facebook                    13178
Twitter                     11398
...
```

### 3. 占比统计（百分比）
```python
df['SocialMedia'].value_counts(normalize=True)
```

### 4. 国家参与人数统计
```python
df['Country'].value_counts()
```
```
United States    20949
India             9061
Germany           5866
...
```

## 四、分组分析（groupby）
### 1. 按国家分组
```python
country_grp = df.groupby(['Country'])
```

### 2. 获取某个国家的所有数据
```python
country_grp.get_group('India')  # 印度所有受访者
```

### 3. 分组计数（印度社交媒体）
```python
filt = df['Country'] == 'India'
df.loc[filt]['SocialMedia'].value_counts()
```
```
WhatsApp                    2990
YouTube                     1820
...
```

### 4. 分组占比（中国社交媒体）
```python
country_grp['SocialMedia'].value_counts(normalize=True).loc['China']
```
```
WeChat 微信    0.670549  # 中国人用微信最多
...
```

### 5. 分组中位数（德国薪资）
```python
country_grp['ConvertedComp'].median().loc['Germany']
# 结果：63016.0
```

### 6. 多聚合函数（同时算中位数+平均值）
```python
country_grp['ConvertedComp'].agg(['median', 'mean']).loc['Canada']
```
```
median     68705.0
mean      134018.5
```