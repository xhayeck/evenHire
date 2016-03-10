angular.module('evenhire.appLogin', [])

  .controller('AppLoginController', ['$scope','$state','$http','Applicant', '$window', function ($scope, $state, $http, Applicant, $window) {

    $scope.user = {};
    $scope.logIn = function() {
      //send form data to the server at api/applicants/signup
      Applicant.login($scope.user)
        .then(function(data) {
          //if user is not authenticated
          if (!(data.type)) {
            console.log('error! ', data.data);
          } else {
            $window.localStorage.setItem('evenhireApplicant', data.token);
            $state.go('allJobs');
          }
        });
    };

}]);
