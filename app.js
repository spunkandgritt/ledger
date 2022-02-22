const express = require('express');
const routes = require('./src/routes/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ledger');


app.use(bodyParser.json());
routes(app);

module.exports = app;