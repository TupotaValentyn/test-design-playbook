const router = require('express').Router();
const Employer = require('../models/employer');
const jwt = require('jsonwebtoken');

router.post('/auth', (req, res) => {
  Employer.find({ login: req.body.login, password: req.body.password }, (err, models) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (models[0]) {
      const token = jwt.sign({ user: req.body.login, access: "admin" }, process.env.JWT_PRIVATE_KEY, { expiresIn: 86400 });
      res.status(200).send({ auth: 'true', token: token });
    } else {
      res.json({ auth: 'false', message: 'Failed to authenticate token ' });
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

router.post('/change/password', (req, res) => {
  const token = req.token;
  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
    Employer.findOne({ login: decoded.user, password: req.body.password })
      .then((docs) => {
        if (docs === null) {
          throw 'Bad auth data';
        }
        return Employer.findOneAndUpdate({ login: decoded.user }, { password: req.body.newPassword })
      })
      .then(() => res.send({ m: 'Successfully updated '}))
      .catch(err => res.status(500).send(err))
  })

});

console.log('[Auth Controller]', 'load routes');

module.exports = router;
