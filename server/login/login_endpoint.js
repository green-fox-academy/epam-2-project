'use strict';

var logger = require('../logger');
var passport = require('passport');




function loginEndpoint(connection) {
  return function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) {
        logger.console.error(err);
        res.status(500).send(info);
      } else if (user) {
        req.logIn(user, function (err) {
          if (err) {
            return next(err);
          }
          logger.info(user);
          return res.status(200).json({
            email: user.email,
            status: user.status,
          });
        });
      } else {
        logger.info(info)
        res.status(401).send(info);
      }
    })(req, res, next);
  };
}

module.exports = loginEndpoint;
