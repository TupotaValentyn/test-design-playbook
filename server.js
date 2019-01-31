// server configuration
require('dotenv').config();
require('./environment_checker');

const PORT = process.env.PORT || 8000;

// create application
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

console.log('[Server] Application start...');

// connect to database
require('./api/data_source/mongodb_connect')();

// support json encoded bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// filters

app.use(cors());
app.use(express.static(__dirname + '/dist/test-design-playbook/'));

app.use('/api/*', require('./api/middleware/auth_controll_filter'));

console.log('[Server] filters load');

// routes
app.use('/api', require('./api/controllers/auth_controller'));
app.use('/api', require('./api/controllers/result_controller'));
app.use('/api', require('./api/controllers/model_controller'));
app.use('/api', require('./api/controllers/user_controller'));

app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname + '/dist/test-design-playbook/index.html'));
});

// start
app.listen(PORT, () => {
  console.log('[Server] started');
  console.log(`[Server] listen port :${PORT}`);
});

