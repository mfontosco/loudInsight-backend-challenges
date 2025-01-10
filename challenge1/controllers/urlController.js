const urlService = require('../services/urlService');
const logger = require('../utils/logger');

const createShortUrl = (req, res) => {
   const { longUrl } = req.body;

   if (!longUrl || typeof longUrl !== 'string') {
      logger.error('Invalid URL provided');
      return res.status(400).json({ error: 'Invalid URL provided.' });
   }

   const shortId = urlService.createShortUrl(longUrl);
   logger.info(`API: Short URL generated -> ${shortId}`);
   res.status(201).json({
      shortUrl: `${req.protocol}://${req.get('host')}/${shortId}`,
   });
};

const redirectToLongUrl = (req, res) => {
   const { shortId } = req.params;

   const longUrl = urlService.getLongUrl(shortId);
   if (!longUrl) {
      logger.warn(`API: Short ID not found -> ${shortId}`);
      return res.status(404).json({ error: 'Short URL not found.' });
   }

   logger.info(`API: Redirecting -> ${shortId} to ${longUrl}`);
   res.redirect(longUrl);
};

module.exports = { createShortUrl, redirectToLongUrl };
