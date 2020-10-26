interface Ipermission{
    'getUsers':{
        all: String[],
        read: String[],
        write: String[],
        delete: String[]
    },
    'getUsers1':{
        all: String[],
        read: String[],
        write: String[],
        delete: String[]
    },
    'getUsers2':{
        all: String[],
        read: String[],
        write: String[],
        delete: String[]
    }
}

interface IUser{
    traineeEmail: String,
    reviewerEmail: String,
}

export{
    IUser,
    Ipermission
};