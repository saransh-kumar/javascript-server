let permissions = {
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
        delete: ['trainer'],
    },
    'getUsers2': {
        all: ['head-trainer'],
        read: ['trainee'],
        write: ['trainer', 'trainer'],
        delete: [],
    }
}
function hasPermission(moduleName, role, permissionType){
    if(permissions[moduleName].all.includes(role)){   // checks only for permissionType 'all'
        return true;
    }
    else{
        return permissions[moduleName][permissionType].includes(role);
    }
};

console.log(hasPermission('getUsers', 'head-trainer', 'delete'));

// console.log(hasPermission('getUsers', 'head-trainer', 'all'));
// console.log(hasPermission('getUsers2', 'trainee', 'delete'));
// console.log(hasPermission('getUsers1', 'trainer', 'delete'));
// console.log(permissions[moduleName][permissionType].includes(role));
