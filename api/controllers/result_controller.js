const Result = require('../models/result');
const router = require('express').Router();

router.post('/results/save', (req, res) => {
  const models = req.body.models;
  const user = req.body.user;
  if (models.length !== 5) {
    res.status(422);
    res.send('Models must have 5 elements. Now length [' + models.length + "]");
  }

  const result = new Result({
    models: models,
    user: user
  });
  result
    .save()
    .then(() => res.json(result))
    .catch(handleException);
});

function handleException(err) {
  res.status(422);
  res.send(err);
}

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
