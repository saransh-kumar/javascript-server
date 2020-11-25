import { Router } from 'express';

import traineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = Router();

traineeRouter.route('/')
    .get(traineeController.get) //  authMiddleWare('getUsers', 'read'), validationHandler(config.get),
    .post(traineeController.create) // authMiddleWare('getUsers', 'read'), validationHandler(config.create),
    .put(traineeController.update) // authMiddleWare('getUsers', 'read'), validationHandler(config.update),
    .delete(traineeController.delete); // authMiddleWare('getUsers', 'read'), validationHandler(config.delete),

export default traineeRouter;