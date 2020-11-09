import Server from'./Server';
import { config } from './config';
export { UserRepository } from './repositories/user';

console.log('congif is ', config);
const server = new Server(config.parsed);
// Object.freeze(config);
server.bootstrap().run();

