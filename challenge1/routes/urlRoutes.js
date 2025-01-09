const express = require('express');
const {
   createShortUrl,
   redirectToLongUrl,
} = require('../controllers/urlController');

const router = express.Router();

// POST /api/v1/urls -> Register a long URL
router.post('/', createShortUrl);

// GET /api/v1/urls/:shortId -> Redirect to the original URL
router.get('/:shortId', redirectToLongUrl);

module.exports = router;
