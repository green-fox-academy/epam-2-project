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
    userFactory.email=response.data;
    $state.go('home');
  };

  function errorCallback(err) {
    logger.error(err);
    _this.errMessage = createMessage(err);
    _this.shown = true;
  };

});

function createMessage (message) {
  if (message.data.code === '23505') {
    return 'This email already exists!'
  } else {
    return 'Database error. Please try again later.'
  }
}
