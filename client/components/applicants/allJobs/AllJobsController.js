
angular.module('evenhire.allJobs', [])

  .controller('AllJobsController', ['$scope', '$state', 'Applicant', function ($scope, $state, Applicant) {
    $scope.jobs = {
      uber : 'driver',
      google : 'front-end'
    }
    $scope.applyForJob = function() {
      //write function to add user information to $scope.jobs object
      Applicant.apply($scope.jobs);
    }

    // $scope.testFunc = function() {
    //   console.log('inside allJobs controller');
    // }
}]);

