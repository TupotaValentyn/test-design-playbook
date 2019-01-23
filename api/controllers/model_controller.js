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

console.log('[Model Controller]', 'load routes');

module.exports = router;
