'use strict';

var app = angular.module('interviewApp', ['ui.router','log']);
app.controller('epamController', ['$scope', 'logger', function($scope, logger) {
  logger.info('onload');
  $scope.logoname = 'Epam';
}]);



app.controller('RegistrationController', function($http, $state) {
  this.user = {};
  this.addUser= function() {
    $http.post('db/users/', this.user).then(function(response) {
      this.okCallback = response;
      $state.go('home');
    },
    function(err) {
      this.errorCallback = err;
    });
  };
});




app.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
          .state('index', {
              url: '/',
              templateUrl: 'templates/partial-main.html'
          })
          .state('registration', {
              url: '/register',
              templateUrl: 'templates/partial-register.html',
              controller: 'RegistrationController'
          })
          .state('login', {
              url: '/login',
              templateUrl: 'templates/partial-login.html'
          })
          .state('home', {
              url: '/home',
              templateUrl: 'templates/partial-home.html'
          });
      });
