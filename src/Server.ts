import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';

import { notFoundRoute, errorHandler } from './libs/routes';
import routes from './router';
import Database from './libs/Database';


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Swagger javaScript-API',
            version: '1.0.0',
        },
        securityDefinitions: {
            Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'headers',
        }
    }
},
    asePath: '/api',
    swagger: '4.1.5',
    apis: ['./src/controllers/**/routes.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);



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

        this.app.use((req, res, next) => {
            console.log('Inside First MiddleWare');
            next();
        });

        this.app.use('/health-check', (req, res) => {
            res.send('I am OK');
        });

        this.app.use('/api', routes, swaggerUI.serve, swaggerUI.setup(swaggerDocs) );

        this.app.use( notFoundRoute );

        this.app.use( errorHandler );

        return this;
    }

    public initBodyParser () {
        this.app.use(bodyparser.json());
    }

    public run() {
        const { app, config: { PORT, MONGO_URL } } = this;

        Database.open(MONGO_URL)
            .then((res) => {
                console.log('Successfully connected(MongoDb)...');
                this.app.listen(PORT, (err) => {
                    if ( err ) {
                        console.log('Mongo has not started yet!!!', err);
                        return;
                    }
                    const message = '|| Mongo has started and App is running on port ' + PORT + '||';
                    console.log(message);
                });
                // Database.disconnect(MONGO_URL);
            })
            .catch(err => console.log(err));

        return this;
    }
}

export default Server;