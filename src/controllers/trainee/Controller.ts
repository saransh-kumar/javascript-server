import { UserRepository } from './index';

import { Request, Response, NextFunction } from 'express';


class TraineeController {
    static instance: TraineeController;

    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }




    async get(req, res) {
        try {
            const userRepository = new UserRepository();
            const regex = /\S+@\S+\.\S+/;
            let sort = {};
            sort[`${req.query.sortedBy}`] = req.query.sortedOrder;
            if (req.query.sortedBy === undefined) {
                const def = {};
                def[`createdAt`] = -1;
                sort = def;
            }
            let searchedData;
            if (req.query.search !== undefined) {
                searchedData = regex.test(String(req.query.search)) ? { email: req.query.search } : { name: req.query.search };
            }
            const extractedData = await userRepository.getAll(searchedData).sort(sort).skip(Number(req.query.skip)).limit(Number(req.query.limit));
            res.status(200).send({
                status: 'ok',
                message: 'Successfully fetched Trainees',
                data: {
                    count: extractedData.length,
                    totalCount: await userRepository.count(req.body),
                    records: extractedData
                }
            });
        } catch (err) {
            console.log('error: ', err);
        }
    }


    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const userRepository = new UserRepository();
            userRepository.userCreate(req.body);
            res.status(200).send({
                status: 'ok',
                message: 'Trainee Created Successfully',
                data: req.body,
            });
        } catch (err) {
            console.log('error: ', err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const userRepository = new UserRepository();
            userRepository.userUpdate(req.body);
            res.status(200).send({
                status: 'ok',
                message: 'Trainee Updated Successfully',
                data: {id: req.body.originalId}
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const userRepository = new UserRepository();
            console.log(req.body);
            userRepository.delete(req.body);
            res.status(200).send({
                status: 'ok',
                message: 'Trainee Deleted Successfully',
                data: {id: req.body.originalId}
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
}

export default TraineeController.getInstance();