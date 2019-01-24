const mongoose = require('mongoose');

const applicant = mongoose.Schema({
  surname: String,
  first_name: String,
  second_name: String,
  email: String,
  token: String,
  status: {
    type: String,
    default: 'Is solved'
  },
  created: {
    type: Date,
    default: Date.now()
  },
  comment: {
    type: String,
    default: 'Not comment'
  },
  expired: {
    type: Date,
    default: (Date.now() + 86400000)
  }
});

const Applicant = mongoose.model('applicants', applicant);

module.exports = Applicant;

module.exports.STATUS_EVALUATED = 'Evaluated';
module.exports.STATUS_IS_FILLING = 'Is filling';
module.exports.STATUS_IS_SOLVED = 'Is solved';
