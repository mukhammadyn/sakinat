const express = require('express');
const path = require('path');
const routes = require('../routes');

const app = express();
// view engine setup
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

module.exports = app;
