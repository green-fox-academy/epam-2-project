'use strict';

var app = angular.module('home', ['log', 'register']);


app.controller('HomeLogging', function($scope, userFactory) {
   $scope.email = userFactory.email;
   $scope.logged = userFactory.user.logged;
});

app.controller('HomepageController', function($http, $scope, $state,logger, userFactory) {
   $scope.logout= function(response) {
     $http.post('/api/logout', userFactory.user ).then(okCallback,errorCallback);
   };

   function okCallback(response) {
    $state.go('index');
    console.log(response);
   };

   function errorCallback(err) {
     logger.error(err);
   };


});
