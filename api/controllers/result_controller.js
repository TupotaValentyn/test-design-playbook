const Result = require('../models/result');
const Model = require('../models/model');
const User = require('../models/user');

function resultController(app) {
  app.route('/results/save').post((req, res) => {
    const models = req.body.models;
    const user = req.body.user;
    if (models.length !== 5) {
      res.status(422);
      res.send('Models must have 5 elements. Now length [' + models.length + "]");
    }
    /**/

    /**/
    const result = new Result({
      models: models,
      user: user
    });
    result.save()
      .then(() => {
        res.status(200);
        res.send('Data save successful');
      })
      .catch((err) => {
        res.status(500);
        res.send(err);
      });
  });
  console.log('[result_controller]', 'set route');
}

module.exports = resultController;
