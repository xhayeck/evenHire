
angular.module('evenhire.allJobs', [])

  .controller('AllJobsController', ['$scope', '$state', 'Applicant', function ($scope, $state, Applicant) {
    $scope.jobs = {
      uber : 'driver',
      google : 'front-end'
    }
    // $scope.applyForJob = function() {
    //   //write function to add user information to $scope.jobs object
    //   Applicant.apply($scope.jobs);
    // }

    $scope.getAllJobs = function() {
      Applicant.allJobs($scope.jobs);
    }

    $scope.submitApplication = function() {
      var submissionObject = {
        jobs_id: 2,
        applicants_id: 2
      }
      Applicant.apply(submissionObject)
       .then(function(data){
        console.log("inside AllJobsController data", data)
      });
    }
}]);

