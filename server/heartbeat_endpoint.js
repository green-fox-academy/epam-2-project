'use strict';

var heartbeat = require('./heartbeat');

function test(connection) {
  return function(req, res) {
    heartbeat(connection, function (err, result) {
      if (err)
      {
         console.error(err);
         res.status(500).json({error: err});
      }
      else
      {
         res.status(200).json(result.rows);
      }
    });
  };
}

module.exports = test;
