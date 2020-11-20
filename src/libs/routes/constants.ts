export const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },
    'getUsers1': {
        all: ['head-trainer', 'trainee'],
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