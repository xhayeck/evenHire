//Controller for authentication
angular.module('evenhire.auth', [])

  .controller('AuthController', ['$scope','$state', 'Auth', function ($scope, $state, Auth) {
    $scope.logOut = function() {
      Auth.signOut();
      $state.go('home');
      console.log('signed out');
    };
}]);
