const mongoose = require('mongoose');

const exSchema = new mongoose.Schema({
  name: String,
  sex: String,
  location: String,
  image: String,
  best: String,
  worst: String,
  attractiveness: Number,
  humor: String,
  cheap: String,
  attitude: String,
  description: String
});

module.exports = mongoose.model('Ex', exSchema);
