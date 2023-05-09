const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  date: String,
  time: String,
  user: String,
  menu: String,
  phone: Number,
  address: String,
  stauts: String
})

module.exports = mongoose.model('Request', requestSchema)