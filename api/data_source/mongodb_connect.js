const mongoose = require('mongoose');

const user = 'intern';
const password = 'intern';
const databaseName = 'test_design_playbook';
let url = `mongodb+srv://${user}:${password}@interlinkpracticecluster-vzihp.mongodb.net/${databaseName}?retryWrites=true`;

module.exports = function() {
  mongoose.connect(url, { useNewUrlParser: true})
    .then(() => {
      console.log('Connected successful')
    })
    .catch((err) => {
      throw err
    });
};


