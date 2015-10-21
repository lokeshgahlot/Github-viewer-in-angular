;(function() {
  'use strict';

  var MainController = function($scope, $location) {
    $scope.username = 'angular';
    $scope.search = function(username) {
      $scope.someNumber = username;
      $location.path('/user/' + username);
    };
  };

  angular
    .module('githubViewer')
    .controller('MainController', ['$scope', '$location', MainController]);

})();
