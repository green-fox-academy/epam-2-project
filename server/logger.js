'use strict';

var environment = require('./config.js').BACKEND_LOGGER_LEVEL;
var levels = require('./config.js').levels;
var environmentLevel= wichLevel(environment);

function wichLevel(environment){
  for (var i = 0; i < levels.length; i++) {
    if (levels[i] === environment){
      return i;
    }
  }
}

function debug(object) {
  log('debug', object);
}

function info(object) {
  log('info', object);
}

function warn(object) {
  log('warn', object);
}

function error(object) {
  log('error', object);
}

function log(level,obj) {
  if (environmentLevel <= wichLevel(level)) {
    console.log(obj);
  }
}

module.exports= {
  debug: debug,
  info: info,
  warn: warn,
  error: error
};
