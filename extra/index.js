import { diamond, equilateral } from './patterns';
import {  hasPermission, validateUsers } from './utils';
import permissions from './constants';

export{
    permissions
}

diamond(5);
equilateral(8);                     //Patterns

hasPermission('getUsers1', 'trainer', 'delete');   //Utils

const users = [{
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

validateUsers(users);   
