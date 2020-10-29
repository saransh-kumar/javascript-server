import Server from'./Server';
import { config } from './config';

console.log('congif is ', config);
const server = new Server(config.parsed);
// Object.freeze(config);
server.bootstrap().run();

