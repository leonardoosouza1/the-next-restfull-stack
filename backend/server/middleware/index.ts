import * as express from 'express';

const middleware = () => {
    const morgan = require('morgan');
    const bodyParser = require('body-parser');
    const database = require('./config/db');
    const app = express();
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(database.connection);
    return app;
}

export default middleware;