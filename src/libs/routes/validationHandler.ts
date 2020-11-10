export default function(config) {
    return function (req, res, next) {

        const keys = Object.keys(req.query);

        keys.forEach(function(element) {
            const value = req.query.element;
            const help = config[element];

            Object.keys(help).forEach( function(item) {
                if(item == 'required'){
                    if(!config[element][item]) {
                        console.log('Not required');
                    }
                    else {
                        
                    }
                }
                if(item == 'string' || item == 'number'){
                    console.log('In string and number section');
                }
                if(item == 'in'){
                    if(config[element][item][0] == 'body'){
                        console.log('In body');
                    }
                    else if(config[element][item][0] == 'query'){
                        console.log('we are in query');
                        // if(req.param){
                        //     res.send({
                        //         message: "please send Param query",
                        //     })
                        // }
                    }
                    else if(config[element][item][0] == 'headers'){
                        console.log('in headers');
                    }
                    console.log('in in section', config[element][item][0]);
                }
                if(item == 'regex'){
                    console.log('In regex section');
                }
                    });
        });
        next();
    };
}
