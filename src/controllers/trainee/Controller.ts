class TraineeController{
    static instance: TraineeController

    static getInstance() {
        if(TraineeController.instance){
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    get(req, res, next) {
        try{
            console.log("Inside get method Trainee Controller");
            
            res.send({
                message: "Get message Successful",
                data: [
                    {
                        name: "Trainee123",
                        address: "Noida",
                    }
                ]
            });
        }catch(err) {
            console.log("Inside err", err);
        }
    }

    post(req, res, next) {
        try{
            console.log("Inside get method Trainee Controller");
            
            res.send({
                message: "Post message Successful",
                data: [
                    {
                        name: "Trainee123",
                        address: "Noida",
                    }
                ]
            });
        }catch(err) {
            console.log("Inside err", err);
        }
    }

    put(req, res, next) {
        try{
            console.log("Inside get method Trainee Controller");
            
            res.send({
                message: "Put message Successful",
                data: [
                    {
                        name: "Trainee123",
                        address: "Noida",
                    }
                ]
            });
        }catch(err) {
            console.log("Inside err", err);
        }
    }

    delete(req, res, next) {
        try{
            console.log("Inside get method Trainee Controller");
            
            res.send({
                message: "delete message Successful",
                data: [
                    {
                        name: "Trainee123",
                        address: "Noida",
                    }
                ]
            });
        }catch(err) {
            console.log("Inside err", err);
        }
    }
}

export default TraineeController.getInstance()