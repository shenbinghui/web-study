// console.log('server/app.js');

var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();
var routers = require('./controller/index');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

routers(app);