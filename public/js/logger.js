'use strict';

var environmentLevel= whichLevel(FRONTEND_LOGGER_LEVEL);

function whichLevel(environment){
  return LEVELS.indexOf(environment);
}

angular.module('log', [])
  .factory('logger', ['$http', function($http) {
    function log(level, obj) {
      var data = {
        date: Date(),
        level: level,
        data: obj,
      };
      if (environmentLevel <= whichLevel(level)) {
        $http.post('/api/log', data).then();
        console.log(data);
      }
    }
    return {
      debug: function (object) {
        log('debug', object);
        },
      info: function (object ) {
          log('info', object);
        },
      warn: function (object) {
        log('warn', object);
        },
      error: function (object) {
          log('error', object);
        },
    };
}]);
