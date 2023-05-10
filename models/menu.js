const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  size: String,
  status: String
});

module.exports = mongoose.model('Menu', menuSchema);