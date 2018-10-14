import * as appRoot from 'app-root-path';
import * as winston from 'winston';

type TransportOptions = winston.transports.FileTransportOptions |
                        winston.transports.ConsoleTransportOptions;

const options: {[x: string]: TransportOptions} = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    maxFiles: 5,
    maxsize: 5 * 1024 * 1024,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
  },
};

export const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false,
});

// logger.stream = {
//   write: (message, encoding) => {
//     logger.info(message);
//   },
// };

// 到处一个带有 write 方法的对象即可
export class LoggerStream {
  write(message: string) {
    logger.info(message);
  }
}
