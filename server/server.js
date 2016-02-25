'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var heartbeatEndpoint = require('./heartbeat_endpoint');
var logger = require('./logger');
var loginEndpoint = require('./login_endpoint');
var registerEndpoint = require('./register_endpoint');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var users = require('./users');

function setup(connection) {


  var app = express();
  app.use(logRequest);
  app.use(express.static(__dirname +'/../public'));
  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/heartbeat', heartbeatEndpoint(connection));
  app.post('/api/register', registerEndpoint(connection));
  app.post('/api/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) {
        logger.error(err);
        res.status(500).send(info);
      } else if (user) {
        logger.info(user);
        req.logIn(user, function (err) {
          if (err) return next(err);
          return res.status(200).json({
            email: user.email,
            id: user.id,
            status: user.status,
          });
        });
      } else {
        res.status(401).send(info);
      }
    })(req, res, next);
  });
  app.post('/api/log', function (req, res) {
    logger[req.body.level]({
      origin: 'FRONTEND',
      date: req.body.date,
      level: req.body.level,
      data: req.body.data,
    });
    res.status(200).json({});
  });

  passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  function (email, password, done) {
    users(connection, email, function (err, user) {
      if (err) {
        return done(err, false, 'Connection error');
      } else if (!user) {
        return done(null, false, 'Incorrect email');
      } else if (user.password !== password) {
        return done(null, false, 'Incorrect password');
      } else {
        return done(null, user);
      }
    });

    passport.serializeUser(function (user, cb) {
      cb(null, user.email);
    });

    passport.deserializeUser(function (email, done) {
      users.findUser(connection, email, function (err, user) {
        done(err, user);
      });
    });
  }));

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
