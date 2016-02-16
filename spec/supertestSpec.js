'use strict';

var request = require('supertest');
var server = require('../server/server.js');

var connErr = {
  dbConnection: function(data, cb) {cb('test error', {rows: []});}
};

describe('Return users error', function () {
  it('supertest', function(done) {
    var app = server(connErr);
    request(app)
      .get('/heartbeat')
      .expect('Content-Type', /json/)
      .expect(500)
      .end(function (err, res) {
        if (err) throw err;
        done();
      });
  });
});
