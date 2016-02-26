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


var connRegister = {
  dbConnection: function(data, cb) {cb(null, {email: 'test@test'});}
};

describe('Register request test', function () {
  it('supertest', function(done) {
    var app = server(connRegister);
    request(app)
      .post('/api/register')
      .send({email: 'test@test', password: 'test'})
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        else {
          expect(res.body.email).toEqual('test@test');
        }
        done();
      });
  });
});
