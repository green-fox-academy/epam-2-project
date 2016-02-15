'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var port = require('./config.js').port;

var app = express();
app.use(logRequest);
app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, function () {
  console.log('Listening on port', port);
});

function logRequest(req, res, next) {
  var parts = [
    new Date(),
    req.method,
    req.originalUrl,
  ];
  console.log(parts);
  next();
}
