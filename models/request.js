const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  user: String,
  date: String,
  menu: String,
  stauts: String
})

module.exports = mongoose.model('Request', requestSchema)