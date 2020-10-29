import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';
import { nextTick } from 'process';

// console.log(bodyparser);
class Server {
    private app;
    constructor(private config) {
        this.app = express();
    }

    public bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

    public setupRoutes() {
<<<<<<< Updated upstream
        const { app } = this;

        app.use((req, res, next) => {
            console.log('Inside First MiddleWare');
            next();
        });

        app.use('/health-check', (req, res) => {
=======
        this.app.use('/health-check', (req, res, next) => {
>>>>>>> Stashed changes
            res.send('I am OK');
            next();
        });

        this.app.use( notFoundRoute );

        this.app.use( errorHandler );

        return this;
    }

    public initBodyParser () {
        this.app.use(bodyparser.json({ type: 'application/*+json' }));
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