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
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'community-guidelines.html'));
});

// 处理spotting-scammers路由（支持连字符和下划线两种格式）
app.get('/spotting-scammers', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'spotting-scammers.html'));
});

app.get('/spotting_scammers', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'spotting-scammers.html'));
});

// 处理meeting-safely路由（支持连字符和下划线两种格式）
app.get('/meeting-safely', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'meeting-safely.html'));
});

app.get('/meeting_safely', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'meeting-safely.html'));
});

// 处理taking-action路由（支持连字符和下划线两种格式）
app.get('/taking-action', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'taking-action.html'));
});

app.get('/taking_action', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'taking-action.html'));
});

// 处理happens-report路由（支持连字符和下划线两种格式）
app.get('/happens-report', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'happens-report.html'));
});

app.get('/happens_report', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'happens-report.html'));
});

// 处理verification路由（支持连字符和下划线两种格式）
app.get('/verification', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'verification.html'));
});

// 处理safety-tools路由（支持连字符和下划线两种格式）
app.get('/safety-tools', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'safety-tools.html'));
});

app.get('/safety_tools', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'safety-tools.html'));
});

// 处理staying-safe-online路由（支持连字符和下划线两种格式）
app.get('/staying-safe-online', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'staying-safe-online.html'));
});

app.get('/staying_safe_online', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'staying-safe-online.html'));
});

// 处理terms-of-use路由（支持连字符和下划线两种格式）
app.get('/terms-of-use', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'terms-of-use.html'));
});

app.get('/terms_of_use', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'terms-of-use.html'));
});

// 处理privacy-policy路由（支持连字符和下划线两种格式）
app.get('/privacy-policy', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'privacy-policy.html'));
});

app.get('/privacy_policy', (req, res) => {
  // 设置缓存控制头，强制刷新缓存
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, 'privacy-policy.html'));
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