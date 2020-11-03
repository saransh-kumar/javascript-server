import { Router } from 'express';

import traineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';
// import validation from './validation';

const traineeRouter = Router();

traineeRouter.route('/')
    .get(validationHandler(config.get), traineeController.get)
    .post(validationHandler(config.create), traineeController.post)
    .put(validationHandler(config.update), traineeController.put)
    .delete(validationHandler(config.delete), traineeController.delete);

export default traineeRouter;