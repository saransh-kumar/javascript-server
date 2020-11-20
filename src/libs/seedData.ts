import { userModel } from '../repositories/user/UserModel';
import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import { config } from '../config';

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(config.PASSWORD, salt);

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then((res) => {
            if (res === 0) {
                console.log('Inserting Data...');
                userRepository.userCreate({
                    name: 'Head-Trainer',
                    email: 'headtrainer@successive.tech',
                    role: 'head.trainer',
                    password: hash
                });
            }
            else {
                console.log(res);
            }
        })
        .catch((err) => console.log(err));
};

