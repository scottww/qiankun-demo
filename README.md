# qiankun-demo

这是一个基于 Vue 2 和 qiankun 实现的微前端示例项目，包含主应用（main-app）和子应用（user-app），支持主子应用独立启动和联合运行。

NODE v18.20.4

## 目录结构

qiankun-demo/  
├── main-app/   # 主应用  
└── user-app/   # 子应用  


## 环境要求

- Node.js >= 16
- npm >= 8
- Vue CLI 5.x
- 主应用和子应用均基于 Vue 2
- 子应用端口和主应用端口建议不冲突

## 运行说明

### 1. 安装依赖

分别进入主应用和子应用目录安装依赖：

```bash
cd main-app
npm install

cd ../user-app
npm install
```

### 2. 修改端口配置（可选）  

如果需要修改启动端口，请在对应目录下编辑 vue.config.js：

```js
module.exports = {
  devServer: {
    port: 7100, // 主应用端口
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  publicPath: '//localhost:7100/',
};
```

子应用类似，端口配置不要和主应用冲突。

### 3. 启动子应用

```bash
cd user-app
npm run serve
```
默认启动端口如 7101，访问 http://localhost:7101 能看到子应用页面。

### 4. 启动主应用

```bash
cd ../user-app
npm run serve
```
默认启动端口如 7100，访问 http://localhost:7100。

### 5. 访问微前端示例

打开主应用页面，点击导航中的“Go to User App”，即可加载并显示子应用内容。

### 关键配置
### 子应用必须导出 qiankun 生命周期函数

```js
export async function bootstrap() { /*...*/ }
export async function mount(props) { /*...*/ }
export async function unmount() { /*...*/ }
```
详情参考 user-app/src/main.js

### qiankun 注册子应用配置示例（主应用中）

```js
registerMicroApps([
  {
    name: 'user-app',
    entry: '//localhost:7101',
    container: '#subapp-viewport',
    activeRule: '/user',
  },
]);
```

### 常见问题

1.子应用无法加载，报错 ***Failed to fetch***

- 检查子应用是否启动且端口正确

- 确认主应用 entry 地址和子应用端口一致

- 检查子应用 vue.config.js 中是否配置了 publicPath 和允许跨域的 headers

2.报错 ***[qiankun]: You need to export lifecycle functions in user-app entry***

- 确保子应用入口文件正确导出了 bootstrap、mount、unmount 三个异步函数

3.端口冲突问题

- 主应用和子应用端口需不冲突

- 修改对应的 vue.config.js 中 devServer.port

### 参考资料

- [qiankun 官方文档](https://qiankun.umijs.org/)

- [Vue CLI 官方文档](https://cli.vuejs.org/)

### 联系方式

有问题欢迎 Issues 或联系作者。