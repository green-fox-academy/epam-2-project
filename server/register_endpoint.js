'use strict';

var register = require('./register');
var logger = require('./logger');

function registerEndpoint(connection) {
  return function(req, res) {
    register(connection, req, function (err, result) {
      if (err)
      {
         logger.error(err);
         res.status(500).json({error: err});
      }
      else
      {
         res.status(200).json(result.rows);
      }
    });
  };
}

module.exports = registerEndpoint;
