const router = require('express').Router();
const Applicants = require('../models/user');
const jwt = require('jsonwebtoken');
const mail = require('../mail/mailing');

router.post('/users/info', (req, res) => {
  const token = req.token;
  Applicants.findOne({ token: token }, {comment: 0, mark: 0})
    .then(user => {
      return res.send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
});

router.post('/users/token', (req, res) => {
  if (req.access !== 'admin') {
    return res.status(403).send('You do not have permission');
  }
  const token = jwt.sign({ user: req.body.email, access: 'user' }, process.env.JWT_PRIVATE_KEY, { expiresIn: 86400*7 });

  const user = new Applicants({
    surname: req.body.surname,
    first_name: req.body.first_name,
    second_name: req.body.second_name,
    email: req.body.email,
    token: token
  });
  user.save();

  res.send({ token: token });
});

router.post('/users/token/status', (req, res) => {
  const token = req.token;
  Applicants.findOne({ token: token }, { status: 1, _id: 0 }, (err, docs) => {
    if (err) {
      return res.status(500).send('Can not find token');
    }
    return res.send({status: docs.status});
  })
});

router.post('/users/token/send',async (req, res) => {
  const user = new Applicants({
    surname: req.body.surname,
    first_name: req.body.first_name,
    second_name: req.body.second_name,
    email: req.body.email,
  });
  try {
    await mail.invite(user, req.body.link);

    res.json({ message: 'Sent successfully' });
  } catch(e) {
    console.log(e);
  }

});

router.post('/users/token/deactivate', (req, res) => {
  const token = req.body.token;
  Applicants.findOneAndUpdate({ token: token }, { status: Applicants.STATUS_DEACTIVATED }, (err) => {
    if(err){
      return res.status(500).send(err);
    }
    res.send({message: 'Deactivated succesfully'});
  });
});

router.get('/users/token/all', (req, res) => {
  if (req.access !== 'admin') {
    return res.status(403).send('You do not have permission');
  }
  Applicants.find({ status: { $nin: [Applicants.STATUS_DEACTIVATED, Applicants.STATUS_EXPIRED, Applicants.STATUS_EVALUATED]}})
    .then((docs) => {
      docs.sort((a, b) => b.created - a.created);
      res.send(docs);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
});

router.post('/users/token/delete', (req, res) => {
  const token = req.body.token;
  Applicants.findOneAndUpdate({ token: token }, { status: Applicants.STATUS_DELETED }, (err) => {
    if(err){
      return res.status(500).send(err);
    }
    res.send({message: 'Deactivated succesfully'});
  });
});

console.log('[User Controller]', 'load routes');


module.exports = router;
