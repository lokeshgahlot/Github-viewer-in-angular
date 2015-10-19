;(function() {
  'use strict';
  var app = angular.module('github-viewer', []);

  var MainController = function($scope) {
    $scope.someNumber = 1000;
  };

  app.controller('MainController', ['$scope', MainController]);

})();
