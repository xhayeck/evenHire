angular.module('evenhire.auth.factory', [])

  .factory('Auth',['$window', '$http', function ($window, $http) {
    var currentUser = null;
    var currentUserType = null;

    var auth = {}

      auth.isAuth = function() {
        return !!window.localStorage.getItem('evenhire');
      };

      auth.fetchUserFromJwt = function() {
        if (auth.isAuth()) {
        var jwtObj = {jwt: auth.getJwt()};
          return $http({
            method: 'POST',
            url: '/api/auth/fetch',
            data: jwtObj
          })
          .then(function(data) {
            var userType = data.data.userType;
            var userObject = data.data.user;
            auth.setUser(userObject, userType);
          }, function(err) {
            console.log('error in fetching jwt in auth-factory.js', err);
            return err;
          });
        }
      };

      auth.getCurrentUser = function() {
        return currentUser;
      };

      auth.getCurrentUserType = function() {
        return currentUserType;
      };

      auth.getJwt = function() {
        return window.localStorage.getItem('evenhire');
      };

      auth.setUser = function(user, userType) {
        currentUser = user;
        currentUserType = userType;
      };

      auth.signOut = function() {
        $window.localStorage.removeItem('evenhire');
        currentUser = null;
        currentUserType = null;
      };

    return auth;
  }]);
