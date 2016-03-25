
angular.module('evenhire.allJobs', [])

  .controller('AllJobsController', ['$scope', '$state', 'Applicant', 'ngDialog', 'Auth', 'Home', function($scope, $state, Applicant, ngDialog, Auth, Home) {
    $scope.fetchedJobs = [];
    // Options for filling out forms
    $scope.cities = Home.cities;
    $scope.states = Home.states;
    $scope.careerLevels = Home.careerLevels;
    $scope.jobTypes = Home.jobTypes;
    $scope.industries = Home.industries;
    // Automatically hide the sidebar filter options
    $scope.citiesDropdownShown = true;
    $scope.jobTypeDropdownShown = true;
    $scope.careerLevelDropdownShown = true;
    $scope.industryDropdownShown = true;

    // These arrays will be populated wtih which boxes are checked in the sidebar filter
    $scope.jobTypeFilter = [];
    $scope.cityFilter = [];
    $scope.levelFilter = [];
    $scope.industryFilter = [];

    $scope.applied = {};

    $scope.clearAll = function() {
      $scope.cityFilter = [];
      $scope.levelFilter = [];
      $scope.jobTypeFilter = [];
      $scope.industryFilter = [];
    };

    $scope.closeDialog = function() {
      ngDialog.close();
    };

    $scope.duplicateApplication = function() {
      ngDialog.open({
        template: './components/applicants/allJobs/duplicateApplication.tmpl.html',
        controller: 'AllJobsController',
        className: 'ngdialog-theme-default',
        closeByDocument: true,
        scope: $scope
      });
    };

    $scope.exists = function(item, list) {
      return list.indexOf(item) > -1;
    };

    $scope.getAllJobs = function() {
      Applicant.allJobs()
        .then(function(data) {
          $scope.fetchedJobs = data;
        });
    }();

    $scope.onlyApplicantCanApply = function() {
      ngDialog.open({
        template: './components/applicants/allJobs/onlyApplicantCanApply.tmpl.html',
        controller: 'AllJobsController',
        className: 'ngdialog-theme-default',
        closeByDocument: true,
        scope: $scope
      });
    };

    $scope.currentUserType = Auth.getCurrentUserType();
    $scope.saveUpdate = function(loggedInUser, userType) {
      Auth.userUpdate(loggedInUser, userType)
      .then(function(data) {
        $scope.closeDialog();
        console.log('saveUpdate is:', data);
      });
    };

    $scope.submitApplication = function(job_id) {
      if(!Auth.getCurrentUserType()){
        console.log("You need to login");
        $state.go('appLogin');
      } else if (Auth.getCurrentUserType() === 'recruiter') {
        $scope.onlyApplicantCanApply();
        $state.go('appLogin');
      } else {
         Applicant.apply({job_id: job_id})
            .then(function(factoryResponse) {
              console.log("factoryResponse in alljobsController", factoryResponse);
              if(factoryResponse.toString() === 'false') {
                $scope.duplicateApplication();
              } else {
                $scope.thankYouName = factoryResponse.first_name;
                $scope.applied[job_id] = true;
              }
            });
      }
    };

    $scope.showAppInfo = function() {
      if(Auth.getCurrentUserType() !== 'applicant') {
        $state.go('appLogin');
      } else {
        $scope.loggedInUser = Auth.getCurrentUser();
        ngDialog.open({
          template: './components/applicants/allJobs/applicantProfile.tmpl.html',
          controller: 'AllJobsController',
          className: 'ngdialog-theme-default',
          closeByDocument: true,
          scope: $scope
        });
      }
    };

    $scope.toggle = function(item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      } else {
        list.push(item);
      }
    };
  }])
  .filter('sidebar', function($filter) {
      return function(jobs, filter) {
        var isFilterEmpty = true;
        //check to see if any checkboxes are checked
        angular.forEach(filter, function(filterStr) {
          //if any boxes are checked, our filterStr will be a string and the filter is not empty
          if (filterStr !== null && filterStr !== '') {
            isFilterEmpty = false;
          }
        });
        if (!isFilterEmpty) {
          //if any boxes are checked, we will need to filter by the various filter arrays
          var result = [];
        angular.forEach(jobs, function(job) {
          var isFound = false;
          //loop through columns of a particular job
          angular.forEach(job, function(term, key) {
            //term is value in job row, like SF or Part-time
            if (term !== null && !isFound) {
              //loop through the desired search array created from checkboxes
              if (filter.indexOf(term) > -1 && !isFound) {
                result.push(job);
                isFound = true;
              }
            }
          })
        });
        return result;
      }
      //if no boxes are checked, show all jobs
      return jobs;
    };
  });
