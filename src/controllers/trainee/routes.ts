import { Router } from 'express';

import traineeController from './Controller';
import { validationHandler } from '../../libs/routes/validationHandler';
import config from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = Router();

traineeRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), traineeController.get)
    .post(authMiddleWare('getUsers', 'read'), validationHandler(config.create), traineeController.post)
    .put(authMiddleWare('getUsers', 'read'), validationHandler(config.update), traineeController.put)
    .delete(authMiddleWare('getUsers', 'read'), validationHandler(config.delete), traineeController.delete);

export default traineeRouter;