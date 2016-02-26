'use strict';

var register = require('./register');
var logger = require('./logger');

function registerEndpoint(connection) {
  return function(req, res) {
    register(connection, req, function (err, result) {
      if (err)
      {
        logger.error(err);
        res.status(500).json({database_post_method_error: err.toString(),code: err.code});
      }
      else
      {
        res.status(200).json({email: req.body.email});
      }
    });
  };
}

module.exports = registerEndpoint;
