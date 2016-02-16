'use strict';

var environment = require('./config.js').BACKEND_LEVEL;
console.log(environment);


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
  if (environment === 'debug') {
    console.log(obj);
  } else if(level === environment) {
    console.log(obj);
  }
}

module.exports= {
  debug: debug,
  info: info,
  warn: warn,
  error: error
}
