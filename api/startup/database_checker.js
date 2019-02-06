const Model = require('./../models/model');
const Employer = require('./../models/employer');
const DataCreator = require('./../models/data_creator');
const fs = require('fs');
const path = require('path');

module.exports = () => {
  DataCreator.findOne({ first: true })
    .then((docs) => {
      // if (!docs) {
        // const dc = new DataCreator({
        //   first: true,
        //   time: new Date()
        // });
        // dc.save();
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
          const buffer = fs.readFileSync(path.resolve(__dirname + '/employers.json'), { encoding: 'UTF-8' });
          if (buffer) {
            const employers = JSON.parse(buffer);
            employers.forEach((employer) => {
              promises.push(Employer.findOneAndUpdate(
                { name: employer.name, login: employer.login, password: employer.password, email: employer.email, notify: employer['notify'] },
                { name: employer.name, login: employer.login, password: employer.password, email: employer.email, notify: employer['notify'] },
                { upsert: true }
                )
              )
            })
          }
          Promise.all(promises)
            .catch(err => {
              console.error(err);
            })
        });
      // }
    });
};

