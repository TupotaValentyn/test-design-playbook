const jwt = require('jsonwebtoken');
const secret = require("../secret");

module.exports = (req, res, next) => {
  if(req.path === '/auth'){
    return next();
  }
  const token = req.get('Access-Token');
  if (!token) {
    return res.status(403).send('Not authorized');
  }
  jwt.verify(token, secret.key, (err, decoded) => {
    if(err) {
      return res.status(403).send({ auth : 'false', message: 'Failed to authenticate token ' });
    }
    req.user = decoded.user;
    req.access = decoded.access;
  });
  next();
};
