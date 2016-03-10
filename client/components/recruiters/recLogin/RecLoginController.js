angular.module('evenhire.recLogin', [])

  .controller('RecLoginController', ['$scope','$state', '$http', 'Recruiter', '$window', function ($scope, $state, $http, Recruiter, $window) {

    $scope.user = {};
    $scope.logIn = function() {
      Recruiter.login($scope.user)
      .then(function(data) {
        if (!(data.type)) {
          console.log('error!', data.data);
        } else {
          $window.localStorage.setItem('evenhire', data.token);
          $state.go('recruiters');
        }
      });
    };
}]);
