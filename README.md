- 安装依赖

```bash
cd vue-medo-admin

pnpm install

```

- 运行

```bash
pnpm serve
```

- 打包

```bash
pnpm build
```

- docker

### dockerFile 位于项目根目录下 并且支持差异化部署

#### 构建镜像

```bash
docker build -t vue-vben-admin .
```

#### 动态使用环境变量实现容器差异化部署,通过不同的 VG_BASE_URL 环境变量，指向不同的后端服务地址，下面例子使用 http://localhost:3333 作为后端服务地址，并且将容器映射到 6666 端口

```bash
docker run --name vue-vben-admin -d -p 6666:80  -e VG_BASE_URL=http://localhost:3333 vue-vben-admin
```
