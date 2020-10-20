                   
                   // TASK 1 (Day - 4) - #39517
     
users = [{
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

function validateUsers(users){
    let countValid=0;
    let countInvalid=0;

    users.forEach(function(item, value, array){
        if(validateEmail(item.traineeEmail)){
            countValid++;
        }
        else{
            countInvalid++;
        }
        if(validateEmail(item.reviewerEmail)){
            countValid++;
        }
        else{
            countInvalid++;
        }
    })
    console.log("Valid: "+countValid+" Invalid: "+countInvalid);
};

validateUsers(users);