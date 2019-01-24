const Result = require('../models/result');
const Applicant = require('../models/user');
const router = require('express').Router();
// const Model = require('../models/model');
// const mongoose = require('mongoose');

// router.post('/results/save',(req, res) => {
//   const models = req.body.models;
//   const token = req.token;
//
//   const idArray = models.map(item => mongoose.Types.ObjectId(item._id));
//   Model
//     .find({ '_id': { $in: idArray } })
//     .then((modelDocs) => {
//       if (modelDocs.length !== models.length) {
//         throw ('Unprocessable Entity');
//       }
//       Result.findOneAndUpdate({ token: token }, { models: models })
//         .catch(err => {throw (err)})})
//     .then(() => User.findOneAndUpdate({ token: token }, { status: 'Evaluated' })
//       .catch(err => {throw (err)})
//     )
//     .then(res.send('Saved successfully'))
//     .catch((err) => {
//       res.status(422).send(err);
//     });
//
// });

router.post('/results/save', (req, res) => {
  const models = req.body.models;
  const token = req.token;

  Result.findOneAndUpdate({ token: token }, { models: models})
    .catch(err => res.send(err))
    .then(() => {
      Applicant.findOneAndUpdate({ token: token }, { status: Applicant.STATUS_EVALUATED })
        .then(() => {
          res.json({res: "successful"});
        });
    });

});

function updateResultToFillingStatus(user, models, token, res) {
  const result = new Result({
    applicant: user,
    models: models,
    solved_date: Date(),
    token: token
  });
  result
    .save()
    .then(() => {
      Applicant
        .findOneAndUpdate({ token: token }, { status: Applicant.STATUS_IS_FILLING })
        .then(() => {
          res.json({m:'Updated successfully'});
        });
    });
}

function findMoreInfoAboutUser(docs, token, models, res) {
  if (docs.status === Applicant.STATUS_IS_SOLVED) {
    Applicant
      .findOne({ token: token }, { token: 0, _id: 0})
      .then((user) => {
        updateResultToFillingStatus(user, models, token, res);
      });
  } else {
    Result.findOneAndUpdate({ token: token }, { models: models }).catch(err => res.send(err)).then(() => res.json({ m:'Updated successfully' }));
  }
}

router.post('/results/update', (req, res) => {
  const models = req.body.models;
  const token = req.token;
  Applicant
    .findOne({ token: token})
    .then((docs) => {
      findMoreInfoAboutUser(docs, token, models, res);
    })

});

router.get('/results/all', (req, res) => {
  if (req.access !== 'admin') {
    return res.status(403).send('You do not have permission');
  }
  Result
    .find({}, (err, docs) =>{
      if (err) {
        return res.status(500).send(err);
      }

      res.send(docs);
    })
});

router.post('/results/one', (req, res) => {
  const token = req.body.token;
  Result.findOne({ token: token })
    .then((docs) => {
      if (!docs) {
        return res.send('Can not find this token');
      }
      res.send(docs)
    })
    .catch((err) => {
      res.status(500).send(err);
    })
});
console.log('[Result Controller]', 'load routes');

module.exports = router;
