# Hottea - 让生活更有温度

一个现代化的移动应用推广网站，采用响应式设计，完美适配各种设备。

## 项目特色

- 🎨 现代简约的设计风格
- 📱 完全响应式布局
- ⚡ 纯静态网站，加载速度快
- 🔥 Firebase App Hosting 部署就绪
- 🎯 SEO 友好
- ♿ 无障碍访问支持

## 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代CSS特性，包括Grid、Flexbox、CSS变量
- **JavaScript** - 原生JS，无框架依赖
- **Firebase Hosting** - 静态网站托管

## 项目结构

```
teaOnHim_web/
├── public/                 # 网站根目录
│   ├── index.html         # 主页面
│   ├── css/
│   │   └── style.css      # 样式文件
│   ├── js/
│   │   └── main.js        # 交互脚本
│   └── images/            # 图片资源
├── firebase.json          # Firebase配置
├── .firebaserc           # Firebase项目配置
└── README.md             # 项目说明
```

## 功能特性

### 页面sections
1. **Hero Section** - 主视觉区域，包含产品介绍和CTA
2. **Features Section** - 核心功能展示
3. **Screenshots Section** - 应用截图展示
4. **Download Section** - 下载链接和二维码
5. **Footer** - 页脚信息和链接

### 交互功能
- 平滑滚动导航
- 响应式导航栏
- 元素进入视口动画
- 悬停效果
- 移动端适配

## 部署说明

### Firebase Hosting 部署

1. 确保已安装 Firebase CLI：
   ```bash
   npm install -g firebase-tools
   ```

2. 登录 Firebase：
   ```bash
   firebase login
   ```

3. 部署到 Firebase Hosting：
   ```bash
   firebase deploy
   ```

### 本地预览

使用任何静态文件服务器都可以预览网站，例如：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js
npx serve public

# 使用 Firebase CLI
firebase serve
```

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)
- 移动端浏览器

## 自定义说明

### 颜色主题
在 `css/style.css` 文件的 `:root` 选择器中修改CSS变量：

```css
:root {
  --primary-color: #ff6b6b;    /* 主色调 */
  --secondary-color: #4ecdc4;  /* 辅助色 */
  --accent-color: #45b7d1;     /* 强调色 */
  /* ... 其他颜色变量 */
}
```

### 内容修改
- 修改 `index.html` 中的文本内容
- 替换 `images/` 目录中的图片资源
- 更新应用商店链接

## 性能优化

- 使用了 CSS Grid 和 Flexbox 进行高效布局
- 图片懒加载（可选）
- CSS 和 JS 文件压缩（生产环境）
- 使用了现代字体加载策略

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过以下方式联系：
- 邮箱: [your-email@example.com]
- GitHub: [your-github-username]