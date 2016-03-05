angular.module('evenhire.recLogin', [])

  .controller('RecLoginController', ['$scope','$state', '$http', function ($scope, $state, $http) {

    $scope.user = {};
    $scope.signIn = function() {
      return $http({
        method: 'POST',
        url: 'api/recruiters/',
        data: $scope.user
      })
      .then(function(data) {
        console.log(data);
      });
    };
}]);
