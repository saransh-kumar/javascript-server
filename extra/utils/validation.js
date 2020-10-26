                   
// TASK 1 (Day - 4) - #39517
     
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


function validateEmail(email) {
    let emailRegex = /\w+.\w+@successive.tech$/i
    return emailRegex.test(email)
};

const validUser = [];
const invalidUser = [];
function validateUsers(users){
    users.forEach(function(user){
        const {traineeEmail, reviewerEmail} = user;
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
            validUser.push(user);   
        }
        else{
            invalidUser.push(user);
        }
    })
};

validateUsers(users);

console.log("Valid user count: " + validUser.length);
console.log(validUser);
console.log("Invalid user count: " + invalidUser.length);
console.log(invalidUser);