const express = require('express');
const router = express.Router();
const Model = require('../models/model');

router.get('/model/all', (req, res) => {
  Model.find({}, (err, models) => {
    if (err) {
      res.status(500);
      res.send(err);
      return;
    }
    let modelMap = [];

    models.forEach((model) => {
      modelMap.push({
        _id: model._id,
        url: model.url,
        comment: "",
        mark: false
      });
    });

    res.send(modelMap);
  })
});

router.get('/model/generate', (req, res) => {
  const url = '/models/good_template_' + req.body.i + '.svg';
  const name = 'good_template_' + req.body.i;
    const model = new Model({
      url: url,
      name: name,
      answer: false
    });
    model.save()
      .then((docs) => {
        console.log(docs);
        res.send('zbs')
      })});

console.log('[Model Controller]', 'load routes');

module.exports = router;
