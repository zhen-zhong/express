import { Request, Response, NextFunction } from 'express';

export const responseMiddleware = (req: Request, res: Response, next: NextFunction): void => {
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


