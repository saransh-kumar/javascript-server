import { userModel }  from '../../repositories/user/UserModel';
import { UserRepository } from './index';
import * as jwt from 'jsonwebtoken';
import { config } from '../../config';
import * as bcrypt from 'bcrypt';

class UserController {
    public userRepository: UserRepository; // = new UserRepository();
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }


    async login(req, res) {
        try {
            const { email , password } = req.body;
            console.log(email, password);
            userModel.findOne({ email: (email) }, (err, docs) => {
                    if (bcrypt.compareSync(password, docs.password)) {
                        console.log('Existing user is:', docs);
                        const token = jwt.sign({docs}, config.SECRET_KEY, { expiresIn: '15m' });
                        res.send({
                            status: 'ok',
                            message: 'Authorization Token',
                            data: token
                        });
                    }
                    else {
                        res.send({
                                status: 'Error',
                                message: 'Invalid User',
                                data: {
                                    email: req.body.email,
                                    password: req.body.password
                                }
                            });
                    }
            });
        } catch (err) {
            res.send({
                status: 'Error',
                message: 'Invalid Toke ',
                data: {
                    email: req.body.email,
                    password: req.body.password
                }
            });
        }
    }

    async me(req, res, next) {
        try {
            const token = req.headers.authorization;
            console.log(token);
            const decorderUser = jwt.verify(token, config.SECRET_KEY);
            const email = decorderUser.docs.email;
            console.log(token, email);
            userModel.findOne({ email: (email) }, (err, docs) => {
                res.send({
                    status: 'ok',
                    message: 'Me',
                    data: { docs }
                    });
        });
    }
        catch (err) {
            res.send({
                status: 'Error',
                message: 'Invalid Toke ',
                data: {
                    email: req.body.email,
                    password: req.body.password
                }
            });
        }
    }
}
export default UserController.getInstance();