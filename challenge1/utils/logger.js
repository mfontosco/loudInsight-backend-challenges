const { createLogger, format, transports } = require('winston');

// Define log format
const logFormat = format.combine(
   format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
   format.printf(
      ({ timestamp, level, message }) =>
         `${timestamp} [${level.toUpperCase()}]: ${message}`
   )
);

// Create logger
const logger = createLogger({
   level: 'info', // Default logging level
   format: logFormat,
   transports: [
      // Log to console
      new transports.Console(),

      // Log to a file
      new transports.File({ filename: 'logs/app.log' }),
   ],
});

// Export logger
module.exports = logger;
