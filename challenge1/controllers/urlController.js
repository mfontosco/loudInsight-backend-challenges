const urlService = require('../services/urlService');

const createShortUrl = (req, res) => {
   const { longUrl } = req.body;

   if (!longUrl || typeof longUrl !== 'string') {
      return res.status(400).json({ error: 'Invalid URL provided.' });
   }

   const shortId = urlService.createShortUrl(longUrl);
   res.status(201).json({
      shortUrl: `${req.protocol}://${req.get('host')}/${shortId}`,
   });
};

const redirectToLongUrl = (req, res) => {
   const { shortId } = req.params;
   console.log('shortId', shortId);
   const longUrl = urlService.getLongUrl(shortId);
   console.log('longUrl', longUrl);
   if (!longUrl) {
      return res.status(404).json({ error: 'Short URL not found.' });
   }

   res.redirect(longUrl);
};

module.exports = { createShortUrl, redirectToLongUrl };
