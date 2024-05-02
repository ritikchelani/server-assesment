const mongoose = require('mongoose');

const componentTwoSchema = new mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model('componentTwo', componentTwoSchema);
