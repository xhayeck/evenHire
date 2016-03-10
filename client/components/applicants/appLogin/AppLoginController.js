angular.module('evenhire.appLogin', [])

  .controller('AppLoginController', ['$scope','$state','$http','Applicant', function ($scope, $state, $http, Applicant) {

    $scope.user = {};
    $scope.signIn = function() {
      //send form data to the server at api/applicants/signup
      Applicant.login($scope.user)
        .then(function(data) {
          console.log(data);
          $state.go('allJobs')
        });
    };

}]);
