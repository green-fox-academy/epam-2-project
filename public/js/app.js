'use strict';

var app = angular.module('interviewApp', ["ui.router"]);
app.controller('epamController', ['$scope', function($scope) {
    $scope.logoname = 'Epam';
}]);


app.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/");
      
      $stateProvider
          .state('index', {
              url: "/",
              templateUrl: "templates/partial-main.html"
          })
          .state('registration', {
              url: "/register",
              templateUrl: "templates/partial-register.html"
          })
          .state('login', {
              url: "/login",
              templateUrl: "templates/partial-login.html"
          })
      })