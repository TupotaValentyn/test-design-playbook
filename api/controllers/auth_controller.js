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
      res.send({ auth: 'true', token: token });
    } else {
      res.json({ auth: 'false', message: 'Failed to authenticate token ' });
    }
  })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post('/auth/register', (req,res) => {
  if (req.access !== 'admin') {
    return res.status(403).send('You do not have permission');
  }
  Employer.findOne({ $or: [{ login: req.body.login }, { email: req.body.email }] })
    .then(docs => {
      if (docs) throw 'Login or email already exists';
    })
    .then(() => {
      const employer = new Employer({
        name: req.body.name || 'Admin',
        login: req.body.login,
        password: req.body.password,
        email: req.body.email,
        notify: true
      });
      return employer.save();
    })
    .then(() => res.send({ message: 'Saved successfully' }))
    .catch(err => res.status(422).send(err));
});

router.post('/change/password', (req, res) => {
  if (req.access !== 'admin') {
    return res.status(403).send('You do not have permission');
  }
  const token = req.token;
  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
    if(err) {
      return res.status(500).send(err)
    }
    Employer.findOne({ login: decoded.user, password: req.body.password })
      .then((docs) => {
        if (docs === null) {
          throw 'Bad auth data';
        }
        return Employer.findOneAndUpdate({ login: decoded.user }, { password: req.body.newPassword })
      })
      .then(() => res.send({ message: 'Successfully updated '}))
      .catch(err => res.status(500).send(err))
  })
});

router.post('/change/email', (req, res) => {
  if (req.access !== 'admin') {
    return res.status(403).send('You do not have permission');
  }
  const token = req.token;
  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
    if(err) {
      return res.status(500).send(err)
    }
    Employer.findOne({ login: decoded.user })
      .then((docs) => {
        if (!docs) {
          throw 'Bad auth data';
        }
        return Employer.findOneAndUpdate({ login: decoded.user }, { email: req.body.email })
      })
      .then(() => res.send({ message: 'Successfully updated '}))
      .catch(err => res.status(500).send(err))
  })
});

router.post('/change/email', (req, res) => {
  if (req.access !== 'admin') {
    return res.status(403).send('You do not have permission');
  }
  const token = req.token;
  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
    if(err) {
      return res.status(500).send(err)
    }
    Employer.findOne({ login: decoded.user })
      .then((docs) => {
        if (!docs) {
          throw 'Bad auth data';
        }
        return Employer.findOneAndUpdate({ login: decoded.user }, { notify: req.body.notify })
      })
      .then(() => res.send({ message: 'Successfully updated '}))
      .catch(err => res.status(500).send(err))
  })
});

router.get('/employers/info', (req, res) => {
  if (req.access !== 'admin') {
    return res.status(403).send('You do not have permission');
  }
  const token = req.token;
  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
    if(err) {
      return res.status(500).send(err)
    }
    const login = decoded.user;
    Employer.findOne({ login: login }, { password: 0 , _id: 0 })
      .then((docs) => {
        if (!docs) {
          throw 'Can\'t get info';
        }
        res.send(docs);
      })
      .catch(err => res.status(500).send(err))
  })
});

console.log('[Auth Controller]', 'load routes');

module.exports = router;
