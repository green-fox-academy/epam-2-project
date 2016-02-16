'use strict';

var app = angular.module('helloApp', []);
app.controller('helloController', ['$scope', function($scope) {
    $scope.hello = 'Hello';
}]);
