import * as mongoose from 'mongoose';

class UserSchema extends mongoose.Schema {

    constructor(collections: any ) {
        const baseSchema = Object.assign({
            _id: String,
            name: String,
            email: String,
            password: String,
            role: String
        });
        super(baseSchema, collections);
    }
}

export default UserSchema;