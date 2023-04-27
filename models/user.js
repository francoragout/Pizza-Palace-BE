const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  password: String,
  state: String,
  role: String
});

module.exports = mongoose.model('User', userSchema)