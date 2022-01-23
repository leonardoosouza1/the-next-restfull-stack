import * as express from 'express';
import middleware from './middleware';
import routes from './routes';
import DataBase from './config/db';

const App = (): Promise<any> => {
    const app = express()
    const { createConnection, closeConnection } = DataBase();
    const middleware = require('./middleware');
    app.use(routes());

    createConnection();
    closeConnection();

    return new Promise((resolve, reject) => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
            resolve(app);
        });
    })
}
export default App;