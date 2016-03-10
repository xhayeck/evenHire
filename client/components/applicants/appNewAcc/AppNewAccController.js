angular.module('evenhire.appNewAcc', [])

  .controller('AppNewAccController', ['$scope', '$state','$http','Applicant','$window', function ($scope, $state, $http, Applicant, $window) {

    $scope.applicant = {};

    $scope.createAccount = function() {
      //send form data to the server at api/applicants/login
      Applicant.signup($scope.applicant)
        .then(function(data) {
          if (!data.type) {
            console.log('User alredy exist', data.data);
          } else {
            $window.localStorage.setItem('evenhire', data.token);
            console.log('NEW USER is :', data);
            $state.go('allJobs');
          }
      });
    };

  }]);

