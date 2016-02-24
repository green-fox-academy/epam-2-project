'use strict';



var app = angular.module('register', ['log'])

app.factory('userFactory', function($http) {
    var user = {
      email: '',
      password: '' 
    };
    return {
      user: user
    };
  });

app.controller('RegistrationController', function($http, $state, logger, userFactory) {
    this.errMessage = 'sgerg';
    this.shown = false;
    this.user= {};
    var _this = this;

    this.addUser= function(response) {
      $http.post('/api/register', this.user).then(okCallback,errorCallback);
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