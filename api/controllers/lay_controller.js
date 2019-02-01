const router = require('express').Router();
const path = require('path');

router.get('/layouts', (req, res) => {
  console.log(req.query.img);
  let imgPath = path.join(__dirname, `../layouts/${req.query.img}`);
  res.sendFile(imgPath);
})

module.exports = router;
