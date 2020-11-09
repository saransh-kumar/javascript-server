import { Router } from 'express';

import userController from './Controller';
// import validationHandler from '../../libs/routes/validationHandler';
// import config from './validation';
// import validation from './validation';
// import authMiddleWare from '../../libs/routes/authMiddleWare';

const userRouter = Router();

userRouter.route('/')
    .get(userController.login, userController.get)                 // validationHandler(config.get), 
    .post(userController.post)              // validationHandler(config.create), 
    .put(userController.put)               // validationHandler(config.update), 
    .delete(userController.delete);       // validationHandler(config.delete), 
    
export default userRouter;