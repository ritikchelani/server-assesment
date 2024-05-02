const mongoose = require('mongoose');

const componentThreeSchema = new mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model('componentThree', componentThreeSchema);
