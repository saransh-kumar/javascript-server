import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';

// console.log(bodyparser);
class Server {
    private app;
    constructor(private config) {
        this.app = express();
    }

    public bootstrap() {
        this.setupRoutes();
        this.initBodyParser();
        return this;
    }

    public setupRoutes() {
        this.app.use('/health-check', (req, res) => {
            res.send('I am OK');
        });

        this.app.use( notFoundRoute );

        this.app.use( errorHandler );
        return this;
    }

    public initBodyParser () {
        this.app.use(bodyparser.json());
    }

    public run() {
        const { app, config: { PORT } } = this;

        app.listen(PORT, (err) => {
            if (err) {
                console.log( err );
            }
            console.log(`App is running on port : ${PORT}`);
        });
    }
}

export default Server;