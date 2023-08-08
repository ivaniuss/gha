require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://ivaniuss:${process.env.MONGODB_PASS}@cluster0.x56will.mongodb.net/`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
