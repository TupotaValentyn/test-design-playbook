const mongoose = require('mongoose');

const result = mongoose.Schema({
  models: Array,
  token: String
});

result.virtual('mark').get(() => {
  return this.models
    .map((item) => item.mark)
    .reduce((a, b) => a + b, 0);
});

const Result = mongoose.model('results', result);

module.exports = Result;
