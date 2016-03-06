angular.module('evenhire.recNewAcc', [])

  .controller('RecNewAccController', ['$scope', '$state', '$http', function ($scope, $state, $http) {

    $scope.recruiter = {};

    $scope.createRecAcc = function() {
      console.log($scope.recruiter);
      return $http({
        method: 'POST',
        url: 'api/recruiters/signup',
        data: $scope.recruiter
      })
      .then(function(data) {
        console.log(data);
      });
    };

    /*
    This function is used in conjunction with test example
    $scope.sum = function() {
      $scope.z = $scope.x + $scope.y;
    };
    */

  }]);
