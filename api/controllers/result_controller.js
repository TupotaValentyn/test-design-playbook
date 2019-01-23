const Result = require('../models/result');
const User = require('../models/user');
const router = require('express').Router();
const Model = require('../models/model');
const mongoose = require('mongoose');


router.post('/results/save', async (req, res) => {
  const models = req.body.models;
  const token = req.token;

  const idArray = models.map(item => mongoose.Types.ObjectId(item._id));
  Model
    .find({ '_id': { $in: idArray } })
    .then((modelDocs) => {
      if (modelDocs.length !== models.length) {
        throw ('Unprocessable Entity');
      }
      const result = new Result({
        models: models,
        token: token
      });
      result.save().catch(err => throw err)
    })
    .then(() =>
        User
          .findOneAndUpdate({ token: token }, { status: 'Evaluated' })
          .catch(err => throw err))
    .then(res.send('Saved successfully'))
    .catch((err) => res.status(422).send(err));

});
console.log('[Result Controller]', 'load routes');

module.exports = router;
