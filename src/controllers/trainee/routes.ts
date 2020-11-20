import { Router } from 'express';

import traineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';
// import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = Router();

traineeRouter.route('/')
    .get(validationHandler(config.get))
    .post(validationHandler(config.create))
    .put(validationHandler(config.update), traineeController.put)
    .delete(validationHandler(config.delete), traineeController.delete);

export default traineeRouter;