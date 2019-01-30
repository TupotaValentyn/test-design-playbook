const mongoose = require('mongoose');

const employer = mongoose.Schema({
  login: String,
  password: String,
  name: String,
  email: String,
  notify: Boolean
});

const Employer = mongoose.model('employer', employer);

module.exports = Employer;
module.exports.ACCESS_ADMIN = 'admin';
