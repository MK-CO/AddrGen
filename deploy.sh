#!/bin/bash

# 配置服务器信息
SERVER_IP="172.245.62.112"
SERVER_USER="root"
SERVER_PASSWORD="pbf05SV7l90XurFQ9S"
PROJECT_NAME="addrgen"
REMOTE_DIR="/opt/${PROJECT_NAME}"
PORT="8110"

echo "开始部署 AddressGen 项目到服务器 ${SERVER_IP}:${PORT}"

# 检查是否安装了sshpass
if ! command -v sshpass &> /dev/null; then
    echo "正在安装 sshpass..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install hudochenkov/sshpass/sshpass
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt-get update && sudo apt-get install -y sshpass
    fi
fi

# 创建项目压缩包
echo "创建项目压缩包..."
tar -czf ${PROJECT_NAME}.tar.gz --exclude='.git' --exclude='node_modules' --exclude='*.tar.gz' .

# 复制文件到服务器
echo "复制文件到服务器..."
sshpass -p "${SERVER_PASSWORD}" scp -o StrictHostKeyChecking=no ${PROJECT_NAME}.tar.gz ${SERVER_USER}@${SERVER_IP}:/tmp/

# 在服务器上执行部署命令
echo "在服务器上执行部署..."
sshpass -p "${SERVER_PASSWORD}" ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << EOF
    # 停止现有容器
    echo "停止现有容器..."
    docker-compose -f ${REMOTE_DIR}/docker-compose.yml down 2>/dev/null || true
    docker container stop addrgen-frontend 2>/dev/null || true
    docker container rm addrgen-frontend 2>/dev/null || true

    # 创建项目目录
    mkdir -p ${REMOTE_DIR}
    
    # 解压项目文件
    echo "解压项目文件..."
    cd ${REMOTE_DIR}
    tar -xzf /tmp/${PROJECT_NAME}.tar.gz
    rm /tmp/${PROJECT_NAME}.tar.gz

    # 安装Docker和Docker Compose（如果未安装）
    if ! command -v docker &> /dev/null; then
        echo "安装Docker..."
        curl -fsSL https://get.docker.com -o get-docker.sh
        sh get-docker.sh
        systemctl start docker
        systemctl enable docker
    fi

    if ! command -v docker-compose &> /dev/null; then
        echo "安装Docker Compose..."
        curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        chmod +x /usr/local/bin/docker-compose
    fi

    # 构建并启动容器
    echo "构建并启动Docker容器..."
    docker-compose up -d --build

    # 检查容器状态
    echo "检查容器状态..."
    docker-compose ps

    # 检查端口是否监听
    echo "检查端口 ${PORT} 是否可用..."
    netstat -tlnp | grep :${PORT} || echo "端口 ${PORT} 未监听，请检查容器状态"

    echo "部署完成！"
    echo "项目已部署到: http://${SERVER_IP}:${PORT}"
EOF

# 清理本地临时文件
rm -f ${PROJECT_NAME}.tar.gz

echo "部署脚本执行完成！"
echo "您可以通过以下地址访问您的应用: http://${SERVER_IP}:${PORT}" 