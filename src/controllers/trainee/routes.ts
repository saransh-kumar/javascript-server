import { Router } from 'express';

import traineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = Router();

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
traineeRouter.route('/')
    /**
     * @swagger
     *
     * /api/trainee:
     *   get:
     *     description: List of all the trainees
     *     security:
     *       - Bearer: []
     *     tags:
     *       - Trainee
     *     consumes:
     *       - application/json
     *     produces:
     *        - application/json
     *     parameters:
     *       - name: skip
     *         description: Number of elements to skip
     *         in: query
     *         required: false
     *         type: number
     *       - name: limit
     *         description: number of elements to show
     *         in: query
     *         required: false
     *         type: number
     *       - name: sort
     *         description: Parameter to sort (name or email)
     *         in: query
     *         required: false
     *         type: string
     *       - name: search
     *         description: Element to search
     *         in: query
     *         required: false
     *         type: string
     *     responses:
     *       200:
     *         description: Trainee List
     *         schema:
     *              properties:
     *                  status:
     *                      example: OK
     *                  message:
     *                      example: 'successfully fetched Trainee'
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
    .get(traineeController.get) //  authMiddleWare('getUsers', 'read'), validationHandler(config.get),
    /**
     * @swagger
     *
     * /api/trainee:
     *   post:
     *     description: Create trainee data
     *     security:
     *       - Bearer: []
     *     tags:
     *       - Trainee
     *     consumes:
     *       - application/json
     *     produces:
     *        - application/json
     *     parameters:
     *       - name: body
     *         description: provide name, role, email, password
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
     */
    .post(traineeController.create) // authMiddleWare('getUsers', 'read'), validationHandler(config.create),
    /**
     * @swagger
     *
     * /api/trainee:
     *   put:
     *     description: Update trainee data
     *     security:
     *       - Bearer: []
     *     tags:
     *       - Trainee
     *     consumes:
     *       - application/json
     *     produces:
     *        - application/json
     *     parameters:
     *       - name: body
     *         description: update name, role, email, password
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
     */
    .put(traineeController.update) // authMiddleWare('getUsers', 'read'), validationHandler(config.update),
    /**
     * @swagger
     *
     * /api/trainee:
     *   delete:
     *     description: Delete trainee data
     *     security:
     *       - Bearer: []
     *     tags:
     *       - Trainee
     *     consumes:
     *       - application/json
     *     produces:
     *        - application/json
     *     parameters:
     *       - name: body
     *         description: Delete data
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
     */
    .delete(traineeController.delete); // authMiddleWare('getUsers', 'read'), validationHandler(config.delete),

export default traineeRouter;