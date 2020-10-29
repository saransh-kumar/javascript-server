import { Request, Response, NextFunction } from 'express';
// import IError from './ierror';

export default (err, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    res.status(err.code).json(
    {
        error: err.error,
        status: err.code,
        message: err.message || 'Error',
        timestamp: new Date(),
    });
}