'use strict';

var pg = require('pg');
var url = require('./config.js').DATABASE_URL;
var logger = require('./logger');

function dbConnection(task, callback) {
  var data = {
    date: new Date(),
    query: task,
  };
  logger.info(data);
  pg.connect(url, function(err, client, done) {
    client.query(task, function(err, result) {
      done();
      callback(err, result);
    });
  });
}

module.exports = {
  dbConnection: dbConnection
};
