angular.module('evenhire.recruiters', [])


.controller('RecHomeController', ['$scope', '$state', 'Recruiter', 'Auth', function ($scope, $state, Recruiter, Auth) {
  $scope.newJob = {};
  $scope.JobApplicant = {};
  $scope.error;

  var currentUser = Auth.getCurrentUser();
  $scope.companyName = currentUser.name;
  $scope.getApplicants = function(jobId) {
    console.log('jobId: ', jobId);
    Recruiter.grabApplicants(jobId)
      .then(function(data) {
        $scope.JobApplicant[jobId] = data;
      }, function() {
        $scope.error = 'Unable to get applicants';
      });
  };

  $scope.getJobs = function() {
    Recruiter.getPostedJobs()
      .then(function(data) {
      $scope.postedJobs = data;

    }, function() {
      $scope.error = 'unable to get jobs';
    });
  }();

  $scope.postJob = function() {
    Recruiter.postNewJob($scope.newJob)
      .then(function(newJob) {
        console.log('new job is', newJob)
      });
  };

}]);
