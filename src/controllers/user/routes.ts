import { Router } from 'express';

import userController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const userRouter = Router();

userRouter.route('/login')
    .post( userController.login );
userRouter.route('/me')
    .get( userController.me );



export default userRouter;