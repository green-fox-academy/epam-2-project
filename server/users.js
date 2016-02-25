'use strict';

function findUser(connection,email, cb) {
  var query = 'SELECT user_id, email, password, status FROM users WHERE email=\'' + email + '\';';
    connection.dbConnection(query, function (err, result) {
      if (err) {
        return cb(err);
      }
      var foundUser = result.rows[0];
      if (foundUser) {
        return cb(null, foundUser);
      }
      return cb(null, null);
    });
  }

  module.exports = findUser;
