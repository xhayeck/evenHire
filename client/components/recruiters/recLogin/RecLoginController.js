angular.module('evenhire.recLogin', [])

  .controller('RecLoginController', ['$scope','$state', '$http', 'Recruiter', function ($scope, $state, $http, Recruiter) {

    $scope.user = {};
    $scope.logIn = function() {
      Recruiter.login($scope.user);
    };
}]);
