const express = require('express');
const router = express.Router();
const Model = require('../models/model');
const Applicant = require('../models/user');
const Result = require('../models/result');

router.get('/model/all', (req, res) => {
  Applicant.findOne({token: req.token}, {status: 1}, (err, docs) => {
    if (docs.status === Applicant.STATUS_IS_SOLVED) {
      Model.find({}, {mark: 0}, (err, models) => {
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
            numberMark: model.mark,
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
