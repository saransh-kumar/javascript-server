export interface Ipermission{
    'getUsers'; 'getUsers1'; 'getUsers2': GetUsers;
}
type GetUsers = {
    all: string[],
    read: string[],
    write: string[],
    delete: string[]
};
export interface IUser {
    [index: number]: {traineeEmail: string, reviewerEmail: string };
}