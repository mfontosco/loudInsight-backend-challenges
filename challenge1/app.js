const express = require('express');
const bodyParser = require('body-parser');
const urlRoutes = require('./routes/urlRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', urlRoutes);

module.exports = app;
