// server configuration
require('dotenv').config();
require('./environment_checker');

const PORT = process.env.PORT || 8000;

// create application
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const morgan = require('morgan');
console.log('[Server] Application start...');

// connect to database
require('./data_source/mongodb_connect')();
require('./startup/database_checker')();

// support json encoded bodies
const bodyParser = require('body-parser');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// filters
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.resolve(__dirname + './../dist/test-design-playbook/')));
app.use('/layouts', require('./middleware/layout_control_filter'));
app.use('/api/*', require('./middleware/auth_controll_filter'));

console.log('[Server] filters load');

// routes
app.use('', require('./controllers/lay_controller'));
app.use('/api', require('./controllers/auth_controller'));
app.use('/api', require('./controllers/result_controller'));
app.use('/api', require('./controllers/model_controller'));
app.use('/api', require('./controllers/user_controller'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + './../dist/test-design-playbook/index.html'));
});

// start
app.listen(PORT, () => {
  console.log('[Server] started');
  console.log(`[Server] listen port :${PORT}`);
});

