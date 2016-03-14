angular.module('evenhire.recruiters', [])


.controller('RecHomeController', ['$scope', '$state', 'Recruiter', 'Auth','$mdDialog','ngDialog', function ($scope, $state, Recruiter, Auth, $mdDialog, ngDialog) {
  $scope.newJob = {};
  $scope.JobApplicant = {};
  $scope.error;

  $scope.clickToOpen = function () {
    ngDialog.open({
      template: './components/recruiters/recHome/tabDialog.tmpl.html',
      controller: 'RecHomeController',
      className: 'ngdialog-theme-default'
    });
  };
  $scope.closeDialog = function () {
    ngDialog.close();
  };

  var currentUser = Auth.getCurrentUser();
  $scope.companyName = currentUser.name;
  $scope.getApplicants = function(jobId) {
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
        $state.go('recruiters');
        console.log('new job is', newJob);
      })
  };

}]);
