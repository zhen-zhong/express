import 'express';

declare module 'express' {
    export interface Response {
        sendResponse: (data: any, message?: string, code?: number) => void;
        sendError: (message: string, code?: number) => void;
    }
}