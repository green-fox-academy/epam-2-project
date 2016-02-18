"use strict";

angular.module("helloApp", ["log"])
  .controller("helloController", ["$scope", "logger", function($scope, korte) {
    $scope.hello = korte;
  }]);

angular.module("log", [])
  // .config(function() {})
  .factory("logger", function () {
		return {alma: function(param){console.log(param);}};
	});
