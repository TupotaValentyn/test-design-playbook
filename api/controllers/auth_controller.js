const router = require('express').Router();
const Employer = require('../models/employer');
const jwt = require('jsonwebtoken');
const secret = require("../secret");

router.post('/auth', (req, res) => {
  const query = {
    login: req.body.login,
    password: req.body.password
  };

  Employer.findOne(query, (err, docs) => {
    if (docs) {
      const adminData = {
        user: req.body.login,
        access: Employer.ACCESS_ADMIN
      };
      const token = jwt.sign(adminData, secret.key, { expiresIn: 86400 });
      res.json({ auth: "true", token: token });
    } else {
      res.json({ auth: "false", message: 'Failed to authenticate token' });
    }
  });
});

router.get('/auth/generate', () => {
  const employer = new Employer({
    name: "Oleksiy",
    login: "admin",
    password: "admin",
    email: "aleseyko@gmail.com",
    notify: true
  });
  employer.save();
});

console.log('[Auth Controller]', 'load routes');

module.exports = router;
