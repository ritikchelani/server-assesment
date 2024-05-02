const mongoose = require('mongoose');

const componentOneSchema = new mongoose.Schema({
  title: String,
  content: String,
},{timestamps:true});

module.exports = mongoose.model('componentOne', componentOneSchema);
