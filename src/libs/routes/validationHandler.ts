export default (config) => {
    return (req, res, next) => {
        const errors = [];
        let apiValue;
        apiValue = (req.body.password === undefined) ? req.query : req.body;
        console.log(apiValue);
        const keys = Object.keys(config);
        console.log(keys);  // [ 'name', 'email', 'role', 'password' ]
        keys.forEach((element) => {
            // console.log(element);
            if (config[element].required === true && apiValue[element] === undefined) {
                errors.push(`${config[element].errorMessage}`);
            }
            else {
                // Checking the typeof string or number
                if ( config[element].string !== undefined || config[element].number !== undefined ) {
                    const typeOfValue = config[element].string ? 'string' : 'number';
                    // console.log(typeOfValue);
                if ( Number(apiValue[element]) && typeOfValue === 'string' && apiValue[element] !== undefined) {
                    errors.push(`${element} should be a string`);
                }
                if ( !Number(apiValue[element]) && typeOfValue === 'number' && apiValue[element] !== undefined) {
                    errors.push(`${element} should be a number`);
                }
            }
                // Checking the in either body or query
                if ( config[element].in[0] === 'body' && req.body.name === undefined) {
                    errors.push(`please use body to pass the ${element}`);
                }
                if ( config[element].in[0] === 'query' && req.query.skip === undefined) {
                    errors.push(`please use query to pass the ${element}`);
                }

                // Email validation that should match abc@successive.tech formate
                if ( element === 'email' && !(config.email.regex).test(apiValue.email)) {
                    errors.push('email should be in -abc@successive.tech- format');
                }

                // Checking if skip and limit are undefined then putting default value
                if ( element === 'skip' &&  apiValue.skip === undefined ) {
                    apiValue.skip = config[element].default;
                }
                if ( element === 'limit' &&  apiValue.limit === undefined ) {
                    apiValue.limit = config[element].default;
                }
            }
        });
        console.log(errors);
        next();
    };
};