import * as jwt from 'jsonwebtoken';
import { config } from '../../config';
import { hasPermission } from './permissions';

export default (module, permissionType) => (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decorderUser = jwt.verify(token, config.SECRET_KEY);
        if (hasPermission(module, decorderUser.docs.role, permissionType)) {
            console.log('Has permission.');
        }
        else {
            throw Error;
        }
        next();
    }
    catch (err) {
        res.send({
            error: 'Unauthorized',
            code: 403,
        });
    }
};



