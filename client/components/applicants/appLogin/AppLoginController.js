angular.module('evenhire.appLogin', [])

  .controller('AppLoginController', ['$scope','$state','$http','Applicant', '$window', function ($scope, $state, $http, Applicant, $window) {

    $scope.user = {};
    $scope.signIn = function() {
      //send form data to the server at api/applicants/signup
      Applicant.login($scope.user)
        .then(function(data) {
          $window.localStorage.setItem('evenhire', data.token);
          $state.go('allJobs')
        });
    };

}]);
