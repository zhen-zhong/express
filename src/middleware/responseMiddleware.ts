import { Request, Response, NextFunction } from 'express';

// 扩展 Response 接口
interface CustomResponse extends Response {
    sendResponse: (data?: any, message?: string, code?: number) => void;
    sendError: (message?: string, code?: number) => void;
}

export const responseMiddleware = (req: Request, res: CustomResponse, next: NextFunction): void => {
    res.sendResponse = (data: any = null, message: string = 'Success', code: number = 200): void => {
        res.status(code).json({
            code,
            data,
            message
        });
    };

    res.sendError = (message: string = 'Error', code: number = 500): void => {
        res.status(code).json({
            code,
            data: null,
            message
        });
    };

    next();
};
