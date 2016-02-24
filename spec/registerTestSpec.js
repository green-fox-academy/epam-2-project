'use strict';

var register = require('../server/register');


describe('user post test', function() {
  it('is respons array', function(done) {
    var psql = {};
    psql.dbConnection = function(task,cb) {
      cb(null, [{}]);
    };
    var params = {body: {email: 'test@test', password: 'test'}};
    register(psql, params, function(err, result) {
      expect(result.length).toBeGreaterThan(0);
      done();
    });
  });
});
