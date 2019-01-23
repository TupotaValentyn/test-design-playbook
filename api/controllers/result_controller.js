const Result = require('../models/result');
const User = require('../models/user');
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

  Result.findOneAndUpdate({ token: token }, { models: models}).catch(err => res.send(err))
    .then(()=> {
      User.findOneAndUpdate({ token: token }, { status: 'Evaluated' })
        .then(() => {
          res.send('Saved successfully');
        });
    });


});

router.post('/results/update', (req, res) => {
  const models = req.body.models;
  const token = req.token;
  User.findOne({ token: token}, { status: 1 })
    .then((docs) => {
      if (docs.status === 'Is solved'){
        User.findOne({ token: token}, { token: 0, _id: 0, status: 0 })
          .then((user) => {
            const result = new Result({
              user: user,
              models: models,
              token: token
            });
            result.save()
              .then(()=>{
                User.findOneAndUpdate({ token: token }, { status: 'Is filling' })
                  .then(() => {
                    res.send('Updated successfully');
                  });
              });
          });
      } else {
        Result.findOneAndUpdate({ token: token }, { models: models}).catch(err => res.send(err));
      }
    })


});

router.get('/results/all', (req, res) => {
  if (req.access !== 'admin') {
    return res.status(403).send('You do not have permission');
  }
  Result.find({}, (err, docs) =>{
    if (err) {
      return res.status(500).send(err);
    }

    res.send(docs);
  })
});
console.log('[Result Controller]', 'load routes');

module.exports = router;
