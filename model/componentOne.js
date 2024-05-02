const mongoose = require('mongoose');

const componentOneSchema = new mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model('componentOne', componentOneSchema);
