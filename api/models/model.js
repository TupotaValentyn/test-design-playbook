const mongoose = require('mongoose');

const model = mongoose.Schema({
  url: String,
  answer: Boolean,
  name: String
});

const Model = mongoose.model('models', model);

module.exports = Model;
