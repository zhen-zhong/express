import { Request, Response } from 'express';
import pool from '../../db';
import { hashPassword } from '../../utils/passwordUtils';
import { RowDataPacket } from 'mysql2'; // 确保你使用了正确的类型

export const register = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    // 检查必填字段
    if (!username || !password) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }

    try {
        // 检查用户名是否已存在
        // const [rows]: [RowDataPacket[]] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        // if (rows.length > 0) {
        //     res.status(400).json({ message: 'Username already exists' });
        //     return;
        // }

        // 加密密码并存储用户信息
        const hashedPassword = await hashPassword(password);
        await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

        // 成功响应
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        // 错误处理
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Error registering user', error });
    }
};
