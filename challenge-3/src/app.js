require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', categoryRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
