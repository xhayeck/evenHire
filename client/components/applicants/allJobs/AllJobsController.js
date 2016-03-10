
angular.module('evenhire.allJobs', [])

  .controller('AllJobsController', ['$scope', '$state', 'Applicant', function ($scope, $state, Applicant) {
    $scope.fetchedJobs = [];

    $scope.getAllJobs = function() {
      Applicant.allJobs()
        .then(function(data) {
          $scope.fetchedJobs = data;
          console.log('data in alljobsController is', data);
        });
    };

    $scope.submitApplication = function() {
      var submissionObject = {
        jobs_id: 2,
        applicants_id: 2
      };
      Applicant.apply(submissionObject)
       .then(function(data) {
        console.log("inside AllJobsController data", data)
      });
    };
}]);

