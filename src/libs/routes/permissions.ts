import { permissions } from './constants';

export function hasPermission(moduleName, role, permissionType){
    if(permissions[moduleName].all.includes(role)){     // checks only for permissionType 'all'   
        console.log("The " + role + " has permission to "+permissionType);
    }
    else{
        const permission = permissions[moduleName][permissionType].includes(role);
        if(permission){
            console.log("The " + role + " has permission to "+permissionType);
            return true;
        }
        else{
            console.log("The " + role + " has no permission to "+permissionType);
            return false;
        }
    }
};

// hasPermission('getUsers1', 'trainer', 'delete');
// console.log(hasPermission('getUsers', 'head-trainer', 'all'));
// console.log(hasPermission('getUsers2', 'trainee', 'delete'));
// console.log(hasPermission('getUsers1', 'trainer', 'delete'));
// console.log(permissions[moduleName][permissionType].includes(role));