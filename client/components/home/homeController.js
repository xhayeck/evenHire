//Controller for home
angular.module('evenhire.home', [])

  .controller('HomeController', ['$scope','$state', function ($scope, $state) {
    console.log('in home');
    $scope.testFunc = function() {
      console.log('inside home controller');
    };
}]);
