const mongoose = require('mongoose');

const admin = mongoose.Schema({
  login: String,
  password: String
});

const Admin = mongoose.model('admin', admin);

module.exports = Admin;
