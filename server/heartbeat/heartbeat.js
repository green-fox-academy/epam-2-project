'use strict';

function test(connection, cb) {
  var query = 'SELECT ok FROM heartbeat;';
  connection.dbConnection(query, cb);
}

module.exports = test;
