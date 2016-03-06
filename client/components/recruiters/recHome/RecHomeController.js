angular.module('evenhire.recruiters', [])


.controller('RecHomeController', ['$scope', '$state', 'Recruiter', function ($scope, $state, Recruiter) {
  var newJob = {};

  $scope.getJobs = function() {
    Recruiter.getPostedJobs();
  };

  $scope.postJob = function(newJob) {
    Recruiter.postNewJob(newJob);
  };

}]);
