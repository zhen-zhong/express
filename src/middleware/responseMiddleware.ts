import { Request, Response, NextFunction } from 'express';

// 扩展 Response 接口
interface CustomResponse extends Response {
    sendResponse: (options: { data?: any; message?: string; code?: number }) => void;
    sendError: (options: { message?: string; code?: number }) => void;
}

export const responseMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const customRes = res as CustomResponse; // 使用类型断言

    // 定义 sendResponse 方法，使用对象作为参数
    customRes.sendResponse = ({ data = null, message = 'Success', code = 200 }) => {
        customRes.status(code).json({
            code,
            data,
            message,
        });
    };

    // 定义 sendError 方法，使用对象作为参数
    customRes.sendError = ({ message = 'Error', code = 500 }) => {
        customRes.status(code).json({
            code,
            data: null,
            message,
        });
    };

    next();
};
