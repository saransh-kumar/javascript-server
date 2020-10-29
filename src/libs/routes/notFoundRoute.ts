import { Request, Response, NextFunction } from 'express';
import IError from './ierror';

export default (req: Request, res: Response, next: NextFunction) => {
    next({
        error: 'Not Found',
        code: 404,
    });
};
