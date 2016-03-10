angular.module('evenhire.auth.factory', [])

  .factory('Auth',['$window', function ($window) {
    var auth = {}
      auth.signOut = function() {
        $window.localStorage.removeItem('evenhire');
      };

      auth.isAuth = function() {
        return !!window.localStorage.getItem('evenhire');
      };
    return auth;
  }]);
