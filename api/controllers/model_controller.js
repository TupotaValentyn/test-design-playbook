const express = require('express');
const router = express.Router();
const Model = require('../models/model');
const Applicant = require('../models/user');
const Result = require('../models/result');

// after refactor
router.get('/models/all', (req, res) => {
  let applicant;
  Applicant.findOne({ token: req.token })
    .then((applicantDocs) => {
      if (applicantDocs && (applicantDocs.status === Applicant.STATUS_IS_SOLVED || applicantDocs.status === Applicant.STATUS_IS_FILLING)) {
        return Applicant.findOneAndUpdate({ token: req.token }, {status: Applicant.STATUS_IS_FILLING});
      } else {
        throw { status: 403 };
      }
    })
    .then((applicantDocs) => {
      applicant = applicantDocs;
      return Model.find({}, {mark: 0});
    })
    .then((modelDocs) => {
      const result = {
        solved_models: [],
        applicant: applicant,
        solved_date: null
      };

      modelDocs.forEach((item) => {
        result.solved_models.push({
          model: item,
          mark: false,
          comment: {
            good: "",
            bad: ""
          }
        });
      });
      res.send(result);
    })
    .catch((err) => {
      res.status(err.status).send(err);
    })
});

router.get('/models/solved', (req, res) => {
  let applicant;
  Applicant.findOne({ token: req.token })
    .then((applicantDocs) => {
      applicant = applicantDocs;
      if (applicant
        && (applicant.status === Applicant.STATUS_IS_SOLVED
          || applicant.status === Applicant.STATUS_IS_FILLING)) {
        return Result.findOne({ token: applicant.token });
      } else {
        throw {status: 403};
      }
    })
    .then((resultDocs) => {
      if (resultDocs) {
        res.send(resultDocs);
      } else {
        res.end();
      }
    })
    .catch((err) => {
      res.status(err.status).send(err);
    })
});

router.get('/models/count', (req, res) => {
  Model.find({})
    .then(docs => res.send({ count: docs.length }))
    .catch(err => res.send(err))
})

router.get('/model/generate', () => {
  console.log('22');
  for(let i = 1; i<24; i++) {
    let url = 'template_' + i + '.png';
    let name = 'template_' + i;
    let model = new Model({
      url: url,
      name: name,
      mark: Math.floor((Math.random()*10))
    });
    model.save()
      .then((docs) => {

      })
  }
});
console.log('[Model Controller]', 'load routes');

module.exports = router;
