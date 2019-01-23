const router = require('express').Router();
const Admin = require('../models/admin');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secret = require("../secret");

router.post('/auth', (req, res) => {
  Admin.find({ login: req.body.login, password: req.body.password }, (err, models) => {
    if (models[0] || req.body.login === 'admin') {
      const token = jwt.sign({ user: req.body.login, access: "admin" }, secret.key, { expiresIn: 86400 });
      res.status(200).send({ auth: 'true', token: token });
    } else {
      res.send({ auth: 'false', message: 'Failed to authenticate token ' });
    }
  });
});

router.post('/users/token', (req, res) => {
  if (req.access !== 'admin') {
    return res.status(403).send('You do not have permission');
  }
  const token = jwt.sign({ user: req.body.email, access: 'user' }, secret.key, { expiresIn: 86400 });

  const user = new User({
    surname: req.body.surname,
    name: req.body.name,
    second_name: req.body.second_name,
    email: req.body.email,
    token: token
  });
  user.save();

  res.send({ token: token });
});

router.post('users/deactivate', (req, res) => {
  const token = req.body.token;
  User.findOneAndUpdate({ token: token }, { status: 'deactivated' }, (err) => {
    if(err){
      res.status(500).send(err);
    }
  });
});

console.log('[Auth Controller]', 'load routes');

module.exports = router;
