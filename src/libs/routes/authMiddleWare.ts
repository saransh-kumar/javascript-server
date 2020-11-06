import * as jwt from 'jsonwebtoken';

import { hasPermission } from './permissions';

export default (module, permissionType) => (req, res, next) => {
    try {  
        const token = req.headers['authorization'];
        const decorderUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        // console.log(token);
        // console.log(decorderUser);
        // console.log(permissions);
        // console.log(module, permissionType);
        // console.log(hasPermission('getUsers1', 'trainer', 'read'));
        // console.log(decorderUser.role);
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