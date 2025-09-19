const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 处理所有路由，返回index.html（SPA支持）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Hottea website is running on port ${PORT}`);
});

module.exports = app;