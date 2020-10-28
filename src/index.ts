import Server from'./Server';
import { config } from './config';

const server = new Server(config.parsed);
Object.freeze(config);
server.bootstrap().run();

