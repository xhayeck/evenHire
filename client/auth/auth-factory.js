angular.module('evenhire.auth.factory', [])

  .factory('Auth',['$window', '$state', function ($window, $state) {
    var auth = {}
      auth.signOut = function() {
        $window.localStorage.removeItem('evenhire');
        $state.go('home');
      };

      auth.isAuth = function() {
        return !!window.localStorage.getItem('evenhire');
      };
    return auth;
  }]);
