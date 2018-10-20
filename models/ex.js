const mongoose = require('mongoose');

const exSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  best: String,
  worst: String,
  attractiveness: Number,
  humor: Boolean,
  cheap: Boolean,
  attitude: Boolean,
  description: String
});

module.exports = mongoose.model('Ex', exSchema);
