const mongoose = require('mongoose');

const exSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  best: String,
  worst: String,
  humor: Boolean,
  attractiveness: Number,
  cheap: Boolean,
  attitude: String,
});

module.exports = mongoose.model('Ex', exSchema);
