const express = require('express');
const router = express.Router();
const Model = require('../models/model');
const Applicant = require('../models/user');
const Result = require('../models/result');

router.get('/model/all', (req, res) => {
  Applicant.findOne({token: req.token}, {status: 1}, (err, docs) => {
    if (docs.status === Applicant.STATUS_IS_SOLVED) {
      Model.find({}, (err, models) => {
        if (err) {
          return res.status(500).res.send(err);
        }
        let modelMap = [];

        models.forEach((model) => {
          modelMap.push({
            _id: model._id,
            url: model.url,
            comment: "",
            mark: false,
            name: model.name
          });
        });

        res.send(modelMap);
      })
    } else if(docs.status === Applicant.STATUS_IS_FILLING) {
      Result.findOne({ token: req.token }, (err, docs) => {
        if (err) {
          return res.status(500).res.send(err);
        }
        res.send(docs);
      })
    }
  });

});

router.get('/model/generate', (req, res) => {
  const url = '/models/template_' + req.body.i + '.png';
  const name = 'template_' + req.body.i;
  const model = new Model({
    url: url,
    name: name,
    answer: false
  });
  model.save()
    .then((docs) => {
      console.log(docs);
      res.json({m: 'Success'});
    })
});

console.log('[Model Controller]', 'load routes');

module.exports = router;
