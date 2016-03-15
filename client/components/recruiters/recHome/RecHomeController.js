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
  $scope.companyEmail = currentUser.email;
  $scope.getApplicants = function(jobId) {
    Recruiter.grabApplicants(jobId)
      .then(function(data) {
        console.log(data);
        $scope.JobApplicant[jobId] = data;
      }, function() {
        $scope.error = 'Unable to get applicants';
      });
  };

  $scope.getJobs = function() {
    Recruiter.getPostedJobs()
      .then(function(data) {
      //sorting jobs by most recent, so need to reverse count array to match
      data.applicantCount.reverse();
      $scope.postedJobs = data;
    }, function() {
      $scope.error = 'unable to get jobs';
    });
  }();

  $scope.postJob = function() {
    Recruiter.postNewJob($scope.newJob)
      .then(function(newJob) {
        $state.reload();
        console.log('new job is', newJob);
      })
  };

  $scope.sendEmail = function(applicantEmail, jobTitle) {
    Recruiter.sendEmail(applicantEmail, jobTitle, $scope.companyName, $scope.companyEmail)
      .then(function(response) {
        alert(response.message);
      });
  };

}]);
