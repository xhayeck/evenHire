angular.module('evenhire.recLogin', [])

  .controller('RecLoginController', ['$scope','$state', '$http', 'Recruiter', function ($scope, $state, $http, Recruiter) {

    $scope.user = {};
    $scope.logIn = function() {
      Recruiter.login($scope.user)
      .then(function(data) {
        if (!(data.type)) {
          console.log('error!', data.data);
        } else {
          $window.localStorage.setItem('evenhireRecruiter', data.token);
          $state.go('recruiters');
        }
      });
    };
}]);
