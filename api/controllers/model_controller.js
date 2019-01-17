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
        modelMap.push({
          _id: model._id,
          url: model.url,
          comment: "",
          mark: false
        });
      });

      res.status(200);
      res.send(modelMap);
    })
  });
  console.log('[model_controller]', 'set route');
}

module.exports = modelController;
