import winston from 'winston';

const status = 'production';

const options = {}

const customeLogger = {
  levels: {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    debug: 4,
  },
  colors: {
    fatal: 'red',
    error: 'orange',
    warning: 'yellow',
    info: 'blue',
    debug: 'white',
  },
}

if (status === 'production') {
  options.levels = customeLogger.levels
  options.transports = [
    //new winston.transports.Console({ level: 'http' }),
    //new winston.transports.File({ filename: './logs/error.log', level: 'warn' }),

    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize({ colors: customeLogger.colors }),
        winston.format.simple(),
      ),
    }),
    new winston.transports.File({
      level: 'warning',
      filename: './logs/error.log',
      format: winston.format.simple(),
    }),
  ]
} else {
  options.transports = [
    new winston.transports.Console({ level: 'verbose' }),
  ]
}

const logger = winston.createLogger(options)

export const addLogger = (req, res, next) => {
  req.logger = logger
  req.logger.info(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
  next()
}