'use strict';

describe('hello check', function () {

  beforeEach(module('helloApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('sayingHello', function () {
        it('should say hello', function () {
            var $scope = {};
            var controller = $controller('helloController', { $scope: $scope });
            expect($scope.hello).toBe('Hello');
        });
    });
});
