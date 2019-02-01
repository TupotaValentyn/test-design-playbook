const mongoose = require('mongoose');

const model = mongoose.Schema({
  url: String,
  mark: Number,
  name: String
});

const Model = mongoose.model('images', model);

module.exports = Model;
