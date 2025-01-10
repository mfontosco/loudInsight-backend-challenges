const { createLogger, format, transports } = require('winston');

// Define log format
const logFormat = format.printf(({ level, message, timestamp }) => {
   return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});

// Create the logger
const logger = createLogger({
   level: 'info', // Default log level
   format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.errors({ stack: true }), // Log stack traces
      format.splat(), // String interpolation support
      logFormat
   ),
   transports: [
      new transports.Console(), // Log to console
      new transports.File({ filename: 'logs/error.log', level: 'error' }), // Log errors to file
      new transports.File({ filename: 'logs/combined.log' }), // Log everything to a combined file
   ],
});

module.exports = logger;
