import express from 'express';
import userRoutes from './api/userRoutes'; // 导入用户路由
import businessRoutes from './api/businessRoutes'; //导入业务路由   

const router = express.Router();

// 动态前缀，可用于版本管理
const apiVersion = process.env.API_VERSION || 'v1'; 

// 挂载用户的路由
router.use(`/api/${apiVersion}/user`, userRoutes);

// 挂载业务的路由
router.use(`/api/${apiVersion}/business`, businessRoutes);

export default router;
