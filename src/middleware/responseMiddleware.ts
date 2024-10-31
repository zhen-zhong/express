import { Request, Response, NextFunction } from 'express';

// 扩展 Response 接口
interface CustomResponse extends Response {
    sendResponse: (data?: any, message?: string, code?: number) => void;
    sendError: (message?: string, code?: number) => void;
}

export const responseMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const customRes = res as CustomResponse; // 使用类型断言

    customRes.sendResponse = (data = null, message = 'Success', code = 200) => {
        customRes.status(code).json({
            code,
            data,
            message,
        });
    };

    customRes.sendError = (message = 'Error', code = 500) => {
        customRes.status(code).json({
            code,
            data: null,
            message,
        });
    };

    next();
};