'use strict';

var heartbeat = require('../server/heartbeat/heartbeat');

describe('test heartbeat', function() {
  it('is respons array', function(done) {
    var psql = {};
    psql.dbConnection = function(task,cb) {
      cb(null, [{}]);
    };
    heartbeat(psql,function(err, result) {
      expect(result.length).toBeGreaterThan(0);
      done();
    });
  });
});
