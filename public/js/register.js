'use strict';



angular.module('register', [])
  .controller('RegistrationController', function($http, $state) {
    this.user = {};
    this.addUser= function() {
      $http.post('/api/register', this.user).then(function(response) {
        this.okCallback = response;
        $state.go('home');
      },
      function(err) {
        this.errorCallback = err;
      });
    };
  });
