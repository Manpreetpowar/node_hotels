// db.js

const mongoose = require('mongoose');

// MongoDB connection URL
const MONGODB_URI = 'mongodb://0.0.0.0:27017/hotels';

// Connect to MongoDB
mongoose.connect(MONGODB_URI);

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => { console.log('Connected to MongoDB form DB');});

// Export the database connection
module.exports = db;
