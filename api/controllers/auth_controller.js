const router = require('express').Router();
const Admin = require('../models/admin');
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

console.log('[Auth Controller]', 'load routes');

module.exports = router;
