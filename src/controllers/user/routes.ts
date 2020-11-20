import { Router } from 'express';

import userController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const userRouter = Router();

userRouter.route('/')
    .get(userController.get)                                       // authMiddleWare('getUser', 'read'), validationHandler(validation.get),
    .post(userController.create)                                  // authMiddleWare('getUser', 'read'), validationHandler(validation.create),
    .put( userController.update)                                 // authMiddleWare('getUser', 'read'), validationHandler(validation.update),
    .delete(userController.delete);                             // authMiddleWare('getUser', 'read'), validationHandler(validation.delete),
userRouter.route('/login')
    .post(userController.login);
userRouter.route('/me')
    .get(authMiddleWare('getUsers', 'read'), userController.me);



export default userRouter;