# Flex 布局

Flex 布局（弹性布局）是 CSS 中用于创建灵活响应式布局的模型，通过给容器设置 `display: flex` 启用。

## 核心概念
- **容器（Container）**：设置了 `display: flex` 的父元素
- **项目（Items）**：容器内的直接子元素，会自动成为弹性项

## 容器属性
- `flex-direction`：主轴方向（`row` 行/`column` 列）
- `justify-content`：主轴对齐方式（`flex-start`/`center`/`space-between` 等）
- `align-items`：交叉轴对齐方式（`flex-start`/`center`/`stretch` 等）
- `flex-wrap`：是否换行（`nowrap` 不换行/`wrap` 换行）
- `gap`：项目之间的间距

## 项目属性
- `flex`：缩写属性，控制项目伸缩能力（包含 `flex-grow`/`flex-shrink`/`flex-basis`）
- `align-self`：单个项目的交叉轴对齐方式（可覆盖容器的 `align-items`）
- `order`：项目排列顺序（数值越小越靠前）

## 示例
```css
.container {
  display: flex;
  justify-content: center; /* 主轴居中对齐 */
  align-items: center;     /* 交叉轴居中对齐 */
  gap: 10px;               /* 项目间间距 */
}

.item {
  flex: 1; /* 项目平均分配容器剩余空间 */
}
```