'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var heartbeatEndpoint = require('./heartbeat_endpoint');
var logger = require('./logger');

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
    logger.info(parts);
    next();
  }
  return app;
}

module.exports= setup;
