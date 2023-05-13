const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  user: String,
  address: String,
  phone: Number,
  items: Array,
  status: String,
  payment: String,
  total: Number
})

module.exports = mongoose.model('Request', requestSchema);