import * as express from 'express';
import HomeRoute from './home';

export const combineRouterToApp = (app: express.Application) => {
    app.use(HomeRoute);
    return app;
};