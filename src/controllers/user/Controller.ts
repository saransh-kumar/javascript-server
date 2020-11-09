import {userModel}  from '../../repositories/user/UserModel';
import { UserRepository } from './index';
import * as jwt from 'jsonwebtoken';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    get(req, res, next) {
        try {
            console.log('Inside get method Trainee Controller');
            res.send({
                message: 'Get message Successful',
                data: [
                    {
                        name: 'Get Trainee ',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }

    login(req, res) {
        try {
            console.log('I am in login route');
            const {email,password} = req.body;
            userModel.findOne({email: email, password:password}, (err, docs) => {
                if (err) {
                    console.log(err);
                }
                else {
                    if( docs === null){
                        res.send({
                            message: 'Invalid user',
                            data: {
                                email: req.body.email,
                                password: req.body.password
                            }
                        });
                    }
                    else{
                        console.log('Existing user is:', docs);
                        const token = jwt.sign({docs}, 'qwertyuiopasdfghjklzxcvbnm123456');
                        res.send({
                            Data: token,
                            Message: 'User Exists',
                            status: 200
                        });
                    }
                }
            })
        } catch (err) {
            res.send(err);
        }
    }

    post(req, res, next) {
        try {
            console.log('Inside User post method Trainee Controller');
            const userRepository: UserRepository = new UserRepository();
            console.log('Data sending in progress');
            userRepository.create({ name: 'Saransh', role: 'trainee', email: 'sarash.kumar@succesive.tech', password: 'Whats up!!!'});
            res.send({
                message: 'Post message Successful',
                data: [
                    {
                        name: 'Post Trainee123',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }

    put(req, res, next) {
        try {
            console.log('Inside put method Trainee Controller');
            res.send({
                message: 'Put message Successful',
                data: [
                    {
                        name: 'Trainee123',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }

    delete(req, res, next) {
        try {
            console.log('Inside delete method Trainee Controller');
            res.send({
                message: 'delete message Successful',
                data: [
                    {
                        name: 'Trainee123',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
}

export default UserController.getInstance();