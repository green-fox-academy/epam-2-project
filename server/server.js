'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var heartbeatEndpoint = require('./heartbeat_endpoint');
var logger = require('./logger');

function setup(connection) {
  var app = express();
  app.use(logRequest);
  app.use(express.static(__dirname +'/../public'));
  app.use(bodyParser.json());

  app.get('/heartbeat', heartbeatEndpoint(connection));
  app.post('/api/log', function (req, res) {
    logger[req.body.level]({
      origin: 'FRONTEND',
      date: req.body.date,
      level: req.body.level,
      data: req.body.data,
    });
    res.status(200).json({});
  });

  function logRequest(req, res, next) {
    var parts = {
      date:new Date(),
      method: req.method,
      URL: req.originalUrl,
    };
    logger.info(parts);
    next();
  }
  return app;
}

module.exports= setup;
