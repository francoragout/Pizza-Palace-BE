const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  hour: String,
  date: String,
  user: String,
  address: String,
  phone: Number,
  items: Array,
  status: String,
  total: Number
})

module.exports = mongoose.model('Request', requestSchema);