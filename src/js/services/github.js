;(function() {
  'use strict';
  var github = function($http) {

    var obj = {};
    obj.getUser =  function(username) {
      return $http.get('http://api.github.com/users/' + username)
        .then(function(response) {
          return response.data;
        });
    };

    obj.getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    return obj;
  };

  angular
    .module('githubViewer')
    .factory('github', ['$http', github]);
})();
