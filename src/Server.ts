import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';
import routes from './router';
import { default as validationHandler } from './libs/routes/validationHandler';
import Database from './libs/Database';

// console.log(bodyparser);
console.log(validationHandler);

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
        const { app } = this;

        app.use((req, res, next) => {
            console.log('Inside First MiddleWare');
            next();
        });

        app.use('/health-check', (req, res) => {
            res.send('I am OK');
        });

        this.app.use('/api', routes );

        this.app.use( notFoundRoute );

        this.app.use( errorHandler );

        return this;
    }

    public initBodyParser () {
        this.app.use(bodyparser.json({ type: 'application/*+json' }));
    }

    public run() {
        const { app, config: { PORT, MONGO_URL } } = this;

        Database.open(MONGO_URL)
            .then((res) => {
                console.log('Successfully connected to Mongo');
                this.app.listen(PORT, (err) => {
                    if (err){
                        console.log(err);
                        return;
                    }
                    const message = `|| App is running at port '$(port)' in '$(env) ||`;
                    console.log(message);
                })
            })
            .catch(err => console.log(err));

        return this;
    }
}

export default Server;