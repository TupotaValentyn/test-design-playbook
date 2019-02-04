const mongoose = require('mongoose');

const applicant = mongoose.Schema({
  surname: String,
  first_name: String,
  second_name: String,
  email: String,
  token: String,
  status: {
    type: String,
    default: 'Sent'
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
  },
  mark: {
    type: Number,
    default: 0
  }
});

const Applicant = mongoose.model('applicants', applicant);

module.exports = Applicant;

module.exports.STATUS_EVALUATED = 'Evaluated'; // Тест завершено
module.exports.STATUS_IS_FILLING = 'Is filling'; // Тест почали проходити
module.exports.STATUS_IS_SOLVED = 'Sent'; //Відправлений
module.exports.STATUS_DEACTIVATED = 'Deactivated'; //Деактивовано з адмінки
module.exports.STATUS_EXPIRED = 'Expired'; // Час для проходження вичерпано
module.exports.STATUS_DELETED = 'Deleted'; // Видалено в адмінці
