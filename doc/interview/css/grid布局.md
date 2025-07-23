# Grid 布局

### 基础用法
1. **启用 Grid**  
给父容器加 `display: grid`，子元素自动成为网格项：
```css
.grid-container {
  display: grid; /* 启用网格布局 */
  gap: 15px; /* 项目之间的间距 */
}
```

2. **设定行列**  
用 `grid-template-columns` 定义列，`grid-template-rows` 定义行：
```css
/* 3列（宽200px、剩余空间、200px），2行（高100px、自适应内容） */
.grid-container {
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 100px auto;
}
```

3. **常用功能**  
- 用 `grid-template-areas` 给区域命名，规划复杂布局  
- 用 `justify-items`/`align-items` 调整项目在单元格内的对齐方式  
- 用 `grid-column`/`grid-row` 控制项目跨几列/几行
