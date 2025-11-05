#!/bin/bash
set -e

echo "Starting TeaNote website..."
echo "Node.js version: $(node --version)"
echo "NPM version: $(npm --version)"

# 安装依赖（如果需要）
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# 启动应用
echo "Starting application on port ${PORT:-8080}..."
exec node index.js