import { Router } from 'express';
import userRouter from './controllers/user/routes';
import { traineeRouter } from './controllers';

const mainRouter = Router();

mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/user', userRouter);

export default mainRouter;