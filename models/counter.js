const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
  value: Number,
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;
