'use strict';

function register(connection, params, cb) {
    var query = 'INSERT INTO users (email, password) VALUES ('
    + '\'' + params.body.email + '\'' + ',' + '\'' + params.body.password + '\'' + ');';
    connection.dbConnection(query, cb);
}

module.exports = register;
