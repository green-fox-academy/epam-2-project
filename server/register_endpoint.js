'use strict';

var register = require('./register');
var logger = require('./logger');

function registerEndpoint(connection) {
  return function(req, res) {
    register(connection, req, function (err, result) {
      if (err)
      {
        logger.error(err);
        if (err.code === '23505'){
          res.status(500).json({errorMessage: 'This email already exists!'})
        } else{
          res.status(500).json({errorMessage: 'Database error. Please try again later.'});
        }
      }
      else
      {
        res.status(200).json({email: req.body.email});
      }
    });
  };
}

module.exports = registerEndpoint;
