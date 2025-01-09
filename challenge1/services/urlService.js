const { generateUniqueId } = require('../utils/idGenerator');

class UrlService {
  constructor() {
    this.urlMap = new Map(); // In-memory storage
  }

  createShortUrl(longUrl) {
    // Check for duplicates
    for (const [key, value] of this.urlMap.entries()) {
      if (value === longUrl) {
        return key; // Return existing short URL
      }
    }

    // Generate unique short ID
    const shortId = generateUniqueId();
    this.urlMap.set(shortId, longUrl);
    return shortId;
  }

  getLongUrl(shortId) {
    return this.urlMap.get(shortId);
  }
}

module.exports = new UrlService();
