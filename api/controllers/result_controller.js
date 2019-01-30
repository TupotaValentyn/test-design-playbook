const Result = require('../models/result');
const Applicant = require('../models/user');
const router = require('express').Router();
const Employer = require('../models/employer');
const mailgun = require('../mail/mailing');
const Model = require('../models/model');
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

router.post('/results/save/force', (req, res) => {
  const models = req.body.models;
  const token = req.token;

  Applicant.findOneAndUpdate({ token: token }, { status: Applicant.STATUS_EVALUATED })
    .then((docs) => {
      console.log(docs);
      let result = new Result({
        applicant: docs,
        solved_models: models,
        solved_date: new Date(),
        token: token
      });
      result.save();
      res.json(result);
    })
});

async function getThisModelMark(item) {
  return new Promise((resolve, reject) => {
    if (item.mark) {
      Model.findOne({ _id: item.model._id })
        .then(docs => {
          resolve(docs.mark);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      resolve(0);
    }
  })
}

async function updateMark(models) {
  return new Promise(async (resolve) => {
    let mark = 0;
    for(let i = 0; i<models.length; i++){
      mark += await getThisModelMark(models[i]);
    }
    resolve(mark);
  });
}

router.post('/results/save',async (req, res) => {
  const models = req.body.models;
  const token = req.token;
  let mark = await updateMark(models);
  console.log(mark);

  Applicant.findOneAndUpdate({ token: token }, { status: Applicant.STATUS_EVALUATED, mark: mark }, { upsert: true, new: true })
    .then((applicant) => {
      Result.findOneAndUpdate({ token: token }, { models: models, applicant: applicant})
        .catch(err => res.send(err))
        .then(() => {
          Employer.findOne({}, async (err, docs) => {
            await mailgun.testCompleted({
              name: applicant.first_name,
              surname: applicant.surname,
              email: docs.email
            });
            res.json({ res: "successful" })
          })
        });
    });
});

function updateResultToFillingStatus(user, models, token, res) {
  const result = new Result({
    applicant: user,
    solved_models: models,
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
      .findOne({ token: token })
      .then((user) => {
        updateResultToFillingStatus(user, models, token, res);
      });
  } else {
    Result.findOneAndUpdate({ token: token }, { solved_models: models })
      .catch(err => res.send(err))
      .then(() => {res.json({ m:'Updated successfully' })});
  }
}

router.post('/results/update', (req, res) => {
  const models = req.body.models;
  const token = req.token;
  Applicant
    .findOne({ token: token})
    .then((docs) => {
      if (!docs) {
        return res.status(403).json({message: 'Access denied'});
      }
      findMoreInfoAboutUser(docs, token, models, res);
    })

});

router.get('/results/all', (req, res) => {
  if (req.access !== 'admin') {
    return res.status(403).send('You do not have permission');
  }
  Result
    .find({ deleted: false }, { deleted:0 }, (err, docs) =>{
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

router.post('/results/delete', (req, res) => {
  const token = req.body.token;
  Result.findOneAndUpdate({ token: token }, { deleted: true }, (err) => {
    if (err) {
      return res.send(err);
    }
    return res.send({m: 'Deleted successfully'});
  })
});

console.log('[Result Controller]', 'load routes');

module.exports = router;
