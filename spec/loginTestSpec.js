'use strict';

var loginEndpoint = require('../server/login/login_endpoint');


describe('Login endpoint test', function() {
  it('is respons array', function(done) {
      expect(typeof loginEndpoint).toBe('function');
      done();
  });
});
