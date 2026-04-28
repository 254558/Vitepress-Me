# Canvas 常用方法

## 一、基础：获取画布 & 上下文
所有绘制操作都必须先做这一步：
```html
<canvas id="myCanvas" width="400" height="300"></canvas>
```
```javascript
// 1. 获取 canvas 元素
const canvas = document.getElementById('myCanvas');
// 2. 获取 2D 绘图上下文（核心对象）
const ctx = canvas.getContext('2d');
```

---

## 二、样式设置（颜色、线条、字体）
### 1. 颜色与填充
```javascript
ctx.fillStyle = 'red';        // 填充颜色（支持颜色名、十六进制、rgb、rgba）
ctx.strokeStyle = '#000';     // 描边颜色
ctx.globalAlpha = 0.8;        // 全局透明度 0~1
```

### 2. 线条样式
```javascript
ctx.lineWidth = 5;            // 线条宽度
ctx.lineCap = 'round';         // 线条端点：round(圆) / square(方) / butt(平)
ctx.lineJoin = 'round';        // 线条拐角：round / bevel / miter
```

### 3. 文字样式
```javascript
ctx.font = '20px Arial';       // 字体大小+字体
ctx.textAlign = 'center';     // 文字水平对齐
ctx.textBaseline = 'middle';  // 文字垂直对齐
```

---

## 三、图形绘制（矩形、圆形、路径）
### 1. 矩形（最简单）
```javascript
ctx.fillRect(x, y, width, height);   // 填充矩形
ctx.strokeRect(x, y, width, height); // 描边矩形
ctx.clearRect(x, y, width, height);  // 清除矩形区域（清屏）
```

### 2. 圆形 / 圆弧
```javascript
// 画圆：arc(x圆心, y圆心, 半径, 起始角度, 结束角度, 逆时针)
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();   // 填充圆
ctx.stroke(); // 描边圆
```

### 3. 自定义路径（线条、多边形）
**固定四步：**
```javascript
ctx.beginPath();           // 开始新路径（必须写！）
ctx.moveTo(50, 50);        // 起点（抬笔移动）
ctx.lineTo(200, 50);       // 画线到目标点
ctx.lineTo(200, 200);
ctx.closePath();           // 闭合路径（回到起点）
ctx.stroke();              // 描边
// ctx.fill();             // 填充
```

---

## 四、文字绘制
```javascript
ctx.fillText('你好 Canvas', x, y);   // 实心文字
ctx.strokeText('空心文字', x, y);    // 空心文字

// 获取文字宽度（常用）
const width = ctx.measureText('文本').width;
```

---

## 五、图片绘制
```javascript
// 1. 先创建图片对象
const img = new Image();
img.src = '图片地址';

// 2. 图片加载完成后绘制
img.onload = function() {
  // drawImage(图片, x, y, 宽, 高)
  ctx.drawImage(img, 0, 0, 200, 150);
};
```

---

## 六、画布变换（位移、旋转、缩放）
```javascript
ctx.translate(x, y);       // 位移画布原点
ctx.rotate(弧度);          // 旋转画布
ctx.scale(倍数x, 倍数y);    // 缩放画布

// 保存 / 恢复状态（防止样式污染）
ctx.save();    // 保存当前样式、变换
ctx.restore(); // 恢复到上一次 save 的状态
```

---

## 七、动画必备方法
```javascript
// 清屏（动画每一帧都要清）
ctx.clearRect(0, 0, canvas.width, canvas.height);

// 循环执行（流畅动画）
function animate() {
  requestAnimationFrame(animate);
  // 1. 清屏
  // 2. 绘制新画面
}
animate();
```

---

## 八、常用工具方法
```javascript
ctx.toDataURL('image/png');  // 把画布转成图片链接（下载/保存）
ctx.isPointInPath(x, y);     // 判断坐标是否在路径内（点击检测）
```

---

### 总结
1. **核心**：`getContext('2d')` 获取上下文，所有绘制都靠它
2. **必记**：`beginPath()` 开始路径、`stroke()`/`fill()` 渲染
3. **动画**：`clearRect()` 清屏 + `requestAnimationFrame` 循环
4. **实用**：矩形、圆形、文字、图片是最常用的 4 种绘制