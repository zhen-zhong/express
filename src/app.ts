// Express 应用主文件
import express from 'express';
import dotenv from 'dotenv';
import { responseMiddleware } from './middleware/responseMiddleware';
import router from './routes';  // 引入路由

// 加载 .env 文件中的环境变量
dotenv.config();

// 创建 Express 应用
const app = express();

// 使用 JSON 中间件来解析 JSON 请求体
app.use(express.json());

// 使用自定义的响应中间件
app.use(responseMiddleware);

// 挂载路由
app.use(router);

export default app;
