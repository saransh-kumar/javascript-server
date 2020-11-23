import Server from'./Server';
import { config } from './config';
export { UserRepository } from './repositories/user';

console.log('config is ', config);
const server = new Server(config);
Object.freeze(config);
server.bootstrap().run();

