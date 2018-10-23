const mongoose = require('mongoose');

const Ex = require('./ex');

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  location: String,
  sex: String,
  img: String,
  ex: [Ex.schema]
});

module.exports = mongoose.model('User', userSchema);
