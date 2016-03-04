angular.module('evenhire.login', [])

  .controller('loginController', ['$scope','$state', function ($scope, $state) {

    $scope.user = {};
    $scope.signIn = function() {
      console.log('trying to sign in!');
    };
}]);
