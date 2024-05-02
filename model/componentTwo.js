const mongoose = require('mongoose');

const componentTwoSchema = new mongoose.Schema({
  title: String,
  content: String,
},{timestamps:true});

module.exports = mongoose.model('componentTwo', componentTwoSchema);
