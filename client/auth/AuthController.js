//Controller for authentication
angular.module('evenhire.auth', [])

  .controller('AuthController', ['$scope','$state', 'Auth', function ($scope, $state, Auth) {
    $scope.logOut = function() {
      Auth.signOut();
      console.log('signed out');
      $state.go('appLogin');
    };
}]);
