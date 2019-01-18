const mongoose = require('mongoose');

const user = mongoose.Schema({
  surname: String,
  name: String,
  second_name: String,
  email: String
});

const User = mongoose.model('users', user);

module.exports = User;
