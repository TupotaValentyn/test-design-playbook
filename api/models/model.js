const mongoose = require('mongoose');

const model = mongoose.Schema({
  url: String,
  mark: Number,
  name: String
});

const Model = mongoose.model('models', model);

module.exports = Model;
