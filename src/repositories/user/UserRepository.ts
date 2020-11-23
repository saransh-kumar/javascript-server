import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';

export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    constructor() {
        super(userModel);
    }
    public static readOne(query): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return userModel.findOne(query).lean();
    }
}