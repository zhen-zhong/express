// index.ts入口文件
import app from './app';  // 引入已经配置好的 Express 应用

// 从环境变量中获取端口号，默认是 3000
const port = process.env.PORT || 3000;

// 启动服务器并监听指定端口
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
