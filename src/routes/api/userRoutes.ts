import express from 'express';
import { register } from '../../controllers/users/register';
import { login } from '../../controllers/users/login';
import { changePassword } from '../../controllers/users/changePassword';

const router = express.Router();

// 用户注册
router.post('/register', register);

// 用户登录
router.post('/login', login);

// 更改密码
router.post('/change-password', changePassword);

export default router;
