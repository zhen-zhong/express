import { Request, Response, RequestHandler } from 'express';
import pool from '../../db';  // 引入数据库连接池

interface CustomResponse extends Response {
    sendResponse: (data?: any, message?: string, code?: number) => void;
    sendError: (message?: string, code?: number) => void;
}

// http://localhost:3000/api/v1/user/login
export const login: RequestHandler = async (req, res) => {

    const customRes = res as CustomResponse;

    const { phone, email, password } = req.body;

    if (!password || (!phone && !email)) return customRes.sendError('请提供手机号或邮箱，以及密码', 400);

    try {
        let query = '';
        let params: (string | number)[] = [password];

        if (email) {
            query = 'SELECT * FROM users WHERE email = ? AND password = ?';
            params = [email, password];
        } else if (phone) {
            query = 'SELECT * FROM users WHERE phone = ? AND password = ?';
            params = [phone, password];
        } else {
            return customRes.sendError('用户信息或密码错误', 401);
        }

        const [rows]: any = await pool.execute(query, params);

        if ((rows as any[]).length === 0) {
            res.status(401).json({ error: '用户信息或密码错误' });
            return;
        }

        // 登录成功
        return customRes.sendResponse(rows[0], '登录成功');

    } catch (error) {
        console.error('数据库查询错误:', error);
        return customRes.sendError('服务器内部错误', 500);
    }
};
