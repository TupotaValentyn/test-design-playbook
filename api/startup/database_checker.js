const Model = require('./../models/model');
const DataCreator = require('./../models/data_creator');
const fs = require('fs');
const path = require('path');

module.exports = () => {
  DataCreator.findOne({ first: true })
    .then((docs) => {
      if (!docs) {
        const dc = new DataCreator({
          first: true,
          time: new Date()
        });
        dc.save();
        fs.readFile(path.resolve(__dirname + './../layouts/backup.json'), {encoding: 'UTF-8'}, (err, data) => {
          if (err) throw err;
          const promises = [];
          let models = JSON.parse(data);
          models.forEach((model) => {
            promises.push(Model.findOneAndUpdate(
              { url: model.url, mark: model.mark, name: model.name },
              { url: model.url, mark: model.mark, name: model.name },
              { upsert: true }
              )
            )
          });
          Promise.all(promises)
            .catch(err => {
              console.error(err);
            })
        });
      }
    });
};

