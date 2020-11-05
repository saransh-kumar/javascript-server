class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    post(req, res, next) {
        try {
            console.log('Inside Post method Trainee Controller');
            res.send({
                message: 'Post message Successful',
                data: [
                    {
                        name: ' Saransh Kumar',
                        address: 'Noida',
                        email: 'saransh@successive.tech',
                    }
                ]
            });
        } catch (err) {
            console.log('Inside err of Post', err);
        }
    }

}

export default UserController.getInstance();