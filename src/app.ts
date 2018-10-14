import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

// routes
import { combineRouterToApp } from './routes';
import { LoggerStream, logger as winston } from './config/winston';

// configs

const app = express();

const morganRedirectStream = new LoggerStream();
app.use(morgan('combined', { stream: morganRedirectStream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// handler
combineRouterToApp(app);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

app.use((error: any, req, res, next) => {
  winston.error(`${error.status || 500} - ${error.message} - ${req.originalUrl} - ${req.ip}`);
  res.json({
    message: error.message,
  });
});

export default app;
