const Result = require('../models/result');
const User = require('../models/user');
const router = require('express').Router();
const Model = require('../models/model');
const mongoose = require('mongoose');


router.post('/results/save', async (req, res) => {
  const models = req.body.models;
  const token = req.token;

  let idArray = [];
  models.forEach((item) => {
    idArray.push(mongoose.Types.ObjectId(item._id));
  });

  Model
    .find({ '_id': { $in: idArray } })
    .then((modelDocs) => {
      if (modelDocs.length !== models.length) {
        return res.status(422).send('Unprocessable Entity')
      }
      const result = new Result({
        models: models,
        token: token
      });
      result
        .save()
        .then(() => res.json(result))
        .catch(res.status(422).send('Unprocessable Entity'));
    }).catch(res.status(422).send('Unprocessable Entity'));

  User.findOneAndUpdate({ 'token': token }, { 'status': 'Evaluated' }, (err, data) => {
    if (err) {
      console.log(err);
    }
  })

});
console.log('[Result Controller]', 'load routes');

module.exports = router;

/*
  let idArray = [];
  models.forEach((item) => {
    idArray.push(mongoose.Types.ObjectId(item._id));
  });

  Model
    .find({'_id': {$in: idArray}})
    .then((modelDocs) => {
      User
        .findById(user._id)
        .then((userDocs) => {
          const result = new Result({
            models: modelDocs,
            user: userDocs
          });
          result
            .save()
            .then(() => res.json(result))
            .catch(handleException);
        }).catch(handleException)
    }).catch(handleException);
*/
