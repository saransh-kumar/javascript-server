import { validateEmail } from './helpers';
import { IUser } from '../interfaces';

export const users: IUser = [{
        traineeEmail: 'saransh@gmail.com',
        reviewerEmail: 'mehunna@gmail.com',
    },
    {
        traineeEmail: 'trainee@gmail.com',
        reviewerEmail: 'saransh@gmail.com',
    },
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    }
]

const validUser = [];
const invalidUser = [];
export default function validateUsers(users) {
    users.forEach( (user) => {
        const {traineeEmail, reviewerEmail} = user;
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            validUser.push(user);
        }
        else {
            invalidUser.push(user);
        }
    });
    console.log('Valid user count: ' + validUser.length);
    console.log(validUser);
    console.log('Invalid user count: ' + invalidUser.length);
    console.log(invalidUser);
}


