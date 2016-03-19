angular.module('evenhire.recruiters', [])

.controller('RecHomeController', ['$scope', '$state', 'Recruiter', 'Auth','$mdDialog','ngDialog', 'Home', function($scope, $state, Recruiter, Auth, $mdDialog, ngDialog, Home) {
  $scope.newJob = {};
  // $scope.currentJobId = '';
  $scope.applicantsToView = [];
  var currentUser = Auth.getCurrentUser();
  $scope.companyName = currentUser.name;
  $scope.companyEmail = currentUser.email;

  // $scope.applicantToContact = {};
  $scope.contactMessage = 'We\'d like to schedule an interview!';
  $scope.states = Home.states;
  $scope.careerLevels = Home.careerLevels;
  $scope.jobTypes = Home.jobTypes;
  $scope.industries = Home.industries;

  $scope.newJobModal = function() {
    ngDialog.open({
      template: './components/recruiters/recHome/newJobDialog.tmpl.html',
      controller: 'RecHomeController',
      className: 'ngdialog-theme-default',
    });
  };
  $scope.closeDialog = function() {
    ngDialog.close();
  };

// <<<<<<< c5e231a640c1fc8b0e87672dac6be6c296118bc0
//   $scope.clickToOpenContact = function(applicantIndex, jobIndex) {
//     $scope.applicantToContact = $scope.JobApplicant[$scope.jobId][applicantIndex].email;
//     $scope.applicantIdNum = $scope.JobApplicant[$scope.jobId][applicantIndex].id;
// =======
  $scope.contactApplicantModal = function(applicantIndex) {
    $scope.emailOfApplicantToContact = $scope.applicantsToView[applicantIndex].email;
    $scope.interestedApplicant = $scope.applicantsToView[applicantIndex];
// >>>>>>> [feat] Factored out nested ng repeat in rec home
    ngDialog.open({
      template: './components/recruiters/recHome/contactDialog.tmpl.html',
      controller: 'RecHomeController',
      className: 'ngdialog-theme-default',
      scope: $scope
    });
  };

  $scope.getApplicants = function(jobId, jobObj) {
    Recruiter.grabApplicants(jobId)
      .then(function(data) {
        $scope.applicantsToView = data;
        $scope.currentJob = jobObj;
      }, function() {
        $scope.error = 'Unable to get applicants';
      });
  };

  $scope.getJobs = function() {
    Recruiter.getPostedJobs()
      .then(function(data) {
      //sorting jobs by most recent, so need to reverse count array to match
      data.applicantCount.reverse();
      data.results.reverse();
      $scope.postedJobs = data;
    }, function() {
      $scope.error = 'Unable to fetch jobs';
    });
  }();

  $scope.postJob = function() {
    Recruiter.postNewJob($scope.newJob)
      .then(function(newJob) {
        $state.reload();
        console.log('new job is', newJob);
      })
  };

  $scope.sendEmail = function() {
    var email = $scope.emailOfApplicantToContact;
    var jobTitle = $scope.currentJob.title;
    Recruiter.sendEmail(email, jobTitle, $scope.companyName, $scope.companyEmail, $scope.contactMessage)
      .then(function(response) {
        $scope.message = "Sent email";
        console.log(response);
        $scope.closeDialog();
      });
  };

  $scope.isInterested = function(applicantId) {
    Recruiter.isInterested(true, $scope.currentJob.id, applicantId)
      .then(function(response) {
        console.log(response);
      });
  };

  $scope.isNotInterested = function(applicantId) {
    Recruiter.isInterested(false, $scope.currentJob.id, applicantId)
      .then(function(response) {
        console.log(response);
      });
  };
}]);
