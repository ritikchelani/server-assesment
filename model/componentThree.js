const mongoose = require('mongoose');

const componentThreeSchema = new mongoose.Schema({
  title: String,
  content: String,
},{timestamps:true});

module.exports = mongoose.model('componentThree', componentThreeSchema);
