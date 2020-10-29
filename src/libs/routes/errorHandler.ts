import { Request, Response, NextFunction } from 'express';
// import IError from './ierror';

export default (err, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
<<<<<<< Updated upstream
    res.json({
=======
    res.status(err.code).json(
    {
>>>>>>> Stashed changes
        error: err.error,
        status: err.code,
        message: err.message || 'Error',
        timestamp: new Date(),
    });
}