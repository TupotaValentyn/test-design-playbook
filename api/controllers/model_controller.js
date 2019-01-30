const express = require('express');
const router = express.Router();
const Model = require('../models/model');
const Applicant = require('../models/user');
const Result = require('../models/result');

router.get('/model/all', (req, res) => {
  Applicant.findOne(
    { token: req.token },
    { status: 1 },
    (err, docs) => handleApplicantQuery(err, docs, req, res)
  );
});

/*Обробка запиту на пошук кандидата в базі даних*/
function handleApplicantQuery(err, docs, req, res) {
  if (!docs) {
    return res.status(403).json({ message: 'Access denied' });
  }

  switch (docs.status) {
    case Applicant.STATUS_IS_SOLVED:
      Model.find(
        { },
        { mark: 0 },
        (err, models) => handleModelFindQuery(err, models, req, res)
      );
      break;
    case Applicant.STATUS_IS_FILLING:
      Result.findOne(
        { token: req.token },
        (err, docs) => handleResultFindQuery(err, docs, req, res)
      );
      break;
    default:
      res.status(403).json({applicant: docs});
  }
}

/*Обробка запиту на пошук існуючих результатів в базі даних*/
function handleResultFindQuery(err, docs, req, res) {
  if (err) {
    return res.status(500).res.send(err);
  }
  res.send(docs);
}

/*Обробка запиту на видачу моделей для нового кандидата*/
function handleModelFindQuery(err, docs, req, res) {
  if (err) {
    return res.status(500).res.send(err);
  }
  let modelMap = [];

  docs.forEach((model) => {
    modelMap.push({
      _id: model._id,
      url: model.url,
      comment: "",
      mark: false,
      name: model.name
    });
  });

  res.send(modelMap);
}

/*Генерація даних*/
router.get('/model/generate', () => {
  for(let i = 1; i<24; i++) {
    let url = '/models/template_' + i + '.png';
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
