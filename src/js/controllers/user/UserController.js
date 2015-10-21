;(function() {
  'use strict';
  var UserController = function($scope, github, $routeParams) {

    var handleError = function() {
      // console.log('Error....');
      $scope.error = 'Could not fetch the data';
    };

    github
      .getUser($routeParams.username)
      .then(function(user) {
        $scope.user = user;
        github
          .getRepos(user).then(function(repos) {
            $scope.repos = repos;
          }, handleError);
      }, handleError);

  };

  angular
    .module('githubViewer')
    .controller('UserController', ['$scope', 'github', '$routeParams', UserController]);
})();

