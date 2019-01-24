const router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secret = require("../secret");

router.post('/users/token', (req, res) => {
  if (req.access !== 'admin') {
    return res.status(403).send('You do not have permission');
  }
  const token = jwt.sign({ user: req.body.email, access: 'user' }, secret.key, { expiresIn: 86400 });

  const user = new User({
    surname: req.body.surname,
    first_name: req.body.name,
    second_name: req.body.second_name,
    email: req.body.email,
    token: token
  });
  user.save();

  res.send({ token: token });
});

router.post('/users/token/status', (req, res) => {
  const token = req.token;
  User.findOne({token: token}, {status: 1, _id: 0}, (err, docs) => {
    if (err) {
      return res.status(500).send('Can not find token');
    }
    return res.send({status: docs.status});
  })
});

router.post('/users/token/deactivate', (req, res) => {
  const token = req.body.token;
  User.findOneAndUpdate({ token: token }, { status: 'deactivated' }, (err) => {
    if(err){
      return res.status(500).send(err);
    }
    res.send('Deactivated succesfully');
  });
});

router.get('/users/token/all', (req, res) => {
  if (req.access !== 'admin') {
    return res.status(403).send('You do not have permission');
  }
  User.find({ status: { $nin: ['deactivated', 'expired']}})
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
});


console.log('[User Controller]', 'load routes');


module.exports = router;
