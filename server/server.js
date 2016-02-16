'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var heartbeatEndpoint = require('./heartbeat_endpoint');

function setup(connection) {
  var app = express();
  app.use(logRequest);
  app.use(express.static('public'));
  app.use(bodyParser.json());

  app.get('/heartbeat', heartbeatEndpoint(connection));

  function logRequest(req, res, next) {
    var parts = [
      new Date(),
      req.method,
      req.originalUrl,
    ];
    console.log(parts);
    next();
  }
  return app;
}

module.exports= setup;
