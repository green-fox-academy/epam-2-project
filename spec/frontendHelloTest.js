'use strict';

describe('logo name check', function () {

  beforeEach(module('interviewApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('saying company', function () {
        it('should say Epam', function () {
            var $scope = {};
            var controller = $controller('epamController', { $scope: $scope });
            expect($scope.logoname).toBe('Epam');
        });
    });
});
