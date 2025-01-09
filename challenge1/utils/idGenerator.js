const crypto = require('crypto');

function generateUniqueId(length = 6) {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
}

module.exports = { generateUniqueId };
