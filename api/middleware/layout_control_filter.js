module.exports = (req, res, next) => {
  if (!req.cookies.token) {
    return res.send('Access denied')
  }
  next();
};
