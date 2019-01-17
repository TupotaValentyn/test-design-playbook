const PORT = 8000;

const express = require('express');
const app = express();

const connect = require('./data_source/mongodb_connect');
connect();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

const Model = require('./models/model');
const User = require('./models/user');

const result_controller = require('./controllers/result_controller');
result_controller(app);

const model_controller = require('./controllers/model_controller');
model_controller(app);

app.listen(PORT, () => {
  console.log('Server started');
  console.log(`Server listen port [${PORT}]`);
});

