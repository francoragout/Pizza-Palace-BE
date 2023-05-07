const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  image: String,
  name: String,
  description: String,
  price: Number,
  category: String,
  status: String
});

module.exports = mongoose.model('Menu', menuSchema);