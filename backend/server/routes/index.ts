import * as express from 'express';

const routes = () => {
    const test = {
        test: 'test'
    }

    const routes = express.Router();
    return routes.get('/test', (req, res) => {
        res.status(200).json(test);
    });
}

export default routes