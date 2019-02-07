const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if(req.path === '/api/auth' || req.path === '/api/auth/generate' || req.originalUrl === '/api/auth' || req.originalUrl === '/api/auth/generate'){
    return next();
  }
  const authorization = req.get('Authorization');
  if (authorization && authorization.split) {
    [type, token] = authorization.split(' ');
    if (!token || type !== 'Bearer') {
      return res.status(403).send({message: 'Authorization type must be Bearer'});
    }
    jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
      if(err) {
        return res.status(403).send({ auth : 'false', message: 'Failed to authenticate token' });
      }
      req.user = decoded.user;
      req.access = decoded.access;
      req.token = token;
      return next();
    });
  } else {
    res.status(403).json({message: 'Authorization headers not found'})
  }
};
