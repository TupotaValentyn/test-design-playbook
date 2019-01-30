const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_CONNECTION_URL;

module.exports = () => {
  mongoose
    .connect(DATABASE_URL, { useNewUrlParser: true })
    .then(() => console.log(`[MongoDB Connect] Connect to database successful`))
    .catch((err) => {
      console.error('[MongoDB Connect] Connection error');
      throw err;
    });
};


