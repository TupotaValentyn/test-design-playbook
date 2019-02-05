const mongoose = require('mongoose');

const data_creator = mongoose.Schema({
  first: {
    type: Boolean,
    default: false
  },
  time: {
    type: Date,
    default: null
  }
});

const DataCreator = mongoose.model('data_creator', data_creator);

module.exports = DataCreator;
