'use strict';

var connection = require('./database_connection');
var server = require('./server')
var port = require('./config').port;

var app = server(connection);

app.listen(port, function () {
  console.log('Listening on port', port);
});
