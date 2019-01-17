const mongoose = require('mongoose');

const LOGIN = 'intern';
const PASSWORD = 'intern';
const DATABASE_NAME = 'test_design_playbook';
const DATABASE_URL = `mongodb+srv://${LOGIN}:${PASSWORD}@interlinkpracticecluster-vzihp.mongodb.net/${DATABASE_NAME}?retryWrites=true`;

module.exports = () => {
  mongoose
    .connect(DATABASE_URL, { useNewUrlParser: true })
    .then(() => console.log(`[MongoDB Connect] Connect to ${DATABASE_NAME}`))
    .catch((err) => {
      console.error('[MongoDB Connect] Connection error');
      throw err;
    });
};


