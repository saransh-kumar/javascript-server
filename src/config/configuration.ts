import * as dotenv  from 'dotenv';
import IConfig from './IConfig';
const envVars = dotenv.config().parsed;

console.log('Inside config');
console.log(dotenv);
const config: IConfig = {
    PORT: envVars.PORT,
    NODE_ENV: envVars.NODE_ENV,
    MONGO_URL: envVars.MONGO_URL,
    SECRET_KEY: envVars.SECRET_KEY,
    PASSWORD: envVars.PASSWORD
};
Object.freeze(config);
export default config;