import { Router } from 'express';

import userController from './Controller';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const userRouter = Router();

userRouter.route('/')
    .get(userController.get)   // authMiddleWare('getUser', 'read'), validationHandler(validation.get), userController.get
    .post(userController.create)  // authMiddleWare('getUser', 'read'), validationHandler(validation.createc), userController.create
    .put(userController.update) // authMiddleWare('getUsers', 'read'), validationHandler(validation.update), userController.update
    .delete(userController.delete);  // authMiddleWare('getUsers', 'read'), validationHandler(validation.delete), userController.delete
userRouter.route('/login')
    .post( userController.login );
userRouter.route('/me')
    .get( userController.me );



export default userRouter;