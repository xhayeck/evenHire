angular.module('evenhire.recNewAcc', [])

  .controller('RecNewAccController', ['$scope', '$state', '$http', 'Recruiter', function ($scope, $state, $http, Recruiter) {

    $scope.recruiter = {};

    $scope.createRecAcc = function() {
      Recruiter.signup($scope.recruiter).
        then(function(data) {
          console.log('New recruiter id: ', data);
          $state.go('recruiters')
        });
    };


    // This function is used in conjunction with test example
    $scope.sum = function() {
      $scope.z = $scope.x + $scope.y;
    };


  }]);
