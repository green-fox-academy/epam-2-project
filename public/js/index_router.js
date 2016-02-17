   angular.module('uiRouter', ["ui.router"])
      .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/");
      
      $stateProvider
          .state('index', {
              url: "/",
              templateUrl: "index.html"
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
    