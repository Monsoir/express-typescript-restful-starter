import * as express from 'express';
import home from './home';

export const combineRouterToApp = (app: express.Application) => {
  app.use(home);
  return app;
};
