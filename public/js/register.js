'use strict';

var app = angular.module('register', ['log'])

app.factory('userFactory', function($http) {
    var user = {
      email: '',
      password: '',
      logged: true,
    };
    return {
      user: user
    };
  });

app.controller('RegistrationController', function($http, $state, logger, userFactory) {
    this.errMessage = '';
    this.shown = false;
    this.user= {};
    var _this = this;

    this.addUser= function(response) {
      $http.post('/api/register', this.user).then(okCallback,errorCallback);
  };

  function okCallback(response) {
    userFactory.email=response.data.email;
    $state.go('home');
    userFactory.user.logged = true;
  }

  function errorCallback(err) {
    logger.error(err);
    _this.errMessage = createMessage(err);
    _this.shown = true;
  }
});

function createMessage (message) {
    return message.data.errorMessage;
}

app.controller('homelogging', function($scope, userFactory) {
   $scope.email = userFactory.email;
});

app.controller('HomepageController', function($scope, $state, userFactory) {
   $scope.logged = userFactory.user.logged;
});
