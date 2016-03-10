//Controller for home
angular.module('evenhire.home', [])

  .controller('HomeController', ['$scope','$state', 'Applicant', function ($scope, $state, Applicant) {
    $scope.testFunc = function() {
      console.log('inside home controller');
    };
    $scope.logOut = function() {
      Applicant.signOut();
      console.log('signed out');
      $state.go('appLogin');
    };
}]);
