import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

// routes
import { combineRouterToApp } from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// handler
combineRouterToApp(app);

app.use((req, res, next) => {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

app.use((error: any, req, res, next) => {
  res.status(error['status'] || 500);
  res.json({
    message: error.message,
  });
});

export default app;