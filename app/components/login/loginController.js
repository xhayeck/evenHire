angular.module('evenhire.login', [])
  .controller('loginController', [$scope, function($scope) {
    $scope.user = {};
    $scope.signIn = function() {
      console.log('trying to sign in!');
    };
}]);
