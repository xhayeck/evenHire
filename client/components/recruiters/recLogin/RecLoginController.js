angular.module('evenhire.recLogin', [])

  .controller('RecLoginController', ['$scope','$state', function ($scope, $state) {

    $scope.user = {};
    $scope.signIn = function() {
      console.log('trying to sign in!');
    };
}]);
