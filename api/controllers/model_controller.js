const Model = require('../models/model');

function modelController(app) {
  app.route('/model/all').get((req, res) => {
    Model.find({}, (err, models) => {
      if (err) {
        res.status(500);
        res.send(err);
        return;
      }
      let modelMap = [];

      models.forEach(function(model) {
        modelMap.push({ url: model.url, _id: model._id });
      });

      res.status(200);
      res.send(modelMap);
    })
  });
  console.log('[model_controller]', 'set route');
}

module.exports = modelController;
