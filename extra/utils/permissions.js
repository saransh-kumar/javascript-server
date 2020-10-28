export const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },
    'getUsers1': {
        all: ['head-trainer','trainee'],
        read: [ 'trainer'],
        write: ['trainer'],
        delete: [],
    },
    'getUsers2': {
        all: ['head-trainer'],
        read: ['trainee'],
        write: ['trainer', 'trainer'],
        delete: [],
    }
};
export function hasPermission(moduleName, role, permissionType){
    if(permissions[moduleName].all.includes(role)){     // checks only for permissionType 'all'   ´
        console.log("The " + role + " has permission to "+permissionType);
    }
    else{
        const permission = permissions[moduleName][permissionType].includes(role);
        if(permission){
            console.log("The " + role + " has permission to "+permissionType);
        }
        else{
            console.log("The " + role + " has no permission to "+permissionType);
        }
    }
};

// hasPermission('getUsers1', 'trainer', 'delete');
// console.log(hasPermission('getUsers', 'head-trainer', 'all'));
// console.log(hasPermission('getUsers2', 'trainee', 'delete'));
// console.log(hasPermission('getUsers1', 'trainer', 'delete'));
// console.log(permissions[moduleName][permissionType].includes(role));
