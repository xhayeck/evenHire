angular.module('evenhire.appNewAcc', [])

  .controller('AppNewAccController', ['$scope', '$state','$http','Applicant', function ($scope, $state, $http, Applicant) {

    $scope.applicant = {};

    $scope.createAccount = function() {
      //send form data to the server at api/applicants/login
      Applicant.signup($scope.applicant)
        .then(function(data) {
          console.log('NEW USER is :', data);
          $state.go('allJobs');
      })
    };

  }]);

