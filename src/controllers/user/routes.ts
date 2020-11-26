import { Router } from 'express';

import userController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';


/**
 * @swagger
 *
 *  definitions:
 *      TraineePost:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              example: sharma@successive.tech
 *          name:
 *              type: string
 *              example: sharma
 *          password:
 *              type: string
 *              example: 1234
 *          role:
 *               type: string
 *               example: trainee
 *      TraineeResponse:
 *        type: object
 *        properties:
 *          _id:
 *              example: 5e4a36bc64824b1f80b730cd
 *          email:
 *              type: string
 *              example: sharma@successive.tech
 *          name:
 *              type: string
 *              example: sharma
 *          role:
 *              type: string
 *              example: trainee
 *          originalId:
 *              example: 5e4a36bc64824b1f80b666cd
 *          createdAt:
 *              example: 2020-02-20T11:06:29.125Z
 *          v:
 *              example:444
 *      Unauthorized:
 *        type: object
 *        properties:
 *          error:
 *              example: Unauthorized
 *          message:
 *              example: Token not found
 *          status:
 *              example: 403
 *          timestamp:
 *               example: 2020-11-25T17:34:37.066Z
 *
 */
const userRouter = Router();
    /**
     * @swagger
     *
     * /api/user/login:
     *   post:
     *     description: Login Credential
     *     security:
     *       - Bearer: []
     *     tags:
     *       - User
     *     consumes:
     *       - application/json
     *     produces:
     *        - application/json
     *     parameters:
     *       - name: body
     *         description: provide email and password
     *         in: body
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Trainee List
     *         schema:
     *              properties:
     *                  status:
     *                      example: OK
     *                  message:
     *                      example: 'Successfully fetched Trainee'
     *                  TotalCount:
     *                      example: 5
     *                  TraineeCount:
     *                      example: 2
     *                  data:
     *                      type: object
     *                      allOf:
     *                              - $ref: '#/definitions/TraineeResponse'
     *       403:
     *         description: unauthorised access
     *         schema:
     *              $ref: '#/definitions/Unauthorized'
     *
     */
    userRouter.route('/login')
        .post( userController.login );
    /**
     * @swagger
     *
     * /api/user/me:
     *   get:
     *     description: Authorised User
     *     security:
     *       - Bearer: []
     *     tags:
     *       - User
     *     consumes:
     *       - application/json
     *     produces:
     *        - application/json
     *     parameters:
     *       - name: authorization
     *         description: Provide token
     *         in: headers
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Trainee List
     *         schema:
     *              properties:
     *                  status:
     *                      example: OK
     *                  message:
     *                      example: 'Successfully fetched Trainee'
     *                  TotalCount:
     *                      example: 5
     *                  TraineeCount:
     *                      example: 2
     *                  data:
     *                      type: object
     *                      allOf:
     *                              - $ref: '#/definitions/TraineeResponse'
     *       403:
     *         description: unauthorised access
     *         schema:
     *              $ref: '#/definitions/Unauthorized'
     */
    userRouter.route('/me')
    .get( userController.me );



export default userRouter;