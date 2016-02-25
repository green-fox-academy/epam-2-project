'use strict';

var app = angular.module('register', ['log'])

app.factory('userFactory', function($http) {
    var user = {
      email: '',
      password: '',
      logged: false,
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
    userFactory.email=response.data;
    $state.go('home');
    userFactory.user.logged = true;
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

app.controller('homelogging', function($scope, userFactory) {
   $scope.email = userFactory.email;
});

app.controller('HomepageController', function($scope, $state, userFactory) {
    $scope.logged = userFactory.user.logged;

    $scope.logout = function() {
      $scope.logged = false;
      userFactory.user.logged = false;
      $state.go('index');
    }
});
