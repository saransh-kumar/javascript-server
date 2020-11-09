import * as jwt from 'jsonwebtoken';

import { hasPermission } from './permissions';

export default (module, permissionType) => (req, res, next) => {
    try {  
        const token = req.headers['authorization'];
        const decorderUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        // console.log('token is', token);
        console.log(decorderUser.email);
        if(hasPermission(module, decorderUser.role, permissionType)) {
            console.log('Has permission.')
        }
        else {
            throw Error;
        }
        next();
    }
    catch(err) {
        res.send({
            error: 'Unauthorized',
            code: 403,
        })
    }
}



