'use strict';

var app = angular.module('login', ['log', 'register'])

app.controller('LoginController', function($http, $state, logger, userFactory) {
  this.errMessage = '';
  this.shown = false;
  this.user= {};
  var _this = this;

  this.addUser= function(response) {
    $http.post('/api/login', this.user).then(okCallback,errorCallback);
  };

  function okCallback(response) {
    userFactory.email=response.data.email;
    $state.go('home');
  }

  function errorCallback(err) {
    logger.error(err);
    _this.errMessage = err.data;
    _this.shown = true;
  }
});
