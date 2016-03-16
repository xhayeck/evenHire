
angular.module('evenhire.allJobs', [])

  .controller('AllJobsController', ['$scope', '$state', 'Applicant', 'ngDialog', 'Auth', function ($scope, $state, Applicant, ngDialog, Auth) {
    $scope.fetchedJobs = [];
    $scope.jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Temporary', 'Commission'];
    $scope.jobTypeFilter = [];
    $scope.cityFilter = [];
    $scope.cities = ['San Francisco, CA', 'Los Angeles, CA', 'New York City, NY', 'Austin, TX', 'Seattle, WA', 'Chicago, IL'];

    $scope.getAllJobs = function() {
      Applicant.allJobs()
        .then(function(data) {
          console.log(data);
          $scope.fetchedJobs = data;
        });
    }();

    $scope.submitApplication = function(job_id) {
      Applicant.apply({job_id: job_id})
        .then(function(factoryResponse) {
          console.log("factoryResponse in alljobsController", factoryResponse);
          if(factoryResponse.status === 500){
            console.log("You need to login");
            $state.go('appLogin')
          } else if(factoryResponse.toString() === 'false') {
            alert("You already applied for that job")
          } else if(!factoryResponse) {
            alert("You need to be logged in as an applicant to apply for a job")
          } else {
            alert("Thanks for applying " + factoryResponse.first_name)
          }
      });
    };

    $scope.closeDialog = function () {
      ngDialog.close();
    };

    $scope.showAppInfo = function() {
      $scope.loggedInUser = Auth.getCurrentUser();
      console.log('currentUser:', $scope.loggedInUser)
      ngDialog.open({
        template: './components/applicants/allJobs/applicantHome.tmpl.html',
        controller: 'AllJobsController',
        className: 'ngdialog-theme-plain',
        closeByDocument: false,
        scope: $scope
      });
    };
    $scope.currentUserType = Auth.getCurrentUserType();
    $scope.saveUpdate = function(loggedInUser, userType) {
      console.log(loggedInUser, userType);
      Auth.userUpdate(loggedInUser, userType)
      .then(function(data) {
        console.log('saveUpdate is:', data);
      });
    };

    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      } else {
        list.push(item);
      }
      console.log('updated list is', list);
    };

    $scope.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };

}]);









