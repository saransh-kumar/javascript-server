import { userModel } from '../repositories/user/UserModel';
import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then((res) => {
            if(res === 0){
                console.log("Inserting DATA"),
                userRepository.create({
                    name: 'Head-Trainer',
                    email: 'head.trainer@successive.tech',
                    role: 'head-trainer',
                    password: '1234',
                })
                userRepository.create({
                    name: 'Trainer',
                    email: 'trainer@successive.tech',
                    role: 'trainer',
                    password: '123',
                });
            }
            else{
                console.log(res);
            }
        })
        .catch((err) => console.log(err));
    // console.log('Data sending in progress');
    // console.log(userModel.countDocuments());
    // // userRepository.create({ name: 'Head Trainer', role: 'head-trainer', email: 'head.trainee@succesive.tech', password: 'HelloWorld456'});
    // // userRepository.create({ name: 'Trainee', role: 'trainee', email: 'trainee@successive.tech', password: 'HelloWorld123'});
};
