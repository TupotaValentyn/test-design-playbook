const router = require('express').Router();
const Employer = require('../models/employer');
const jwt = require('jsonwebtoken');

router.post('/auth', (req, res) => {
  Employer.find({ login: req.body.login, password: req.body.password }, (err, models) => {
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


console.log('[Auth Controller]', 'load routes');

module.exports = router;
