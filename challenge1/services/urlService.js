const { generateUniqueId } = require('../utils/idGenerator');
const logger = require('../utils/logger');

class UrlService {
   constructor() {
      this.urlMap = new Map(); // In-memory storage
   }

   createShortUrl(longUrl) {
      // Check for duplicates
      for (const [key, value] of this.urlMap.entries()) {
         if (value === longUrl) {
            logger.info(`Duplicate URL detected: ${longUrl} -> ${key}`);
            return key; // Return existing short URL
         }
      }

      // Generate unique short ID
      const shortId = generateUniqueId();
      this.urlMap.set(shortId, longUrl);

      // Log creation
      logger.info(`Short URL created: ${shortId} -> ${longUrl}`);
      return shortId;
   }

   getLongUrl(shortId) {
      const longUrl = this.urlMap.get(shortId);

      if (!longUrl) {
         logger.warn(`Short ID not found: ${shortId}`);
      } else {
         logger.info(`Redirecting short ID: ${shortId} -> ${longUrl}`);
      }

      return longUrl;
   }
}

module.exports = new UrlService();
