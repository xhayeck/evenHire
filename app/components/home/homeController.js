//Controller for home
angular.module('evenhire.home', [])

  .controller('homeController', ['$scope','$state', function ($scope, $state) {
    $scope.testFunc = function() {
      console.log('inside home controller');
    }
}]);