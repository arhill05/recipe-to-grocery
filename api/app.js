const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const errorHandlers = require('./handlers/errorHandler');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);
app.use(errorHandlers.errorHandler)

module.exports = app;