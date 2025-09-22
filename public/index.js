const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// 设置静态文件目录 - 现在所有文件都在当前目录
app.use(express.static(__dirname));

// 健康检查端点
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 处理特定路由
app.get('/community-guidelines', (req, res) => {
  res.sendFile(path.join(__dirname, 'community-guidelines.html'));
});

// 处理根路径和其他路由，返回index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 处理其他未匹配的路由，返回index.html（SPA支持）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Hottea website is running on port ${PORT}`);
});

module.exports = app;