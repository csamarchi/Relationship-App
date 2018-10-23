const mongoose = require('mongoose')
const loginSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  location: String,
  sex: String,
  img: String
});
module.exports = mongoose.model('Logininfo', loginSchema)