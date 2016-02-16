'use strict';

var pg = require('pg');
var url = require('./config.js').DATABASE_URL;

function dbConnection(task, callback) {
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
