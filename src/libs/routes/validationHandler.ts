export default function(config) {
    return function (req, res, next) {
        // console.log(req.query.skip);
        // console.log(req.query);
        const keys = Object.keys(req.query);

        keys.forEach(function(element) {
            // console.log(element);
            const value = req.query.element;
            const help = config[element];
            // console.log(help, 'config');
            if(config[element].required == false){
                console.log(config[element].default);
                // one more condition for 'in:' required
            }
            else{
                Object.keys(help).forEach(function(item){
                    if(item != 'required'){
                        if(item == 'string' && help[item] == true){
                            console.log(value);
                        }
                        else if(item == 'custom'){
                            help[item](value);
                        }
                        else{
                            if(item == 'errorMessage'){
                                console.log(help[item]);
                            }
                            else{
                                console.log('Error');
                            }
                        }
                    }
                })
            }
        })
        // console.log(keys);
        // console.log("config", config.skip.required);
        // console.log(req.request);
        // console.log(req.body);
        next();
    }
}
