import { Request, Response, NextFunction } from 'express';
import httpContext from 'express-http-context';
import { generateUUID } from '../common/util';

export const requestId = (req: Request, res: Response, next: NextFunction) => {
    let reqId = req.headers['request-id'];
    if (!reqId) {
        reqId = generateUUID();
    }
    httpContext.set('request-id', reqId);
    next();
}