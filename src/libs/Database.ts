import * as mongoose from 'mongoose';
import { default as seedData } from './seedData';

class Database {
    static open(MONGO_URL) {
        return new Promise((resolve, reject) => {
            // console.log('Inside open method');
            mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                seedData();
                // tslint:disable-next-line: no-null-keyword
                resolve();
            });
        });
    }
    static disconnect(MONGO_URL) {
        console.log('disconnecting Mongo...');
        mongoose.connection.close();
        console.log('Disconnected.');
    }
}
export default Database;