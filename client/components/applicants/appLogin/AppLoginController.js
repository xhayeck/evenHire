angular.module('evenhire.appLogin', [])

  .controller('AppLoginController', ['$scope', '$state', '$http', 'Applicant', '$window', 'Auth', function ($scope, $state, $http, Applicant, $window, Auth) {

    $scope.user = {};
    $scope.logIn = function() {
      //send form data to the server at api/applicants/signup
      Auth.login($scope.user, 'applicant')
        .then(function(data) {
          //if user is not authenticated
          if (data.status === 400) {
            console.log('error! ', data.data);
          } else {
            $window.localStorage.setItem('evenhire', data.token);
            $state.go('allJobs');
          }
        });
    };

}]);
