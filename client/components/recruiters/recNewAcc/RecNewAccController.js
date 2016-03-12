angular.module('evenhire.recNewAcc', [])

  .controller('RecNewAccController', ['$scope', '$state', '$http', 'Recruiter', '$window', 'Auth', function ($scope, $state, $http, Recruiter, $window, Auth) {

    $scope.recruiter = {};

    $scope.createRecAcc = function() {
      Auth.signUp($scope.recruiter, 'recruiter')
      .then(function(data) {
        if (!data.type) {
          console.log('User already exists', data.data);
        } else {
          $window.localStorage.setItem('evenhire', data.token);
          console.log('New recruiter id: ', data);
          $state.go('recruiters')
        }
        });
    };


    // This function is used in conjunction with test example
    $scope.sum = function() {
      $scope.z = $scope.x + $scope.y;
    };


  }]);
