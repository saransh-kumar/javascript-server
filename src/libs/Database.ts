import { reject } from 'lodash';
import * as mongoose from 'mongoose';

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
                // tslint:disable-next-line: no-null-keyword
                resolve(null);
            });
        });
    }
    static disconnect() {
        console.log('Inside disconnect');
    }
}
export default Database;