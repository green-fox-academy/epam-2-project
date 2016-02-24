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
    this.user= {};
    console.log(this.user);
    console.log(userFactory.user);
    this.addUser= function(response) {
      $http.post('/api/register', this.user).then(function(response) {
        console.log(response.data);
        userFactory.email=response.data;
        $state.go('home');
      }),
      function(err) {
        logger.error(err);
    };
  };
});




